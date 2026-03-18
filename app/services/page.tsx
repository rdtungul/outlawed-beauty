import type { Metadata } from 'next'
import CTABanner from '@/components/sections/CTABanner'
import { BOOKING_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Browse all services at Outlawed on Main — hair color, cuts, extensions, lash services, waxing, brow lamination, and more. Book online 24/7.',
}

const serviceCategories = [
  {
    title: 'Hair Color',
    services: [
      { name: 'One Color Roots to Ends', price: '$130', duration: '90 min', note: 'Single-process color from roots through ends' },
      { name: 'Bleach & Tone', price: '$150', duration: '105 min', note: 'Full root bleach service' },
      { name: 'Partial Highlight', price: '$180', duration: '105 min', note: 'Focused highlighting through the hairline and crown' },
      { name: 'Full Highlight', price: '$215', duration: '150 min', note: 'Full head highlighting with toner/gloss' },
      { name: 'Root Color & Partial Foil', price: '$225', duration: '120 min', note: 'Root coverage with partial highlights' },
      { name: 'Root Color & Full Foil', price: '$275', duration: '180 min', note: 'Combined root coverage with complete highlighting' },
      { name: 'Full Blonding Service', price: '$275', duration: '180 min', note: 'All-over blonde; may require bond builder' },
    ],
  },
  {
    title: 'Cuts & Styling',
    services: [
      { name: "Woman's Haircut", price: '$50', duration: '45 min', note: 'Precision cut customized to your lifestyle' },
      { name: 'Kids Cut', price: '$30', duration: '30 min' },
      { name: 'Blow Out', price: '$60', duration: '40 min' },
      { name: 'Formal Updo', price: '$135', duration: '60 min', note: 'Half or full updos' },
    ],
  },
  {
    title: 'Extensions & Treatments',
    services: [
      { name: 'Beaded Weft Extension Install', price: '$250', duration: '60 min', note: 'Three rows $325; free adjustments within 7 days' },
      { name: 'Beaded Weft Mini Move Up', price: '$150', duration: '35 min', note: 'Four-week maintenance' },
      { name: 'Brazilian Blowout', price: '$300', duration: '90 min', note: 'Lasts up to 12 weeks' },
    ],
  },
  {
    title: 'Lash Extensions',
    services: [
      { name: 'Classic Lashes — Full Set', price: '$100', duration: '180 min' },
      { name: 'Hybrid Lashes — Full Set', price: '$115', duration: '180 min' },
      { name: 'Volume Lashes — Full Set', price: '$130', duration: '180 min' },
      { name: 'Lash Fill In — Classic', price: '$50', duration: '120 min' },
      { name: 'Lash Fill In — Hybrid', price: '$55', duration: '120 min' },
      { name: 'Lash Fill In — Volume', price: '$65', duration: '120 min' },
      { name: 'Lash Extension Removal', price: '$25', duration: '30 min' },
    ],
  },
  {
    title: 'Brow & Lash Services',
    services: [
      { name: 'Brow Lamination — No Tint', price: '$80', duration: '60 min' },
      { name: 'Brow Lamination — With Tint', price: '$100', duration: '75 min' },
      { name: 'Brow Tint', price: '$20', duration: '30 min' },
      { name: 'Lash Tint', price: '$20', duration: '45 min' },
    ],
  },
  {
    title: 'Waxing',
    services: [
      { name: 'Brazilian Wax', price: '$50', duration: '30 min' },
      { name: 'Bikini Wax', price: '$35', duration: '30 min' },
      { name: 'Full Face Wax', price: '$25', duration: '25 min', note: 'Includes brows, lip, cheeks & chin' },
      { name: 'Brow Wax', price: '$10', duration: '15 min' },
      { name: 'Lip Wax', price: '$10', duration: '10 min' },
      { name: 'Chin Wax', price: '$10', duration: '10 min' },
      { name: 'Cheek Wax', price: '$10', duration: '10 min' },
      { name: 'Full Leg Wax', price: '$60', duration: '75 min' },
      { name: 'Upper Leg Wax', price: '$35', duration: '45 min', note: 'Knee up' },
      { name: 'Lower Leg Wax', price: '$35', duration: '45 min', note: 'Knee down' },
      { name: 'Under Arm Wax', price: '$15', duration: '15 min' },
      { name: 'Back Wax', price: '$80+', duration: '75 min' },
      { name: 'Shoulder Wax', price: '$30', duration: '30 min' },
      { name: 'Ear Wax', price: '$5', duration: '10 min' },
      { name: 'Nose Wax', price: '$5', duration: '10 min' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ─── Hero ───────────────────────────────────────────────────────────── */}
      <section className="bg-brand-black pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-mauve mb-5">
            What We Offer
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] text-brand-cream leading-none font-light">
            Our<br />
            <span className="italic">Services</span>
          </h1>
        </div>
      </section>

      {/* ─── Service Categories ─────────────────────────────────────────────── */}
      <section className="bg-brand-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col gap-16">

          {serviceCategories.map((category) => (
            <div key={category.title}>

              {/* Category heading */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-display text-3xl md:text-4xl text-brand-black font-light">
                  {category.title}
                </h2>
                <span className="flex-1 h-px bg-[#E8E3DC]" />
              </div>

              {/* Service rows */}
              <div className="divide-y divide-[#E8E3DC]">
                {category.services.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-center justify-between gap-6 py-5"
                  >
                    <div>
                      <p className="font-body text-base text-brand-black font-medium leading-snug">
                        {service.name}
                      </p>
                      {service.note && (
                        <p className="font-body text-sm text-brand-muted mt-0.5">
                          {service.note}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-6 shrink-0">
                      <span className="font-body text-sm text-brand-muted tabular-nums">
                        {service.duration}
                      </span>
                      <span className="font-display text-xl text-brand-black font-light min-w-[4rem] text-right">
                        {service.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}

          {/* Book CTA inline */}
          <div className="pt-4 border-t border-[#E8E3DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-body text-base text-brand-muted">
              Ready to book? Schedule online — available 24/7.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-black text-brand-cream px-8 py-3.5 rounded-full font-body text-sm font-medium tracking-wide hover:opacity-80 active:scale-[0.98] transition-all duration-200"
            >
              Book Now
            </a>
          </div>

        </div>
      </section>

      {/* ─── CTA Banner ─────────────────────────────────────────────────────── */}
      <CTABanner />
    </>
  )
}
