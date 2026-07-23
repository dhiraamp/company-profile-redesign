import { createContext, useContext, useState, useEffect } from 'react'
import translations from '../constants/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('tricon-lang') || 'en')

  useEffect(() => {
    localStorage.setItem('tricon-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang(prev => prev === 'en' ? 'id' : 'en')

  const t = (path) => {
    const keys = path.split('.')
    let result = translations[lang]
    for (const key of keys) {
      if (result == null) return path
      result = result[key]
    }
    return result ?? path
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
