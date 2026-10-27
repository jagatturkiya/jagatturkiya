import React from 'react';

export default function Terms() {
  return (
    <div className="legal-page">
      <section className="section section-deep" style={{ padding: '5rem 0 3.5rem 0' }}>
        <div className="container">
          <h1 className="section-title">Terms &amp; Conditions</h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto', color: 'var(--text-silver)', lineHeight: '1.8' }}>
          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>1. Scope of Engagement</h3>
          <p>
            By accessing jagatturkiya.com, contacting us, or enrolling in mentorship or mastermind programs, you agree to these Terms and Conditions. Coaching and mentorship services are operated under Minderist Training LLP.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>2. Professional Nature of Mentorship</h3>
          <p>
            Mentorship, transformation audits, and mastermind sessions provide educational, mindset, and leadership frameworks based on Jagat Turkiya’s executive coaching experience and published works. They do not constitute financial advice, investment advisory, legal counsel, or statutory accounting opinions.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>3. Confidentiality</h3>
          <p>
            Mastermind and mentorship participants agree unconditionally to maintain confidentiality regarding peers' business figures, personal challenges, and private discussions.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>4. Intellectual Property</h3>
          <p>
            All frameworks, diagnostic materials, and published literature authored by Jagat Turkiya remain the sole intellectual property of Jagat Turkiya and Minderist Training LLP.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>5. Jurisdiction</h3>
          <p>
            These terms are governed by the laws of India. Any disputes are subject exclusively to the courts of New Delhi, India.
          </p>
        </div>
      </section>
    </div>
  );
}
