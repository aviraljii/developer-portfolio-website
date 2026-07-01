'use client'

import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPython,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPostman,
  SiGithub,
} from 'react-icons/si'
import { FaCss3, FaCode } from 'react-icons/fa'
const SiCss3 = FaCss3
const SiVisualstudiocode = FaCode

interface SkillCategory {
  category: string
  skills: Array<{ name: string; icon: IconType; color: string }>
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
      { name: 'CSS3', icon: SiCss3, color: 'text-blue-400' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'React.js', icon: SiReact, color: 'text-cyan-500' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-slate-900' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
      { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-600' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
      { name: 'Express.js', icon: SiExpress, color: 'text-slate-700' },
      { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-500' },
      { name: 'Python', icon: SiPython, color: 'text-blue-500' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: 'text-orange-600' },
      { name: 'GitHub', icon: SiGithub, color: 'text-slate-900' },
      { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
      { name: 'VS Code', icon: SiVisualstudiocode, color: 'text-blue-500' },
    ],
  },
]

const softSkills = [
  'Problem Solving',
  'Communication',
  'Team Collaboration',
  'Agile Development',
  'Rest API Design',
  'Performance Optimization',
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="space-y-12">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{cat.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {cat.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08, y: -5 }}
                    className="group bg-white/85 backdrop-blur-sm border-2 border-sky-200 rounded-lg p-4 text-center hover:border-sky-400 transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <div className="flex justify-center mb-3">
                      <skill.icon className={`w-8 h-8 ${skill.color}`} />
                    </div>
                    <p className="font-semibold text-slate-900 text-sm">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08 }}
                  className="bg-white/85 backdrop-blur-sm border border-sky-200 rounded-lg p-4 text-center hover:border-sky-400 transition-all shadow-sm"
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
