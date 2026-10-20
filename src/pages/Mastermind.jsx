import React from 'react';
import { Link } from 'react-router-dom';
import LiquidHero from '../components/LiquidHero';
import FaqAccordion from '../components/FaqAccordion';

export default function Mastermind() {
  const books = [
    {
      title: "Kill That Black Dragon",
      genre: "Self Mastery & Psychological Sovereignty",
      img: "./assets/images/book-dragon.webp",
      desc: "A systematic psychological manual for dismantling internal friction, self-sabotaging patterns, and unconscious resistance holding back high achievers.",
      link: "https://www.amazon.in/dp/B08F2432W3"
    },
    {
      title: "Asli Nayak Kaun",
      genre: "Leadership & Internal Conviction",
      img: "./assets/images/book-nayak.webp",
      desc: "Deconstructs the core leadership principles of genuine sovereignty, personal responsibility, and ethical power in modern enterprise.",
      link: "https://www.amazon.in/dp/B08F22K6S9"
    },
    {
      title: "Langotiya Yaar",
      genre: "Relational Dynamics & Emotional Grounding",
      img: "./assets/images/book-langotiya.webp",
      desc: "An exploration of human connection, enduring bonds, and the critical role of authentic relationships in balancing intense professional ambition.",
      link: "https://www.amazon.in/dp/B08F22S9KM"
    },
    {
      title: "Nadar Rishte",
      genre: "High EQ & Family Architecture",
      img: "./assets/images/book-nadar.webp",
      desc: "Addresses the invisible cracks in relationships caused by corporate pressure, establishing proven communication frameworks for resilient partnerships.",
      link: "https://www.amazon.in/dp/B08F23CSW7"
    },
    {
      title: "Anubhav Sagar",
      genre: "Wisdom Syntheses & Life Strategy",
      img: "./assets/images/book-anubhav.webp",
      desc: "A profound compendium of synthesized lessons from 15+ years in corporate IT and coaching high-net-worth entrepreneurs navigating extreme high-stakes crossroads.",
      link: "https://www.amazon.in/dp/B08F22X54M"
    }
  ];

  const modules = [
    {
      num: "01",
      title: "The Financial Operating System & Cashflow Firewalls",
      desc: "Installing hard structural barriers between personal net worth and operating company volatility. Auditing silent capital leaks, tax inefficiencies, and unnecessary operational risks."
    },
    {
      num: "02",
      title: "Defensive Wealth Architecture & Runway Engineering",
      desc: "Calculating your true emergency runway multiplier. Structuring a multi-tier liquid fortress ensuring you never make forced, low-leverage business decisions out of cash anxiety."
    },
    {
      num: "03",
      title: "High-Net-Worth Psychology & Behavioral Sovereignty",
      desc: "Synthesizing deep principles from Jagat's 5 published works. Overcoming lifestyle inflation creep, founder loneliness, and unconscious self-sabotage that drains high monthly incomes."
    },
    {
      num: "04",
      title: "Institutional Capital Allocation & Asset Moats",
      desc: "Moving beyond basic retail mutual funds. Learning how institutional families construct resilient multi-asset moats that preserve generational purchasing power against debasement."
    },
    {
      num: "05",
      title: "The Closed-Door Executive Syndicate & Peer Audits",
      desc: "Bi-weekly confidential war-rooms with verified founders and executives. Transparent teardowns of real portfolios, business bottlenecks, and high-stakes opportunities."
    }
  ];

  const faqItems = [
    {
      question: "Who is the Mastermind specifically designed for?",
      answer: "The Mastermind is built specifically for founders, business owners, senior executives, and high-income professionals earning ₹5 Lakhs to ₹10 Lakhs+ monthly who have mastered income generation but lack an institutional system for capital defense and compounding."
    },
    {
      question: "How is Mastermind different from generic financial courses?",
      answer: "This is not a generic stock trading course or motivational webinar. It is an intimate, closed-door executive advisory cohort where Jagat Turkiya personally audits your financial operating system, installs institutional firewalls, and holds you accountable in bi-weekly syndicate sessions."
    },
    {
      question: "What is the cohort size and time commitment?",
      answer: "Cohorts are strictly capped at 12 qualified members per intake to preserve complete non-disclosure and personalized audit depth. The commitment is approximately 3 to 4 hours per month across bi-weekly executive deep-dives."
    },
    {
      question: "How do I apply for the upcoming cohort?",
      answer: "Admission is strictly through a private strategy evaluation with the advisory team. Submit your application through the Contact desk, and qualified applicants receive a confidential scheduling link within 24 hours."
    }
  ];

  return (
    <div className="mastermind-page">
      {/* Top Announcement Bar */}
      <div className="top-announcement-bar">
        <div className="container text-center">
          <span>Next Cohort Application: Limited to 12 Qualified Applicants • New Delhi &amp; Global Virtual</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section text-center" style={{ padding: '6rem 0 4.5rem 0' }}>
        <LiquidHero />
        <div className="container hero-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 className="hero-title" style={{ marginBottom: '1.25rem' }}>
            The Financial &amp; Wealth <br />
            <span className="serif-font">Transformation Mastermind</span>
          </h1>
          <p className="hero-lead" style={{ maxWidth: '740px', margin: '0 auto 2.25rem auto' }}>
            Earning ₹5L to ₹10L+ a month is an offense. Keeping it and compounding it is defense. Without a system, high income just creates bigger mistakes at higher speeds. Mastermind installs the institutional clarity and execution roadmap usually kept behind closed doors.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact?subject=MastermindApplication" className="btn btn-white">
              Apply to Work With the Advisory Team
            </Link>
            <a href="#bookshelf" className="btn btn-glass">
              Explore Published Books ↓
            </a>
          </div>
        </div>
      </section>

      {/* Systems Installed Grid */}
      <section className="section" id="framework">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Systems Installed. Wealth Unlocked.</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '700px' }}>
              You don’t need another generic finance podcast. You need a stress-tested financial operating system.
            </p>
          </div>

          <div className="curriculum-grid" style={{ marginBottom: '3rem' }}>
            {modules.map((m, idx) => (
              <div key={idx} className="curriculum-card">
                <span className="curriculum-badge">Module {m.num}</span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="deliverables-panel">
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Mastermind Member Deliverables &amp; Protocol
            </h3>
            <div className="deliverables-grid">
              <div className="deliverable-item">
                <span className="deliverable-check">✓</span>
                <div>
                  <strong>Personal Wealth Audit</strong>
                  <p>Comprehensive 1-on-1 diagnostic mapping every asset, liability, leak, and runway vulnerability.</p>
                </div>
              </div>
              <div className="deliverable-item">
                <span className="deliverable-check">✓</span>
                <div>
                  <strong>Bi-Weekly Closed-Door War-Rooms</strong>
                  <p>Confidential sessions with Jagat Turkiya and an elite cohort of 12 verified peers.</p>
                </div>
              </div>
              <div className="deliverable-item">
                <span className="deliverable-check">✓</span>
                <div>
                  <strong>Direct Advisory Access</strong>
                  <p>Private channel for real-time strategic counsel on critical financial and operational decisions.</p>
                </div>
              </div>
              <div className="deliverable-item">
                <span className="deliverable-check">✓</span>
                <div>
                  <strong>Institutional Template Library</strong>
                  <p>Proprietary allocation spreadsheets, runway calculators, and mental models.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bookshelf Section */}
      <section className="section section-dark" id="bookshelf">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Intellectual Foundation</span>
            <h2 className="section-title">Rooted in 5 Published Books</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '720px' }}>
              Mastermind curriculum incorporates the foundational psychological and behavioral frameworks documented in Jagat Turkiya’s five published works.
            </p>
          </div>

          <div className="bookshelf-grid">
            {books.map((b, i) => (
              <div key={i} className="book-card">
                <div className="book-cover-wrap">
                  <img src={b.img} alt={b.title} loading="lazy" />
                </div>
                <div className="book-details">
                  <span className="book-genre">{b.genre}</span>
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                  <div className="book-footer">
                    <a href={b.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%' }}>
                      View on Amazon ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="section-header text-center">
            <span className="section-eyebrow">Clarifications</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Everything you need to know about Mastermind admission, structure, and confidentiality.
            </p>
          </div>

          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Final Mastermind CTA */}
      <section className="section section-dark text-center" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.85rem)', marginBottom: '1.25rem' }}>
            Ready to Install Your Institutional <span className="serif-font">Wealth Operating System?</span>
          </h2>
          <p style={{ color: 'var(--text-silver)', fontSize: '1.05rem', marginBottom: '2.25rem', lineHeight: 1.7 }}>
            Cohorts fill on a rolling qualification basis. Submit your private application today to schedule your strategy evaluation with the advisory team.
          </p>
          <Link to="/contact?subject=MastermindCohortApplication" className="btn btn-white" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
            Apply for Strategy Evaluation
          </Link>
        </div>
      </section>
    </div>
  );
}
