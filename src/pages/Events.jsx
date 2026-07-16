import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero/PageHero.jsx'
import { events, eventCategories } from '../data/events.js'
import styles from './Events.module.css'

// Flatten every event's partner logos into a single filterable gallery,
// matching the reference /event isotope grid (square logo tiles, 3 per row).
const galleryItems = events.flatMap((e) =>
  e.partners.map((p) => ({ ...p, category: e.category, event: e.title }))
)

export default function Events() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const shown =
    filter === 'All' ? galleryItems : galleryItems.filter((p) => p.category === filter)

  // Close the lightbox on Escape and lock body scroll while it is open.
  useEffect(() => {
    if (!lightbox) return undefined
    const onKey = (e) => e.key === 'Escape' && setLightbox(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox])

  return (
    <>
      <Helmet>
        <title>Events — Global Unibridge</title>
        <meta name="description" content="Upcoming events, education fairs, and engagement activities from Global Unibridge." />
      </Helmet>

      <PageHero heading="Event">
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Events</span>
        </nav>
      </PageHero>

      <section className="section-pad">
        <div className="container">
          <div className={styles.filters} role="tablist" aria-label="Event categories">
            {eventCategories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={filter === c}
                className={`${styles.filter} ${filter === c ? styles.filterActive : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {shown.length === 0 ? (
            <p className={styles.empty}>No events in this category yet. Please check back soon.</p>
          ) : (
            <div className={styles.grid}>
              {shown.map((p, i) => (
                <button
                  key={`${p.event}-${p.name}-${i}`}
                  type="button"
                  className={styles.tile}
                  onClick={() => setLightbox(p)}
                  aria-label={`View ${p.name}`}
                >
                  <img src={p.logo} alt={p.name} loading="lazy" width="440" height="440" />
                  <span className={styles.overlay} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7" />
                      <line x1="16.5" y1="16.5" x2="21" y2="21" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {lightbox && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.name}
          onClick={() => setLightbox(null)}
        >
          <button type="button" className={styles.lightboxClose} aria-label="Close" onClick={() => setLightbox(null)}>
            ×
          </button>
          <figure className={styles.lightboxFigure} onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.logo} alt={lightbox.name} className={styles.lightboxImg} />
            <figcaption className={styles.lightboxCaption}>
              <strong>{lightbox.name}</strong>
              <span>{lightbox.event}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
