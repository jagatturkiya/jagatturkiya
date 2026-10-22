import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';
import { recordLead } from '../lib/cmsStore';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) return;
    setSubmitting(true);
    try {
      await recordLead({
        name: formData.name.trim().slice(0, 60),
        email: formData.email.trim().slice(0, 80),
        phone: formData.phone.trim().slice(0, 15),
        message: formData.message.trim().slice(0, 500),
        source: 'Contact Page Inquiry',
        program: initialSubject || 'General Inquiry'
      });
    } catch {}
    setSubmitting(false);
    setSubmitted(true);
  };

  const faqItems = [
    {
      question: "How do I schedule a consultation?",
      answer: "Submit your details using the form on this page or email us at hello@apkacoach.com. Our team will get back to you within 24 hours to schedule your session."
    },
    {
      question: "Can I book Jagat Turkiya for keynote speaking or events?",
      answer: "Yes. Jagat is available for keynote speaking, corporate workshops, and leadership seminars in India and internationally."
    },
    {
      question: "How do I request a copy of the books?",
      answer: "Mention the book title in your message along with your delivery address or email, and our team will assist you with access."
    },
    {
      question: "Is my inquiry kept confidential?",
      answer: "Yes, 100%. All communications, inquiries, and personal details are strictly private and confidential."
    }
  ];

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header" style={{ padding: '5.5rem 0 3.5rem', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-black)' }}>
        <div className="container text-center" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1rem' }}>
            Connect Directly with <span className="serif-font">Jagat Turkiya Team</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem', color: 'var(--text-silver)', lineHeight: 1.6 }}>
            Send a message below and our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="section">
        <div className="container">
          <div className="consultation-panel">
            {/* Left Column: Direct Info */}
            <div className="consultation-info">
              <h3>Get in Touch</h3>
              <p>
                Reach out for mentorship inquiries, mastermind details, keynote speaking, or book requests.
              </p>
              <p>
                Every message is reviewed by Jagat’s team and answered within 24 business hours.
              </p>

              <div className="direct-email-box" style={{ marginTop: '2.5rem' }}>
                <h5>Email Us</h5>
                <a href="mailto:hello@apkacoach.com">hello@apkacoach.com</a>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.4rem' }}>
                  Quick response within 24 business hours.
                </p>
              </div>

              <div style={{ marginTop: '2rem', padding: '1.25rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-silver)', margin: 0, lineHeight: '1.6' }}>
                  Available for in-person consultations in New Delhi and virtual sessions worldwide.
                </p>
              </div>
            </div>

            {/* Right Column: Clean Form */}
            <div className="consultation-form-wrap">
              {submitted ? (
                <div style={{ padding: '3.5rem 2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#10b981' }}>✓</div>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#ffffff' }}>
                    Message Sent
                  </h3>
                  <p style={{ color: 'var(--text-silver)', lineHeight: '1.7', marginBottom: '2rem' }}>
                    Thank you, <strong>{formData.name}</strong>. Your message has been received. Our team will get back to you at <strong>{formData.email}</strong> shortly.
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <label className="form-label" htmlFor="clientName" style={{ margin: 0 }}>Full Name *</label>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>{formData.name.length}/60</span>
                    </div>
                    <input
                      type="text"
                      id="clientName"
                      name="name"
                      maxLength={60}
                      className="form-control"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <label className="form-label" htmlFor="clientEmail" style={{ margin: 0 }}>Email Address *</label>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>{formData.email.length}/80</span>
                    </div>
                    <input
                      type="email"
                      id="clientEmail"
                      name="email"
                      maxLength={80}
                      className="form-control"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <label className="form-label" htmlFor="clientPhone" style={{ margin: 0 }}>Phone Number *</label>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>{formData.phone.length}/15</span>
                    </div>
                    <input
                      type="tel"
                      id="clientPhone"
                      name="phone"
                      maxLength={15}
                      className="form-control"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <label className="form-label" htmlFor="clientMessage" style={{ margin: 0 }}>Your Message *</label>
                      <span style={{ fontSize: '0.72rem', color: formData.message.length > 450 ? '#f59e0b' : 'var(--text-dim)' }}>
                        {formData.message.length}/500
                      </span>
                    </div>
                    <textarea
                      id="clientMessage"
                      name="message"
                      maxLength={500}
                      className="form-control"
                      rows={5}
                      placeholder="How can we help you? Share your message or inquiry here..."
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
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Common questions about consultations, bookings, and books.
            </p>
          </div>

          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </div>
  );
}
