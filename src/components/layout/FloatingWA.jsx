import { motion } from 'framer-motion'

const WA_NUMBER = '6281389908113'

export default function FloatingWA() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      href={`https://wa.me/${WA_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors hover:scale-110"
    >
      <i className="fab fa-whatsapp text-2xl" />
    </motion.a>
  )
}
