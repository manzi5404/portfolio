import React, { useRef, useEffect } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { Github, Mail, ArrowDown, ArrowUpRight } from 'lucide-react'
import { email, github, profileImage, name, title } from '../data/portfolio'
import MagneticButton from '../components/MagneticButton'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

function MouseGlow() {
  const mx = useMotionValue(-500)
  const my = useMotionValue(-500)
  const x = useSpring(mx, { stiffness: 80, damping: 25, mass: 0.6 })
  const y = useSpring(my, { stiffness: 80, damping: 25, mass: 0.6 })

  useEffect(() => {
    const onMove = (e) => {
      mx.set(e.clientX - 250)
      my.set(e.clientY - 250)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my])

  return (
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full pointer-events-none hidden md:block"
      style={{
         background:
           'radial-gradient(circle, rgba(245, 233, 220, 0.08) 0%, transparent 70%)',
        x,
        y,
      }}
      aria-hidden="true"
    />
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.92])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle grid background */}
       <div
         className="absolute inset-0 opacity-[0.05] pointer-events-none"
         style={{
           backgroundImage:
             'linear-gradient(#faf7f3 1px, transparent 1px), linear-gradient(90deg, #faf7f3 1px, transparent 1px)',
           backgroundSize: '80px 80px',
         }}
       />

      <MouseGlow />

      {/* Large ghost typography */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block">
        <motion.span
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="font-display text-[18rem] leading-none font-bold text-white/[0.03]"
          aria-hidden="true"
        >
          ML
        </motion.span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Left — text content */}
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="relative"
          >
            <motion.div initial="hidden" animate="visible" variants={container}>
              <motion.div variants={item} className="flex items-center gap-4 mb-8">
                <span className="inline-block w-10 h-px bg-white/40" />
                <span className="eyebrow">{title}</span>
              </motion.div>

              <h1 className="font-display text-h1 font-bold text-secondary leading-[0.95] tracking-tighter mb-8">
                <span className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.35,
                    }}
                  >
                    {name.split(' ')[0]}
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    className="block bg-clip-text text-transparent bg-gradient-to-b from-secondary via-secondary/90 to-accent"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.5,
                    }}
                  >
                    {name.split(' ')[1]}
                  </motion.span>
                </span>
              </h1>

              <motion.p
                variants={item}
                className="text-muted text-lead max-w-xl leading-relaxed mb-10"
              >
                Building digital experiences that solve real-world problems
                through web development, user-focused design, and emerging
                technologies.
              </motion.p>

              <motion.div variants={item} className="flex flex-wrap items-center gap-4">
                <MagneticButton>
                  <a href="#projects" className="btn-primary group">
                    <span>View My Work</span>
                    <ArrowUpRight
                      size={16}
                      className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <a href="#contact" className="btn-secondary">
                    Get In Touch
                  </a>
                </MagneticButton>
              </motion.div>

              <motion.div variants={item} className="flex items-center gap-8 mt-14">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted hover:text-white transition-colors duration-300 text-sm group"
                  aria-label="GitHub"
                >
                  <Github
                    size={18}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="border-b border-transparent group-hover:border-white/30 transition-colors">
                    GitHub
                  </span>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-muted hover:text-white transition-colors duration-300 text-sm group"
                  aria-label="Email"
                >
                  <Mail
                    size={18}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="border-b border-transparent group-hover:border-white/30 transition-colors">
                    Email
                  </span>
                </a>
                  <span className="hidden sm:flex items-center gap-2 text-xs text-muted/50 font-mono">
                   <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose/40 opacity-75" />
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-rose" />
                   </span>
                   Available for work
                 </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right — profile image */}
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(12px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
              className="relative"
            >
              <div className="relative w-[340px] h-[440px]">
                <div className="absolute inset-0 border border-secondary/20 rounded-[2rem] translate-x-4 translate-y-4" />
                <div className="img-reveal is-visible absolute inset-0 rounded-[2rem] overflow-hidden bg-surface shadow-glow">
                  <img
                    src={profileImage}
                    alt={`${name} — ${title}`}
                     className="w-full h-full object-cover contrast-[1.02]"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-5 left-8 bg-surface border border-secondary/10 rounded-full px-5 py-2.5 backdrop-blur-md flex items-center gap-2.5 shadow-soft">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose/40 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose" />
                  </span>
                  <span className="text-xs font-medium text-white/80">
                    Open to work
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{ opacity: contentOpacity }}
        aria-hidden="true"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted/50 hover:text-white transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em]">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  )
}

