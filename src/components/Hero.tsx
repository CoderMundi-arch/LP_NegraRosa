import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { Sparkles } from 'lucide-react'
import { useRef } from 'react'
import { Logo } from './Logo'
import { CTAButton } from './CTAButton'
import { ModelPhoto } from './ModelPhoto'
import { Emblem, Marquee, Seal } from './HeroExtras'
import { PRICE_FROM, PRICE_TO } from '../config'

const DATES = ['05', '06', '07']
const EASE = [0.22, 1, 0.36, 1] as const

/** Dissolve as bordas laterais/superior da foto no fundo; a base fica firme sobre a faixa. */
const PHOTO_MASK = {
  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 24%, #000 78%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 5%, #000 100%)',
  maskImage: 'linear-gradient(to right, transparent 0%, #000 24%, #000 78%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 5%, #000 100%)',
  WebkitMaskComposite: 'source-in',
  maskComposite: 'intersect',
} as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yPhoto = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 50])
  const yEmblem = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 90])

  return (
    <section ref={ref} className="relative isolate flex flex-col overflow-hidden lg:min-h-[100svh]" aria-labelledby="hero-title">
      {/* atmosfera: iluminação quente atrás da modelo */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(55%_75%_at_62%_52%,rgba(198,134,89,.42),transparent_70%),radial-gradient(40%_50%_at_8%_20%,rgba(166,106,67,.22),transparent_70%)]" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-[1280px] flex-1 grid-cols-1 px-5 pt-6 sm:px-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:px-10 lg:pt-0">
        {/* Texto */}
        <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:justify-center lg:py-[min(2.5rem,4vh)] lg:text-left">
          <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE }}>
            <Logo className="lg:!h-[min(5rem,9vh)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="glass mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.66rem] font-medium uppercase tracking-[0.26em] text-champagne sm:text-xs lg:mt-[min(1.6rem,2.6vh)]"
          >
            <Sparkles className="h-3.5 w-3.5 text-nude" aria-hidden="true" />
            Somente 05 · 06 · 07 de novembro
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="mt-4 select-none leading-none lg:mt-[min(1.2rem,2vh)]"
            aria-label="Black Negra Rosa"
          >
            <span className="lg:flex lg:items-baseline lg:gap-[min(1.4vw,1.5rem)]" aria-hidden="true">
              <span className="block font-display text-[3.6rem] font-medium uppercase leading-[0.86] tracking-[-0.03em] text-champagne sm:text-[6rem] lg:text-[min(9.6rem,15vh,calc(min(100vw,1376px)*.074))]">Black</span>
              <span className="text-bronze-grad block font-display text-[3.4rem] font-bold leading-[0.9] tracking-[-0.02em] sm:text-[5.6rem] lg:text-[min(9rem,14.2vh,calc(min(100vw,1376px)*.07))]">Negra</span>
            </span>
            <span className="relative -mt-2 block font-script text-[4.2rem] leading-[0.95] text-champagne sm:-mt-4 sm:text-[7rem] lg:-mt-[.1em] lg:ml-[16%] lg:text-[min(11.5rem,18vh,calc(min(100vw,1376px)*.095))]" aria-hidden="true">
              Rosa
              <span className="absolute -bottom-1 left-1/2 h-[3px] w-[78%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-caramel to-transparent lg:left-0 lg:translate-x-0" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
            className="mt-5 font-serif font-semibold leading-tight text-ivory text-[1.45rem] sm:text-3xl lg:mt-[min(1.6rem,2.6vh)] lg:text-[min(2.7rem,5vh,calc(min(100vw,1376px)*.03))]"
          >
            Looks de <span className="text-metal whitespace-nowrap font-display font-bold">{PRICE_FROM}</span>{' '}
            <span className="font-script text-caramel">a</span>{' '}
            <span className="text-metal whitespace-nowrap font-display font-bold">{PRICE_TO}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
            className="mt-3 hidden max-w-md text-base leading-relaxed text-champagne/85 lg:block lg:text-[clamp(.9rem,1.05vw,1.1rem)] [@media(max-height:780px)]:!hidden"
          >
            Entre no Grupo VIP e fique por dentro das ofertas especiais da nossa Black Negra Rosa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
            className="mt-6 flex w-full max-w-md flex-col items-center lg:mt-[min(1.6rem,2.8vh)] lg:items-start"
          >
            <CTAButton label="Quero entrar no Grupo VIP" location="hero" size="lg" />
          </motion.div>
        </div>

        {/* Modelo */}
        <div className="relative mt-8 min-h-[26rem] lg:mt-0 lg:min-h-0">
          <motion.div style={{ y: yEmblem }} className="pointer-events-none absolute left-[42%] top-[46%] -z-10 hidden w-[min(135%,108vh)] -translate-x-1/2 -translate-y-1/2 opacity-80 lg:block" aria-hidden="true">
            <Emblem className="w-full" />
          </motion.div>
          <motion.div
            style={{ y: yPhoto }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.25, ease: EASE }}
            className="absolute bottom-0 left-1/2 aspect-[484/805] h-full max-h-[34rem] -translate-x-1/2 lg:left-[-2%] lg:h-[calc(100svh-4.5rem)] lg:max-h-[56rem] lg:translate-x-0"
          >
            <ModelPhoto eager className="h-full w-full" style={PHOTO_MASK} sizes="(min-width:1024px) 520px, 90vw" />

            {/* etiqueta com linha, como na referência */}
            <div className="pointer-events-none absolute right-[-4%] top-[9%] hidden items-center sm:flex lg:hidden xl:flex xl:right-[-14%]" aria-hidden="true">
              <span className="h-1.5 w-1.5 rounded-full bg-nude" />
              <span className="h-px w-8 bg-nude/60" />
              <span className="font-serif text-xl leading-none text-champagne lg:text-[clamp(1.05rem,1.5vw,1.5rem)]">
                Black Negra Rosa
                <span className="mt-1 block font-sans text-[0.55rem] font-light uppercase tracking-[0.2em] text-nude lg:text-[0.62rem]">Boutique · Moda Feminina</span>
              </span>
            </div>

            {/* selo giratório */}
            <Seal className="absolute -right-[4%] top-[50%] h-[5.2rem] w-[5.2rem] sm:h-24 sm:w-24 lg:-right-[6%] lg:h-[clamp(5.4rem,6.4vw,7.6rem)] lg:w-[clamp(5.4rem,6.4vw,7.6rem)]" />

            {/* datas sobre a modelo */}
            <ul className="absolute inset-x-0 bottom-[5%] flex justify-center gap-2.5 sm:gap-3" aria-label="05, 06 e 07 de novembro">
              {DATES.map((d, i) => (
                <li
                  key={d}
                  className="date-card animate-glow flex w-[4.2rem] flex-col items-center rounded-2xl py-2 sm:w-[5.2rem] sm:py-2.5 lg:w-[clamp(4.4rem,5.4vw,6.2rem)] lg:py-[min(.7rem,1.3vh)]"
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  <span className="font-display text-[1.7rem] font-bold leading-none sm:text-[2.4rem] lg:text-[min(3.1rem,5.6vh)]">{d}</span>
                  <span className="mt-1.5 w-8 border-t border-cocoa/40 pt-1 text-[0.6rem] font-semibold tracking-[0.2em] sm:w-10 sm:text-[0.68rem]">NOV</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <Marquee />
    </section>
  )
}
