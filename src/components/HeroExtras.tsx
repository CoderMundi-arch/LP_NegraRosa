/** Elementos decorativos do hero: emblema geométrico, selo giratório, ornamento e faixa rolante. */

export function Emblem({ className = '' }: { className?: string }) {
  const petals = Array.from({ length: 12 }, (_, i) => i * 30)
  const ticks = Array.from({ length: 72 }, (_, i) => i * 5)
  return (
    <svg viewBox="-200 -200 400 400" className={`pointer-events-none animate-spin-slow ${className}`} fill="none" stroke="#eac5a8" aria-hidden="true">
      <circle r="196" strokeWidth=".8" opacity=".35" />
      <circle r="168" strokeWidth=".6" opacity=".3" />
      <circle r="120" strokeWidth=".6" opacity=".28" />
      {ticks.map((r) => (
        <line key={r} x1="0" y1="-196" x2="0" y2={r % 15 === 0 ? -186 : -191} strokeWidth=".7" opacity=".45" transform={`rotate(${r})`} />
      ))}
      {petals.map((r) => (
        <ellipse key={r} rx="14" ry="62" cy="-62" strokeWidth=".7" opacity=".3" transform={`rotate(${r})`} />
      ))}
      <path d="M0 -168 L145.5 84 L-145.5 84 Z" strokeWidth=".6" opacity=".22" />
      <path d="M0 168 L145.5 -84 L-145.5 -84 Z" strokeWidth=".6" opacity=".22" />
    </svg>
  )
}

/** Selo circular com texto em volta e mandala no centro (como o selo da referência). */
export function Seal({ className = '' }: { className?: string }) {
  return (
    <div className={`relative grid place-items-center rounded-full border border-champagne/30 bg-chocolate/55 backdrop-blur-md shadow-[0_14px_30px_-10px_rgba(0,0,0,.7)] ${className}`} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-spin-slow">
        <defs>
          <path id="seal-circle" d="M60 60 m-47 0 a47 47 0 1 1 94 0 a47 47 0 1 1 -94 0" />
        </defs>
        <text fill="#f5e2cf" fontSize="9.2" letterSpacing="3.1" fontFamily="Jost Variable, sans-serif" fontWeight="500">
          <textPath href="#seal-circle">BLACK NEGRA ROSA ◆ 05 · 06 · 07 NOV ◆ </textPath>
        </text>
      </svg>
      <svg viewBox="0 0 64 64" className="h-[38%] w-[38%]" fill="none" stroke="#eac5a8" strokeWidth="1.6">
        {[0, 45, 90, 135].map((r) => (
          <ellipse key={r} cx="32" cy="32" rx="6" ry="20" transform={`rotate(${r} 32 32)`} />
        ))}
        <circle cx="32" cy="32" r="3" fill="#c68659" stroke="none" />
      </svg>
    </div>
  )
}

function Ornament() {
  return (
    <svg viewBox="0 0 64 16" className="h-4 w-14 shrink-0 text-nude" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <path d="M0 8 H20 M44 8 H64" />
      <path d="M32 1 L39 8 L32 15 L25 8 Z" />
      <circle cx="32" cy="8" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

const ITEMS = ['BLACK NEGRA ROSA', 'LOOKS DE R$ 17 A R$ 99,90', '05, 06 E 07 DE NOVEMBRO']

/** Faixa rolante na base do hero. */
export function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center gap-6 pr-6">
      {ITEMS.flatMap((t, i) => [
        <span key={t} className={`whitespace-nowrap text-[0.7rem] tracking-[0.22em] sm:text-sm ${i === 0 ? 'font-medium text-champagne' : 'font-light text-nude'}`}>{t}</span>,
        <Ornament key={`o${i}`} />,
      ])}
    </div>
  )
  return (
    <div className="relative z-10 overflow-hidden border-t border-champagne/15 bg-gradient-to-b from-cocoa/70 to-chocolate/90 py-4 backdrop-blur-sm sm:py-[1.15rem]" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {row}{row}{row}{row}
      </div>
    </div>
  )
}
