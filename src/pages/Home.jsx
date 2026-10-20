import React from 'react';
import { Link } from 'react-router-dom';
import LiquidHero from '../components/LiquidHero';

export default function Home() {
  const testimonials = [
    {
      name: "Tabraj Singh",
      role: "Verified Client • Topmate",
      quote: "Working with Jagat was a great experience. He helped transform my mindset and gave me the exact clarity to achieve my goals.",
      highlight: "Mindset Transformation"
    },
    {
      name: "Renu Chaudhary",
      role: "Verified Client • Topmate",
      quote: "He is always providing handholding support to face challenges. The tools and frameworks he uses are practical and easy to apply.",
      highlight: "Practical Frameworks"
    },
    {
      name: "Rahul Singh",
      role: "Software Executive",
      quote: "Working with Jagat Turkiya has been life-changing. His guidance and insight helped me overcome roadblocks in my personal and career growth.",
      highlight: "Executive Breakthrough"
    },
    {
      name: "Aditi Shah",
      role: "Business Owner",
      quote: "Jagat has deep knowledge and is always ready to support people who want to grow. His guidance is straightforward and easy to connect with.",
      highlight: "Direct & Grounded"
    },
    {
      name: "Neetu Negi",
      role: "Corporate Professional",
      quote: "Jagat is a calm, patient, empathetic, and empowering coach. He made our sessions pleasant, productive, and brought absolute clarity.",
      highlight: "Empathy & Clarity"
    },
    {
      name: "Rritu Singhi",
      role: "Transformation Coach",
      quote: "Jagat provides relentless clarity, structured frameworks, and unmatched guidance for personal and executive growth.",
      highlight: "Relentless Focus"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-center" style={{ padding: '6.5rem 0 4.5rem 0' }}>
        <LiquidHero />
        <div className="container hero-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 className="hero-title" style={{ marginBottom: '1.25rem' }}>
            Transform Your Perspective with <br />
            <span className="serif-font">Clarity, Focus &amp; Action</span>
          </h1>

          <p className="hero-lead" style={{ maxWidth: '720px', margin: '0 auto 2.25rem auto' }}>
            Overcome limiting beliefs, eliminate friction, and build an unshakeable direction for your career, wealth, and life with Jagat Turkiya.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/mastermind" className="btn btn-white">
              Explore Mastermind
            </Link>
            <Link to="/contact" className="btn btn-glass">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="section section-dark" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years of Mentorship</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">1,500+</span>
              <span className="stat-label">Private Consultations</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">15,000+</span>
              <span className="stat-label">Lives Impacted</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">9+</span>
              <span className="stat-label">Countries Reached</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">How We Help You Grow</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Practical frameworks designed to build confidence, peace of mind, and consistent execution.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">01</div>
              <h3>Mindset &amp; Clarity</h3>
              <p>
                Dismantle self-doubt, overcome fear of failure, and gain complete clarity on who you are and where you are headed.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">02</div>
              <h3>Wealth &amp; Strategy</h3>
              <p>
                Install proven financial habits, manage money without stress, and build long-term generational security.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">03</div>
              <h3>Relationship Harmony</h3>
              <p>
                Develop emotional intelligence to nurture deep family bonds and authentic connections alongside your professional ambitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Split Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="story-split">
            <div className="story-image-wrap">
              <img src="./assets/images/seminar.webp" alt="Jagat Turkiya Live Seminar" loading="lazy" />
            </div>

            <div className="story-text">
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '1.25rem' }}>
                Forged in Scarcity, Driven by Purpose
              </h2>
              <p>
                Before mentoring founders and professionals, Jagat walked 4 kilometers on foot every day for a full year simply to save ₹30 in daily bus fare.
              </p>
              <p>
                That season shaped his entire philosophy: true transformation doesn't come from luck or shortcuts. It comes from disciplined daily action, emotional resilience, and relentless focus.
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/about" className="btn btn-outline">
                  Read Full Story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Words from Mentees</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Real experiences from professionals, founders, and leaders guided by Jagat Turkiya.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
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

      {/* Final Callout */}
      <section className="section section-dark text-center" style={{ padding: '5.5rem 0' }}>
        <div className="container" style={{ maxWidth: '740px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', marginBottom: '1rem' }}>
            Ready to Start Your <span className="serif-font">Transformation?</span>
          </h2>
          <p style={{ color: 'var(--text-silver)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.6 }}>
            Connect with Jagat Turkiya and his team for personalized mentorship, mastermind programs, or speaking engagements.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-white" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
              Book Consultation
            </Link>
            <Link to="/mastermind" className="btn btn-glass" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
              Explore Mastermind
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
