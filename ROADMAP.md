# Portfolio Website — Roadmap

## Project Overview

Professional portfolio for **Fran Abellán** (Lead Data Scientist & AI Expert, PhD Astrophysics).
Dark & techy aesthetic with neural network particle animations. English only.
Live at: https://franabellan.com

---

## Tech Stack

| Layer        | Choice                      | Why                                                |
| ------------ | --------------------------- | -------------------------------------------------- |
| Framework    | **Next.js 15** (App Router) | SSR/SSG for SEO, Vercel-native, already familiar   |
| Language     | **TypeScript**              | Type safety, better DX, industry standard          |
| Styling      | **Tailwind CSS 4**          | Rapid iteration, responsive-first, dark theme      |
| Animations   | **Framer Motion**           | Declarative, performant, React-native animation    |
| Particles    | **Custom Canvas**           | Lightweight neural network effect, no extra dep    |
| Contact Form | **Formspree** (TBD)        | Email delivery without backend                     |
| Hosting      | **Vercel**                  | Zero-config Next.js deploy, edge network           |
| Package Mgr  | **npm**                     | Already available, no extra install needed         |

---

## Architecture

```
src/
  app/
    layout.tsx             # Root layout (fonts, metadata)
    page.tsx               # Home — composes all sections
    globals.css            # Tailwind base + dark theme tokens
  components/
    layout/
      Navbar.tsx           # Fixed top nav with smooth scroll + mobile menu
      Footer.tsx           # Social links, copyright
    sections/
      Hero.tsx             # Name, title, summary, CTA buttons, photo, stats
      Experience.tsx       # Expandable role cards with tech tags
      Skills.tsx           # Categorized grid (4 categories)
      Projects.tsx         # Project showcase cards with live links
      Education.tsx        # Timeline with PhD highlight
      Publications.tsx     # 20+ papers counter + NASA ADS link
      Contact.tsx          # Contact form + direct links
    ui/
      ParticlesBg.tsx      # Neural network particle canvas (custom)
      SectionWrapper.tsx   # Scroll-triggered entrance animations
      SectionHeading.tsx   # Code-styled section headers (< /> syntax)
      Badge.tsx            # Skill/tech tag pill
  lib/
    data.ts                # All CV/portfolio content as typed constants
public/
    photo.jpg              # Professional headshot
    FranAbellan_CV_Mar26.pdf # Downloadable CV
```

---

## Phases

### Phase 0 — Project Setup [DONE]
- [x] Create GitHub repository
- [x] Initialize Next.js 15 with TypeScript + Tailwind 4
- [x] Configure ESLint
- [x] Configure dark theme tokens and base styles
- [x] Set up Framer Motion + custom particle canvas
- [x] Connect Vercel deployment

### Phase 1 — Core Layout & Hero [DONE]
- [x] Root layout with Inter + JetBrains Mono fonts, SEO metadata, OpenGraph
- [x] Fixed Navbar with smooth scroll + responsive mobile menu
- [x] Hero: name, title, summary, CTA buttons (Download CV, Contact, LinkedIn)
- [x] Professional photo with glow effect
- [x] Quick stats bar (7+ years, 20+ publications, 4 industries)
- [x] Neural network particle background
- [x] Deploy v1 to Vercel

### Phase 2 — Professional Sections [DONE]
- [x] Experience — Expandable cards with role details, summaries, bullets, tech tags
- [x] Skills — 4-category grid (AI & LLMs, ML & DS, Engineering & MLOps, Leadership)
- [x] Education — Timeline with PhD dissertation link
- [x] Publications — Counter + NASA ADS link
- [x] Projects — NBA Fantasy Analytics + E-commerce cards
- [x] Contact — Form + direct email/LinkedIn links
- [x] Scroll-triggered entrance animations on all sections

### Phase 3 — Domain & Email [DONE]
- [x] Purchase domain (franabellan.com via Cloudflare Registrar)
- [x] Connect domain to Vercel (Production environment)
- [x] Set up email forwarding (contact@franabellan.com → Gmail)
- [x] Update contact email and SEO metadata (canonical URL, metadataBase, og:url)

### Phase 4 — Contact Form & Projects [NEXT]
- [ ] Set up Formspree account and integrate with Contact form
- [ ] Add project screenshots/previews to Projects cards

### Phase 5 — Polish & SEO
- [ ] Structured data (JSON-LD) for Person schema
- [ ] Favicon and site icons (generate from initials or logo)
- [ ] Performance audit (target Lighthouse 90+ all categories)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Micro-interactions and hover refinements
- [ ] Custom 404 page
- [ ] Vercel Analytics setup
- [ ] Final responsive QA across devices

### Phase 6 — Future Enhancements (Post-Launch)
- [ ] Hobbies & personal interests section
- [ ] Testimonials section (source quotes from LinkedIn recommendations)
- [ ] Dark/light theme toggle
- [ ] Internationalization (ES toggle)
- [ ] Blog/articles section
- [ ] Interactive career timeline visualization
- [ ] GitHub API integration (contribution activity)

---

## Design Tokens (Dark & Techy)

```
Background:      #0a0a0f (near-black with blue undertone)
Surface:         #12121a (cards, containers)
Surface Hover:   #1a1a2e
Border:          #1e1e3a (subtle purple-tint)
Accent:          #00d4aa (teal/cyan — primary brand color)
Accent Glow:     #00d4aa33 (for glows and shadows)
Secondary:       #3b82f6 (blue accent)
Text Primary:    #e2e8f0
Text Secondary:  #94a3b8
Text Muted:      #64748b
Particle Lines:  #00d4aa at 15% opacity
Particle Nodes:  #3b82f6 at 50% opacity
```

---

## Key Design Decisions

1. **Single page with section navigation** — Smooth scroll with hash links. Simpler, faster, better for a portfolio.
2. **Content as data** — All CV content in `lib/data.ts`. Updates = edit one file.
3. **Custom particle canvas** — No tsparticles dependency. Lighter, full control.
4. **Mobile-first** — Tailwind responsive utilities, tested on real devices.
5. **Performance budget** — Target <2s LCP, <100ms FID, <0.1 CLS.

---

## Working Agreement

- We work phase by phase, deploying after each phase
- Each phase gets a review checkpoint before moving to the next
- Content updates (new projects, testimonials) only require editing `lib/data.ts`
