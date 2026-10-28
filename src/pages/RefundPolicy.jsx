import React from 'react';

export default function RefundPolicy() {
  return (
    <div className="legal-page" style={{ backgroundColor: '#070D18', color: '#CBD5E1', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(180deg, #0f172a 0%, #070D18 100%)',
        padding: '6rem 1rem 3.5rem 1rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#FF7900',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontSize: '0.85rem',
            marginBottom: '14px'
          }}>
            💳 Purchase Terms
          </span>
          <h1 style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-1px',
            margin: '0 0 16px 0'
          }}>
            All Sales Are Final
          </h1>
          <p style={{
            fontSize: '1.15rem',
            color: '#94A3B8',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            Refund and Cancellation Policy for Jagat Turkiya programs, consultations, and digital products.
          </p>
        </div>
      </section>

      {/* Main Legal Content Container */}
      <main style={{ maxWidth: '840px', margin: '0 auto', padding: '40px 20px 0 20px' }}>
        {/* Core Callout Banner */}
        <div style={{
          backgroundColor: '#0F1E36',
          border: '1px solid #1E3A5F',
          borderRadius: '16px',
          padding: '24px 28px',
          textAlign: 'center',
          marginBottom: '44px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
        }}>
          <p style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#ffffff',
            margin: '0 0 8px 0'
          }}>
            ⚠️ All purchases are non-refundable.
          </p>
          <p style={{
            fontSize: '0.98rem',
            color: '#94A3B8',
            margin: 0
          }}>
            Please ensure you are fully committed before enrolling in any program.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

          {/* Introduction */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              Introduction
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                Welcome to <strong style={{ color: '#F1F5F9' }}>Jagat Turkiya</strong>. We are deeply committed to providing the highest quality transformational coaching, digital resources, and live events to help you achieve your goals.
              </p>
              <p style={{ margin: 0 }}>
                To maintain the integrity and quality of our programs, we enforce a strict refund and cancellation policy. By purchasing any of our services or products, you acknowledge and agree to this policy in its entirety.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* No Refund Policy */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              No Refund Policy
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                Because our products and services provide immediate access to proprietary knowledge, transformational frameworks, and time-intensive personal coaching, we cannot offer refunds, exchanges, or transfers once a purchase has been completed.
              </p>
              <p style={{ margin: 0 }}>
                Transformation requires commitment, and we ask that you respect the time, energy, and value provided within these programs by making a fully informed decision before purchasing.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* Applicable Services */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              Applicable Services
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                This strict "No Refund" policy applies universally across all offerings by Jagat Turkiya, including but not limited to:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#FF7900' }}>•</span>
                  <span>1-on-1 Personal Coaching Sessions</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#FF7900' }}>•</span>
                  <span>Priority WhatsApp &amp; DM Consultations</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#FF7900' }}>•</span>
                  <span>Digital Products, E-books, and Video Courses</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#FF7900' }}>•</span>
                  <span>Tickets for Live Workshops and Seminars</span>
                </li>
              </ul>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* User Responsibility */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              User Responsibility
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ margin: 0 }}>
                It is your responsibility to carefully review all program details, prerequisites, and scheduling commitments prior to enrollment or purchase. If you are unsure whether a program is the right fit for you, we strongly encourage you to book a free consultation before committing financially.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* Exceptions */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              Exceptions
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ margin: 0 }}>
                The only exception to this policy is in the event of a proven billing error or accidental duplicate payment for the exact same service. In such rare instances, you must notify our support team within 48 hours of the transaction for us to process an adjustment.
              </p>
            </div>
          </section>

          {/* Need Help or Have Questions? */}
          <section style={{
            backgroundColor: '#0F1E36',
            border: '1px solid #1E3A5F',
            borderRadius: '16px',
            padding: '28px 24px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '10px'
            }}>
              Need Help or Have Questions?
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#94A3B8',
              maxWidth: '600px',
              margin: '0 auto 18px auto',
              lineHeight: 1.6
            }}>
              If you have any questions regarding our policies or need assistance prior to making a purchase, please reach out to our team.
            </p>
            <a
              href="mailto:hello@jagatturkiya.com"
              style={{
                color: '#FF7900',
                fontSize: '1.1rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              ✉️ hello@jagatturkiya.com
            </a>
          </section>

          {/* Footer note */}
          <div style={{
            backgroundColor: '#1E293B',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '16px 20px',
            textAlign: 'center',
            color: '#E2E8F0',
            fontSize: '1.02rem'
          }}>
            <span style={{ color: '#FF7900', fontWeight: 700 }}>Jagat Turkiya</span> <span style={{ color: '#64748B' }}>|</span> Your Partner in Transformation
          </div>

        </div>
      </main>
    </div>
  );
}
