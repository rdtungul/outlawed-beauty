import Image from 'next/image'
import { BOOKING_URL } from '@/lib/constants'

export default function About() {
  return (
    <section className="bg-[#F2EDE6] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/rooted-photo.jpg"
              alt="Outlawed on Main — Salon & Boutique interior"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <p className="font-display text-2xl text-brand-cream font-light italic">
                Crafted with care,<br />one client at a time.
              </p>
            </div>
          </div>

          {/* Text column */}
          <div className="flex flex-col justify-center">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-mauve mb-4">
              The Artist
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-brand-black leading-none mb-6">
              Rooted in Craft,<br />
              <span className="italic">Driven by You</span>
            </h2>
            <p className="font-body text-base text-brand-muted leading-relaxed max-w-prose mb-4">
              Outlawed on Main is more than a salon — it&apos;s a one-on-one experience with a stylist
              who takes the time to understand your hair, your goals, and your lifestyle.
            </p>
            <p className="font-body text-base text-brand-muted leading-relaxed max-w-prose mb-10">
              With over 8 years of expertise in color, cuts, and treatments, every appointment
              is tailored — never cookie-cutter. You leave not just looking great, but knowing
              how to maintain your look at home.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/about">
                <button className="bg-brand-black text-brand-cream px-8 py-3.5 rounded-full font-body text-sm font-medium tracking-wide hover:opacity-80 active:scale-[0.98] transition-all duration-200">
                  Book a Session
                </button>
              </a>
              <a href="/about">
                <button className="border border-brand-black text-brand-black px-8 py-3.5 rounded-full font-body text-sm font-medium tracking-wide hover:bg-brand-black hover:text-brand-cream transition-all duration-200">
                  Learn More
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
