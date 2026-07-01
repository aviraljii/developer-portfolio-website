'use client'

import { motion } from 'framer-motion'
import { Code2, Zap, Database, GitBranch, Bug, Users, type LucideIcon } from 'lucide-react'

interface ExpertiseItem {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

const expertise: ExpertiseItem[] = [
  {
    icon: Code2,
    title: 'Modern Web Development',
    description: 'Building responsive, performant web applications using latest frameworks and best practices.',
    color: 'from-sky-500 to-blue-600',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Ensuring lightning-fast load times and smooth user experiences through optimization techniques.',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Architecting scalable database solutions with MongoDB, MySQL, and modern data patterns.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Expert Git workflows and collaboration practices for team-based development projects.',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Bug,
    title: 'Problem Solving',
    description: 'Debugging complex issues and implementing robust solutions with clean architecture.',
    color: 'from-red-500 to-rose-600',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Working effectively in agile teams, communicating clearly and delivering quality solutions.',
    color: 'from-indigo-500 to-purple-600',
  },
]

export function Expertise() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-balance bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Core competencies and specialized knowledge areas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              {/* Gradient Border */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
              />

              {/* Card */}
              <div className="relative bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${item.color} p-3 mb-4 shadow-lg`}
                >
                  <item.icon className="w-full h-full text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div className={`w-12 h-1 bg-gradient-to-r ${item.color} rounded-full mt-4 group-hover:w-16 transition-all duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
