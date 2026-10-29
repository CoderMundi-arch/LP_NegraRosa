import { AnimatePresence, motion } from 'motion/react'
import { Reveal } from './Reveal'
import { CTAButton } from './CTAButton'
import { Curves } from './Curves'
import { useCountdown } from '../lib/useCountdown'

function Unit({ value, label, tick }: { value: number; label: string; tick?: boolean }) {
  const text = String(value).padStart(2, '0')
  return (
    <div className="flex flex-col items-center">
      <div className="date-card relative grid h-[4.2rem] w-[3.7rem] place-items-center overflow-hidden rounded-2xl sm:h-24 sm:w-20">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={tick ? text : 'static'}
            initial={tick ? { y: -14, opacity: 0 } : false}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 14, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="font-display text-[1.9rem] font-bold tabular-nums leading-none sm:text-5xl"
          >
            {text}
          </motion.span>
        </AnimatePresence>
        <span className="absolute inset-x-0 top-1/2 h-px bg-cocoa/15" aria-hidden="true" />
      </div>
      <span className="mt-2 text-[0.6rem] font-medium uppercase tracking-[0.25em] text-nude sm:text-xs">{label}</span>
    </div>
  )
}

export function ClosingSection() {
  const c = useCountdown()
  const title =
    c.phase === 'before' ? 'A Black Negra Rosa começa em' : c.phase === 'live' ? 'A Black Negra Rosa está acontecendo!' : 'Campanha encerrada'
  const cta = c.phase === 'ended' ? 'Entrar no Grupo VIP' : 'Quero entrar no Grupo VIP'

  return (
    <section className="relative isolate overflow-hidden px-5 pb-28 pt-6 sm:px-8 sm:pb-36" aria-labelledby="closing-title">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_70%_at_50%_40%,rgba(198,134,89,.25),transparent_70%)]" aria-hidden="true" />
      <Curves variant="b" className="inset-x-0 top-0 -z-10 h-full w-full opacity-60" />

      <Reveal className="glass mx-auto max-w-3xl rounded-[2rem] px-5 py-10 text-center sm:rounded-[2.5rem] sm:px-10 sm:py-14">
        <h2 id="closing-title" className="text-balance font-serif text-[1.7rem] font-semibold leading-tight text-ivory sm:text-4xl">
          {c.phase === 'live' ? <span className="text-metal">{title}</span> : title}
        </h2>

        {c.phase === 'before' && (
          <div role="timer" aria-live="off" className="mt-7 flex items-start justify-center gap-2.5 sm:gap-4">
            <Unit value={c.days} label="Dias" />
            <Unit value={c.hours} label="Horas" />
            <Unit value={c.minutes} label="Min" />
            <Unit value={c.seconds} label="Seg" tick />
          </div>
        )}

        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-champagne/85 sm:text-base">
          {c.phase === 'ended'
            ? 'Entre no Grupo VIP para ser avisada das próximas novidades.'
            : 'Entre no Grupo VIP e fique por dentro das ofertas especiais da nossa Black Negra Rosa.'}
        </p>
        <div className="mt-6 flex justify-center">
          <CTAButton label={cta} location="closing" size="lg" />
        </div>
      </Reveal>
    </section>
  )
}
