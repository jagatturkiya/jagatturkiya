import React from 'react';
import { Link } from 'react-router-dom';
import LiquidHero from '../components/LiquidHero';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section text-center" style={{ padding: '6rem 0 4.5rem 0' }}>
        <LiquidHero />
        <div className="container hero-container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h1 className="hero-title" style={{ marginBottom: '1.25rem' }}>
            The Journey of <span className="serif-font">Jagat Turkiya</span>
          </h1>
          <p className="hero-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
            From walking 4 km on foot every day for an entire year to save ₹30, to mentoring thousands across 9 nations, setting a Guinness World Record milestone, publishing 5 transformative books, and standing on the Times Square billboard in New York City.
          </p>
        </div>
      </section>

      {/* The Hardship Season */}
      <section className="section">
        <div className="container">
          <div className="story-split">
            <div className="story-image-wrap">
              <img src="/assets/images/seminar.webp" alt="Jagat Turkiya Live Seminar" loading="lazy" />
            </div>

            <div className="story-text">
              <span className="section-eyebrow">The Origin</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', marginBottom: '1.25rem' }}>
                Forged in Scarcity, Guided by Purpose
              </h2>
              <p>
                Before stepping onto international keynote stages or authoring 5 published books, Jagat’s life was tested in the crucible of financial constraint. Early in his journey, he walked 4 kilometers on foot every single day for 12 continuous months simply to save ₹30 in daily transit expenses.
              </p>
              <p>
                That defining period permanently eliminated all excuses. It taught him the profound power of compounding discipline, the psychology of emotional resilience, and the danger of falling into self-pity.
              </p>

              <div className="editorial-quote">
                <p>"When you begin to believe in yourself, your life begins to transform. Think Different, Make Difference."</p>
                <span>— Jagat Turkiya</span>
              </div>

              <p>
                Rather than allowing scarcity to become a limitation, Jagat leveraged it as a catalyst to master human behavior, emotional intelligence, and high-performance financial systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 15 Years in IT & Mentorship */}
      <section className="section section-dark">
        <div className="container">
          <div className="story-split" style={{ gridTemplateColumns: '1.1fr 0.9fr' }}>
            <div className="story-text">
              <span className="section-eyebrow">Technical Architecture &amp; Advisory</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', marginBottom: '1.25rem' }}>
                From 15 Years in Corporate IT to Mentorship Authority
              </h2>
              <p>
                With over 15 years of rigorous professional experience spanning IT engineering, financial advisory, and executive coaching, Jagat recognized a critical pattern: technical intelligence alone is never enough for sustained fulfillment. High achievers regularly struggle with mental blind spots, relationship strain, and chronic procrastination.
              </p>
              <p>
                Over the last several years alone, Jagat has conducted over 1,500+ private 1-on-1 deep mentorship consultations and impacted more than 15,000 lives across India, the United States, the UK, UAE, Canada, Thailand, and Mauritius.
              </p>
              <p>
                His unique advisory approach combines analytical enterprise precision with profound emotional understanding—giving leaders the systems they need to protect their balance sheets and the mindset they need to sustain inner peace.
              </p>
            </div>

            <div className="story-image-wrap">
              <img src="/assets/images/jagat-portrait.webp" alt="Jagat Turkiya Portrait" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Guinness World Record & Times Square Milestones */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Global Footprint</span>
            <h2 className="section-title">Milestones of Global Impact</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '720px' }}>
              Recognitions achieved through relentless service, scalable transformation frameworks, and international stages.
            </p>
          </div>

          <div className="milestones-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div className="card-glass" style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏆</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: '#ffffff' }}>Guinness World Record Milestone</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                Recognized as an official co-author and record holder in the Guinness World Record for the thickest published book in the world, validating a commitment to monumental intellectual contributions.
              </p>
            </div>

            <div className="card-glass" style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🗽</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: '#ffffff' }}>Times Square NYC Billboard</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                Broadcast on the iconic digital screens of Times Square in New York City, symbolizing the international reach of his transformational mentorship, keynote speaking, and authorial achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 500,000 Mission */}
      <section className="section section-dark">
        <div className="container">
          <div className="ts-narrative" style={{ background: 'var(--bg-card)', padding: '3.5rem', borderRadius: 'var(--radius-lg)', display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.1rem', marginBottom: '1rem' }}>The Mission to Empower 500,000 Lives</h2>
              <p style={{ color: 'var(--text-silver)', lineHeight: 1.75, fontSize: '1rem', marginBottom: '1.75rem' }}>
                Through <strong>Minderist Training LLP</strong>, his 5 published books, and <strong>Aapka Coach</strong> (<a href="https://apkacoach.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'underline' }}>apkacoach.com</a>), Jagat is on an active mission to bring clarity, emotional sovereignty, and purpose to 500,000 individuals across India and the global Indian diaspora.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-white">
                  Apply for Strategy Evaluation
                </Link>
                <Link to="/mastermind" className="btn btn-glass">
                  Explore The Mastermind
                </Link>
              </div>
            </div>

            <div className="ts-badge-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderLeft: '1px solid var(--border-subtle)', paddingLeft: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '2.4rem', color: '#ffffff', lineHeight: 1 }}>500,000</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mission Target</p>
              </div>
              <div>
                <h3 style={{ fontSize: '2.4rem', color: '#ffffff', lineHeight: 1 }}>9+</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Countries Reached</p>
              </div>
              <div>
                <h3 style={{ fontSize: '2.4rem', color: '#ffffff', lineHeight: 1 }}>100%</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Action-Oriented</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
