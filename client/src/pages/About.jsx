import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiTarget, FiRepeat, FiUsers, FiAward, FiMapPin, FiWatch, FiPhone, FiMessageCircle, FiArrowRight, FiTool, FiPlus, FiMinus } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { gymData, languageStrings } from '../data/gymData'
import { SectionHeading, Card, CardHeader, CardTitle, CardDescription, Button } from '../components/ui'

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function About() {
  const { t } = useLanguage()
  const strings = languageStrings[t]
  const data = gymData

  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" aria-labelledby="about-hero-heading">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ backgroundImage: `url(${data.heroImages.about})` }}
        >
          <div className="hero-overlay" />
        </motion.div>

        <div className="container-custom relative z-10 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.span className="section-badge mb-6">{strings.about.ourStory}</motion.span>
            <motion.h1
              id="about-hero-heading"
              className="heading-xl mb-6"
            >
              {t === 'en' ? 'Our Story' : 'हमारी कहानी'}
            </motion.h1>
            <motion.p className="text-body text-xl max-w-2xl mx-auto">
              {t === 'en'
                ? 'From a vision to reality - discover how Empire The Gym became Hansi\'s premier fitness destination.'
                : 'एक दृष्टि से वास्तविकता तक - जानें कि एम्पायर द जिम कैसे हांसी का प्रमुख फिटनेस गंतव्य बना।'}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section id="story" className="section-padding" aria-labelledby="story-heading">
        <div className="container-custom">
          <SectionHeading
            title={strings.about.ourStory}
            subtitle={t === 'en'
              ? 'How it all began and where we\'re headed.'
              : 'यह सब कैसे शुरू हुआ और हम कहाँ जा रहे हैं।'}
          />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px', amount: 0.1 }}
            >
              <p className="text-body mb-6">{data.about.story}</p>
              <p className="text-body mb-6">
                {t === 'en'
                  ? 'Today, Empire The Gym stands as a testament to what passion, dedication, and community can achieve. We\'ve helped thousands transform their bodies and minds, and we\'re just getting started.'
                  : 'आज, एम्पायर द जिम इस बात का प्रमाण है कि जुनून, समर्पण और समुदाय क्या हासिल कर सकते हैं। हमने हजारों लोगों को उनके शरीर और दिमाग को बदलने में मदद की है, और हमने अभी शुरुआत की है।'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px', amount: 0.1 }}
              transition={{ delay: 0.2 }}
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
          </div>
        </div>
      </section>

      <section id="mission-vision" className="section-padding section-alt" aria-labelledby="mv-heading">
        <div className="container-custom">
          <SectionHeading
            title={t === 'en' ? 'Mission & Vision' : 'मिशन और विजन'}
            subtitle={t === 'en'
              ? 'The guiding principles that drive everything we do.'
              : 'मार्गदर्शक सिद्धांत जो हम जो कुछ भी करते हैं उसे चलाते हैं।'}
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
          <SectionHeading
            title={strings.about.meetOwner}
            subtitle={t === 'en'
              ? 'The visionary behind Empire The Gym.'
              : 'एम्पायर द जिम के पीछे के दूरदर्शी।'}
          />

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

      <section id="trainers" className="section-padding section-alt" aria-labelledby="trainers-heading">
        <div className="container-custom">
          <SectionHeading
            title={strings.about.ourTrainers}
            subtitle={t === 'en'
              ? 'Certified professionals dedicated to your success. (Placeholder data - replace with actual trainer info)'
              : 'प्रमाणित पेशेवर जो आपकी सफलता के लिए समर्पित हैं। (प्लेसहोल्डर डेटा - वास्तविक ट्रेनर जानकारी से बदलें)'}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.trainers.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px', amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover padding="p-6 text-center" className="h-full border-gradient">
                  <div className="relative aspect-square w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden">
                    <img
                      src={trainer.photo}
                      alt={trainer.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => { e.target.onerror = null; e.target.src = `/images/trainers/trainer-${trainer.id}.svg`; }}
                    />
                  </div>
                  <CardTitle size="md">{trainer.name}</CardTitle>
                  <p className="text-gym-red font-heading text-sm uppercase tracking-wider mb-2">{trainer.specialization}</p>
                  <p className="text-gym-white-soft text-sm mb-4">{trainer.experience}</p>
                  <div className="flex flex-wrap justify-center gap-1 mb-4">
                    {trainer.certifications.map((cert, i) => (
                      <span key={i} className="text-xs bg-gym-card border border-gym-border text-gym-white-soft px-2 py-1 rounded">{cert}</span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="section-padding" aria-labelledby="values-heading">
        <div className="container-custom">
          <SectionHeading
            title={strings.about.ourValues}
            subtitle={t === 'en'
              ? 'The core values that define our culture and community.'
              : 'मूल मूल्य जो हमारी संस्कृति और समुदाय को परिभाषित करते हैं।'}
          />

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
          <SectionHeading
            title={strings.about.whyEmpire}
            subtitle={t === 'en'
              ? 'Our journey from a vision to Hansi\'s premier fitness empire.'
              : 'एक दृष्टि से हांसी के प्रमुख फिटनेस साम्राज्य तक हमारी यात्रा।'}
          />

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

      <section id="about-cta" className="section-padding relative overflow-hidden" aria-labelledby="about-cta-heading">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ backgroundImage: `url(${data.heroImages.contact})` }}
        >
          <div className="hero-overlay-dark" />
        </motion.div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 id="about-cta-heading" className="heading-lg mb-6">
              {t === 'en' ? 'Ready to Join the Empire?' : 'साम्राज्य में शामिल होने के लिए तैयार?'}
            </h2>
            <p className="text-body text-xl mb-10 max-w-2xl mx-auto">
              {t === 'en'
                ? 'Start your fitness journey with us today. Modern equipment, expert trainers, and a community that pushes you to be your best.'
                : 'आज ही हमारे साथ अपनी फिटनेस यात्रा शुरू करें। आधुनिक उपकरण, विशेषज्ञ ट्रेनर, और एक समुदाय जो आपको अपना सर्वश्रेष्ठ बनने के लिए प्रेरित करता है।'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary px-10 py-4">
                {strings.cta.button}
                <FiArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <motion.a
                href={`tel:${data.phoneClean}`}
                className="btn-secondary px-10 py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiPhone className="w-5 h-5 mr-2" />
                {strings.hero.callNow}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}