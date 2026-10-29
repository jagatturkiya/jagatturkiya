import React from 'react';

export default function ApkaCoachGrowth() {
  const WHATSAPP_URL = "https://wa.me/919799879381?text=Hi%20Apkacoach%20Growth%2C%20I%27m%20interested%20in%20learning%20more%20about%20the%20financial%20consulting%20opportunity.";
  const WEALTH_COMPASS_URL = "https://yourwealthcompass.in";
  const [activePolicy, setActivePolicy] = React.useState(null);

  React.useEffect(() => {
    const h = window.location.hash.toLowerCase();
    if (h.includes('privacy')) setActivePolicy('privacy');
    else if (h.includes('terms')) setActivePolicy('terms');
    else if (h.includes('refund')) setActivePolicy('refund');
    else if (h.includes('disclaimer')) setActivePolicy('disclaimer');
  }, []);

  React.useEffect(() => {
    // Dynamic favicon for ApkaCoach DirectConnect page
    const iconLinks = document.querySelectorAll("link[rel*='icon'], link[rel='apple-touch-icon']");
    const originalHrefs = [];
    iconLinks.forEach(link => {
      originalHrefs.push({ el: link, href: link.getAttribute('href') });
      link.setAttribute('href', './assets/images/apkacoach-symbol.png');
    });

    return () => {
      // Revert back to original JT favicon when leaving directconnect
      originalHrefs.forEach(({ el, href }) => {
        if (href) el.setAttribute('href', href);
      });
    };
  }, []);

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      color: '#1B2940',
      backgroundColor: '#ffffff',
      lineHeight: 1.6,
      minHeight: '100vh',
      margin: 0,
      padding: '0 0 74px 0'
    }}>
      <style>{`
        .apka-mobile-cta {
          display: none;
        }
        .apka-mobile-break {
          display: none;
        }
        @media (max-width: 768px) {
          .apka-hero-h1 {
            font-size: 1.72rem !important;
            line-height: 1.25 !important;
            margin-bottom: 12px !important;
            letter-spacing: -0.5px !important;
          }
          .apka-hero-lead {
            font-size: 0.92rem !important;
            line-height: 1.55 !important;
            margin-bottom: 16px !important;
          }
          .apka-chip {
            padding: 5px 10px !important;
            font-size: 0.76rem !important;
          }
          .apka-pill {
            padding: 6px 12px !important;
            font-size: 0.78rem !important;
            margin-bottom: 18px !important;
          }
          .apka-hero-img {
            height: 290px !important;
            object-position: center 12% !important;
          }
          .apka-income-title {
            font-size: 1.3rem !important;
          }
          .apka-income-num {
            font-size: 2rem !important;
            margin: 10px 0 16px !important;
          }
          .apka-section-title {
            font-size: 1.4rem !important;
          }
          .apka-section-sub {
            font-size: 0.86rem !important;
          }
          .apka-card-pad {
            padding: 18px 16px !important;
          }
          .apka-footer-policies {
            gap: 6px 8px !important;
            font-size: 0.76rem !important;
            margin: 10px 0 8px !important;
          }
          .apka-mobile-break {
            display: block !important;
          }
          .apka-fine-text {
            font-size: 0.71rem !important;
            line-height: 1.36 !important;
            max-width: 350px !important;
            margin: 8px auto 0 !important;
          }
          .apka-mobile-cta {
            display: block !important;
          }
          .apka-achieve-card {
            padding: 24px 16px !important;
            border-radius: 16px !important;
          }
          .apka-achieve-title {
            font-size: 1.35rem !important;
          }
          .apka-achieve-intro {
            padding: 16px 14px !important;
          }
          .apka-achieve-highlight {
            font-size: 0.88rem !important;
          }
          .apka-goal-tag {
            font-size: 0.74rem !important;
            padding: 4px 9px !important;
          }
          .apka-exam-notice {
            font-size: 0.78rem !important;
            padding: 8px 10px !important;
          }
          .apka-achieve-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            margin-bottom: 24px !important;
          }
          .apka-achieve-item {
            padding: 12px 14px !important;
          }
          .apka-achieve-ico {
            width: 38px !important;
            height: 38px !important;
            font-size: 1.35rem !important;
          }
          .apka-achieve-item h4 {
            font-size: 0.94rem !important;
          }
          .apka-achieve-item p {
            font-size: 0.8rem !important;
          }
        }
      `}</style>
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
              <h1 className="apka-hero-h1" style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)',
                lineHeight: 1.1,
                letterSpacing: '-1.5px',
                margin: '12px 0 18px',
                color: '#102A56'
              }}>
                Build Your Next <span style={{ color: '#FF7900' }}>Growth Story.</span>
              </h1>
              <p className="apka-hero-lead" style={{
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
                    className="apka-chip"
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

              <div className="apka-pill" style={{
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

            {/* Visual: Coach Jagat Speaking on Stage */}
            <div style={{ position: 'relative' }}>
              <img
                src="./assets/images/jagat-speaking.jpg"
                alt="Coach Jagat Turkiya Keynote Speaker on Stage"
                className="apka-hero-img"
                style={{
                  width: '100%',
                  height: '480px',
                  maxHeight: '520px',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
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
              <h2 className="apka-income-title" style={{
                fontFamily: "'Instrument Sans', sans-serif",
                color: '#ffffff',
                fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
                margin: '10px 0 8px'
              }}>
                Explore Your Income Potential
              </h2>
              <strong className="apka-income-num" style={{
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
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px' }}>
              <h2 className="apka-section-title" style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
                color: '#102A56',
                margin: 0
              }}>
                Who Is This Opportunity For?
              </h2>
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
                  className="apka-card-pad"
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

        {/* What You Will Achieve by Joining Us */}
        <section id="achieve" style={{ padding: '76px 0', backgroundColor: '#F8FAFC' }}>
          <div style={{ width: 'min(1140px, 92%)', margin: '0 auto' }}>
            <div
              className="apka-achieve-card"
              style={{
                background: '#ffffff',
                border: '1px solid #E2E8F0',
                borderRadius: '20px',
                padding: '44px 36px',
                maxWidth: '920px',
                margin: '0 auto',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <span style={{
                  color: '#FF7900',
                  fontWeight: 800,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontSize: '0.82rem'
                }}>
                  Career &amp; Income Transformation
                </span>
                <h2
                  className="apka-achieve-title"
                  style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
                    color: '#102A56',
                    margin: '10px 0 16px',
                    letterSpacing: '-0.5px'
                  }}
                >
                  What You Will Achieve by Joining Us
                </h2>
                <div
                  className="apka-achieve-intro"
                  style={{
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '14px',
                    padding: '22px 24px',
                    textAlign: 'left'
                  }}
                >
                  <p
                    className="apka-achieve-highlight"
                    style={{
                      fontSize: '1.02rem',
                      color: '#102A56',
                      lineHeight: 1.6,
                      marginBottom: '12px'
                    }}
                  >
                    <strong>Once you become a licensed Financial Advisor with us**</strong>, it allows individuals to legally offer financial advisory and plan their clients' goal achievements:
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '10px 0 14px' }}>
                    {[
                      '🏖️ Retirement Planning',
                      '💰 Corpus Building',
                      '🎓 Child Higher Education',
                      '💍 Child Marriage',
                      '🏡 Dream House',
                      '✨ Wealth Goals'
                    ].map((goal) => (
                      <span
                        key={goal}
                        className="apka-goal-tag"
                        style={{
                          background: '#EFF6FF',
                          color: '#1E40AF',
                          border: '1px solid #DBEAFE',
                          borderRadius: '999px',
                          padding: '5px 12px',
                          fontSize: '0.82rem',
                          fontWeight: 600
                        }}
                      >
                        {goal}
                      </span>
                    ))}
                  </div>
                  <p
                    className="apka-exam-notice"
                    style={{
                      background: '#FEF3C7',
                      color: '#92400E',
                      border: '1px solid #FDE68A',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      margin: 0
                    }}
                  >
                    📋 <em>One must undergo mandatory training from our coaches and take up the Govt. body exam.</em>
                  </p>
                </div>
              </div>

              <div
                className="apka-achieve-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '16px',
                  marginBottom: '34px'
                }}
              >
                {[
                  { ico: '💵', title: 'Financial Freedom', desc: 'Build uncapped income potential and recurring financial wellness revenue.' },
                  { ico: '⏰', title: 'Flexible Work Hours', desc: 'Work on your own flexible schedule with total independence and autonomy.' },
                  { ico: '🏆', title: 'Rewards & Recognition', desc: 'Earn prestigious industry awards, trophies, and peer appreciation at grand galas.' },
                  { ico: '🌟', title: 'Get Skilled & Groomed', desc: 'Develop elite communication, leadership mindset, and executive persona.' },
                  { ico: '🧭', title: 'Professional Guidance', desc: 'Receive close mentorship and proven advisory guidance from Coach Jagat Turkiya.' },
                  { ico: '📈', title: 'Comprehensive Training', desc: 'Complete learning roadmap covering regulations, advisory frameworks, and exam prep.' },
                  { ico: '🎧', title: 'Service Support', desc: 'End-to-end backend operational assistance, case resolution, and dedicated helpdesk.' },
                  { ico: '✈️', title: 'Domestic and International Trips', desc: 'Qualify for all-expense-paid domestic luxury retreats and global conventions.' }
                ].map((item) => (
                  <div
                    key={item.title}
                    className="apka-achieve-item"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      background: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '14px',
                      padding: '16px 18px'
                    }}
                  >
                    <div
                      className="apka-achieve-ico"
                      style={{
                        fontSize: '1.6rem',
                        width: '44px',
                        height: '44px',
                        background: '#ffffff',
                        border: '1px solid #E2E8F0',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {item.ico}
                    </div>
                    <div>
                      <h4 style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        fontSize: '1.02rem',
                        color: '#102A56',
                        fontWeight: 700,
                        margin: '0 0 4px 0'
                      }}>
                        {item.title}
                      </h4>
                      <p style={{
                        fontSize: '0.85rem',
                        color: '#5D6B82',
                        margin: 0,
                        lineHeight: 1.45
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}

                {/* 9. AI Practical Tools (Full Width) */}
                <div
                  className="apka-achieve-item"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '14px',
                    padding: '16px 18px',
                    gridColumn: '1 / -1'
                  }}
                >
                  <div
                    className="apka-achieve-ico"
                    style={{
                      fontSize: '1.6rem',
                      width: '44px',
                      height: '44px',
                      background: '#ffffff',
                      border: '1px solid #E2E8F0',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    🤖
                  </div>
                  <div>
                    <h4 style={{
                      fontFamily: "'Instrument Sans', sans-serif",
                      fontSize: '1.02rem',
                      color: '#102A56',
                      fontWeight: 700,
                      margin: '0 0 4px 0'
                    }}>
                      AI Practical Tools for Business Growth
                    </h4>
                    <p style={{
                      fontSize: '0.85rem',
                      color: '#5D6B82',
                      margin: 0,
                      lineHeight: 1.45
                    }}>
                      Harness modern financial planning calculators, client assessment tech, and digital advisory tools.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
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
                    padding: '14px 34px',
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    backgroundColor: '#FF7900',
                    color: '#ffffff',
                    boxShadow: 'none'
                  }}
                >
                  BECOME A FINANCIAL ADVISOR →
                </a>
              </div>
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
              <h2 className="apka-section-title" style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
                color: '#102A56',
                margin: '10px 0 12px'
              }}>
                Grow With the Right Support
              </h2>
              <p className="apka-section-sub" style={{ fontSize: '1.05rem', color: '#5D6B82', lineHeight: 1.6 }}>
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
                  className="apka-card-pad"
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
              <h2 className="apka-section-title" style={{
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
              <h2 className="apka-section-title" style={{
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

      {/* Footer (ApkaCoach with A symbol, policy links, and 2-line mobile disclaimer) */}
      <footer style={{
        backgroundColor: '#071c40',
        color: '#CFDAEB',
        padding: '34px 0 26px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ width: 'min(1140px, 92%)', margin: '0 auto' }}>
          <div style={{ marginBottom: '8px' }}>
            <img
              src="./assets/images/apkacoach-symbol.png"
              alt="ApkaCoach"
              style={{
                height: '30px',
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
              fontSize: '1.35rem',
              fontWeight: 800,
              verticalAlign: 'middle'
            }}>
              Apka<span style={{ color: '#FF7900' }}>Coach</span>
            </span>
          </div>

          {/* Legal Policies (VSL, Optin & ThankYou style) */}
          <div
            className="apka-footer-policies"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              margin: '12px 0 8px',
              fontSize: '0.82rem'
            }}
          >
            <button
              type="button"
              onClick={() => setActivePolicy('privacy')}
              style={{ background: 'none', border: 'none', padding: 0, color: '#A0B2CD', textDecoration: 'none', cursor: 'pointer', font: 'inherit' }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = '#A0B2CD'}
            >
              Privacy Policy
            </button>
            <span style={{ color: '#4A5B75', fontSize: '0.78rem' }}>|</span>
            <button
              type="button"
              onClick={() => setActivePolicy('terms')}
              style={{ background: 'none', border: 'none', padding: 0, color: '#A0B2CD', textDecoration: 'none', cursor: 'pointer', font: 'inherit' }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = '#A0B2CD'}
            >
              Terms &amp; Conditions
            </button>
            <span style={{ color: '#4A5B75', fontSize: '0.78rem' }}>|</span>
            <button
              type="button"
              onClick={() => setActivePolicy('refund')}
              style={{ background: 'none', border: 'none', padding: 0, color: '#A0B2CD', textDecoration: 'none', cursor: 'pointer', font: 'inherit' }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = '#A0B2CD'}
            >
              Refund Policy
            </button>
            <span style={{ color: '#4A5B75', fontSize: '0.78rem' }}>|</span>
            <button
              type="button"
              onClick={() => setActivePolicy('disclaimer')}
              style={{ background: 'none', border: 'none', padding: 0, color: '#A0B2CD', textDecoration: 'none', cursor: 'pointer', font: 'inherit' }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = '#A0B2CD'}
            >
              Disclaimer
            </button>
          </div>

          <p
            className="apka-fine-text"
            style={{
              fontSize: '0.78rem',
              color: '#8C9EB8',
              maxWidth: '620px',
              margin: '8px auto 0',
              lineHeight: 1.45
            }}
          >
            This page provides general information about a professional opportunity and financial wellness.<br className="apka-mobile-break" />
            It is not any guarantee or financial investment advice.
          </p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="apka-mobile-cta" style={{
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

      {/* Policy Modal Pop-up */}
      <PolicyModal policy={activePolicy} onClose={() => setActivePolicy(null)} />
    </div>
  );
}

function PolicyModal({ policy, onClose }) {
  React.useEffect(() => {
    if (!policy) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [policy, onClose]);

  if (!policy) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.82)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#071c40',
          color: '#CFDAEB',
          border: '1px solid rgba(255, 255, 255, 0.16)',
          borderRadius: '16px',
          width: 'min(740px, 100%)',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '18px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#051530'
        }}>
          <h3 style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: '1.35rem',
            fontWeight: 700,
            color: '#ffffff',
            margin: 0
          }}>
            {policy === 'privacy' && 'Privacy Policy'}
            {policy === 'terms' && 'Terms & Conditions'}
            {policy === 'refund' && 'Refund Policy'}
            {policy === 'disclaimer' && 'Disclaimer'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
              lineHeight: 1
            }}
          >
            ✕
          </button>
        </div>

        {/* Scrollable Body */}
        <div style={{
          padding: '24px',
          overflowY: 'auto',
          lineHeight: 1.75,
          fontSize: '0.95rem',
          color: '#d4d4d8'
        }}>
          {policy === 'privacy' && (
            <div>
              <p style={{ marginBottom: '16px', color: '#9cb2d6' }}>
                We respect your privacy and are deeply committed to protecting your personal information.
              </p>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>Introduction</h4>
              <p style={{ marginBottom: '14px' }}>
                Welcome to <strong style={{ color: '#ffffff' }}>Jagat Turkiya</strong>. We respect your privacy and are deeply committed to protecting your <strong style={{ color: '#ffffff' }}>personal information</strong>.
              </p>
              <p style={{ marginBottom: '14px' }}>
                This <strong style={{ color: '#ffffff' }}>Privacy Policy</strong> outlines our practices regarding the collection, use, and disclosure of your information when you use our website, digital products, and coaching services. By accessing our platform, you agree to the collection and use of information in accordance with this policy.
              </p>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>Who We Are</h4>
              <p style={{ marginBottom: '14px' }}>
                <strong style={{ color: '#ffffff' }}>Jagat Turkiya</strong> is a premium transformational coaching platform dedicated to helping individuals improve their mindset, relationships, and overall life success. Our primary goal is to provide a safe, secure, and inspiring environment for personal growth.
              </p>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>Information We Collect</h4>
              <p style={{ marginBottom: '10px' }}>While using our Service, we may ask you to provide certain personally identifiable information:</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginBottom: '14px' }}>
                <li><strong style={{ color: '#ffffff' }}>Identity Data:</strong> First name and last name.</li>
                <li><strong style={{ color: '#ffffff' }}>Contact Data:</strong> Email address and phone number.</li>
                <li><strong style={{ color: '#ffffff' }}>Transaction Data:</strong> Details about payments and services purchased.</li>
              </ul>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>How We Use Your Information</h4>
              <p style={{ marginBottom: '10px' }}>We use the collected data to provide, maintain, and improve our coaching programs, process transactions securely, and communicate updates.</p>
              <div style={{ borderLeft: '2px solid #FF7900', padding: '10px 14px', margin: '12px 0 16px 0', background: 'rgba(255, 255, 255, 0.05)', color: '#f4f4f5' }}>
                We never sell, rent, or misuse your personal information.
              </div>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>Log Data &amp; Cookies</h4>
              <p style={{ marginBottom: '14px' }}>
                We collect standard log information and use cookies to enhance navigation and site performance. You can instruct your browser to refuse cookies if preferred.
              </p>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>Data Security</h4>
              <p style={{ marginBottom: '14px' }}>
                We implement industry-standard security measures to safeguard your personal data. While we strive to use commercially acceptable means to protect your information, no transmission method over the Internet is 100% secure.
              </p>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>Contact Us</h4>
              <p style={{ marginBottom: '10px' }}>If you have questions regarding this Privacy Policy, please reach out to:</p>
              <p><a href="mailto:hello@apkacoach.com" style={{ color: '#FF7900', fontWeight: 600, textDecoration: 'underline' }}>hello@apkacoach.com</a></p>
            </div>
          )}

          {policy === 'terms' && (
            <div>
              <p style={{ marginBottom: '16px', color: '#9cb2d6' }}>
                Please review the terms and conditions governing the use of Jagat Turkiya's website, programs, and digital products.
              </p>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>1. Acceptance of Terms</h4>
              <p style={{ marginBottom: '14px' }}>
                By accessing or using the website and coaching services provided by <strong style={{ color: '#ffffff' }}>Jagat Turkiya</strong>, you acknowledge that you have read, understood, and agree to be bound by these <strong style={{ color: '#ffffff' }}>Terms</strong>.
              </p>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>2. Intellectual Property Rights</h4>
              <p style={{ marginBottom: '14px' }}>
                All content, materials, frameworks, videos, and digital products available on this platform are the exclusive intellectual property of <strong style={{ color: '#ffffff' }}>Jagat Turkiya</strong>. You are granted a limited license strictly for personal, non-commercial use.
              </p>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>3. Third-Party Links</h4>
              <p style={{ marginBottom: '14px' }}>
                Our platform may contain links to external sites that are not owned or controlled by us. We assume no responsibility for third-party practices or content.
              </p>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>4. Termination of Access</h4>
              <p style={{ marginBottom: '14px' }}>
                We reserve the right to suspend or terminate access immediately, without prior notice, if any user breaches these Terms.
              </p>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>5. No Warranties Disclaimer</h4>
              <p style={{ marginBottom: '14px' }}>
                Coaching services and resources are provided on an "AS IS" and "AS AVAILABLE" basis. While we strive to provide proven frameworks, individual outcomes are solely the responsibility of the client.
              </p>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>6. Governing Law</h4>
              <p style={{ marginBottom: '14px' }}>
                These Terms shall be governed and construed in accordance with the laws of <strong style={{ color: '#ffffff' }}>India</strong>.
              </p>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>7. Contact Information</h4>
              <p style={{ marginBottom: '10px' }}>For questions regarding these Terms &amp; Conditions, please contact:</p>
              <p><a href="mailto:hello@apkacoach.com" style={{ color: '#FF7900', fontWeight: 600, textDecoration: 'underline' }}>hello@apkacoach.com</a></p>
            </div>
          )}

          {policy === 'refund' && (
            <div>
              <p style={{ marginBottom: '16px', color: '#9cb2d6' }}>
                Refund and cancellation policy for Jagat Turkiya programs, consultations, and digital products.
              </p>

              <div style={{ borderLeft: '2px solid #FF7900', padding: '12px 16px', marginBottom: '20px', background: 'rgba(255, 255, 255, 0.05)' }}>
                <p style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.05rem', margin: '0 0 4px 0' }}>All purchases are non-refundable.</p>
                <p style={{ color: '#9cb2d6', fontSize: '0.92rem', margin: 0 }}>Please ensure you are fully committed before enrolling in any program.</p>
              </div>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>Non-Refundable Programs &amp; Services</h4>
              <p style={{ marginBottom: '10px' }}>All sales of coaching services, masterminds, digital products, and events are final:</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginBottom: '14px' }}>
                <li><strong style={{ color: '#ffffff' }}>Mastermind &amp; Group Programs:</strong> Enrolled seats cannot be transferred, cancelled, or refunded.</li>
                <li><strong style={{ color: '#ffffff' }}>1-on-1 Consultations:</strong> Confirmed consultation slots are non-refundable.</li>
                <li><strong style={{ color: '#ffffff' }}>Digital Products:</strong> Immediate digital access is granted, making all digital content strictly non-refundable.</li>
                <li><strong style={{ color: '#ffffff' }}>Live Workshops:</strong> Event tickets are non-refundable due to venue commitments.</li>
              </ul>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>Cancellations &amp; Rescheduling</h4>
              <p style={{ marginBottom: '14px' }}>
                For 1-on-1 sessions, rescheduling requests must be submitted at least 24 hours prior. Last-minute cancellations or missed sessions will be forfeited.
              </p>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>Exceptions</h4>
              <p style={{ marginBottom: '14px' }}>
                The only exception is in the event of a proven billing error or accidental duplicate payment for the same service. In such rare instances, notify our support team within 48 hours.
              </p>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>Need Help or Have Questions?</h4>
              <p style={{ marginBottom: '10px' }}>If you have questions prior to enrolling or making a purchase, reach out to our team:</p>
              <p><a href="mailto:hello@apkacoach.com" style={{ color: '#FF7900', fontWeight: 600, textDecoration: 'underline' }}>hello@apkacoach.com</a></p>
            </div>
          )}

          {policy === 'disclaimer' && (
            <div>
              <p style={{ marginBottom: '16px', color: '#9cb2d6' }}>
                All content, coaching guidance, and resources provided by Jagat Turkiya are for informational and educational purposes only.
              </p>

              <div style={{ borderLeft: '2px solid #FF7900', padding: '12px 16px', marginBottom: '20px', background: 'rgba(255, 255, 255, 0.05)' }}>
                <p style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.05rem', margin: '0 0 4px 0' }}>This is not a guarantee-based system.</p>
                <p style={{ color: '#9cb2d6', fontSize: '0.92rem', margin: 0 }}>Your results depend entirely on your personal effort, consistency, and real-world execution.</p>
              </div>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>1. General Disclaimer</h4>
              <p style={{ marginBottom: '14px' }}>
                Information and methodologies are provided solely for personal growth and educational purposes. You are entirely responsible for your own progress and decisions.
              </p>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>2. No Promise or Guarantee</h4>
              <p style={{ marginBottom: '14px' }}>
                We make no guarantees regarding specific levels of success, financial gain, or personal fulfillment. Testimonials reflect exceptional results and do not guarantee identical outcomes for every individual.
              </p>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>3. Educational Purposes Only</h4>
              <p style={{ marginBottom: '14px' }}>
                Our content is not a substitute for professional legal, medical, psychological, or certified financial advice.
              </p>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>4. Effort and Application Matter</h4>
              <p style={{ marginBottom: '10px' }}>
                Your transformation outcome is directly determined by your consistency, relentless real-world action, and an open mindset.
              </p>

              <h4 style={{ color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.15rem', margin: '20px 0 8px 0' }}>Questions?</h4>
              <p style={{ marginBottom: '10px' }}>If you have any questions regarding this disclaimer, please contact:</p>
              <p><a href="mailto:hello@apkacoach.com" style={{ color: '#FF7900', fontWeight: 600, textDecoration: 'underline' }}>hello@apkacoach.com</a></p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: '14px 24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          backgroundColor: '#051530',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: '8px 24px',
              backgroundColor: '#FF7900',
              border: '1px solid #FF7900',
              borderRadius: '8px',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
