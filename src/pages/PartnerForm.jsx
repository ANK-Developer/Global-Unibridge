import { useState } from 'react'

const STEPS = [
  { id: 'agent', label: 'Agent Information', next: 'Next: Contact Info →' },
  { id: 'contact', label: 'Contact Information', next: 'Next: History →' },
  { id: 'history', label: 'Agent History', next: 'Next: References →' },
  { id: 'references', label: 'References', next: 'Next: Additional →' },
  { id: 'additional', label: 'Additional Info', next: 'Submit Application' },
]

const EMPTY = {
  agencyName: '', directorName: '', incorporationYear: '', registrationNumber: '',
  officialEmail: '', phone: '', address: '', city: '', country: '',
  yearsRecruiting: '', studentsAnnually: '', destinations: '',
  institutionName: '', referenceName: '', referenceEmail: '',
  heardFrom: '', comments: '', agreed: false,
}

const YEARS_OPTIONS = ['Less than 1 year', '1–3 years', '3–5 years', '5–10 years', 'More than 10 years']
const HEARD_OPTIONS = ['Select an Option','Social Media',
'Conference/Event',
'Search Engine',
'Referral',
'Other']

/* Only ever run on the final Submit — moving between tabs is never gated. */
const validateStep = (step, data) => {
  const err = {}
  if (step === 0) {
    if (!data.agencyName.trim()) err.agencyName = 'Please enter your agency name'
    if (!data.directorName.trim()) err.directorName = 'Please enter the director/owner name'
  }
  if (step === 1) {
    if (!data.officialEmail.trim()) err.officialEmail = 'Please enter your official email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.officialEmail)) err.officialEmail = 'Please enter a valid email'
    if (!data.phone.trim()) err.phone = 'Please enter your phone number'
  }
  if (step === 4 && !data.agreed) {
    err.agreed = 'Please accept the Terms & Conditions to continue'
  }
  return err
}

export default function PartnerForm({ styles, onExit }) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (e) => {
    const { name, type, value, checked } = e.target
    setData((d) => ({ ...d, [name]: type === 'checkbox' ? checked : value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  // Every tab is reachable at any time — no validation gate, no errors in transit.
  const goTo = (target) => {
    setErrors({})
    setStep(target)
  }

  const onNext = () => goTo(step + 1)

  const onBack = () => (step === 0 ? onExit() : goTo(step - 1))

  const onSubmit = (e) => {
    e.preventDefault()
    if (step < STEPS.length - 1) return onNext()

    for (let i = 0; i < STEPS.length; i++) {
      const err = validateStep(i, data)
      if (Object.keys(err).length) {
        setStep(i)
        setErrors(err)
        return
      }
    }

    // TODO: wire backend API — POST /api/partner-applications (Phase 2)
    console.log('Partner registration submission:', data)
    setSent(true)
  }

  if (sent) {
    return (
      <div className={styles.success} role="status">
        <span aria-hidden="true">✓</span>
        <div>
          <strong>Application received!</strong>
          <p>Thank you for applying to become a Global Unibridge recruitment partner. Our partnerships team will review your details and get back to you shortly.</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className={styles.formHead}>
        <div>
          <h2 className={styles.formTitle}>Global Unibridge Recruitment Partners Application</h2>
          <p className={styles.formSub}>Please provide your details below. Use the tabs to navigate through the application.</p>
        </div>
      </div>

      <div className={styles.tabs} role="tablist" aria-label="Application sections">
        {STEPS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            id={`tab-${s.id}`}
            aria-selected={i === step}
            aria-controls={`panel-${s.id}`}
            className={`${styles.tab} ${i === step ? styles.tabActive : ''}`}
            onClick={() => goTo(i)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <form onSubmit={onSubmit} noValidate>
        <div
          className={styles.panel}
          role="tabpanel"
          id={`panel-${STEPS[step].id}`}
          aria-labelledby={`tab-${STEPS[step].id}`}
        >
          {step === 0 && (
            <>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="agencyName">Agent / Agency Name <span className={styles.req}>*</span></label>
                <input id="agencyName" name="agencyName" type="text" placeholder="Enter agency name"
                  value={data.agencyName} onChange={update} aria-invalid={!!errors.agencyName} />
                {errors.agencyName && <span className={styles.error}>{errors.agencyName}</span>}
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="directorName">Director/Owner Name <span className={styles.req}>*</span></label>
                <input id="directorName" name="directorName" type="text" placeholder="Full name"
                  value={data.directorName} onChange={update} aria-invalid={!!errors.directorName} />
                {errors.directorName && <span className={styles.error}>{errors.directorName}</span>}
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="incorporationYear">Year of Incorporation</label>
                <input id="incorporationYear" name="incorporationYear" type="text" inputMode="numeric" maxLength="4" placeholder="YYYY"
                  value={data.incorporationYear} onChange={update} />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="registrationNumber">Business Registration Number</label>
                <input id="registrationNumber" name="registrationNumber" type="text" placeholder="Registration ID"
                  value={data.registrationNumber} onChange={update} />
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <div className={styles.fieldRow}>
                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="officialEmail">Official Email <span className={styles.req}>*</span></label>
                  <input id="officialEmail" name="officialEmail" type="email" placeholder="email@agency.com"
                    value={data.officialEmail} onChange={update} aria-invalid={!!errors.officialEmail} />
                  {errors.officialEmail && <span className={styles.error}>{errors.officialEmail}</span>}
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="phone">Phone Number <span className={styles.req}>*</span></label>
                  <input id="phone" name="phone" type="tel" placeholder="+1 234 567 8900"
                    value={data.phone} onChange={update} aria-invalid={!!errors.phone} />
                  {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="address">Primary Office Address</label>
                <textarea id="address" name="address" rows="4" placeholder="Street address, building number..."
                  value={data.address} onChange={update} />
              </div>
              <div className={styles.fieldRow}>
                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="city">City</label>
                  <input id="city" name="city" type="text" placeholder="City" value={data.city} onChange={update} />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="country">Country</label>
                  <input id="country" name="country" type="text" placeholder="Country" value={data.country} onChange={update} />
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="yearsRecruiting">Years in Student Recruitment</label>
                <select id="yearsRecruiting" name="yearsRecruiting" value={data.yearsRecruiting} onChange={update}>
                  <option value="">Select an option...</option>
                  {YEARS_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="studentsAnnually">Average Students Recruited Annually</label>
                <input id="studentsAnnually" name="studentsAnnually" type="text" inputMode="numeric" placeholder="Estimated number"
                  value={data.studentsAnnually} onChange={update} />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="destinations">Top Destinations for your students</label>
                <input id="destinations" name="destinations" type="text" placeholder="e.g., USA, UK, Australia"
                  value={data.destinations} onChange={update} />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <p className={styles.panelNote}>Please provide at least one university/institutional reference.</p>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="institutionName">Institution Name</label>
                <input id="institutionName" name="institutionName" type="text" placeholder="University or College name"
                  value={data.institutionName} onChange={update} />
              </div>
              <div className={styles.fieldRow}>
                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="referenceName">Contact Person</label>
                  <input id="referenceName" name="referenceName" type="text" placeholder="Name of representative"
                    value={data.referenceName} onChange={update} />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="referenceEmail">Contact Email</label>
                  <input id="referenceEmail" name="referenceEmail" type="email" placeholder="Representative email"
                    value={data.referenceEmail} onChange={update} />
                </div>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="heardFrom">How did you hear about Global Unibridge?</label>
                <select id="heardFrom" name="heardFrom" value={data.heardFrom} onChange={update}>
                  <option value="">Select an option...</option>
                  {HEARD_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="comments">Additional Comments / Message</label>
                <textarea id="comments" name="comments" rows="4" placeholder="Any specific requirements or questions?"
                  value={data.comments} onChange={update} />
              </div>
              {/* Not .inputGroup — that block's full-width 50px input rule would
                  swallow the checkbox and make it impossible to tick. */}
              <div className={styles.checkboxGroup}>
                <label className={styles.checkbox}>
                  <input type="checkbox" name="agreed" checked={data.agreed} onChange={update} aria-invalid={!!errors.agreed} />
                  <span>I agree to the Terms &amp; Conditions and certify that the information provided is accurate.</span>
                </label>
                {errors.agreed && <span className={styles.error}>{errors.agreed}</span>}
              </div>
            </>
          )}
        </div>

        <div className={styles.formNav}>
          <button type="button" className={styles.backBtn} onClick={onBack}>← Back</button>
          <button type="submit" className={styles.sendBtn}>{STEPS[step].next}</button>
        </div>
      </form>
    </>
  )
}
