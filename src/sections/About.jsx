import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Languages, Briefcase, ArrowUpRight } from 'lucide-react'
import {
  name,
  summary,
  location,
  languages,
  profileImage,
  title,
} from '../data/portfolio'
import Reveal from '../components/Reveal'
import TextReveal from '../components/TextReveal'
import MagneticButton from '../components/MagneticButton'

const stats = [
  { value: '3+', label: 'Projects Shipped' },
  { value: '9', label: 'Certifications' },
  { value: '2', label: 'Languages' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      {/* Ghost text */}
      <div className="absolute left-0 bottom-0 select-none pointer-events-none">
        <span className="font-display text-[10rem] lg:text-[16rem] leading-none font-bold text-white/[0.02]">
          About
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-muted">01</span>
            <span className="inline-block w-10 h-px bg-white/20" />
            <span className="eyebrow">About</span>
          </div>
        </Reveal>

        <TextReveal
          as="h2"
          text="Designing & building digital experiences with care."
          className="section-heading mb-16 max-w-3xl"
          stagger={0.05}
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          {/* Left — profile image with parallax frame */}
          <Reveal direction="right" className="lg:sticky lg:top-32">
            <div className="relative max-w-sm mx-auto">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-surface border border-secondary/20 shadow-glow">
                <div className="absolute inset-0">
                  <img
                    src={profileImage}
                    alt={`${name} — ${title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="font-display font-semibold text-white text-lg">{name}</p>
                    <p className="text-xs text-muted">{title}</p>
                  </div>
                  <div className="text-white/80">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — content */}
          <div className="space-y-10">
            <Reveal>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
                {summary}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-muted leading-relaxed max-w-2xl">
                I am a software developer based in {location}, passionate about
                building modern digital solutions. I specialize in full-stack web
                development with a focus on clean, maintainable code and
                user-centered design. I continuously explore emerging technologies,
                particularly in Artificial Intelligence, to create meaningful
                solutions that make a difference.
              </p>
            </Reveal>

            {/* Info cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Reveal delay={0.05} className="card p-5 hover:border-white/15 transition-colors">
                <div className="flex items-center gap-2 text-muted mb-3">
                  <MapPin size={15} />
                  <span className="text-[11px] uppercase tracking-widest">Location</span>
                </div>
                <p className="font-medium text-white">{location}</p>
              </Reveal>

              <Reveal delay={0.1} className="card p-5 hover:border-white/15 transition-colors">
                <div className="flex items-center gap-2 text-muted mb-3">
                  <Languages size={15} />
                  <span className="text-[11px] uppercase tracking-widest">Languages</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-2.5 py-1 text-xs text-white/80 border border-white/10 rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.15} className="card p-5 hover:border-white/15 transition-colors">
                <div className="flex items-center gap-2 text-muted mb-3">
                  <Briefcase size={15} />
                  <span className="text-[11px] uppercase tracking-widest">Status</span>
                </div>
                <p className="font-medium text-white">Open to opportunities</p>
              </Reveal>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 pt-4 border-t border-white/[0.06]">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.08}>
                  <div className="flex flex-col">
                    <span className="font-display text-4xl font-bold text-white">
                      {stat.value}
                    </span>
                    <span className="text-xs text-muted mt-1 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.24} className="self-end ml-auto">
                <MagneticButton>
                  <a href="#contact" className="btn-secondary text-sm">
                    Let's talk
                  </a>
                </MagneticButton>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

