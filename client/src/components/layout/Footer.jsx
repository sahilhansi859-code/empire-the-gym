import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMapPin, FiClock, FiPhone } from 'react-icons/fi'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import { gymMapsUrl, languageStrings, gymData } from '../../data/gymData'

export function Footer() {
  const { t } = useLanguage()
  const strings = languageStrings[t]
  const data = gymData[t]
  const whatsappUrl = `https://wa.me/${data.phoneClean}?text=${encodeURIComponent(strings.ui.whatsappMessage)}`

  const quickLinks = [
    { path: '/', label: strings.nav.home },
    { path: '/about', label: strings.nav.about },
    { path: '/gallery', label: strings.nav.gallery },
    { path: '/contact', label: strings.nav.contact }
  ]

  const socialLinks = [
    { icon: FaInstagram, href: data.social.instagram, label: t === 'en' ? 'Instagram' : 'इंस्टाग्राम' }
  ]

  return (
    <footer className="bg-gym-dark border-t border-gym-border">
      <div className="container-custom py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Link to="/" className="flex items-center gap-2 mb-6" aria-label="Empire The Gym Home">
              <span className="font-heading text-2xl sm:text-3xl text-gym-white">EMPIRE</span>
              <span className="hidden sm:block w-px h-6 bg-gradient-to-b from-gym-red to-gym-gold" />
              <span className="font-heading text-2xl sm:text-3xl text-gym-red">THE GYM</span>
            </Link>
            <p className="text-gym-white-soft text-body-sm mb-6 max-w-xs">
              {t === 'en' 
                ? "Hansi's premier fitness destination. Modern equipment, expert trainers, and a disciplined atmosphere to help you build your empire."
                : "हांसी का प्रमुख फिटनेस गंतव्य। आधुनिक उपकरण, विशेषज्ञ ट्रेनर, और एक अनुशासित माहौल जो आपको अपना साम्राज्य बनाने में मदद करता है।"}
            </p>
            <p className="text-gym-red font-heading text-sm uppercase tracking-wider">
              {data.slogan}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-heading text-lg uppercase tracking-wider text-gym-white mb-6">{strings.footer.quickLinks}</h4>
            <nav aria-label="Quick links">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gym-white-soft hover:text-gym-red transition-colors text-body-sm flex items-center gap-2"
                    >
                      <motion.span
                        className="w-1 h-1 bg-gym-red rounded-full"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-heading text-lg uppercase tracking-wider text-gym-white mb-6">{strings.contactInfo.title}</h4>
            <address className="not-italic space-y-4 text-body-sm">
              <a
                href={gymMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open gym address in Google Maps"
                className="flex items-start gap-3 text-gym-white-soft transition-colors hover:text-gym-red"
              >
                <FiMapPin className="w-5 h-5 text-gym-red mt-0.5 flex-shrink-0" />
                <span>{data.address}</span>
              </a>
              <a href={`tel:+${data.phoneClean}`} className="flex items-center gap-3 text-gym-white-soft transition-colors hover:text-gym-red">
                <FiPhone className="w-5 h-5 text-gym-red flex-shrink-0" />
                <span>{data.phone}</span>
              </a>
              <div className="flex items-start gap-3">
                <FiClock className="w-5 h-5 text-gym-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gym-white-soft">{data.timing.weekdays}</p>
                  <p className="text-gym-gray">{data.timing.sunday}</p>
                </div>
              </div>
            </address>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-heading text-lg uppercase tracking-wider text-gym-white mb-6">{strings.footer.followUs}</h4>
            <div className="flex flex-col items-start gap-3">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-40 items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-heading text-sm uppercase text-white transition-colors hover:bg-green-700"
                whileTap={{ scale: 0.98 }}
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
                <span>WhatsApp</span>
              </motion.a>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-40 items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 hover:brightness-110 text-white px-5 py-3 rounded-lg font-heading text-sm uppercase transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </footer>
  )
}