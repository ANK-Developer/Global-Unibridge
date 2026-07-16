import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero/PageHero.jsx'
import ServiceCard from '../components/ServiceCard/ServiceCard.jsx'
import { services } from '../data/services.js'
import styles from './Services.module.css'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>What We Do — Global Unibridge</title>
        <meta
          name="description"
          content="Helping international universities, colleges, schools, and academic institutions establish, expand, and strengthen their presence in India."
        />
      </Helmet>

      <PageHero
        eyebrow="What We Do"
        heading={['Helping Institutions', 'Build a Strong Presence in India']}
        paragraphs={[
          "At Global Unibridge, we help international universities, colleges, schools, EdTech companies, and academic institutions successfully establish, expand, and strengthen their presence within India's rapidly evolving education ecosystem.",
        ]}
      >
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span aria-current="page">What We Do</span>
        </nav>
      </PageHero>

      <section className="section-pad">
        <div className="container">
          <div className={styles.grid}>
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
