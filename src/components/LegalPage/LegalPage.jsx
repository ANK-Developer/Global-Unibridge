import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../PageHero/PageHero.jsx'
import styles from './LegalPage.module.css'

export default function LegalPage({ title, intro, sections }) {
  return (
    <>
      <Helmet>
        <title>{title} — Global Unibridge</title>
      </Helmet>

      <PageHero heading={title} paragraphs={intro ? [intro] : []}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span aria-current="page">{title}</span>
        </nav>
      </PageHero>

      <section className="section-pad">
        <div className="container">
          <div className={styles.body}>
            {sections.map((s) => (
              <div key={s.title} className={styles.section}>
                <h2>{s.title}</h2>
                {s.paragraphs.map((p, i) => (<p key={i}>{p}</p>))}
                {s.list && (
                  <ul>
                    {s.list.map((li) => (<li key={li}>{li}</li>))}
                  </ul>
                )}
                {s.after && <p>{s.after}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
