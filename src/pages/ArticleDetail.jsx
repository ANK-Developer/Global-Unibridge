import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero/PageHero.jsx'
import Accordion from '../components/Accordion/Accordion.jsx'
import { articles } from '../data/articles.js'
import styles from './ArticleDetail.module.css'

export default function ArticleDetail() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)
  if (!article) return <Navigate to="/article" replace />

  return (
    <>
      <Helmet>
        <title>{article.title} — Global Unibridge</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <PageHero
        eyebrow={article.category}
        heading={article.detailTitle || article.title}
        paragraphs={article.heroIntro}
      >
        <div className={styles.meta}>
          <span>{article.readTime}</span>
        </div>
      </PageHero>

      <article className="section-pad">
        <div className="container">
          <div className={styles.body}>
            {article.sections.map((s) => (
              <section key={s.heading} className={styles.block}>
                <h2 className={styles.blockTitle}>{s.heading}</h2>
                {s.description.map((p, i) => (
                  <p key={i} className={styles.para}>{p}</p>
                ))}
                {s.listTitle && <h3 className={styles.listTitle}>{s.listTitle}</h3>}
                <ul className={styles.list}>
                  {s.listItems.map((it) => (
                    <li key={it}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="11" fill="var(--color-cream)" />
                        <path d="M7 12.5l3 3 7-7" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {article.faqs?.length > 0 && (
            <div className={styles.faqSection}>
              <h2 className="section-title" style={{ textAlign: 'center' }}>FAQs</h2>
              <div className={styles.faqWrap}>
                <Accordion items={article.faqs} />
              </div>
            </div>
          )}

          <div className={styles.backWrap}>
            <Link to="/article" className={styles.back}>← Back to All Articles</Link>
          </div>
        </div>
      </article>
    </>
  )
}
