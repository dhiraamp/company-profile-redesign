import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section className="relative bg-gradient-to-br from-primary to-blue-900 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(240,165,0,0.12),_transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            {t('cta.desc')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-bold hover:bg-white/90 transition-all hover:shadow-xl"
          >
            <i className="fab fa-whatsapp text-green-600" />
            {t('global.chatWA')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
