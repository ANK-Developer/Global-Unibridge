// Card copy for the "What We Do" / "Related Services" grid at the foot of each
// service page. Kept separate from services.js on purpose: the reference shows
// short, trimmed excerpts here, while the home page cards carry the full sentence.
// Edit this file to change the service-page cards; edit services.js for home.
import { services } from './services.js'

const EXCERPTS = {
  tne: 'Helping universities establish long-term academic...',
  'india-market-entry': 'Combining on-ground representation with...',
  'agency-recruitment-model': 'Enabling institutions to expand student recruitment...',
  'e-learning': 'Supporting universities with e-learning partnerships...',
}

export const relatedServices = services.map((s) => ({
  ...s,
  excerpt: EXCERPTS[s.slug] ?? s.excerpt,
}))
