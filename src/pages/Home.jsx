import React from 'react';
import { Link } from 'react-router-dom';
import LiquidHero from '../components/LiquidHero';

export default function Home() {
  const books = [
    {
      title: "Kill That Black Dragon",
      genre: "Self Mastery & Psychological Sovereignty",
      img: "/assets/images/book-dragon.webp",
      desc: "A systematic psychological manual for dismantling internal friction, self-sabotaging patterns, and unconscious resistance holding back high achievers.",
      link: "https://www.amazon.in/dp/B08F2432W3"
    },
    {
      title: "Asli Nayak Kaun",
      genre: "Leadership & Internal Conviction",
      img: "/assets/images/book-nayak.webp",
      desc: "Deconstructs the core leadership principles of genuine sovereignty, personal responsibility, and ethical power in modern enterprise.",
      link: "https://www.amazon.in/dp/B08F22K6S9"
    },
    {
      title: "Langotiya Yaar",
      genre: "Relational Dynamics & Emotional Grounding",
      img: "/assets/images/book-langotiya.webp",
      desc: "An exploration of human connection, enduring bonds, and the critical role of authentic relationships in balancing intense professional ambition.",
      link: "https://www.amazon.in/dp/B08F22S9KM"
    },
    {
      title: "Nadar Rishte",
      genre: "High EQ & Family Architecture",
      img: "/assets/images/book-nadar.webp",
      desc: "Addresses the invisible cracks in relationships caused by corporate pressure, establishing proven communication frameworks for resilient partnerships.",
      link: "https://www.amazon.in/dp/B08F23CSW7"
    },
    {
      title: "Anubhav Sagar",
      genre: "Wisdom Syntheses & Life Strategy",
      img: "/assets/images/book-anubhav.webp",
      desc: "A profound compendium of synthesized lessons from 15+ years in corporate IT and coaching high-net-worth entrepreneurs navigating extreme high-stakes crossroads.",
      link: "https://www.amazon.in/dp/B08F22X54M"
    }
  ];

  const testimonials = [
    {
      name: "Rajeev Singhania",
      role: "Founder & Managing Director, Multi-City Manufacturing Firm",
      highlight: "Added ₹1.8 Cr to retained reserve capital in 9 months.",
      quote: "Before working with Jagat, we were doing ₹8 Cr top-line, but my personal runway was dangerously exposed. Jagat installed an institutional financial firewall that separated my personal wealth from operational business volatility."
    },
    {
      name: "Dr. Ananya Mehra",
      role: "Senior Consultant Neurosurgeon & Healthcare Investor",
      highlight: "Shifted from unpredictable income to automated wealth defense.",
      quote: "As a clinician, my clinical acumen is sharp, but my financial capital management was completely ad-hoc. Jagat’s Mastermind taught me defensive wealth architecture with zero jargon. The peace of mind is priceless."
    },
    {
      name: "Vikram Kulkarni",
      role: "Co-Founder, B2B SaaS Platform (Series A)",
      highlight: "Eliminated chronic burn anxiety and structured liquid reserves.",
      quote: "High founders earn well during funding spikes but bleed cash on personal allocation. Jagat’s 1-on-1 diagnostic call alone surfaced ₹45 Lakhs in annual unhedged exposure. His frameworks are mandatory for every serious founder."
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-center" style={{ padding: '7rem 0 5.5rem 0' }}>
        <LiquidHero />
        <div className="container hero-container" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            Institutional Executive Advisory &amp; Wealth Architecture
          </div>

          <h1 className="hero-title" style={{ marginBottom: '1.25rem' }}>
            High Income is Not Wealth. <br />
            <span className="serif-font">Systems Build Legacies.</span>
          </h1>

          <p className="hero-lead" style={{ maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
            Earning ₹5L to ₹10L+ a month is an offensive skill. Protecting, structuring, and compounding it without operational anxiety is pure defense. Jagat Turkiya installs the institutional financial architecture that turns volatile cashflow into generational sovereignty.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-white">
              Apply for Strategy Evaluation
            </Link>
            <Link to="/mastermind" className="btn btn-glass">
              Explore The Mastermind →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Track Record Strip */}
      <section className="section section-dark" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years in IT &amp; Advisory</span>
              <p className="stat-desc">Stress-tested operational systems across complex tech &amp; financial domains.</p>
            </div>
            <div className="stat-card">
              <span className="stat-number">1,500+</span>
              <span className="stat-label">Private Consultations</span>
              <p className="stat-desc">Confidential 1-on-1 strategy interventions for business owners &amp; leaders.</p>
            </div>
            <div className="stat-card">
              <span className="stat-number">5</span>
              <span className="stat-label">Published Books</span>
              <p className="stat-desc">Author of seminal works on leadership, mindset, and human behavior.</p>
            </div>
            <div className="stat-card">
              <span className="stat-number">9+</span>
              <span className="stat-label">Countries Reached</span>
              <p className="stat-desc">Active mentees and corporate clients spanning India, US, UK, UAE, and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Architecture Pillars */}
      <section className="section" id="pillars">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">The 3 Pillars of Sovereign Wealth</span>
            <h2 className="section-title">Built For Operators Earning ₹5L–₹10L+ Monthly</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Most high earners run on fragile foundations. When cashflow stops, anxiety begins. We build your fortress.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">01</div>
              <h3>Defensive Wealth Architecture</h3>
              <p>
                Separating operating enterprise volatility from personal liquid safety. Establishing emergency runway firewalls, zero-anxiety capital allocations, and asset-shielding strategies.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">02</div>
              <h3>Emotional Sovereignty &amp; Execution</h3>
              <p>
                Synthesizing insights from 5 published books to eliminate the psychological friction, lifestyle inflation creep, and decision fatigue that erode high-earner net worth.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">03</div>
              <h3>The Mastermind Ecosystem</h3>
              <p>
                An intimate, peer-screened mastermind cohort of serious operators, founders, and professionals exchanging confidential playbooks behind closed doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bookshelf Section */}
      <section className="section section-dark" id="bookshelf">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Intellectual Foundation</span>
            <h2 className="section-title">Author of 5 Published Books</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '720px' }}>
              True mentorship is built on documented, battle-tested philosophy. Jagat Turkiya’s books have guided thousands of professionals through personal and financial inflection points.
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

      {/* Executive Story Split */}
      <section className="section">
        <div className="container">
          <div className="story-split">
            <div className="story-image-wrap">
              <img src="/assets/images/seminar.webp" alt="Jagat Turkiya Live Seminar" loading="lazy" />
            </div>

            <div className="story-text">
              <span className="section-eyebrow">Executive Background</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', marginBottom: '1.25rem' }}>
                Forged in Scarcity, Guided by Systems
              </h2>
              <p>
                Before advising high-net-worth founders, Jagat walked 4 km on foot every day for an entire year to save ₹30 in daily bus fare. That crucible taught him what corporate textbooks cannot: that financial sovereignty is never about how much you make, but how rigorously you defend what you keep.
              </p>
              <p>
                With 15+ years spanning IT systems architecture, corporate advisory, and emotional transformation, Jagat bridges hard technical rigor with deep human empathy.
              </p>

              <div className="editorial-quote" style={{ margin: '1.5rem 0' }}>
                <p>"When you begin to believe in yourself, your life begins to transform. Think Different, Make Difference."</p>
                <span>— Jagat Turkiya</span>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link to="/about" className="btn btn-white">
                  Read Full Journey &amp; Milestones →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Client Validation</span>
            <h2 className="section-title">Tested Across High-Stakes Operations</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Confidential feedback from business owners and clinicians who implemented the advisory frameworks.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-highlight">{t.highlight}</div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-meta">
                    <h5>{t.name}</h5>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Executive CTA */}
      <section className="section text-center" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.85rem)', marginBottom: '1.25rem' }}>
            Ready to Install Your <span className="serif-font">Wealth Operating System?</span>
          </h2>
          <p style={{ color: 'var(--text-silver)', fontSize: '1.05rem', marginBottom: '2.25rem', lineHeight: 1.7 }}>
            Advisory placements and Mastermind cohorts are limited strictly to qualified operators to maintain confidentiality and high peer standards.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
              Apply for Strategy Evaluation
            </Link>
            <Link to="/mastermind" className="btn btn-glass" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
              Explore Mastermind Cohort
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
