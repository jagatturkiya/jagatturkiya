import React from 'react';

export default function Disclaimer() {
  return (
    <div className="legal-page">
      <section className="section section-deep" style={{ padding: '5rem 0 3.5rem 0' }}>
        <div className="container">
          <h1 className="section-title">Disclaimer</h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto', color: 'var(--text-silver)', lineHeight: '1.8' }}>
          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>1. Educational &amp; Mentorship Scope</h3>
          <p>
            The content provided on jagatturkiya.com, across Jagat Turkiya’s published books, and within mentorship sessions is intended solely for personal, psychological, and executive transformation coaching purposes. Jagat Turkiya is a Life, Mindset &amp; Executive Transformation Coach.
          </p>
          <p>
            Jagat Turkiya and Minderist Training LLP do not provide financial consulting, investment advice, portfolio management, or tax planning. Neither the website nor mentorship sessions constitute financial consultation or recommendations to buy, sell, or hold specific securities, equity shares, real estate properties, or financial derivatives.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>2. Individual Responsibility</h3>
          <p>
            All business, career, and personal decisions made by clients remain strictly the personal responsibility of the individual. Past results, case studies, or testimonials do not guarantee identical outcomes. For financial, legal, or tax advice, you are advised to consult qualified licensed professionals.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>3. Results &amp; Commitment</h3>
          <p>
            Personal growth, emotional resilience, and lasting success require consistent execution, self-discipline, and dedicated effort over time.
          </p>
        </div>
      </section>
    </div>
  );
}
