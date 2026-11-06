import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import { detectLanguage, instantAnswer, buildSystemPrompt, fallbackReply } from './data/chatbotRules.shared.js'

// dotenv is optional in production; do not require .env file
try {
  dotenv.config()
} catch (e) {
  // ignore
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001
const DATA_FILE = path.join(__dirname, 'data', 'enquiries.json')

app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}))

app.use(cors({
  origin: [process.env.FRONTEND_URL, 'http://localhost:5173'].filter(Boolean),
  credentials: true
}))

app.use(express.json({ limit: '10kb' }))

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false
})

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: 'Too many contact form submissions, please try again later.'
  }
})

const chatLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  message: { success: false, reply: fallbackReply('hi') }
})

app.use(limiter)

function sanitizeInput(input) {
  if (typeof input !== 'string') return input
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim()
}

function saveEnquiry(enquiry) {
  let enquiries = []
  
  try {
    if (fs.existsSync(DATA_FILE)) {
      const fileData = fs.readFileSync(DATA_FILE, 'utf-8')
      enquiries = JSON.parse(fileData)
    }
  } catch (error) {
    console.error('Error reading enquiries file:', error)
    enquiries = []
  }

  enquiries.unshift(enquiry)

  if (enquiries.length > 1000) {
    enquiries = enquiries.slice(0, 1000)
  }

  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(enquiries, null, 2))
    return true
  } catch (error) {
    console.error('Error writing enquiries file:', error)
    return false
  }
}

async function sendEmail(enquiry) {
  const nodemailer = await import('nodemailer')
  
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('Email not configured, skipping email send')
    return false
  }

  const transporter = nodemailer.default.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
    subject: `New Enquiry from ${enquiry.name} - Empire The Gym`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${enquiry.name}</p>
      <p><strong>Phone:</strong> ${enquiry.phone}</p>
      <p><strong>Email:</strong> ${enquiry.email || 'Not provided'}</p>
      <p><strong>Interested In:</strong> ${enquiry.interestedIn}</p>
      <p><strong>Message:</strong></p>
      <p>${enquiry.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Submitted at: ${new Date(enquiry.timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</small></p>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return true
  } catch (error) {
    console.error('Email send error:', error)
    return false
  }
}

let cachedModels = []
let lastModelFetch = 0
const MODEL_CACHE_TTL = 60 * 60 * 1000
let workingModel = null

function isActiveChatModel(m) {
  if (!m) return false
  const id = String(m.id || '').toLowerCase()
  const obj = String(m.object || '').toLowerCase()
  if (id.includes('whisper') || id.includes('tts') || id.includes('orpheus') || id.includes('guard') || id.includes('embed') || obj.includes('embedding')) return false
  return true
}

async function fetchGroqModels() {
  const groqKey = process.env.GROQ_API_KEY
  if (!groqKey) return []
  try {
    const resp = await fetch('https://api.groq.com/openai/v1/models', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${groqKey}`,
        'Content-Type': 'application/json'
      }
    })
    if (!resp.ok) {
      console.error('Groq models fetch status:', resp.status)
      const errText = await resp.text()
      console.error('Groq models fetch error:', errText)
      return []
    }
    const data = await resp.json()
    const models = Array.isArray(data?.data) ? data.data : []
    return models.filter(isActiveChatModel)
  } catch (e) {
    console.error('Groq models fetch exception:', e?.message || e)
    return []
  }
}

async function getModelList(force = false) {
  const now = Date.now()
  if (!force && cachedModels.length > 0 && (now - lastModelFetch) < MODEL_CACHE_TTL) {
    return cachedModels
  }
  cachedModels = await fetchGroqModels()
  lastModelFetch = now
  return cachedModels
}

function selectModel(models) {
  if (!Array.isArray(models) || models.length === 0) return null
  const ids = models.map(m => m.id)
  if (ids.includes('openai/gpt-oss-20b')) return 'openai/gpt-oss-20b'
  if (ids.includes('openai/gpt-oss-120b')) return 'openai/gpt-oss-120b'
  return ids[0] || null
}

async function ensureModel() {
  if (workingModel) return workingModel
  const models = await getModelList()
  let candidate = selectModel(models)
  if (!candidate && models.length > 0) candidate = models[0].id
  if (candidate) {
    workingModel = candidate
    console.log('Groq model chosen:', candidate)
    return workingModel
  }
  return null
}

async function tryChatCompletion(messagesToSend, groqKey) {
  const models = await getModelList()
  const candidates = []
  if (workingModel) candidates.push(workingModel)
  if (models.some(m => m.id === 'openai/gpt-oss-20b')) candidates.push('openai/gpt-oss-20b')
  if (models.some(m => m.id === 'openai/gpt-oss-120b')) candidates.push('openai/gpt-oss-120b')
  for (const m of models) {
    if (!candidates.includes(m.id)) candidates.push(m.id)
  }
  const tried = new Set()
  for (const model of candidates) {
    if (tried.has(model)) continue
    tried.add(model)
    try {
      const isReasoning = model.includes('gpt-oss')
      const body = {
        model,
        messages: messagesToSend,
        temperature: 0.3,
      }
      if (isReasoning) {
        body.reasoning_effort = 'low'
        body.max_completion_tokens = 500
      } else {
        body.max_tokens = 256
      }
      const resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${groqKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      if (!resp.ok) {
        const errText = await resp.text()
        console.error('Groq error status:', resp.status)
        console.error('Groq error message:', errText)
        if (resp.status === 404 || resp.status === 400) {
          continue
        }
        continue
      }
      const data = await resp.json()
      let reply = data?.choices?.[0]?.message?.content || ''
      if (reply && reply.trim() !== '') {
        workingModel = model
        console.log('Groq model working:', model)
        return reply
      }
      continue
    } catch (e) {
      console.error('Groq chat exception:', e?.message || e)
      continue
    }
  }
  return null
}

app.post('/api/chat', chatLimiter, async (req, res) => {
  try {
    const { messages, lang } = req.body || {}
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ success: false, reply: 'Messages required' })
    }
    const userMsg = messages[messages.length - 1]?.content || ''
    if (typeof userMsg !== 'string' || userMsg.length > 500) {
      return res.status(400).json({ success: false, reply: 'Message too long (max 500 chars)' })
    }
    const detectedLang = lang === 'hi' || lang === 'en' ? lang : detectLanguage(userMsg)

    // Order: (1) fees, (2) trainers, (3) offline KB answers
    const quick = instantAnswer(userMsg, detectedLang)
    if (quick) {
      return res.json({ success: true, reply: quick.text || quick, links: quick.links })
    }

    // (4) AI with the same rules/knowledge
    const groqKey = process.env.GROQ_API_KEY
    if (!groqKey) {
      return res.json({ success: true, reply: fallbackReply(detectedLang) })
    }
    const systemPrompt = buildSystemPrompt(detectedLang)
    const history = messages.slice(-10).map(m => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: String(m.content || '').slice(0, 500)
    }))
    const messagesToSend = [
      { role: 'system', content: systemPrompt },
      ...history
    ]
    try {
      await ensureModel()
      const reply = await tryChatCompletion(messagesToSend, groqKey)
      if (reply && reply.trim() !== '') {
        return res.json({ success: true, reply })
      }
      return res.json({ success: false, reply: fallbackReply(detectedLang) })
    } catch (err) {
      console.error('Chat error:', err?.message || err)
      return res.json({ success: false, reply: fallbackReply(detectedLang) })
    }
  } catch (err) {
    console.error('Chat error:', err?.message || err)
    const detectedLang = detectLanguage(req.body?.messages?.[req.body.messages.length - 1]?.content || '')
    return res.json({ success: false, reply: fallbackReply(detectedLang) })
  }
})

app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  })
})

app.use((err, req, res, next) => {
  console.error('Server error:', err)
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  })
})

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  })
})

app.listen(PORT, async () => {
  console.log(`GROQ_API_KEY_PRESENT:${!!process.env.GROQ_API_KEY}`)
  try {
    await getModelList(true)
    await ensureModel()
  } catch (e) {
    // ignore
  }
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
