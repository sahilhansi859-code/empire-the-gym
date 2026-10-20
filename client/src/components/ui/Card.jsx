import { motion } from 'framer-motion'

export function Card({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'p-6',
  border = true,
  ...props 
}) {
  const baseClasses = 'card-base'
  const hoverClasses = hover ? 'hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]' : ''
  const borderClasses = border ? 'border-gym-border' : 'border-transparent'

  return (
    <motion.div
      className={`${baseClasses} ${borderClasses} ${hoverClasses} ${padding} ${className}`}
      whileHover={hover ? { y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function CardHeader({ children, className = '' }) {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

export function CardTitle({ children, className = '', size = 'md' }) {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  }
  return <h3 className={`font-heading uppercase tracking-wide text-gym-white ${sizes[size]} ${className}`}>{children}</h3>
}

export function CardDescription({ children, className = '' }) {
  return <p className={`text-gym-white-soft leading-relaxed ${className}`}>{children}</p>
}

export function CardContent({ children, className = '' }) {
  return <div className={className}>{children}</div>
}

export function CardFooter({ children, className = '' }) {
  return <div className={`mt-4 pt-4 border-t border-gym-border ${className}`}>{children}</div>
}