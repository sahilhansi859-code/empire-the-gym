import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiMapPin, FiPhone, FiStar, FiWatch } from 'react-icons/fi'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export function HeroContent({ data, strings, t, headingId }) {
  const headline = t === 'en' ? ['BUILD YOUR', 'EMPIRE'] : ['अपना', 'साम्राज्य बनाएं']

  return (
    <motion.div
      className="mx-auto max-w-5xl text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        className="mb-5 inline-flex items-center justify-center gap-3 font-heading text-base font-bold uppercase tracking-[0.3em] text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:mb-6 sm:gap-4 sm:text-xl"
        variants={itemVariants}
      >
        <FiStar className="h-6 w-6 fill-white text-white sm:h-8 sm:w-8" aria-hidden="true" />
        EMPIRE THE GYM
        <FiStar className="h-6 w-6 fill-white text-white sm:h-8 sm:w-8" aria-hidden="true" />
      </motion.p>
      <motion.h1
        id={headingId}
        className="font-heading text-[clamp(3.25rem,10vw,7.5rem)] font-black uppercase leading-[0.92] tracking-[-0.045em] text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.7)]"
        variants={itemVariants}
      >
        <span className="block">{headline[0]}</span>
        <span className="mt-2 block bg-gradient-to-r from-white via-white to-gym-red-light bg-clip-text text-transparent drop-shadow-none">
          {headline[1]}
        </span>
      </motion.h1>
      <motion.div
        className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row"
        variants={itemVariants}
      >
        <Link
          to="/contact#contact"
          className="group inline-flex min-h-14 w-full items-center justify-center rounded-lg border border-white/70 bg-black/40 px-8 py-4 font-heading text-lg uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-gym-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gym-black sm:w-auto"
        >
          {strings.hero.joinNow}
          <FiArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
        <a
          href={`tel:+${data.phoneClean}`}
          className="inline-flex min-h-14 w-full items-center justify-center rounded-lg border border-white/70 bg-black/40 px-8 py-4 font-heading text-lg uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-gym-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gym-black sm:w-auto"
        >
          <FiPhone className="mr-2 h-5 w-5" />
          {strings.hero.callNow}
        </a>
      </motion.div>
      <motion.div
        className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3 sm:mt-14 sm:gap-4"
        variants={itemVariants}
      >
        <div className="flex items-center gap-2">
          <FiWatch className="h-5 w-5 shrink-0 text-gym-red-light" />
          <span className="font-body text-sm font-medium text-white">{data.timing.weekdays}</span>
        </div>
        <span className="hidden h-5 w-px bg-white/30 sm:block" aria-hidden="true" />
        <div className="flex items-center gap-2">
          <FiMapPin className="h-5 w-5 shrink-0 text-gym-red-light" />
          <span className="font-body text-sm font-medium text-white">Hansi, Hisar, Haryana</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
