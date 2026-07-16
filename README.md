# Global Unibridge — React

Pixel-faithful React rebuild of [globalunibridge.com](https://globalunibridge.com) (originally an Eduma / Thim WordPress + Elementor site).

**Stack:** React 18 · Vite · React Router · react-helmet-async · plain CSS / CSS Modules (no Tailwind — original CSS values reused for fidelity).

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/    Header, Footer, PageHero, ServiceCard, InsightCard, StatBlock,
                 PartnerLogos, Accordion, ServiceDetail, LegalPage, Media
  pages/         Home, About, HowWeWork, Services, Contact, Events, EventDetail,
                 Articles, ArticleDetail, FAQs, Terms, Privacy, NotFound
  pages/services/  TNE, MarketEntry, AgencyModel, ELearning
  data/          services, serviceDetails, articles, events, home, about,
                 howwework, faqs, legal   (all page content, kept out of JSX)
  styles/        tokens.css, global.css   (design system extracted from source)
_reference/      Saved source HTML (SingleFile) — the source of truth. Not shipped.
```

Design tokens (exact colors/fonts/spacing pulled from the source CSS) are documented in
[DESIGN-TOKENS.md](./DESIGN-TOKENS.md).

## Routes

`/` · `/about-us` · `/how-we-work` · `/services` ·
`/services/tne` · `/services/india-market-entry` · `/services/agency-recruitment-model` · `/services/e-learning` ·
`/event` · `/events/:slug` · `/article` · `/article/:slug` ·
`/faqs` · `/contact` · `/terms-and-conditions` · `/privacy-policy` · `*` (404)

## Content model

All page copy lives in `src/data/*.js` (extracted verbatim from `_reference/`), mapped into
reusable components. Update content there, not in JSX.

## Known gaps / TODO

- **Images:** most site images were inlined as placeholders in the SingleFile captures, so pages
  use graceful cream placeholders. The 5 partner logos are real (extracted from source). Drop the
  real assets into `public/images/` (see referenced paths in the data files) to finish the visuals.
- **Logo:** `public/images/GUB-NEW-LOGO-transparent.png` — add the real PNG (a text fallback shows until then).
- **Events:** the live `/event` grid loads dynamically (AJAX) and wasn't in the static capture; one
  seeded event (`yoga-mindfulness-retreat`) is present. Capture a rendered `/event` page to complete it.
- **Privacy Policy:** no source capture yet — `src/pages/Privacy.jsx` is a placeholder.
- **Contact form:** frontend-only (validates + logs). Backend is Phase 2 (`POST /api/leads`).

## Deploy

Static SPA — deploy `dist/` to Vercel or Netlify. Configure a catch-all rewrite to `/index.html`
so client-side routes resolve on refresh (Netlify: `/* /index.html 200`; Vercel: SPA rewrite).
