import React from 'react';
import { Link } from 'react-router-dom';
import LiquidHero from '../components/LiquidHero';
import FaqAccordion from '../components/FaqAccordion';

export default function Mastermind() {
  const weeks = [
    {
      num: "Milestone 01",
      title: "Financial Clarity & Diagnostic Audit",
      headline: "Know exactly where you stand before deciding where to go.",
      desc: "A comprehensive baseline diagnostic of your financial reality: exact income channels, recurring expenses, existing investments, hidden commitments, and genuine long-term priorities. Without knowing where you are today, choosing a direction is impossible."
    },
    {
      num: "Milestone 02",
      title: "Flow of Money & Silent Leakage",
      headline: "Map the inflows, outflows, and plug unnoticed capital drain.",
      desc: "Where is your hard-earned money really going? We map your cash velocity—how much is retained, how much is deployed, and where unnecessary financial leakage is quietly sabotaging wealth accumulation. Objective: give your cash a disciplined architecture."
    },
    {
      num: "Milestone 03",
      title: "Multi-Horizon Financial Goals",
      headline: "Align financial decisions with real life milestones.",
      desc: "Dismantling random investing. We categorize and articulate your goals across 3 clear horizons: Short-Term (liquidity & peace), Medium-Term (acquisitions & pivots), and Long-Term (generational freedom). The right financial decision for the right life goal."
    },
    {
      num: "Milestone 04",
      title: "Objective Investment Guidance",
      headline: "Replace random stock tips with a robust evaluation framework.",
      desc: "Stop reacting to social media hype, speculative trends, or unsolicited advice. Learn a structured framework to evaluate how different asset classes, timelines, and vehicle structures align with your risk capacity and wealth objectives."
    },
    {
      num: "Milestone 05",
      title: "Defensive Risk Management",
      headline: "Master downside protection, because wealth is about retention.",
      desc: "High returns mean nothing without downside protection. How much risk is actually appropriate for your life stage? Which risks must be eliminated, insured, or absorbed? We systematically construct defensive capital moats and emergency firewalls."
    },
    {
      num: "Milestone 06",
      title: "Strategic Wealth Allocation",
      headline: "Connect isolated investments into one cohesive ecosystem.",
      desc: "Most high earners hold disconnected investments that work against each other. Here, we harmonize your portfolio so that real estate, equity, liquid reserves, and business capital support your broader life priorities as one coordinated system."
    },
    {
      num: "Milestone 07",
      title: "Executive Financial Decision Making",
      headline: "Eliminate emotional choices with a proven evaluation matrix.",
      desc: "Which opportunity deserves focus right now? Which past decisions should be cut or restructured? We replace impulsive, fear-driven, or ego-based financial decisions with an objective, stress-tested executive decision-making filter."
    },
    {
      num: "Milestone 08",
      title: "Your Personal Financial Strategy",
      headline: "Synthesize all insights into a customized master blueprint.",
      desc: "Your financial reality is unlike anyone else's. Your income, family obligations, risk tolerance, and aspirations are unique. We tailor the entire framework into a personalized operational strategy built specifically for your balance sheet."
    },
    {
      num: "Milestone 09",
      title: "Hands-On Practical Implementation",
      headline: "Bridge the gap between strategy and real-world execution.",
      desc: "A great strategy on paper changes nothing. In Week 9, we work with you to execute: reorganizing account structures, setting up automatic allocation protocols, cutting leaks, and putting your financial blueprint into actual practice."
    },
    {
      num: "Milestone 10",
      title: "Your Permanent Financial Operating System",
      headline: "Complete clarity, total direction, and lifetime peace of mind.",
      desc: "We bring every component together into your permanent financial operating system. You now operate with total clarity on cash flow, portfolio direction, risk boundaries, and future choices. You now hold an unshakeable compass for your capital."
    }
  ];

  const qualifyingCriteria = [
    {
      title: "High-Earning Professionals & Founders",
      desc: "Earning ₹5 Lakh to ₹10 Lakh or more per month, looking to transition from reactive earning to institutional-grade wealth management."
    },
    {
      title: "Seekers of Direction & Structure",
      desc: "High earners who feel substantial money comes in every month, but quietly slips away without a defined, transparent destination."
    },
    {
      title: "Risk & Capital Allocation Clarity",
      desc: "Leaders who want objective answers on how much capital to invest, where to safely park reserves, and how to eliminate downside risks."
    },
    {
      title: "Enduring Family Wealth Architecture",
      desc: "Individuals ready to install an orderly, disciplined financial system that protects their family security and delivers complete peace of mind."
    }
  ];

  const deliverables = [
    "6-Month Structured Mastermind & Mentorship Framework",
    "Step-by-Step Personal Financial & Life Blueprint",
    "Objective Investment & Allocation Guidance",
    "Defensive Risk Architecture & Capital Moats",
    "Flow-of-Money & Cash Leakage Audit",
    "Multi-Horizon Goal Planning (Short, Medium, Long-Term)",
    "Guided 1-on-1 Coaching & Diagnostic Sessions With Jagat Turkiya",
    "Hands-On Practical Implementation Support",
    "Your Lifetime Wealth & Mental Operating System"
  ];

  const faqItems = [
    {
      question: "Who is The Mastermind specifically built for?",
      answer: "The Mastermind is designed for high-earning professionals, executives, entrepreneurs, and business owners earning ₹5 Lakh to ₹10 Lakh+ per month who realize that high income alone does not equal wealth. It is for leaders who want an organized, systematic operating system to manage, protect, and direct their capital."
    },
    {
      question: "Is this program about selling financial products or stocks?",
      answer: "No. Absolutely not. The Mastermind is an independent educational and strategic advisory framework. We do not sell insurance, mutual funds, or stocks, nor do we take commissions. Our sole objective is to give you the clarity, frameworks, and decision-making system to manage your own wealth independently."
    },
    {
      question: "How are the 1-on-1 sessions conducted?",
      answer: "Alongside the 6-month core curriculum, you receive dedicated one-on-one diagnostic and strategy coaching sessions with Jagat Turkiya and senior advisors. In these sessions, your real numbers, cash flow architecture, and personalized blueprints are evaluated under strict confidentiality."
    },
    {
      question: "What is the weekly time commitment required?",
      answer: "Approximately 2 to 3 hours per week. This includes the strategic session, execution of your practical worksheets, and periodic one-on-one reviews. The program is built for busy executives with zero busywork."
    },
    {
      question: "How do I enroll or check eligibility?",
      answer: "Click the 'Apply for Mastermind' or 'Book Consultation' button below to schedule an initial diagnostic conversation. We review your current situation to ensure the program is a mutual fit before enrollment."
    }
  ];

  return (
    <div className="mastermind-page">
      {/* Hero Section - Short Headline, Shorter Sub-headline */}
      <section className="hero-section text-center">
        <LiquidHero />
        <div className="container hero-container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <h1 className="hero-title" style={{ marginBottom: '0.85rem', fontSize: 'clamp(2.6rem, 5vw, 4rem)' }}>
            The Executive Mastermind
          </h1>

          <p className="hero-lead" style={{ maxWidth: '680px', margin: '0 auto 2rem auto', fontSize: '1.15rem' }}>
            A 6-month comprehensive coaching container with Jagat Turkiya. Direction, structure, and peace of mind for high-earning leaders.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/form" className="btn btn-white">
              Apply for Mastermind
            </Link>
            <button
              type="button"
              className="btn btn-glass"
              onClick={() => {
                const el = document.getElementById('curriculum');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore 6-Month Roadmap ↓
            </button>
          </div>
        </div>
      </section>

      {/* Visual Showcase: Mentorship in Action */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="mastermind-visual-split">
            <div className="mm-image-wrap">
              <img
                src="./assets/images/jagat-speaking.webp"
                alt="Jagat Turkiya Mentoring Leaders"
                loading="lazy"
              />
            </div>

            <div className="mm-visual-content">
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>
                Private Advisory for Serious Leaders
              </h2>
              <p style={{ color: 'var(--text-silver)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                The Mastermind is an exclusive, closed-door advisory experience designed for executives, founders, and operators earning ₹5 Lakh to ₹10 Lakh+ per month who want an institutional-grade operating system for their wealth.
              </p>
              <p style={{ color: 'var(--text-silver)', fontSize: '1rem', lineHeight: 1.7 }}>
                You do not need more financial noise, speculation, or random tips. You need a structured, confidential setting to audit your numbers, protect against downside risk, and direct your hard-earned money with unshakeable clarity.
              </p>

              <div className="mm-feature-list">
                <div className="mm-feature-item">
                  <div className="mm-feature-icon">✓</div>
                  <div>
                    <h5>1-on-1 Strategic Diagnostic</h5>
                    <p>Direct private reviews with Jagat Turkiya to audit cash flow, commitments, and blind spots.</p>
                  </div>
                </div>

                <div className="mm-feature-item">
                  <div className="mm-feature-icon">✓</div>
                  <div>
                    <h5>Strict Closed-Door Confidentiality</h5>
                    <p>A trusted, private environment protecting your numbers, balance sheet, and family security.</p>
                  </div>
                </div>

                <div className="mm-feature-item">
                  <div className="mm-feature-icon">✓</div>
                  <div>
                    <h5>Actionable Institutional Architecture</h5>
                    <p>10 structured modules engineered for execution, capital defense, and permanent peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Problem - Pure English */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title">High Income is Not Wealth</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '680px' }}>
              Why earning ₹5L to ₹10L+ per month without a system creates greater complexity, not greater freedom.
            </p>
          </div>

          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(2rem, 4vw, 3rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-white)', lineHeight: 1.7, fontWeight: 500 }}>
              "You might be earning ₹5 Lakh to ₹10 Lakh or more every single month. But if your cash flow isn't structured, if your investments lack a defined purpose, and if you are taking blind risks or avoiding risk altogether—a high income alone will never build lasting wealth."
            </p>

            <p style={{ fontSize: '0.98rem', color: 'var(--text-silver)', lineHeight: 1.7 }}>
              As income increases, financial complexity multiplies. Living expenses expand, tax liabilities rise, and diverse investment options demand attention. Without a system, high income often leads to higher stress, not higher freedom.
            </p>

            <p style={{ fontSize: '0.98rem', color: 'var(--text-silver)', lineHeight: 1.7 }}>
              Eventually, the real question is no longer: <em>"How do I make more money?"</em><br />
              The decisive challenge becomes: <strong>"How do I properly protect, direct, and manage the capital I am already earning?"</strong>
            </p>

            <div style={{
              marginTop: '1rem',
              padding: '1.25rem 1.5rem',
              background: 'rgba(255, 255, 255, 0.04)',
              borderLeft: '3px solid #ffffff',
              borderRadius: '0 8px 8px 0'
            }}>
              <p style={{ margin: 0, color: '#ffffff', fontSize: '1rem', fontWeight: 600 }}>
                You do not need another speculative tip. You need an institutional-grade operating system. That is exactly what The Mastermind installs.
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
                Transforming Ambiguity into Sovereignty
              </h2>
              <p style={{ color: 'var(--text-silver)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Through guided masterclasses and personalized worksheet reviews, you work through each layer of your personal finance step-by-step.
              </p>
              <p style={{ color: 'var(--text-silver)', fontSize: '1rem', lineHeight: 1.7 }}>
                From plugging silent cash drain and structuring defensive capital moats to harmonizing real estate, liquid reserves, and equities—every piece works together to create enduring security.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <Link to="/form" className="btn btn-outline">
                  Apply for Mastermind →
                </Link>
              </div>
            </div>

            <div className="mm-image-wrap">
              <img
                src="./assets/images/seminar.webp"
                alt="Jagat Turkiya Live Strategy Session"
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
              The Mastermind is engineered for high-earning leaders and professionals who match this profile:
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

      {/* The 6-Month Journey */}
      <section className="section" id="curriculum">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">The 6-Month Mastermind Roadmap</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '680px' }}>
              A comprehensive 10-milestone roadmap taking you from unorganized cash flow to an unshakeable life and financial operating system.
            </p>
          </div>

          <div className="curriculum-grid">
            {weeks.map((w, idx) => (
              <div key={idx} className="curriculum-card">
                <div className="curriculum-header">
                  <span className="curriculum-week-tag">{w.num}</span>
                </div>
                <h4>{w.title}</h4>
                <p style={{ color: '#ffffff', fontWeight: 500, fontSize: '0.95rem', marginBottom: '0.65rem' }}>
                  {w.headline}
                </p>
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
              <Link to="/form" className="btn btn-white" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
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
