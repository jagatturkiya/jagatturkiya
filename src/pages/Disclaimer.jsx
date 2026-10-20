import React from 'react';
import { Link } from 'react-router-dom';

export default function Disclaimer() {
  return (
    <div className="legal-page">
      <section className="section section-deep" style={{ padding: '5rem 0 3.5rem 0' }}>
        <div className="container">
          <h1 className="section-title">Disclaimer &amp; <span className="serif-font">Advisory Scope</span></h1>
          <p className="section-subtitle">
            Important Information Regarding Educational &amp; Mentorship Services
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto', color: 'var(--text-silver)', lineHeight: '1.8' }}>
          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>1. No Financial or Investment Advice</h3>
          <p>
            The content provided on jagatturkiya.com, across Jagat Turkiya’s published books, and within the Mastermind is intended solely for educational, psychological, and high-performance business mentorship purposes.
          </p>
          <p>
            Jagat Turkiya and Minderist Training LLP are not SEBI-registered investment advisers, certified financial planners, chartered accountants, or registered brokers. Neither the website nor mentorship sessions constitute formal solicitation or recommendations to buy, sell, or hold specific securities, equity shares, real estate properties, or financial derivatives.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>2. Individual Responsibility</h3>
          <p>
            All business, operational, and capital decisions made by clients remain strictly the personal responsibility of the individual. Past performance, case studies, or testimonials from other business owners do not guarantee identical outcomes. You are strongly advised to consult your personal chartered accountant, tax attorney, and certified wealth managers before executing major capital transactions.
          </p>

          <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' }}>3. Results &amp; Effort</h3>
          <p>
            Building defensive wealth, eliminating business leaks, and scaling enterprise value requires consistent execution, operational discipline, and market adaptability.
          </p>

          <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <Link to="/" className="btn btn-outline">← Return to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
