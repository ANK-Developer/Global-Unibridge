import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const SOCIALS = [
  { label: 'Facebook', href: '#', path: 'M13 3h-2a4 4 0 0 0-4 4v2H5v3h2v7h3v-7h2.5l.5-3H10V7a1 1 0 0 1 1-1h2z' },
  { label: 'LinkedIn', href: '#', path: 'M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0zM3.5 8.5h3v11h-3zM9 8.5h2.87v1.5h.04A3.15 3.15 0 0 1 14.8 8.3c3.07 0 3.64 2 3.64 4.65v6.55h-3v-5.8c0-1.38-.02-3.16-1.93-3.16-1.93 0-2.22 1.5-2.22 3.06v5.9H9z' },
  { label: 'Instagram', href: '#', path: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM16.5 7.5h.01M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <img
              src="/images/GUB-NEW-LOGO-transparent.png"
              alt="Global Unibridge"
              width="150"
              height="59"
              onError={(e) => { e.currentTarget.replaceWith(Object.assign(document.createElement('span'), { className: styles.logoTextFallback, textContent: 'Global Unibridge' })) }}
            />
          </Link>
          <p className={styles.tagline}>Navigating Global Education with Vision &amp; Impact</p>
          <div className={styles.socials}>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className={styles.social}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick links</h4>
          <ul className={styles.linkList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">Who We Are</Link></li>
            <li><Link to="/how-we-work">How We Do</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Resource */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Resource</h4>
          <ul className={styles.linkList}>
            <li><Link to="/event">Events</Link></li>
            <li><Link to="/article">Articles</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </div>

        {/* Terms & Policies */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Terms &amp; Policies</h4>
          <ul className={styles.linkList}>
            <li><Link to="/terms-and-conditions">Terms &amp; Conditions</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Get In Touch</h4>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.icon} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11z" /><circle cx="12" cy="10" r="2.2" /></svg>
              </span>
              <a href="https://maps.google.com/?q=HB+Twin+Towers+Pitampura+Delhi" target="_blank" rel="noreferrer">
                602-605, HB Twin Towers, Netaji Subhash Place, Pitampura, Delhi 110034, India
              </a>
            </li>
            <li>
              <span className={styles.icon} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 5h16v14H4z" /><path d="M4 6l8 6 8-6" /></svg>
              </span>
              <a href="mailto:info@globalunibridge.com">info@globalunibridge.com</a>
            </li>
            <li>
              <span className={styles.icon} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.2-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" /></svg>
              </span>
              <a href="tel:+917042464490">+91 704 246 4490</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© 2026 GUB. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
