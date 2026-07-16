import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero/PageHero.jsx'
import styles from './Contact.module.css'

const MAP_EMBED =
  'https://maps.google.com/maps?q=HB%20Twin%20Towers%20Netaji%20Subhash%20Place%20Pitampura%20Delhi%20110034&t=&z=15&ie=UTF8&iwloc=&output=embed'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
  }

  const validate = () => {
    const err = {}
    if (!form.name.trim()) err.name = 'Please enter your name'
    if (!form.email.trim()) err.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'Please enter a valid email'
    if (!form.message.trim()) err.message = 'Please write a message'
    return err
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const err = validate()
    setErrors(err)
    if (Object.keys(err).length) return

    // TODO: wire backend API — POST /api/leads (Phase 2)
    console.log('Contact form submission:', form)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <>
      <Helmet>
        <title>Contact — Global Unibridge</title>
        <meta name="description" content="Reach out to Global Unibridge to explore collaboration opportunities and grow together." />
      </Helmet>

      <PageHero
        eyebrow="We're Here to Help"
        heading="Let's Connect"
        eyebrowStyle={{ color: '#1e3a8a' }}
        paragraphs={["Whether you're a university representative, education agent, or institutional partner, we'd love to hear from you. Reach out to explore collaboration opportunities and grow together"]}
      />

      <section className={styles.contactContainer}>
        {/* Contact info */}
        <div className={styles.info}>
          <div className={styles.infoCard}>
            <span className={styles.iconBox} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11z" /><circle cx="12" cy="10" r="2.2" /></svg>
            </span>
            <div className={styles.infoContent}>
              <h3>Headquarters</h3>
              <p>602–605, HB Twin Towers, Netaji Subhash Place, Pitampura, Delhi 110034, India</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <span className={styles.iconBox} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 5h16v14H4z" /><path d="M4 6l8 6 8-6" /></svg>
            </span>
            <div className={styles.infoContent}>
              <h3>Email</h3>
              <a href="mailto:info@globalunibridge.com">info@globalunibridge.com</a>
            </div>
          </div>

          <div className={styles.infoCard}>
            <span className={styles.iconBox} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.2-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" /></svg>
            </span>
            <div className={styles.infoContent}>
              <h3>Phone</h3>
              <a href="tel:+917042464490">+91 704 246 4490</a>
            </div>
          </div>

          <div className={styles.infoCard}>
            <span className={styles.iconBox} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" /></svg>
            </span>
            <div className={styles.infoContent}>
              <h3>Social Media</h3>
              <div className={styles.socialLinks}>
                <a href="#" aria-label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.5-1.5h1.6V3.6c-.28-.04-1.24-.12-2.35-.12-2.32 0-3.9 1.42-3.9 4.02v2.26H7.5V13h2.35v8h3.65z" /></svg>
                </a>
                <a href="#" aria-label="X">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.9 7.9L23 22h-6.3l-4.9-6.5L6.1 22H3l7.4-8.5L2 2h6.5l4.4 5.9L18.9 2zm-1.1 18h1.7L7.3 3.8H5.5L17.8 20z" /></svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 7.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88zM5.3 20.5h3.28V9.75H5.3V20.5zM10.4 9.75h3.14v1.47h.05c.44-.83 1.5-1.7 3.1-1.7 3.3 0 3.9 2.17 3.9 5v5.98h-3.27v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8v5.4H10.4V9.75z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className={styles.formCard}>
          <div className={styles.formHead}>
            <div>
              <h2 className={styles.formTitle}>Get in touch</h2>
              <p className={styles.formSub}>
                Submit your details below. Our team will create your account and send login credentials to your email.
              </p>
            </div>
            <Link to="/contact" className={styles.agentRegBtn}>Partner Registration →</Link>
          </div>

          {sent ? (
            <div className={styles.success} role="status">
              <span aria-hidden="true">✓</span>
              <div>
                <strong>Thank you!</strong>
                <p>Your message has been received. Our team will get back to you shortly.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className={styles.inputGroup}>
                <input
                  type="text" name="name" placeholder="Your name"
                  value={form.name} onChange={update}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="email" name="email" placeholder="Your email"
                  value={form.email} onChange={update}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>
              <div className={styles.inputGroup}>
                <textarea
                  name="message" placeholder="Write a message" rows="5"
                  value={form.message} onChange={update}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </div>
              <button type="submit" className={styles.sendBtn}>Send</button>
            </form>
          )}
        </div>
      </section>

      {/* Map */}
      <div className={styles.mapWrapper}>
        <div className={styles.mapContainer}>
          <iframe
            title="Global Unibridge Office Location"
            src={MAP_EMBED}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  )
}
