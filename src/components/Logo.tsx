import { useState } from 'react'
import { BRAND, STORE_LOGO } from '../config'

/** Logo oficial da loja; se não carregar, usa a versão vetorial de reserva. */
export function Logo({ className = '' }: { className?: string }) {
  const [failed, setFailed] = useState(false)
  if (!failed) {
    return (
      <img
        src={STORE_LOGO}
        alt={BRAND}
        width={480}
        height={201}
        decoding="async"
        onError={() => setFailed(true)}
        className={`h-[4.4rem] w-auto sm:h-24 ${className}`}
      />
    )
  }
  return (
    <div className={`flex flex-col items-center text-champagne ${className}`} role="img" aria-label={BRAND}>
      <svg viewBox="0 0 64 64" className="h-11 w-11 sm:h-14 sm:w-14" fill="none" stroke="currentColor" strokeWidth="1.1" aria-hidden="true">
        {[0, 30, 60, 90, 120, 150].map((r) => (
          <ellipse key={r} cx="32" cy="32" rx="5.5" ry="19" transform={`rotate(${r} 32 32)`} />
        ))}
        <circle cx="32" cy="32" r="2.4" fill="currentColor" />
      </svg>
      <span className="mt-1 font-display text-[1.65rem] font-medium leading-none tracking-[0.04em] sm:text-4xl">BOUTIQUE</span>
      <span className="mt-1.5 text-[0.55rem] font-light tracking-[0.5em] text-nude sm:text-[0.65rem]">MODA FEMININA</span>
    </div>
  )
}
