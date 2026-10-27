import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import FunnelHeader from '../components/FunnelHeader';
import FunnelFooter from '../components/FunnelFooter';
import HlsPlayer from '../components/HlsPlayer';
import FaqAccordion from '../components/FaqAccordion';
import { getMastermindDetails, getFaqs, recordLead } from '../lib/cmsStore';

export default function ExclusiveLandingPage() {
  const [searchParams] = useSearchParams();
  const [mmData, setMmData] = useState(() => getMastermindDetails());
  const [faqItems, setFaqItems] = useState(() => getFaqs().mastermind || []);

  // Stored lead from optin or prior registration
  const [savedLead, setSavedLead] = useState(() => {
    try {
      const stored = localStorage.getItem('jt_vsl_lead');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [statusNotice, setStatusNotice] = useState('');

  const [formData, setFormData] = useState({
    name: savedLead?.name || '',
    email: savedLead?.email || '',
    phone: savedLead?.phone || '',
    message: ''
  });

  // Scroll stage for Leadership Team
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

  // Sync scroll on leadership board
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

  const handleOpenConnect = () => {
    // If user already has submitted details, show the confirmation screen directly with Edit option
    if (savedLead?.name && savedLead?.phone) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setSubmitting(true);
    try {
      const cleanData = {
        name: formData.name.trim().slice(0, 60),
        email: formData.email.trim().slice(0, 80),
        phone: formData.phone.trim().slice(0, 15),
        message: formData.message.trim().slice(0, 500)
      };

      // 1. Record lead to Admin CRM & Database
      await recordLead({
        name: cleanData.name,
        email: cleanData.email,
        phone: cleanData.phone,
        message: cleanData.message || 'Requested Exclusive Mastermind Consultation',
        source: 'Exclusive Landing Page',
        program: 'The Transformation Mastermind',
        preferred_time: 'Priority VIP Consultation'
      });

      // 2. Persist in local storage for instant recognition
      const updatedLead = {
        ...cleanData,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('jt_vsl_lead', JSON.stringify(updatedLead));
      setSavedLead(updatedLead);

      setStatusNotice('Details updated successfully! Our team will connect with you shortly.');
      setIsEditing(false);
    } catch {
      // fallback
    }
    setSubmitting(false);
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
    <div className="exclusive-landing-page" style={{
      minHeight: '100vh',
      backgroundColor: '#050505',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      {/* Plain Non-Clickable Funnel Header */}
      <FunnelHeader />

      {/* Hero Section with VSL Video */}
      <section className="section" style={{ paddingTop: 'clamp(2.5rem, 5vw, 4rem)', paddingBottom: '3.5rem' }}>
        <div className="container" style={{ maxWidth: '1020px', margin: '0 auto', textAlign: 'center' }}>
          
          <h1 className="hero-title" style={{ maxWidth: '920px', margin: '0 auto 1.25rem', lineHeight: 1.18 }}>
            How High-Performing Leaders &amp; Executives <br />
            <span className="serif-font">Break Internal Ceilings &amp; Build Unshakeable Peace of Mind</span>
          </h1>

          <p className="hero-lead" style={{ maxWidth: '720px', margin: '0 auto 2.5rem', color: 'var(--text-silver)', fontSize: '1.08rem' }}>
            A confidential 10-week container followed by 6 months of direct guidance. Private 1-on-1 diagnostics with Coach Jagat Turkiya to dismantle mental friction, conquer self-doubt, and build a permanent personal operating system.
          </p>

          {/* VSL Video Container - Clean Single Player, Perfectly Fit */}
          <div style={{
            width: '100%',
            maxWidth: '960px',
            margin: '0 auto 2.5rem'
          }}>
            <HlsPlayer autoPlay={true} trimEndSeconds={60} src="https://pub-ba6edddb861846b39535d2d0cabfeeea.r2.dev/Jagat%20Video%202%20compressed.mp4" />
          </div>

          {/* Main Primary Connect CTA Button - Crisp, Clean, Zero Blur Glow */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem', marginBottom: '1rem' }}>
            <button
              type="button"
              onClick={handleOpenConnect}
              className="btn btn-white"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
                maxWidth: '440px',
                padding: '1.25rem 2.5rem',
                fontSize: '1.15rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                borderRadius: '8px',
                backgroundColor: '#ffffff',
                color: '#080808',
                border: '2px solid #ffffff',
                boxShadow: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                boxSizing: 'border-box'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#e4e4e7';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Connect With Team &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Visual Showcase: Mentorship in Action */}
      <section className="section section-dark" style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
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

              <div style={{ marginTop: '2rem' }}>
                <button
                  type="button"
                  onClick={handleOpenConnect}
                  className="btn btn-white"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '1.1rem 2.5rem',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: '#080808',
                    backgroundColor: '#ffffff',
                    border: '2px solid #ffffff',
                    borderRadius: '6px',
                    boxShadow: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#e4e4e7';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Connect With Team &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Problem & Wealth Insight */}
      <section className="section">
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
            borderRadius: '14px',
            padding: 'clamp(2rem, 4vw, 3rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.4rem'
          }}>
            <p style={{ fontSize: '1.12rem', color: '#ffffff', lineHeight: 1.7, fontWeight: 500, margin: 0 }}>
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
      <section className="section section-dark" style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
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
                <button
                  type="button"
                  onClick={handleOpenConnect}
                  className="btn btn-white"
                  style={{
                    padding: '1rem 2.25rem',
                    fontSize: '1rem',
                    fontWeight: 700,
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase'
                  }}
                >
                  Connect With Team &rarr;
                </button>
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

      {/* Qualifying Criteria */}
      <section className="section">
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

      {/* Leadership Board - Scroll Pinned Stage */}
      <section ref={teamSectionRef} className="mm-team-scroll-section">
        <div className="mm-sticky-frame">
          <div className="container" style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center', width: '100%' }}>
            <div className="section-header text-center" style={{ marginBottom: '1.5rem' }}>
              <h2 className="section-title">
                Meet The Team Behind <br />
                <span className="serif-font">The Jagat Turkiya Mastermind</span>
              </h2>
              <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
                Direct mentorship from Jagat Turkiya, backed by our core board driving your operational, technical, and life execution.
              </p>
            </div>

            {/* Pinned Stage Stack */}
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
          <button
            type="button"
            onClick={handleOpenConnect}
            className="btn btn-white"
            style={{
              flexShrink: 0,
              padding: '1rem 2rem',
              fontWeight: 700,
              letterSpacing: '0.03em',
              textTransform: 'uppercase'
            }}
          >
            Connect With Team &rarr;
          </button>
        </div>
      </div>

      {/* The 10-Week Journey */}
      <section className="section" id="curriculum" style={{ borderTop: '1px solid var(--border-subtle)' }}>
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

      {/* Deliverables Panel */}
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
              <button
                type="button"
                onClick={handleOpenConnect}
                className="btn btn-white"
                style={{
                  padding: '1.1rem 2.5rem',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase'
                }}
              >
                Connect With Team &rarr;
              </button>
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
      <section className="section section-dark text-center" style={{ padding: '5.5rem 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '1.25rem' }}>
            External success is only one part of the journey. <br />
            <span className="serif-font">How are you mastering your mind, energy &amp; inner peace?</span>
          </h2>
          <p style={{ color: 'var(--text-silver)', fontSize: '1.05rem', marginBottom: '2.25rem', lineHeight: 1.7 }}>
            If you are tired of internal friction, chronic overthinking, and second-guessing, and ready to give your life an unshakeable, permanent direction, The Mastermind is your next step.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={handleOpenConnect}
              className="btn btn-white"
              style={{
                padding: '1.2rem 2.8rem',
                fontSize: '1.1rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                boxShadow: 'none'
              }}
            >
              Connect With Team &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          CONNECT & CONFIRMATION MODAL ("Our team will connect u shortly" / Edit Form)
          ========================================================================== */}
      {showModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.88)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 999999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.25rem'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '560px',
            backgroundColor: '#0c0c0f',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            borderRadius: '16px',
            padding: 'clamp(1.75rem, 4vw, 2.5rem)',
            boxShadow: '0 25px 65px rgba(0, 0, 0, 0.9)',
            boxSizing: 'border-box'
          }}>
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: 'transparent',
                border: 'none',
                color: '#888888',
                fontSize: '1.5rem',
                cursor: 'pointer',
                lineHeight: 1,
                padding: '4px'
              }}
              aria-label="Close"
            >
              ✕
            </button>

            {/* Notification Alert (if any) */}
            {statusNotice && (
              <div style={{
                backgroundColor: '#064e3b',
                border: '1px solid #10b981',
                color: '#d1fae5',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                marginBottom: '1.25rem',
                fontSize: '0.85rem',
                textAlign: 'center'
              }}>
                ✓ {statusNotice}
              </div>
            )}

            {/* MODE 1: CONFIRMATION VIEW (Our team will connect u shortly) */}
            {!isEditing && savedLead?.name ? (
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  color: '#10b981',
                  fontSize: '1.8rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  ✓
                </div>

                <h3 style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: 'clamp(1.5rem, 3vw, 1.85rem)',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.65rem',
                  lineHeight: 1.25
                }}>
                  Our Team Will Connect With You Shortly
                </h3>

                <p style={{
                  color: 'var(--text-silver)',
                  fontSize: '0.94rem',
                  lineHeight: 1.65,
                  marginBottom: '1.75rem'
                }}>
                  Thank you, <strong>{savedLead.name}</strong>. Your consultation request has been prioritised for Coach Jagat's executive coaching team. We review every profile confidentially and will reach out shortly.
                </p>

                {/* Stored Details Overview Box */}
                <div style={{
                  backgroundColor: '#141418',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '1.25rem 1.4rem',
                  textAlign: 'left',
                  marginBottom: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem' }}>
                    <span style={{ color: '#888888' }}>Full Name:</span>
                    <strong style={{ color: '#ffffff' }}>{savedLead.name}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem' }}>
                    <span style={{ color: '#888888' }}>Phone / WhatsApp:</span>
                    <strong style={{ color: '#10b981' }}>{savedLead.phone}</strong>
                  </div>
                  {savedLead.email && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem' }}>
                      <span style={{ color: '#888888' }}>Email Address:</span>
                      <strong style={{ color: '#ffffff' }}>{savedLead.email}</strong>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem' }}>
                    <span style={{ color: '#888888' }}>Status:</span>
                    <span style={{ color: '#38bdf8', fontWeight: 600 }}>● Priority Scheduled</span>
                  </div>
                </div>

                {/* Action Buttons: Edit Form or Done */}
                <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setStatusNotice('');
                      setIsEditing(true);
                    }}
                    className="btn btn-outline"
                    style={{ padding: '0.8rem 1.6rem', fontSize: '0.9rem' }}
                  >
                    Edit Form / Update Details
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="btn btn-white"
                    style={{ padding: '0.8rem 1.85rem', fontSize: '0.9rem' }}
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              /* MODE 2: FORM INPUT & EDIT VIEW */
              <div>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.4rem'
                  }}>
                    {savedLead?.name ? 'Edit Your Consultation Details' : 'Connect With Coach Jagat’s Team'}
                  </h3>
                  <p style={{ color: 'var(--text-silver)', fontSize: '0.88rem', margin: 0 }}>
                    Enter or verify your details below. Our team will connect with you shortly.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit}>
                  <div className="form-group" style={{ marginBottom: '1.15rem' }}>
                    <label className="form-label" style={{ fontSize: '0.82rem', marginBottom: '4px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      maxLength={60}
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Your full name"
                      className="form-control"
                      style={{ fontSize: '16px', padding: '0.8rem 0.95rem' }}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.15rem' }}>
                    <label className="form-label" style={{ fontSize: '0.82rem', marginBottom: '4px' }}>
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      maxLength={15}
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="Enter your phone or WhatsApp"
                      className="form-control"
                      style={{ fontSize: '16px', padding: '0.8rem 0.95rem' }}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.15rem' }}>
                    <label className="form-label" style={{ fontSize: '0.82rem', marginBottom: '4px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      maxLength={80}
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="name@email.com"
                      className="form-control"
                      style={{ fontSize: '16px', padding: '0.8rem 0.95rem' }}
                    />
                  </div>



                  <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                    {savedLead?.name && (
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="btn btn-outline"
                        style={{ padding: '0.75rem 1.25rem', fontSize: '0.88rem' }}
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn btn-white"
                      style={{ padding: '0.75rem 1.85rem', fontSize: '0.88rem', fontWeight: 700 }}
                    >
                      {submitting ? 'Saving Details...' : savedLead?.name ? 'Update & Save' : 'Connect With Team'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Plain Funnel Footer */}
      <FunnelFooter />
    </div>
  );
}
