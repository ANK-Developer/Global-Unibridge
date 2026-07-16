import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero/PageHero.jsx'
import Media from '../components/Media/Media.jsx'
import { events } from '../data/events.js'
import styles from './EventDetail.module.css'

export default function EventDetail() {
  const { slug } = useParams()
  const event = events.find((e) => e.slug === slug)
  if (!event) return <Navigate to="/event" replace />

  return (
    <>
      <Helmet>
        <title>{event.title} — Global Unibridge</title>
        <meta name="description" content={event.excerpt} />
      </Helmet>

      <PageHero eyebrow="Events" heading={event.title}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/event">Events</Link>
          <span>/</span>
          <span aria-current="page">{event.title}</span>
        </nav>
      </PageHero>

      <section className="section-pad">
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.main}>
              <Media src={event.image} alt={event.title} ratio="16 / 9" />
              <div className={styles.bodyText}>
                {event.body.map((p, i) => (<p key={i}>{p}</p>))}
              </div>

              {event.partners?.length > 0 && (
                <div className={styles.partners}>
                  <h2>Participating Institutions</h2>
                  <div className={styles.partnerGrid}>
                    {event.partners.map((p) => (
                      <div key={p.name} className={styles.partnerCard}>
                        <img src={p.logo} alt={p.name} loading="lazy" />
                        <span>{p.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <aside className={styles.sidebar}>
              <h3>Event Details</h3>
              <ul>
                <li><strong>Category</strong><span>{event.category}</span></li>
                <li><strong>Date</strong><span>{event.dateLabel}</span></li>
                <li><strong>Time</strong><span>{event.time}</span></li>
                <li><strong>Location</strong><span>{event.location}</span></li>
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Register Interest</Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
