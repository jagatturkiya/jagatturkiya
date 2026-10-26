import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import LiquidHero from '../components/LiquidHero';
import FaqAccordion from '../components/FaqAccordion';
import { getMastermindDetails, getFaqs } from '../lib/cmsStore';

export default function Mastermind() {
  const [mmData, setMmData] = useState(() => getMastermindDetails());
  const [faqItems, setFaqItems] = useState(() => getFaqs().mastermind || []);
  const stackCardsRef = useRef([]);

  useEffect(() => {
    const handleUpdate = () => {
      setMmData(getMastermindDetails());
      setFaqItems(getFaqs().mastermind || []);
    };
    window.addEventListener('jt_cms_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('jt_cms_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const cards = stackCardsRef.current;
          if (!cards || cards.length === 0) {
            ticking = false;
            return;
          }

          const STICKY_TOP = window.innerWidth <= 768 ? 90 : 110;
          const FADE_DISTANCE = window.innerWidth <= 768 ? 180 : 240;

          for (let i = 0; i < cards.length; i++) {
            const currentCard = cards[i];
            if (!currentCard) continue;

            const nextCard = cards[i + 1];
            if (nextCard) {
              const nextRect = nextCard.getBoundingClientRect();
              const distance = nextRect.top - STICKY_TOP;

              if (distance > FADE_DISTANCE) {
                // Next card is far below -> current card is fully visible
                currentCard.style.opacity = '1';
                currentCard.style.transform = 'scale(1)';
              } else if (distance > 0) {
                // Next card is approaching -> current card dissolves smoothly
                const progress = Math.max(0, Math.min(1, distance / FADE_DISTANCE));
                currentCard.style.opacity = String(progress);
                const scale = 0.95 + 0.05 * progress;
                currentCard.style.transform = `scale(${scale.toFixed(3)})`;
              } else {
                // Next card has covered it -> completely disappear
                currentCard.style.opacity = '0';
                currentCard.style.transform = 'scale(0.95)';
              }
            } else {
              // Last card stays fully visible
              currentCard.style.opacity = '1';
              currentCard.style.transform = 'scale(1)';
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const weeks = mmData.weeks || [];

  const qualifyingCriteria = [
    {
      title: "Corporate & Industry Professionals",
      desc: "Specialists, consultants, managers, and executives who have solid recurring income but want to transition from trading time for money to building long-term compounding assets."
    },
    {
      title: "Insurance Advisors, Bankers & Practitioners",
      desc: "Professionals who guide others on financial instruments daily, but recognize the critical need for an objective, disciplined wealth architecture for their own household."
    },
    {
      title: "Homemakers & Family Wealth Custodians",
      desc: "Family stewards who manage household decisions and want the financial sovereignty, structured literacy, and security systems to protect their family's long-term future."
    },
    {
      title: "Seekers of Direction & Lifelong Peace",
      desc: "Driven individuals who are tired of noise, confusion, and emotional decisions, and are ready for a grounded, disciplined operating system that delivers permanent peace of mind."
    }
  ];

  const deliverables = [
    "10-Week Intensive Mastermind Curriculum",
    "Ongoing Handholding & Implementation Support Till 6 Months",
    "Step-by-Step Personal Financial & Life Blueprint",
    "Objective Investment & Capital Allocation Guidance",
    "Defensive Risk Architecture & Capital Moats",
    "Flow-of-Money & Cash Leakage Audit",
    "Multi-Horizon Goal Planning (Short, Medium, Long-Term)",
    "Guided 1-on-1 Coaching & Diagnostic Sessions With Jagat Turkiya",
    "Your Lifetime Wealth & Mental Operating System"
  ];

  const leadershipTeam = [
    {
      id: 'jagat',
      name: 'Jagat Turkiya',
      role: 'Founder & CEO',
      featured: true,
      image: './assets/images/coach/jagat-hero-portrait.png',
      desc: 'Author of 5 books and Times Square featured coach. Jagat conducts private 1-on-1 diagnostics to rewire self-doubt and install decisive mental clarity.',
      points: [
        '1-on-1 Mindset & Life Diagnostic',
        'Rewiring Career & Wealth Friction',
        'Permanent Peace of Mind Blueprint'
      ]
    },
    {
      id: 'raunak',
      name: 'Kumar Raunak',
      role: 'Chief of Marketing & Tech',
      monogram: 'KR',
      desc: 'Architect of high-converting growth funnels, tech infrastructure, and brand distribution pipelines across the ecosystem.',
      points: [
        'High-Conversion Growth Funnels',
        'Strategic Brand Distribution',
        'Tech Stack & Automation'
      ]
    },
    {
      id: 'savita',
      name: 'Savita Turkiya',
      role: 'Operations',
      monogram: 'ST',
      desc: 'Operational anchor managing seamless cohort onboarding, schedule alignment, and continuous 6-month mentee care.',
      points: [
        'Cohort Coordination & Logistics',
        '6-Month Mentee Handholding',
        'Accountability & Execution Cadence'
      ]
    },
    {
      id: 'manish',
      name: 'Manish Sharma',
      role: 'Finance & Team Lead',
      monogram: 'MS',
      desc: 'Drives financial governance, capital protection frameworks, and team execution discipline.',
      points: [
        'Fiscal Governance & Risk Defense',
        'Resource & Capital Allocation',
        'Cross-Functional Team Alignment'
      ]
    },
    {
      id: 'neelofar',
      name: 'Neelofar',
      role: 'Editing & Social Media Management',
      monogram: 'NL',
      desc: 'Drives creative media production, high-impact video storytelling, and digital content distribution.',
      points: [
        'Cinematic Video Storytelling',
        'High-Engagement Brand Content',
        'Multi-Platform Media Strategy'
      ]
    }
  ];

  return (
    <div className="mastermind-page">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <LiquidHero />
        <div className="container hero-container" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <h1 className="hero-title">
            For Executives, Leaders &amp; Stewards: <br className="hero-desktop-br" />
            <span className="serif-font">The Transformation Mastermind</span>
          </h1>

          <p className="hero-lead">
            A 10-week intensive container followed by 6 months of direct guidance. Private 1-on-1 diagnostics with Jagat Turkiya to break mental bottlenecks and build decisive life clarity.
          </p>

          <div className="hero-actions">
            <Link to="/optin" className="btn btn-white">
              Apply for Mastermind
            </Link>
            <Link to="/contact" className="btn btn-glass">
              Book Your Clarity Call
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Showcase: Mentorship in Action */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="mastermind-visual-split">
            <div className="mm-image-wrap">
              <img
                src="./assets/images/coach/jagat-executive-staircase.jpg"
                alt="Jagat Turkiya Executive Mentor"
                loading="lazy"
              />
            </div>

            <div className="mm-visual-content">
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>
                Transforming Perspectives for Lasting Peace &amp; Clarity
              </h2>
              <p style={{ color: 'var(--text-silver)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                A confidential advisory container for leaders and high-earners. We audit your mental patterns, eliminate self-doubt, and install an unshakeable personal operating system for permanent peace of mind.
              </p>

              <div className="mm-feature-list">
                <div className="mm-feature-item">
                  <div className="mm-feature-icon">✓</div>
                  <div>
                    <h5>1-on-1 Strategic Diagnostic</h5>
                    <p>Direct private reviews with Jagat Turkiya to audit mindset blind spots and life vision.</p>
                  </div>
                </div>

                <div className="mm-feature-item">
                  <div className="mm-feature-icon">✓</div>
                  <div>
                    <h5>Strict Closed-Door Confidentiality</h5>
                    <p>A trusted, private environment protecting your identity and personal decisions.</p>
                  </div>
                </div>

                <div className="mm-feature-item">
                  <div className="mm-feature-icon">✓</div>
                  <div>
                    <h5>Actionable Life Architecture</h5>
                    <p>Structured frameworks engineered for decisive execution and peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Problem & Wealth Insight - Simple, Human, Clear */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title">Earning More Is Only Half The Equation. <br /><span className="serif-font">Changing Your Perspective Changes Everything.</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Why hard work alone doesn't eliminate stress — and what genuine internal transformation looks like.
            </p>
          </div>

          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            borderRadius: '12px',
            padding: 'clamp(2rem, 4vw, 3rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.4rem'
          }}>
            <p style={{ fontSize: '1.08rem', color: '#ffffff', lineHeight: 1.7, fontWeight: 500, margin: 0 }}>
              "Most people don't have an effort problem. They have a perspective, emotional conditioning, and alignment problem."
            </p>

            <p style={{ fontSize: '0.98rem', color: 'var(--text-silver)', lineHeight: 1.75, margin: 0 }}>
              You work relentlessly, take care of your responsibilities, and do your best. Yet inside, the friction persists. Decision fatigue sets in, relationships feel strained by work pressure, and despite financial inflows, you constantly worry about what lies ahead.
            </p>

            <p style={{ fontSize: '0.98rem', color: 'var(--text-silver)', lineHeight: 1.75, margin: 0 }}>
              The truth is simple: <strong>more success without internal alignment just amplifies stress.</strong> Real transformation happens when you step back, rewrite self-limiting beliefs, align your daily decisions with deep purpose, and build an unshakeable mental operating system that keeps you grounded under any circumstance.
            </p>

            <div style={{
              marginTop: '0.5rem',
              padding: '1.25rem 1.5rem',
              background: 'rgba(255, 255, 255, 0.04)',
              borderLeft: '3px solid #ffffff',
              borderRadius: '0 8px 8px 0'
            }}>
              <p style={{ margin: 0, color: '#ffffff', fontSize: '0.96rem', fontWeight: 600, lineHeight: 1.6 }}>
                You don’t need temporary motivation. You need a calm, grounded transformation mentor tailored to your life. That is exactly what Jagat Turkiya and his team coach you to install across 10 intensive weeks with continuous 6-month handholding support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase 2: Collaborative Masterclass & Workshops */}
      <section className="section">
        <div className="container">
          <div className="mastermind-visual-split mastermind-split-reverse">
            <div className="mm-visual-content">
              <h2 style={{ fontSize: 'clamp(1.65rem, 3.2vw, 2.4rem)', marginBottom: '1rem', lineHeight: 1.25 }}>
                Transforming Confusion into Decisive Sovereignty
              </h2>
              <p style={{ color: 'var(--text-silver)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Through guided masterclasses, real coaching trench worksheets, and intimate peer exchanges, you work through each layer of your life and wealth step-by-step.
              </p>
              <p style={{ color: 'var(--text-silver)', fontSize: '1rem', lineHeight: 1.7 }}>
                From dismantling anxiety triggers to constructing multi-horizon security moats — every piece is harmonized so you can live with absolute peace of mind.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <Link to="/optin" className="btn btn-outline">
                  Apply for Mastermind →
                </Link>
              </div>
            </div>

            <div className="mm-image-wrap">
              <img
                src="./assets/images/coach/jagat-coach-seminar.jpg"
                alt="Jagat Turkiya Coach Training Seminar Cohort"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qualifying Criteria - Positive Focus Only */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Is This Right For You?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              The Mastermind is engineered for high-earning leaders, professionals, and seekers who match this profile:
            </p>
          </div>

          <div className="criteria-positive-grid">
            {qualifyingCriteria.map((item, idx) => (
              <div key={idx} className="positive-fit-card">
                <div className="fit-check-icon">✓</div>
                <div className="fit-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership & Execution Team (Digital Dhairya Inspired) */}
      <section className="mm-team-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">
              Meet The C-Suite Behind <br />
              <span className="serif-font">The Jagat Turkiya Mastermind</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Direct mentorship from Jagat Turkiya, backed by our core board driving your operational, technical, and life execution.
            </p>
          </div>

          <div className="mm-stack-container">
            {leadershipTeam.map((member, idx) => (
              <div 
                key={member.id} 
                ref={el => stackCardsRef.current[idx] = el}
                className={`mm-stack-card ${member.image ? 'with-photo' : 'no-photo'}`}
                style={{
                  zIndex: idx + 1
                }}
              >
                {member.image ? (
                  <>
                    <div className="mm-stack-visual-col">
                      <div className="mm-stack-photo-wrap">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          loading="lazy" 
                        />
                      </div>
                    </div>

                    <div className="mm-stack-content-col">
                      <h3 className="mm-stack-name">{member.name}</h3>
                      <p className="mm-team-role-line">{member.role}</p>
                      <p className="mm-stack-desc">{member.desc}</p>
                      <ul className="mm-stack-points">
                        {member.points.map((pt, i) => (
                          <li key={i}>
                            <span className="bullet">✓</span> {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <div className="mm-stack-full-col">
                    <div className="mm-stack-header-wrap">
                      <h3 className="mm-stack-name mm-stack-name-lg">{member.name}</h3>
                      <p className="mm-team-role-line mm-team-role-lg">{member.role}</p>
                    </div>
                    <p className="mm-stack-desc">{member.desc}</p>
                    <ul className="mm-stack-points mm-stack-points-grid">
                      {member.points.map((pt, i) => (
                        <li key={i}>
                          <span className="bullet">✓</span> {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mm-csuite-banner">
            <div>
              <p>
                <strong>The Direct C-Suite Advantage:</strong> Direct mentorship from Jagat Turkiya backed by our full execution machinery. Zero handoffs to junior assistants.
              </p>
            </div>
            <Link to="/optin" className="btn btn-white" style={{ flexShrink: 0, padding: '0.85rem 1.75rem' }}>
              Apply for Mastermind Access
            </Link>
          </div>
        </div>
      </section>

      {/* The 10-Week Journey */}
      <section className="section" id="curriculum">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">The 10-Week Mastermind Roadmap</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '720px' }}>
              A structured 10-week intensive roadmap, followed by continuous handholding support till 6 months to ensure seamless execution.
            </p>
          </div>

          <div className="curriculum-grid">
            {weeks.map((w, idx) => (
              <div key={idx} className="curriculum-card">
                <div className="curriculum-header">
                  <span className="curriculum-week-tag">{w.num}</span>
                </div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get (Deliverables) */}
      <section className="section section-dark">
        <div className="container">
          <div className="deliverables-panel" style={{ background: 'var(--bg-card)' }}>
            <div className="text-center" style={{ maxWidth: '680px', margin: '0 auto 2.5rem' }}>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
                Everything Included in The Mastermind
              </h2>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                This is not a passive video course you forget in a folder. It is an end-to-end, hands-on transformation with direct guided support.
              </p>
            </div>

            <div className="deliverables-grid">
              {deliverables.map((item, i) => (
                <div key={i} className="deliverable-item">
                  <div className="deliverable-check">✓</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <Link to="/optin" className="btn btn-white" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
                Apply for Mastermind
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="section-header text-center">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Straightforward answers about The Mastermind structure and enrollment.
            </p>
          </div>

          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Final Close & CTA */}
      <section className="section section-dark text-center" style={{ padding: '5.5rem 0' }}>
        <div className="container" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '1.25rem' }}>
            Earning is only one part of the equation. <br />
            <span className="serif-font">What are you doing with what you already earn?</span>
          </h2>
          <p style={{ color: 'var(--text-silver)', fontSize: '1.05rem', marginBottom: '2.25rem', lineHeight: 1.7 }}>
            If you are tired of making random financial decisions and ready to give your wealth a clear, permanent direction, The Mastermind is your next step.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-white" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
              Book Consultation &amp; Apply
            </Link>
            <Link to="/about" className="btn btn-glass" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
              Learn About Jagat Turkiya
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
