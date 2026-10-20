import React from 'react';
import { Link } from 'react-router-dom';
import LiquidHero from '../components/LiquidHero';
import FaqAccordion from '../components/FaqAccordion';

export default function Mastermind() {
  const books = [
    {
      title: "Kill That Black Dragon",
      genre: "Mindset & Overcoming Fear",
      img: "./assets/images/book-dragon.webp",
      desc: "A practical guide to dismantling internal resistance, self-sabotaging habits, and fear holding back high achievers.",
      link: "https://www.amazon.in/dp/B08F2432W3"
    },
    {
      title: "Asli Nayak Kaun",
      genre: "Leadership & Responsibility",
      img: "./assets/images/book-nayak.webp",
      desc: "Deconstructs the principles of true leadership, self-reliance, and personal authority in everyday life.",
      link: "https://www.amazon.in/dp/B08F22K6S9"
    },
    {
      title: "Langotiya Yaar",
      genre: "Relationships & Connection",
      img: "./assets/images/book-langotiya.webp",
      desc: "An exploration of genuine friendship, human connection, and balancing career success with real relationships.",
      link: "https://www.amazon.in/dp/B08F22S9KM"
    },
    {
      title: "Nadar Rishte",
      genre: "Family Harmony & Emotional EQ",
      img: "./assets/images/book-nadar.webp",
      desc: "Addresses the unspoken friction in personal and professional relationships, offering proven communication tools.",
      link: "https://www.amazon.in/dp/B08F23CSW7"
    },
    {
      title: "Anubhav Sagar",
      genre: "Wisdom & Life Strategy",
      img: "./assets/images/book-anubhav.webp",
      desc: "Key life lessons synthesized from over 15 years in enterprise IT, coaching, and guiding people through critical milestones.",
      link: "https://www.amazon.in/dp/B08F22X54M"
    }
  ];

  const phases = [
    {
      tag: "Weeks 1–4",
      title: "Mindset & Diagnostic Audit",
      desc: "A complete personal and financial diagnostic. Uncover subconscious money blocks, plug silent cashflow leaks, and establish solid emergency runways."
    },
    {
      tag: "Weeks 5–8",
      title: "Defensive System Installation",
      desc: "Set up allocation firewalls, separate enterprise volatility from personal peace, and install stress-tested wealth compounding rules."
    },
    {
      tag: "Weeks 9–10",
      title: "Execution & Life Alignment",
      desc: "Build sustainable daily execution loops, align family goals with career ambition, and install high-leverage decision frameworks."
    },
    {
      tag: "Months 3–6",
      title: "Ongoing Mentorship & Accountability",
      desc: "Bi-weekly strategy reviews, portfolio checks, and direct guidance with Jagat Turkiya to keep you focused and executing consistently."
    }
  ];

  const pillars = [
    {
      num: "01",
      title: "Psychology & Inner Sovereignty",
      desc: "Eliminate the anxiety that comes with volatile cashflow. Learn to operate from calm authority rather than constant pressure."
    },
    {
      num: "02",
      title: "Defensive Wealth Architecture",
      desc: "Earning is offense; defending is defense. Protect your balance sheet with emergency firewalls, capital safety moats, and zero-leak systems."
    },
    {
      num: "03",
      title: "Predictable Capital Allocation",
      desc: "Install straightforward rules for how much to reinvest, save, and protect each month—without guesswork or complex spreadsheets."
    },
    {
      num: "04",
      title: "Family Harmony & Life Balance",
      desc: "Professional ambition should never destroy family relationships. Build emotional EQ frameworks for deep, lasting partnerships."
    }
  ];

  const faqItems = [
    {
      question: "What is the structure of the 6-month Mastermind?",
      answer: "The program begins with an intensive 10-week core curriculum featuring weekly masterclasses and personalized audit blueprints, followed by 4 months of bi-weekly ongoing advisory, direct hot-seats, and accountability check-ins with Jagat Turkiya."
    },
    {
      question: "How much time is required each week?",
      answer: "Approximately 2 to 3 hours per week. 90 minutes for the live strategy masterclass, plus 45 minutes to complete your execution blueprint. Everything is action-oriented with zero busywork."
    },
    {
      question: "Is this tailored to my real numbers and situation?",
      answer: "Yes, 100%. While foundational principles are taught in groups, your diagnostic audits and allocation plans are customized to your specific income, family milestones, and balance sheet."
    },
    {
      question: "How do I enroll or get more details?",
      answer: "Click the 'Join Mastermind' or 'Book Consultation' button to submit an inquiry. Our team will share the complete program brochure and schedule a brief call."
    }
  ];

  return (
    <div className="mastermind-page">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <LiquidHero />
        <div className="container hero-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 className="hero-title" style={{ marginBottom: '1.25rem' }}>
            The 6-Month Executive <br />
            <span className="serif-font">Wealth &amp; Life Mastermind</span>
          </h1>
          <p className="hero-lead" style={{ maxWidth: '740px', margin: '0 auto 2.25rem auto' }}>
            A comprehensive 6-month mentorship program featuring a 10-week intensive framework designed to install personal clarity, defensive financial architecture, and long-term peace of mind.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-white">
              Join Mastermind
            </Link>
            <a href="#curriculum" className="btn btn-glass">
              Explore Program ↓
            </a>
          </div>
        </div>
      </section>

      {/* Program Roadmap: 6 Months & 10 Weeks */}
      <section className="section" id="curriculum">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">6-Month Transformation Roadmap</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              From initial diagnostic audits to long-term accountability, every phase is engineered for lasting execution.
            </p>
          </div>

          <div className="curriculum-grid" style={{ marginBottom: '3.5rem' }}>
            {phases.map((p, idx) => (
              <div key={idx} className="curriculum-card">
                <span className="curriculum-badge">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Systems Installed (Pillars) */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Core Systems Installed</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Four fundamental disciplines to help you master your money, mind, and relationships.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map((pi, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon">{pi.num}</div>
                <h3>{pi.title}</h3>
                <p>{pi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bookshelf Section */}
      <section className="section" id="bookshelf">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Rooted in 5 Published Books</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Mastermind principles are reinforced by Jagat Turkiya’s published works on leadership, psychology, and relationships.
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
                    <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>
                      Request a Copy
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="section-header text-center">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Common questions about the Mastermind structure and enrollment.
            </p>
          </div>

          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Final Mastermind CTA */}
      <section className="section text-center" style={{ padding: '5.5rem 0' }}>
        <div className="container" style={{ maxWidth: '740px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', marginBottom: '1rem' }}>
            Take Control of Your <span className="serif-font">Financial Future</span>
          </h2>
          <p style={{ color: 'var(--text-silver)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.6 }}>
            Connect with Jagat Turkiya and his team to learn more about the 6-Month Mastermind program.
          </p>
          <Link to="/contact" className="btn btn-white" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
