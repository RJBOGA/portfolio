# Apple-Clean Portfolio Redesign — RJ Boga

Rebuild the portfolio to match the provided design spec: Swiss & High-Contrast, Apple-clean, light theme, dramatic typography, glassmorphic nav, bento layouts, and Emil Kowalski-style fluid spring motion.

## Design System (index.css + tailwind.config.ts)

Replace current tokens with light Apple-clean palette (all HSL):

- `--background` `#fbfbfd` · `--card` `#ffffff` · `--foreground` `#1d1d1f`
- `--muted-foreground` `#555559` (darkened from #86868b for WCAG AA)
- `--tertiary` `#a1a1a6` · `--border` `#f5f5f7` · `--accent` `#000000`
- Custom tokens: `--glass-bg`, `--shadow-card`, `--shadow-bento`

Fonts: load **Outfit** (display, 400/500/600/700) and **Manrope** (body, 400/500/600) from Google Fonts in `index.html`. Wire into Tailwind's `fontFamily.display` and `fontFamily.sans`.

Type scale (utility classes on `.text-display`, `.text-h2`, `.text-h3`, `.text-body`, `.text-label`) matching the spec exactly — huge tracking-tighter h1, tiny uppercase 0.2em labels.

Extend Tailwind with:
- `borderRadius: '3xl' → 32px`
- `boxShadow: card / bento / soft`
- `backdropBlur: '2xl'`, `backdropSaturate: 150`

## Motion Setup

- Install `framer-motion`, `lenis`, `lucide-react` if not present.
- Add `<LenisProvider>` at app root wrapping `Layout` for smooth scroll.
- Create `src/lib/motion.ts` exporting shared variants + spring: `{ type: 'spring', bounce: 0, duration: 0.8 }` and `fadeUp` (`y: 20 → 0`, opacity `0 → 1`).
- Global rule: no `transition: all`, only `ease-out`, click scale `0.98`, hover lift `-translate-y-1`.

## Structure (rebuild `src/pages/Index.tsx`)

New section order + components under `src/components/sections/`:

1. **Nav** — floating pill, glassmorphic (`bg-white/70 backdrop-blur-2xl border border-white/40`), scroll-aware shrink, mobile sheet menu. Links: Work · Projects · About · Contact.
2. **Hero** — `min-h-[90vh]`, centered. Massive stacked "RAJU / BOGA" (solid top line, outlined bottom line via `-webkit-text-stroke`). Label "SENIOR SOFTWARE ENGINEER · RJ". Scroll-driven opacity + slight parallax using `useScroll`. Two CTAs (View Work, Get in Touch).
3. **Marquee** — infinite skills ticker, single row, subtle fade edges.
4. **Bio/About** — portrait (Unsplash URL from spec, rounded-2xl) beside `text-2xl md:text-3xl` bio, left-aligned, `max-w-3xl`. Below: 4-stat bento row (5+ years, 3 companies, 2x Impact Award, AWS SAA-C03).
5. **Skills bento** — `grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6`, mixed col-spans, each tile `rounded-[32px] p-8 shadow-bento hover:-translate-y-1`, lucide icon stroke 1.5, skill group heading + list.
6. **Experience timeline** — refined vertical line, floating dot nodes, cards for Citi / Rate / Carelon with role, dates, exaggerated impact bullets using strong verbs.
7. **Projects** — 2-up featured grid (EAP, Alumni Services App). Edge-to-edge image inside card, glassmorphic info overlay on hover with title/stack/links.
8. **Achievements** — bento tiles: 2× Impact Award, DSI publication, AWS cert. Large numeric typography.
9. **Education** — compact timeline: UCM (Master's), VNRVJIET (Bachelor's).
10. **Contact** — massive "Let's Talk." headline, email link, socials (GitHub, LinkedIn, Instagram) as icon buttons.
11. **Footer** — minimal, centered, © + tiny label.

Delete/replace the current `HeaderSection`, `AboutSection`, `WorkSection`, `ProjectsSection`, `SpeakingSection`, `EducationSection`, `SkillsSection`, `ContactSection`, `Navigation`. Keep `Layout`, `BackToTop`, `SkipLink`, `Footer` (restyled).

## Data

Extend `src/data/portfolio-data.ts`:
- Add `achievements` array (2× Impact Award, DSI publication, AWS SAA-C03).
- Add real impact bullets per experience (strong verbs, exaggerated).
- Add `projects` entries for **EAP** and **Alumni Services App** with image URLs from spec.
- Bio kept, but split into hero-lead + long form for the About section.
- Portrait: use spec Unsplash URL (`profile_portrait`) instead of current `dp.jpg` (kept as fallback).
- Socials: add Instagram alongside LinkedIn / GitHub.

## Accessibility & Testability

- `data-testid` (kebab-case) on every link, button, card, and nav item.
- Verify `#555559` on `#fbfbfd` passes WCAG AA (contrast ratio ~7.5:1 ✓).
- Preserve `SkipLink`, semantic `<main>`, single `<h1>` in hero, proper `<nav>` and heading hierarchy.
- `prefers-reduced-motion`: gate Lenis + framer-motion reveals to fade-only.

## Technical Details

- Files to create: `src/lib/motion.ts`, `src/lib/lenis.tsx`, `src/components/sections/{HeroSection,MarqueeSection,BioSection,SkillsBento,ExperienceTimeline,ProjectsSection,AchievementsSection,EducationTimeline,ContactSection}.tsx`, `src/components/FloatingNav.tsx`.
- Files to edit: `index.html` (Google Fonts + title/meta), `src/index.css` (tokens + type classes), `tailwind.config.ts` (fonts, shadows, radii), `src/pages/Index.tsx` (recompose), `src/data/portfolio-data.ts` (extend), `src/types/portfolio.ts` (add achievement type, project image, instagram social).
- Files to remove: old section components listed above (kept until replacements are wired).
- Verify with `bun run build` after edits.

## Open Questions (I'll proceed with defaults if unanswered)

1. **Portrait**: use the Unsplash URL from the spec, or keep your existing `dp.jpg` asset? *Default: use Unsplash URL as spec instructs.*
2. **Instagram handle**: not in current data. *Default: omit the Instagram link and keep GitHub + LinkedIn + Email only.*
3. **Project details**: EAP and Alumni Services App aren't in current data. Do you have real descriptions/tech stacks, or should I write exaggerated placeholder copy consistent with your Carelon/Rate experience? *Default: placeholder copy.*
