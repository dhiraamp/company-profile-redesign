import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import { useLanguage } from '../context/LanguageContext'

const sectorIcons = ['fa-broadcast-tower', 'fa-bolt', 'fa-building', 'fa-microchip']
const commitIcons = ['fa-medal', 'fa-shield-alt', 'fa-leaf']

export default function WhatWeDo() {
  const { t } = useLanguage()

  const sectors = t('whatWeDo.sectors')
  const workflow = t('whatWeDo.workflow')
  const highlights = t('whatWeDo.stats')
  const commitments = t('whatWeDo.commitments')

  return (
    <>
      <section className="relative bg-gradient-to-br from-dark via-dark to-primary py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(240,165,0,0.08),_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4">{t('whatWeDo.heroSubtitle')}</h5>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-4xl mx-auto leading-[1.1] whitespace-pre-line">
                {t('whatWeDo.heroTitle')}
              </h1>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              {t('whatWeDo.heroDesc')}
            </p>
            <div className="mt-5 flex justify-center">
              <div className="w-12 h-0.5 bg-secondary rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                subtitle={t('whatWeDo.subtitle')}
                title={t('whatWeDo.title')}
              />
              <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">{t('whatWeDo.desc1')}</p>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">{t('whatWeDo.desc2')}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                <i className="fab fa-whatsapp" />
                {t('whatWeDo.discussProject')}
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-5"
            >
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    i % 2 === 0
                      ? 'bg-gradient-to-br from-primary to-blue-800 hover:shadow-blue-900/30'
                      : 'bg-gradient-to-br from-secondary to-yellow-700 hover:shadow-yellow-900/30'
                  }`}
                >
                  <div className="w-12 h-12 mx-auto bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm mb-3">
                    <i className={`fas ${['fa-handshake', 'fa-hard-hat', 'fa-users', 'fa-map-marked-alt'][i]} text-white text-lg`} />
                  </div>
                  <p className="text-3xl font-extrabold text-white">{h.value}</p>
                  <p className="text-white/70 text-sm mt-1">{h.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionTitle
            subtitle={t('whatWeDo.sectorsSubtitle')}
            title={t('whatWeDo.sectorsTitle')}
            center
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {sectors.map((sector, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <i className={`fas ${sectorIcons[i]} text-primary text-xl`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-lg">{sector.title}</h3>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{sector.desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sector.items.map((item, j) => (
                    <span key={j} className="text-xs bg-light text-dark/70 px-3 py-1.5 rounded-lg font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionTitle
            subtitle={t('whatWeDo.workflowSubtitle')}
            title={t('whatWeDo.workflowTitle')}
            center
          />
          <p className="text-center text-gray-500 max-w-2xl mx-auto mb-14 text-sm">
            {t('whatWeDo.workflowDesc')}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflow.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pl-16 group"
              >
                <div className="absolute left-0 top-0 w-11 h-11 bg-primary rounded-xl flex items-center justify-center font-bold text-white text-sm group-hover:scale-110 transition-transform">
                  {String(i + 1).padStart(2, '0')}
                </div>
                {i < workflow.length - 1 && (
                  <div className="absolute left-[18px] top-12 w-0.5 h-[calc(100%+0.5rem)] bg-primary/10" />
                )}
                <h4 className="font-bold text-dark mb-1.5">{w.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(11,79,138,0.3),_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h5 className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-3">{t('whatWeDo.commitmentSubtitle')}</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">{t('whatWeDo.commitmentTitle')}</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {commitments.map((c, i) => (
                <div key={i} className="glass-dark rounded-2xl p-8 hover:bg-white/10 transition-colors">
                  <i className={`fas ${commitIcons[i]} text-secondary text-2xl mb-4`} />
                  <h4 className="font-bold text-white mb-2.5">{c.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-primary to-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(240,165,0,0.12),_transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('whatWeDo.ctaTitle')}</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">{t('whatWeDo.ctaDesc')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-bold hover:bg-white/90 transition-all hover:shadow-xl"
              >
                <i className="fab fa-whatsapp" />
                {t('global.chatWA')}
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-7 py-3.5 rounded-xl font-bold hover:border-white hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                {t('whatWeDo.ctaViewProducts')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
