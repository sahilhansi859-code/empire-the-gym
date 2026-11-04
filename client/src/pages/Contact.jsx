import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMapPin, FiPhone, FiUser, FiPlus, FiMinus, FiCheck, FiHelpCircle } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { gymData, gymMapsUrl, languageStrings, interestedOptions } from '../data/gymData'
import { SectionHeading, HeroContent, Button, Card, CardTitle, CardDescription } from '../components/ui'
import axios from 'axios'
import toast from 'react-hot-toast'

const API_URL = '/api'

function validatePhone(phone) {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned)
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
          {isOpen ? <FiMinus className="w-5 h-5" /> : <FiPlus className="w-5 h-5" />}
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
  const data = gymData[t]
  const strings = languageStrings[t]
  const interestedOptionsData = interestedOptions[t]

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interestedIn: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
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
      setFormData({ name: '', phone: '', interestedIn: '', message: '' })
    } catch (error) {
      toast.error(strings.contact.error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden isolate" aria-labelledby="contact-hero-heading">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={data.heroImages.contact}
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
          <HeroContent data={data} strings={strings} t={t} headingId="contact-hero-heading" />
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
                    {interestedOptionsData.map(option => (
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

              <div className="mb-8 rounded-xl overflow-hidden border border-gym-border">
                <a
                  href={gymMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                  aria-label={t === 'en' ? 'Open Empire The Gym location in Google Maps' : 'गूगल मैप्स में एम्पायर द जिम का स्थान खोलें'}
                  title={t === 'en' ? 'Open in Google Maps' : 'गूगल मैप्स में खोलें'}
                >
                  <img
                    src="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/export?bbox=75.9577,29.1021,75.9629,29.1043&bboxSR=4326&imageSR=4326&size=1000,500&format=jpg&f=image"
                    alt="Satellite view of Empire The Gym, Hansi"
                    width="1000"
                    height="500"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-[300px] object-cover"
                  />
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-full drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
                  >
                    <path
                      fill="#22c55e"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    />
                    <circle cx="12" cy="9" r="2.6" fill="#ffffff" />
                  </svg>
                  <span className="pointer-events-none absolute left-1/2 top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-white px-3 py-1 font-heading text-sm uppercase tracking-wider text-gym-black shadow-lg">
                    {t === 'en' ? 'Empire The Gym, Hansi' : 'एम्पायर द जिम, हांसी'}
                  </span>
                  <span className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-white py-2 font-heading text-sm uppercase tracking-wider text-gym-black">
                    {t === 'en' ? 'Open in Google Maps' : 'गूगल मैप्स में खोलें'}
                  </span>
                </a>
              </div>

              <div className="space-y-6">
                <Card hover padding="p-6" className="flex items-start gap-4">
                  <a
                    href={gymMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open gym address in Google Maps"
                    className="w-12 h-12 rounded-xl bg-gym-red/10 flex items-center justify-center text-gym-red flex-shrink-0 hover:bg-gym-red/20 transition-colors"
                  >
                    <FiMapPin className="w-6 h-6" />
                  </a>
                  <div>
                    <h4 className="font-heading text-gym-white mb-1">{strings.contactInfo.address}</h4>
                    <a href={gymMapsUrl} target="_blank" rel="noopener noreferrer" className="text-gym-white-soft hover:text-gym-red transition-colors">{data.address}</a>
                  </div>
                </Card>

                <Card hover padding="p-6" className="flex items-start gap-4">
                  <a
                    href={`tel:+${data.phoneClean}`}
                    aria-label={`${strings.ui.callNow}: ${data.phone}`}
                    className="w-12 h-12 rounded-xl bg-gym-red/10 flex items-center justify-center text-gym-red flex-shrink-0 hover:bg-gym-red/20 transition-colors"
                  >
                    <FiPhone className="w-6 h-6" />
                  </a>
                  <div>
                    <h4 className="font-heading text-gym-white mb-1">{strings.contactInfo.phone}</h4>
                    <motion.a
                      href={`tel:+${data.phoneClean}`}
                      className="text-gym-white-soft hover:text-gym-red transition-colors block mb-1"
                    >
                      {data.phone}
                    </motion.a>
                  </div>
                </Card>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="faq" className="section-padding section-alt" aria-labelledby="faq-heading">
        <div className="container-custom">
          <SectionHeading
            title={strings.faq.title}
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