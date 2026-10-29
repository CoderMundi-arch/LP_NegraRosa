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
  if (META_PIXEL_ID && !window.fbq) {
    type PixelFn = ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void
      queue: unknown[][]
      push: (...args: unknown[]) => void
      loaded: boolean
      version: string
    }
    const fbq = ((...args: unknown[]) => {
      if (fbq.callMethod) fbq.callMethod(...args)
      else fbq.queue.push(args)
    }) as PixelFn
    fbq.queue = []
    fbq.push = (...args: unknown[]) => fbq.queue.push(args)
    fbq.loaded = true
    fbq.version = '2.0'
    window.fbq = fbq

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(script)
    fbq('init', META_PIXEL_ID)
    fbq('track', 'PageView')
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
