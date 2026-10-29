import React from 'react';

export default function Disclaimer() {
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
            Disclaimer
          </h1>
          <p style={{
            fontSize: '1.15rem',
            color: '#9ca3af',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            All content, coaching guidance, and resources provided by Jagat Turkiya are for informational and educational purposes only.
          </p>
        </div>
      </section>

      {/* Main Legal Content Container */}
      <main style={{ maxWidth: '820px', margin: '0 auto', padding: '48px 24px 0 24px' }}>
        {/* Core Statement with Clean Typographic Hierarchy */}
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
            This is not a guarantee-based system.
          </h2>
          <p style={{
            fontSize: '0.98rem',
            color: '#9ca3af',
            margin: 0,
            lineHeight: 1.6
          }}>
            Your results depend entirely on your personal effort, consistency, and real-world execution.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

          {/* 1. General Disclaimer */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '14px',
              letterSpacing: '-0.01em'
            }}>
              1. General Disclaimer
            </h2>
            <div style={{ lineHeight: '1.8', color: '#d4d4d8', fontSize: '1.02rem' }}>
              <p style={{ marginBottom: '14px' }}>
                The information, frameworks, and coaching methodologies provided by <strong style={{ color: '#ffffff' }}>Jagat Turkiya</strong> on this website and in all associated programs are intended solely for personal growth and educational purposes.
              </p>
              <p style={{ margin: 0 }}>
                By participating in our coaching sessions, consuming our digital products, or attending our live events, you accept that you are entirely responsible for your own progress and the outcomes of your decisions.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* 2. No Promise or Guarantee */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '14px',
              letterSpacing: '-0.01em'
            }}>
              2. No Promise or Guarantee
            </h2>
            <div style={{ lineHeight: '1.8', color: '#d4d4d8', fontSize: '1.02rem' }}>
              <p style={{ marginBottom: '14px' }}>
                We make <strong style={{ color: '#ffffff' }}>no guarantees</strong> concerning the level of success, financial gain, relationship improvement, or personal fulfillment you may experience.
              </p>
              <p style={{ margin: 0 }}>
                The testimonials and success stories showcased on our platform are real experiences of past clients, but they represent exceptional results. They are not intended to represent or guarantee that anyone will achieve the exact same or similar results.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* 3. Not a "Get-Rich-Quick" Scheme */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '14px',
              letterSpacing: '-0.01em'
            }}>
              3. Not a "Get-Rich-Quick" Scheme
            </h2>
            <div style={{ lineHeight: '1.8', color: '#d4d4d8', fontSize: '1.02rem' }}>
              <p style={{ margin: 0 }}>
                True transformation takes time, discipline, and consistent effort. <strong style={{ color: '#ffffff' }}>Jagat Turkiya's</strong> programs are not "get-rich-quick" schemes, instant fix formulas, or effortless miracles. We provide the strategies and guidance, but the execution is entirely up to you.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* 4. Individual Results Will Vary */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '14px',
              letterSpacing: '-0.01em'
            }}>
              4. Individual Results Will Vary
            </h2>
            <div style={{ lineHeight: '1.8', color: '#d4d4d8', fontSize: '1.02rem' }}>
              <p style={{ margin: 0 }}>
                Every individual is unique. Your success depends on a wide variety of factors, including your background, dedication, motivation, work ethic, and ability to adapt. Because these factors differ among all individuals, we cannot and do not guarantee your specific success or income level.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* 5. Educational Purposes Only */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '14px',
              letterSpacing: '-0.01em'
            }}>
              5. Educational Purposes Only
            </h2>
            <div style={{ lineHeight: '1.8', color: '#d4d4d8', fontSize: '1.02rem' }}>
              <p style={{ marginBottom: '14px' }}>
                The content provided is strictly for education and awareness. It is not intended to replace professional, legal, medical, psychological, or financial advice.
              </p>
              <p style={{ margin: 0, color: '#9ca3af' }}>
                Please consult with certified professionals (e.g., therapists, financial advisors, or attorneys) for specific advice tailored to your personal or business situation.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* 6. Effort and Application Matter */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '14px',
              letterSpacing: '-0.01em'
            }}>
              6. Effort and Application Matter
            </h2>
            <div style={{ lineHeight: '1.8', color: '#d4d4d8', fontSize: '1.02rem' }}>
              <p style={{ marginBottom: '18px' }}>
                There is no substitute for doing the work. To see real change, you must commit to applying the frameworks taught in our coaching sessions. Your outcome will be directly determined by:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '16px', marginBottom: '14px' }}>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '18px' }}>
                  <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.05rem', marginBottom: '6px' }}>Consistency</div>
                  <div style={{ fontSize: '0.92rem', color: '#9ca3af', lineHeight: 1.6 }}>Showing up regularly and implementing daily practices without fail.</div>
                </div>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '18px' }}>
                  <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.05rem', marginBottom: '6px' }}>Action</div>
                  <div style={{ fontSize: '0.92rem', color: '#9ca3af', lineHeight: 1.6 }}>Moving past theory and putting coaching strategies into real-world practice.</div>
                </div>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '18px' }}>
                  <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.05rem', marginBottom: '6px' }}>Open Mindset</div>
                  <div style={{ fontSize: '0.92rem', color: '#9ca3af', lineHeight: 1.6 }}>Willingness to break old habits and adopt new, empowering belief systems.</div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact / Questions */}
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
              Questions Regarding This Disclaimer
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#9ca3af',
              maxWidth: '680px',
              margin: '0 0 16px 0',
              lineHeight: 1.6
            }}>
              We are dedicated to supporting your journey with transparency. If you have any questions regarding this disclaimer, please reach out to our team:
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
