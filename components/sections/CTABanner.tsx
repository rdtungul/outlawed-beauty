import { BOOKING_URL } from '@/lib/constants'

export default function CTABanner() {
  return (
    <section className="bg-brand-black">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center">

        <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-mauve mb-4">
          Ready to Transform?
        </p>

        <h2 className="font-display text-5xl md:text-7xl text-brand-cream leading-none mb-8 font-light">
          Book Your<br />
          <span className="italic">Appointment</span>
        </h2>

        <p className="font-body text-base text-brand-cream/60 max-w-md mx-auto leading-relaxed mb-10">
          Available online 24/7. Choose your service,
          pick your time, and we'll take care of the rest.
        </p>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-brand-cream text-brand-black px-10 py-4 rounded-full font-body text-sm font-medium tracking-wide hover:opacity-90 active:scale-[0.98] transition-all duration-200">
            Book Now
          </button>
        </a>

      </div>
    </section>
  )
}
