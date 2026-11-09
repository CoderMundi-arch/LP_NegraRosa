import { Logo } from './Logo'
import { BRAND } from '../config'

export function Footer() {
  return (
    <footer className="relative border-t border-nude/15 bg-chocolate/80 px-5 py-8 text-center">
      <Logo className="mx-auto !h-16" />
      <p className="mt-4 text-[0.65rem] uppercase tracking-[0.22em] sm:text-[0.7rem] sm:tracking-[0.3em] text-nude/80">Black Negra Rosa • 09 a 20 de novembro</p>
      <p className="mt-2 text-xs text-champagne/55">© {new Date().getFullYear()} {BRAND}. Todos os direitos reservados.</p>
    </footer>
  )
}
