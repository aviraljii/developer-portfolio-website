'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

interface Project {
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  features: string[]
}

const projects: Project[] = [
  {
    title: 'Cypher AI',
    description:
      'AI-Powered Market Research Platform. Developed scalable frontend and backend features, integrating Generative AI and Python-based services for intelligent research workflows and market insights.',
    technologies: ['Next.js', 'React.js', 'TypeScript', 'Python', 'Node.js', 'FastAPI', 'Generative AI'],
    liveUrl: 'https://www.cypherai.ai/',
    features: [
      'Secure REST APIs with Node.js and FastAPI',
      'Responsive data visualization and user experience',
    ],
  },
  {
    title: 'PlasticCredit',
    description: 'Developed responsive web application features for a sustainability-focused platform supporting plastic waste awareness and credit initiatives.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.ecocredit',
    features: [
      'REST APIs for frontend-backend communication',
      'Maintainable workflows and reliable application architecture',
    ],
  },
  {
    title: 'SK Board',
    description: 'Designed a scalable web and mobile platform with reusable components and maintainable architecture across multiple devices.',
    technologies: ['React.js', 'React Native', 'Node.js', 'MongoDB'],
    liveUrl: 'https://skboard.satellitekeyit.com/',
    features: [
      'MongoDB-backed REST APIs for efficient data management',
      'Optimized performance and seamless frontend-backend communication',
    ],
  },

]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-balance bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Showcase of production-ready applications and successful implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient Background */}
              <div className="h-32 bg-gradient-to-br from-sky-400 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-3 py-1 rounded-full font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Key Features:</p>
                  <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    {project.features.slice(0, 2).map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-sky-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-shadow text-sm"
                    >
                      Live Demo <ExternalLink size={16} />
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className={`flex-1 flex items-center justify-center gap-2 border-2 border-sky-500 text-sky-500 dark:text-sky-400 font-semibold py-2 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-colors text-sm ${
                        !project.liveUrl ? 'col-span-2' : ''
                      }`}
                    >
                      GitHub <FaGithub size={16} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
