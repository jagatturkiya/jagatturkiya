import React from 'react';

export default function Disclaimer() {
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
            ⚠️ Important Notice
          </span>
          <h1 style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-1px',
            margin: '0 0 16px 0'
          }}>
            Disclaimer
          </h1>
          <p style={{
            fontSize: '1.15rem',
            color: '#94A3B8',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto 20px auto'
          }}>
            All content, coaching guidance, and resources provided by Jagat Turkiya are for informational and educational purposes only.
          </p>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(255, 121, 0, 0.1)',
            color: '#FFB066',
            border: '1px solid rgba(255, 121, 0, 0.25)',
            padding: '8px 18px',
            borderRadius: '999px',
            fontSize: '0.92rem',
            fontWeight: 600
          }}>
            ⚡ We guide you, but your results depend on your actions.
          </div>
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
            margin: 0,
            lineHeight: 1.5
          }}>
            ⚠️ This is not a guarantee-based system. <br />
            <span style={{ color: '#FF7900' }}>Your results depend on your actions.</span>
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {/* 1. General Disclaimer */}
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
              1. General Disclaimer
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                The information, frameworks, and coaching methodologies provided by <strong style={{ color: '#F1F5F9' }}>Jagat Turkiya</strong> on this website and in all associated programs are intended solely for personal growth and educational purposes.
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
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              2. No Promise or Guarantee
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                We make <strong style={{ color: '#F1F5F9' }}>no guarantees</strong> concerning the level of success, financial gain, relationship improvement, or personal fulfillment you may experience.
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
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              3. Not a "Get-Rich-Quick" Scheme
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ margin: 0 }}>
                True transformation takes time, discipline, and consistent effort. <strong style={{ color: '#F1F5F9' }}>Jagat Turkiya's</strong> programs are not "get-rich-quick" schemes, instant fix formulas, or effortless miracles. We provide the strategies and guidance, but the execution is entirely up to you.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* 4. Individual Results Will Vary */}
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
              4. Individual Results Will Vary
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
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
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              5. Educational Purposes Only
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '16px' }}>
                The content provided is strictly for education and awareness. It is not intended to replace professional, legal, medical, psychological, or financial advice.
              </p>
              <div style={{
                backgroundColor: 'rgba(255, 121, 0, 0.08)',
                border: '1px solid rgba(255, 121, 0, 0.25)',
                borderRadius: '12px',
                padding: '16px 20px',
                color: '#E2E8F0',
                fontSize: '0.98rem'
              }}>
                <strong style={{ color: '#FF7900' }}>Note: </strong>
                Please consult with certified professionals (e.g., therapists, financial advisors, or attorneys) for specific advice tailored to your personal or business situation.
              </div>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* 6. Effort and Application Matter */}
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
              6. Effort and Application Matter
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '16px' }}>
                There is no substitute for doing the work. To see real change, you must commit to applying the frameworks taught in our coaching sessions. Your outcome will be directly determined by:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '22px' }}>
                <div style={{ backgroundColor: '#0F1E36', border: '1px solid #1E3A5F', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ color: '#FF7900', fontWeight: 700, fontSize: '1.05rem', marginBottom: '6px' }}>✓ Unwavering Consistency</div>
                  <div style={{ fontSize: '0.92rem', color: '#94A3B8' }}>Showing up every day and implementing daily practices without fail.</div>
                </div>
                <div style={{ backgroundColor: '#0F1E36', border: '1px solid #1E3A5F', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ color: '#FF7900', fontWeight: 700, fontSize: '1.05rem', marginBottom: '6px' }}>✓ Relentless Action</div>
                  <div style={{ fontSize: '0.92rem', color: '#94A3B8' }}>Moving past theory and putting coaching strategies into real-world practice.</div>
                </div>
                <div style={{ backgroundColor: '#0F1E36', border: '1px solid #1E3A5F', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ color: '#FF7900', fontWeight: 700, fontSize: '1.05rem', marginBottom: '6px' }}>✓ Open Mindset</div>
                  <div style={{ fontSize: '0.92rem', color: '#94A3B8' }}>Willingness to break old habits and adopt new, empowering belief systems.</div>
                </div>
              </div>

              <div style={{
                backgroundColor: '#1E293B',
                border: '1px solid #334155',
                borderRadius: '12px',
                padding: '16px 20px',
                textAlign: 'center',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1.08rem'
              }}>
                Your results are your responsibility.
              </div>
            </div>
          </section>

          {/* A Final Word */}
          <div style={{
            backgroundColor: '#0F1E36',
            border: '1px solid #1E3A5F',
            borderRadius: '16px',
            padding: '30px 24px',
            textAlign: 'center',
            marginTop: '20px'
          }}>
            <h3 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '10px'
            }}>
              A Final Word
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#94A3B8',
              maxWidth: '600px',
              margin: '0 auto 18px auto',
              lineHeight: 1.6
            }}>
              We are dedicated to supporting your journey and providing the best possible tools for your growth. If you have any questions regarding this disclaimer, please feel free to reach out.
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
          </div>
        </div>
      </main>
    </div>
  );
}
