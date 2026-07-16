import { Link } from 'react-router-dom'
import styles from './ServiceCard.module.css'

export default function ServiceCard({ service }) {
  return (
    <Link to={service.to} className={styles.card}>
      <div className={styles.imgWrap}>
        <img src={service.image} alt={service.title} loading="lazy" />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.excerpt}>{service.excerpt}</p>
        <span className={styles.more}>View More</span>
      </div>
    </Link>
  )
}
