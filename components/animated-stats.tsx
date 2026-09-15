'use client'

import { motion } from 'framer-motion'

interface Stat {
  value: string
  label: string
}

function AnimatedCounter({ end }: { end: number }) {
  return <span>{end}</span>
}

export function AnimatedStats() {
  const stats: Stat[] = [
    { value: '2', label: 'Years Experience' },
    { value: '10', label: 'Projects' },
    { value: '15', label: 'Technologies' },
  ]

  return (
    <div className="absolute bottom-0 right-0 space-y-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
          whileHover={{ scale: 1.05, x: 10 }}
          className="bg-white dark:bg-slate-800 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-slate-200 dark:border-slate-700 w-48"
        >
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-sky-500">
              <AnimatedCounter end={parseInt(stat.value)} />
            </span>
            <span className="text-sky-500 font-semibold">+</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
