import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  return (
    <section className="bg-[#F2EDE6] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-mauve mb-4">
            Client Love
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-brand-black leading-none">
            What They're <span className="italic">Saying</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.name} className="bg-brand-cream rounded-2xl p-8 flex flex-col">

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              <blockquote className="font-body text-base text-brand-black leading-relaxed mb-6 flex-1">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-3 pt-6 border-t border-[#E8E3DC]">
                <div className="w-9 h-9 rounded-full bg-brand-blush flex items-center justify-center flex-shrink-0">
                  <span className="font-body text-xs font-medium text-brand-black">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-brand-black">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-xs text-brand-muted">
                    {testimonial.service}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
