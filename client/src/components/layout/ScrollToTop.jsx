import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { FiChevronUp } from 'react-icons/fi'
import { useLanguage } from '../../context/LanguageContext'
import { languageStrings } from '../../data/gymData'

export function ScrollToTop() {
  const { t } = useLanguage()
  const strings = languageStrings[t]
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-30 w-12 h-12 rounded-full bg-gym-red text-white flex items-center justify-center shadow-lg opacity-0 pointer-events-none lg:hidden"
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      aria-label={t === 'en' ? 'Scroll to top' : 'ऊपर स्क्रॉल करें'}
      animate={{ opacity: 1, pointerEvents: 'auto' }}
    >
      <FiChevronUp className="w-6 h-6" />
    </motion.button>
  )
}