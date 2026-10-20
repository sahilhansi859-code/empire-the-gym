import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

export function SectionHeading({ 
  title, 
  subtitle, 
  badge, 
  className = '', 
  align = 'center',
  animation = 'slide-up'
}) {
  const { t } = useLanguage()
  
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <motion.div
      className={`${alignments[align]} mb-12 lg:mb-16 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {badge && (
        <motion.span
          className="section-badge inline-block mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        className="heading-lg mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-body max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}