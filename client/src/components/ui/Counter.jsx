import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

export function Counter({ 
  value, 
  label, 
  suffix = '', 
  prefix = '', 
  duration = 2000, 
  className = '',
  icon
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px', amount: 0.1 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      const startTime = Date.now()
      const targetValue = parseFloat(value.replace(/[^\d.]/g, ''))
      const isDecimal = value.includes('.')
      
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        const currentValue = targetValue * easedProgress
        
        if (isDecimal) {
          setCount(currentValue.toFixed(1))
        } else {
          setCount(Math.floor(currentValue))
        }
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(targetValue)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration])

  const displayValue = typeof value === 'string' && !/^\d/.test(value)
    ? value
    : `${prefix}${count}${suffix}`

  return (
    <motion.div
      ref={ref}
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      {icon && (
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gym-red/10 text-gym-red mb-4"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
        >
          {icon}
        </motion.div>
      )}
      <motion.div
        className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gym-white"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {displayValue}
      </motion.div>
      <motion.p
        className="mt-2 text-gym-white-soft font-body text-base sm:text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {label}
      </motion.p>
    </motion.div>
  )
}