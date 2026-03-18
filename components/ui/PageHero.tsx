import Image from 'next/image'

interface PageHeroProps {
  src: string
  alt: string
  className?: string
}

/**
 * Full-bleed image hero for inner pages (About, Services, Gallery, Contact).
 * Renders edge-to-edge at a fixed tall height with a dark gradient fade at the
 * bottom so overlaid text stays legible against any photograph.
 */
export default function PageHero({ src, alt, className = '' }: PageHeroProps) {
  return (
    <div
      className={`relative w-full h-[60vh] md:h-[75vh] overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover object-top"
        sizes="100vw"
      />
      {/* Dark fade at the bottom — smoothly transitions into the page background */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent" />
    </div>
  )
}
