import { motion } from 'framer-motion'
import { FiLoader } from 'react-icons/fi'
import { useLanguage } from '../../context/LanguageContext'
import { languageStrings } from '../../data/gymData'

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false, 
  loading = false,
  onClick,
  ...props 
}) {
  const { t } = useLanguage()
  const strings = languageStrings[t]
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    gold: 'btn-gold'
  }
  
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-8 py-4 text-lg',
    lg: 'px-10 py-5 text-xl'
  }

  return (
    <motion.button
      className={`${variants[variant]} ${sizes[size]} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
      whileTap={{ scale: 0.98 }}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <motion.div
          className="flex items-center gap-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <FiLoader className="w-5 h-5" />
          <span>{strings.ui.loading}</span>
        </motion.div>
      ) : (
        children
      )}
    </motion.button>
  )
}