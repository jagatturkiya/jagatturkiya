import React from 'react';
import { Link } from 'react-router-dom';
import LiquidHero from '../components/LiquidHero';
import FaqAccordion from '../components/FaqAccordion';

export default function Mastermind() {
  const weeks = [
    {
      num: "Week 01",
      title: "Know Your Identity",
      desc: "Discover what drives you to do what you do. These simple question-based tools help you unlock financial clarity, personal transformation, and how each area of your life aligns."
    },
    {
      num: "Week 02",
      title: "Flow of Money & Silent Leakage",
      desc: "Map your true cash flow and plug unnoticed leaks. Understand the psychology behind your spending and install simple controls to keep your capital safe."
    },
    {
      num: "Week 03",
      title: "Multi-Horizon Financial Goals",
      desc: "Define what you want your money to accomplish across three clear timelines: immediate peace of mind, medium-term family milestones, and generational freedom."
    },
    {
      num: "Week 04",
      title: "Objective Investment Guidance",
      desc: "Stop reacting to market noise and stock tips. Learn a practical, objective framework to assess real risk capacity, time horizons, and asset quality."
    },
    {
      num: "Week 05",
      title: "Defensive Risk & Capital Moats",
      desc: "Master downside protection. Build unshakeable emergency buffers and insurance firewalls so market shocks never threaten your family’s security."
    },
    {
      num: "Week 06",
      title: "Cohesive Wealth Allocation",
      desc: "Connect scattered investments into one balanced ecosystem where liquid reserves, real estate, and equities work together seamlessly."
    },
    {
      num: "Week 07",
      title: "High-Stakes Decision Making",
      desc: "Eliminate emotional, impulsive financial choices. Install a stress-tested evaluation matrix to decide what to fund, cut, or scale with absolute calm."
    },
    {
      num: "Week 08",
      title: "Your Custom Financial Blueprint",
      desc: "Synthesize your unique cash flow, commitments, and family priorities into a single personalized strategy built exclusively for you."
    },
    {
      num: "Week 09",
      title: "Hands-On Execution & Restructuring",
      desc: "Put strategy into live action. Reorganize account allocations, automate capital defense protocols, and implement your blueprint step-by-step."
    },
    {
      num: "Week 10",
      title: "Your Permanent Operating System",
      desc: "Integrate every layer into an unshakeable operating system—giving you lifelong clarity, daily focus, and permanent financial peace of mind."
    }
  ];

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

  const faqItems = [
    {
      question: "Who is The Mastermind specifically built for?",
      answer: "The Mastermind is crafted for driven working professionals, financial practitioners, bankers, insurance advisors, and family wealth custodians who have money coming in and are ready to turn it into enduring, protected wealth. It is for anyone who wants an organized, systematic operating system to manage, protect, and multiply their capital with complete peace of mind."
    },
    {
      question: "Is this program about selling financial products or stocks?",
      answer: "No. Absolutely not. The Mastermind is an independent educational and strategic advisory framework. We do not sell insurance, mutual funds, or stocks, nor do we take commissions. Our sole objective is to give you the clarity, frameworks, and decision-making system to manage your own wealth independently."
    },
    {
      question: "How are the sessions and handholding conducted?",
      answer: "You go through a structured 10-week intensive curriculum, paired with private 1-on-1 diagnostic sessions with Jagat Turkiya. Following the 10 weeks, you receive continuous handholding support till 6 months to review your execution, adapt your blueprint, and resolve any real-world hurdles."
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

          <p className="hero-lead" style={{ maxWidth: '720px', margin: '0 auto 2rem auto', fontSize: '1.15rem' }}>
            10-week intensive program followed by dedicated handholding support till 6 months. Direction, structure, and lasting peace of mind.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/optin" className="btn btn-white">
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
              Explore 10-Week Roadmap ↓
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
                Personal Advisory for Lasting Wealth &amp; Peace of Mind
              </h2>
              <p style={{ color: 'var(--text-silver)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                The Mastermind is an exclusive, closed-door coaching container designed for ambitious professionals, financial practitioners, and dedicated family stewards who are earning well, managing money, and want to build lasting, compounding wealth with absolute clarity.
              </p>
              <p style={{ color: 'var(--text-silver)', fontSize: '1rem', lineHeight: 1.7 }}>
                You do not need speculative trends, confusing jargon, or random tips. You need a structured, confidential setting to audit your numbers, protect against downside risk, and direct your hard-earned capital with unshakeable confidence.
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

      {/* The Core Problem & Wealth Insight - Simple, Human, Clear */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title">Earning Money Is Only Half the Story. <br /><span className="serif-font">Building Wealth Takes a System.</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Why having good money coming in doesn’t automatically bring financial freedom—and what actually does.
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
              "Most people don't have an income problem. They have a clarity and system problem."
            </p>

            <p style={{ fontSize: '0.98rem', color: 'var(--text-silver)', lineHeight: 1.75, margin: 0 }}>
              You work hard, you bring money in, and you save what you can. But as time goes on, life only seems to get more complicated. Taxes take a bite, household expenses expand, and capital ends up parked across disconnected policies, mutual funds, and accounts with no clear master plan.
            </p>

            <p style={{ fontSize: '0.98rem', color: 'var(--text-silver)', lineHeight: 1.75, margin: 0 }}>
              Many people spend their days managing capital or targets for others, yet their own personal family wealth stays unstructured. Others run demanding corporate careers or guide the household and want absolute security for their children's future, but feel held back by conflicting advice, fear of mistakes, or lack of time.
            </p>

            <p style={{ fontSize: '0.98rem', color: 'var(--text-silver)', lineHeight: 1.75, margin: 0 }}>
              The truth is simple: <strong>more money without a clear direction just creates more stress.</strong> The goal isn't just to work longer hours or take blind speculative risks. The real breakthrough happens when every rupee you touch is given a defined purpose—protecting your family, compounding quietly in the background, and giving you genuine peace of mind.
            </p>

            <div style={{
              marginTop: '0.5rem',
              padding: '1.25rem 1.5rem',
              background: 'rgba(255, 255, 255, 0.04)',
              borderLeft: '3px solid #ffffff',
              borderRadius: '0 8px 8px 0'
            }}>
              <p style={{ margin: 0, color: '#ffffff', fontSize: '0.96rem', fontWeight: 600, lineHeight: 1.6 }}>
                You don’t need complicated financial theories. You need a calm, practical roadmap tailored to your life. That is exactly what Jagat Turkiya coaches you to install across a 10-week intensive program with continuous handholding support till 6 months.
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
                <Link to="/optin" className="btn btn-outline">
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
