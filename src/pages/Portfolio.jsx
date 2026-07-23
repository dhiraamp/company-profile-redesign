import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData, portfolioCategories } from '../constants/portfolio'
import { useLanguage } from '../context/LanguageContext'

const badges = {
  'Engineering': 'bg-blue-100 text-blue-800',
  'Renewable': 'bg-green-100 text-green-800',
  'Investment & IoT': 'bg-purple-100 text-purple-800',
}

export default function Portfolio() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const portfolioItems = t('portfolio.items')

  const filtered = filter === 'All'
    ? portfolioData
    : portfolioData.filter((p) => p.category === filter)

  const catLabel = (cat) => cat === 'All' ? t('portfolio.filterAll') : (t(`portfolio.categories.${cat}`) || cat)

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
            {t('portfolio.heroTitle')}
          </motion.h1>
          <div className="mt-5 flex justify-center">
            <div className="w-12 h-0.5 bg-secondary rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">{t('portfolio.title')}</h2>
            <p className="text-gray-500 text-sm">{t('portfolio.desc')}</p>
          </div>

          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  filter === cat
                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                    : 'bg-light text-dark/70 hover:bg-gray-200'
                }`}
              >
                {catLabel(cat)}
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => {
                const tItem = portfolioItems.find((p) => p.name === item.name) || {}
                const idx = portfolioData.indexOf(item)
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setSelected(item)}
                    className="group bg-light rounded-2xl p-6 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <i className="fas fa-building text-primary text-xl" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badges[item.category] || 'bg-gray-100 text-gray-800'}`}>
                            {catLabel(item.category)}
                          </span>
                        </div>
                        <h4 className="font-bold text-dark text-lg truncate">{tItem.name || item.name}</h4>
                        <p className="text-primary text-sm flex items-center gap-1">
                          <i className="fas fa-map-marker-alt text-xs" />
                          {tItem.location || item.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-4 line-clamp-2 leading-relaxed">{tItem.desc || item.description}</p>
                    <div className="flex items-center gap-2 mt-4">
                      {item.images.slice(0, 3).map((src, j) => (
                        <img key={j} src={src} alt="" className="w-12 h-12 rounded-xl object-cover bg-gray-200/70" onError={(e) => { e.target.style.display = 'none' }} />
                      ))}
                      <span className="text-xs text-gray-400 ml-auto">{t('portfolio.clickToView')}</span>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badges[selected.category] || 'bg-gray-100'}`}>
                      {catLabel(selected.category)}
                    </span>
                    <h3 className="text-2xl font-bold text-dark mt-3">{selected.name}</h3>
                    <p className="text-primary text-sm flex items-center gap-1 mt-1">
                      <i className="fas fa-map-marker-alt" />
                      {selected.location}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="p-2 hover:bg-light rounded-xl transition-colors"
                  >
                    <i className="fas fa-times text-gray-400" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {selected.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className={`rounded-xl object-cover bg-gray-100 w-full ${i === 0 ? 'col-span-2 h-72' : 'h-48'}`}
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">{selected.description}</p>

                <div className="flex gap-3">
                  {selected.link && (
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
                    >
                      {t('portfolio.visitWebsite')} <i className="fas fa-external-link-alt" />
                    </a>
                  )}
                  <a
                    href={`https://wa.me/${t('global.waNumber')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-green-600 transition-all hover:shadow-lg"
                  >
                    <i className="fab fa-whatsapp" /> {t('portfolio.discussProject')}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative bg-gradient-to-br from-primary to-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(240,165,0,0.12),_transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('portfolio.ctaTitle')}</h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">{t('portfolio.ctaDesc')}</p>
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
