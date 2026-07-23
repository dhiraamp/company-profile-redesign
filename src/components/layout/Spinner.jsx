import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Spinner() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
        >
          <div className="w-10 h-10 bg-primary animate-spin" style={{ animation: 'sk-rotateplane 1.2s infinite ease-in-out' }} />
          <style>{`
            @keyframes sk-rotateplane {
              0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); }
              50% { transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }
              100% { transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
