# Outlawed Beauty — Typography

## Font Families

### Display Font — Cormorant Garamond
- **Use for:** H1, H2, H3 headings, hero text, pull quotes, large section titles
- **Google Fonts import:** `Cormorant Garamond` — weights: 300, 400, 500
- **Tailwind class:** `font-display`
- **Character:** Elegant high-contrast serif. Long ascenders, editorial quality. Used by luxury fashion brands.
- **Never use bold (700+)** — the elegance is in the thin strokes. Max weight: 500.

### Body Font — DM Sans
- **Use for:** Body copy, labels, buttons, nav links, captions, form fields, metadata
- **Google Fonts import:** `DM Sans` — weights: 300, 400, 500, 600
- **Tailwind class:** `font-body`
- **Character:** Geometric humanist sans-serif. Clean, friendly, highly readable. Pairs beautifully with Cormorant.

---

## Loading in Next.js

```tsx
// app/layout.tsx
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

// Apply to <html>:
// className={`${cormorant.variable} ${dmSans.variable}`}
```

```js
// tailwind.config.ts
fontFamily: {
  display: ['var(--font-display)', 'Georgia', 'serif'],
  body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
}
```

---

## Type Scale

### Display / Hero

| Size | Tailwind | Use |
|---|---|---|
| 80–96px | `text-7xl md:text-8xl` | Hero headline (1 per page max) |
| 56–72px | `text-6xl md:text-7xl` | Section hero headings |
| 40–56px | `text-4xl md:text-6xl` | Standard H2 section titles |

**Always:** `font-display` · `leading-none` or `leading-[0.95]` · `font-light` (300) or `font-normal` (400)

### Headings

| Level | Tailwind | Use |
|---|---|---|
| H3 | `text-2xl md:text-3xl` | Card headings, sub-section titles |
| H4 | `text-xl` | List item headings, sidebar headings |

**Always:** `font-display` · `text-brand-black` (on light) or `text-brand-cream` (on dark)

### Body Text

| Size | Tailwind | Use |
|---|---|---|
| Large body | `text-lg` | Hero subtext, featured paragraph |
| Standard body | `text-base` | General paragraph text |
| Small body | `text-sm` | Captions, metadata, secondary info |
| XS / Labels | `text-xs` | Overline labels, legal text, input labels |

**Always:** `font-body` · `leading-relaxed` (body) or `leading-snug` (labels)

---

## Typographic Patterns

### Overline Label
```tsx
<p className="font-body text-xs uppercase tracking-[0.2em] text-brand-mauve mb-4">
  Category / Section Label
</p>
```
Rules: ALWAYS uppercase. ALWAYS wide tracking (`tracking-[0.2em]` minimum). ALWAYS mauve.

### Hero Headline
```tsx
<h1 className="font-display text-7xl md:text-8xl text-brand-black leading-none font-light">
  Transform Your <br />
  <span className="italic">Look</span>
</h1>
```
Rules: Light weight. Italic on accent word. `leading-none`. Let it dominate the viewport.

### Section Heading
```tsx
<h2 className="font-display text-5xl md:text-6xl text-brand-black leading-none">
  Our Services
</h2>
```

### Body Copy
```tsx
<p className="font-body text-base text-brand-muted leading-relaxed max-w-prose">
  Paragraph text goes here. DM Sans at base size with relaxed line height.
</p>
```

### Price / Premium Label
```tsx
<span className="font-body text-sm font-medium text-brand-gold tracking-wide">
  Starting at $120
</span>
```

---

## Typography Rules

1. **Display font = headings only.** Never use Cormorant for body copy, labels, or buttons.
2. **Never go bold on display.** Weight 300 or 400 only for Cormorant.
3. **Italics are intentional.** One italic word in a heading can add editorial character — don't overdo it.
4. **Uppercase = labels only.** Only XS overline labels are uppercase. Never uppercase H1/H2.
5. **Tracking:** Wide tracking (`tracking-[0.15em]` to `tracking-[0.2em]`) for uppercase labels. Normal tracking for headings and body.
6. **Line height:** `leading-none` for large display text. `leading-relaxed` for body. `leading-snug` for UI labels.
7. **Max-width on body copy:** Always `max-w-prose` or `max-w-xl` on paragraph text — never let body copy span full width on desktop.
