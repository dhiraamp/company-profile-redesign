import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  const values = t('about.values')

  return (
    <>
      <section className="relative bg-gradient-to-br from-dark via-dark to-primary py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(11,79,138,0.3),_transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white"
          >
            {t('about.heroTitle')}
          </motion.h1>
          <div className="mt-5 flex justify-center">
            <div className="w-12 h-0.5 bg-secondary rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] md:h-[520px] rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent z-10" />
              <img
                src="/images/about.jpg"
                alt={t('about.subtitle')}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.background = 'linear-gradient(135deg, #0B4F8A, #071A33)'; e.target.style.display = 'block' }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                subtitle={t('about.subtitle')}
                title={t('about.title')}
              />
              <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
                {t('about.desc')}
              </p>
              <div className="grid grid-cols-2 gap-5 mb-8">
                <div className="bg-light rounded-xl p-4">
                  <h6 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">{t('about.company')}</h6>
                  <p className="text-sm font-semibold text-dark">{t('about.companyName')}</p>
                </div>
                <div className="bg-light rounded-xl p-4">
                  <h6 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">{t('about.discipline')}</h6>
                  <p className="text-sm font-semibold text-dark">{t('about.disciplineValue')}</p>
                </div>
                <div className="bg-light rounded-xl p-4">
                  <h6 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">{t('about.basedIn')}</h6>
                  <p className="text-sm font-semibold text-dark">{t('about.basedInValue')}</p>
                </div>
                <div className="bg-light rounded-xl p-4">
                  <h6 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">{t('about.office')}</h6>
                  <p className="text-sm font-semibold text-dark">{t('about.officeValue')}</p>
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
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionTitle
            subtitle={t('about.valuesSubtitle')}
            title={t('about.valuesTitle')}
            center
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold text-xl">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="font-bold text-dark text-lg mb-3">{v.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-primary to-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(240,165,0,0.15),_transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('about.ctaTitle')}</h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">{t('about.ctaDesc')}</p>
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
    </>
  )
}
