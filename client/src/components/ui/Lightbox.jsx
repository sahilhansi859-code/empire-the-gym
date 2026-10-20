import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi'

export function Lightbox({ 
  images, 
  initialIndex, 
  onClose, 
  onNavigate 
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isLoading, setIsLoading] = useState(true)

  const currentImage = images[currentIndex]

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    if (currentImage) {
      setIsLoading(true)
      const img = new Image()
      img.onload = () => setIsLoading(false)
      img.src = currentImage.src
    }
  }, [currentImage])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') navigate(-1)
    if (e.key === 'ArrowRight') navigate(1)
  }, [onClose])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const navigate = (direction) => {
    const newIndex = (currentIndex + direction + images.length) % images.length
    setCurrentIndex(newIndex)
    onNavigate?.(newIndex)
  }

  if (!currentImage) return null

  return (
    <motion.div
      className="fixed inset-0 bg-gym-black/95 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <motion.button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-gym-card/80 backdrop-blur-sm border border-gym-border flex items-center justify-center text-gym-white hover:bg-gym-red hover:border-gym-red transition-all"
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Close lightbox"
      >
        <FiX className="w-6 h-6" />
      </motion.button>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="relative max-w-[90vw] max-h-[90vh]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {isLoading ? (
            <div className="w-[60vw] h-[60vh] min-w-[300px] min-h-[300px] flex items-center justify-center">
              <motion.div
                className="w-8 h-8 border-4 border-gym-red/30 border-t-gym-red rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          ) : (
            <motion.img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onLoad={() => setIsLoading(false)}
              onError={(e) => { e.target.onerror = null; e.target.src = currentImage.src.replace(".jpg", ".svg"); }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <motion.button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gym-card/80 backdrop-blur-sm border border-gym-border flex items-center justify-center text-gym-white hover:bg-gym-red hover:border-gym-red transition-all hidden md:flex"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous image"
          >
            <FiChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gym-card/80 backdrop-blur-sm border border-gym-border flex items-center justify-center text-gym-white hover:bg-gym-red hover:border-gym-red transition-all hidden md:flex"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next image"
          >
            <FiChevronRight className="w-6 h-6" />
          </motion.button>
        </>
      )}

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 py-2 bg-gym-card/80 backdrop-blur-sm border border-gym-border rounded-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.span className="text-gym-white-soft text-sm font-body">
          {currentIndex + 1} / {images.length}
        </motion.span>
        <motion.a
          href={currentImage.src}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-gym-red flex items-center justify-center text-gym-white hover:bg-gym-red-light transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Open full size"
        >
          <FiMaximize2 className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </motion.div>
  )
}