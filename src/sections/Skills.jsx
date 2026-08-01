import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import Reveal from '../components/Reveal'
import TextReveal from '../components/TextReveal'

const categories = [
  { key: 'frontend', label: 'Frontend', index: '01' },
  { key: 'backend', label: 'Backend', index: '02' },
  { key: 'databases', label: 'Databases', index: '03' },
  { key: 'design', label: 'Design', index: '04' },
  { key: 'ai', label: 'AI', index: '05' },
  { key: 'tools', label: 'Tools', index: '06' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-muted">02</span>
            <span className="inline-block w-10 h-px bg-white/20" />
            <span className="eyebrow">Skills</span>
          </div>
        </Reveal>

        <TextReveal
          as="h2"
          text="A focused toolkit for building the web."
          className="section-heading mb-16 max-w-2xl"
          stagger={0.05}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {categories.map((cat, index) => (
            <Reveal
              key={cat.key}
              delay={index * 0.05}
              className="bg-primary group relative p-8 transition-colors duration-500 hover:bg-surface"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs text-muted/50">{cat.index}</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted/40 group-hover:text-white/60 transition-colors duration-300">
                  {skills[cat.key].length} items
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="inline-block w-2 h-2 bg-white/30 group-hover:bg-white transition-colors duration-300" />
                {cat.label}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skills[cat.key].map((skill) => {
                  const isString = typeof skill === 'string'
                  const skillName = isString ? skill : skill.name
                  const level = isString ? 'intermediate' : skill.level
                  return (
                    <span
                      key={skillName}
                      className="px-3 py-1.5 text-[13px] text-muted border border-white/[0.08] rounded-full transition-all duration-300 group-hover:border-white/20 group-hover:text-white/80"
                    >
                      {skillName}
                      {!isString && (
                        <span className="ml-1.5 text-[9px] font-mono uppercase text-muted/40">
                          {level === 'advanced' ? 'adv' : 'int'}
                        </span>
                      )}
                    </span>
                  )
                })}
              </div>
            </Reveal>
          ))}

          {/* Languages card */}
          <Reveal
            delay={0.35}
            className="bg-primary group relative p-8 border-t border-white/[0.06] lg:border-t-0 lg:col-span-3 transition-colors duration-500 hover:bg-surface"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex items-center gap-3 shrink-0">
                <span className="inline-block w-2 h-2 bg-white/30 group-hover:bg-white transition-colors duration-300" />
                <h3 className="font-display text-xl font-semibold text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1.5 text-[13px] text-muted border border-white/[0.08] rounded-full transition-all duration-300 group-hover:border-white/20 group-hover:text-white/80"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

