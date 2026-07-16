import LegalPage from '../components/LegalPage/LegalPage.jsx'
import { termsIntro, termsSections } from '../data/legal.js'

export default function Terms() {
  return <LegalPage title="Terms & Conditions" intro={termsIntro} sections={termsSections} />
}
