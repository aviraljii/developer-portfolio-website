'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowUp } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/aviraljii', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aviral-kaushik-49aab8241/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:aviralkaushik2002@gmail.com', label: 'Email' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white text-slate-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 shadow-[0_-12px_30px_rgba(15,23,42,0.05)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Aviral Kaushik
            </h3>
            <p className="text-slate-600">
              Full Stack Developer crafting scalable, high-performance web applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-slate-900">Quick Links</h4>
            <ul className="space-y-2 text-slate-600">
              <li>
                <a href="#about" className="hover:text-sky-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-sky-500 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-slate-900">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 text-sky-500 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 my-8" />

        {/* Bottom Content */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-slate-600 text-sm text-center sm:text-left"
          >
            © {currentYear} Aviral Kaushik. All rights reserved. Designed & Developed with passion.
          </motion.p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center hover:shadow-lg transition-shadow"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
