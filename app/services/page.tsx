import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Browse all services at Outlawed on Main — hair color, cuts, extensions, lash services, waxing, brow lamination, and more. Book online 24/7.',
}

const serviceCategories = [
  {
    title: 'Hair Color',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=900&q=85&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=85&fit=crop',
    services: [
      { name: "Woman's Haircut", price: '$50', duration: '45 min', note: 'Precision cut customized to your lifestyle' },
      { name: 'Kids Cut', price: '$30', duration: '30 min' },
      { name: 'Blow Out', price: '$60', duration: '40 min' },
      { name: 'Formal Updo', price: '$135', duration: '60 min', note: 'Half or full updos' },
    ],
  },
  {
    title: 'Extensions & Treatments',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=85&fit=crop',
    services: [
      { name: 'Beaded Weft Extension Install', price: '$250', duration: '60 min', note: 'Three rows $325; free adjustments within 7 days' },
      { name: 'Beaded Weft Mini Move Up', price: '$150', duration: '35 min', note: 'Four-week maintenance' },
      { name: 'Brazilian Blowout', price: '$300', duration: '90 min', note: 'Lasts up to 12 weeks' },
    ],
  },
  {
    title: 'Lash Extensions',
    image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=900&q=85&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&q=85&fit=crop',
    services: [
      { name: 'Brow Lamination — No Tint', price: '$80', duration: '60 min' },
      { name: 'Brow Lamination — With Tint', price: '$100', duration: '75 min' },
      { name: 'Brow Tint', price: '$20', duration: '30 min' },
      { name: 'Lash Tint', price: '$20', duration: '45 min' },
    ],
  },
  {
    title: 'Waxing',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85&fit=crop',
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
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {serviceCategories.map((category) => (
              <div
                key={category.title}
                className="border border-[#E8E3DC] rounded-2xl overflow-hidden flex flex-col"
              >
                {/* Category image */}
                <div className="relative aspect-[16/7] w-full">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Gradient + title overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="font-display text-3xl text-brand-cream font-light leading-none">
                      {category.title}
                    </h2>
                  </div>
                </div>

                {/* Service rows */}
                <div className="divide-y divide-[#E8E3DC] px-6 flex-1">
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="flex items-center justify-between gap-4 py-4"
                    >
                      <div>
                        <p className="font-body text-sm text-brand-black font-medium leading-snug">
                          {service.name}
                        </p>
                        {service.note && (
                          <p className="font-body text-xs text-brand-muted mt-0.5">
                            {service.note}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="font-body text-xs text-brand-muted tabular-nums">
                          {service.duration}
                        </span>
                        <span className="font-display text-lg text-brand-black font-light min-w-[3.5rem] text-right">
                          {service.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom padding */}
                <div className="h-4" />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─────────────────────────────────────────────────────── */}
      <CTABanner />
    </>
  )
}
