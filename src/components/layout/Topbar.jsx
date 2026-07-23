import { useLanguage } from '../../context/LanguageContext'

export default function Topbar() {
  const { t, lang, toggleLang } = useLanguage()

  return (
    <div className="hidden lg:block bg-dark sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center gap-5 h-[45px]">
          <span className="text-white/70 text-xs flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-primary text-xs" />
            {t('topbar.address')}
          </span>
          <span className="text-white/70 text-xs flex items-center gap-2">
            <i className="fas fa-phone-alt text-primary text-xs" />
            {t('topbar.phone')}
          </span>
          <span className="text-white/70 text-xs flex items-center gap-2">
            <i className="fas fa-envelope-open text-primary text-xs" />
            {t('topbar.email')}
          </span>
        </div>
        <div className="flex items-center gap-3 h-[45px]">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 text-white/70 hover:text-white text-xs font-semibold transition-colors"
          >
            <span className={lang === 'id' ? 'text-primary' : ''}>ID</span>
            <span className="text-white/30">|</span>
            <span className={lang === 'en' ? 'text-primary' : ''}>EN</span>
          </button>
          <a
            href={`https://wa.me/${t('global.waNumber')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full border border-white/30 text-white/70 hover:bg-white/10 hover:text-white flex items-center justify-center text-xs transition-all"
          >
            <i className="fab fa-whatsapp" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full border border-white/30 text-white/70 hover:bg-white/10 hover:text-white flex items-center justify-center text-xs transition-all"
          >
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  )
}
