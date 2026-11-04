import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiTarget, FiRepeat, FiUsers, FiAward, FiArrowRight, FiTool } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { gymData, languageStrings } from '../data/gymData'
import { SectionHeading, HeroContent, Card, CardHeader, CardTitle, CardDescription } from '../components/ui'

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function About() {
  const { t } = useLanguage()
  const strings = languageStrings[t]
  const data = gymData[t]

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden isolate" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={data.heroImages.about}
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
          <HeroContent data={data} strings={strings} t={t} headingId="about-hero-heading" />
        </div>
      </section>

      <section id="story" className="section-padding" aria-labelledby="story-heading">
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

      <section id="mission-vision" className="section-padding section-alt" aria-labelledby="mv-heading">
        <div className="container-custom">
          <SectionHeading
            title={t === 'en' ? 'Mission & Vision' : 'मिशन और विजन'}
          />

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <Card hover padding="p-8 h-full border-gradient">
                <CardHeader>
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gym-red/10 flex items-center justify-center text-gym-red mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
                  >
                    <FiTarget className="w-7 h-7" />
                  </motion.div>
                  <CardTitle size="lg">{strings.about.mission}</CardTitle>
                </CardHeader>
                <CardDescription className="text-gym-white-soft">{data.about.mission}</CardDescription>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
            >
              <Card hover padding="p-8 h-full border-gradient">
                <CardHeader>
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gym-gold/10 flex items-center justify-center text-gym-gold mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
                  >
                    <FiAward className="w-7 h-7" />
                  </motion.div>
                  <CardTitle size="lg">{strings.about.vision}</CardTitle>
                </CardHeader>
                <CardDescription className="text-gym-white-soft">{data.about.vision}</CardDescription>
              </Card>
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
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  {t === 'en' ? 'Get in Touch' : 'संपर्क करें'}
                  <FiArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="values" className="section-padding" aria-labelledby="values-heading">
        <div className="container-custom">
          <SectionHeading title={strings.about.ourValues} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.about.values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px', amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover padding="p-8 text-center" className="h-full border-gradient">
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-gym-red/10 flex items-center justify-center text-gym-red mx-auto mb-4"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
                    >
                      {value.icon === 'target' && <FiTarget className="w-8 h-8" />}
                      {value.icon === 'repeat' && <FiRepeat className="w-8 h-8" />}
                      {value.icon === 'dumbbell' && <FiTool className="w-8 h-8" />}
                      {value.icon === 'users' && <FiUsers className="w-8 h-8" />}
                    </motion.div>
                    <CardTitle size="md">{value.title}</CardTitle>
                  </CardHeader>
                  <CardDescription className="text-gym-white-soft">{value.description}</CardDescription>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="section-padding section-alt" aria-labelledby="timeline-heading">
        <div className="container-custom">
          <SectionHeading title={strings.about.whyEmpire} />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <motion.div
                className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gym-red to-gym-gold"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              
              <div className="space-y-12 pl-20">
                {data.about.timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="relative"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-gym-red border-4 border-gym-black z-10" />
                    <div className="bg-gym-card border border-gym-border rounded-xl p-6 hover:border-gym-red transition-colors">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="font-heading text-2xl text-gym-red bg-gym-black px-3 py-1 rounded-lg">{item.year}</span>
                        <h4 className="font-heading text-xl text-gym-white">{item.title}</h4>
                      </div>
                      <p className="text-gym-white-soft">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}