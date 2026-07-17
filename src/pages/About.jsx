import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero/PageHero.jsx'
import Media from '../components/Media/Media.jsx'
import {
  aboutHero, whatMakesUsDifferent, leadership, globalNetwork, aboutFaqs,
} from '../data/about.js'
import styles from './About.module.css'

const COUNTRIES = 'United States, Canada, United Kingdom, Australia, Germany, Ireland, and New Zealand'
const BRANDS = 'Visa House, JenNext Mentors, Vidhya Villa, IMS Noida, and Schiller Institute Sr. Sec. School, Ghaziabad.'

// Custom FAQ accordion matching the source .faq-section (navy circle+ icon,
// rotates 45° and turns red #ff1803 when open).
function FaqBlock({ heading, intro, items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className={styles.faqSection}>
      <div className={styles.faqHeading}>
        <h2>{heading}</h2>
        <p>{intro}</p>
      </div>
      <div className={styles.faqContainer}>
        {items.map((it, i) => {
          const isOpen = open === i
          return (
            <div key={it.q} className={`${styles.faqItem} ${isOpen ? styles.faqActive : ''}`}>
              <button
                type="button"
                className={styles.faqQuestion}
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                {it.q}
                <span className={styles.faqIcon} aria-hidden="true">+</span>
              </button>
              <div className={styles.faqAnswer} style={{ maxHeight: isOpen ? '500px' : '0' }}>
                <div className={styles.faqAnswerContent}>{it.a}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function About() {
  const [intro, ...bodyParas] = aboutHero.paragraphs
  return (
    <>
      <Helmet>
        <title>Who We Are — Global Unibridge</title>
        <meta
          name="description"
          content="Global Unibridge is a strategic India market entry and expansion partner for universities, colleges, schools, and education institutions."
        />
      </Helmet>

      <PageHero
        eyebrow={aboutHero.eyebrow}
        heading={aboutHero.heading}
        headingStyle={{ color: '#111' }}
        paragraphs={[intro]}
      />

      {/* Banner + body */}
      <section className={styles.bannerSection}>
        <div className="container">
          <div className={styles.banner}>
            <img src="/images/about/about-banner-real.webp" alt="Global Unibridge team" loading="lazy" />
          </div>
          <div className={styles.bodyProse}>
            {bodyParas.map((p, i) => {
              if (p.includes(BRANDS)) {
                const [before, after] = p.split(BRANDS)
                return <p key={i}>{before}<strong className={styles.brands}>{BRANDS}</strong>{after}</p>
              }
              return <p key={i}>{p}</p>
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-pad">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{whatMakesUsDifferent.eyebrow}</span>
            <h2 className="section-title">{whatMakesUsDifferent.heading}</h2>
          </div>
          <div className={styles.diffGrid}>
            {whatMakesUsDifferent.items.map((item, i) => (
              <div key={item} className={styles.diffCard}>
                <img className={styles.diffIcon} src={`/images/about/icons/mission-${i + 1}.svg`} alt="" loading="lazy" />
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-pad">
        <div className="container">
          <div className={styles.split}>
            <Media src="/images/about-leadership.jpg" alt="Leadership" ratio="1 / 1" className={styles.leadImg} />
            <div className="prose">
              <h2 className="section-title">{leadership.heading}</h2>
              {leadership.paragraphs.map((p, i) => (<p key={i}>{p}</p>))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Global Network */}
      <section className="section-pad">
        <div className="container">
          <div className={styles.networkWrapper}>
            <div className={styles.networkLeft}>
              <h2>{globalNetwork.heading}</h2>
              {globalNetwork.paragraphs.map((p, i) => {
                if (i === 0 && p.includes(COUNTRIES)) {
                  const [before, after] = p.split(COUNTRIES)
                  return <p key={i}>{before}<span className={styles.countries}>{COUNTRIES}</span>{after}</p>
                }
                return <p key={i}>{p}</p>
              })}
              <div className={styles.networkBottom}>
                <p><strong>{globalNetwork.impactTitle}</strong> {globalNetwork.impactText}</p>
              </div>
            </div>
            <div className={styles.networkRight}>
              <div className={styles.networkCardGrid}>
                {globalNetwork.cards.map((c, i) => (
                  <div key={c.title} className={styles.networkCard}>
                    <span className={styles.networkIcon}>
                      <img src={`/images/about/icons/network-${i + 1}.svg`} alt="" loading="lazy" />
                    </span>
                    <h4>{c.title}</h4>
                    <p>{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container">
          <FaqBlock heading={aboutFaqs.heading} intro={aboutFaqs.intro} items={aboutFaqs.items} />
        </div>
      </section>
    </>
  )
}
