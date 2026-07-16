// Events content.
// NOTE: The live /event grid loads dynamically (AJAX) so no verbatim card copy
// was in the capture. These two events are reconstructed from the provided
// asset folders (Images-for-Events/NAFSA2026 + ICEF2026), which contain the
// participating universities GUB represents at each conference.

export const eventCategories = ['All', 'NAFSA', 'ICEF', 'EDUCATIONAL']

export const events = [
  {
    slug: 'nafsa-2026',
    title: 'NAFSA 2026',
    category: 'NAFSA',
    date: '2026-05-26',
    dateLabel: 'May 26–29, 2026',
    time: 'Full Conference',
    location: 'NAFSA Annual Conference & Expo',
    image: '/images/partner-nafsa.webp',
    excerpt:
      'Global Unibridge represents a select group of international universities at NAFSA 2026 — connecting them with India’s student and institutional networks.',
    body: [
      'Global Unibridge is proud to represent a select group of international universities at NAFSA 2026, one of the world’s largest gatherings of international education professionals.',
      'Our team connects these institutions with India’s student and institutional networks, facilitating partnerships, recruitment opportunities, and long-term market engagement.',
    ],
    partners: [
      { name: 'City University of Seattle', logo: '/images/events/nafsa2026/city-university-of-seattle.jpeg' },
      { name: 'Coastal Carolina University', logo: '/images/events/nafsa2026/coastal-carolina-university.jpeg' },
      { name: 'Columbia Southern University', logo: '/images/events/nafsa2026/columbia-southern-university-1.jpeg' },
      { name: 'Columbia University', logo: '/images/events/nafsa2026/columbia-university.jpeg' },
      { name: 'FAAP Brazil', logo: '/images/events/nafsa2026/faap-brazil.jpeg' },
      { name: 'Norwegian University of Life Sciences', logo: '/images/events/nafsa2026/norweigian-uni-of-life-sci.jpeg' },
      { name: 'SMU', logo: '/images/events/nafsa2026/smu-1.jpeg' },
      { name: 'St. Cloud State University', logo: '/images/events/nafsa2026/st-cloud-state-university.jpeg' },
    ],
  },
  {
    slug: 'icef-2026',
    title: 'ICEF 2026',
    category: 'ICEF',
    date: '2026-03-10',
    dateLabel: 'March 10–12, 2026',
    time: 'Full Conference',
    location: 'ICEF Partnership Event',
    image: '/images/partner-icef.webp',
    excerpt:
      'Global Unibridge partners with leading institutions at ICEF 2026 to build sustainable recruitment and academic collaborations across India.',
    body: [
      'At ICEF 2026, Global Unibridge partners with a curated group of international institutions to build sustainable recruitment channels and academic collaborations across India.',
      'These engagements help universities strengthen their visibility and establish meaningful connections within India’s rapidly evolving education ecosystem.',
    ],
    partners: [
      { name: 'Lees-McRae College', logo: '/images/events/icef2026/lees-mac-re-college.jpeg' },
      { name: 'Millikin University', logo: '/images/events/icef2026/millikin-university.jpeg' },
      { name: 'Shoreline College', logo: '/images/events/icef2026/shoreline-college.jpeg' },
      { name: 'Tiffin University', logo: '/images/events/icef2026/tiffin-university-1.jpeg' },
      { name: 'Webster University', logo: '/images/events/icef2026/webster-university.jpeg' },
    ],
  },
]
