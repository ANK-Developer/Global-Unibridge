import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import {
  hwHero, hwFeatures, hwPartnership, hwProcess, hwStrategy, hwFaqs,
} from '../data/howwework.js'
import styles from './HowWeWork.module.css'

// Minimal thin-divider FAQ (matches the How We Do reference list).
function HwwFaq({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className={styles.faqList}>
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={it.q} className={`${styles.faqRow} ${isOpen ? styles.faqRowOpen : ''}`}>
            <button
              type="button"
              className={styles.faqQ}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span>{it.q}</span>
              <span className={styles.faqSign} aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            <div className={styles.faqA} style={{ maxHeight: isOpen ? '400px' : '0' }}>
              <p>{it.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Original feature-card icons extracted from the source.
const FEATURE_ICONS = [
  '/images/hww/icons/feature-1.webp',
  '/images/hww/icons/feature-2.webp',
  '/images/hww/icons/feature-3.webp',
]
const PROCESS_ICONS = [
  '/images/hww/icons/process-1.svg',
  '/images/hww/icons/process-2.svg',
  '/images/hww/icons/process-3.svg',
  '/images/hww/icons/process-4.svg',
  '/images/hww/icons/process-5.svg',
]

export default function HowWeWork() {
  return (
    <>
      <Helmet>
        <title>How We Do — Global Unibridge</title>
        <meta
          name="description"
          content="Strategic growth partnerships for institutions in India — long-term collaboration, localized expertise, and measurable institutional growth."
        />
      </Helmet>

      {/* Hero: text left + image right (cream) + 3 feature cards */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroWrap}>
            <div className={styles.heroText}>
              <span className="eyebrow">{hwHero.eyebrow}</span>
              <h1 className={styles.heroHeading}>Strategic Growth Partnerships for Institutions in India</h1>
              {hwHero.paragraphs.map((p, i) => (<p key={i} className={styles.heroPara}>{p}</p>))}
            </div>
            <div className={styles.heroImg}>
              <img src="/images/partnership-model.jpg" alt="Strategic growth partnerships" loading="lazy" />
            </div>
          </div>
          <div className={styles.featureGrid}>
            {hwFeatures.map((f, i) => (
              <div key={f.title} className={styles.featureCard}>
                <span className={styles.featureIcon}><img src={FEATURE_ICONS[i]} alt="" loading="lazy" /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Model: centered heading + text left + navy quote card */}
      <section className="section-pad">
        <div className="container">
          <h2 className={`${styles.centerTitle} ${styles.underline}`}>{hwPartnership.heading}</h2>
          <div className={styles.pmWrap}>
            <div className={styles.pmText}>
              {hwPartnership.paragraphs.map((p, i) => (<p key={i}>{p}</p>))}
            </div>
            <div className={styles.quoteCard}>
              <span className={styles.quoteGlobe}><img src="/images/hww/icons/quote-globe.svg" alt="" /></span>
              <span className={styles.quoteMark}>&rdquo;</span>
              <p>{hwPartnership.callout}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process: heading occupies the first grid cell */}
      <section className="section-pad bg-cream">
        <div className="container">
          <div className={styles.processGrid}>
            <div className={styles.processHeadCell}>
              <span className="eyebrow">{hwProcess.eyebrow}</span>
              <h2 className={styles.leftTitle}>{hwProcess.heading}</h2>
            </div>
            {hwProcess.steps.map((s, i) => (
              <div key={s.n} className={styles.processCard}>
                <span className={styles.processIcon}><img src={PROCESS_ICONS[i]} alt="" loading="lazy" /></span>
                <div>
                  <h3><span className={styles.stepN}>{s.n}.</span> {s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India Market Strategy: left heading, 2 cards, navy support box */}
      <section className="section-pad">
        <div className="container">
          <h2 className={`${styles.imsTitle} ${styles.underline}`}>{hwStrategy.heading}</h2>
          <p className={styles.strategyIntro}>{hwStrategy.intro}</p>
          <div className={styles.strategyBlocks}>
            {hwStrategy.blocks.map((b) => (
              <div key={b.title} className={styles.strategyCard}>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.supportBox}>
            <h3>{hwStrategy.supportTitle}</h3>
            <ul>
              {hwStrategy.supportList.map((s) => (<li key={s}>{s}</li>))}
            </ul>
          </div>
          <p className={styles.closing}>{hwStrategy.closing}</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad">
        <div className="container">
          <div className={styles.faqWrap}>
            <div className={styles.faqEyebrow}>{hwFaqs.heading}</div>
            <HwwFaq items={hwFaqs.items} />
          </div>
        </div>
      </section>
    </>
  )
}
