import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPhone, FiCheck, FiStar, FiTarget, FiUsers, FiTag, FiDroplet, FiMapPin, FiMessageCircle, FiZap, FiTruck, FiWatch, FiWind, FiTool, FiAward, FiHelpCircle, FiCornerUpLeft } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { gymData, languageStrings, interestedOptions } from '../data/gymData'
import { 
  SectionHeading, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  Button, 
  Counter, 
  Marquee 
} from '../components/ui'
import { Navbar } from '../components/layout'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Home() {
  const { t } = useLanguage()
  const strings = languageStrings[t]
  const data = gymData

  const heroContent = t === 'en' ? {
    headline: ['BUILD YOUR', 'EMPIRE'],
    subheadline: 'Transform your body. Strengthen your mind. Join the elite.',
    ctaPrimary: strings.hero.joinNow,
    ctaSecondary: strings.hero.callNow
  } : {
    headline: ['अपना', 'साम्राज्य बनाएं'],
    subheadline: 'अपने शरीर को बदलें। अपने दिमाग को मजबूत करें। एलीट में शामिल हों।',
    ctaPrimary: strings.hero.joinNow,
    ctaSecondary: strings.hero.callNow
  }

  const whyChooseCards = data.usps.map((usp, index) => ({
    ...usp,
    delay: index * 0.1
  }))

  const programCards = data.activities.map((activity, index) => ({
    ...activity,
    delay: index * 0.1
  }))

  const amenityCards = data.amenities.map((amenity, index) => ({
    ...amenity,
    delay: index * 0.1
  }))

  const galleryPreview = data.gallery.slice(0, 6)

  const heroSlides = [
    '/images/hero/user-hero-1.jpg',
    '/images/hero/user-hero-2.webp',
    '/images/hero/user-hero-3.webp',
    '/images/hero/user-hero-4.webp',
    '/images/hero/user-hero-5.webp',
  ]
  const [heroSlide, setHeroSlide] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
        <motion.div
          key={heroSlide}
          className="absolute inset-0 z-0"
          style={{ backgroundImage: `url(${heroSlides[heroSlide]})` }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ opacity: { duration: 0.8 }, scale: { duration: 5, ease: 'linear' } }}
        >
        </motion.div>

        <div className="container-custom relative z-10 py-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="section-badge mb-8 mx-auto max-w-fit"
              variants={itemVariants}
            >
              <span className="flex items-center gap-2">
                <motion.span
                  className="w-2 h-2 bg-gym-red rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                {strings.hero.openingHours}: {data.timing.weekdays}
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="heading-xl mb-6"
              variants={itemVariants}
            >
              {heroContent.headline.map((word, index) => (
                <motion.span
                  key={index}
                  className="block"
                  variants={itemVariants}
                >
                  {index === heroContent.headline.length - 1 ? (
                    <span className="text-gradient">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary group w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {heroContent.ctaPrimary}
                <FiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.a
                href={`tel:${data.phoneClean}`}
                className="btn-secondary w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiPhone className="w-5 h-5 mr-2" />
                {heroContent.ctaSecondary}
              </motion.a>
            </motion.div>

<motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gym-white-soft"
          variants={itemVariants}
        >
              <div className="flex items-center gap-2">
                <FiWatch className="w-5 h-5 text-gym-red" />
                <span className="font-body text-sm">{data.timing.weekdays}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="w-5 h-5 text-gym-red" />
                <span className="font-body text-sm hidden sm:inline">Hansi, Hisar, Haryana</span>
              </div>
              <div className="flex items-center gap-2">
                <FiStar className="w-5 h-5 text-gym-gold" />
                <span className="font-body text-sm">{data.fitpassNote}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gym-white/20 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div className="w-1.5 h-1.5 bg-gym-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-6 section-alt border-y border-gym-border overflow-hidden" aria-label="Motivational ticker">
        <Marquee />
      </section>

      <section id="about" className="section-padding" aria-labelledby="about-heading">
        <div className="container-custom">
          <SectionHeading
            title={t === 'en' ? 'About Empire The Gym' : 'एम्पायर द जिम के बारे में'}
            subtitle={t === 'en' 
              ? "Hansi's premier fitness destination with modern equipment, expert trainers, and a disciplined atmosphere."
              : "हांसी का प्रमुख फिटनेस गंतव्य आधुनिक उपकरण, विशेषज्ञ ट्रेनर, और एक अनुशासित माहौल के साथ।"}
            badge={strings.about.knowMore}
          />
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px', amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/about/about.jpg"
                alt="Empire The Gym Facility"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => { e.target.onerror = null; e.target.src = "/images/about/about-1.svg"; }}
              />
              <div className="absolute bottom-6 left-6 right-6 bg-gym-black/80 backdrop-blur-sm border border-gym-border rounded-xl p-6">
                <h3 className="font-heading text-xl text-gym-white mb-2">{data.name}</h3>
                <p className="text-gym-red font-heading text-sm uppercase tracking-wider">{data.slogan}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px', amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-body mb-6">{data.about.story}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {data.usps.slice(0, 4).map((usp, index) => (
                  <motion.div
                    key={usp.id}
                    className="flex items-start gap-3 p-4 bg-gym-card border border-gym-border rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gym-red/10 flex items-center justify-center flex-shrink-0 text-gym-red">
                      {usp.icon === 'dumbbell' && <FiTool className="w-5 h-5" />}
                      {usp.icon === 'graduation-cap' && <FiTarget className="w-5 h-5" />}
                      {usp.icon === 'users' && <FiUsers className="w-5 h-5" />}
                      {usp.icon === 'tag' && <FiTag className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="font-heading text-gym-white">{usp.title}</h4>
                      <p className="text-gym-gray text-sm">{usp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Link to="/about" className="btn-secondary inline-flex items-center gap-2">
                {strings.about.knowMore}
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="why-choose" className="section-padding section-alt" aria-labelledby="why-choose-heading">
        <div className="container-custom">
          <SectionHeading
            title={strings.whyChoose.title}
            subtitle={t === 'en'
              ? 'Four pillars that make Empire The Gym the ultimate fitness destination in Hansi.'
              : 'चार स्तंभ जो एम्पायर द जिम को हांसी में अंतिम फिटनेस गंतव्य बनाते हैं।'}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseCards.map((usp, index) => (
              <motion.div
                key={usp.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px', amount: 0.1 }}
                transition={{ delay: usp.delay }}
              >
                <Card hover padding="p-8" className="h-full border-gradient">
                  <CardHeader>
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-gym-red/10 flex items-center justify-center text-gym-red mb-4"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
                    >
                      {usp.icon === 'dumbbell' && <FiTool className="w-7 h-7" />}
                      {usp.icon === 'graduation-cap' && <FiTarget className="w-7 h-7" />}
                      {usp.icon === 'users' && <FiUsers className="w-7 h-7" />}
                      {usp.icon === 'tag' && <FiTag className="w-7 h-7" />}
                    </motion.div>
                    <CardTitle size="md">{usp.title}</CardTitle>
                  </CardHeader>
                  <CardDescription className="text-gym-white-soft">{usp.description}</CardDescription>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="section-padding" aria-labelledby="programs-heading">
        <div className="container-custom">
          <SectionHeading
            title={strings.programs.title}
            subtitle={t === 'en'
              ? 'Comprehensive fitness programs designed for every goal and fitness level.'
              : 'हर लक्ष्य और फिटनेस स्तर के लिए डिज़ाइन किए गए व्यापक फिटनेस प्रोग्राम।'}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programCards.map((program, index) => (
              <motion.div
                key={program.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px', amount: 0.1 }}
                transition={{ delay: program.delay }}
              >
                <Card hover padding="p-8" className="h-full group border-gradient">
                  <CardHeader>
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-gym-red/10 flex items-center justify-center text-gym-red mb-4 group-hover:bg-gym-red group-hover:text-gym-white transition-colors"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
                    >
                      {program.icon === 'dumbbell' && <FiTool className="w-7 h-7" />}
                      {program.icon === 'fire' && <FiTarget className="w-7 h-7" />}
                      {program.icon === 'user-check' && <FiUsers className="w-7 h-7" />}
                      {program.icon === 'target' && <FiTarget className="w-7 h-7" />}
                    </motion.div>
                    <CardTitle size="md">{program.title}</CardTitle>
                    <p className="text-gym-red font-heading text-sm uppercase tracking-wider mt-1">{program.subtitle}</p>
                  </CardHeader>
                  <CardDescription className="text-gym-white-soft mb-6">{program.description}</CardDescription>
                  <ul className="space-y-2">
                    {program.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-2 text-gym-white-soft text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                      >
                        <FiCheck className="w-4 h-4 text-gym-red flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              {strings.programs.viewAll}
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="stats" className="section-padding section-alt border-y border-gym-border" aria-labelledby="stats-heading">
        <div className="container-custom">
          <SectionHeading
            title={strings.stats.title}
            subtitle={t === 'en'
              ? 'Numbers that speak louder than words. Our journey of excellence continues.'
              : 'संख्याएं जो शब्दों से ज्यादा बोलती हैं। हमारी उत्कृष्टता की यात्रा जारी है।'}
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {data.stats.map((stat, index) => (
              <Counter
                key={stat.id}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                icon={
                  stat.id === 'years' && <FiTarget className="w-7 h-7" />,
                  stat.id === 'members' && <FiUsers className="w-7 h-7" />,
                  stat.id === 'machines' && <FiTool className="w-7 h-7" />,
                  stat.id === 'trainers' && <FiTarget className="w-7 h-7" />
                }
                className="lg:col-span-1"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="amenities" className="section-padding" aria-labelledby="amenities-heading">
        <div className="container-custom">
          <SectionHeading
            title={strings.amenities.title}
            subtitle={t === 'en'
              ? 'Premium facilities to enhance your workout experience.'
              : 'आपके वर्कआउट अनुभव को बेहतर बनाने के लिए प्रीमियम सुविधाएं।'}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {amenityCards.map((amenity, index) => (
              <motion.div
                key={amenity.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px', amount: 0.1 }}
                transition={{ delay: amenity.delay }}
              >
                <Card hover padding="p-8 text-center" className="border-gradient">
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-gym-red/10 flex items-center justify-center text-gym-red mx-auto mb-4"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
                    >
{amenity.icon === 'snowflake' && <FiWind className="w-8 h-8" />}
{amenity.icon === 'car' && <FiTruck className="w-8 h-8" />}
                      {amenity.icon === 'droplet' && <FiDroplet className="w-8 h-8" />}
                    </motion.div>
                    <CardTitle size="md">{amenity.title}</CardTitle>
                  </CardHeader>
                  <CardDescription className="text-gym-white-soft">{amenity.description}</CardDescription>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="section-padding section-alt" aria-labelledby="membership-heading">
        <div className="container-custom">
          <SectionHeading
            title={strings.membership.title}
            subtitle={t === 'en'
              ? 'Flexible plans to fit your lifestyle. All prices are placeholders - contact us for actual pricing.'
              : 'आपकी जीवनशैली के अनुकूल लचीले प्लान। सभी कीमतें प्लेसहोल्डर हैं - वास्तविक कीमतों के लिए संपर्क करें।'}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.membershipPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px', amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  hover 
                  padding="p-8" 
                  className={`h-full flex flex-col relative ${plan.popular ? 'border-gym-red ring-2 ring-gym-red/30' : ''}`}
                >
                  {plan.popular && (
                    <motion.div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gym-red text-gym-white text-xs font-heading uppercase tracking-wider px-3 py-1 rounded-full">
                        {strings.membership.popular}
                      </span>
                    </motion.div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="font-heading text-xl uppercase tracking-wider text-gym-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-heading text-4xl text-gym-white">{plan.price}</span>
                      <span className="text-gym-white-soft font-body">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3 text-gym-white-soft"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                      >
                        <FiCheck className="w-5 h-5 text-gym-red flex-shrink-0" />
                        <span className="text-body-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.popular ? 'primary' : 'secondary'} 
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-gym-white-soft text-sm mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {t === 'en' 
              ? 'All prices are placeholders. Contact us for current pricing and offers.'
              : 'सभी कीमतें प्लेसहोल्डर हैं। वर्तमान कीमतों और ऑफ़र के लिए संपर्क करें।'}
          </motion.p>
        </div>
      </section>

      <section id="gallery-preview" className="section-padding" aria-labelledby="gallery-preview-heading">
        <div className="container-custom">
          <SectionHeading
            title={t === 'en' ? 'Gallery Preview' : 'गैलरी पूर्वावलोकन'}
            subtitle={t === 'en'
              ? 'A glimpse into our facility, equipment, and community.'
              : 'हमारी सुविधा, उपकरण और समुदाय की एक झलक।'}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryPreview.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => { e.target.onerror = null; e.target.src = image.src.replace(".jpg", ".svg"); }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gym-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-heading text-sm text-gym-white">{image.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Link to="/gallery" className="btn-secondary inline-flex items-center gap-2">
              {t === 'en' ? 'View Full Gallery' : 'पूरी गैलरी देखें'}
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="testimonials" className="section-padding section-alt" aria-labelledby="testimonials-heading">
        <div className="container-custom">
          <SectionHeading
            title={strings.testimonials.title}
            subtitle={t === 'en'
              ? 'Real stories from real members. These are placeholder testimonials - replace with actual member feedback.'
              : 'असली मेंबर्स की असली कहानियां। ये प्लेसहोल्डर टेस्टिमोनियल हैं - इन्हें वास्तविक मेंबर फीडबैक से बदलें।'}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px', amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover padding="p-8" className="h-full border-gradient">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={i < testimonial.rating ? 'text-gym-gold fill-current' : 'text-gym-gray'}
                        size={20}
                      />
                    ))}
                  </div>
                  <CardDescription className="mb-6">"{testimonial.text}"</CardDescription>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gym-red/10 flex items-center justify-center text-gym-red font-heading text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-heading text-gym-white text-sm">{testimonial.name}</p>
                      <p className="text-gym-white-soft text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="section-padding relative overflow-hidden" aria-labelledby="cta-heading">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ backgroundImage: `url(${data.heroImages.contact})` }}
        >
          <div className="hero-overlay-dark" />
        </motion.div>

        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2
              id="cta-heading"
              className="heading-lg mb-6"
            >
              {strings.cta.title}
            </motion.h2>
            <motion.p
              className="text-body text-xl mb-10"
            >
              {t === 'en'
                ? 'Ready to start your transformation journey? Join the empire today and become the best version of yourself.'
                : 'अपनी परिवर्तन यात्रा शुरू करने के लिए तैयार हैं? आज ही साम्राज्य में शामिल हों और अपना सर्वश्रेष्ठ संस्करण बनें।'}
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {strings.cta.button}
                <FiArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <motion.a
                href={`tel:${data.phoneClean}`}
                className="btn-secondary px-10 py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiPhone className="w-5 h-5 mr-2" />
                {strings.hero.callNow}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
