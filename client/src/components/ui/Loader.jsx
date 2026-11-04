import { motion } from 'framer-motion'
import { useEffect } from 'react'

export function Loader({ onComplete }) {
  useEffect(() => {
    const timer = window.setTimeout(() => onComplete?.(), 1000)
    return () => window.clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gym-black"
      role="status"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center">
        <motion.img
          src="/favicon.png"
          alt="Empire The Gym logo"
          className="h-[min(72vw,20rem)] w-[min(72vw,20rem)] object-contain"
          initial={{ opacity: 0.75, scale: 0.94 }}
          animate={{ opacity: [0.75, 1, 0.75], scale: [0.94, 1, 0.94] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="mt-4 flex items-center gap-2">
          <span className="font-heading text-2xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] sm:text-3xl lg:text-4xl">
            EMPIRE
          </span>
          <span className="hidden h-8 w-px bg-gradient-to-b from-gym-red to-gym-gold sm:block" />
          <span className="font-heading text-2xl text-gym-red sm:text-3xl lg:text-4xl">
            THE GYM
          </span>
        </div>
      </div>
    </motion.div>
  )
}