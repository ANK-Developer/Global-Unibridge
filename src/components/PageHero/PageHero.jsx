import styles from './PageHero.module.css'

// Inner page banner: eyebrow + heading (array => line breaks) + optional lead paragraphs.
// align="left" for pages whose reference heading is left-aligned (e.g. How We Do).
export default function PageHero({ eyebrow, heading, paragraphs = [], align = 'center', eyebrowStyle, headingStyle, leadStyle, children }) {
  const lines = Array.isArray(heading) ? heading : [heading]
  return (
    <section className={`${styles.hero} ${align === 'left' ? styles.left : ''}`}>
      <div className="container">
        {eyebrow && <span className={styles.eyebrow} style={eyebrowStyle}>{eyebrow}</span>}
        <h1 className={styles.heading} style={headingStyle}>
          {lines.map((l, i) => (
            <span key={i}>{l}{i < lines.length - 1 && <br />}</span>
          ))}
        </h1>
        {paragraphs.map((p, i) => (
          <p key={i} className={styles.lead} style={leadStyle}>{p}</p>
        ))}
        {children}
      </div>
    </section>
  )
}
