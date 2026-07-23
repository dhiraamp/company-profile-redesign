import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)

  const slides = [
    {
      subtitle: t('hero.subtitle1'),
      title: t('hero.title1'),
      desc: t('hero.desc1'),
      btn1: { label: t('hero.btnContact'), to: '/contact' },
      btn2: { label: t('hero.btnServices'), to: '/services' },
    },
    {
      subtitle: t('hero.subtitle2'),
      title: t('hero.title2'),
      desc: t('hero.desc2'),
      btn1: { label: t('hero.btnContact'), to: '/contact' },
      btn2: { label: t('hero.btnPortfolio'), to: '/portfolio' },
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="relative h-[85vh] min-h-[500px] overflow-hidden bg-dark">
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-dark/30 z-10" />
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={`/images/hero-${current + 1}.jpg`}
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.5)' }}
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h5 className="text-white/70 uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-semibold">
                {slides[current].subtitle}
              </h5>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
                {slides[current].title}
              </h1>
              <p className="text-white/60 text-sm md:text-lg mb-10 max-w-2xl leading-relaxed">
                {slides[current].desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={slides[current].btn1.to}
                  className="bg-primary hover:bg-primary/90 text-white px-7 py-3.5 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  {slides[current].btn1.label}
                </Link>
                <Link
                  to={slides[current].btn2.to}
                  className="border-2 border-white/30 hover:border-white text-white px-7 py-3.5 rounded-xl font-bold transition-all backdrop-blur-sm bg-white/5 hover:bg-white/10"
                >
                  {slides[current].btn2.label}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-500 ${
              i === current
                ? 'bg-primary w-10 h-2.5'
                : 'bg-white/30 hover:bg-white/50 w-2.5 h-2.5'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
