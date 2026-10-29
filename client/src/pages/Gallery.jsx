import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar, FiFilter, FiSearch, FiChevronLeft, FiChevronRight, FiX, FiMaximize2 } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { gymData, languageStrings } from '../data/gymData'
import { SectionHeading, Button } from '../components/ui'
import { Lightbox } from '../components/ui/Lightbox'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'equipment', label: 'Equipment' },
  { id: 'workouts', label: 'Workouts' },
  { id: 'training', label: 'Training' },
  { id: 'members', label: 'Members' }
]

export default function Gallery() {
  const { t } = useLanguage()
  const strings = languageStrings[t]
  const data = gymData[t]

  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const getCategoryId = (image) => (
    gymData.en.gallery.find(({ id }) => id === image.id)?.category.toLowerCase()
  )

  const filteredImages = activeCategory === 'all'
    ? data.gallery
    : data.gallery.filter(image => getCategoryId(image) === activeCategory)

  const handleImageClick = useCallback((index) => {
    const image = filteredImages[index]
    const globalIndex = data.gallery.findIndex(img => img.id === image.id)
    setLightboxIndex(globalIndex)
    setLightboxOpen(true)
  }, [filteredImages])

  const handleLightboxNavigate = useCallback((newIndex) => {
    const image = data.gallery[newIndex]
    const filteredIndex = filteredImages.findIndex(img => img.id === image.id)
    if (filteredIndex !== -1) {
      setLightboxIndex(newIndex)
    }
  }, [filteredImages])

  const categoryLabels = {
    all: strings.gallery.filterAll,
    equipment: strings.gallery.filterEquipment,
    workouts: strings.gallery.filterWorkouts,
    training: strings.gallery.filterTraining,
    members: strings.gallery.filterMembers
  }

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden isolate" aria-labelledby="gallery-hero-heading">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={data.heroImages.gallery}
            alt=""
            className="w-full h-full object-cover scale-105"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1.02 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            aria-hidden="true"
          />
        </div>

        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/55 via-black/30 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/55 via-transparent to-black/10" aria-hidden="true" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_68%_48%,rgba(230,57,70,0.12),transparent_48%)]" aria-hidden="true" />

        <div className="container-custom relative z-10 py-24 text-center sm:py-28">
          <motion.div
            className="mx-auto max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 inline-flex items-center justify-center gap-3 font-heading text-base font-bold uppercase tracking-[0.3em] text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:mb-6 sm:gap-4 sm:text-xl">
              <FiStar className="h-6 w-6 fill-white text-white sm:h-8 sm:w-8" aria-hidden="true" />
              EMPIRE THE GYM
              <FiStar className="h-6 w-6 fill-white text-white sm:h-8 sm:w-8" aria-hidden="true" />
            </p>
            <motion.h1
              id="gallery-hero-heading"
              className="font-heading text-[clamp(3.25rem,10vw,7.5rem)] font-black uppercase leading-[0.92] tracking-[-0.045em] text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.7)]"
            >
              <span className="block">BUILD YOUR</span>
              <span className="mt-2 block bg-gradient-to-r from-white via-white to-gym-red-light bg-clip-text text-transparent">EMPIRE</span>
            </motion.h1>
            <p className="mt-6 font-heading text-lg font-bold uppercase tracking-[0.25em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:mt-8 sm:text-2xl">
              {t === 'en' ? 'Gallery' : 'गैलरी'}
            </p>
          </motion.div>
        </div>
      </section>

      <section id="gallery" className="section-padding" aria-labelledby="gallery-heading">
        <div className="container-custom">
          <SectionHeading
            title={strings.gallery.title}
            subtitle={t === 'en'
              ? 'Filter by category to explore different aspects of our gym.'
              : 'श्रेणी के अनुसार फ़िल्टर करके हमारे जिम के विभिन्न पहलुओं का अन्वेषण करें।'}
          />

          <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Gallery categories">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                role="tab"
                aria-selected={activeCategory === category.id}
                aria-controls={`gallery-panel-${category.id}`}
                id={`tab-${category.id}`}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-heading text-sm uppercase tracking-wider transition-all ${
                  activeCategory === category.id
                    ? 'bg-gym-red text-gym-white shadow-[0_0_20px_rgba(230,57,70,0.4)]'
                    : 'bg-gym-card border border-gym-border text-gym-white-soft hover:text-gym-red hover:border-gym-red'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categories.indexOf(category) * 0.05 }}
              >
                {categoryLabels[category.id] || category.label}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              id={`gallery-panel-${activeCategory}`}
              role="tabpanel"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-gym-red"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleImageClick(index)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${image.alt} in lightbox`}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleImageClick(index); } }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => { e.target.onerror = null; e.target.src = `/images/gallery/gallery-${image.id}.svg`; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gym-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="w-full flex items-center justify-between">
                      <span className="font-heading text-sm text-gym-white">{image.alt}</span>
                      <motion.div
                        className="w-8 h-8 rounded-full bg-gym-red flex items-center justify-center text-gym-white opacity-0 group-hover:opacity-100 translate-y-2 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FiSearch className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded text-xs font-heading uppercase tracking-wider ${
                      getCategoryId(image) === 'equipment' ? 'bg-red-500/20 text-red-400' :
                      getCategoryId(image) === 'workouts' ? 'bg-blue-500/20 text-blue-400' :
                      getCategoryId(image) === 'training' ? 'bg-green-500/20 text-green-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {image.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredImages.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <FiFilter className="w-16 h-16 text-gym-white-soft mx-auto mb-4" />
              <p className="text-gym-white-soft text-body">{t === 'en' ? 'No images in this category' : 'इस श्रेणी में कोई छवि नहीं'}</p>
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={data.gallery}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
            onNavigate={handleLightboxNavigate}
          />
        )}
      </AnimatePresence>
    </>
  )
}