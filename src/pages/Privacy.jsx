import LegalPage from '../components/LegalPage/LegalPage.jsx'

// NOTE: No privacy-policy.html capture was provided. This is a minimal
// placeholder so the route/footer link works. Replace `sections` with the
// verbatim source content once _reference/privacy-policy.html is captured.
const sections = [
  {
    title: 'Privacy Policy',
    paragraphs: [
      'Global Unibridge is committed to protecting your privacy. The full privacy policy content will be published here.',
      'For any questions about how we collect, use, or protect your information, please contact us at info@globalunibridge.com.',
    ],
  },
]

export default function Privacy() {
  return <LegalPage title="Privacy Policy" sections={sections} />
}
