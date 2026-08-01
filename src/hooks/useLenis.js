import { useEffect } from 'react'
import Lenis from 'lenis'

export function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
      wheelMultiplier: 1,
    })

    // Expose for programmatic scrolling (scrollToTarget)
    window.__lenis = lenis

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      if (window.__lenis === lenis) window.__lenis = null
    }
  }, [])
}

export function scrollToTarget(target, offset = 0) {
  const el = document.querySelector(target)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  const lenis = window.__lenis
  if (lenis) {
    lenis.scrollTo(top, { duration: 1.2 })
  } else {
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

