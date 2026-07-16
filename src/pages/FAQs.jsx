import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero/PageHero.jsx'
import Accordion from '../components/Accordion/Accordion.jsx'
import { faqData } from '../data/faqs.js'
import styles from './FAQs.module.css'

function groupEntries(entries) {
  const groups = []
  for (const e of entries) {
    if (e.subheading) groups.push({ subheading: e.subheading, items: [] })
    else {
      if (!groups.length) groups.push({ subheading: null, items: [] })
      groups[groups.length - 1].items.push(e)
    }
  }
  return groups
}

export default function FAQs() {
  return (
    <>
      <Helmet>
        <title>FAQs — Global Unibridge</title>
        <meta
          name="description"
          content="Answers across our key service areas — Transnational Education, Market Entry, Agency Recruitment, and more."
        />
      </Helmet>

      <PageHero
        heading="Frequently Asked Questions"
        paragraphs={['Explore answers across our key service areas — Transnational Education, Market Entry, Agency Recruitment, and more.']}
      />

      <section className="section-pad">
        <div className="container">
          <div className={styles.content}>
            {faqData.map((section) => (
              <div key={section.category} className={styles.category}>
                <h2 className={styles.categoryTitle}>{section.category}</h2>
                {groupEntries(section.entries).map((g, gi) => (
                  <div key={gi} className={styles.group}>
                    {g.subheading && <h3 className={styles.subheading}>{g.subheading}</h3>}
                    <Accordion items={g.items} allowMultiple />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
