import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight, Send, Phone, Download } from 'lucide-react'
import * as emailjs from '@emailjs/browser'
import { contactInfo, cvUrl } from '../data/portfolio'
import Reveal from '../components/Reveal'
import TextReveal from '../components/TextReveal'
import MagneticButton from '../components/MagneticButton'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  const [focused, setFocused] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // Fallback: open mailto if EmailJS is not configured
      const mailtoLink = `mailto:${contactInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`
      window.location.href = mailtoLink
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      return
    }
    setLoading(true)
    setError(false)
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: contactInfo.email,
        },
        { publicKey: PUBLIC_KEY }
      )
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(true)
      setTimeout(() => setError(false), 5000)
    } finally {
      setLoading(false)
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const inputClass = (name) =>
    `w-full px-5 py-4 bg-white/[0.03] border rounded-xl text-white placeholder-muted/40 focus:outline-none transition-all duration-300 ${
      focused === name
        ? 'border-white/40 bg-white/[0.05]'
        : 'border-white/[0.08] hover:border-white/20'
    }`

  const links = [
    { label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}`, icon: Mail },
    { label: 'GitHub', value: 'github.com/manzi5404', href: contactInfo.github, icon: Github },
  ]
  if (contactInfo.linkedin) {
    links.push({
      label: 'LinkedIn',
      value: 'linkedin.com/in/manzi-lucky-a61337341',
      href: contactInfo.linkedin,
      icon: Linkedin,
    })
  }
  if (contactInfo.phone) {
    links.push({
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
      icon: Phone,
    })
  }

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      {/* Ghost text */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 select-none pointer-events-none whitespace-nowrap">
        <span className="font-display text-[12rem] lg:text-[18rem] leading-none font-bold text-white/[0.02]">
          Contact
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-muted">07</span>
            <span className="inline-block w-10 h-px bg-white/20" />
            <span className="eyebrow">Contact</span>
          </div>
        </Reveal>

        <TextReveal
          as="h2"
          text="Let's build something meaningful."
          className="section-heading mb-16 max-w-3xl"
          stagger={0.05}
        />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <div className="space-y-10">
            <Reveal>
              <p className="text-muted text-lg leading-relaxed max-w-lg">
                Have a project in mind or want to collaborate? Feel free to reach
                out. I'm always open to discussing new opportunities and creative
                projects.
              </p>
            </Reveal>

            <div className="space-y-2">
              {links.map((link, i) => (
                <Reveal key={link.label} delay={i * 0.08}>
                   <a
                    href={link.href}
                    target={link.label === 'Email' || link.label === 'Phone' ? undefined : '_blank'}
                    rel={link.label === 'Email' || link.label === 'Phone' ? undefined : 'noopener noreferrer'}
                    className="group flex items-center justify-between p-5 rounded-xl border border-transparent hover:border-white/[0.08] hover:bg-white/[0.03] transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-muted group-hover:text-white group-hover:border-white/30 transition-colors duration-300">
                        <link.icon size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono uppercase tracking-widest text-muted/50 mb-1">
                          {link.label}
                        </p>
                        <p className="text-white/90 group-hover:text-white transition-colors">
                          {link.value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-muted/40 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </Reveal>
              ))}

              <Reveal delay={0.35}>
                <a
                  href={cvUrl}
                  download
                  className="group flex items-center gap-3 px-5 py-3 text-sm text-muted border border-white/10 rounded-full hover:border-white/30 hover:text-white transition-all duration-300"
                >
                  <Download size={16} className="group-hover:scale-110 transition-transform" />
                  Download CV
                </a>
              </Reveal>
            </div>
          </div>

          {/* Right — form */}
          <Reveal direction="left">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    className={inputClass('name')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    className={inputClass('email')}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  required
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass('message')} resize-none`}
                />
              </div>
               <MagneticButton className="w-full">
                 <button
                   type="submit"
                   disabled={loading}
                   className="w-full btn-primary justify-center group"
                 >
                   <span>{loading ? 'Sending...' : 'Send Message'}</span>
                   <Send size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                 </button>
               </MagneticButton>
               <AnimatePresence>
                 {submitted && (
                   <motion.p
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0 }}
                     className="text-center text-sm text-secondary/70"
                   >
                     Message sent! I'll get back to you soon.
                   </motion.p>
                 )}
                 {error && (
                   <motion.p
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0 }}
                     className="text-center text-sm text-rose"
                   >
                     Something went wrong. Please try again or email me directly.
                   </motion.p>
                 )}
                 {loading && (
                   <motion.p
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0 }}
                     className="text-center text-sm text-muted"
                   >
                     Sending your message...
                   </motion.p>
                 )}
               </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

