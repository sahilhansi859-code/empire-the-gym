import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar, Footer, WhatsAppButton, ScrollToTop } from './components/layout'
import { Loader } from './components/ui'
import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const [showLoader, setShowLoader] = useState(true)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gym-black text-gym-white">
      {showLoader && <Loader onComplete={() => setShowLoader(false)} />}
      
      <Navbar />

      <main id="main-content" className="pt-16 lg:pt-20">
        <Routes key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}

export default App