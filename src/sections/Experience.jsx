import React from 'react'
import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'
import Reveal from '../components/Reveal'
import TextReveal from '../components/TextReveal'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-muted">05</span>
            <span className="inline-block w-10 h-px bg-white/20" />
            <span className="eyebrow">Experience</span>
          </div>
        </Reveal>

        <TextReveal
          as="h2"
          text="Where I've applied the craft."
          className="section-heading mb-16"
          stagger={0.05}
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.08]" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <Reveal key={index} delay={index * 0.1} className="relative pl-10">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
                  className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-white bg-primary"
                />

                <div className="card p-8 hover:border-white/15 transition-colors duration-500 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h3 className="font-display text-xl font-semibold text-white group-hover:text-white/90 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs text-muted border border-white/10 rounded-full px-3 py-1.5 inline-flex items-center self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted/80 mb-5 uppercase tracking-wider">
                    {exp.company}
                  </p>

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                        className="flex items-start gap-3 text-sm text-white/70 leading-relaxed"
                      >
                        <span className="text-white/20 mt-2 inline-block w-3 h-px shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

