import React from 'react'
import { motion } from 'framer-motion'

export default function TextReveal({
  text,
  as: Tag = 'span',
  className = '',
  delay = 0,
  stagger = 0.04,
  once = true,
  amount = 0.5,
}) {
  const words = text.split(' ')

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: '0.1em', marginBottom: '-0.1em' }}
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: '110%' }}
            whileInView={{ y: 0 }}
            viewport={{ once, amount }}
            transition={{
              duration: 0.8,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

