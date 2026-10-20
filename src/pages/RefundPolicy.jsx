import React from 'react';

export default function RefundPolicy() {
  return (
    <div className="legal-page">
      <section className="section section-deep" style={{ padding: '5rem 0 3.5rem 0' }}>
        <div className="container">
          <h1 className="section-title">Refund Policy</h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto', color: 'var(--text-silver)', lineHeight: '1.8' }}>
          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>1. Consultations &amp; Mentorship</h3>
          <p>
            Private consultations involve dedicated time reserved exclusively with Jagat Turkiya and his team. Fees paid for completed strategy evaluations or personal mentorship sessions are non-refundable once the session has been delivered.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>2. Mastermind Programs</h3>
          <p>
            Mastermind programs involve limited seats to maintain focused personal attention. Cancellations requested prior to program onboarding may be considered on a case-by-case basis. Once onboarding materials have been issued and sessions have commenced, commitments are non-refundable.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>3. Published Works &amp; Books</h3>
          <p>
            Purchases of physical or digital copies of Jagat Turkiya's 5 published books via Amazon or authorized bookstores are subject to the respective platform’s return and refund guidelines.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>4. Inquiries</h3>
          <p>
            For assistance regarding payments or billing, contact <a href="mailto:hello@jagatturkiya.com" style={{ color: '#fff', textDecoration: 'underline' }}>hello@jagatturkiya.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
