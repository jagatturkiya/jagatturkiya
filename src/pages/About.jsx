import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-page">
      {/* Page Header - Clean Executive Styling without WebGL */}
      <section className="page-header" style={{ padding: '6.5rem 0 4rem', borderBottom: '1px solid var(--border-subtle)', background: 'linear-gradient(180deg, var(--bg-black) 0%, var(--bg-surface) 100%)' }}>
        <div className="container text-center" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span className="section-eyebrow">The Authentic Story</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', marginBottom: '1.25rem' }}>
            Architect of Clarity &amp; <span className="serif-font">Human Potential</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '740px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-silver)', lineHeight: 1.7 }}>
            From walking 4 km on foot every day to save ₹30, to guiding thousands of high-achieving founders across 9+ countries, setting a Guinness World Record milestone, publishing 5 transformative books, and standing on the Times Square marquee in New York City.
          </p>
        </div>
      </section>

      {/* The Hardship Season & Origin */}
      <section className="section">
        <div className="container">
          <div className="story-split">
            <div className="story-image-wrap">
              <img src="./assets/images/seminar.webp" alt="Jagat Turkiya Live Seminar" loading="lazy" />
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

      {/* 15 Years in IT & Mentorship Authority */}
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
              <img src="./assets/images/jagat-portrait.webp" alt="Jagat Turkiya Portrait" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Honors & Global Recognitions */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Global Footprint</span>
            <h2 className="section-title">Recognized Nationally &amp; Globally</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '720px' }}>
              Milestones achieved along the path of building credible, transformative human leadership.
            </p>
          </div>

          <div className="achievements-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div className="achievement-card card-glass" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏆</div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: '#ffffff' }}>Guinness World Record</h4>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Associated with the historic Guinness World Record event as speaker and leadership mentor.
              </p>
            </div>

            <div className="achievement-card card-glass" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎖️</div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: '#ffffff' }}>National Icon Award 2024</h4>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Conferred with the prestigious Icon 2024 award for excellence in human coaching and public empowerment.
              </p>
            </div>

            <div className="achievement-card card-glass" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏅</div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: '#ffffff' }}>Dr. APJ Abdul Kalam Award</h4>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Recognized for tireless contribution to youth education, mindset transformation, and social value.
              </p>
            </div>

            <div className="achievement-card card-glass" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌟</div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: '#ffffff' }}>Times Square, NYC Billboard</h4>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Featured on the iconic marquee in Times Square, New York City through Topmate’s Creator Club.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Pillars of Transformation */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">The Methodology</span>
            <h2 className="section-title">The 4 Pillars of Transformation</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '740px' }}>
              The four cornerstone disciplines engineered by Jagat Turkiya to build an unshakeable foundation for life, wealth, and family harmony.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">01</div>
              <h4>Radical Clarity</h4>
              <p>Most people do not suffer from a lack of effort; they suffer from ambiguity. Clarity means identifying where you truly stand, stripping away illusions, and defining your non-negotiables.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">02</div>
              <h4>Undivided Focus</h4>
              <p>In a hyper-stimulated world designed for continuous distraction, focus is an elite advantage. Filtering out noise to direct your cognitive resources into high-leverage milestones.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">03</div>
              <h4>Strategic Direction</h4>
              <p>Aimless hard work leads to burnout. Direction means having an objective, step-by-step roadmap with strict timeline accountability and measurable benchmarks.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">04</div>
              <h4>Disciplined Action</h4>
              <p>Execution that functions independently of temporary emotional states. Building daily habit loops that ensure continuous momentum even on days when motivation is absent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The 500,000 Mission Panel */}
      <section className="section">
        <div className="container">
          <div className="ts-narrative" style={{ background: 'var(--bg-card)', padding: '3.5rem', borderRadius: 'var(--radius-lg)', display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.1rem', marginBottom: '1rem' }}>The Mission to Empower 500,000 Lives</h2>
              <p style={{ color: 'var(--text-silver)', lineHeight: 1.75, fontSize: '1rem', marginBottom: '1.75rem' }}>
                Through <strong>Minderist Training LLP</strong>, his 5 published books, and <strong>Aapka Coach</strong> (<a href="https://apkacoach.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'underline' }}>apkacoach.com</a>), Jagat is on an active mission to bring clarity, emotional sovereignty, and purpose to 500,000 individuals across India and the global Indian diaspora.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-white">
                  Book Consultation
                </Link>
                <Link to="/mastermind" className="btn btn-glass">
                  Explore Mastermind
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
