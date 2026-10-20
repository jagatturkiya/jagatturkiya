import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialSubject = searchParams.get('subject') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: initialSubject ? `Inquiry regarding: ${initialSubject}` : ''
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
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const faqItems = [
    {
      question: "How can I book a personal consultation with Jagat Turkiya?",
      answer: "You can submit your inquiry using the form on this page or email us directly at hello@jagatturkiya.com. Our desk will connect with you to understand your objectives and schedule a suitable time for your consultation."
    },
    {
      question: "Can I book Jagat Turkiya as a keynote speaker for events or conferences?",
      answer: "Yes. Jagat frequently delivers keynote talks and corporate workshops on executive mindset, emotional intelligence, leadership, and financial clarity across India and globally."
    },
    {
      question: "How do I request physical or digital copies of Jagat's published books?",
      answer: "Simply submit your request through the contact form with your shipping details or book title in the message, and our distribution team will assist you with author-signed copies."
    },
    {
      question: "Is my personal and business information kept confidential?",
      answer: "Absolutely. All communications, mentorship discussions, and personal inquiries are handled with strict discretion and complete professional confidentiality."
    }
  ];

  return (
    <div className="contact-page">
      {/* Page Header - Clean Executive Styling without WebGL */}
      <section className="page-header" style={{ padding: '6.5rem 0 4rem', borderBottom: '1px solid var(--border-subtle)', background: 'linear-gradient(180deg, var(--bg-black) 0%, var(--bg-surface) 100%)' }}>
        <div className="container text-center" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <span className="section-eyebrow">Direct Desk</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', marginBottom: '1.25rem' }}>
            Get in Touch with <span className="serif-font">Jagat Turkiya</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-silver)', lineHeight: 1.7 }}>
            Reach out for 1-on-1 mentorship, Mastermind inquiries, keynote speaking, corporate workshops, or book requests.
          </p>
        </div>
      </section>

      {/* Consultation & Contact Form Panel */}
      <section className="section">
        <div className="container">
          <div className="consultation-panel">
            {/* Left Column: Direct Info */}
            <div className="consultation-info">
              <h3>Connect Directly</h3>
              <p>
                Whether you are navigating a high-stakes life transition, looking to build an unshakeable wealth system, or seeking an inspiring keynote for your organization, we are here to support your journey.
              </p>
              <p>
                Every message is read and responded to by Jagat’s team. Please share your details and requirement below.
              </p>

              <div className="direct-email-box" style={{ marginTop: '2.5rem' }}>
                <h5>Official Email</h5>
                <a href="mailto:hello@jagatturkiya.com">hello@jagatturkiya.com</a>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.4rem' }}>
                  Typically responded to within 24 business hours.
                </p>
              </div>

              <div style={{ marginTop: '2rem', padding: '1.25rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Global Engagements
                </span>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-silver)', marginTop: '0.4rem', lineHeight: '1.6' }}>
                  Available for in-person advisory in New Delhi/NCR, international keynote travels, and global virtual strategy sessions.
                </p>
              </div>
            </div>

            {/* Right Column: Clean Form */}
            <div className="consultation-form-wrap">
              {submitted ? (
                <div style={{ padding: '3.5rem 2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#10b981' }}>✓</div>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#ffffff' }}>
                    Message Received Successfully
                  </h3>
                  <p style={{ color: 'var(--text-silver)', lineHeight: '1.7', marginBottom: '2rem' }}>
                    Thank you, <strong>{formData.name}</strong>. Your message has been delivered to Jagat Turkiya's desk. We will reach out to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        message: ''
                      });
                    }}
                    className="btn btn-outline"
                  >
                    Send Another Message
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
                    <label className="form-label" htmlFor="clientEmail">Email Address *</label>
                    <input
                      type="email"
                      id="clientEmail"
                      name="email"
                      className="form-control"
                      placeholder="name@example.com"
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
                    <label className="form-label" htmlFor="clientMessage">Your Message / Requirement *</label>
                    <textarea
                      id="clientMessage"
                      name="message"
                      className="form-control"
                      rows={5}
                      placeholder="Please share what you are looking for (e.g. mentorship, mastermind, keynote speech, or request a book copy)..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-white"
                    disabled={submitting}
                    style={{ width: '100%', padding: '1.1rem', fontSize: '1rem', marginTop: '0.75rem' }}
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
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
            <span className="section-eyebrow">Common Questions</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Everything you need to know about connecting and consulting with Jagat Turkiya.
            </p>
          </div>

          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </div>
  );
}
