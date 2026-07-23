import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { useLanguage } from '../../context/LanguageContext'

const iconMap = {
  'pencil-ruler': 'fa-pencil-ruler',
  'broadcast-tower': 'fa-broadcast-tower',
  'road': 'fa-road',
}

export default function ServicesPreview() {
  const { t } = useLanguage()

  const featured = t('services.featured')

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          subtitle={t('servicesPreview.subtitle')}
          title={t('servicesPreview.title')}
          center
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all"
              >
                {t('servicesPreview.learnMore')}
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl p-8 text-center flex flex-col items-center justify-center"
          >
            <h3 className="text-white font-bold text-xl mb-3">{t('servicesPreview.needService')}</h3>
            <p className="text-white/70 text-sm mb-5 leading-relaxed">
              {t('servicesPreview.needServiceDesc')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-white/90 transition-all hover:shadow-lg"
            >
              <i className="fab fa-whatsapp" />
              {t('global.chatWA')}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
