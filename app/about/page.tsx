import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet Michelle and the team behind Outlawed on Main — 15-year best friends who built a salon on loyalty, grit, and a love for bold, maintainable hair.',
  openGraph: { images: ['/og-image.jpg'] },
}

// Add team members here as the salon grows
const team: {
  name: string
  role: string
  image: string
  bio: string
}[] = []

const consultationSteps = [
  {
    number: '01',
    title: 'Listen First',
    body: 'I truly listen — not just to what clients say but what they mean and feel.',
  },
  {
    number: '02',
    title: 'Reality Check',
    body: 'I use my experience to translate Instagram inspiration into real, achievable, gorgeous hair.',
  },
  {
    number: '03',
    title: 'Craft and Care',
    body: "Every extension, every color, every cut is crafted to fit the client's life, not complicate it.",
  },
  {
    number: '04',
    title: 'Empowerment Plan',
    body: "I teach every client how to maintain their new look — not just today, but everyday.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ─── 1. Hero — type only, dark ──────────────────────────────────────── */}
      <section className="bg-brand-black pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-mauve mb-5">
            About Us
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] text-brand-cream leading-none font-light">
            Outlawed<br />
            <span className="italic">on Main</span>
          </h1>
        </div>
      </section>

      {/* ─── 2. Partnership Story ───────────────────────────────────────────── */}
      <section className="bg-[#F2EDE6] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

            {/* Left — heading */}
            <div>
              <h2 className="font-display text-5xl md:text-6xl text-brand-black leading-none font-light">
                We&apos;re more than<br />
                <span className="italic">business partners</span>
              </h2>
            </div>

            {/* Right — body copy */}
            <div className="flex flex-col gap-5">
              <p className="font-body text-base text-brand-muted leading-relaxed">
                We&apos;re more than business partners — we&apos;re 15-year best friends.
              </p>
              <p className="font-body text-base text-brand-muted leading-relaxed">
                Outlawed on Main was built on loyalty, grit, late-night dreams, and a whole lot
                of hairspray. We&apos;ve grown together, raised babies together, survived life
                together — and built this place from the ground up side by side.
              </p>
              <p className="font-body text-base text-brand-muted leading-relaxed">
                Our styles may be a little different, but our mission is the same: bold hair,
                honest conversations, and a space where you feel like family the second you walk
                through the door.
              </p>
              <p className="font-body text-base text-brand-muted leading-relaxed">
                This isn&apos;t just a salon. It&apos;s friendship. It&apos;s hustle. It&apos;s
                western roots with a little outlaw edge.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 3. Meet the Team ───────────────────────────────────────────────── */}
      <section className="bg-brand-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">

          {/* Section header */}
          <div className="mb-16">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-mauve mb-4">
              Meet the Team
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-brand-black leading-none font-light">
              The Hands<br />
              <span className="italic">Behind the Work</span>
            </h2>
          </div>

          {/* ── Part A — Featured founder: Michelle ── */}
          <div className="border border-[#E8E3DC] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

            {/* Portrait image */}
            <div className="relative aspect-[3/4] lg:aspect-auto lg:min-h-[600px]">
              <Image
                src="/images/michelle.jpg"
                alt="Michelle — Co-Founder and Master Stylist at Outlawed on Main"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle bottom gradient so the image transitions cleanly */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-transparent lg:hidden" />
            </div>

            {/* Bio panel — dark background */}
            <div className="bg-brand-black px-8 py-12 md:px-12 md:py-16 flex flex-col justify-center">

              <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-mauve mb-5">
                Co-Founder · Master Stylist
              </p>

              <h3 className="font-display text-5xl md:text-6xl text-brand-cream leading-none font-light mb-6">
                Michelle
              </h3>

              <p className="font-body text-base text-brand-cream/70 leading-relaxed mb-10 max-w-prose">
                I have spent 16 years mastering the art of blending beauty with reality. A master
                of extensions, a wizard of blonde, and a fierce competitor in barrel racing — I
                know firsthand that strength, beauty, and confidence go hand in hand. I race
                barrels, tend to my farm, and still have maintainable hair — and I help my clients
                get the hair they dream of, without sacrificing the life they love.
              </p>

              {/* Credentials */}
              <div className="grid grid-cols-3 gap-4 border-t border-brand-cream/10 pt-8">
                {[
                  { stat: '16 yrs', label: 'Experience' },
                  { stat: 'Master', label: 'Extensions' },
                  { stat: 'Blonde', label: 'Specialist' },
                ].map(({ stat, label }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span className="font-display text-2xl text-brand-cream font-light leading-none">
                      {stat}
                    </span>
                    <span className="font-body text-xs uppercase tracking-[0.15em] text-brand-cream/40">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* ── Part B — Team grid (renders only when team has members) ── */}
          {team.length > 0 && (
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="border border-[#E8E3DC] rounded-2xl overflow-hidden"
                >
                  {/* Portrait with name/role overlay */}
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                      <p className="font-display text-xl text-brand-cream leading-none font-light">
                        {member.name}
                      </p>
                      <p className="font-body text-xs text-brand-cream/60 mt-1 tracking-wide">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="p-6">
                    <p className="font-body text-sm text-brand-muted leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ─── 4. Signature Consultation ──────────────────────────────────────── */}
      <section className="bg-brand-black py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">

          {/* Section header */}
          <div className="mb-16">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-mauve mb-4">
              The Process
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-brand-cream leading-none font-light">
              The Signature<br />
              <span className="italic">Consultation</span>
            </h2>
          </div>

          {/* Step rows */}
          <div className="divide-y divide-brand-cream/10">
            {consultationSteps.map((step) => (
              <div
                key={step.number}
                className="grid grid-cols-[5rem_1fr_2fr] items-start gap-6 py-8"
              >
                {/* Step number */}
                <span className="font-display text-2xl text-brand-mauve font-light leading-none pt-0.5">
                  {step.number}
                </span>

                {/* Step title */}
                <h3 className="font-display text-2xl md:text-3xl text-brand-cream font-light leading-snug">
                  {step.title}
                </h3>

                {/* Step body */}
                <p className="font-body text-base text-brand-cream/60 leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 5. Pull Quote ──────────────────────────────────────────────────── */}
      <section className="bg-brand-cream py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">

          {/* Mauve rule ornament — top */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="block w-12 h-px bg-brand-mauve" />
            <span className="block w-2 h-2 rounded-full bg-brand-mauve" />
            <span className="block w-12 h-px bg-brand-mauve" />
          </div>

          <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-black leading-snug font-light italic mb-10">
            &ldquo;At Mane Mare Salon, we craft stunning, maintainable hair that fits your real
            life — giving you the confidence to ride into the boardroom, the barrel race, or
            wherever life takes you looking and feeling unstoppable.&rdquo;
          </blockquote>

          {/* Attribution */}
          <p className="font-body text-sm text-brand-muted tracking-wide uppercase">
            Michelle, Mane Mare Salon
          </p>

          {/* Mauve rule ornament — bottom */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className="block w-12 h-px bg-brand-mauve" />
            <span className="block w-2 h-2 rounded-full bg-brand-mauve" />
            <span className="block w-12 h-px bg-brand-mauve" />
          </div>

        </div>
      </section>

      {/* ─── 6. CTA Banner ──────────────────────────────────────────────────── */}
      <CTABanner />
    </>
  )
}
