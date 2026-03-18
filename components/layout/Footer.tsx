import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'
import { BOOKING_URL, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-cream/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Brand column */}
          <div className="max-w-xs">
            <p className="font-display text-2xl text-brand-cream mb-3 tracking-wide">
              Outlawed Beauty
            </p>
            <p className="font-body text-sm text-brand-cream/50 leading-relaxed">
              Premium hair coloring, styling, and treatments. Appointment-based. Book online.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-brand-cream/40 hover:text-brand-cream transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-brand-cream/40 hover:text-brand-cream transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Nav + Booking */}
          <div className="flex flex-col gap-4">
            <p className="font-body text-xs uppercase tracking-[0.15em] text-brand-cream/30">
              Navigate
            </p>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-brand-cream/50 hover:text-brand-cream transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Booking CTA */}
          <div className="flex flex-col gap-4">
            <p className="font-body text-xs uppercase tracking-[0.15em] text-brand-cream/30">
              Ready?
            </p>
            <p className="font-body text-sm text-brand-cream/50 leading-relaxed max-w-[200px]">
              Book your appointment online, available 24/7.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-brand-cream/30 text-brand-cream px-6 py-2.5 rounded-full font-body text-sm font-medium tracking-wide hover:border-brand-cream hover:bg-brand-cream/10 transition-all duration-200 text-center"
            >
              Book Now
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-brand-cream/10 flex flex-col sm:flex-row justify-between gap-3">
          <p className="font-body text-xs text-brand-cream/30">
            © {new Date().getFullYear()} Outlawed Beauty. All rights reserved.
          </p>
          <p className="font-body text-xs text-brand-cream/30">
            Online booking available 24/7
          </p>
        </div>
      </div>
    </footer>
  )
}
