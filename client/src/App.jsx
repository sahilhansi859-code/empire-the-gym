import { useState, Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar, Footer, WhatsAppButton, ScrollToTop } from './components/layout'
import { Loader } from './components/ui'
import Chatbot from './components/ui/Chatbot'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))
import NotFound from './pages/NotFound'

const RouteFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gym-black text-gym-white">
    <div className="flex flex-col items-center gap-3">
      <div className="w-12 h-12 border-4 border-gym-red/30 border-t-gym-red rounded-full animate-spin" />
      <span className="text-gym-gray text-body">Loading...</span>
    </div>
  </div>
)

function App() {
  const [showLoader, setShowLoader] = useState(false)
  const location = useLocation()

  if (showLoader) {
    return <Loader onComplete={() => setShowLoader(false)} />
  }

  return (
    <div className="min-h-screen bg-gym-black text-gym-white overflow-x-hidden max-w-full">
      <Navbar />
      <ScrollToTop />

      <main id="main-content" className="pt-16 lg:pt-20">
        <Suspense fallback={<RouteFallback />}>
          <Routes key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />

      <WhatsAppButton />
      <Chatbot />
    </div>
  )
}

export default App