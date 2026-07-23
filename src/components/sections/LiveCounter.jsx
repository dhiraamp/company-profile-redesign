import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    let current = 0
    const increment = target / 60
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 25)
    return () => clearInterval(timer)
  }, [visible, target])

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-extrabold text-white">
      {count}{suffix}
    </span>
  )
}

export default function LiveCounter() {
  const { t } = useLanguage()

  const stats = [
    { icon: 'fa-building', value: 10, suffix: '+', label: t('liveCounter.years'), color: 'from-primary to-blue-800' },
    { icon: 'fa-hard-hat', value: 50, suffix: '+', label: t('liveCounter.projects'), color: 'from-secondary to-yellow-700' },
    { icon: 'fa-handshake', value: 25, suffix: '+', label: t('liveCounter.clients'), color: 'from-primary to-blue-800' },
  ]

  return (
    <section className="relative -mt-16 z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`bg-gradient-to-br ${stat.color} p-6 md:p-8 flex items-center gap-5 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                i === 0 ? 'hover:shadow-blue-900/30' : 'hover:shadow-yellow-900/30'
              }`}
            >
              <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                <i className={`fas ${stat.icon} text-white text-xl`} />
              </div>
              <div>
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-white/70 text-sm mt-0.5">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
