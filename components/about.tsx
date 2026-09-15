'use client'

import { motion } from 'framer-motion'

const highlights = [
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'FastAPI',
  'Python',
  'JavaScript',
  'TypeScript',
  'MongoDB',
  'REST APIs',
  'Generative AI',
  'Machine Learning',
  'Clean Code',
  'Scalable Applications',
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            AI-Powered Full Stack Developer focused on scalable, maintainable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-600 leading-relaxed">
              I&apos;m an AI-Powered Full Stack Developer with experience building scalable applications and
              responsive interfaces using React.js, Next.js, Node.js, Express.js, Python, FastAPI, MongoDB,
              and TypeScript. I build secure REST APIs and integrate Generative AI and Machine Learning
              capabilities while keeping code clean, maintainable, and focused on real user needs.
            </p>

            <div className="bg-white/85 backdrop-blur-sm shadow-sm border border-sky-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Education</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-slate-900">BCA - Bachelor of Computer Applications</p>
                  <p className="text-sm text-slate-600">University of Technology</p>
                  <p className="text-sm text-sky-600 font-semibold">CGPA: 8.84</p>
                </div>
                <div className="border-t border-slate-200 pt-3">
                  <p className="font-medium text-slate-900">MCA - Master of Computer Applications</p>
                  <p className="text-sm text-slate-600">Poddar Group of Institutions, Rajasthan Technical University</p>
                  <p className="text-sm text-slate-600">Currently Pursuing (2024 – 2026)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Skills Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900">Key Skills & Technologies</h3>
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="bg-white/85 backdrop-blur-sm border border-sky-200 rounded-lg px-4 py-3 text-center shadow-sm"
                >
                  <p className="font-semibold text-sky-600">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
