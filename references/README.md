# Outlawed Beauty — Design Reference Overview

## Brand Summary

**Business:** Outlawed Beauty — appointment-based hair salon / hairstylist service
**Services:** Hair coloring, styling, cuts, treatments
**Booking platform:** GlossGenius
**Tech stack:** Next.js 14 (App Router) + Tailwind CSS v3

---

## Visual Direction

The design is inspired by **ElevenLabs.io** — sophisticated minimalism with a clean,
editorial quality. Adapted for beauty: warm cream tones replace cold white, serif display
typography replaces technical sans, and gold/mauve accents replace blue/orange.

Think: **high-fashion editorial meets intimate salon**. Not a spa. Not a chain salon.
A personal, skilled artist with a premium, confident brand presence.

---

## Core Aesthetic

| Attribute | Direction |
|---|---|
| Mood | Editorial luxury, warm minimalism, intimate |
| Background | Warm cream (`#FAF7F2`) as the default canvas |
| Dark sections | Near-black (`#0D0D0D`) for contrast/drama |
| Typography feel | Elegant serif headings, clean sans body |
| Color use | Restrained — accents are gold and mauve, used sparingly |
| Spacing | Generous — let content breathe |
| Components | Rounded-full buttons, rounded-2xl cards, clean borders |
| Images | Moody editorial hair photography; dark/warm toned |

---

## Design Inspiration Source

**ElevenLabs.io** — reference the following principles extracted from this site:

- Neutral canvas (eggshell/cream) with confident accent colors used deliberately
- Large display typography doing the visual heavy lifting
- Generous vertical whitespace between sections (100–160px)
- Rounded pill buttons (border-radius: full)
- Minimal card borders (1px, low-opacity) — no heavy shadows
- Subtle hover states: opacity shift + slight scale
- Clean, anti-aliased type rendering
- Mobile-first responsive layouts

---

## Reference Files

| File | Contents |
|---|---|
| `colors.md` | Full palette, hex values, usage rules, Tailwind token map |
| `typography.md` | Font families, size scale, weight, spacing, usage rules |
| `layout.md` | Grid, spacing rhythm, section structure, max-widths |
| `components.md` | Button, card, nav, input, section header patterns |

---

## Do Not

- Use generic fonts (Inter, Roboto, system-ui) as primary choices
- Use heavy drop shadows as the default card style
- Invent a new color scheme — the palette is defined
- Use square/sharp-corner buttons
- Use gradient backgrounds unless explicitly asked
- Add decorative elements that weren't in the references or requested by the user
