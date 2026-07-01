'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

export function Education() {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Poddar Group of Institutions',
      university: 'Rajasthan Technical University',
      period: '2024 – 2026',
      status: 'Currently Pursuing',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'University of Technology',
      university: '',
      period: '2021 – 2024',
      gpa: '8.84',
      status: 'Completed',
    },
  ]

  const certifications = [
    {
      name: 'MERN Stack Certification',
      issuer: 'Regex Software Services',
      icon: Award,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-balance bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <GraduationCap className="text-sky-500" />
              Education
            </h3>

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 border-l-4 border-sky-500 rounded-lg p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-sky-600 dark:text-sky-400 font-semibold">{edu.institution}</p>
                    {edu.university && (
                      <p className="text-sm text-slate-600 dark:text-slate-400">{edu.university}</p>
                    )}
                  </div>
                  <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 rounded-full text-xs font-semibold whitespace-nowrap">
                    {edu.status}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-sky-200 dark:border-sky-800">
                  <p className="text-sm text-slate-600 dark:text-slate-400">{edu.period}</p>
                  {edu.gpa && (
                    <span className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full text-sm font-semibold">
                      CGPA: {edu.gpa}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <Award className="text-sky-500" />
              Certifications
            </h3>

            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500 rounded-lg p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 p-2 flex-shrink-0">
                    <cert.icon className="w-full h-full text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{cert.name}</h4>
                    <p className="text-amber-600 dark:text-amber-400 font-semibold text-sm">{cert.issuer}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-900 rounded-lg p-6 mt-6"
            >
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-sky-600 dark:text-sky-400">Continuous Learning:</span> I actively pursue
                professional development through online courses, workshops, and industry certifications to stay updated with
                the latest technologies and best practices in Full Stack Development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
