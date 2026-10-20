import React from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="legal-page">
      <section className="section section-deep" style={{ padding: '5rem 0 3.5rem 0' }}>
        <div className="container">
          <h1 className="section-title">Terms &amp; <span className="serif-font">Conditions</span></h1>
          <p className="section-subtitle">
            Effective Date: January 1, 2026 • Jagat Turkiya &amp; Minderist Training LLP
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto', color: 'var(--text-silver)', lineHeight: '1.8' }}>
          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>1. Scope of Engagement</h3>
          <p>
            By accessing jagatturkiya.com, applying for advisory consultations, or enrolling in Mastermind cohorts, you agree to these Terms and Conditions. Advisory services are provided by Jagat Turkiya under Minderist Training LLP.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>2. Professional Nature of Advisory</h3>
          <p>
            Mentorship, strategy audits, and mastermind sessions provide educational, psychological, and high-level strategic frameworks based on Jagat Turkiya’s executive experience and published works. They do not constitute formal SEBI-registered portfolio management, legal counsel, or statutory accounting opinions.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>3. Non-Disclosure &amp; Peer Confidentiality</h3>
          <p>
            Mastermind participants are granted access to private cohort war-rooms. Every participant agrees unconditionally to maintain 100% confidentiality regarding peers' business figures, challenges, and proprietary operational discussions. Breach of cohort confidentiality results in immediate termination without refund.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>4. Intellectual Property</h3>
          <p>
            All proprietary frameworks, diagnostic materials, and published literature authored by Jagat Turkiya remain the sole intellectual property of Jagat Turkiya and Minderist Training LLP. Reproduction or unauthorized redistribution is strictly prohibited.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>5. Jurisdiction</h3>
          <p>
            These terms are governed by the laws of India. Any disputes are subject exclusively to the courts of New Delhi, India.
          </p>

          <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <Link to="/" className="btn btn-outline">← Return to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
