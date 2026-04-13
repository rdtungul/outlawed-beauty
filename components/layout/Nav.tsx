'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { BOOKING_URL, NAV_LINKS } from '@/lib/constants'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-[#E8E3DC]/60 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="hover:opacity-70 transition-opacity">
          <Image
            src="/logo.jpg"
            alt="Outlawed on Main — Salon & Boutique"
            width={160}
            height={60}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-brand-muted hover:text-brand-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="/about"
            className="hidden md:block bg-brand-black text-brand-cream px-6 py-2.5 rounded-full font-body text-sm font-medium tracking-wide hover:opacity-80 active:scale-[0.98] transition-all duration-200"
          >
            Book Now
          </a>
          <button
            className="md:hidden p-1"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-brand-black" />
            ) : (
              <Menu className="w-5 h-5 text-brand-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-cream border-t border-[#E8E3DC] px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-base text-brand-black"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/about"
            className="mt-2 inline-block bg-brand-black text-brand-cream px-8 py-3.5 rounded-full font-body text-sm font-medium tracking-wide text-center hover:opacity-80 transition-opacity"
            onClick={() => setMobileOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  )
}
