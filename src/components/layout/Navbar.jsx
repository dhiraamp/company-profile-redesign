import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../../constants/navigation'
import { useLanguage } from '../../context/LanguageContext'

export default function Navbar({ onSearch }) {
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [logoError, setLogoError] = useState(false)

  window.addEventListener('scroll', () => {
    setScrolled(window.scrollY > 0)
  }, { passive: true })

  return (
    <header
      className={`sticky top-[45px] z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg'
          : 'bg-white'
      }`}
      style={{ borderBottom: scrolled ? 'none' : '1px solid #EDEDED' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <Link to="/" className="navbar-brand p-0 flex-shrink-0">
            {logoError ? (
              <span className="text-2xl font-extrabold text-primary">{t('global.companyShort')}</span>
            ) : (
              <img
                src="/images/logo-tricon.png"
                alt={t('global.companyName')}
                className="h-[46px] w-auto"
                onError={() => setLogoError(true)}
              />
            )}
          </Link>

          <div className="hidden lg:flex items-center">
            <nav className="flex items-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `nav-link-custom ${isActive ? 'active' : ''}`
                  }
                >
                  {t(link.label)}
                </NavLink>
              ))}
            </nav>
            <button
              onClick={onSearch}
              className="search-toggle-custom"
            >
              <i className="fas fa-search me-1" />
              {t('nav.search')}
            </button>
          </div>

          <button
            className="lg:hidden p-2 text-dark"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-xl text-primary`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg font-bold text-sm transition-colors ${
                      isActive ? 'text-primary bg-light' : 'text-dark hover:bg-light'
                    }`
                  }
                >
                  {t(link.label)}
                </NavLink>
              ))}
              <button
                onClick={() => { setMenuOpen(false); onSearch() }}
                className="px-4 py-3 rounded-lg font-bold text-sm text-dark hover:bg-light text-left transition-colors"
              >
                <i className="fas fa-search me-2" />{t('nav.search')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
