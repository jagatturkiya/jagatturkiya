import React from 'react';
import { Link } from 'react-router-dom';
import LiquidHero from '../components/LiquidHero';
import FaqAccordion from '../components/FaqAccordion';

export default function Mastermind() {
  const weeks = [
    {
      num: "Week 01",
      title: "Financial Clarity & Diagnostic Audit",
      headline: "Know exactly where you stand before deciding where to go.",
      desc: "A comprehensive baseline diagnostic of your financial reality: exact income channels, recurring expenses, existing investments, hidden commitments, and genuine long-term priorities. Without knowing where you are today, choosing a direction is impossible."
    },
    {
      num: "Week 02",
      title: "Flow of Money & Silent Leakage",
      headline: "Map the inflows, outflows, and plug unnoticed capital drain.",
      desc: "Where is your hard-earned money really going? We map your cash velocity—how much is retained, how much is deployed, and where unnecessary financial leakage is quietly sabotaging wealth accumulation. Objective: give your cash a disciplined architecture."
    },
    {
      num: "Week 03",
      title: "Multi-Horizon Financial Goals",
      headline: "Align financial decisions with real life milestones.",
      desc: "Dismantling random investing. We categorize and articulate your goals across 3 clear horizons: Short-Term (liquidity & peace), Medium-Term (acquisitions & pivots), and Long-Term (generational freedom). The right financial decision for the right life goal."
    },
    {
      num: "Week 04",
      title: "Objective Investment Guidance",
      headline: "Replace random stock tips with a robust evaluation framework.",
      desc: "Stop reacting to social media hype, speculative trends, or unsolicited advice. Learn a structured framework to evaluate how different asset classes, timelines, and vehicle structures align with your risk capacity and wealth objectives."
    },
    {
      num: "Week 05",
      title: "Defensive Risk Management",
      headline: "Master downside protection, because wealth is about retention.",
      desc: "High returns mean nothing without downside protection. How much risk is actually appropriate for your life stage? Which risks must be eliminated, insured, or absorbed? We systematically construct defensive capital moats and emergency firewalls."
    },
    {
      num: "Week 06",
      title: "Strategic Wealth Allocation",
      headline: "Connect isolated investments into one cohesive ecosystem.",
      desc: "Most high earners hold disconnected investments that work against each other. Here, we harmonize your portfolio so that real estate, equity, liquid reserves, and business capital support your broader life priorities as one coordinated system."
    },
    {
      num: "Week 07",
      title: "Executive Financial Decision Making",
      headline: "Eliminate emotional choices with a proven evaluation matrix.",
      desc: "Which opportunity deserves focus right now? Which past decisions should be cut or restructured? We replace impulsive, fear-driven, or ego-based financial decisions with an objective, stress-tested executive decision-making filter."
    },
    {
      num: "Week 08",
      title: "Your Personal Financial Strategy",
      headline: "Synthesize all insights into a customized master blueprint.",
      desc: "Your financial reality is unlike anyone else's. Your income, family obligations, risk tolerance, and aspirations are unique. We tailor the entire framework into a personalized operational strategy built specifically for your balance sheet."
    },
    {
      num: "Week 09",
      title: "Hands-On Practical Implementation",
      headline: "Bridge the gap between strategy and real-world execution.",
      desc: "A great strategy on paper changes nothing. In Week 9, we work with you to execute: reorganizing account structures, setting up automatic allocation protocols, cutting leaks, and putting your financial blueprint into actual practice."
    },
    {
      num: "Week 10",
      title: "Your Wealth Compass: The Operating System",
      headline: "Permanent clarity, total direction, and lifetime peace of mind.",
      desc: "We bring every component together into your permanent financial compass. You now operate with total clarity on cash flow, portfolio direction, risk boundaries, and future choices. You now hold an unshakeable compass for your wealth."
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
    "10-Week Structured Financial Program",
    "Step-by-Step Personal Financial Framework",
    "Objective Investment & Allocation Guidance",
    "Defensive Risk Architecture & Capital Moats",
    "Flow-of-Money & Cash Leakage Audit",
    "Multi-Horizon Goal Planning (Short, Medium, Long-Term)",
    "Guided 1-on-1 Strategy & Audit Sessions",
    "Hands-On Practical Implementation Support",
    "Your Lifetime Personal Wealth Compass Blueprint"
  ];

  const faqItems = [
    {
      question: "Who is Your Wealth Compass specifically built for?",
      answer: "This program is built specifically for high-earning professionals, executives, entrepreneurs, and business owners earning ₹5 Lakh to ₹10 Lakh+ per month who realize that high income alone does not equal wealth. It is for those who want an organized, systematic operating system to manage, protect, and direct their money."
    },
    {
      question: "Is this program about selling me financial products or stocks?",
      answer: "No. Absolutely not. Your Wealth Compass is an independent educational and strategic framework. We do not sell insurance, mutual funds, or stocks, nor do we take commissions. Our sole objective is to give you the clarity, frameworks, and decision-making system to manage your own wealth independently."
    },
    {
      question: "How are the 1-on-1 sessions conducted?",
      answer: "Alongside the 10-week core framework, you receive dedicated one-on-one diagnostic and strategy reviews with Jagat Turkiya and senior advisors. In these sessions, your real numbers, cash flow architecture, and personalized blueprints are evaluated under strict confidentiality."
    },
    {
      question: "What is the weekly time commitment required?",
      answer: "Approximately 2 to 3 hours per week. This includes the weekly strategic module, execution of your practical worksheets, and periodic one-on-one sessions. The program is designed for busy professionals with zero busywork."
    },
    {
      question: "How do I enroll or check if I am eligible?",
      answer: "Click the 'Apply for Mastermind' or 'Book Consultation' button below to schedule an initial diagnostic conversation. We review your current situation to ensure the program is a mutual fit before enrollment."
    }
  ];

  return (
    <div className="mastermind-page">
      {/* Hero Section - Clean, No Capsules */}
      <section className="hero-section text-center">
        <LiquidHero />
        <div className="container hero-container" style={{ maxWidth: '920px', margin: '0 auto' }}>
          <h1 className="hero-title" style={{ marginBottom: '1.25rem', fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)' }}>
            Your Wealth Compass <br />
            <span className="serif-font">Direction for Your Capital &amp; Life</span>
          </h1>

          <p className="hero-lead" style={{ maxWidth: '780px', margin: '0 auto 2.25rem auto' }}>
            Built for operators and high earners making ₹5 Lakh to ₹10 Lakh+ per month who are tired of random decisions and want a clear, systematic operating system to manage, protect, and grow their wealth.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-white">
              Apply for Mastermind
            </Link>
            <a href="#curriculum" className="btn btn-glass">
              Explore 10-Week Roadmap ↓
            </a>
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
                You do not need another speculative tip. You need an institutional-grade operating system. That is exactly what Your Wealth Compass installs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifying Criteria - Positive Focus Only */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Is This Right For You?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Your Wealth Compass is engineered for high-earning leaders and professionals who match this profile:
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

      {/* The 10-Week Journey */}
      <section className="section section-dark" id="curriculum">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">The 10-Week Journey</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '680px' }}>
              A step-by-step master roadmap taking you from unorganized cash flow to an unshakeable financial operating system.
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
      <section className="section">
        <div className="container">
          <div className="deliverables-panel">
            <div className="text-center" style={{ maxWidth: '680px', margin: '0 auto 2.5rem' }}>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
                Everything Included in Your Wealth Compass
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
              <Link to="/contact" className="btn btn-white" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
                Apply for Mastermind
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="section-header text-center">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Straightforward answers about Your Wealth Compass and enrollment.
            </p>
          </div>

          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Final Close & CTA */}
      <section className="section text-center" style={{ padding: '5.5rem 0' }}>
        <div className="container" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '1.25rem' }}>
            Earning is only one part of the equation. <br />
            <span className="serif-font">What are you doing with what you already earn?</span>
          </h2>
          <p style={{ color: 'var(--text-silver)', fontSize: '1.05rem', marginBottom: '2.25rem', lineHeight: 1.7 }}>
            If you are tired of making random financial decisions and ready to give your wealth a clear, permanent direction, Your Wealth Compass is your next step.
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
