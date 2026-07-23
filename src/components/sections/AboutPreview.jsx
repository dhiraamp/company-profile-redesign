import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { useLanguage } from '../../context/LanguageContext'

export default function AboutPreview() {
  const { t } = useLanguage()

  const highlights = t('aboutPreview.highlights')

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              subtitle={t('aboutPreview.subtitle')}
              title={t('aboutPreview.title')}
            />
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
              {t('aboutPreview.desc')}
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <div key={item} className="flex items-center gap-2.5 bg-light rounded-xl px-4 py-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-check text-primary text-xs" />
                  </div>
                  <span className="text-sm font-semibold text-dark">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 mb-8 p-4 bg-light rounded-xl">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="fas fa-phone-alt text-white text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{t('aboutPreview.haveProject')}</p>
                <p className="font-bold text-primary text-lg">{t('topbar.phone')}</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <i className="fab fa-whatsapp" />
              {t('global.chatWA')}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[520px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent z-10" />
            <img
              src="/images/about.jpg"
              alt={t('aboutPreview.subtitle')}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #0B4F8A, #071A33)'
                e.target.style.display = 'block'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
