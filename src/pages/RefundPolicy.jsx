import React from 'react';
import { Link } from 'react-router-dom';

export default function RefundPolicy() {
  return (
    <div className="legal-page">
      <section className="section section-deep" style={{ padding: '5rem 0 3.5rem 0' }}>
        <div className="container">
          <h1 className="section-title">Refund &amp; <span className="serif-font">Admission Policy</span></h1>
          <p className="section-subtitle">
            Effective Date: January 1, 2026 • Jagat Turkiya &amp; Minderist Training LLP
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto', color: 'var(--text-silver)', lineHeight: '1.8' }}>
          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>1. Diagnostic Strategy Evaluations</h3>
          <p>
            Private strategy consultations involve dedicated time reserved exclusively with the executive advisory team. Fees paid for completed strategy evaluations are non-refundable once the consultation has been delivered.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>2. Mastermind Cohorts</h3>
          <p>
            Because Mastermind cohorts are capped at 12 members to maintain intense peer standards and non-disclosure, acceptance of an admission seat locks that seat and denies placement to another qualified applicant.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Cancellations requested 14 days prior to cohort commencement receive a full refund minus a 10% administrative audit processing fee.</li>
            <li>Once onboarding materials have been issued and the initial 1-on-1 wealth audit has commenced, cohort commitments are binding and non-refundable.</li>
          </ul>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>3. Published Works &amp; Books</h3>
          <p>
            Purchases of physical or digital copies of Jagat Turkiya's 5 published books via Amazon or authorized bookstores are subject to the respective platform’s return and refund guidelines.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>4. Inquiries</h3>
          <p>
            For assistance regarding payments or billing, contact <a href="mailto:hello@jagatturkiya.com" style={{ color: '#fff', textDecoration: 'underline' }}>hello@jagatturkiya.com</a>.
          </p>

          <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <Link to="/" className="btn btn-outline">← Return to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
