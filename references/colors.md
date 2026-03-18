# Outlawed Beauty — Color Palette

## Core Palette

| Token | Name | Hex | Usage |
|---|---|---|---|
| `brand-black` | Outlawed Black | `#0D0D0D` | Dark backgrounds, primary text on light, dark section fills |
| `brand-cream` | Studio Cream | `#FAF7F2` | Primary page background, light section fills, text on dark |
| `brand-blush` | Blush | `#E8C4B8` | Subtle accents, dividers, image overlays, warm tints |
| `brand-mauve` | Mauve | `#B57A8A` | Overline labels, secondary accents, icon tints |
| `brand-gold` | Warm Gold | `#C9A96E` | Pricing text, premium callouts, highlight accents |
| `brand-muted` | Warm Muted | `#6B6560` | Body text, secondary labels, icon fills, captions |

---

## Extended Neutral Scale

| Token | Hex | Usage |
|---|---|---|
| `#0D0D0D` | Near-black — dark section background |
| `#1A1A1A` | Slightly lighter dark — card backgrounds on dark sections |
| `#FAF7F2` | Cream — primary page background |
| `#F2EDE6` | Slightly deeper cream — alt section background, subtle dividers |
| `#E8E3DC` | Warm gray — borders, dividers, input field borders |
| `#6B6560` | Warm muted — secondary text |
| `#3D3A36` | Deep warm gray — primary body text on cream |

---

## Color Usage Rules

### Backgrounds
- **Default page background:** `brand-cream` (`#FAF7F2`)
- **Alternating sections:** `#F2EDE6` (slightly deeper cream)
- **Dramatic / CTA sections:** `brand-black` (`#0D0D0D`)
- **Card backgrounds (on cream):** `#FFFFFF` or `#FAF7F2`
- **Card backgrounds (on dark):** `#1A1A1A`

### Text
- **Primary text on cream:** `#3D3A36` (deep warm gray — not pure black)
- **Primary text on dark:** `brand-cream` (`#FAF7F2`)
- **Secondary/muted text:** `brand-muted` (`#6B6560`)
- **Overline labels:** `brand-mauve` (`#B57A8A`)
- **Pricing / premium callouts:** `brand-gold` (`#C9A96E`)

### Accents
- **Gold:** Use on pricing, premium badges, highlight text — never for backgrounds
- **Mauve:** Use on overlines, secondary CTAs, tag/badge fills — not main CTAs
- **Blush:** Use for dividers, subtle section tints, image overlays

### Borders
- **On cream background:** `#E8E3DC` at full opacity, or `brand-black/10`
- **On dark background:** `#FAF7F2/20` (cream at low opacity)
- **Hover state:** `brand-mauve` for cards, `brand-black` for inputs

### Interactive States
- **Button hover:** `opacity-80` or `opacity-90` — not a new color
- **Card hover:** Border shifts from neutral to `brand-mauve`
- **Link hover:** `text-brand-mauve` or underline

---

## Tailwind Config

```js
// tailwind.config.ts
colors: {
  brand: {
    black:  '#0D0D0D',
    cream:  '#FAF7F2',
    blush:  '#E8C4B8',
    mauve:  '#B57A8A',
    gold:   '#C9A96E',
    muted:  '#6B6560',
  }
}
```

---

## Palette Restraint Rules

- **Max 2 accent colors per section.** A section using gold should not also use mauve prominently.
- **Dark sections should feel dramatic.** Full `brand-black` background, cream text, one accent.
- **Never use all 6 colors in one component.** That's not refined — it's chaotic.
- **Blush is subtle.** Never blush for main CTAs, never blush for headings.
- **Gold is premium, not loud.** Use in small doses: prices, one headline word, icon tints.
