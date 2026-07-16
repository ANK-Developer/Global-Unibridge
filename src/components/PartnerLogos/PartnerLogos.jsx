import styles from './PartnerLogos.module.css'

// Infinite marquee strip (matches source scrolling logo band).
// Logos are duplicated once so the CSS translateX(-50%) loop is seamless.
export default function PartnerLogos({ partners }) {
  const loop = [...partners, ...partners]
  return (
    <div className={styles.marquee} aria-label="Our partners">
      <div className={styles.track}>
        {loop.map((p, i) => (
          <div className={styles.item} key={`${p.name}-${i}`} aria-hidden={i >= partners.length}>
            <img
              src={p.logo}
              alt={p.name}
              onError={(e) => {
                const el = e.currentTarget
                el.replaceWith(
                  Object.assign(document.createElement('span'), {
                    className: styles.fallback,
                    textContent: p.name,
                  })
                )
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
