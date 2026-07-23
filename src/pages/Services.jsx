import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/ui/SectionTitle'
import { serviceList } from '../constants/services'
import { useLanguage } from '../context/LanguageContext'

const iconMap = {
  'pencil-ruler': 'fa-pencil-ruler',
  'broadcast-tower': 'fa-broadcast-tower',
  'road': 'fa-road',
}

export default function Services() {
  const { t } = useLanguage()

  const serviceNames = t('services.items')
  const featured = t('services.featured')

  return (
    <>
      <section className="relative bg-gradient-to-br from-dark via-dark to-primary py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(240,165,0,0.08),_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white"
          >
            {t('services.heroTitle')}
          </motion.h1>
          <div className="mt-5 flex justify-center">
            <div className="w-12 h-0.5 bg-secondary rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h5 className="font-bold text-primary uppercase tracking-[0.2em] text-sm mb-3">{t('services.subtitle')}</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{t('services.title')}</h2>
            <p className="text-gray-500 text-sm leading-relaxed">{t('services.desc')}</p>
          </div>

          <div className="mb-20">
            <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-3">
              <span className="w-1 h-6 bg-primary rounded-full inline-block" />
              {t('services.listSubtitle')}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceList.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 18) * 0.03 }}
                  className="flex items-center gap-3 bg-light rounded-xl p-4 hover:shadow-md hover:bg-white transition-all"
                >
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">{String(service.id).padStart(2, '0')}</span>
                  </div>
                  <span className="font-semibold text-dark text-sm">{serviceNames[i] || service.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-3">
              <span className="w-1 h-6 bg-secondary rounded-full inline-block" />
              {t('services.featuredSubtitle')}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-light rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6 -rotate-45 group-hover:rotate-0 transition-all duration-500">
                    <i className={`fas ${Object.values(iconMap)[i] || 'fa-cog'} text-white text-xl rotate-45 group-hover:rotate-0 transition-all duration-500`} />
                  </div>
                  <h4 className="font-bold text-dark text-lg mb-3">{service.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-primary to-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(240,165,0,0.12),_transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('services.ctaTitle')}</h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">{t('services.ctaDesc')}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-bold hover:bg-white/90 transition-all hover:shadow-xl"
            >
              <i className="fab fa-whatsapp" />
              {t('global.chatWA')}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
