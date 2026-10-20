import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
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

  return (
    <div className="about-page">
      {/* Page Header - Clean, No Gradient, No Eyebrow */}
      <section className="page-header" style={{ padding: '5.5rem 0 3.5rem', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-black)' }}>
        <div className="container text-center" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', marginBottom: '1rem' }}>
            Architect of Clarity &amp; <span className="serif-font">Human Potential</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem', color: 'var(--text-silver)', lineHeight: 1.6 }}>
            Guiding founders, professionals, and families across 9+ countries to build inner clarity, emotional grounding, and purposeful action.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section">
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
                Before mentoring founders and professionals, Jagat walked 4 kilometers on foot every single day for an entire year simply to save ₹30 in daily bus fare.
              </p>
              <p>
                That defining season taught him that true growth is never about excuses—it is about relentless consistency, self-discipline, and taking complete responsibility for your outcomes.
              </p>

              <div className="editorial-quote">
                <p>"When you begin to believe in yourself, your life begins to transform. Think Different, Make Difference."</p>
                <span>— Jagat Turkiya</span>
              </div>

              <p>
                Today, he channels those real-life lessons to help leaders master their internal psychology and make high-stakes life decisions with calm confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 15 Years of Experience */}
      <section className="section section-dark">
        <div className="container">
          <div className="story-split" style={{ gridTemplateColumns: '1.1fr 0.9fr' }}>
            <div className="story-text">
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '1.25rem' }}>
                15+ Years of Real Mentorship
              </h2>
              <p>
                With more than 15 years in enterprise IT and executive advisory, Jagat recognized that intelligence alone doesn't guarantee peace or fulfillment. Even the most successful people battle mental roadblocks, relationship friction, and self-doubt.
              </p>
              <p>
                Through 1,500+ private 1-on-1 sessions and impacting 15,000+ people across 9 countries, Jagat delivers practical, compassionate guidance that helps individuals regain clarity and build harmonious relationships.
              </p>
            </div>

            <div className="story-image-wrap">
              <img src="./assets/images/jagat-portrait.webp" alt="Jagat Turkiya Portrait" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Honors & Milestones */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">National &amp; Global Milestones</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Recognitions earned on the journey of empowering people and communities.
            </p>
          </div>

          <div className="achievements-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div className="achievement-card card-glass" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏆</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#ffffff' }}>Guinness World Record</h4>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Official co-author in the Guinness World Record for the thickest published book in the world.
              </p>
            </div>

            <div className="achievement-card card-glass" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎖️</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#ffffff' }}>National Icon Award 2024</h4>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Awarded for outstanding contribution to human coaching and personal empowerment.
              </p>
            </div>

            <div className="achievement-card card-glass" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏅</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#ffffff' }}>Dr. APJ Abdul Kalam Award</h4>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Recognized for dedicated work in youth empowerment, education, and social leadership.
              </p>
            </div>

            <div className="achievement-card card-glass" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌟</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#ffffff' }}>Times Square NYC Billboard</h4>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Featured on the digital marquee in Times Square, New York City via Topmate’s Creator Club.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Pillars */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">The 4 Pillars of Transformation</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Core principles designed to help you live with purpose, clarity, and peace of mind.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">01</div>
              <h4>Radical Clarity</h4>
              <p>Knowing exactly who you are, where you stand, and what matters most. Stripping away confusion.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">02</div>
              <h4>Undivided Focus</h4>
              <p>Cutting through daily noise and distractions to channel your energy toward what moves the needle.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">03</div>
              <h4>Clear Direction</h4>
              <p>Having a straightforward, step-by-step roadmap so you always know your next right step.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">04</div>
              <h4>Disciplined Action</h4>
              <p>Building consistent daily habits that keep you moving forward regardless of mood or motivation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Author of 5 Published Books */}
      <section className="section" id="bookshelf">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Author of 5 Published Books</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Jagat Turkiya’s seminal works on personal leadership, relationships, and emotional resilience.
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

      {/* Mission Panel */}
      <section className="section section-dark">
        <div className="container">
          <div className="ts-narrative" style={{ background: 'var(--bg-card)', padding: '3.5rem', borderRadius: 'var(--radius-lg)', display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Empowering 500,000 Lives</h2>
              <p style={{ color: 'var(--text-silver)', lineHeight: 1.7, fontSize: '1rem', marginBottom: '1.75rem' }}>
                Through <strong>Minderist Training LLP</strong>, 5 published books, and <strong>Aapka Coach</strong> (<a href="https://apkacoach.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'underline' }}>apkacoach.com</a>), Jagat is on a mission to bring clarity, emotional resilience, and purpose to 500,000 individuals worldwide.
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
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Mission Goal</p>
              </div>
              <div>
                <h3 style={{ fontSize: '2.4rem', color: '#ffffff', lineHeight: 1 }}>9+</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Countries Reached</p>
              </div>
              <div>
                <h3 style={{ fontSize: '2.4rem', color: '#ffffff', lineHeight: 1 }}>100%</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Action-Oriented</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
