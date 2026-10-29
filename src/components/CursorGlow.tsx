import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'

/** Iluminação bronze que acompanha o cursor — só em dispositivos com mouse (hover + pointer fino). */
export function CursorGlow() {
  const reduce = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const sx = useSpring(x, { stiffness: 90, damping: 22, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 90, damping: 22, mass: 0.6 })

  useEffect(() => {
    if (reduce) return
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setEnabled(mq.matches)
    if (!mq.matches) return
    const move = (e: PointerEvent) => { x.set(e.clientX - 260); y.set(e.clientY - 260) }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [reduce, x, y])

  if (!enabled) return null
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[520px] w-[520px] rounded-full mix-blend-screen"
      style={{ x: sx, y: sy, background: 'radial-gradient(circle, rgba(198,134,89,.28) 0%, rgba(166,106,67,.12) 40%, transparent 70%)' }}
    />
  )
}
