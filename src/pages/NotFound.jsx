import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found — Global Unibridge</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className={styles.wrap}>
        <div className="container">
          <span className={styles.code}>404</span>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.text}>
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <div className={styles.actions}>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
