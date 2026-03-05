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
    chat/
      ChatWidget.tsx       # Floating AI chatbot (Gemini-powered)
      ChatMessages.tsx     # Message list with auto-scroll
      ChatInput.tsx        # Input bar with send button
      ChatBubble.tsx       # Individual message bubble
  lib/
    data.ts                # All CV/portfolio content as typed constants
    chat/
      system-prompt.ts     # Builds system prompt from CV data
      rate-limit.ts        # In-memory IP-based rate limiter
      types.ts             # ChatMessage, ChatRole types
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

### Phase 4 — Contact Form & Polish [DONE]
- [x] Set up Formspree account and integrate with Contact form
- [x] Add favicon (SVG with "FA" initials in accent color)
- [x] Add Twitter/X social link to Footer and data
- [x] Remove "Built with" text from Footer

### Phase 5 — SEO & Polish [DONE]
- [x] Structured data (JSON-LD) for Person schema
- [x] Performance: page.tsx as Server Component (SSG), optimized Image sizes, reduced particles (80→50), debounced resize
- [x] Accessibility: focus-visible styles, skip-to-content link, aria-expanded on expandables, keyboard nav on Experience cards, aria-required on form, reduced-motion support, improved text contrast
- [x] Custom 404 page
- [x] Vercel Analytics (@vercel/analytics)

### Phase 6 — AI Chatbot & UX Polish [DONE]
- [x] AI chatbot powered by Gemini API (floating widget, streaming responses, system prompt with full CV context)
- [x] Dual rate limiting: 10 msgs/session (client) + 30 msgs/IP/day (server)
- [x] API route `/api/chat` with streaming ReadableStream
- [x] Add GitHub social link to personal data, Footer, and system prompt
- [x] Skills section: Leadership card promoted to first position with accent highlight

### Phase 7 — Beyond Work Section [DONE]
- [x] Beyond Work section with personal interests and hobbies

### Phase 8 — PostHog Analytics [DONE]
- [x] PostHog integration with custom event tracking (posthog-js)
- [x] Events: CV download, chat interactions (open/close/message/limit), contact form, external link clicks, nav clicks
- [x] PostHogProvider client component with lazy singleton initializer
- [x] Centralized event constants in `lib/analytics-events.ts`

### Phase 9 — Future Enhancements (Post-Launch)
- [ ] GitHub API integration (contribution activity)
- [ ] Project screenshots/previews carousel in Projects cards
- [ ] Testimonials section (source quotes from LinkedIn recommendations)
- [ ] Dark/light theme toggle
- [ ] Internationalization (ES toggle)

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
