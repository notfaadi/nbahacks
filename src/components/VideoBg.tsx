import { NBA2K27_HERO } from '../data/media'

type VideoBgProps = {
  /** Full-bleed NBA 2K27 hero image (defaults to product artwork). */
  image?: string
  imageAlt?: string
  /** Homepage deluxe cover — lighter grade + left text scrim only */
  variant?: 'default' | 'deluxe'
}

/** Full-bleed static hero — no video background. */
export function VideoBg({
  image = NBA2K27_HERO,
  imageAlt = 'NBA 2K27 Deluxe Edition hero cover art',
  variant = 'default',
}: VideoBgProps) {
  const deluxe = variant === 'deluxe'
  return (
    <div
      className={`hero-video-wrap absolute inset-0 z-0 overflow-hidden pointer-events-none select-none${deluxe ? ' hero-video-wrap--deluxe' : ''}`}
    >
      <div className="absolute inset-0 z-0 bg-z-bg" aria-hidden />
      <img
        src={image}
        alt={imageAlt}
        width={3840}
        height={2160}
        decoding="async"
        fetchPriority="high"
        className={`hero-video-bg absolute inset-0 z-[1] h-full w-full object-cover opacity-100${
          deluxe
            ? ' hero-video-bg--deluxe'
            : ' hero-video-bg--still object-[72%_38%] sm:object-[78%_36%] lg:object-[82%_34%]'
        }`}
      />
      <div className="hero-video-tint pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      <div className="hero-video-tint-glow pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      <div
        className={`absolute inset-x-0 bottom-0 z-[3] bg-gradient-to-t from-z-bg via-z-bg/80 to-transparent${deluxe ? ' h-32 sm:h-36' : ' h-40'}`}
      />
      <div
        className={`absolute inset-x-0 top-0 z-[3] bg-gradient-to-b to-transparent${deluxe ? ' h-12 from-z-bg/25 sm:h-14' : ' h-24 from-z-bg/70'}`}
      />
    </div>
  )
}
