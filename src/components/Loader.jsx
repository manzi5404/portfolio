import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 1600
    const start = performance.now()
    let rafId

    const tick = (now) => {
      const elapsed = now - start
      const rawProgress = Math.min(elapsed / duration, 1)
      // Ease progress with a smooth cubic curve
      const eased = 1 - Math.pow(1 - rawProgress, 3)
      setProgress(Math.round(eased * 100))
      if (rawProgress < 1) {
        rafId = requestAnimationFrame(tick)
      } else {
        setTimeout(onComplete, 500)
      }
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [onComplete])

  return (
    <motion.div
      className="loader-overlay"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] } }}
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center">
        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl md:text-7xl font-bold tracking-tighter text-white"
        >
          ML
        </motion.div>

        {/* Progress counter */}
        <div className="mt-8 font-mono text-sm text-muted tracking-widest tabular-nums">
          {progress.toString().padStart(3, '0')}
          <span className="text-white/30"> / 100</span>
        </div>

        {/* Progress line */}
        <div className="mt-4 w-48 h-px bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-rose via-secondary to-accent"
            animate={{ scaleX: progress / 100 }}
            transition={{ ease: 'linear' }}
            style={{ transformOrigin: 'left' }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-xs text-muted/60 uppercase tracking-[0.25em]"
        >
          Crafting Experience
        </motion.p>
      </div>
    </motion.div>
  )
}

