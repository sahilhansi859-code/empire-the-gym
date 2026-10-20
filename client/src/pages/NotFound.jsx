import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiHome, FiSearch, FiArrowLeft } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { languageStrings } from '../data/gymData'
import { Button } from '../components/ui'

export default function NotFound() {
  const { t } = useLanguage()
  const strings = languageStrings[t]

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-md mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div
          className="mb-8"
          animate={{ rotate: [0, -2, 2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="font-heading text-9xl sm:text-12xl lg:text-15xl text-gym-red/20">404</span>
        </motion.div>

        <motion.h1 className="heading-lg mb-4">
          {t === 'en' ? 'Page Not Found' : 'पेज नहीं मिला'}
        </motion.h1>

        <motion.p className="text-body text-xl mb-10">
          {t === 'en'
            ? 'Sorry, the page you\'re looking for doesn\'t exist or has been moved.'
            : 'क्षमा करें, आप जिस पेज को ढूंढ रहे हैं वह मौजूद नहीं है या स्थानांतरित हो गया है।'}
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
          >
            <Link to="/">
              <FiHome className="w-5 h-5 mr-2" />
              {t === 'en' ? 'Back to Home' : 'होम पर वापस जाएं'}
            </Link>
          </Button>
          <motion.button
            onClick={() => window.history.back()}
            className="btn-secondary px-8 py-4"
            whileTap={{ scale: 0.98 }}
          >
            <FiArrowLeft className="w-5 h-5 mr-2" />
            {t === 'en' ? 'Go Back' : 'वापस जाएं'}
          </motion.button>
        </motion.div>

        <motion.div className="mt-12 pt-8 border-t border-gym-border">
          <p className="text-gym-gray text-sm mb-4">
            {t === 'en' ? 'Popular pages:' : 'लोकप्रिय पेज:'}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { path: '/', label: strings.nav.home },
              { path: '/about', label: strings.nav.about },
              { path: '/gallery', label: strings.nav.gallery },
              { path: '/contact', label: strings.nav.contact }
            ].map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="text-gym-white-soft hover:text-gym-red transition-colors text-sm font-body px-3 py-1 rounded bg-gym-card border border-gym-border"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}