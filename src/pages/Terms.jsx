import React from 'react';

export default function Terms() {
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
            📜 User Agreement
          </span>
          <h1 style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-1px',
            margin: '0 0 16px 0'
          }}>
            Terms &amp; Conditions
          </h1>
          <p style={{
            fontSize: '1.15rem',
            color: '#94A3B8',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            Please review the terms and conditions governing the use of Jagat Turkiya's website, programs, and digital products.
          </p>
        </div>
      </section>

      {/* Main Legal Content Container */}
      <main style={{ maxWidth: '840px', margin: '0 auto', padding: '40px 20px 0 20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

          {/* 1. Acceptance of Terms */}
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
              1. Acceptance of Terms
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                By accessing, browsing, or using the website and coaching services provided by <strong style={{ color: '#F1F5F9' }}>Jagat Turkiya</strong>, you acknowledge that you have read, understood, and agree to be bound by these <strong style={{ color: '#F1F5F9' }}>Terms</strong>.
              </p>
              <p style={{ margin: 0 }}>
                If you do not agree with any part of these conditions, you must discontinue your use of our platform and programs immediately. These terms apply to all visitors, registered users, and clients.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* 2. Intellectual Property Rights */}
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
              2. Intellectual Property Rights
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                All content, materials, frameworks, videos, and digital products available on this platform are the exclusive intellectual property of <strong style={{ color: '#F1F5F9' }}>Jagat Turkiya</strong>.
              </p>
              <p style={{ margin: 0 }}>
                You are granted a limited, non-exclusive, non-transferable license to access and use the materials strictly for your personal, non-commercial transformation journey. Unauthorized reproduction, distribution, or resale is strictly prohibited.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* 3. Third-Party Links */}
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
              3. Third-Party Links
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                Our platform may contain links to third-party websites or services that are not owned or controlled by us. We assume no responsibility for the content, privacy policies, or practices of any third-party websites.
              </p>
              <p style={{ margin: 0 }}>
                We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* 4. Termination of Access */}
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
              4. Termination of Access
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                We reserve the right to suspend or terminate your access to our coaching programs and digital platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the <strong style={{ color: '#F1F5F9' }}>Terms</strong>.
              </p>
              <p style={{ margin: 0 }}>
                Upon termination, your right to use the service will cease immediately.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* 5. No Warranties Disclaimer */}
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
              5. No Warranties Disclaimer
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                The coaching services, guidance, and digital products are provided on an "AS IS" and "AS AVAILABLE" basis. While we strive to provide highly effective transformational frameworks, individual results may vary.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#F1F5F9' }}>Jagat Turkiya</strong> makes no guarantees regarding specific personal, financial, or relationship outcomes. The application of the principles taught is solely the responsibility of the user.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* 6. Governing Law */}
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
              6. Governing Law
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                These <strong style={{ color: '#F1F5F9' }}>Terms</strong> shall be governed and construed in accordance with the laws of <strong style={{ color: '#F1F5F9' }}>India</strong>, without regard to its conflict of law provisions.
              </p>
              <p style={{ margin: 0 }}>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision is held to be invalid or unenforceable by a court, the remaining provisions will remain in effect.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* 7. Modifications to the Terms */}
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
              7. Modifications to the Terms
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              <p style={{ margin: 0 }}>
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>
          </section>

          {/* 8. Contact Information */}
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
              8. Contact Information
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#94A3B8',
              maxWidth: '600px',
              margin: '0 auto 18px auto',
              lineHeight: 1.6
            }}>
              If you have any questions, concerns, or require clarification regarding these Terms &amp; Conditions, please feel free to reach out to our support team.
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
            Thank you for being a part of the <span style={{ color: '#FF7900', fontWeight: 700 }}>Jagat Turkiya</span> community. We look forward to guiding you on your transformation journey.
          </div>

        </div>
      </main>
    </div>
  );
}
