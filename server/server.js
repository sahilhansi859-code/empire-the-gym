import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import { body, validationResult } from 'express-validator'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001
const DATA_FILE = path.join(__dirname, 'data', 'enquiries.json')

app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}))

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
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

app.use(limiter)

function sanitizeInput(input) {
  if (typeof input !== 'string') return input
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim()
}

function validateEnquiry(data) {
  const errors = []
  
  if (!data.name || !data.name.trim()) {
    errors.push({ field: 'name', message: 'Name is required' })
  } else if (data.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' })
  } else if (data.name.trim().length > 100) {
    errors.push({ field: 'name', message: 'Name must be less than 100 characters' })
  }

  if (!data.phone || !data.phone.trim()) {
    errors.push({ field: 'phone', message: 'Phone number is required' })
  } else {
    const cleaned = data.phone.replace(/\D/g, '')
    if (cleaned.length !== 10 || !/^[6-9]\d{9}$/.test(cleaned)) {
      errors.push({ field: 'phone', message: 'Enter a valid 10-digit Indian phone number' })
    }
  }

  if (data.email && data.email.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email.trim())) {
      errors.push({ field: 'email', message: 'Enter a valid email address' })
    }
  }

  if (!data.interestedIn || !data.interestedIn.trim()) {
    errors.push({ field: 'interestedIn', message: 'Please select an option' })
  }

  if (!data.message || !data.message.trim()) {
    errors.push({ field: 'message', message: 'Message is required' })
  } else if (data.message.trim().length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters' })
  } else if (data.message.trim().length > 2000) {
    errors.push({ field: 'message', message: 'Message must be less than 2000 characters' })
  }

  return errors
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

app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const rawData = req.body
    
    const sanitizedData = {
      name: sanitizeInput(rawData.name),
      phone: sanitizeInput(rawData.phone),
      email: sanitizeInput(rawData.email),
      interestedIn: sanitizeInput(rawData.interestedIn),
      message: sanitizeInput(rawData.message)
    }

    const validationErrors = validateEnquiry(sanitizedData)
    
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      })
    }

    const enquiry = {
      id: Date.now().toString(),
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      ip: req.ip || req.connection.remoteAddress
    }

    const saved = saveEnquiry(enquiry)
    
    if (!saved) {
      return res.status(500).json({
        success: false,
        message: 'Failed to save enquiry. Please try again.'
      })
    }

    await sendEmail(enquiry)

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully! We\'ll get back to you soon.',
      data: { id: enquiry.id }
    })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({
      success: false,
      message: 'An error occurred. Please try again later.'
    })
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

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📝 API endpoint: http://localhost:${PORT}/api/contact`)
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health`)
})