import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiFacebook, FiInstagram, FiYoutube, FiMapPin, FiClock, FiPhone, FiMessageCircle, FiExternalLink } from 'react-icons/fi'
import { useLanguage } from '../../context/LanguageContext'
import { languageStrings, gymData } from '../../data/gymData'

export function Footer() {
  const { t } = useLanguage()
  const strings = languageStrings[t]
  const data = gymData

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: strings.nav.home },
    { path: '/about', label: strings.nav.about },
    { path: '/gallery', label: strings.nav.gallery },
    { path: '/contact', label: strings.nav.contact }
  ]

  const socialLinks = [
    { icon: FiFacebook, href: data.social.facebook, label: t === 'en' ? 'Facebook' : 'फेसबुक' },
    { icon: FiInstagram, href: data.social.instagram, label: t === 'en' ? 'Instagram' : 'इंस्टाग्राम' },
    { icon: FiYoutube, href: data.social.youtube, label: t === 'en' ? 'YouTube' : 'यूट्यूब' }
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
              <div className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-gym-red mt-0.5 flex-shrink-0" />
                <span className="text-gym-white-soft">{data.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-gym-red flex-shrink-0" />
                <a href={`tel:${data.phoneClean}`} className="text-gym-white-soft hover:text-gym-red transition-colors">{data.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <FiMessageCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href={data.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gym-white-soft hover:text-green-500 transition-colors">WhatsApp</a>
              </div>
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
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gym-card border border-gym-border flex items-center justify-center text-gym-white-soft hover:text-gym-red hover:border-gym-red transition-all"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <a
              href={data.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-heading text-sm uppercase transition-colors"
            >
              <FiMessageCircle className="w-5 h-5" />
              <span>{strings.ui.whatsappUs}</span>
              <FiExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-gym-border flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gym-white-soft text-sm text-center md:text-left">
            {strings.footer.copyright.replace('2024', currentYear.toString())}
          </p>
          <p className="text-gym-white-soft text-sm text-center md:text-right">
            {strings.footer.designedBy}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}