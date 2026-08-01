import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { scrollToTarget } from '../hooks/useLenis'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => scrollToTarget('#hero')}
           className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full border border-secondary/15 bg-surface/80 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-rose hover:border-rose/40 hover:bg-rose/10 transition-all duration-300 shadow-glow"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

