import React, { useRef } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({
  children,
  strength = 0.3,
  className = '',
  ...props
}) {
  const innerRef = useRef(null)

  const handleMouseMove = (e) => {
    const el = innerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const handleMouseLeave = () => {
    const el = innerRef.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
  }

  return (
    <motion.div
      className={`inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...props}
    >
      <div
        ref={innerRef}
        style={{ transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)' }}
      >
        {children}
      </div>
    </motion.div>
  )
}

