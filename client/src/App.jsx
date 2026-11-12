import { useState, useEffect, Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar, Footer, WhatsAppButton } from './components/layout'
import { Loader } from './components/ui'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const About = lazy(() => import('./pages/About'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))

function ChatbotWrapper() {
  const [showChatbot, setShowChatbot] = useState(false)
  const [Chatbot, setChatbot] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      import('./components/ui/Chatbot').then(module => {
        setChatbot(() => module.default)
      })
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!Chatbot) return null

  return <Chatbot />
}

function App() {
  const [showLoader, setShowLoader] = useState(true)
  const location = useLocation()

  if (showLoader) {
    return <Loader onComplete={() => setShowLoader(false)} />
  }

  return (
    <div className="min-h-screen bg-gym-black text-gym-white overflow-x-hidden max-w-full">
      <Navbar />

      <main id="main-content" className="pt-16 lg:pt-20">
        <Routes key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Suspense fallback={<Loader />}> <About /> </Suspense>} />
          <Route path="/gallery" element={<Suspense fallback={<Loader />}> <Gallery /> </Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<Loader />}> <Contact /> </Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      <WhatsAppButton />
      <ChatbotWrapper />
    </div>
  )
}

export default App