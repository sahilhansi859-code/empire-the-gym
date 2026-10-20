import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMapPin, FiPhone, FiMessageCircle, FiWatch, FiMail, FiUser, FiMinus, FiCheck, FiHelpCircle, FiExternalLink } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { gymData, languageStrings, interestedOptions } from '../data/gymData'
import { SectionHeading, Button, Card, CardTitle, CardDescription } from '../components/ui'
import axios from 'axios'
import toast from 'react-hot-toast'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

function isOpenNow(timing) {
  const now = new Date()
  const istOffset = 5.5 * 60 * 60 * 1000
  const istNow = new Date(now.getTime() + istOffset)
  const day = istNow.getDay()
  const hours = istNow.getHours()
  const minutes = istNow.getMinutes()
  const currentMinutes = hours * 60 + minutes

  const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  const today = dayNames[day]
  
  const schedule = timing.raw[today]
  if (!schedule || !schedule.open || !schedule.close) return false

  const [openHours, openMinutes] = schedule.open.split(':').map(Number)
  const [closeHours, closeMinutes] = schedule.close.split(':').map(Number)
  const openTime = openHours * 60 + openMinutes
  const closeTime = closeHours * 60 + closeMinutes

  return currentMinutes >= openTime && currentMinutes < closeTime
}

function validatePhone(phone) {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned)
}

function validateEmail(email) {
  if (!email) return true
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function FAQItem({ faq, index, t }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="bg-gym-card border border-gym-border rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.1 }}
      role="listitem"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-gym-red focus:ring-offset-2 focus:ring-offset-gym-black"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span className="font-heading text-lg text-gym-white pr-4">{faq.question}</span>
        <motion.span
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gym-red"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiMinus className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            className="px-6 pb-6 border-t border-gym-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            role="region"
            aria-label={faq.question}
          >
            <p className="text-gym-white-soft text-body">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Contact() {
  const { t } = useLanguage()
  const strings = languageStrings[t]
  const data = gymData

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interestedIn: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openStatus, setOpenStatus] = useState(false)

  useEffect(() => {
    setOpenStatus(isOpenNow(data.timing))
    const interval = setInterval(() => {
      setOpenStatus(isOpenNow(data.timing))
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = t === 'en' ? 'Name is required' : 'नाम आवश्यक है'
    if (!formData.phone.trim()) {
      newErrors.phone = t === 'en' ? 'Phone number is required' : 'फोन नंबर आवश्यक है'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = t === 'en' ? 'Enter a valid 10-digit Indian phone number' : 'मान्य 10-अंकीय भारतीय फोन नंबर दर्ज करें'
    }
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = t === 'en' ? 'Enter a valid email address' : 'मान्य ईमेल पता दर्ज करें'
    }
    if (!formData.interestedIn) newErrors.interestedIn = t === 'en' ? 'Please select an option' : 'कृपया एक विकल्प चुनें'
    if (!formData.message.trim()) newErrors.message = t === 'en' ? 'Message is required' : 'संदेश आवश्यक है'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      await axios.post(`${API_URL}/contact`, formData, {
        headers: { 'Content-Type': 'application/json' }
      })
      toast.success(strings.contact.success)
      setFormData({ name: '', phone: '', email: '', interestedIn: '', message: '' })
    } catch (error) {
      toast.error(strings.contact.error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden" aria-labelledby="contact-hero-heading">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ backgroundImage: `url(${data.heroImages.contact})` }}
        >
          <div className="hero-overlay" />
        </motion.div>

        <div className="container-custom relative z-10 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.span className="section-badge mb-6">{strings.contact.subtitle}</motion.span>
            <motion.h1
              id="contact-hero-heading"
              className="heading-xl mb-6"
            >
              {strings.contact.title}
            </motion.h1>
            <motion.p className="text-body text-xl max-w-2xl mx-auto">
              {t === 'en'
                ? 'Have questions? Want to join? We\'d love to hear from you. Fill out the form or reach out directly.'
                : 'कोई प्रश्न? शामिल होना चाहते हैं? हम आपसे सुनना पसंद करेंगे। फॉर्म भरें या सीधे संपर्क करें।'}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="section-padding" aria-labelledby="contact-form-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <SectionHeading
                title={strings.contact.formTitle}
                subtitle={t === 'en'
                  ? 'Send us a message and we\'ll get back to you within 24 hours.'
                  : 'हमें एक संदेश भेजें और हम 24 घंटे के भीतर आपसे संपर्क करेंगे।'}
                align="left"
              />

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="label-field">
                      {strings.contact.name} <span className="text-gym-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`input-field ${errors.name ? 'border-gym-red focus:border-gym-red focus:ring-gym-red/20' : ''}`}
                      placeholder={t === 'en' ? 'Your full name' : 'आपका पूरा नाम'}
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <motion.p id="name-error" className="mt-1 text-sm text-gym-red" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                        <FiHelpCircle className="w-4 h-4 inline mr-1" /> {errors.name}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="label-field">
                      {strings.contact.phone} <span className="text-gym-red">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`input-field ${errors.phone ? 'border-gym-red focus:border-gym-red focus:ring-gym-red/20' : ''}`}
                      placeholder={t === 'en' ? '+91 9XXXXXXXXX' : '+91 9XXXXXXXXX'}
                      aria-invalid={errors.phone ? 'true' : 'false'}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <motion.p id="phone-error" className="mt-1 text-sm text-gym-red" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                        <FiHelpCircle className="w-4 h-4 inline mr-1" /> {errors.phone}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="label-field">
                    {strings.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-field ${errors.email ? 'border-gym-red focus:border-gym-red focus:ring-gym-red/20' : ''}`}
                    placeholder={t === 'en' ? 'your@email.com' : 'your@email.com'}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <motion.p id="email-error" className="mt-1 text-sm text-gym-red" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                      <FiHelpCircle className="w-4 h-4 inline mr-1" /> {errors.email}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="interestedIn" className="label-field">
                    {strings.contact.interestedIn} <span className="text-gym-red">*</span>
                  </label>
                  <select
                    id="interestedIn"
                    name="interestedIn"
                    value={formData.interestedIn}
                    onChange={handleChange}
                    className={`input-field appearance-none ${errors.interestedIn ? 'border-gym-red focus:border-gym-red focus:ring-gym-red/20' : ''}`}
                    aria-invalid={errors.interestedIn ? 'true' : 'false'}
                    aria-describedby={errors.interestedIn ? 'interested-error' : undefined}
                  >
                    <option value="">{t === 'en' ? 'Select an option' : 'एक विकल्प चुनें'}</option>
                    {interestedOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  {errors.interestedIn && (
                    <motion.p id="interested-error" className="mt-1 text-sm text-gym-red" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                      <FiHelpCircle className="w-4 h-4 inline mr-1" /> {errors.interestedIn}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="label-field">
                    {strings.contact.message} <span className="text-gym-red">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`input-field resize-none ${errors.message ? 'border-gym-red focus:border-gym-red focus:ring-gym-red/20' : ''}`}
                    placeholder={t === 'en' ? 'Tell us about your fitness goals, preferred timing, or any questions...' : 'हमें अपने फिटनेस लक्ष्यों, पसंदीदा समय, या किसी भी प्रश्न के बारे में बताएं...'}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <motion.p id="message-error" className="mt-1 text-sm text-gym-red" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                      <FiHelpCircle className="w-4 h-4 inline mr-1" /> {errors.message}
                    </motion.p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  loading={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? strings.contact.submitting : strings.contact.submit}
                  <FiCheck className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.2 }}
            >
              <SectionHeading
                title={strings.contactInfo.title}
                subtitle={t === 'en'
                  ? 'Visit us, call us, or message us on WhatsApp.'
                  : 'हमसे मिलें, हमें कॉल करें, या व्हाट्सएप पर मैसेज करें।'}
                align="left"
              />

              <div className="space-y-6">
                <Card hover padding="p-6" className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gym-red/10 flex items-center justify-center text-gym-red flex-shrink-0">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading text-gym-white mb-1">{strings.contactInfo.address}</h4>
                    <p className="text-gym-white-soft">{data.address}</p>
                    <motion.a
                      href="https://maps.google.com/?q=Empire+The+Gym+Lal+Sadak+Hansi+Hisar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-gym-red hover:text-gym-red-light font-heading text-sm uppercase tracking-wider transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {strings.contactInfo.getDirections}
                      <FiExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </Card>

                <Card hover padding="p-6" className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gym-red/10 flex items-center justify-center text-gym-red flex-shrink-0">
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading text-gym-white mb-1">{strings.contactInfo.phone}</h4>
                    <motion.a
                      href={`tel:${data.phoneClean}`}
                      className="text-gym-white-soft hover:text-gym-red transition-colors block mb-1"
                    >
                      {data.phone}
                    </motion.a>
                    <motion.a
                      href={`tel:${data.phoneClean}`}
                      className="btn-secondary text-sm px-4 py-2"
                      whileTap={{ scale: 0.98 }}
                    >
                      {strings.hero.callNow}
                    </motion.a>
                  </div>
                </Card>

                <Card hover padding="p-6" className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 flex-shrink-0">
                    <FiMessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading text-gym-white mb-1">{strings.contactInfo.whatsapp}</h4>
                    <motion.a
                      href={data.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gym-white-soft hover:text-green-500 transition-colors block mb-1"
                    >
                      {t === 'en' ? 'Chat on WhatsApp' : 'व्हाट्सएप पर चैट करें'}
                    </motion.a>
                    <motion.a
                      href={data.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-lg font-heading uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiMessageCircle className="w-4 h-4" />
                      {t === 'en' ? 'Message Us' : 'हमें मैसेज करें'}
                    </motion.a>
                  </div>
                </Card>

                <Card hover padding="p-6" className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gym-gold/10 flex items-center justify-center text-gym-gold flex-shrink-0">
                    <FiWatch className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading text-gym-white mb-1">{strings.contactInfo.timings}</h4>
                    <div className="space-y-1 text-gym-white-soft">
                      <p>{data.timing.weekdays}</p>
                      <p>{data.timing.sunday}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <motion.div
                        className={`w-3 h-3 rounded-full ${openStatus ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      />
                      <span className="font-heading text-sm uppercase tracking-wider">
                        {openStatus 
                          ? (t === 'en' ? strings.contactInfo.openNow : 'खुला है') 
                          : (t === 'en' ? strings.contactInfo.closed : 'बंद')}
                      </span>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-8 rounded-xl overflow-hidden border border-gym-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.123456789!2d75.9876!3d29.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCszAnNDIuMiJOIDc1wrA1OScxNS4zIkU!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Empire The Gym Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="faq" className="section-padding section-alt" aria-labelledby="faq-heading">
        <div className="container-custom">
          <SectionHeading
            title={strings.faq.title}
            subtitle={t === 'en'
              ? 'Quick answers to common questions.'
              : 'सामान्य प्रश्नों के त्वरित उत्तर।'}
          />

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4" role="list">
              {data.faq.map((faq, index) => (
                <FAQItem 
                  key={faq.id} 
                  faq={faq} 
                  index={index}
                  t={t}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}