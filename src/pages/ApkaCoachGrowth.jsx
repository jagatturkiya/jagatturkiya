import React from 'react';

export default function ApkaCoachGrowth() {
  const WHATSAPP_URL = "https://wa.me/919799879381?text=Hi%20Apkacoach%20Growth%2C%20I%27m%20interested%20in%20learning%20more%20about%20the%20financial%20consulting%20opportunity.";
  const WEALTH_COMPASS_URL = "https://yourwealthcompass.in";

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      color: '#1B2940',
      backgroundColor: '#ffffff',
      lineHeight: 1.6,
      minHeight: '100vh',
      margin: 0,
      padding: 0
    }}>
      {/* Top Header Navigation (ApkaCoach logo with A symbol, no Growth text) */}
      <header style={{
        background: '#ffffff',
        borderBottom: '1px solid #E2E8F0',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          width: 'min(1140px, 92%)',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 0',
          gap: '20px'
        }}>
          <a href="#join" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img
              src="./assets/images/apkacoach-symbol.png"
              alt="ApkaCoach"
              style={{
                height: '38px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
            />
            <span style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.55rem',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              color: '#102A56',
              lineHeight: 1
            }}>
              Apka<span style={{ color: '#FF7900' }}>Coach</span>
            </span>
          </a>

          {/* Header Action: Redirects to Your Wealth Compass */}
          <a
            href={WEALTH_COMPASS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              textDecoration: 'none',
              borderRadius: '999px',
              padding: '11px 22px',
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 700,
              fontSize: '0.94rem',
              backgroundColor: '#102A56',
              color: '#ffffff',
              boxShadow: 'none'
            }}
          >
            Get Free Report ↗
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section - Clean, No Glow */}
        <section style={{
          background: '#F8FAFC',
          borderBottom: '1px solid #E2E8F0',
          padding: '64px 0 60px',
          position: 'relative'
        }}>
          <div style={{
            width: 'min(1140px, 92%)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '48px'
          }}>
            <div>
              <span style={{
                color: '#FF7900',
                fontWeight: 800,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '0.82rem',
                display: 'inline-block',
                marginBottom: '8px'
              }}>
                Your Knowledge. Your Network. Your Growth.
              </span>
              <h1 style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)',
                lineHeight: 1.1,
                letterSpacing: '-1.5px',
                margin: '12px 0 18px',
                color: '#102A56'
              }}>
                Build Your Next <span style={{ color: '#FF7900' }}>Growth Story.</span>
              </h1>
              <p style={{
                fontSize: '1.12rem',
                color: '#3b4962',
                maxWidth: '580px',
                lineHeight: 1.65,
                marginBottom: '24px'
              }}>
                Explore a professional opportunity in financial consulting with <strong>ApkaCoach Growth</strong>—using your experience, people skills and a supportive learning environment.
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                margin: '20px 0 24px'
              }}>
                {[
                  'Insurance Agents',
                  'Banking Professionals',
                  'Teachers',
                  'Doctors & Nurses',
                  'Post Office Agents',
                  'CAs & Tax Consultants'
                ].map((chip) => (
                  <span
                    key={chip}
                    style={{
                      padding: '8px 14px',
                      border: '1px solid #E2E8F0',
                      borderRadius: '30px',
                      backgroundColor: '#ffffff',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: '#102A56'
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#FFF0DF',
                color: '#9A3E00',
                border: '1px solid #FFD0A5',
                padding: '9px 16px',
                borderRadius: '30px',
                fontWeight: 700,
                fontSize: '0.92rem',
                marginBottom: '28px'
              }}>
                🎯 Looking to connect with 5 motivated professionals
              </div>

              <div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    borderRadius: '999px',
                    padding: '14px 28px',
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '1rem',
                    backgroundColor: '#FF7900',
                    color: '#ffffff',
                    boxShadow: 'none'
                  }}
                >
                  I'm Interested — DM Now →
                </a>
              </div>
            </div>

            {/* Clean Image: No Border, No Frame, No Badge */}
            <div style={{ position: 'relative' }}>
              <img
                src="./assets/apkacoach-team-poster.png"
                alt="ApkaCoach Opportunity Poster"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '16px',
                  border: '0',
                  boxShadow: 'none'
                }}
              />
            </div>
          </div>
        </section>

        {/* Target Income Highlight Section (Disclaimer removed, Clean Flat Style, No Glow) */}
        <section style={{ padding: '70px 0', backgroundColor: '#F8FAFC' }}>
          <div style={{ width: 'min(1140px, 92%)', margin: '0 auto' }}>
            <div style={{
              background: '#102A56',
              color: '#ffffff',
              borderRadius: '20px',
              padding: '48px 32px',
              textAlign: 'center',
              border: '1px solid #1E3A8A',
              boxShadow: 'none',
              maxWidth: '860px',
              margin: '0 auto'
            }}>
              <span style={{
                color: '#FFC247',
                fontWeight: 800,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '0.82rem'
              }}>
                Target Income
              </span>
              <h2 style={{
                fontFamily: "'Instrument Sans', sans-serif",
                color: '#ffffff',
                fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
                margin: '10px 0 8px'
              }}>
                Explore Your Income Potential
              </h2>
              <strong style={{
                display: 'block',
                fontSize: 'clamp(2.6rem, 6vw, 4.2rem)',
                lineHeight: 1.1,
                fontWeight: 800,
                fontFamily: "'Instrument Sans', sans-serif",
                color: '#FFC247',
                margin: '14px 0 28px',
                letterSpacing: '-1px',
                textShadow: 'none'
              }}>
                ₹2 Lakh+ / Month
              </strong>

              <div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    borderRadius: '999px',
                    padding: '13px 26px',
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.98rem',
                    backgroundColor: '#FF7900',
                    color: '#ffffff',
                    boxShadow: 'none'
                  }}
                >
                  Discuss the Opportunity →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Who Is This Opportunity For? */}
        <section style={{ padding: '76px 0', backgroundColor: '#ffffff' }}>
          <div style={{ width: 'min(1140px, 92%)', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 42px' }}>
              <span style={{
                color: '#FF7900',
                fontWeight: 800,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '0.82rem'
              }}>
                Target Audience
              </span>
              <h2 style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
                color: '#102A56',
                margin: '10px 0 12px'
              }}>
                Who Is This Opportunity For?
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#5D6B82', lineHeight: 1.6 }}>
                We’re looking to connect with 5 motivated professionals who want to explore financial consulting as an additional or expanded professional opportunity.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {[
                { ico: '🛡️', title: 'Insurance & Banking', desc: 'Insurance agents, banking professionals and financial-services distributors.' },
                { ico: '🎓', title: 'Education', desc: 'Teachers and education professionals with strong communication skills.' },
                { ico: '🩺', title: 'Healthcare', desc: 'Doctors, medical practitioners and nurses interested in financial wellness.' },
                { ico: '📮', title: 'Post Office Agents', desc: 'Professionals who understand customer needs and value long-term relationships.' },
                { ico: '📊', title: 'CA & Tax Consultants', desc: 'Accounting and tax professionals interested in broadening their service offering.' },
                { ico: '🤝', title: 'People-Focused Professionals', desc: 'Motivated people who want to learn, build trust and grow with expert support.' }
              ].map((card) => (
                <article
                  key={card.title}
                  style={{
                    padding: '26px 24px',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    backgroundColor: '#ffffff',
                    boxShadow: 'none',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <span style={{ fontSize: '2rem', marginBottom: '14px', display: 'inline-block' }}>{card.ico}</span>
                  <h3 style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: '1.22rem',
                    marginBottom: '8px',
                    color: '#102A56'
                  }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#5D6B82', margin: 0, lineHeight: 1.55 }}>
                    {card.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Grow With the Right Support */}
        <section style={{ padding: '76px 0', backgroundColor: '#F8FAFC' }}>
          <div style={{ width: 'min(1140px, 92%)', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 42px' }}>
              <span style={{
                color: '#FF7900',
                fontWeight: 800,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '0.82rem'
              }}>
                Structured Mentorship
              </span>
              <h2 style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
                color: '#102A56',
                margin: '10px 0 12px'
              }}>
                Grow With the Right Support
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#5D6B82', lineHeight: 1.6 }}>
                Get a clearer picture of the opportunity before you decide whether it is right for you.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '18px'
            }}>
              {[
                { num: '1', title: 'Expert Guidance', desc: 'Learn with experienced professionals who have scaled high-trust client relationships.' },
                { num: '2', title: 'Practical Tools', desc: 'Use modern resources and calculators designed to support your day-to-day work.' },
                { num: '3', title: 'Training & Learning', desc: 'Build domain knowledge and advisory confidence step-by-step at your own pace.' },
                { num: '4', title: 'Long-Term Growth', desc: 'Explore an opportunity that aligns with your personal milestones and lifestyle goals.' }
              ].map((step) => (
                <div
                  key={step.num}
                  style={{
                    backgroundColor: '#FFF9F2',
                    border: '1px solid #FDE6CF',
                    borderRadius: '16px',
                    padding: '24px 20px',
                    boxShadow: 'none'
                  }}
                >
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    backgroundColor: '#ffffff',
                    color: '#FF7900',
                    borderRadius: '50%',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    marginBottom: '12px',
                    border: '1px solid #FDE6CF'
                  }}>
                    {step.num}
                  </span>
                  <h3 style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: '1.15rem',
                    color: '#FF7900',
                    marginBottom: '8px'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#4A5568', margin: 0, lineHeight: 1.5 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Report Section (Redirects to Your Wealth Compass) */}
        <section id="free-report" style={{ padding: '76px 0', backgroundColor: '#ffffff' }}>
          <div style={{ width: 'min(1140px, 92%)', margin: '0 auto' }}>
            <div style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              padding: '44px 32px',
              textAlign: 'center',
              boxShadow: 'none',
              maxWidth: '860px',
              margin: '0 auto'
            }}>
              <span style={{
                color: '#FF7900',
                fontWeight: 800,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '0.82rem'
              }}>
                Free Wellness Resource
              </span>
              <h2 style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                color: '#102A56',
                margin: '10px 0 14px'
              }}>
                Get Your FREE Financial Fitness Report
              </h2>
              <p style={{
                maxWidth: '640px',
                margin: '0 auto 28px',
                color: '#5D6B82',
                fontSize: '1.05rem',
                lineHeight: 1.6
              }}>
                Take a practical first step toward better financial planning. Fill in the quick assessment on Your Wealth Compass to evaluate your financial readiness.
              </p>
              <a
                href={WEALTH_COMPASS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  borderRadius: '999px',
                  padding: '13px 28px',
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.98rem',
                  backgroundColor: '#102A56',
                  color: '#ffffff',
                  boxShadow: 'none'
                }}
              >
                Get My Free Report ↗
              </a>
            </div>
          </div>
        </section>

        {/* Ready to Explore Opportunity Section (WhatsApp CTA, Outside phone number removed) */}
        <section id="join" style={{ padding: '76px 0', backgroundColor: '#F8FAFC' }}>
          <div style={{ width: 'min(1140px, 92%)', margin: '0 auto' }}>
            <div style={{
              background: '#102A56',
              color: '#ffffff',
              borderRadius: '20px',
              padding: '48px 32px',
              textAlign: 'center',
              border: '1px solid #1E3A8A',
              boxShadow: 'none',
              maxWidth: '860px',
              margin: '0 auto'
            }}>
              <span style={{
                color: '#FFC247',
                fontWeight: 800,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '0.82rem'
              }}>
                Direct Connect
              </span>
              <h2 style={{
                fontFamily: "'Instrument Sans', sans-serif",
                color: '#ffffff',
                fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
                margin: '10px 0 12px'
              }}>
                Ready to Explore the Opportunity?
              </h2>
              <p style={{
                color: '#E2ECF8',
                maxWidth: '620px',
                margin: '0 auto 26px',
                fontSize: '1.05rem'
              }}>
                We’re looking for just 5 motivated professionals. Send us a message on WhatsApp to express your interest and learn more—no pressure to commit.
              </p>
              <div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                    borderRadius: '999px',
                    padding: '14px 30px',
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.05rem',
                    backgroundColor: '#168B55',
                    color: '#ffffff',
                    boxShadow: 'none'
                  }}
                >
                  CHAT WITH US ON WHATSAPP →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer (ApkaCoach with A symbol, no Growth text) */}
      <footer style={{
        backgroundColor: '#071c40',
        color: '#CFDAEB',
        padding: '44px 0 36px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ width: 'min(1140px, 92%)', margin: '0 auto' }}>
          <div style={{ marginBottom: '10px' }}>
            <img
              src="./assets/images/apkacoach-symbol.png"
              alt="ApkaCoach"
              style={{
                height: '32px',
                width: 'auto',
                objectFit: 'contain',
                display: 'inline-block',
                verticalAlign: 'middle',
                marginRight: '8px'
              }}
            />
            <span style={{
              fontFamily: "'Instrument Sans', sans-serif",
              color: '#ffffff',
              fontSize: '1.45rem',
              fontWeight: 800,
              verticalAlign: 'middle'
            }}>
              Apka<span style={{ color: '#FF7900' }}>Coach</span>
            </span>
          </div>
          <p style={{
            fontSize: '0.8rem',
            color: '#8C9EB8',
            maxWidth: '640px',
            margin: '16px auto 0',
            lineHeight: 1.6
          }}>
            This page provides general information about a professional opportunity and financial wellness. It is not a guarantee of income or individualized financial advice.
          </p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        padding: '12px 16px',
        borderTop: '1px solid #E2E8F0',
        zIndex: 999,
        textAlign: 'center'
      }}>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            width: '100%',
            maxWidth: '480px',
            margin: '0 auto',
            textDecoration: 'none',
            borderRadius: '999px',
            padding: '13px 20px',
            fontFamily: "'Instrument Sans', sans-serif",
            fontWeight: 800,
            fontSize: '1rem',
            backgroundColor: '#168B55',
            color: '#ffffff',
            boxShadow: 'none'
          }}
        >
          DM Me Now · Explore Opportunity →
        </a>
      </div>
    </div>
  );
}
