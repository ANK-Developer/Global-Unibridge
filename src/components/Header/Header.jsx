import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

// Resources mega-menu cards (matches source: 3 image cards).
// The reference carries a "Yoga & Mindfulness Retreat" caption over the Articles
// card — leftover demo content from the theme it was built on, pointing at an
// event that doesn't exist. Deliberately not reproduced.
const RESOURCE_CARDS = [
  { label: 'Events', to: '/event', image: '/images/megamenu/events.webp' },
  { label: 'Articles', to: '/article', image: '/images/megamenu/articles.webp' },
  { label: 'FAQs', to: '/faqs', image: '/images/megamenu/faqs.webp' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [logoOk, setLogoOk] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [resOpen, setResOpen] = useState(false)
  const location = useLocation()
  const closeTimer = useRef(null)

  // Sticky shadow on scroll (source header is fixed/sticky).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on route change.
  useEffect(() => {
    setMobileOpen(false)
    setResOpen(false)
  }, [location.pathname])

  // Small grace period so moving from the trigger to the panel doesn't close it.
  const openRes = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setResOpen(true)
  }
  const closeRes = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setResOpen(false), 150)
  }

  const navClass = ({ isActive }) =>
    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink

  // Home has the dark hero header; every other page uses a white header
  // (dark text + blackened logo), matching the reference.
  const isHome = location.pathname === '/'

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${isHome ? '' : styles.light}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} aria-label="Global Unibridge home">
          {logoOk ? (
            <img
              src="/images/GUB-NEW-LOGO-transparent.png"
              alt="Global Unibridge"
              height="68"
              onError={() => setLogoOk(false)}
            />
          ) : (
            <span className={styles.logoText}>Global Unibridge</span>
          )}
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Primary">
          <NavLink to="/" className={navClass} end>Home</NavLink>
          <NavLink to="/about-us" className={navClass}>Who We Are</NavLink>
          <NavLink to="/how-we-work" className={navClass}>How We Do</NavLink>
          <NavLink to="/services" className={navClass}>What We Do</NavLink>

          <div className={styles.dropdown} onMouseEnter={openRes} onMouseLeave={closeRes}>
            <button
              type="button"
              className={`${styles.navLink} ${resOpen ? styles.active : ''}`}
              aria-haspopup="true"
              aria-expanded={resOpen}
              onClick={() => (resOpen ? closeRes() : openRes())}
            >
              Resources
              <svg className={`${styles.caret} ${resOpen ? styles.caretOpen : ''}`} width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
                <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>

          <NavLink to="/contact" className={navClass}>Contact Us</NavLink>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className={styles.hamburger}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Full-width Resources mega-menu */}
      <div
        className={`${styles.megaMenu} ${resOpen ? styles.megaOpen : ''}`}
        onMouseEnter={openRes}
        onMouseLeave={closeRes}
      >
        <div className={styles.megaInner}>
          {RESOURCE_CARDS.map((card) => (
            <div className={styles.megaCol} key={card.label}>
              <h4 className={styles.megaLabel}>
                <Link to={card.to}>{card.label}</Link>
              </h4>
              <Link to={card.to} className={styles.megaCard}>
                <img src={card.image} alt="" loading="lazy" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ''}`}>
        <NavLink to="/" className={styles.drawerLink} end>Home</NavLink>
        <NavLink to="/about-us" className={styles.drawerLink}>Who We Are</NavLink>
        <NavLink to="/how-we-work" className={styles.drawerLink}>How We Do</NavLink>
        <NavLink to="/services" className={styles.drawerLink}>What We Do</NavLink>
        <div className={styles.drawerGroupLabel}>Resources</div>
        {RESOURCE_CARDS.map((r) => (
          <NavLink key={r.to} to={r.to} className={`${styles.drawerLink} ${styles.drawerSub}`}>{r.label}</NavLink>
        ))}
        <NavLink to="/contact" className={styles.drawerLink}>Contact Us</NavLink>
      </div>
      {mobileOpen && <div className={styles.backdrop} onClick={() => setMobileOpen(false)} />}
    </header>
  )
}
