/**
 * ÚNICO lugar para configurar a campanha.
 * Troque VIP_GROUP_URL pelo link real do Grupo VIP do WhatsApp.
 */
export const VIP_GROUP_URL = 'https://chat.whatsapp.com/DetS7Ja7Dt4E1PKh3IqmlY?s=cl&p=i&mlu=4&ilr=4&iam=2'

export const BRAND = 'Boutique Moda Feminina'

/** Fuso de Brasília (UTC-3, sem horário de verão desde 2019). Offset explícito => independe do relógio/fuso do dispositivo. */
export const CAMPAIGN_START = '2026-11-05T00:00:00-03:00'
/** Primeiro instante APÓS o dia 07/11 (08/11 às 00:00 em Brasília). */
export const CAMPAIGN_END = '2026-11-08T00:00:00-03:00'

export const PRICE_FROM = 'R$ 17'
export const PRICE_TO = 'R$ 99,90'

/** IDs opcionais — se preenchidos, os scripts são carregados em src/lib/analytics.ts */
export const GA4_ID = ''
export const META_PIXEL_ID = '1288023090145501'

/**
 * Imagens da loja oficial (Nuvemshop). Carregadas direto da CDN da própria loja.
 * Para maior independência, baixe os arquivos, coloque em /public e troque as URLs por "/arquivo.webp".
 */
const CDN = 'https://acdn-us.mitiendanube.com/stores/004/304/043'
export const STORE_LOGO = `${CDN}/themes/common/logo-1612195726-1737561473-8283230000c8f653224833678d12d80b1737561473-480-0.webp`
export const STORE_LOOKS: { alt: string; src: string }[] = [
  { alt: 'Bata Ju', src: `${CDN}/products/img_0376-220dbb15d6c7c10c5b17914713704918-480-0.webp` },
  { alt: 'Bata Nicole', src: `${CDN}/products/img_7156-d689351a5e369fabf317925354179989-480-0.webp` },
  { alt: 'Bata Melissa', src: `${CDN}/products/img_0084-ce91798a7cb360832917913022597123-480-0.webp` },
  { alt: 'Corset Mia', src: `${CDN}/products/img_9699-4d6cb741f35365d08c17908774650527-480-0.webp` },
  { alt: 'Bata Ana', src: `${CDN}/products/0252737d-f129-3ca4-4e1e-73406bbdd009-7692a94cb465bf151e17907050963993-480-0.webp` },
  { alt: 'Cropped de crochê', src: `${CDN}/products/img_0847-e2456e369a4093b44b17922514405232-480-0.webp` },
]
