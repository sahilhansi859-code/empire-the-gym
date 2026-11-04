import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

const API = '/api'

const HINDI_WORDS_ROMAN = /(kya|hai|hain|batao|bataiye|kaise|kab|kahan|karu|karein|chahiye|mujhe|aap|kitna|kitni|ka|ki|ke|ko|mein|nahi|ji|bhai|kya hai|bataiye|kaise join|timing|fees|pata)/i

function detectLanguage(lastMsg, prevMsgs, siteLang) {
  if (!lastMsg || typeof lastMsg !== 'string') return siteLang === 'hi' ? 'hi' : 'en'
  // if single ambiguous word and we have history, use previous
  const hasDevanagari = /[\u0900-\u097F]/.test(lastMsg)
  if (hasDevanagari) return 'hi'
  // check common hindi words in roman
  if (HINDI_WORDS_ROMAN.test(lastMsg.toLowerCase())) return 'hi'
  // ambiguous short words - if previous user message exists, try to infer? but we pass msgs
  // if no clear hindi markers, english
  return 'en'
}

const uiStrings = {
  en: {
    greeting: 'नमस्ते! एम्पायर द जिम',
    placeholder: 'Message...',
    send: 'Send',
    typing: 'typing...',
    chips: ['Timing kya hai?', 'Fees / Plans', 'Join kaise karein?'],
    fallback: "I can't answer right now, please call or WhatsApp +91 94667 09410.",
    title: 'एम्पायर द जिम चैटबॉट'
  },
  hi: {
    greeting: 'नमस्ते! एम्पायर द जिम',
    placeholder: 'संदेश लिखें...',
    send: 'भेजें',
    typing: 'टाइप कर रहा है...',
    chips: ['समय क्या है?', 'फीस कितनी है?', 'जॉइन कैसे करें?'],
    fallback: 'अभी जवाब नहीं दे पा रहा, कृपया +91 94667 09410 पर कॉल या वॉट्सऐप करें।',
    title: 'एम्पायर द जिम चैटबॉट'
  }
}
}

export default function Chatbot() {
  const { language: siteLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef(null)
  
  useEffect(() => {
    const strings = uiStrings[siteLang === 'hi' ? 'hi' : 'en']
    setMsgs([{ role: 'assistant', content: strings.greeting }])
  }, [siteLang])
  
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs, typing])

  const send = async (text) => {
    const m = text || input.trim()
    if (!m) return
    const next = [...msgs, { role: 'user', content: m }]
    setMsgs(next)
    setInput('')
    setTyping(true)
    try {
      const controller = new AbortController()
      const to = setTimeout(() => controller.abort(), 20000)
      // detect language from last user message, with fallback to site lang
      const userMsgs = next.filter(x => x.role === 'user')
      const lastUser = userMsgs[userMsgs.length - 1]?.content || m
      const detectedLang = detectLanguage(lastUser, userMsgs.slice(0, -1), siteLang)
      const res = await fetch(`${API}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: next.map(x => ({ role: x.role, content: x.content })),
          lang: detectedLang
        }),
        signal: controller.signal
      })
      clearTimeout(to)
      const data = await res.json()
      const strings = uiStrings[detectedLang === 'hi' ? 'hi' : 'en']
      const reply = data?.reply || strings.fallback
      setMsgs(prev => [...prev, { role: 'assistant', content: reply }])
    } catch (e) {
      console.error('Chat error:', e)
      const detectedLang = detectLanguage(m, [], siteLang)
      const strings = uiStrings[detectedLang === 'hi' ? 'hi' : 'en']
      setMsgs(prev => [...prev, { role: 'assistant', content: strings.fallback }])
    } finally { setTyping(false) }
  }

  const strings = uiStrings[siteLang === 'hi' ? 'hi' : 'en']
  const chips = strings.chips

  return (
    <>
      <motion.button
        onClick={() => setOpen(o=>!o)}
        whileHover={{ scale: 1.05 }}
        style={{ position:'fixed', bottom:204, left:24, zIndex:9999, width:48, height:48, borderRadius:'50%', background:'linear-gradient(135deg,#ef4444,#f97316)', border:'none', color:'#fff', fontSize:22, cursor:'pointer', boxShadow:'0 4px 20px rgba(0,0,0,.4)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily: "'Noto Sans Devanagari', 'Inter', system-ui, sans-serif" }}
        title={strings.title}
      >🤖</motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, y:40, scale:.9 }}
            animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:40, scale:.9 }}
            style={{ position:'fixed', bottom:90, left:24, zIndex:9999, width:'min(360px, calc(100vw - 32px))', height:480, background:'#111', borderRadius:16, display:'flex', flexDirection:'column', overflow:'hidden', border:'1px solid #333', boxShadow:'0 8px 40px rgba(0,0,0,.6)', fontFamily: "'Noto Sans Devanagari', 'Inter', system-ui, sans-serif" }}
          >
            <div style={{ padding:'12px 16px', background:'linear-gradient(135deg,#ef4444,#f97316)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <strong style={{ color:'#fff' }}>{strings.title}</strong>
              <button onClick={()=>setOpen(false)} style={{ background:'transparent', border:'none', color:'#fff', fontSize:20, cursor:'pointer' }}>✕</button>
            </div>
            <div style={{ flex:1, overflowY:'auto', padding:12, display:'flex', flexDirection:'column', gap:8 }}>
              {msgs.map((m,i) => (
                <div key={i} style={{ alignSelf: m.role==='user' ? 'flex-end' : 'flex-start', background: m.role==='user' ? 'linear-gradient(135deg,#ef4444,#f97316)' : '#222', color:'#fff', padding:'8px 12px', borderRadius:12, maxWidth:'85%', fontSize:14, whiteSpace:'pre-wrap', fontFamily: "'Noto Sans Devanagari', 'Inter', system-ui, sans-serif" }}>{m.content}</div>
              ))}
              {typing && <div style={{ alignSelf:'flex-start', color:'#aaa', fontSize:13, fontFamily: "'Noto Sans Devanagari', 'Inter', system-ui, sans-serif" }}>{strings.typing}</div>}
              <div ref={endRef} />
            </div>
            <div style={{ display:'none' }}></div>
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
