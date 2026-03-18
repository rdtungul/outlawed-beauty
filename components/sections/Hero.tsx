import Image from 'next/image'
import { BOOKING_URL } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center bg-brand-cream pt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text content */}
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-mauve mb-6">
              Hair Coloring · Styling · Treatments
            </p>

            <h1 className="font-display text-6xl md:text-7xl xl:text-8xl text-brand-black leading-none font-light mb-8">
              Your Hair,<br />
              <span className="italic">Reimagined</span>
            </h1>

            <p className="font-body text-lg text-brand-muted leading-relaxed max-w-md mb-10">
              Premium hair color, cuts, and treatments — tailored to you.
              Book your appointment with Outlawed Beauty and transform the way you see yourself.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <button className="bg-brand-black text-brand-cream px-8 py-3.5 rounded-full font-body text-sm font-medium tracking-wide hover:opacity-80 active:scale-[0.98] transition-all duration-200">
                  Book an Appointment
                </button>
              </a>
              <a href="/services">
                <button className="border border-brand-black text-brand-black px-8 py-3.5 rounded-full font-body text-sm font-medium tracking-wide hover:bg-brand-black hover:text-brand-cream transition-all duration-200">
                  View Services
                </button>
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-14 pt-8 border-t border-[#E8E3DC] flex flex-wrap gap-8">
              {[
                { value: '500+', label: 'Happy Clients' },
                { value: '8 yrs', label: 'Experience' },
                { value: '5★', label: 'Avg. Rating' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl text-brand-black font-light">{stat.value}</p>
                  <p className="font-body text-xs text-brand-muted tracking-wide mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero image */}
          <div className="relative hidden lg:block">

            {/* Gold accent frame offset behind image */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-brand-gold/40 z-0" />

            {/* Image container */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden z-10">
              <Image
                src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=1000&q=90&fit=crop&crop=top"
                alt="Outlawed Beauty — hair fashion model"
                fill
                className="object-cover object-top scale-105 hover:scale-100 transition-transform duration-700 ease-out"
                priority
                sizes="(max-width: 1024px) 0px, 50vw"
              />
              {/* Bottom gradient for badge legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-transparent" />

              {/* Floating booking badge */}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-6 right-6 z-20"
              >
                <div className="bg-brand-cream/95 backdrop-blur-sm rounded-xl px-5 py-4 flex items-center justify-between hover:bg-white transition-colors duration-200 cursor-pointer">
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.15em] text-brand-mauve mb-0.5">
                      Now Accepting Clients
                    </p>
                    <p className="font-display text-lg text-brand-black leading-tight">
                      Book your transformation
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-brand-black flex items-center justify-center flex-shrink-0 ml-4">
                    <svg className="w-4 h-4 text-brand-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
