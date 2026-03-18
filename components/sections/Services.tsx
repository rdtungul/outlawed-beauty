import { Palette, Scissors, Sparkles, Droplets, Wind } from 'lucide-react'
import { SERVICES, BOOKING_URL } from '@/lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-5 h-5 text-brand-mauve" />,
  Scissors: <Scissors className="w-5 h-5 text-brand-mauve" />,
  Sparkles: <Sparkles className="w-5 h-5 text-brand-mauve" />,
  Brush: <Palette className="w-5 h-5 text-brand-mauve" />,
  Droplets: <Droplets className="w-5 h-5 text-brand-mauve" />,
  Wind: <Wind className="w-5 h-5 text-brand-mauve" />,
}

export default function Services() {
  return (
    <section className="bg-brand-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="mb-16">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-mauve mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-brand-black leading-none max-w-lg">
            Services Built for<br />
            <span className="italic">Every Look</span>
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[#E8E3DC] rounded-2xl p-8 hover:border-brand-mauve transition-colors duration-300 flex flex-col"
            >
              <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center mb-6">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-display text-2xl text-brand-black leading-tight mb-2">
                {service.title}
              </h3>
              <p className="font-body text-sm text-brand-muted leading-relaxed mb-auto">
                {service.description}
              </p>
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#E8E3DC]">
                <span className="font-body text-sm font-medium text-brand-gold">
                  {service.price}
                </span>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-brand-muted hover:text-brand-black transition-colors"
                >
                  Book →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
