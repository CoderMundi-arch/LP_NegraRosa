import { GA4_ID, META_PIXEL_ID } from '../config'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

/** Carrega GA4 / Meta Pixel somente se os IDs estiverem preenchidos em config.ts. */
export function initAnalytics() {
  if (GA4_ID) {
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`
    document.head.appendChild(s)
    window.dataLayer = window.dataLayer || []
    window.gtag = function () { window.dataLayer!.push(arguments) }
    window.gtag('js', new Date())
    window.gtag('config', GA4_ID)
  }
  if (META_PIXEL_ID) {
    const s = document.createElement('script')
    s.async = true
    s.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(s)
    const q: unknown[][] = []
    const fbq = function (...a: unknown[]) { q.push(a) } as unknown as Window['fbq'] & { queue?: unknown[][] }
    ;(fbq as { queue?: unknown[][] }).queue = q
    window.fbq = fbq
    window.fbq!('init', META_PIXEL_ID)
    window.fbq!('track', 'PageView')
  }
}

/** Disparado em todo clique de CTA do Grupo VIP. Seguro mesmo sem GA4/Pixel configurados. */
export function trackVipClick(location: string) {
  try {
    window.gtag?.('event', 'join_vip_group', { event_category: 'conversion', event_label: location })
    window.fbq?.('track', 'Lead', { content_name: 'Grupo VIP Black Negra Rosa', placement: location })
    window.dataLayer?.push({ event: 'vip_cta_click', cta_location: location })
  } catch { /* nunca quebrar a navegação por causa de tracking */ }
}
