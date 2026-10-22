import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiGlobe, FiPhone, FiMessageCircle } from 'react-icons/fi'
import { useLanguage } from '../../context/LanguageContext'
import { languageStrings } from '../../data/gymData'
import { Button } from '../ui/Button'

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const strings = languageStrings[t]

  const navLinks = [
    { path: '/', label: strings.nav.home },
    { path: '/about', label: strings.nav.about },
    { path: '/gallery', label: strings.nav.gallery },
    { path: '/contact', label: strings.nav.contact }
  ]

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'navbar-scrolled' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <nav className="container-custom" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2" aria-label="Empire The Gym Home">
              <motion.span
                className="font-heading text-2xl sm:text-3xl text-gym-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                EMPIRE
              </motion.span>
              <motion.div
                className="hidden sm:block w-px h-6 bg-gradient-to-b from-gym-red to-gym-gold"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
              <motion.span
                className="font-heading text-2xl sm:text-3xl text-gym-red"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                THE GYM
              </motion.span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-heading uppercase tracking-wider text-sm transition-colors ${
                    location.pathname === link.path 
                      ? 'text-gym-red' 
                      : 'text-gym-text-muted hover:text-gym-red'
                  }`}
                >
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.3, duration: 0.3 }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
              <motion.button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 bg-gym-card border border-gym-border rounded-lg text-gym-text-muted hover:text-gym-red hover:border-gym-red transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle language"
              >
                <FiGlobe className="w-4 h-4" />
                <span className="font-heading text-sm uppercase">{t === 'en' ? 'हिन्दी' : 'EN'}</span>
              </motion.button>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <motion.button
                onClick={toggleLanguage}
                className="p-2 bg-gym-card border border-gym-border rounded-lg text-gym-text-muted hover:text-gym-red transition-colors"
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle language"
              >
                <FiGlobe className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gym-text-muted hover:text-gym-red transition-colors"
                whileTap={{ scale: 0.9 }}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </nav>

<AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden bg-gym-card border-t border-gym-border py-6 px-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-heading uppercase tracking-wider text-lg py-3 text-gym-white-soft hover:text-gym-red transition-colors ${
                      location.pathname === link.path ? 'text-gym-red' : ''
                    }`}
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                ))}
                <motion.button
                  onClick={toggleLanguage}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gym-card border border-gym-border rounded-lg text-gym-white-soft hover:text-gym-red hover:border-gym-red transition-all font-heading text-sm uppercase"
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <FiGlobe className="w-5 h-5" />
                  <span>{t === 'en' ? 'हिन्दी' : 'EN'}</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 lg:hidden">
        <motion.a
          href={`tel:+919466709410`}
          className="btn-primary shadow-lg animate-pulse-glow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={strings.ui.callNow}
        >
          <FiPhone className="w-5 h-5 mr-2" />
          <span className="hidden sm:inline">{strings.ui.callNow}</span>
        </motion.a>
        <motion.a
          href={`https://wa.me/919466709410?text=${encodeURIComponent(strings.ui.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-heading uppercase text-sm shadow-lg flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={strings.ui.whatsapp}
        >
          <FiMessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">{strings.ui.whatsapp}</span>
        </motion.a>
      </div>
    </>
  )
}