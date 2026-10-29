import { motion, useReducedMotion } from 'motion/react'

/** Linhas orgânicas douradas que se "desenham" ao entrar na tela. */
export function Curves({ className = '', variant = 'a' }: { className?: string; variant?: 'a' | 'b' }) {
  const reduce = useReducedMotion()
  const d =
    variant === 'a'
      ? ['M-20 420 C 160 300, 260 520, 460 380 S 760 160, 980 260', 'M-20 470 C 180 360, 280 560, 480 430 S 780 220, 1000 320']
      : ['M1020 60 C 820 160, 700 -20, 480 120 S 160 380, -20 300', 'M1020 110 C 830 210, 710 40, 490 170 S 170 430, -20 350']
  return (
    <svg viewBox="0 0 1000 560" preserveAspectRatio="none" className={`pointer-events-none absolute ${className}`} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`g-${variant}`} x1="0" x2="1">
          <stop offset="0" stopColor="#c68659" stopOpacity="0" />
          <stop offset=".5" stopColor="#eac5a8" stopOpacity=".7" />
          <stop offset="1" stopColor="#c68659" stopOpacity="0" />
        </linearGradient>
      </defs>
      {d.map((p, i) => (
        <motion.path
          key={p}
          d={p}
          stroke={`url(#g-${variant})`}
          strokeWidth={i ? 1 : 1.6}
          initial={{ pathLength: reduce ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, delay: i * 0.3, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  )
}

/** Fita acetinada em bronze (referência à arte da campanha) — puramente decorativa. */
export function Satin({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 300" className={`pointer-events-none absolute ${className}`} aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <linearGradient id="satin1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7a4a2d" />
          <stop offset=".35" stopColor="#d9a07a" />
          <stop offset=".6" stopColor="#a66a43" />
          <stop offset="1" stopColor="#4a2a1a" />
        </linearGradient>
        <linearGradient id="satin2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5a3420" />
          <stop offset=".5" stopColor="#c68659" />
          <stop offset="1" stopColor="#3b2014" />
        </linearGradient>
      </defs>
      <path d="M0 220 C 140 120, 260 280, 420 200 S 700 80, 800 140 L800 300 L0 300 Z" fill="url(#satin1)" opacity=".95" />
      <path d="M0 270 C 160 190, 300 300, 460 250 S 700 170, 800 210 L800 300 L0 300 Z" fill="url(#satin2)" opacity=".9" />
    </svg>
  )
}
