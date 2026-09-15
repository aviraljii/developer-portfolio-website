'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowRight, Download } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FloatingTechStack } from './floating-tech-stack'
import { AnimatedStats } from './animated-stats'

export function Hero() {
  const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '10+', label: 'Projects' },
    { value: '15+', label: 'Technologies' },
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/aviraljii',
      label: 'GitHub',
      color: 'hover:text-sky-500',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/aviral-kaushik-49aab8241/',
      label: 'LinkedIn',
      color: 'hover:text-blue-600',
    },
    {
      icon: Mail,
      href: 'mailto:aviralkaushik2002@gmail.com',
      label: 'Email',
      color: 'hover:text-sky-500',
    },
  ]

  return (
    <section className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative bg-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-sky-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-200 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-7 sm:space-y-8 text-center lg:text-left"
          >
            {/* Main Title */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block px-4 py-2 bg-sky-100 rounded-full border border-sky-300"
              >
                <span className="text-sm font-semibold text-sky-600">
                  AI-Powered Full Stack Developer
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl min-[375px]:text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent break-words"
              >
                Aviral Kaushik
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0"
              >
                Building production-ready web applications and AI-powered solutions.
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              AI-Powered Full Stack Developer with 2 years of experience building production-ready web
              applications, secure REST APIs, and AI-powered solutions with React.js, Next.js, Node.js,
              Express.js, Python, FastAPI, MongoDB, TypeScript, Generative AI, and Machine Learning.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 pt-3 sm:pt-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
              >
                View Projects <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="/Aviral%20Kaushik.CV.pdf"
                download="Aviral Kaushik.CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 border-2 border-sky-500 text-sky-500 font-semibold rounded-lg hover:bg-sky-50 transition-colors flex items-center justify-center gap-2"
              >
                Download Resume <Download size={20} />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex gap-6 pt-3 sm:pt-4 justify-center lg:justify-start"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-slate-600 transition-colors ${link.color}`}
                  aria-label={link.label}
                >
                  <link.icon size={28} />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 min-[375px]:grid-cols-3 gap-3 pt-2 lg:hidden"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-slate-200 bg-white/85 p-4 shadow-lg backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-sky-500">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium text-slate-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full min-h-96 hidden lg:block"
          >
            <FloatingTechStack />
            <AnimatedStats />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
