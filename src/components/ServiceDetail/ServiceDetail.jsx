import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Accordion from '../Accordion/Accordion.jsx'
import { services } from '../../data/services.js'
import { whyChooseUs } from '../../data/serviceDetails.js'
import styles from './ServiceDetail.module.css'

function CheckList({ items }) {
  return (
    <ul className={styles.checkList}>
      {items.map((it) => (<li key={it}>{it}</li>))}
    </ul>
  )
}

function Block({ block }) {
  if (block.type === 'usp') {
    return (
      <div className={`${styles.block} ${styles.usp}`}>
        <h2 className={styles.blockTitle}>{block.title}</h2>
        {block.paragraphs.map((p, i) => (<p key={i} className={styles.uspP}>{p}</p>))}
        {block.items && <CheckList items={block.items} />}
      </div>
    )
  }
  const body = (
    <>
      <h2 className={styles.blockTitle}>{block.title}</h2>
      {block.subtitle && <p className={styles.blockSub}>{block.subtitle}</p>}
      {block.type === 'list' && <CheckList items={block.items} />}
      {block.paragraphs && block.paragraphs.map((p, i) => (<p key={i} className={styles.blockAfter}>{p}</p>))}
      {block.after && <p className={styles.blockAfter}>{block.after}</p>}
    </>
  )
  // Blocks with an image render as two columns (text left, image right).
  if (block.image) {
    return (
      <div className={`${styles.block} ${styles.blockSplit}`}>
        <div className={styles.blockText}>{body}</div>
        <div className={styles.blockImg}>
          <img src={block.image} alt={block.title} loading="lazy" />
        </div>
      </div>
    )
  }
  return <div className={styles.block}>{body}</div>
}

export default function ServiceDetail({ data }) {
  return (
    <>
      <Helmet>
        <title>{data.breadcrumb} — Global Unibridge</title>
        <meta name="description" content={data.intro[0]} />
      </Helmet>

      {/* 2-column hero (boxed gray container) */}
      <section className={styles.heroSection}>
        <div className={styles.heroBox}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">What We Do</Link>
            <span>/</span>
            <span aria-current="page">{data.breadcrumb}</span>
          </nav>
          <div className={styles.heroWrap}>
            <div className={styles.heroText}>
              <h1 className={styles.heroHeading}>
                {(Array.isArray(data.title) ? data.title.join(' ') : data.title)}
              </h1>
              {data.intro.map((p, i) => (<p key={i} className={styles.heroPara}>{p}</p>))}
            </div>
            {data.image && (
              <div className={styles.heroImg}>
                <img src={data.image} alt={data.breadcrumb} loading="lazy" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content blocks (aligned to the same boxed width) */}
      <section className={styles.bodySection}>
        <div className={styles.contentWrap}>
          <div className={styles.content}>
            {data.blocks.map((b, i) => (<Block key={i} block={b} />))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (shared) */}
      <section className="section-pad bg-cream">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{whyChooseUs.eyebrow}</span>
            <h2 className="section-title">{whyChooseUs.heading}</h2>
            <p>{whyChooseUs.intro}</p>
          </div>
          <div className={styles.whyGrid}>
            {whyChooseUs.items.map((w) => (
              <div key={w.title} className={styles.whyCard}>
                <span className={styles.whyIcon} aria-hidden="true">{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA button (article-cta-section) */}
      <div className={styles.ctaSection}>
        <Link to="/contact" className={styles.ctaBtn}>{data.ctaLabel}</Link>
      </div>

      {/* Collection grid — "What We Do" (TNE) / "Related Services" (others) */}
      <section className={styles.relatedSection}>
        <div className={styles.contentWrap}>
          <h3 className={styles.relatedTitle}>
            {data.slug === 'tne' ? 'What We Do' : 'Related Services'}
          </h3>
          <ul className={styles.relatedGrid}>
            {services.map((s) => (
              <li key={s.slug} className={styles.relatedCard}>
                <Link to={s.to} className={styles.relatedImg}>
                  <img src={s.image} alt={s.title} loading="lazy" />
                </Link>
                <div className={styles.relatedContent}>
                  <h4><Link to={s.to}>{s.title}</Link></h4>
                  <p>{s.excerpt}</p>
                  <Link to={s.to} className={styles.relatedMore}>Read more</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ (optional) */}
      {data.faqs.length > 0 && (
        <section className="section-pad bg-cream">
          <div className="container">
            <div className="section-head">
              <h2 className="section-title">FAQs</h2>
            </div>
            <div className={styles.faqWrap}>
              <Accordion items={data.faqs} />
            </div>
          </div>
        </section>
      )}
    </>
  )
}
