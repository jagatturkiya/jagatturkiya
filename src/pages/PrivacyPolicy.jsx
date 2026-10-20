import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <section className="section section-deep" style={{ padding: '5rem 0 3.5rem 0' }}>
        <div className="container">
          <h1 className="section-title">Privacy <span className="serif-font">Policy</span></h1>
          <p className="section-subtitle">
            Effective Date: January 1, 2026 • Jagat Turkiya &amp; Minderist Training LLP
          </p>
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
            When you apply for a private strategy evaluation, join the Mastermind, or purchase published materials, we collect information you explicitly provide:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Full Name, professional title, and organization</li>
            <li>Contact coordinates (email address, phone number)</li>
            <li>Self-reported operational turnover and financial allocation goals</li>
            <li>Confidential notes submitted for evaluation</li>
          </ul>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>3. Use of Information</h3>
          <p>
            Collected details are utilized exclusively to:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Audit applicant suitability for Mastermind cohorts and private advisory</li>
            <li>Deliver scheduled consulting sessions, deliverables, and curriculum updates</li>
            <li>Provide transaction confirmations and invoicing via Minderist Training LLP</li>
          </ul>
          <p>
            We do not sell, rent, or monetize personal or financial data to any third-party marketing brokers or advertisers under any circumstances.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>4. Data Security</h3>
          <p>
            All submitted materials are retained in encrypted, access-restricted institutional systems. Access is limited strictly to authorized advisory personnel bound by non-disclosure agreements.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>5. Contact for Inquiries</h3>
          <p>
            For any privacy inquiries or deletion requests, contact our legal desk at <a href="mailto:hello@jagatturkiya.com" style={{ color: '#fff', textDecoration: 'underline' }}>hello@jagatturkiya.com</a>.
          </p>

          <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <Link to="/" className="btn btn-outline">← Return to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
