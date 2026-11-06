import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiTarget, FiRepeat, FiUsers, FiAward, FiArrowRight, FiPhone, FiTool, FiCheck, FiStar, FiTag, FiDroplet, FiTruck, FiWind } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { gymData, languageStrings } from '../data/gymData'
import { SectionHeading, HeroContent, Card, CardHeader, CardTitle, CardDescription, Counter, Lightbox } from '../components/ui'

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function About() {
  const { t } = useLanguage()
  const strings = languageStrings[t]
  const data = gymData[t]
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const heroSlides = data.heroImages.home
  const [heroSlide, setHeroSlide] = useState(0)
  const galleryPreview = data.gallery.slice(0, 6)

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((previousSlide) => (previousSlide + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

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

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden isolate" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={heroSlide}
              src={heroSlides[heroSlide]}
              alt=""
              className="w-full h-full object-cover scale-105"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1.02 }}
              exit={{ opacity: 0, scale: 1.06 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              aria-hidden="true"
            />
          </AnimatePresence>
        </div>

        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/55 via-black/30 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/55 via-transparent to-black/10" aria-hidden="true" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_68%_48%,rgba(230,57,70,0.12),transparent_48%)]" aria-hidden="true" />

        <div className="container-custom relative z-10 py-24 text-center sm:py-28">
          <HeroContent data={data} strings={strings} t={t} headingId="about-hero-heading" />
        </div>

        <motion.button
          type="button"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 cursor-pointer rounded-full p-2 text-white/80 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          aria-label={t === 'en' ? 'Scroll to learn more' : 'और जानने के लिए स्क्रॉल करें'}
        >
          <motion.div
            className="flex h-10 w-6 justify-center rounded-full border-2 border-white/60 pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
          </motion.div>
        </motion.button>
      </section>

      <section id="about" className="section-padding" aria-labelledby="about-heading">
        <div className="container-custom">
          <SectionHeading
            title={t === 'en' ? 'About Empire The Gym' : 'एम्पायर द जिम के बारे में'}
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
            </motion.div>
          </div>
        </div>
      </section>

      <section id="story" className="section-padding section-alt" aria-labelledby="story-heading">
        <div className="container-custom">
          <SectionHeading title={strings.about.ourStory} />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px', amount: 0.1 }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={data.gallery[2].src}
                  alt="Empire The Gym Interior"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => { e.target.onerror = null; e.target.src = "/images/gallery/gallery-3.svg"; }}
                />
                <div className="absolute bottom-6 left-6 right-6 bg-gym-black/80 backdrop-blur-sm border border-gym-border rounded-xl p-6">
                  <h3 className="font-heading text-xl text-gym-white mb-1">{data.name}</h3>
                  <p className="text-gym-red font-heading text-sm uppercase tracking-wider">{data.slogan}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px', amount: 0.1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-body mb-6">{data.about.story}</p>
              <p className="text-body mb-6">
                {t === 'en'
                  ? 'Today, Empire The Gym stands as a testament to what passion, dedication, and community can achieve. We\'ve helped thousands transform their bodies and minds, and we\'re just getting started.'
                  : 'आज, एम्पायर द जिम इस बात का प्रमाण है कि जुनून, समर्पण और समुदाय क्या हासिल कर सकते हैं। हमने हजारों लोगों को उनके शरीर और दिमाग को बदलने में मदद की है, और हमने अभी शुरुआत की है।'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="owner" className="section-padding" aria-labelledby="owner-heading">
        <div className="container-custom">
          <SectionHeading title={strings.about.meetOwner} />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px', amount: 0.1 }}
            >
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
                <img
                  src={data.about.owner.photo}
                  alt={data.about.owner.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => { e.target.onerror = null; e.target.src = "/images/about/owner.svg"; }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px', amount: 0.1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-gym-red font-heading text-sm uppercase tracking-wider mb-2">{data.about.owner.title}</p>
              <h3 className="heading-md mb-4">{data.about.owner.name}</h3>
              <p className="text-body mb-6">{data.about.owner.bio}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="why-choose" className="section-padding section-alt" aria-labelledby="why-choose-heading">
        <div className="container-custom">
          <SectionHeading title={strings.whyChoose.title} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseCards.map((usp) => (
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
          <SectionHeading title={strings.programs.title} />

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
        </div>
      </section>

      <section id="mission-vision" className="section-padding section-alt" aria-label={t === 'en' ? 'Mission and Vision' : 'मिशन और विजन'}>
        <div className="container-custom">
          <SectionHeading title={t === 'en' ? 'Mission & Vision' : 'मिशन और विजन'} />
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}>
              <Card hover padding="p-8 h-full border-gradient">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gym-red/10 text-gym-red"><FiTarget className="h-7 w-7" /></div>
                  <CardTitle size="lg">{strings.about.mission}</CardTitle>
                </CardHeader>
                <CardDescription className="text-gym-white-soft">{data.about.mission}</CardDescription>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ delay: 0.1 }}>
              <Card hover padding="p-8 h-full border-gradient">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gym-gold/10 text-gym-gold"><FiAward className="h-7 w-7" /></div>
                  <CardTitle size="lg">{strings.about.vision}</CardTitle>
                </CardHeader>
                <CardDescription className="text-gym-white-soft">{data.about.vision}</CardDescription>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="values" className="section-padding" aria-label={strings.about.ourValues}>
        <div className="container-custom">
          <SectionHeading title={strings.about.ourValues} />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {data.about.values.map((value, index) => (
              <motion.div key={value.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px', amount: 0.1 }} transition={{ delay: index * 0.1 }}>
                <Card hover padding="p-8 text-center" className="h-full border-gradient">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gym-red/10 text-gym-red">
                      {value.icon === 'target' && <FiTarget className="h-8 w-8" />}
                      {value.icon === 'repeat' && <FiRepeat className="h-8 w-8" />}
                      {value.icon === 'dumbbell' && <FiTool className="h-8 w-8" />}
                      {value.icon === 'users' && <FiUsers className="h-8 w-8" />}
                    </div>
                    <CardTitle size="md">{value.title}</CardTitle>
                  </CardHeader>
                  <CardDescription className="text-gym-white-soft">{value.description}</CardDescription>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="amenities" className="section-padding section-alt" aria-labelledby="amenities-heading">
        <div className="container-custom">
          <SectionHeading title={strings.amenities.title} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {amenityCards.map((amenity) => (
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

      <section id="gallery-preview" className="section-padding" aria-labelledby="gallery-preview-heading">
        <div className="container-custom">
          <SectionHeading title={t === 'en' ? 'Gallery Preview' : 'गैलरी पूर्वावलोकन'} />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {galleryPreview.map((image, index) => (
              <motion.button
                key={image.id}
                type="button"
                className="relative aspect-square w-full cursor-pointer overflow-hidden rounded-xl border-0 bg-transparent p-0 text-left group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setLightboxIndex(index)}
                aria-label={t === 'en' ? `View ${image.alt}` : `${image.alt} देखें`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => { e.target.onerror = null; e.target.src = image.src.replace('.jpg', '.svg') }}
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-gym-black/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="font-heading text-sm text-gym-white">{image.alt}</span>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Link to="/gallery" className="btn-secondary inline-flex items-center gap-2">
              {t === 'en' ? 'View Gallery' : 'गैलरी देखें'}
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="membership" className="section-padding section-alt" aria-labelledby="membership-heading">
        <div className="container-custom">
          <SectionHeading title={strings.membership.title} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.membershipPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px', amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
              >
                  <Card hover padding="p-8" className="flex h-full flex-col relative">
                    <div className="mb-6 text-center">
                      <h3 className="mb-2 font-heading text-xl uppercase tracking-wider text-gym-white">{plan.name}</h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="font-heading text-4xl text-gym-white">{plan.price}</span>
                      </div>
                    </div>
                    <ul className="mb-6 flex-1 space-y-3">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center gap-3 text-gym-white-soft"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.05 }}
                        >
                          <FiCheck className="h-5 w-5 flex-shrink-0 text-gym-red" />
                          <span className="text-body-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <a href={`tel:+${data.phoneClean}`} className="btn-secondary w-full text-center mt-auto">
                      {strings.hero.callNow}
                    </a>
                  </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-padding" aria-label={strings.testimonials.title}>
        <div className="container-custom">
          <SectionHeading title={strings.testimonials.title} />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {data.testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px', amount: 0.1 }} transition={{ delay: index * 0.1 }}>
                <Card hover padding="p-8" className="h-full border-gradient">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, starIndex) => <FiStar key={starIndex} className={starIndex < testimonial.rating ? 'text-gym-gold fill-current' : 'text-gym-gray'} size={20} />)}
                  </div>
                  <CardDescription className="mb-6">"{testimonial.text}"</CardDescription>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className="section-padding section-alt border-y border-gym-border" aria-label={strings.stats.title}>
        <div className="container-custom">
          <SectionHeading title={strings.stats.title} />
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {data.stats.map((stat) => (
              <Counter key={stat.id} value={stat.value} label={stat.label} suffix={stat.suffix} icon={
                stat.id === 'years' ? <FiTarget className="w-7 h-7" /> :
                stat.id === 'members' ? <FiUsers className="w-7 h-7" /> :
                stat.id === 'machines' ? <FiTool className="w-7 h-7" /> :
                stat.id === 'trainers' ? <FiTarget className="w-7 h-7" /> : null
              } className="lg:col-span-1" />
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="relative isolate flex min-h-[65vh] items-center justify-center overflow-hidden py-24 sm:py-28" aria-label={t === 'en' ? 'Join Empire The Gym' : 'एम्पायर द जिम से जुड़ें'}>
        <div className="absolute inset-0 z-0">
          <img src={data.heroImages.contact} alt="" className="h-full w-full object-cover" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/45 via-black/25 to-black/45" aria-hidden="true" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/30 via-transparent to-black/10" aria-hidden="true" />
        <div className="container-custom relative z-10">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="font-heading text-[clamp(2.5rem,7vw,5rem)] font-black uppercase leading-[1.2] tracking-normal text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.8)]">
              {t === 'en' ? 'Ready to start your transformation journey?' : 'अपनी परिवर्तन यात्रा शुरू करने के लिए तैयार हैं?'}
            </h2>
            <motion.p className="mx-auto mb-10 mt-6 max-w-3xl text-lg leading-relaxed text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-xl">
              {t === 'en' ? 'Join the empire today and become the best version of yourself.' : 'आज ही साम्राज्य में शामिल हों और अपना सर्वश्रेष्ठ संस्करण बनें।'}
            </motion.p>
            <motion.div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact#contact" className="inline-flex min-h-14 w-full items-center justify-center rounded-lg border border-white/70 bg-black/40 px-8 py-4 font-heading text-lg uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-gym-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gym-black sm:w-auto">
                {strings.cta.button}
                <FiArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href={`tel:+${data.phoneClean}`} className="inline-flex min-h-14 w-full items-center justify-center rounded-lg border border-white/70 bg-black/40 px-8 py-4 font-heading text-lg uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-gym-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gym-black sm:w-auto">
                <FiPhone className="mr-2 h-5 w-5" />
                {strings.hero.callNow}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={data.gallery}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  )
}