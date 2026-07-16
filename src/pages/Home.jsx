import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PartnerLogos from '../components/PartnerLogos/PartnerLogos.jsx'
import { services } from '../data/services.js'
import { articles } from '../data/articles.js'
import {
  hero, about, partnershipModel, marketStrategy, bigStats, partners, insightsHeading,
} from '../data/home.js'
import styles from './Home.module.css'

// Simple bullet list — matches source `<ul class="para">` (plain disc bullets).
function BulletList({ items }) {
  return (
    <ul className={styles.para}>
      {items.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  )
}

export default function Home() {
  const uspCards = [
    { header: bigStats.usp.title, text: bigStats.usp.text },
    ...bigStats.blocks.map((b) => ({ header: b.title, text: b.text })),
  ]
  const insights = articles.slice(0, 3)

  return (
    <>
      <Helmet>
        <title>Global Unibridge — Strategic India Market Entry & Expansion</title>
        <meta
          name="description"
          content="Helping institutions expand globally through strategic growth, engagement, and international success."
        />
      </Helmet>

      {/* 1. HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <h1 className={styles.heroHeading}>{hero.heading[0]}<br />{hero.heading[1]}</h1>
            <p className={styles.heroSub}>{hero.subtext}</p>
            <div className={styles.heroCtas}>
              {hero.ctas.map((c) => (
                <Link key={c.label} to={c.to} className={`btn btn-${c.variant}`}>{c.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT */}
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutWrapper}>
            <div className={styles.aboutContent}>
              <span className={styles.aboutSubtitle}>{about.label}</span>
              <h2 className={styles.aboutTitle}>{about.heading}</h2>
              {about.paragraphs.map((p, i) => (
                <p key={i} className={styles.aboutText}>{p}</p>
              ))}
              <div className={styles.highlightBox}>
                {about.stats.map((s) => (
                  <div key={s.label} className={styles.highlightCard}>
                    <h3>{s.value}</h3>
                    <p>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.aboutImage}>
              <img src="/images/about-home-photo.avif" alt="Global Education" loading="lazy" />
              <div className={styles.floatingBox}>
                <h4>{about.vision.title}</h4>
                <p>{about.vision.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.centerHead}>
            <span className={styles.eyebrow}>OUR Services</span>
            <h2 className={styles.h2}>Strategic Solutions for Global Education Growth</h2>
          </div>
          <div className={styles.serviceGrid}>
            {services.map((s) => (
              <Link key={s.slug} to={s.to} className={styles.serviceTile}>
                <span className={styles.serviceImg}>
                  <img src={s.image} alt="" loading="lazy" />
                </span>
                <h6 className={styles.serviceTitle}>{s.title}</h6>
                <p className={styles.serviceExcerpt}>{s.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PARTNERSHIP MODEL */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.split}>
            <div className={styles.splitImg}>
              <img src="/images/partnership-model.jpg" alt="Partnership Model" loading="lazy" />
            </div>
            <div>
              <span className={styles.eyebrow}>{partnershipModel.eyebrow}</span>
              <h2 className={styles.splitTitle}>{partnershipModel.title}</h2>
              <p className={styles.lead}>{partnershipModel.text}</p>
              <p className={styles.leadStrong}>{partnershipModel.subtext}</p>
              <BulletList items={partnershipModel.bullets} />
              <Link to={partnershipModel.cta.to} className="btn btn-primary">{partnershipModel.cta.label}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDIAN MARKET STRATEGY (content left, image right) */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.split}>
            <div>
              <span className={styles.eyebrow}>{marketStrategy.eyebrow}</span>
              <h2 className={styles.splitTitle}>{marketStrategy.title}</h2>
              <p className={`${styles.lead} ${styles.justify}`}>{marketStrategy.text}</p>
              <BulletList items={marketStrategy.bullets} />
              <Link to={marketStrategy.cta.to} className="btn btn-primary">{marketStrategy.cta.label}</Link>
            </div>
            <div className={styles.splitImg}>
              <img src="/images/market-strategy.jpg" alt="Indian Market Strategy" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 6a. ENABLING GLOBAL EXPANSION (full-bleed cityscape) */}
      <section className={styles.expansionHero}>
        <div className={styles.expansionOverlay} />
        <div className={styles.expansionInner}>
          <h2 className={styles.expansionHeading}>
            {bigStats.heading[0]}<br />{bigStats.heading[1]}
          </h2>
          {bigStats.intro.map((p, i) => (
            <p key={i} className={styles.expansionText} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          <div className={styles.pillRow}>
            {bigStats.concentratedList.slice(0, 3).map((c) => (
              <span key={c} className={styles.pill}>• {c}</span>
            ))}
          </div>
          <div className={styles.pillRow}>
            {bigStats.concentratedList.slice(3).map((c) => (
              <span key={c} className={`${styles.pill} ${styles.pillWide}`}>• {c}</span>
            ))}
          </div>
          <p className={styles.expansionText} dangerouslySetInnerHTML={{ __html: bigStats.outro }} />
        </div>
      </section>

      {/* 6b. OUR BIGGEST USP */}
      <section className={styles.uspSection}>
        <div className={styles.uspBadgeWrap}>
          <span className={styles.uspBadge}>{bigStats.usp.eyebrow}</span>
        </div>
        <div className={styles.uspRow}>
          {uspCards.map((c) => (
            <div key={c.header} className={styles.uspCard}>
              <div className={styles.uspCardHeader}>{c.header}</div>
              <p className={styles.uspCardText}>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PARTNER LOGOS */}
      <section className={styles.partnersSection}>
        <PartnerLogos partners={partners} />
      </section>

      {/* 8. INSIGHTS (image accordion) */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.centerHead}>
            <span className={styles.eyebrow}>{insightsHeading.eyebrow}</span>
            <h2 className={styles.h2}>{insightsHeading.heading}</h2>
            <p className={styles.centerIntro}>{insightsHeading.intro}</p>
          </div>
        </div>
        <div className="container">
          <div className={styles.accordion}>
            {insights.map((a, i) => (
              <article
                key={a.slug}
                className={`${styles.accItem} ${i === 0 ? styles.accActive : ''}`}
                style={{ backgroundImage: `url(${a.image})` }}
              >
                <div className={styles.accLabel}>
                  <span className={styles.accLabelNum}>{a.number}</span>
                  <span className={styles.accLabelTitle}>{a.title}</span>
                </div>
                <div className={styles.accBody}>
                  <div className={styles.accBodyLeft}>
                    <div className={styles.accHeader}>
                      <span className={styles.accNum}>{a.number}</span>
                      <h3 className={styles.accTitle}>{a.title}</h3>
                    </div>
                    <div className={styles.accBodyInner}>
                      <p className={styles.accDesc}>{a.excerpt}</p>
                      <Link to={a.to} className={styles.accBtn}>Explore Now</Link>
                    </div>
                  </div>
                  <div className={styles.accBodyRight}>
                    <img src={a.image} alt={a.title} loading="lazy" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
