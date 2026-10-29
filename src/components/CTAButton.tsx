import { ArrowRight } from 'lucide-react'
import { VIP_GROUP_URL } from '../config'
import { trackVipClick } from '../lib/analytics'
import { WhatsAppIcon } from './WhatsAppIcon'

type Props = { label: string; location: string; className?: string; size?: 'md' | 'lg' }

export function CTAButton({ label, location, className = '', size = 'md' }: Props) {
  const pad = size === 'lg' ? 'px-5 py-[1.1rem] text-[0.8rem] sm:px-7 sm:text-base lg:gap-2 lg:px-4 lg:text-[clamp(.74rem,.95vw,1rem)] xl:gap-3 xl:px-6' : 'px-5 py-4 text-[0.78rem] tracking-[0.08em] sm:px-6 sm:text-[0.95rem] sm:tracking-[0.12em]'
  return (
    <a
      href={VIP_GROUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackVipClick(location)}
      data-cta={location}
      className={`group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full font-semibold uppercase text-chocolate shadow-[0_18px_40px_-14px_rgba(198,134,89,.85)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-12px_rgba(234,197,168,.7)] active:translate-y-0 active:scale-[.985] sm:w-auto ${pad} ${className}`}
      style={{ background: 'linear-gradient(180deg,#fff0de 0%,#eac5a8 45%,#c68659 100%)' }}
    >
      <span className="btn-sheen pointer-events-none absolute inset-0 overflow-hidden rounded-full" aria-hidden="true" />
      <WhatsAppIcon className="relative h-5 w-5 shrink-0 text-[#452717]" />
      <span className="relative whitespace-nowrap">{label}</span>
      <ArrowRight className="relative h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </a>
  )
}
