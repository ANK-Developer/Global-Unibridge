import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero/PageHero.jsx'
import { events, eventCategories } from '../data/events.js'
import styles from './Events.module.css'

export default function Events() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? events : events.filter((e) => e.category === filter)

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
          <div className={styles.filters}>
            {eventCategories.map((c) => (
              <button
                key={c}
                type="button"
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
              {shown.map((e) => (
                <article key={e.slug} className={styles.card}>
                  <div className={styles.cardMedia}>
                    <img src={e.image} alt={e.title} loading="lazy" />
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.cat}>{e.category}</span>
                    <h3 className={styles.cardTitle}>{e.title}</h3>
                    <div className={styles.cardMeta}>
                      <span>📅 {e.dateLabel}</span>
                      <span>📍 {e.location}</span>
                    </div>
                    <p className={styles.excerpt}>{e.excerpt}</p>
                    <Link to={`/events/${e.slug}`} className={styles.readMore}>View Details →</Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
