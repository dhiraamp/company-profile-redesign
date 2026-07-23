import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { useLanguage } from '../../context/LanguageContext'

export default function TestimonialCarousel() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)

  const testimonials = [
    { name: 'Project Manager — Siemens Indonesia', text: t('testimonial.text1'), rating: 5 },
    { name: 'Operations Director — CG Power Indonesia', text: t('testimonial.text2'), rating: 5 },
    { name: 'Procurement — PT PLN (Persero)', text: t('testimonial.text3'), rating: 5 },
    { name: 'Site Manager — WPD Indonesia', text: t('testimonial.text4'), rating: 4 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          subtitle={t('testimonial.subtitle')}
          title={t('testimonial.title')}
          center
        />
        <div className="relative max-w-3xl mx-auto mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-light rounded-2xl p-10 text-center"
            >
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i
                    key={i}
                    className={`${i < testimonials[current].rating ? 'fas' : 'far'} fa-star ${i < testimonials[current].rating ? 'text-secondary' : 'text-gray-300'} text-sm`}
                  />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed italic mb-6 text-sm md:text-base">
                "{testimonials[current].text}"
              </p>
              <div className="w-12 h-0.5 bg-primary/30 mx-auto mb-4" />
              <p className="font-bold text-dark">{testimonials[current].name}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-500 ${
                  i === current ? 'bg-primary w-8 h-2.5' : 'bg-gray-300 hover:bg-gray-400 w-2.5 h-2.5'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
