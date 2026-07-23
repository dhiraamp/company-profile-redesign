import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { LanguageProvider } from '../../context/LanguageContext'
import Topbar from './Topbar'
import Navbar from './Navbar'
import Footer from './Footer'
import Spinner from './Spinner'
import FloatingWA from './FloatingWA'
import FloatingCS from './FloatingCS'
import SearchModal from './SearchModal'

export default function Layout() {
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <LanguageProvider>
      <Spinner />
      <Topbar />
      <Navbar onSearch={() => setSearchOpen(true)} />
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingWA />
      <FloatingCS />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </LanguageProvider>
  )
}
