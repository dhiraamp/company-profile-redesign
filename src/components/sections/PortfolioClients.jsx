import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { useLanguage } from '../../context/LanguageContext'

const clients = [
  'Siemens\nIndonesia',
  'CG Power\nIndonesia',
  'PT PLN\n(Persero)',
  'WPD\nIndonesia',
  'Duta\nRealtindo',
]

export default function PortfolioClients() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          subtitle={t('portfolioClients.subtitle')}
          title={t('portfolioClients.title')}
          center
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
          {clients.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-center"
            >
              <h5 className="font-bold text-dark/70 whitespace-pre-line text-sm">{name}</h5>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/portfolio"
              className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl p-6 flex items-center justify-center text-center h-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <h5 className="font-bold text-white text-sm">{t('portfolioClients.viewAll')}</h5>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
