import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero/PageHero.jsx'
import styles from './Contact.module.css'

const MAPS_URL = 'https://maps.google.com/?q=HB+Twin+Towers+Pitampura+Delhi'

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
        eyebrowStyle={{ color: 'var(--color-primary)' }}
        paragraphs={["Whether you're a university representative, education agent, or institutional partner, we'd love to hear from you. Reach out to explore collaboration opportunities and grow together."]}
      >
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Contact</span>
        </nav>
      </PageHero>

      <section className="section-pad">
        <div className="container">
          <div className={styles.layout}>
            {/* Contact info */}
            <div className={styles.info}>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11z" /><circle cx="12" cy="10" r="2.2" /></svg>
                </span>
                <div>
                  <h3>Headquarters</h3>
                  <a href={MAPS_URL} target="_blank" rel="noreferrer">
                    602–605, HB Twin Towers, Netaji Subhash Place, Pitampura, Delhi 110034, India
                  </a>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 5h16v14H4z" /><path d="M4 6l8 6 8-6" /></svg>
                </span>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:info@globalunibridge.com">info@globalunibridge.com</a>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.2-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" /></svg>
                </span>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+917042464490">+91 704 246 4490</a>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" /></svg>
                </span>
                <div>
                  <h3>Social Media</h3>
                  <div className={styles.socialRow}>
                    <a href="#" aria-label="Facebook">f</a>
                    <a href="#" aria-label="X">X</a>
                    <a href="#" aria-label="LinkedIn">in</a>
                  </div>
                </div>
              </div>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className={styles.mapsLink}>Open in Maps →</a>
            </div>

            {/* Form */}
            <div className={styles.formCard}>
              <div className={styles.formHead}>
                <h2 className={styles.formTitle}>Get in touch</h2>
                <Link to="/contact" className={styles.partnerLink}>Partner Registration →</Link>
              </div>
              <p className={styles.formSub}>
                Submit your details below. Our team will create your account and send login credentials to your email.
              </p>

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
                  <div className={styles.field}>
                    <input
                      type="text" name="name" placeholder="Your name"
                      value={form.name} onChange={update}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <span className={styles.error}>{errors.name}</span>}
                  </div>
                  <div className={styles.field}>
                    <input
                      type="email" name="email" placeholder="Your email"
                      value={form.email} onChange={update}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                  </div>
                  <div className={styles.field}>
                    <textarea
                      name="message" placeholder="Write a message" rows="5"
                      value={form.message} onChange={update}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <span className={styles.error}>{errors.message}</span>}
                  </div>
                  <button type="submit" className="btn btn-primary">Send</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
