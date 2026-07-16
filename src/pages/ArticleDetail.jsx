import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
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

      <div className={styles.articleHeader}>
        <h1 className={styles.articleTitle}>{article.detailTitle || article.title}</h1>
      </div>

      {article.image && (
        <div className={styles.heroImgWrap}>
          <img className={styles.heroImg} src={article.image} alt={article.title} loading="lazy" />
        </div>
      )}

      <article className={styles.articlePage} id="top">
        {article.heroIntro?.length > 0 && (
          <div className={styles.articleIntro}>
            {article.heroIntro.map((p, i) => (<p key={i}>{p}</p>))}
          </div>
        )}

        {article.sections.map((s) => (
          <section key={s.heading} className={styles.contentSection}>
            <h2 className={styles.sectionHeading}>{s.heading}</h2>
            <h3 className={styles.subLabel}>Detailed Description</h3>
            <div className={styles.sectionText}>
              {s.description.map((p, i) => (<p key={i}>{p}</p>))}
            </div>
            {s.listTitle && <h3 className={styles.subLabel}>{s.listTitle}</h3>}
            {s.listItems?.length > 0 && (
              <ul className={styles.benefitList}>
                {s.listItems.map((it) => (<li key={it}>{it}</li>))}
              </ul>
            )}
          </section>
        ))}

        {article.faqs?.length > 0 && (
          <div className={styles.faqSection}>
            <p className={styles.faqLabel}>FAQs</p>
            <Accordion items={article.faqs} defaultOpen={0} />
          </div>
        )}

        <div className={styles.backWrap}>
          <Link to="/article" className={styles.back}>← Back to All Articles</Link>
        </div>
      </article>
    </>
  )
}
