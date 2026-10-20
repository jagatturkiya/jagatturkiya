import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import LiquidHero from '../components/LiquidHero';
import FaqAccordion from '../components/FaqAccordion';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialSubject = searchParams.get('subject') || 'GeneralStrategyEvaluation';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    monthlyIncome: '',
    businessType: '',
    primaryChallenge: '',
    subject: initialSubject
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate confidential intake processing
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const faqItems = [
    {
      question: "What happens after I submit this application?",
      answer: "The executive advisory desk audits every submission under strict non-disclosure. If your profile matches current cohort criteria, you will receive a confidential invitation within 24 business hours to schedule a 30-minute private diagnostic evaluation."
    },
    {
      question: "Is my personal and financial information kept confidential?",
      answer: "100% yes. All strategic evaluations and balance sheet discussions are governed by mutual non-disclosure and institutional discretion. Your data is never shared with third parties."
    },
    {
      question: "What if I am not ready for the Mastermind right now?",
      answer: "Even if you are not admitted into the upcoming cohort, the initial diagnostic call provides immediate, actionable clarity on your core financial leaks and runway defense that you can implement right away."
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section text-center" style={{ padding: '5.5rem 0 4rem 0' }}>
        <LiquidHero />
        <div className="container hero-container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h1 className="hero-title" style={{ marginBottom: '1.25rem' }}>
            Apply for <span className="serif-font">Strategy Evaluation</span>
          </h1>
          <p className="hero-lead" style={{ maxWidth: '760px', margin: '0 auto' }}>
            Connect directly with Jagat Turkiya’s Executive Advisory Team for confidential evaluation, Mastermind admission, or executive enterprise advisory.
          </p>
        </div>
      </section>

      {/* Consultation & Application Panel */}
      <section className="section">
        <div className="container">
          <div className="consultation-panel">
            {/* Left Column: Executive Desk Details */}
            <div className="consultation-info">
              <h3>Advisory Admissions Desk</h3>
              <p>
                Due to intensive ongoing mentorship commitments and keynote engagements, Jagat Turkiya evaluates prospective mentees strictly through private strategy evaluations conducted by the executive advisory team.
              </p>
              <p>
                Every submission is audited under non-disclosure to evaluate candidate suitability, uncover financial and operational bottlenecks, and determine cohort placement.
              </p>

              <div className="direct-email-box" style={{ marginTop: '2.5rem' }}>
                <h5>Official Advisory Desk</h5>
                <a href="mailto:hello@jagatturkiya.com">hello@jagatturkiya.com</a>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.4rem' }}>
                  Applications are reviewed directly by the advisory desk. Qualified applicants receive a response within 24 business hours.
                </p>
              </div>

              <div style={{ marginTop: '2rem', padding: '1.25rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Prerequisite Profile
                </span>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-silver)', marginTop: '0.4rem', lineHeight: '1.6' }}>
                  Typically designed for business founders, executives, and senior professionals with monthly personal/business cashflow of ₹5L to ₹10L+.
                </p>
              </div>
            </div>

            {/* Right Column: Clean Form */}
            <div className="consultation-form-wrap">
              {submitted ? (
                <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#ffffff' }}>
                    Application Received Under NDA
                  </h3>
                  <p style={{ color: 'var(--text-silver)', lineHeight: '1.7', marginBottom: '2rem' }}>
                    Thank you, <strong>{formData.name}</strong>. Your profile has been queued for review by the advisory desk. A team coordinator will reach out to <strong>{formData.email}</strong> within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        monthlyIncome: '',
                        businessType: '',
                        primaryChallenge: '',
                        subject: initialSubject
                      });
                    }}
                    className="btn btn-outline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form id="inquiryForm" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="clientName">Full Name *</label>
                    <input
                      type="text"
                      id="clientName"
                      name="name"
                      className="form-control"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="clientEmail">Direct Email Address *</label>
                    <input
                      type="email"
                      id="clientEmail"
                      name="email"
                      className="form-control"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="clientPhone">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      id="clientPhone"
                      name="phone"
                      className="form-control"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="monthlyIncome">Current Monthly Income / Turnover *</label>
                    <select
                      id="monthlyIncome"
                      name="monthlyIncome"
                      className="form-control"
                      value={formData.monthlyIncome}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Range</option>
                      <option value="Under 5L">Below ₹5 Lakhs / month</option>
                      <option value="5L to 10L">₹5 Lakhs – ₹10 Lakhs / month</option>
                      <option value="10L to 25L">₹10 Lakhs – ₹25 Lakhs / month</option>
                      <option value="25L+">₹25 Lakhs+ / month</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="businessType">Enterprise / Profession *</label>
                    <input
                      type="text"
                      id="businessType"
                      name="businessType"
                      className="form-control"
                      placeholder="e.g. Founder (Manufacturing), Clinician, Executive"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="primaryChallenge">Primary Financial / Strategic Bottleneck</label>
                    <textarea
                      id="primaryChallenge"
                      name="primaryChallenge"
                      className="form-control"
                      rows="4"
                      placeholder="Briefly describe what you are looking to solve (e.g. runway structuring, cashflow firewalls, Mastermind placement)..."
                      value={formData.primaryChallenge}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-white"
                    style={{ width: '100%', padding: '0.95rem' }}
                    disabled={submitting}
                  >
                    {submitting ? 'Auditing Submission...' : 'Submit Private Application →'}
                  </button>

                  <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textAlign: 'center', marginTop: '0.85rem' }}>
                    Strictly confidential. Protected under Non-Disclosure Agreement.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="section-header text-center">
            <span className="section-eyebrow">Application Queries</span>
            <h2 className="section-title">Advisory Admissions FAQ</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </div>
  );
}
