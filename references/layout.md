# Outlawed Beauty — Layout & Spacing

## Grid System

- **Columns:** 12-column grid (Tailwind's default)
- **Container max-width:** `max-w-6xl` (1152px) for most content — `max-w-7xl` (1280px) for image-heavy sections
- **Outer padding:** `px-6 md:px-10 lg:px-12` — consistent horizontal breathing room
- **Full-bleed:** Only for hero backgrounds, dark CTA banners, and full-width image sections

```tsx
// Standard content wrapper
<div className="max-w-6xl mx-auto px-6 md:px-10">
  {/* content */}
</div>

// Full-bleed section with contained content
<section className="bg-brand-black">
  <div className="max-w-6xl mx-auto px-6 md:px-10 py-24">
    {/* content */}
  </div>
</section>
```

---

## Vertical Spacing (ElevenLabs-Inspired)

Section padding must be **generous**. Whitespace is a design element.

| Context | Tailwind | px value |
|---|---|---|
| Standard section | `py-20 md:py-28` | 80–112px |
| Hero / featured section | `py-28 md:py-40` | 112–160px |
| Compact section (e.g., footer) | `py-12 md:py-16` | 48–64px |
| CTA banner | `py-24 md:py-32` | 96–128px |

**Rule:** When in doubt, add more space — never less. Cramped sections break the luxury feel.

---

## Internal Spacing Rhythm

Base unit: **4px (0.25rem)**. All spacing should be multiples of this.

| Spacing | Tailwind | Usage |
|---|---|---|
| 4px | `gap-1` | Tightest — icon + label pairing |
| 8px | `gap-2` | Tag/badge internal padding |
| 12px | `gap-3` | Small element stacking |
| 16px | `gap-4` | Default flex gap, list item spacing |
| 24px | `gap-6` | Card grid gap (mobile) |
| 32px | `gap-8` | Card grid gap (desktop), section content gap |
| 48px | `gap-12` | Between major content blocks within a section |
| 64px | `gap-16` | Between section header and content |

### Heading → Content Gap
```tsx
<div className="mb-16">   {/* section header */}</div>
<div>                      {/* section content */}</div>
```

### Overline → Heading Gap
```tsx
<p className="mb-4">Overline</p>
<h2>Heading</h2>
```

### Heading → Body Gap
```tsx
<h2 className="mb-6">Heading</h2>
<p>Body copy</p>
```

---

## Responsive Grid Patterns

### 3-Column Card Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
```

### 2-Column Split (Image + Text)
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
```

### 4-Column Feature Grid
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
```

### Testimonials (2-col on tablet, 3-col on desktop)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

---

## Section Structure Principles

### Standard Section Anatomy
```
[Section background]
  [Container: max-w-6xl, px-6 md:px-10]
    [Section header: overline + heading + optional subtext] — mb-16
    [Section content: grid or flex]
```

### Hero Anatomy
```
[Full-height or min-h-[85vh] section]
  [Container]
    [Overline label] — optional
    [H1 headline] — dominant, large
    [Subtext paragraph] — short, 1-2 lines max
    [CTA button group] — primary + secondary
    [Optional: stat bar or trust signals below CTA]
```

### Split Section Anatomy (About, Featured Service)
```
[Section]
  [Container]
    [2-col grid]
      [Image column] — rounded-2xl overflow-hidden, aspect-[3/4] or aspect-square
      [Text column] — overline + heading + body + CTA, flex col justify-center
```

---

## Aspect Ratios (Images)

| Context | Ratio | Tailwind |
|---|---|---|
| Hero image | 16:9 or full-bleed | `aspect-video` or no ratio (full-height) |
| Portrait / stylist photo | 3:4 | `aspect-[3/4]` |
| Service card image | 4:3 | `aspect-[4/3]` |
| Testimonial avatar | 1:1 | `aspect-square` |
| Gallery thumbnail | 1:1 | `aspect-square` |

---

## Breakpoints

```
sm:  640px   — Small tablets, large phones (landscape)
md:  768px   — Tablets
lg:  1024px  — Small desktops, large tablets
xl:  1280px  — Standard desktop
2xl: 1536px  — Large monitors
```

Mobile-first: always write the base (mobile) class first, then override with `md:`, `lg:`, etc.

---

## Layout Anti-Patterns (Avoid)

- Full-width text paragraphs on desktop — always `max-w-prose` or `max-w-xl`
- Sections with `py-8` or less — too cramped for this aesthetic
- 4-column card grids on mobile — use 1-col or 2-col
- Centering everything — use left-aligned layouts for editorial feel in body sections
- Missing `gap` on grids — always set an explicit gap
