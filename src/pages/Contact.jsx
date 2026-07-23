import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = form.name || '(nama)'
    const email = form.email || '-'
    const phone = form.phone || '-'
    const message = form.message || '-'
    const waMessage = `Halo Tricon, saya ${name}.%0AEmail: ${email}%0ATelepon: ${phone}%0APesan: ${message}`
    window.open(`https://wa.me/${t('global.waNumber')}?text=${waMessage}`, '_blank')
  }

  return (
    <>
      <section className="relative bg-gradient-to-br from-dark via-dark to-primary py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(240,165,0,0.08),_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white"
          >
            {t('contact.heroTitle')}
          </motion.h1>
          <div className="mt-5 flex justify-center">
            <div className="w-12 h-0.5 bg-secondary rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">{t('contact.title')}</h2>
            <p className="text-gray-500 text-sm">{t('contact.desc')}</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-6"
            >
              <div className="bg-light rounded-2xl p-6 space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-dark">{t('contact.addressTitle')}</h5>
                    <p className="text-gray-600 text-sm mt-0.5">{t('global.contactAddress')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone-alt text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-dark">{t('contact.officeTitle')}</h5>
                    <p className="text-gray-600 text-sm mt-0.5">{t('global.contactPhone')}</p>
                  </div>
                </div>
                <hr className="border-gray-200" />
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-user text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-dark text-sm">{t('global.contactPerson')}: {t('global.contactPerson1')}</h5>
                    <p className="text-gray-600 text-sm mt-0.5">{t('global.contactEmail')}</p>
                    <p className="text-gray-600 text-sm">{t('global.contactPhone')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-user text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-dark text-sm">{t('global.contactPerson')}: {t('global.contactPerson2')}</h5>
                    <p className="text-gray-600 text-sm mt-0.5">{t('global.contactPerson2Phone')}</p>
                    <p className="text-gray-600 text-sm">{t('global.contactPerson2Email')}</p>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${t('global.waNumber')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white w-full py-3.5 rounded-xl font-bold hover:bg-green-600 transition-all hover:shadow-lg"
              >
                <i className="fab fa-whatsapp text-xl" />
                {t('global.chatWA')}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <div className="bg-light rounded-2xl p-8">
                <h3 className="font-bold text-dark text-xl mb-6">{t('contact.sendMessage')}</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-1.5">{t('contact.formName')}</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm bg-white"
                        placeholder={t('contact.formNamePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-1.5">{t('contact.formEmail')}</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm bg-white"
                        placeholder={t('contact.formEmailPlaceholder')}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">{t('contact.formPhone')}</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm bg-white"
                      placeholder={t('contact.formPhonePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">{t('contact.formMessage')}</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm bg-white resize-none"
                      placeholder={t('contact.formMessagePlaceholder')}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
                  >
                    <i className="fab fa-whatsapp" />
                    {t('contact.formSubmit')}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="h-[400px] relative">
        <iframe
          title={t('contact.mapTitle')}
          className="w-full h-full"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d106.6182187!3d-6.292782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd00065d4c41%3A0xfe13f582b092d79!2sPT.%20Tricon%20Mitra%20Utama%20Konsultan!5e0!3m2!1sid!2sid!4v1"
        />
        <div className="absolute inset-0 pointer-events-none shadow-inner" />
      </section>
    </>
  )
}
