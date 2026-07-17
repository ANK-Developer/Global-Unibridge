import LegalPage from '../components/LegalPage/LegalPage.jsx'

// NOTE: No privacy-policy.html capture was provided. This is a minimal
// placeholder so the route/footer link works. Replace `sections` with the
// verbatim source content once _reference/privacy-policy.html is captured.
// const sections = [
//   {
//     title: 'Privacy Policy',
//     paragraphs: [
//       'Global Unibridge is committed to protecting your privacy. The full privacy policy content will be published here.',
//       'For any questions about how we collect, use, or protect your information, please contact us at info@globalunibridge.com.',
//     ],import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <>
<section className="privacy-policy">

  <div className="policy-header">
    <h1>Policy</h1>

    <div className="policy-breadcrumb">
      Home <span>/</span> Policy
    </div>
  </div>

  <div className="policy-content">
    {/* Your Privacy Policy Text */}
    
        <p className="intro">
          At <strong>Global Unibridge</strong>, we are committed to protecting
          the privacy and security of our partners, students, institutions, and
          website visitors. This Privacy Policy explains how we collect, use,
          store, and safeguard your information when you access our website or
          use our services.
        </p>

        <h2>1. Information We Collect</h2>

        <p>
          We may collect personal and professional information including, but
          not limited to:
        </p>

        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Organization or institution details</li>
          <li>Educational and professional background</li>
          <li>
            Any other information submitted through forms, registrations, or
            communication with us
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>

        <p>The information collected may be used to:</p>

        <ul>
          <li>Provide and improve our services</li>
          <li>
            Facilitate communication between partners, students, and global
            universities
          </li>
          <li>Respond to inquiries and support requests</li>
          <li>
            Send important updates, notifications, and promotional
            communications
          </li>
          <li>Personalize user experience on our website</li>
          <li>Comply with legal and regulatory obligations</li>
        </ul>

        <h2>3. Data Protection &amp; Security</h2>

        <p>
          We implement appropriate technical and organizational security
          measures to protect your personal information from unauthorized
          access, misuse, disclosure, alteration, or destruction.
        </p>

        <h2>4. Sharing of Information</h2>

        <p>
          Global Unibridge does not sell, rent, or trade personal information
          to third parties. Information may only be shared:
        </p>

        <ul>
          <li>
            With trusted university and institutional partners for
            service-related purposes
          </li>
          <li>When required by applicable law or legal processes</li>
          <li>
            To protect the rights, safety, and security of Global Unibridge and
            its users
          </li>
        </ul>

        <h2>5. Cookies &amp; Tracking Technologies</h2>

        <p>
          Our website may use cookies and similar technologies to enhance user
          experience, analyze website traffic, and improve functionality.
        </p>

        <p>
          Users may choose to disable cookies through their browser settings;
          however, some website features may not function properly.
        </p>

        <h2>6. Marketing Communications &amp; Opt-Out</h2>

        <p>
          Users may receive updates, newsletters, or promotional communications
          from Global Unibridge. You may opt out at any time by:
        </p>

        <ul>
          <li>Clicking the "Unsubscribe" link in our emails</li>
          <li>
            Contacting us directly through our official communication channels
          </li>
        </ul>

        <h2>7. Data Retention</h2>

        <p>
          We retain personal information only for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, comply with
          legal obligations, resolve disputes, and enforce agreements.
        </p>

        <p>
          Users may request deletion of their personal data, subject to
          applicable legal requirements.
        </p>

        <h2>8. Third-Party Links</h2>

        <p>
          Our website may contain links to third-party websites or services.
          Global Unibridge is not responsible for the privacy practices,
          content, or policies of external websites.
        </p>

        <h2>9. Updates to This Privacy Policy</h2>

        <p>
          We may update this Privacy Policy periodically to reflect changes in
          our services, legal requirements, or operational practices.
        </p>

        <p>
          Updated versions will be posted on this page with immediate effect.
        </p>

        <h2>10. Contact Us</h2>

        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or your personal data, please contact us:
        </p>

        <p>
          <strong>Global Unibridge</strong>
          <br />
          📞 +91 7042464490
        </p>

        {/* <p className="footer-text">
          Navigating Global Education with Vision &amp; Impact
        </p> */}
      </div>
 

</section>    
    
   
    </>
  );
};

export default PrivacyPolicy;
//   },
// ]

// export default function Privacy() {
//   return <LegalPage title="Privacy Policy" sections={sections} />
// }
