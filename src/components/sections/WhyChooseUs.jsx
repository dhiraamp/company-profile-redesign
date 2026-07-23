import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { useLanguage } from '../../context/LanguageContext'

const icons = ['fa-cubes', 'fa-handshake', 'fa-award', 'fa-users-cog']

export default function WhyChooseUs() {
  const { t } = useLanguage()

  const items = t('whyChooseUs.items')

  return (
    <section className="py-20 md:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle title={t('whyChooseUs.title')} center />
        <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
          <div className="space-y-8">
            {items.slice(0, 2).map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-5 group"
              >
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i className={`fas ${icons[i]} text-white text-xl`} />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg mb-1.5">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[350px] rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/images/feature.jpg"
              alt={t('whyChooseUs.title')}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #0B4F8A, #F0A500)'
                e.target.style.display = 'block'
              }}
            />
          </motion.div>

          <div className="space-y-8">
            {items.slice(2).map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-5 group"
              >
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i className={`fas ${icons[i + 2]} text-white text-xl`} />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg mb-1.5">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
