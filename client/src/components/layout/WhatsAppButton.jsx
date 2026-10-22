import { motion } from 'framer-motion'
import { FiMessageCircle, FiPhone } from 'react-icons/fi'
import { gymData } from '../../data/gymData'
import { useLanguage } from '../../context/LanguageContext'
import { languageStrings } from '../../data/gymData'

export function WhatsAppButton() {
  const { t } = useLanguage()
  const strings = languageStrings[t]
  const phoneNumber = gymData.phoneClean
  const message = encodeURIComponent(strings.ui.whatsappMessage)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
  const phoneUrl = `tel:+${phoneNumber}`

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col-reverse gap-3 hidden lg:flex">
      <motion.a
        href={phoneUrl}
        className="btn-primary shadow-lg animate-pulse-glow group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={strings.ui.callNow}
      >
        <div className="flex items-center gap-2">
          <FiPhone className="w-5 h-5" />
          <span className="hidden sm:inline font-heading text-lg">{strings.ui.callNow}</span>
        </div>
      </motion.a>
      
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-heading text-lg uppercase tracking-wider shadow-lg group flex items-center gap-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={strings.ui.whatsapp}
      >
        <motion.div
          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiMessageCircle className="w-5 h-5" />
        </motion.div>
        <span className="hidden sm:inline">{strings.ui.whatsapp}</span>
      </motion.a>
    </div>
  )
}