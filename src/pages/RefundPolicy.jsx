import React from 'react';

export default function RefundPolicy() {
  return (
    <div className="legal-page" style={{ backgroundColor: '#050505', color: '#d4d4d8', minHeight: '100vh', paddingBottom: '90px' }}>
      {/* Header Banner */}
      <section style={{
        background: '#050505',
        padding: '5.5rem 1.5rem 3.5rem 1.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h1 style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: '0 0 16px 0'
          }}>
            Refund Policy
          </h1>
          <p style={{
            fontSize: '1.15rem',
            color: '#9ca3af',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            Refund and cancellation policy for Jagat Turkiya programs, consultations, and digital products.
          </p>
        </div>
      </section>

      {/* Main Legal Content Container */}
      <main style={{ maxWidth: '820px', margin: '0 auto', padding: '48px 24px 0 24px' }}>
        {/* Core Non-Refundable Statement with Typographic Hierarchy */}
        <div style={{
          borderLeft: '2px solid #ffffff',
          padding: '16px 20px',
          marginBottom: '40px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)'
        }}>
          <h2 style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#ffffff',
            margin: '0 0 6px 0'
          }}>
            All purchases are non-refundable.
          </h2>
          <p style={{
            fontSize: '0.98rem',
            color: '#9ca3af',
            margin: 0,
            lineHeight: 1.6
          }}>
            Please ensure you are fully committed before enrolling in any program.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

          {/* Introduction */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '14px',
              letterSpacing: '-0.01em'
            }}>
              Introduction
            </h2>
            <div style={{ lineHeight: '1.8', color: '#d4d4d8', fontSize: '1.02rem' }}>
              <p style={{ marginBottom: '14px' }}>
                Welcome to <strong style={{ color: '#ffffff' }}>Jagat Turkiya</strong>. We are deeply committed to providing the highest quality transformational coaching, digital resources, and live events to help you achieve your goals.
              </p>
              <p style={{ margin: 0 }}>
                To maintain the integrity and quality of our programs, we enforce a strict refund and cancellation policy. By purchasing any of our services or products, you acknowledge and agree to this policy in its entirety.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* Non-Refundable Programs & Services */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '14px',
              letterSpacing: '-0.01em'
            }}>
              Non-Refundable Programs &amp; Services
            </h2>
            <div style={{ lineHeight: '1.8', color: '#d4d4d8', fontSize: '1.02rem' }}>
              <p style={{ marginBottom: '14px' }}>
                All sales of coaching services, digital products, masterminds, and events are final. Specifically, the following are non-refundable:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '22px', margin: '0 0 14px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  <strong style={{ color: '#ffffff' }}>Mastermind &amp; Group Programs:</strong> Once enrolled, seats cannot be transferred, cancelled, or refunded.
                </li>
                <li>
                  <strong style={{ color: '#ffffff' }}>1-on-1 Consultations:</strong> Once booked and confirmed, consultation fees are non-refundable.
                </li>
                <li>
                  <strong style={{ color: '#ffffff' }}>Digital Products &amp; Recorded Content:</strong> Immediate digital access is granted upon purchase, making these strictly non-refundable.
                </li>
                <li>
                  <strong style={{ color: '#ffffff' }}>Live Workshops &amp; Events:</strong> Due to limited seating and venue commitments, event tickets cannot be refunded.
                </li>
              </ul>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* Program Access and Commitment */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '14px',
              letterSpacing: '-0.01em'
            }}>
              Program Access and Commitment
            </h2>
            <div style={{ lineHeight: '1.8', color: '#d4d4d8', fontSize: '1.02rem' }}>
              <p style={{ marginBottom: '14px' }}>
                Transformational work requires deep dedication, active participation, and responsibility for your own journey. We invest considerable time, resources, and expert attention into every client.
              </p>
              <p style={{ margin: 0 }}>
                If you choose not to participate, fail to attend scheduled sessions, or do not complete assignments, you remain responsible for the full purchase amount and are not eligible for any refund.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* Cancellations and Rescheduling */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '14px',
              letterSpacing: '-0.01em'
            }}>
              Cancellations and Rescheduling
            </h2>
            <div style={{ lineHeight: '1.8', color: '#d4d4d8', fontSize: '1.02rem' }}>
              <p style={{ marginBottom: '14px' }}>
                For individual 1-on-1 sessions, rescheduling requests must be submitted at least 24 hours prior to the scheduled time. Missed sessions or last-minute cancellations will be forfeited and will not be refunded or rescheduled.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* Exceptions */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '14px',
              letterSpacing: '-0.01em'
            }}>
              Exceptions
            </h2>
            <div style={{ lineHeight: '1.8', color: '#d4d4d8', fontSize: '1.02rem' }}>
              <p style={{ margin: 0 }}>
                The only exception to this policy is in the event of a proven billing error or accidental duplicate payment for the exact same service. In such rare instances, you must notify our support team within 48 hours of the transaction for us to process an adjustment.
              </p>
            </div>
          </section>

          {/* Need Help or Have Questions? */}
          <section style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '36px',
            marginTop: '8px'
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
              color: '#9ca3af',
              maxWidth: '680px',
              margin: '0 0 16px 0',
              lineHeight: 1.6
            }}>
              If you have any questions regarding our policies or need assistance prior to making a purchase, please reach out to our team:
            </p>
            <a
              href="mailto:hello@apkacoach.com"
              style={{
                color: '#ffffff',
                fontSize: '1.05rem',
                fontWeight: 600,
                textDecoration: 'underline',
                textUnderlineOffset: '4px'
              }}
            >
              hello@apkacoach.com
            </a>
          </section>

        </div>
      </main>
    </div>
  );
}
