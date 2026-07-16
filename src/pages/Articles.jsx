import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero/PageHero.jsx'
import { articles, articleCategories } from '../data/articles.js'
import styles from './Articles.module.css'

export default function Articles() {
  const [filter, setFilter] = useState('All Insights')
  const shown = filter === 'All Insights' ? articles : articles.filter((a) => a.category === filter)

  return (
    <>
      <Helmet>
        <title>Articles — Global Unibridge</title>
        <meta
          name="description"
          content="Expert insights on global education trends, market opportunities, partnership developments, and strategies for institutional growth in India."
        />
      </Helmet>

      <PageHero heading="Articles">
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Articles</span>
        </nav>
      </PageHero>

      <section className="section-pad">
        <div className="container">
          <div className={styles.filters} role="tablist" aria-label="Article categories">
            {articleCategories.map((c) => (
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

          <div className={styles.grid}>
            {shown.map((a) => (
              <Link key={a.slug} to={a.to} className={styles.card}>
                <div className={styles.cardImgWrapper}>
                  <img src={a.image} alt={a.title} loading="lazy" />
                  <span className={styles.readTag}>{a.readTime}</span>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{a.title}</h3>
                  <p className={styles.cardExcerpt}>{a.excerpt}</p>
                  <span className={styles.cardBtn}>Read Full Article</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
