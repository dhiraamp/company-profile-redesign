import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

export default function SearchModal({ open, onClose }) {
  const { t } = useLanguage()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const navigate = useNavigate()

  const serviceNames = t('services.items')
  const portfolioItems = t('portfolio.items')

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }
    const q = query.toLowerCase()
    const services = serviceNames.filter((name) => name.toLowerCase().includes(q)).map((name) => ({ label: name, path: '/services' }))
    const portfolios = portfolioItems.filter((p) => p.name.toLowerCase().includes(q)).map((p) => ({ label: p.name, path: '/portfolio' }))
    setResults([...services, ...portfolios])
  }, [query, serviceNames, portfolioItems])

  const handleSelect = (path) => {
    onClose()
    setQuery('')
    navigate(path)
  }

  useEffect(() => {
    if (!open) {
      setQuery('')
      setResults([])
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24"
          onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden border border-white/20"
          >
            <div className="flex items-center border-b border-gray-100 px-4">
              <i className="fas fa-search text-gray-400" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('searchModal.placeholder')}
                className="flex-1 p-4 outline-none text-sm bg-transparent"
              />
              <button onClick={onClose} className="text-gray-400 hover:text-dark p-2 transition-colors">
                <i className="fas fa-times" />
              </button>
            </div>
            {results.length > 0 && (
              <div className="max-h-72 overflow-y-auto p-2">
                {results.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(r.path)}
                    className="w-full text-left px-4 py-3 rounded-xl hover:bg-light transition-colors text-sm group"
                  >
                    <span className="font-semibold text-dark group-hover:text-primary transition-colors">{r.label}</span>
                    <span className="text-gray-400 ml-2 text-xs">{t('searchModal.in')} {r.path}</span>
                  </button>
                ))}
              </div>
            )}
            {query && results.length === 0 && (
              <p className="p-6 text-sm text-gray-400 text-center">{t('searchModal.noResults')} &ldquo;{query}&rdquo;</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
