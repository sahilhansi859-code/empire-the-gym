import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiGlobe, FiPhone, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import { languageStrings, gymData } from '../../data/gymData'

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
  const { phoneClean, phone, social } = gymData[t]
  const whatsappLink = `https://wa.me/${phoneClean}?text=${encodeURIComponent(strings.ui.whatsappMessage)}`

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
            ? 'bg-gym-black/95 backdrop-blur-xl shadow-lg shadow-black/50 border-b border-gym-red/20'
            : 'bg-gym-black/85 backdrop-blur-md border-b border-gym-border/30'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <nav className="container-custom" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
            <Link to="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Empire The Gym Home">
              <motion.span
                className="font-heading text-xl sm:text-2xl lg:text-3xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
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
                className="font-heading text-xl sm:text-2xl lg:text-3xl text-gym-red"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                THE GYM
              </motion.span>
            </Link>

            <div className="hidden lg:flex items-center gap-5 xl:gap-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-heading uppercase tracking-widest text-sm xl:text-base font-semibold transition-colors whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] ${
                    location.pathname === link.path 
                      ? 'text-gym-red' 
                      : 'text-white hover:text-gym-red'
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

              <div className="flex items-center gap-2 ml-1">
                <motion.a
                  href={`tel:+${phoneClean}`}
                  className="flex items-center gap-2 px-3 py-2 bg-gym-red hover:bg-gym-red-light text-gym-white rounded-lg font-heading text-xs xl:text-sm tracking-wide transition-colors whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`${strings.ui.callNow}: ${phone}`}
                >
                  <FiPhone className="w-4 h-4" />
                  <span>{phone}</span>
                </motion.a>
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-heading text-xs xl:text-sm uppercase tracking-wide transition-colors whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={strings.ui.whatsapp}
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>{strings.ui.whatsapp}</span>
                </motion.a>
                <motion.a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-3 py-2 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:brightness-110 text-white rounded-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <FiInstagram className="w-5 h-5" />
                </motion.a>
              </div>

              <motion.button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 bg-gym-card border border-gym-border rounded-lg text-gym-white hover:text-gym-red hover:border-gym-red transition-all whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle language"
              >
                <FiGlobe className="w-4 h-4" />
                <span className="font-heading text-xs xl:text-sm uppercase">{t === 'en' ? 'HI' : 'EN'}</span>
              </motion.button>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <motion.button
                onClick={toggleLanguage}
                className="p-2 bg-gym-card border border-gym-border rounded-lg text-gym-white hover:text-gym-red transition-colors"
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle language"
              >
                <FiGlobe className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gym-white hover:text-gym-red transition-colors"
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
                    className={`font-heading uppercase tracking-wider text-lg py-3 text-gym-white hover:text-gym-red transition-colors ${
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

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <motion.a
                    href={`tel:+${phoneClean}`}
                    className="col-span-2 flex items-center justify-center gap-2 px-4 py-3 bg-gym-red hover:bg-gym-red-light text-gym-white rounded-lg font-heading text-sm tracking-wide transition-colors"
                    whileTap={{ scale: 0.98 }}
                    aria-label={`${strings.ui.callNow}: ${phone}`}
                  >
                    <FiPhone className="w-5 h-5" />
                    <span>{phone}</span>
                  </motion.a>
                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-heading text-sm uppercase tracking-wide transition-colors"
                    whileTap={{ scale: 0.98 }}
                    aria-label={strings.ui.whatsapp}
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>{strings.ui.whatsapp}</span>
                  </motion.a>
                  <motion.a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:brightness-110 text-white rounded-lg font-heading text-sm uppercase tracking-wide transition-all"
                    whileTap={{ scale: 0.98 }}
                    aria-label="Instagram"
                  >
                    <FiInstagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </motion.a>
                </div>

                <motion.button
                  onClick={toggleLanguage}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gym-card border border-gym-border rounded-lg text-gym-white hover:text-gym-red hover:border-gym-red transition-all font-heading text-sm uppercase"
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <FiGlobe className="w-5 h-5" />
                  <span>{t === 'en' ? 'HI' : 'EN'}</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}