import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, ArrowDownRight, Monitor } from 'lucide-react'
import { projects } from '../data/portfolio'
import Reveal from '../components/Reveal'
import TextReveal from '../components/TextReveal'
import TiltCard from '../components/TiltCard'
import MagneticButton from '../components/MagneticButton'

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [expanded, setExpanded] = useState(null)

  const nextProject = () => {
    setExpanded(null)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setExpanded(null)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const featuredProject = projects[currentIndex]

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-muted">03</span>
            <span className="inline-block w-10 h-px bg-white/20" />
            <span className="eyebrow">Projects</span>
          </div>
        </Reveal>

        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <TextReveal
            as="h2"
            text="Selected work & experiments."
            className="section-heading max-w-2xl"
            stagger={0.05}
          />
          <Reveal delay={0.2}>
            <div className="flex items-center gap-3">
              <button
                onClick={prevProject}
                className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all duration-300 hover:bg-white/5"
                aria-label="Previous project"
              >
                <ArrowDownRight size={18} />
              </button>
              <span className="font-mono text-sm text-muted tabular-nums">
                {String(currentIndex + 1).padStart(2, '0')}
                <span className="text-muted/30"> / {String(projects.length).padStart(2, '0')}</span>
              </span>
              <button
                onClick={nextProject}
                className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all duration-300 hover:bg-white/5"
                aria-label="Next project"
              >
                <ArrowUpRight size={18} />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Featured project card */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-stretch">
          {/* Visual / info card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={featuredProject.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              <TiltCard maxTilt={4} className="card overflow-hidden flex-1">
                {featuredProject.liveUrl ? (
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-[16/9] bg-gradient-to-br from-surface to-primary overflow-hidden group"
                  >
                    {/* Browser mockup chrome */}
                    <div className="absolute inset-x-0 top-0 h-8 bg-white/[0.04] border-b border-white/[0.08] flex items-center px-3 gap-1.5 z-20">
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="ml-3 flex-1 max-w-xl">
                        <div className="h-5 rounded-md bg-white/[0.04] border border-white/[0.08] flex items-center px-2.5">
                          <span className="text-[10px] font-mono text-muted/60 truncate">{featuredProject.liveUrl}</span>
                        </div>
                      </div>
                    </div>

                    {/* Site preview area */}
                    <div className="absolute inset-0 flex items-center justify-center pt-8">
                      <div className="text-center">
                        <span className="font-display text-6xl font-bold text-white/[0.06] group-hover:text-white/[0.1] transition-colors duration-500">
                          {featuredProject.name.charAt(0)}
                        </span>
                        <p className="text-xs text-muted/40 font-mono mt-2 tracking-wider">
                          {featuredProject.liveUrl.replace(/^https?:\/\//, '').split('/')[0]}
                        </p>
                      </div>
                    </div>

                    {/* Grid pattern */}
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage:
                          'linear-gradient(#faf7f3 1px, transparent 1px), linear-gradient(90deg, #faf7f3 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                      }}
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                    {/* Status + Live badge */}
                    <div className="absolute top-10 left-5 flex gap-2 z-20">
                      <span
                        className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full backdrop-blur-md ${
                          featuredProject.status === 'completed'
                            ? 'bg-white/10 text-white/80 border border-white/15'
                            : 'bg-white/5 text-muted border border-white/10'
                        }`}
                      >
                        {featuredProject.status === 'completed' ? 'Completed' : 'In Progress'}
                      </span>
                      <span className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full bg-rose/20 text-rose border border-rose/30 backdrop-blur-md flex items-center gap-1.5">
                        <Monitor size={12} />
                        Live
                      </span>
                    </div>

                    {/* Category / role */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between z-20">
                      <span className="text-xs text-muted font-mono uppercase tracking-wider">
                        {featuredProject.category}
                      </span>
                      <span className="text-xs text-muted font-mono">{featuredProject.role}</span>
                    </div>

                    {/* Click prompt */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono text-white flex items-center gap-2">
                        <ExternalLink size={14} />
                        Visit Site
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="relative aspect-[16/9] bg-gradient-to-br from-surface to-primary overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-[7rem] font-bold text-white/[0.04]">
                        {featuredProject.name.charAt(0)}
                      </span>
                    </div>
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage:
                          'linear-gradient(#faf7f3 1px, transparent 1px), linear-gradient(90deg, #faf7f3 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                      }}
                    />
                    <div className="absolute top-5 left-5 flex gap-2">
                      <span
                        className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full backdrop-blur-md ${
                          featuredProject.status === 'completed'
                            ? 'bg-white/10 text-white/80 border border-white/15'
                            : 'bg-white/5 text-muted border border-white/10'
                        }`}
                      >
                        {featuredProject.status === 'completed' ? 'Completed' : 'In Progress'}
                      </span>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                      <span className="text-xs text-muted font-mono uppercase tracking-wider">
                        {featuredProject.category}
                      </span>
                      <span className="text-xs text-muted font-mono">{featuredProject.role}</span>
                    </div>
                  </div>
                )}
              </TiltCard>

              <div className="mt-8 flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="font-display text-3xl font-bold text-white tracking-tight">
                    {featuredProject.name}
                  </h3>
                  <span className="text-white/20">/</span>
                  <p className="text-muted text-sm">{featuredProject.category}</p>
                </div>

                <AnimatePresence initial={false}>
                  {expanded === featuredProject.id ? (
                    <motion.div
                      key="expanded"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted leading-relaxed mb-5">{featuredProject.description}</p>
                      <div className="grid sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-[11px] font-mono uppercase tracking-widest text-muted/50 mb-3">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {featuredProject.features.map((f) => (
                              <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                                <span className="text-white/30 mt-1.5">—</span>
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-[11px] font-mono uppercase tracking-widest text-muted/50 mb-3">
                            Challenges
                          </h4>
                          <p className="text-sm text-white/70 leading-relaxed">
                            {featuredProject.challenges}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="summary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-muted leading-relaxed mb-6"
                    >
                      {featuredProject.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs text-muted border border-white/[0.08] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {featuredProject.repoUrl && (
                    <MagneticButton strength={0.2}>
                      <a
                        href={featuredProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-sm"
                      >
                        <Github size={15} />
                        Source Code
                      </a>
                    </MagneticButton>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Project list */}
          <div className="flex flex-col gap-3">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.06}>
                <button
                  onClick={() => {
                    setExpanded(expanded === project.id ? null : project.id)
                    setCurrentIndex(index)
                  }}
                  className={`w-full text-left group relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 ${
                    index === currentIndex
                      ? 'border-white/20 bg-surface shadow-glow'
                      : 'border-white/[0.06] bg-primary hover:border-white/15 hover:bg-surface/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] text-muted/40">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        index === currentIndex ? 'bg-white' : 'bg-white/20'
                      }`}
                    />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-white mb-1">
                    {project.name}
                  </h4>
                  <p className="text-xs text-muted mb-3">{project.category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono text-muted/60 border border-white/[0.06] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.liveUrl && (
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-rose/80">
                      <Monitor size={12} />
                      <span>Live Demo Available</span>
                    </div>
                  )}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={18} className="text-white/60" />
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

