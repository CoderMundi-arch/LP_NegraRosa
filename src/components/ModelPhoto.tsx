type Props = { eager?: boolean; className?: string; style?: React.CSSProperties; alt?: string; sizes?: string }

/** Foto da modelo em AVIF/WebP (2 larguras). Fora da 1ª dobra => lazy. */
export function ModelPhoto({ eager = false, className = '', style, alt = 'Mulher de cabelo cacheado com look nude e marrom da coleção Black Negra Rosa', sizes = '(min-width:1024px) 460px, 78vw' }: Props) {
  const base = import.meta.env.BASE_URL
  return (
    <picture>
      <source type="image/avif" srcSet={`${base}model-360.avif 360w, ${base}model-484.avif 484w`} sizes={sizes} />
      <source type="image/webp" srcSet={`${base}model-360.webp 360w, ${base}model-484.webp 484w`} sizes={sizes} />
      <img
        src={`${base}model-484.webp`}
        width={484}
        height={805}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
        className={className}
        style={style}
      />
    </picture>
  )
}
