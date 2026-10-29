import { motion } from 'framer-motion'
import { FiPhone } from 'react-icons/fi'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { gymData } from '../../data/gymData'
import { useLanguage } from '../../context/LanguageContext'
import { languageStrings } from '../../data/gymData'

export function WhatsAppButton() {
  const { t } = useLanguage()
  const strings = languageStrings[t]
  const phoneNumber = gymData[t].phoneClean
  const message = encodeURIComponent(strings.ui.whatsappMessage)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
  const phoneUrl = `tel:+${phoneNumber}`
  const linkClass = 'flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gym-black'

  return (
    <div className="fixed bottom-6 left-4 z-40 flex flex-col gap-3 sm:left-6">
      <motion.a
        href={phoneUrl}
        className={`${linkClass} bg-gym-red hover:bg-gym-red-light`}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`${strings.ui.callNow}: ${gymData[t].phone}`}
        title={`${strings.ui.callNow}: ${gymData[t].phone}`}
      >
        <FiPhone className="h-5 w-5" />
      </motion.a>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkClass} bg-green-600 hover:bg-green-700`}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label={strings.ui.whatsapp}
        title={strings.ui.whatsapp}
      >
        <FaWhatsapp className="h-5 w-5" />
      </motion.a>

      <motion.a
        href={gymData[t].social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkClass} bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:brightness-110`}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Instagram"
        title="Instagram"
      >
        <FaInstagram className="h-5 w-5" />
      </motion.a>
    </div>
  )
}