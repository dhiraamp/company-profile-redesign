import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

const footerLinks = [
  { label: 'nav.whatWeDo', path: '/what-we-do' },
  { label: 'nav.whoWeAre', path: '/about' },
  { label: 'nav.ourProject', path: '/portfolio' },
  { label: 'nav.products', path: '/services' },
  { label: 'nav.contactUs', path: '/contact' },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 py-16">
          <div>
            <div className="glass-dark rounded-2xl p-6 text-center mb-5">
              <h3 className="text-xl font-bold text-white">{t('global.companyShort')}</h3>
              <p className="text-sm text-white/60 mt-2">{t('global.companyName')}</p>
              <p className="text-xs text-white/40 mt-1">{t('global.tagline')}</p>
            </div>
            <a
              href={`https://wa.me/${t('global.waNumber')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl text-sm transition-all w-full"
            >
              <i className="fab fa-whatsapp text-green-400" />
              {t('global.chatWA')}
            </a>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5 text-white/90">{t('global.quickLinks')}</h4>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white/50 hover:text-primary transition-colors text-sm"
                >
                  {t(link.label)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5 text-white/90">{t('global.contact')}</h4>
            <div className="space-y-4 text-sm text-white/50">
              <div className="flex gap-3">
                <i className="fas fa-map-marker-alt text-primary mt-0.5" />
                <span>{t('global.contactAddress')}</span>
              </div>
              <div className="flex gap-3">
                <i className="fas fa-phone-alt text-primary mt-0.5" />
                <span>{t('global.contactPhone')}</span>
              </div>
              <div className="flex gap-3">
                <i className="fas fa-envelope text-primary mt-0.5" />
                <span>{t('global.contactEmail')}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5 text-white/90">{t('global.contactPerson')}</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-white/80">{t('global.contactPerson1')}</p>
                <p className="text-white/50 mt-0.5">{t('global.contactEmail')}</p>
                <p className="text-white/50">{t('global.contactPhone')}</p>
              </div>
              <div>
                <p className="font-semibold text-white/80">{t('global.contactPerson2')}</p>
                <p className="text-white/50 mt-0.5">{t('global.contactPerson2Phone')}</p>
                <p className="text-white/50">{t('global.contactPerson2Email')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center text-sm text-white/30">
          &copy; {new Date().getFullYear()} {t('global.companyName')}. {t('global.copyRight')}
        </div>
      </div>
    </footer>
  )
}
