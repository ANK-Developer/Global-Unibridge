# Build Checklist — Global Unibridge React

Status of each page vs its `_reference/` source capture. Content is extracted **verbatim**
unless noted. "Layout" = structure/spacing built to match; fine pixel spacing is approximated
from the design tokens, not measured per-element.

| Page | Route | Content | Layout | Notes |
|------|-------|---------|--------|-------|
| Home | `/` | ✅ verbatim | ✅ | Hero image + section images = placeholders |
| Who We Are | `/about-us` | ✅ verbatim | ✅ | Images placeholder |
| How We Do | `/how-we-work` | ✅ verbatim | ✅ | Images placeholder |
| Services | `/services` | ✅ verbatim | ✅ | Card images placeholder |
| TNE | `/services/tne` | ✅ verbatim | ✅ | Shared ServiceDetail template |
| Market Entry | `/services/india-market-entry` | ✅ verbatim | ✅ | No FAQ (matches source) |
| Agency Model | `/services/agency-recruitment-model` | ✅ verbatim | ✅ | — |
| E-Learning | `/services/e-learning` | ✅ verbatim | ✅ | No FAQ (matches source) |
| Events | `/event` | ⚠️ seeded | ✅ | Live grid is AJAX; 1 seeded event only |
| Event Detail | `/events/:slug` | ⚠️ seeded | ✅ | No source event-detail capture |
| Articles | `/article` | ✅ verbatim | ✅ | 5 articles; categories best-effort |
| Article Detail | `/article/:slug` | ✅ verbatim | ✅ | All 5, full sections + FAQs |
| FAQs | `/faqs` | ✅ verbatim | ✅ | 68 Q&As auto-extracted, 4 categories |
| Contact | `/contact` | ✅ verbatim | ✅ | Frontend-only form (name/email/message) |
| Terms | `/terms-and-conditions` | ✅ verbatim | ✅ | 12 sections; source H1 typo "Teams" corrected |
| Privacy | `/privacy-policy` | ❌ placeholder | ✅ | No source capture provided |
| 404 | `*` | ✅ | ✅ | Custom not-found page |

## Global

- ✅ Header (sticky, Resources dropdown, mobile drawer) — verbatim nav + links
- ✅ Footer — verbatim columns, address, contact, hover colors from source CSS
- ✅ Design tokens extracted from source (see DESIGN-TOKENS.md)
- ✅ Responsive breakpoints (1024 / 767) matching Elementor
- ✅ SEO: per-page `<title>` + meta via react-helmet-async; OG/Twitter defaults in index.html
- ✅ Favicon (GUB navy mark)
- ✅ Scroll-to-top on route change
- ✅ Accessibility: alt text, aria-labels on nav/toggle/accordion, focus states
- ✅ Production build clean; all routes 200; SPA rewrites for Vercel/Netlify

## Remaining to reach 100% pixel-perfect

1. **Real image assets** — biggest visual gap. Site images were inlined placeholders in the
   SingleFile captures (no source URLs). Partner logos (5) are real. Add remaining images to
   `public/images/` using the paths referenced in `src/data/*.js`, plus the real
   `GUB-NEW-LOGO-transparent.png`.
2. **Privacy Policy** — capture `_reference/privacy-policy.html` and fill `Privacy.jsx`.
3. **Events** — capture a rendered `/event` page (after AJAX loads) + one event-detail page.
4. **Fine spacing pass** — for any section where exact Elementor padding matters, compare
   side-by-side in the browser and nudge the section CSS.
