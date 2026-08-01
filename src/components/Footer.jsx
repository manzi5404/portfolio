import React from 'react'
import { Github, Mail, Linkedin, ArrowUp } from 'lucide-react'
import { contactInfo } from '../data/portfolio'
import { scrollToTarget } from '../hooks/useLenis'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.06] py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                scrollToTarget('#hero')
              }}
              className="font-display text-2xl font-bold tracking-tighter text-white"
            >
              ML<span className="text-white/30">.</span>
            </a>
            <p className="text-xs text-muted/60 mt-2">
              Designed & built with attention to every detail.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-secondary/10 flex items-center justify-center text-muted hover:text-rose hover:border-rose/30 hover:bg-rose/5 transition-all duration-300"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="w-11 h-11 rounded-full border border-secondary/10 flex items-center justify-center text-muted hover:text-rose hover:border-rose/30 hover:bg-rose/5 transition-all duration-300"
              aria-label="Send email"
            >
              <Mail size={18} />
            </a>
            <a
              href={contactInfo.linkedin || '#'}
              target={contactInfo.linkedin ? '_blank' : undefined}
              rel={contactInfo.linkedin ? 'noopener noreferrer' : undefined}
              className="w-11 h-11 rounded-full border border-secondary/10 flex items-center justify-center text-muted hover:text-rose hover:border-rose/30 hover:bg-rose/5 transition-all duration-300"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-sm text-muted/50">
              © {year} Manzi Lucky. All rights reserved.
            </p>
            <button
              onClick={() => scrollToTarget('#hero')}
               className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted hover:text-rose transition-colors duration-300"
               aria-label="Back to top"
             >
               Back to top
               <span className="w-8 h-8 rounded-full border border-secondary/10 flex items-center justify-center group-hover:border-rose/30 group-hover:bg-rose/5 transition-all duration-300">
                <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

