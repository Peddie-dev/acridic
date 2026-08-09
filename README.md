# ACRIDC-Africa Website

Next.js (App Router) + TypeScript + Tailwind CSS v4 website for ACRIDC-Africa, built from Figma designs.

## Stack

- **Framework:** Next.js (App Router, `.tsx`)
- **Styling:** Tailwind CSS v4 (`@theme` in `app/globals.css`, no `tailwind.config.ts`)
- **Font:** [Manrope](https://fonts.google.com/specimen/Manrope) via `next/font/google`
- **Icons:** [lucide-react](https://lucide.dev/)
- **Images:** `next/image`

## Progress so far

### 1. `components/Navbar.tsx`
Sticky/floating glassmorphic pill navbar.
- Logo image (`public/logos/logos.png`) — text wordmark removed since it's baked into the logo asset
- Links: Home, About (dropdown), Research (dropdown), Our Work, News, Contact
- **About** dropdown: About ARCIDC, Leadership, Partners, Careers
- **Research** dropdown: Research Areas, Publications, Policy Briefs, Case Studies
- "Partner With Us" CTA (navy pill, single line, never wraps)
- Matches Figma hug dimensions: max-width 1247px, height 79px
- Mobile: collapses to an accordion sheet
- Click-outside / Escape close open dropdowns

### 2. `components/Hero.tsx`
Full-bleed photo hero section (min-height ~780–840px).
- Eyebrow tags: African-Led • Evidence Driven • Impact Focused
- Headline: "Research. Innovate. Collaborate. Transform Africa." ("Transform" emerald, "Africa" `#0D3B66`)
- Copy + two CTAs: "Explore our Work" (navy filled), "Become a Partner" (outlined)
- Three floating pillar badges (Research / Innovation / Collaboration), top-right, glassy pills
- Three thumbnail cards (Community Empowerment / Evidence & Innovation / Climate & Resilience), overlapping bottom-right of the photo, desktop only — stack normally on mobile
- "Our Impact Ecosystem" bar pinned near the bottom (Governments, Universities, Development, Civil Society, Private Sector, More)
- Background photo brightness boosted (`brightness-110`)

### 3. `components/About.tsx`
"About ACRIDC" section — white rounded card with a full-bleed photo blended in from the right.
- Eyebrow "About Acridc", 3-line heading ("Africa's" emerald, "Future." `#0D3B66`)
- Two copy paragraphs + "Our Story" CTA
- Photo spans the full card (including behind the pillar row), fading to white on the left ~33–40% via a contained gradient overlay
- **Important:** outer card uses `relative isolate` — without `isolate`, the full-bleed background (`-z-10`) breaks and disappears behind unrelated page content instead of just the card's own background. Keep this pattern for any future full-bleed sections.
- "Our Core Pillars" row: Our Mission, Our Vision, Our Values, Our Approach — icon tile, title, description, hover arrow

### 4. `components/WhatWeDo.tsx`
"What We Do" section.
- Eyebrow "What We Do", heading ("Africa's" emerald, "challenges." `#0D3B66`), description
- "View all Areas" outlined pill button, top-right
- Decorative dotted-pattern background accent, top-right corner
- 4 focus-area cards (Climate & Environment, Agriculture & Food Systems, Health & Wellbeing, Governance & Policy) — photo, overlapping icon badge, title, description, hover arrow

## Fonts

`app/layout.tsx` loads Manrope via `next/font/google` as `--font-manrope`, replacing the default Geist Sans (Geist Mono kept as-is). `app/globals.css` maps `--font-sans` to `--font-manrope` inside `@theme inline`, so `font-sans` resolves to Manrope everywhere with no per-component changes needed.

## Assets still needed (placeholders in place)

| Component  | Path                                    | Status |
|------------|------------------------------------------|--------|
| Navbar     | `public/logos/logos.png`                 | ✅ added |
| About      | `public/images/about-acridc.png`         | ✅ added |
| Hero       | `public/images/hero-bg.jpg`              | ⬜ placeholder |
| Hero       | `public/images/hero-thumb-community.jpg` | ⬜ placeholder |
| Hero       | `public/images/hero-thumb-innovation.jpg`| ⬜ placeholder |
| Hero       | `public/images/hero-thumb-climate.jpg`   | ⬜ placeholder |
| WhatWeDo   | `public/images/what-we-do-climate.jpg`      | ⬜ placeholder |
| WhatWeDo   | `public/images/what-we-do-agriculture.jpg`  | ⬜ placeholder |
| WhatWeDo   | `public/images/what-we-do-health.jpg`       | ⬜ placeholder |
| WhatWeDo   | `public/images/what-we-do-governance.jpg`   | ⬜ placeholder |

## Brand colors used so far

- Emerald accent: Tailwind `emerald-600` / `emerald-700`
- Navy (CTAs, "Africa" text): `#0D3B66` (text) / `#0F3057` (buttons — close but distinct, confirm with Figma if these should match exactly)
- Background neutrals: Tailwind `slate-50` / `slate-900` / `slate-500`

## Assembling the homepage

```tsx
// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <WhatWeDo />
    </main>
  );
}
```

## Known follow-ups / open questions

- Confirm exact hex values from Figma for the navy used in buttons vs. the "Africa" text color (`#0F3057` vs `#0D3B66` — currently used for different elements, may want to unify)
- Real photography needed for Hero, WhatWeDo, and Hero thumbnails
- Decorative dotted-map graphic in WhatWeDo is a CSS approximation — swap for the real exported asset if Figma has one
- Next section to build: TBD
