import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { detectLanguage, instantAnswer, fallbackReply, PHONE, WHATSAPP_URL, TEL_URL } from '@shared/chatbotRules.js'

const API = '/api'

const uiStrings = {
  en: {
    greeting: 'Namaste! Welcome to Empire The Gym. How can I help you?',
    placeholder: 'Type your message...',
    send: 'Send',
    typing: 'typing...',
    title: 'Empire The Gym Chatbot'
  },
  hi: {
    greeting: 'नमस्ते! एम्पायर द जिम में आपका स्वागत है। मैं आपकी कैसे मदद कर सकता हूँ?',
    placeholder: 'अपना संदेश लिखें...',
    send: 'भेजें',
    typing: 'लिख रहा है...',
    title: 'एम्पायर द जिम चैटबॉट'
  }
}

export default function Chatbot() {
  const { language: siteLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const endRef = useRef(null)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  useEffect(() => {
    const strings = uiStrings[siteLang === 'hi' ? 'hi' : 'en']
    setMsgs([{ role: 'assistant', content: strings.greeting }])
  }, [siteLang])

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs, typing])

  function renderContent(content) {
    if (typeof content === 'string') return content
    const text = content?.text || ''
    const links = content?.links
    if (!links) return text
    return (
      <span>
        {text}{' '}
        <a href={links.tel} style={{ color:'#93c5fd', textDecoration:'underline' }}>Call</a>
        {' · '}
        <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" style={{ color:'#86efac', textDecoration:'underline' }}>WhatsApp</a>
      </span>
    )
  }

  const send = async (text) => {
    const m = text || input.trim()
    if (!m) return
    const next = [...msgs, { role: 'user', content: m }]
    setMsgs(next)
    setInput('')
    setTyping(true)
    try {
      // (1)-(3) client-side instant rules (offline)
      const detectedLang = detectLanguage(m)
      const quick = instantAnswer(m, detectedLang)
      if (quick) {
        setMsgs(prev => [...prev, { role: 'assistant', content: quick.links ? quick : (quick.text || quick) }])
        return
      }
      // (4) AI via server with same rules/knowledge
      const controller = new AbortController()
      const to = setTimeout(() => controller.abort(), 20000)
      const res = await fetch(`${API}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: next.map(x => ({ role: x.role, content: typeof x.content === 'string' ? x.content : (x.content?.text || '') })),
          lang: detectedLang
        }),
        signal: controller.signal
      })
      clearTimeout(to)
      const data = await res.json()
      const reply = data?.reply || fallbackReply(detectedLang)
      setMsgs(prev => [...prev, { role: 'assistant', content: reply }])
    } catch (e) {
      console.error('Chat error:', e)
      const detectedLang = detectLanguage(m)
      setMsgs(prev => [...prev, { role: 'assistant', content: fallbackReply(detectedLang) }])
    } finally { setTyping(false) }
  }

  const strings = uiStrings[siteLang === 'hi' ? 'hi' : 'en']

  return (
    <>
      <motion.button
        onClick={() => setOpen(o=>!o)}
        whileHover={{ scale: 1.05 }}
        style={{ position:'fixed', bottom: isMobile ? 20 : 24, right: isMobile ? 16 : 24, zIndex:9999, width: isMobile ? 64 : 100, height: isMobile ? 64 : 100, borderRadius:'50%', background:'transparent', border:'4px solid #f97316', padding: isMobile ? 2 : 4, cursor:'pointer', boxSizing:'border-box', display:'flex', alignItems:'center', justifyContent:'center' }}
        title={strings.title}
      >
        <img src="/chatbot-logo.webp" alt="Chatbot" style={{ width:'100%', height:'100%', objectFit:'contain', display:'block' }} />
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, y:40, scale:.9 }}
            animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:40, scale:.9 }}
            style={{ position:'fixed', bottom: isMobile ? 100 : 100, right: isMobile ? 16 : 24, zIndex:9999, width:'min(360px, calc(100vw - 32px))', height:480, background:'#111', borderRadius:16, display:'flex', flexDirection:'column', overflow:'hidden', border:'1px solid #333', boxShadow:'0 8px 40px rgba(0,0,0,.6)', fontFamily: "'Noto Sans Devanagari', 'Inter', system-ui, sans-serif" }}
          >
            <div style={{ padding:'12px 16px', background:'linear-gradient(135deg,#ef4444,#f97316)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <strong style={{ color:'#fff' }}>{strings.title}</strong>
              <button onClick={()=>setOpen(false)} style={{ background:'transparent', border:'none', color:'#fff', fontSize:20, cursor:'pointer' }}>✕</button>
            </div>
            <div style={{ flex:1, overflowY:'auto', padding:12, display:'flex', flexDirection:'column', gap:8 }}>
              {msgs.map((m,i) => (
                <div key={i} style={{ alignSelf: m.role==='user' ? 'flex-end' : 'flex-start', background: m.role==='user' ? 'linear-gradient(135deg,#ef4444,#f97316)' : '#222', color:'#fff', padding:'8px 12px', borderRadius:12, maxWidth:'85%', fontSize:14, whiteSpace:'pre-wrap', fontFamily: "'Noto Sans Devanagari', 'Inter', system-ui, sans-serif" }}>{renderContent(m.content)}</div>
              ))}
              {typing && <div style={{ alignSelf:'flex-start', color:'#aaa', fontSize:13, fontFamily: "'Noto Sans Devanagari', 'Inter', system-ui, sans-serif" }}>{strings.typing}</div>}
              <div ref={endRef} />
            </div>
            <div style={{ padding:8, display:'flex', gap:6, borderTop:'1px solid #333' }}>
              <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder={strings.placeholder} style={{ flex:1, padding:'8px 12px', borderRadius:8, border:'1px solid #444', background:'#1a1a1a', color:'#fff', fontFamily: "'Noto Sans Devanagari', 'Inter', system-ui, sans-serif" }} />
              <button onClick={()=>send()} style={{ padding:'8px 14px', borderRadius:8, border:'none', background:'linear-gradient(135deg,#ef4444,#f97316)', color:'#fff', cursor:'pointer', fontFamily: "'Noto Sans Devanagari', 'Inter', system-ui, sans-serif" }}>{strings.send}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
