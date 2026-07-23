import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

export default function FloatingCS() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [showQuickReplies, setShowQuickReplies] = useState(true)
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)
  const faqData = t('faq')

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ id: 'welcome', role: 'bot', text: t('floatingCS.welcome') }])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleQuestion = (faq) => {
    setMessages((prev) => [
      ...prev,
      { id: `user-${faq.id}`, role: 'user', text: faq.question },
      { id: `bot-${faq.id}`, role: 'bot', text: faq.answer },
    ])
    setShowQuickReplies(false)
  }

  const handleInputSubmit = (e) => {
    e.preventDefault()
    const q = input.trim()
    if (!q) return

    const matched = faqData.find(
      (f) => f.question.toLowerCase().includes(q.toLowerCase()) || f.answer.toLowerCase().includes(q.toLowerCase())
    )

    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, role: 'user', text: q },
      {
        id: `bot-${Date.now()}`,
        role: 'bot',
        text: matched ? matched.answer : t('floatingCS.sorry'),
      },
    ])
    setInput('')
    setShowQuickReplies(false)
  }

  const resetChat = () => {
    setMessages([{ id: 'welcome', role: 'bot', text: t('floatingCS.welcome') }])
    setShowQuickReplies(true)
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-110 hover:shadow-xl"
      >
        <i className={`fas ${open ? 'fa-times' : 'fa-comment-dots'} text-2xl`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden flex flex-col"
            style={{ maxHeight: '520px' }}
          >
            <div className="bg-gradient-to-r from-primary to-blue-800 text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <i className="fas fa-robot text-lg" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm">{t('global.companyShort')} Assistant</h4>
                <p className="text-xs text-white/60">{t('floatingCS.online')} &middot; {t('floatingCS.replies')}</p>
              </div>
              <button onClick={resetChat} className="text-white/50 hover:text-white text-xs transition-colors" title={t('floatingCS.resetChat')}>
                <i className="fas fa-redo" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/80" style={{ minHeight: '320px', maxHeight: '360px' }}>
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'bot' && (
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                      <i className="fas fa-robot text-primary text-xs" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-primary text-white rounded-br-md'
                        : 'bg-white text-gray-700 shadow-sm rounded-bl-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {showQuickReplies && faqData && (
                <div className="pt-2">
                  <p className="text-xs text-gray-400 mb-2.5">{t('floatingCS.commonQuestions')}</p>
                  <div className="flex flex-wrap gap-2">
                    {faqData.map((faq) => (
                      <button
                        key={faq.id}
                        onClick={() => handleQuestion(faq)}
                        className="text-xs bg-white border border-gray-200 hover:border-primary hover:text-primary rounded-full px-3 py-1.5 transition-colors text-gray-600 shadow-sm"
                      >
                        {faq.question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {!showQuickReplies && (
                <button
                  onClick={() => setShowQuickReplies(true)}
                  className="text-xs text-primary hover:underline mt-1"
                >
                  {t('floatingCS.backToQuestions')}
                </button>
              )}

              <div ref={bottomRef} />
            </div>

            <div className="border-t border-gray-100 p-3 bg-white">
              <form onSubmit={handleInputSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t('floatingCS.placeholder')}
                  className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-xl outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-gray-50"
                />
                <button
                  type="submit"
                  className="w-9 h-9 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary/90 transition-colors flex-shrink-0"
                >
                  <i className="fas fa-paper-plane text-xs" />
                </button>
              </form>
              <a
                href={`https://wa.me/${t('global.waNumber')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 mt-2 text-xs text-green-600 hover:underline"
              >
                <i className="fab fa-whatsapp" /> {t('floatingCS.chatWA')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
