import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ZoomOut, Maximize2, FileText, ExternalLink } from 'lucide-react'
import { certificates } from '../data/portfolio'
import Reveal from '../components/Reveal'
import TextReveal from '../components/TextReveal'
import TiltCard from '../components/TiltCard'

function CertificateModal({ cert, onClose }) {
  const [zoom, setZoom] = useState(1)

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === '+' || e.key === '=') setZoom((z) => Math.min(z + 0.25, 3))
      if (e.key === '-') setZoom((z) => Math.max(z - 0.25, 0.5))
    },
    [onClose]
  )

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const isImage = cert.type === 'image'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[90] bg-black/90 backdrop-blur-md flex flex-col p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 max-w-5xl w-full mx-auto">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted">
            {cert.organization}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {isImage && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setZoom((z) => Math.max(z - 0.25, 0.5))
                }}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
                aria-label="Zoom out"
              >
                <ZoomOut size={16} />
              </button>
              <span className="font-mono text-xs text-muted tabular-nums w-12 text-center">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setZoom((z) => Math.min(z + 0.25, 3))
                }}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
                aria-label="Zoom in"
              >
                <ZoomIn size={16} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setZoom(1)
                }}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
                aria-label="Reset zoom"
              >
                <Maximize2 size={16} />
              </button>
            </>
          )}
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors ml-2"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div
        className="flex-1 flex items-center justify-center overflow-auto max-w-5xl w-full mx-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ cursor: isImage ? 'grab' : 'default' }}
      >
        <motion.div
          animate={{ scale: zoom }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="relative max-h-full"
        >
          {isImage ? (
            <img
              src={cert.image}
              alt={cert.title}
              className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg shadow-soft border border-white/10 select-none"
              style={{ cursor: 'zoom-in' }}
              draggable={false}
              onClick={(e) => {
                e.stopPropagation()
                if (zoom > 1) {
                  setZoom(1)
                } else {
                  setZoom(2)
                }
              }}
            />
          ) : (
            <div className="flex flex-col items-center gap-6 p-10">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <FileText size={36} className="text-white/60" />
              </div>
              <p className="text-muted text-center max-w-sm">
                This is a PDF certificate. Open it in a new tab to view.
              </p>
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                <span>Open PDF</span>
                <ExternalLink size={15} className="relative z-10" />
              </a>
            </div>
          )}
        </motion.div>
      </div>

      {/* Footer info */}
      <div className="max-w-5xl w-full mx-auto mt-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-white">{cert.title}</h3>
          <p className="text-xs text-muted mt-0.5">
            {cert.organization} — {cert.date}
          </p>
        </div>
        {isImage && (
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted/50">
            Click image to toggle zoom
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="certificates" className="relative py-28 px-6 overflow-hidden">
      {/* Ghost text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block">
        <span className="font-display text-[14rem] leading-none font-bold text-white/[0.02]">
          Cert
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-muted">04</span>
            <span className="inline-block w-10 h-px bg-white/20" />
            <span className="eyebrow">Certificates</span>
          </div>
        </Reveal>

        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <TextReveal
              as="h2"
              text="Proof of continuous learning."
              className="section-heading"
              stagger={0.05}
            />
            <Reveal delay={0.3}>
              <p className="text-muted mt-4 max-w-xl">
                Every certificate is displayed automatically from my collection.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <span className="font-mono text-sm text-muted border border-white/10 rounded-full px-4 py-2">
              {String(certificates.length).padStart(2, '0')} certificates
            </span>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, index) => (
            <Reveal key={cert.id} delay={(index % 3) * 0.08}>
              <TiltCard
                maxTilt={5}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer h-full"
              >
                <div className="card p-0 h-full overflow-hidden group-hover:border-white/20 transition-colors duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    {cert.type === 'image' ? (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 contrast-[1.05] saturate-[1.05] group-hover:contrast-100 group-hover:saturate-100"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface to-primary">
                        <div className="text-center">
                          <div className="w-14 h-14 mx-auto mb-3 rounded-full border border-white/15 flex items-center justify-center group-hover:border-white/40 transition-colors duration-300">
                            <FileText size={20} className="text-white/50 group-hover:text-white transition-colors duration-300" />
                          </div>
                          <span className="text-[11px] font-mono uppercase tracking-widest text-muted/60">
                            PDF Certificate
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Hover zoom icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ZoomIn size={16} className="text-white/80" />
                    </div>

                    {/* Footer overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-display font-semibold text-white leading-snug mb-1">
                        {cert.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted">{cert.organization}</span>
                        <span className="text-[10px] font-mono text-muted/50">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

