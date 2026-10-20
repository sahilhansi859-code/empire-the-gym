import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [animationDone, setAnimationDone] = useState(false)

  useEffect(() => {
    const duration = 2000
    const startTime = Date.now()
    
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progressValue = Math.min(elapsed / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progressValue, 3)
      
      setProgress(easedProgress * 100)
      
      if (progressValue < 1) {
        requestAnimationFrame(animate)
      } else {
        setAnimationDone(true)
      }
    }
    
    requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    if (animationDone) {
      const timer = setTimeout(() => {
        onComplete?.()
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [animationDone, onComplete])

  return (
    <motion.div
      className="fixed inset-0 bg-gym-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      role="status"
      aria-label="Loading"
    >
      <div className="text-center">
        <motion.div
          className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-gym-red to-gym-gold mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <motion.span
            className="font-heading text-3xl text-gym-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            E
          </motion.span>
        </motion.div>
        
        <motion.h1
          className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gym-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          EMPIRE THE GYM
        </motion.h1>
        
        <motion.p
          className="text-gym-red font-heading text-lg uppercase tracking-wider mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Be The Part Of An Epic Empire
        </motion.p>

        <motion.div
          className="w-64 h-2 bg-gym-border rounded-full overflow-hidden"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-gym-red to-gym-gold rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </motion.div>

        <motion.p
          className="mt-4 text-gym-white-soft text-sm font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Loading... {Math.round(progress)}%
        </motion.p>
      </div>
    </motion.div>
  )
}