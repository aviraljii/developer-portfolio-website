'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

interface Experience {
  company: string
  position: string
  duration: string
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    company: 'AppVibe',
    position: 'Full Stack Developer',
    duration: 'September 2025 – Present',
    responsibilities: [
      'Developed scalable web applications using React.js, Next.js, Node.js, Express.js, MongoDB, TypeScript, and Python.',
      'Built secure REST APIs and integrated third-party services to extend application functionality.',
      'Implemented AI-powered features using Python and Generative AI libraries.',
      'Collaborated with cross-functional teams to deliver production-ready applications on schedule.',
    ],
  },
  {
    company: 'A3 IT Solutions',
    position: 'Junior Frontend Developer',
    duration: 'September 2024 – August 2025',
    responsibilities: [
      'Developed responsive web applications using React.js, Next.js, JavaScript, and Tailwind CSS.',
      'Built reusable UI components and integrated REST APIs to support scalable feature delivery.',
      'Optimized application performance and ensured cross-browser compatibility.',
      'Collaborated with designers and backend developers to deliver scalable, user-facing features.',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional journey and key achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-12">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-300 to-blue-600 transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/85 backdrop-blur-sm rounded-xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">
                          {exp.position}
                        </h3>
                        <p className="text-sky-600 font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500">{exp.duration}</p>
                  </div>

                  <div className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex gap-3 items-start"
                      >
                        <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                        <p className="text-slate-600">{resp}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:flex justify-center items-start md:items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="w-4 h-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full shadow-lg border-4 border-white relative z-10"
                />
              </div>

              {/* Placeholder for alternating layout */}
              <div className="hidden md:flex flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
