import { Link } from 'react-router-dom'
import Media from '../Media/Media.jsx'
import styles from './InsightCard.module.css'

export default function InsightCard({ article }) {
  return (
    <article className={styles.card}>
      <div className={styles.mediaWrap}>
        <Media src={article.image} alt={article.title} ratio="16 / 10" rounded={false} />
        <span className={styles.number}>{article.number}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.excerpt}>{article.excerpt}</p>
        <Link to={article.to} className={styles.more}>
          Explore Now
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
            <path d="M1 6h13M9 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
