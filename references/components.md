# Outlawed Beauty — Component Patterns

## Buttons

### Variants

```tsx
// PRIMARY — dark fill (main CTA: Book Now)
<button className="
  bg-brand-black text-brand-cream
  px-8 py-3.5 rounded-full
  font-body text-sm font-medium tracking-wide
  hover:opacity-80 active:scale-[0.98]
  transition-all duration-200
">Book Now</button>

// SECONDARY — outlined (secondary CTA: View Services)
<button className="
  border border-brand-black text-brand-black
  px-8 py-3.5 rounded-full
  font-body text-sm font-medium tracking-wide
  hover:bg-brand-black hover:text-brand-cream
  transition-all duration-200
">View Services</button>

// GHOST — for dark section backgrounds
<button className="
  border border-brand-cream/40 text-brand-cream
  px-8 py-3.5 rounded-full
  font-body text-sm font-medium tracking-wide
  hover:border-brand-cream hover:bg-brand-cream/10
  transition-all duration-200
">Learn More</button>

// SMALL — for inline use (card actions, tags)
<button className="
  bg-brand-black text-brand-cream
  px-5 py-2 rounded-full
  font-body text-xs font-medium tracking-wide
  hover:opacity-80 transition-opacity
">Details</button>
```

**Rules:**
- Always `rounded-full` — no exceptions
- Font size `text-sm` (standard) or `text-xs` (small)
- `tracking-wide` always
- Hover: prefer `opacity-80` on fills, `color swap` on outlined
- Active: `scale-[0.98]` for tactile feedback

---

## Service Card

```tsx
<div className="
  bg-white border border-[#E8E3DC] rounded-2xl p-8
  hover:border-brand-mauve
  transition-colors duration-300
  flex flex-col
">
  {/* Optional: icon or image */}
  <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center mb-6">
    <Icon className="w-5 h-5 text-brand-mauve" />
  </div>

  <h3 className="font-display text-2xl text-brand-black leading-tight mb-2">
    Service Name
  </h3>
  <p className="font-body text-sm text-brand-muted leading-relaxed mb-auto">
    Short service description. 1–2 sentences max.
  </p>

  <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#E8E3DC]">
    <span className="font-body text-sm font-medium text-brand-gold">Starting at $XX</span>
    <a href="#" className="font-body text-xs text-brand-muted hover:text-brand-black transition-colors">
      Learn more →
    </a>
  </div>
</div>
```

---

## Testimonial Card

```tsx
<div className="bg-[#F2EDE6] rounded-2xl p-8">
  {/* Stars */}
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
    ))}
  </div>

  <blockquote className="font-body text-base text-brand-black leading-relaxed mb-6">
    "Testimonial quote text here. Keep it to 2–3 sentences."
  </blockquote>

  <div className="flex items-center gap-3">
    <div className="w-9 h-9 rounded-full bg-brand-blush overflow-hidden">
      {/* Avatar or initials */}
    </div>
    <div>
      <p className="font-body text-sm font-medium text-brand-black">Client Name</p>
      <p className="font-body text-xs text-brand-muted">Service Received</p>
    </div>
  </div>
</div>
```

---

## Navigation

```tsx
<nav className="
  fixed top-0 left-0 right-0 z-50
  bg-brand-cream/80 backdrop-blur-md
  border-b border-[#E8E3DC]/60
  transition-all duration-300
">
  <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

    {/* Logo / Wordmark */}
    <a href="/" className="font-display text-xl text-brand-black tracking-wide hover:opacity-80 transition-opacity">
      Outlawed Beauty
    </a>

    {/* Desktop Nav Links */}
    <div className="hidden md:flex items-center gap-8">
      {['Services', 'About', 'Gallery', 'Contact'].map((item) => (
        <a
          key={item}
          href={`/${item.toLowerCase()}`}
          className="font-body text-sm text-brand-muted hover:text-brand-black transition-colors"
        >
          {item}
        </a>
      ))}
    </div>

    {/* CTA + Mobile Menu */}
    <div className="flex items-center gap-4">
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block bg-brand-black text-brand-cream px-6 py-2.5 rounded-full font-body text-sm font-medium tracking-wide hover:opacity-80 transition-opacity"
      >
        Book Now
      </a>
      <button className="md:hidden" aria-label="Open menu">
        <Menu className="w-5 h-5 text-brand-black" />
      </button>
    </div>

  </div>
</nav>
```

---

## Hero Section

```tsx
<section className="min-h-[90vh] flex items-center bg-brand-cream pt-16">
  <div className="max-w-6xl mx-auto px-6 md:px-10 py-28 md:py-40">
    <div className="max-w-3xl">

      {/* Overline */}
      <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-mauve mb-6">
        Hair Coloring · Styling · Treatments
      </p>

      {/* Headline */}
      <h1 className="font-display text-7xl md:text-8xl text-brand-black leading-none font-light mb-8">
        Your Hair,<br />
        <span className="italic">Reimagined</span>
      </h1>

      {/* Subtext */}
      <p className="font-body text-lg text-brand-muted leading-relaxed max-w-xl mb-10">
        Premium hair color, cuts, and treatments. Book your appointment with Outlawed Beauty
        and transform the way you see yourself.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4">
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
          <button className="bg-brand-black text-brand-cream px-8 py-3.5 rounded-full font-body text-sm font-medium tracking-wide hover:opacity-80 transition-opacity">
            Book an Appointment
          </button>
        </a>
        <a href="/services">
          <button className="border border-brand-black text-brand-black px-8 py-3.5 rounded-full font-body text-sm font-medium tracking-wide hover:bg-brand-black hover:text-brand-cream transition-all duration-200">
            View Services
          </button>
        </a>
      </div>

    </div>
  </div>
</section>
```

---

## Section Header (Centered)

```tsx
<div className="text-center mb-16">
  <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-mauve mb-4">
    Section Label
  </p>
  <h2 className="font-display text-5xl md:text-6xl text-brand-black leading-none">
    Section Heading
  </h2>
  {/* Optional subtext */}
  <p className="font-body text-base text-brand-muted mt-4 max-w-xl mx-auto leading-relaxed">
    Supporting paragraph. Short. 1–2 lines.
  </p>
</div>
```

---

## Section Header (Left-Aligned)

```tsx
<div className="mb-16">
  <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-mauve mb-4">
    Section Label
  </p>
  <h2 className="font-display text-5xl md:text-6xl text-brand-black leading-none max-w-lg">
    Section Heading
  </h2>
</div>
```

---

## Dark CTA Banner

```tsx
<section className="bg-brand-black">
  <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
    <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-mauve mb-4">
      Ready to Transform?
    </p>
    <h2 className="font-display text-5xl md:text-6xl text-brand-cream leading-none mb-8">
      Book Your <span className="italic">Appointment</span>
    </h2>
    <p className="font-body text-base text-brand-cream/60 max-w-md mx-auto leading-relaxed mb-10">
      Available online 24/7 via GlossGenius. Choose your service, pick your time,
      and we'll take care of the rest.
    </p>
    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
      <button className="bg-brand-cream text-brand-black px-10 py-4 rounded-full font-body text-sm font-medium tracking-wide hover:opacity-90 transition-opacity">
        Book Now
      </button>
    </a>
  </div>
</section>
```

---

## Footer

```tsx
<footer className="bg-brand-black border-t border-brand-cream/10">
  <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-16">
    <div className="flex flex-col md:flex-row justify-between gap-8">

      {/* Brand */}
      <div>
        <p className="font-display text-2xl text-brand-cream mb-3">Outlawed Beauty</p>
        <p className="font-body text-sm text-brand-cream/50 max-w-xs leading-relaxed">
          Premium hair services. Online booking via GlossGenius.
        </p>
      </div>

      {/* Nav Links */}
      <div className="flex flex-wrap gap-6">
        {['Services', 'About', 'Gallery', 'Contact'].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            className="font-body text-sm text-brand-cream/50 hover:text-brand-cream transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

    </div>

    {/* Bottom bar */}
    <div className="mt-12 pt-6 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between gap-4">
      <p className="font-body text-xs text-brand-cream/30">
        © {new Date().getFullYear()} Outlawed Beauty. All rights reserved.
      </p>
      <p className="font-body text-xs text-brand-cream/30">
        Online booking powered by GlossGenius
      </p>
    </div>
  </div>
</footer>
```

---

## Input Fields (Contact / Forms)

```tsx
<div className="flex flex-col gap-1.5">
  <label className="font-body text-xs uppercase tracking-[0.1em] text-brand-muted">
    Full Name
  </label>
  <input
    type="text"
    className="
      w-full border border-[#E8E3DC] rounded-xl
      px-4 py-3
      font-body text-sm text-brand-black
      bg-white placeholder:text-brand-muted/50
      focus:outline-none focus:border-brand-black focus:ring-1 focus:ring-brand-black
      transition-colors
    "
    placeholder="Your name"
  />
</div>
```

**Rules:**
- Label: uppercase, `text-xs`, wide tracking
- Input: `rounded-xl` (not full), `border-[#E8E3DC]`, focus = border-brand-black
- No floating labels — simple stacked label above field
