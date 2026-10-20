import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <section className="section section-deep" style={{ padding: '5rem 0 3.5rem 0' }}>
        <div className="container">
          <h1 className="section-title">Privacy Policy</h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto', color: 'var(--text-silver)', lineHeight: '1.8' }}>
          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>1. Commitment to Discretion</h3>
          <p>
            Jagat Turkiya and Minderist Training LLP operate strictly within high-trust executive advisory and mentorship domains. We treat your personal, corporate, and financial disclosures with institutional discretion and confidentiality.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>2. Information Collected</h3>
          <p>
            When you contact us, apply for consultation, join the Mastermind, or request published books, we collect information you explicitly provide:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Full Name</li>
            <li>Contact coordinates (email address, phone / WhatsApp number)</li>
            <li>Message content or inquiry specifics</li>
          </ul>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>3. Use of Information</h3>
          <p>
            Collected details are utilized exclusively to respond to your inquiries, schedule consultations, deliver booked sessions, and assist with book requests. We do not sell, rent, or share personal data with third-party marketers or advertisers under any circumstances.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>4. Data Security</h3>
          <p>
            All submitted communications are retained in secure, access-restricted systems. Access is limited strictly to authorized personnel bound by non-disclosure agreements.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>5. Contact</h3>
          <p>
            For any privacy inquiries or data requests, contact us at <a href="mailto:hello@jagatturkiya.com" style={{ color: '#fff', textDecoration: 'underline' }}>hello@jagatturkiya.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
