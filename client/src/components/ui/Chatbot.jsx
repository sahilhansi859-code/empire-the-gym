import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const API = '/api'

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState([{ role: 'assistant', content: 'नमस्ते! एम्पायर द जिम' }])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef(null)
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
      const res = await fetch(`${API}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.map(x => ({ role: x.role, content: x.content })) }),
        signal: controller.signal
      })
      clearTimeout(to)
      const data = await res.json()
      const reply = data?.reply || 'Abhi jawab nahi aa paya, call karein +91 94667 09410'
      setMsgs(prev => [...prev, { role: 'assistant', content: reply }])
    } catch (e) {
      console.error('Chat error:', e)
      setMsgs(prev => [...prev, { role: 'assistant', content: 'Abhi jawab nahi aa paya, call karein +91 94667 09410' }])
    } finally { setTyping(false) }
  }

  const chips = ['Timing kya hai?', 'Fees / Plans', 'Join kaise karein?']

  return (
    <>
      <motion.button
        onClick={() => setOpen(o=>!o)}
        whileHover={{ scale: 1.05 }}
        style={{ position:'fixed', bottom:204, left:24, zIndex:9999, width:48, height:48, borderRadius:'50%', background:'linear-gradient(135deg,#ef4444,#f97316)', border:'none', color:'#fff', fontSize:22, cursor:'pointer', boxShadow:'0 4px 20px rgba(0,0,0,.4)', display:'flex', alignItems:'center', justifyContent:'center' }}
      title="Chatbot"
      >🤖</motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, y:40, scale:.9 }}
            animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:40, scale:.9 }}
            style={{ position:'fixed', bottom:90, left:24, zIndex:9999, width:'min(360px, calc(100vw - 32px))', height:480, background:'#111', borderRadius:16, display:'flex', flexDirection:'column', overflow:'hidden', border:'1px solid #333', boxShadow:'0 8px 40px rgba(0,0,0,.6)' }}
          >
            <div style={{ padding:'12px 16px', background:'linear-gradient(135deg,#ef4444,#f97316)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <strong style={{ color:'#fff' }}>Empire The Gym Chatbot</strong>
              <button onClick={()=>setOpen(false)} style={{ background:'transparent', border:'none', color:'#fff', fontSize:20, cursor:'pointer' }}>✕</button>
            </div>
            <div style={{ flex:1, overflowY:'auto', padding:12, display:'flex', flexDirection:'column', gap:8 }}>
              {msgs.map((m,i) => (
                <div key={i} style={{ alignSelf: m.role==='user' ? 'flex-end' : 'flex-start', background: m.role==='user' ? 'linear-gradient(135deg,#ef4444,#f97316)' : '#222', color:'#fff', padding:'8px 12px', borderRadius:12, maxWidth:'85%', fontSize:14, whiteSpace:'pre-wrap' }}>{m.content}</div>
              ))}
              {typing && <div style={{ alignSelf:'flex-start', color:'#aaa', fontSize:13 }}>typing...</div>}
              <div ref={endRef} />
            </div>
            <div style={{ padding:8, display:'flex', gap:6, borderTop:'1px solid #333' }}>
              <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="Message..." style={{ flex:1, padding:'8px 12px', borderRadius:8, border:'1px solid #444', background:'#1a1a1a', color:'#fff' }} />
              <button onClick={()=>send()} style={{ padding:'8px 14px', borderRadius:8, border:'none', background:'linear-gradient(135deg,#ef4444,#f97316)', color:'#fff', cursor:'pointer' }}>Send</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
