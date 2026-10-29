import { motion } from 'motion/react'
import { useState } from 'react'
import { STORE_LOOKS } from '../config'

function Look({ alt, src, i }: { alt: string; src: string; i: number }) {
  const [ok, setOk] = useState(true)
  if (!ok) return null
  return (
    <motion.li
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-2xl border border-champagne/25 bg-cocoa shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] ${i % 2 ? 'sm:mt-8' : ''}`}
    >
      <img
        src={src}
        alt={alt}
        width={480}
        height={640}
        loading="lazy"
        decoding="async"
        onError={() => setOk(false)}
        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-chocolate/45 via-transparent to-transparent" aria-hidden="true" />
    </motion.li>
  )
}

/** Faixa enxuta com looks reais da loja — sem nomes ou preços. */
export function LooksStrip() {
  return (
    <section className="relative px-5 pb-6 pt-2 sm:px-8" aria-label="Looks da Boutique Moda Feminina">
      <ul className="mx-auto grid max-w-6xl grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-4">
        {STORE_LOOKS.map((l, i) => (
          <Look key={l.src} {...l} i={i} />
        ))}
      </ul>
    </section>
  )
}
