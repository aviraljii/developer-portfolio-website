'use client'

import { motion } from 'framer-motion'
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiFastapi, SiTypescript, SiGithub } from 'react-icons/si'

const technologies = [
  { icon: SiReact, name: 'React', delay: 0, color: 'text-cyan-500' },
  { icon: SiNextdotjs, name: 'Next.js', delay: 0.1, color: 'text-slate-900' },
  { icon: SiNodedotjs, name: 'Node.js', delay: 0.2, color: 'text-green-500' },
  { icon: SiMongodb, name: 'MongoDB', delay: 0.3, color: 'text-green-600' },
  { icon: SiFastapi, name: 'FastAPI', delay: 0.4, color: 'text-teal-500' },
  { icon: SiTypescript, name: 'TypeScript', delay: 0.5, color: 'text-blue-600' },
  { icon: SiGithub, name: 'GitHub', delay: 0.6, color: 'text-slate-700' },
]

export function FloatingTechStack() {
  return (
    <div className="relative w-full h-full">
      {/* Animated Code Window */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute top-0 left-0 w-80 bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl border border-slate-200 overflow-hidden"
      >
        <div className="bg-slate-50 px-4 py-3 flex gap-2 border-b border-slate-200">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="p-4 font-mono text-sm text-slate-700">
          <div>
            <span className="text-sky-600">const</span> <span className="text-blue-600">developer</span> =
            {'{'}
          </div>
          <div className="pl-4">
            <span className="text-sky-600">name</span>: <span className="text-emerald-600">&quot;Aviral&quot;</span>,
          </div>
          <div className="pl-4">
            <span className="text-sky-600">skills</span>: [<span className="text-emerald-600">&quot;React&quot;</span>,
            <span className="text-emerald-600">&quot;Next.js&quot;</span>, ...]
          </div>
          <div>{'}'};</div>
        </div>
      </motion.div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0">
        {technologies.map((tech, index) => {
          const angle = (index / technologies.length) * Math.PI * 2
          const radius = 120
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <motion.div
              key={tech.name}
              className="absolute w-16 h-16 flex items-center justify-center"
              style={{
                left: '50%',
                top: '50%',
                x: x - 32,
                y: y - 32,
              }}
              animate={{
                x: [x - 32, x - 32 + 15, x - 32],
                y: [y - 32, y - 32 - 15, y - 32],
              }}
              transition={{
                duration: 3 + tech.delay,
                repeat: Infinity,
                delay: tech.delay,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-slate-200"
              >
                <tech.icon className={`w-8 h-8 ${tech.color}`} />
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Center Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
    </div>
  )
}
