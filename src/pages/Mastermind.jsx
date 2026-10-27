import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import LiquidHero from '../components/LiquidHero';
import FaqAccordion from '../components/FaqAccordion';
import { getMastermindDetails, getFaqs } from '../lib/cmsStore';

export default function Mastermind() {
  const [mmData, setMmData] = useState(() => getMastermindDetails());
  const [faqItems, setFaqItems] = useState(() => getFaqs().mastermind || []);
  const [activeIdx, setActiveIdx] = useState(0);
  const teamSectionRef = useRef(null);

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
          const el = teamSectionRef.current;
          if (!el) {
            ticking = false;
            return;
          }

          const rect = el.getBoundingClientRect();
          const headerHeight = window.innerWidth <= 768 ? 64 : 76;
          const scrollableDist = el.offsetHeight - window.innerHeight;

          if (scrollableDist > 0) {
            // How far we have scrolled past the sticky start point
            const scrolled = headerHeight - rect.top;
            const progress = Math.max(0, Math.min(1, scrolled / scrollableDist));

            const numMembers = 5;
            const rawIdx = Math.floor(progress * numMembers);
            const nextIdx = Math.max(0, Math.min(numMembers - 1, rawIdx));

            setActiveIdx(prev => (prev !== nextIdx ? nextIdx : prev));
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

  const goToMember = (idx) => {
    const el = teamSectionRef.current;
    if (!el) return;
    const headerHeight = window.innerWidth <= 768 ? 64 : 76;
    const scrollableDist = el.offsetHeight - window.innerHeight;
    const targetScrolled = (idx + 0.5) * (scrollableDist / 5);
    const targetScrollY = el.offsetTop - headerHeight + targetScrolled;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };

  const weeks = mmData.weeks || [];

  const qualifyingCriteria = [
    {
      title: "Corporate & Industry Professionals",
      desc: "Specialists, managers, and executives who have solid professional standing but face burnout, decision fatigue, and want a grounded personal operating system."
    },
    {
      title: "High-Pressure Practitioners & Leaders",
      desc: "Driven leaders who guide others daily, but recognize the critical need for an objective transformation mentor to dismantle subconscious friction and emotional fatigue."
    },
    {
      title: "Homemakers & Family Stewards",
      desc: "Family pillars who want deep emotional sovereignty, clear communication tools, and the grounding to foster harmonious, resilient homes."
    },
    {
      title: "Seekers of Direction & Lifelong Peace",
      desc: "Driven individuals tired of noise, confusion, and emotional reactivity, ready for an unshakeable operating system that delivers permanent peace of mind."
    }
  ];

  const deliverables = [
    "10-Week Intensive Mastermind Curriculum",
    "Ongoing Handholding & Implementation Support Till 6 Months",
    "Step-by-Step Personal Life & Decisive Operating Blueprint",
    "Radical Identity & Subconscious Bottleneck Removal",
    "Emotional Resilience & High-Pressure Stress Mastery",
    "Cognitive Bandwidth & Mental Energy Audit",
    "Multi-Horizon Life & Purpose Architecture",
    "Guided 1-on-1 Coaching & Diagnostic Sessions With Jagat Turkiya",
    "Your Lifetime Personal Operating System for Unshakeable Peace"
  ];

  const leadershipTeam = [
    {
      id: 'jagat',
      name: 'Jagat Turkiya',
      role: 'Founder & Lead Transformation Coach',
      image: './assets/images/coach/jagat-hero-portrait.png',
      desc: 'Visionary anchor of the Mastermind. Having personally overcome severe adversity and guided 15,000+ individuals, Jagat conducts all private 1-on-1 diagnostics to dismantle deep subconscious bottlenecks, align high-stakes career decisions, and install lasting peace of mind.'
    },
    {
      id: 'savita',
      name: 'Savita Turkiya',
      role: 'Operations Lead',
      desc: 'The operational heart of the Mastermind. Savita manages cohort logistics, scheduling, and direct 6-month mentee handholding—ensuring zero friction, dedicated personal accountability, and an exceptional member experience.'
    },
    {
      id: 'manish',
      name: 'Manish Sharma',
      role: 'Finance & Team Lead',
      desc: 'Drives fiscal governance, organizational discipline, and cross-team alignment. Manish safeguards strategic resources and execution cadence, ensuring our coaching and mastermind programs operate with institutional precision.'
    },
    {
      id: 'neelofar',
      name: 'Neelofar',
      role: 'Editing & Social Media Lead',
      desc: 'The creative storytelling force behind our mission. Neelofar translates transformative mentee breakthroughs into compelling media narratives, expanding our brand reach and inspiring leaders across digital platforms.'
    },
    {
      id: 'raunak',
      name: 'Kumar Raunak',
      role: 'Chief of Marketing & Tech',
      desc: 'The strategic and technological backbone of our ecosystem. Raunak architects our digital systems, high-converting pipelines, and global reach—ensuring every mentee experiences seamless onboarding, cutting-edge tools, and reliable platform execution.'
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
                A confidential transformation container for leaders and high-earners. We audit your mental patterns, eliminate self-doubt, and install an unshakeable personal operating system for permanent peace of mind.
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
              You work relentlessly, take care of your responsibilities, and do your best. Yet inside, the friction persists. Decision fatigue sets in, relationships feel strained by work pressure, and despite outward success, you constantly worry about what lies ahead.
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
                Through guided masterclasses, deep reflective worksheets, and intimate peer exchanges, you work through each layer of your mindset, leadership, and personal life step-by-step.
              </p>
              <p style={{ color: 'var(--text-silver)', fontSize: '1rem', lineHeight: 1.7 }}>
                From dismantling subconscious ceilings to installing daily high-performance rituals — every dimension is harmonized so you can lead with absolute peace of mind.
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

      {/* Executive Leadership & Execution Team - Scroll Pinned Stage */}
      <section ref={teamSectionRef} className="mm-team-scroll-section">
        <div className="mm-sticky-frame">
          <div className="container" style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center', width: '100%' }}>
            {/* Section Header */}
            <div className="section-header text-center" style={{ marginBottom: '1.5rem' }}>
              <h2 className="section-title">
                Meet The Team Behind <br />
                <span className="serif-font">The Jagat Turkiya Mastermind</span>
              </h2>
              <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
                Direct mentorship from Jagat Turkiya, backed by our core board driving your operational, technical, and life execution.
              </p>
            </div>

            {/* Pinned Stage Stack (One member at a time on scroll, NO cards, NO capsules, NO boxes) */}
            <div className="mm-stage-stack">
              {leadershipTeam.map((member, idx) => {
                const stateClass = idx === activeIdx ? 'is-active' : idx < activeIdx ? 'is-past' : 'is-upcoming';
                return (
                  <div
                    key={member.id}
                    className={`mm-stage-item ${stateClass} ${member.image ? 'has-photo' : 'no-photo'}`}
                  >
                    {member.image && (
                      <div className="mm-stage-photo">
                        <img
                          src={member.image}
                          alt={member.name}
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="mm-stage-content">
                      <h3 className="mm-stage-name">{member.name}</h3>
                      <p className="mm-stage-role">{member.role}</p>
                      <p className="mm-stage-desc">{member.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Subtle Progress Dots */}
            <div className="mm-stage-dots">
              {leadershipTeam.map((m, idx) => (
                <button
                  key={m.id}
                  type="button"
                  className={`mm-stage-dot ${idx === activeIdx ? 'active' : ''}`}
                  onClick={() => goToMember(idx)}
                  aria-label={`View ${m.name}`}
                  title={m.name}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* C-Suite Direct Advantage Banner */}
      <div className="container" style={{ maxWidth: '880px', margin: '0 auto 4rem' }}>
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
            External success is only one part of the journey. <br />
            <span className="serif-font">How are you mastering your mind, energy &amp; inner peace?</span>
          </h2>
          <p style={{ color: 'var(--text-silver)', fontSize: '1.05rem', marginBottom: '2.25rem', lineHeight: 1.7 }}>
            If you are tired of internal friction, chronic overthinking, and second-guessing, and ready to give your life an unshakeable, permanent direction, The Mastermind is your next step.
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
