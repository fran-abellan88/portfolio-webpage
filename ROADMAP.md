# Portfolio Website — Roadmap

## Project Overview

Professional portfolio for **Fran Abellán** (Lead Data Scientist & AI Expert, PhD Astrophysics).
Dark & techy aesthetic with neural network particle animations. English only.
Deployed on Vercel (subdomain initially). GitHub repo to be created.

---

## Tech Stack

| Layer          | Choice                   | Why                                                    |
| -------------- | ------------------------ | ------------------------------------------------------ |
| Framework      | **Next.js 15** (App Router) | SSR/SSG for SEO, Vercel-native, already familiar       |
| Language       | **TypeScript**           | Type safety, better DX, industry standard              |
| Styling        | **Tailwind CSS 4**       | Rapid iteration, responsive-first, dark theme support  |
| Animations     | **Framer Motion**        | Declarative, performant, React-native animation lib    |
| Particles      | **tsparticles**          | Neural network / particle background effect            |
| Contact Form   | **Resend** or **Formspree** | Email delivery without backend (evaluate during Phase 2) |
| Hosting        | **Vercel**               | Zero-config Next.js deploy, edge network, analytics    |
| Package Mgr    | **pnpm**                 | Fast, disk-efficient                                   |

---

## Architecture

```
src/
  app/
    layout.tsx          # Root layout (fonts, metadata, particle bg)
    page.tsx            # Home — hero + section navigation
    globals.css         # Tailwind base + custom theme tokens
  components/
    layout/
      Navbar.tsx        # Fixed top nav with smooth scroll links
      Footer.tsx        # Social links, copyright
    sections/
      Hero.tsx          # Name, title, summary, CTA buttons (CV download, contact)
      Experience.tsx    # Timeline of professional roles
      Skills.tsx        # Categorized skill visualization
      Projects.tsx      # Project showcase cards
      Education.tsx     # Academic background + PhD
      Publications.tsx  # Research papers highlight
      Testimonials.tsx  # Recommendations carousel/grid
      Contact.tsx       # Contact form
    ui/
      ParticlesBg.tsx   # Neural network particle canvas
      SectionWrapper.tsx# Scroll animation wrapper
      Card.tsx          # Reusable card component
      Badge.tsx         # Skill/tech tag pill
  lib/
    data.ts             # All CV/portfolio content as typed constants
    metadata.ts         # SEO metadata configuration
  assets/
    photo.jpg           # Professional headshot
    cv.pdf              # Downloadable CV
  types/
    index.ts            # Shared TypeScript interfaces
```

---

## Phases

### Phase 0 — Project Setup
- [ ] Create GitHub repository
- [ ] Initialize Next.js 15 project with TypeScript + Tailwind + pnpm
- [ ] Configure ESLint, Prettier
- [ ] Set up Vercel deployment (connect repo)
- [ ] Configure dark theme tokens and base styles
- [ ] Set up Framer Motion and tsparticles

### Phase 1 — Core Layout & Hero
- [ ] Build root layout with metadata, fonts (Inter/JetBrains Mono), particle background
- [ ] Create fixed Navbar with smooth scroll to sections
- [ ] Build Hero section: name, title, summary, CTA buttons (Download CV, Contact Me)
- [ ] Add professional photo with styled container
- [ ] Implement responsive design (mobile-first)
- [ ] Deploy first version to Vercel — validate pipeline works

### Phase 2 — Professional Sections
- [ ] **Experience** — Interactive timeline with role details, tech tags, expandable bullets
- [ ] **Skills** — Categorized grid (AI & LLMs, ML & DS, Engineering & MLOps, Leadership) with visual indicators
- [ ] **Education** — PhD highlight with link to dissertation, degrees timeline
- [ ] **Publications** — Featured card linking to NASA ADS, paper count highlight
- [ ] Scroll-triggered entrance animations for each section

### Phase 3 — Projects & Social Proof
- [ ] **Projects showcase** — Cards with screenshots/previews, tech stack, live links
  - NBA Fantasy Analytics Platform (live link + description)
  - E-commerce business (description + ML angle)
  - Open for future projects
- [ ] **Testimonials** — Grid or carousel with recommendation quotes
  - Source quotes from LinkedIn recommendations or request them
- [ ] **Contact form** — Name, email, message fields with validation
  - Integrate email service (Resend/Formspree)
  - Success/error feedback states

### Phase 4 — Polish & SEO
- [ ] Full SEO optimization (OpenGraph, Twitter cards, structured data/JSON-LD)
- [ ] Performance audit (Lighthouse 90+ across all categories)
- [ ] Accessibility audit (WCAG 2.1 AA compliance)
- [ ] Add subtle micro-interactions and hover effects
- [ ] Favicon and site icons
- [ ] 404 page with on-brand design
- [ ] Analytics setup (Vercel Analytics or Plausible)
- [ ] Final responsive QA across devices

### Phase 5 — Future Enhancements (Post-Launch)
- [ ] Hobbies & personal interests section
- [ ] Custom domain setup
- [ ] Blog/articles section (if decided later)
- [ ] Dark/light theme toggle
- [ ] Internationalization (ES toggle)
- [ ] Interactive data visualization of career timeline
- [ ] Integration with GitHub API (show contribution activity)

---

## Design Tokens (Dark & Techy)

```
Background:      #0a0a0f (near-black with blue undertone)
Surface:         #12121a (cards, containers)
Surface Hover:   #1a1a2e
Border:          #1e1e3a (subtle purple-tint)
Primary:         #00d4aa (teal/cyan — matches your CV accent)
Primary Glow:    #00d4aa33 (for glows and shadows)
Secondary:       #3b82f6 (blue accent)
Text Primary:    #e2e8f0
Text Secondary:  #94a3b8
Text Muted:      #64748b
Code/Mono:       #a78bfa (purple for code elements)
Particle Color:  #00d4aa at 30% opacity (neural net lines)
Particle Nodes:  #3b82f6 at 50% opacity
```

---

## Key Design Decisions

1. **Single page with section navigation** — No multi-page routing. Smooth scroll with URL hash updates. Simpler, faster, better for a portfolio.
2. **Content as data** — All CV content in `lib/data.ts`, not hardcoded in components. Makes updates trivial and opens the door to a CMS later.
3. **Progressive enhancement** — Site works without JS (SSG), animations are enhancement only.
4. **Mobile-first** — Tailwind responsive utilities, test on real devices.
5. **Performance budget** — Target <2s LCP, <100ms FID, <0.1 CLS.

---

## Working Agreement

- We work phase by phase, deploying after each phase
- Each phase gets a review checkpoint before moving to the next
- Content updates (new projects, testimonials) should only require editing `lib/data.ts`
