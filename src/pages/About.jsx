import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const books = [
    {
      title: "Kill That Black Dragon",
      genre: "Mindset & Overcoming Fear",
      img: "./assets/images/book-dragon.webp",
      desc: "A raw, practical guide to silencing the internal voice of fear, eliminating self-doubt, and taking courageous action when everything inside screams to play small.",
      link: "https://www.amazon.in/dp/B08F2432W3"
    },
    {
      title: "Asli Nayak Kaun",
      genre: "Leadership & Responsibility",
      img: "./assets/images/book-nayak.webp",
      desc: "Real leadership is not about fancy titles or followers. It is about taking 100% responsibility for your decisions, your family, and your team without making excuses.",
      link: "https://www.amazon.in/dp/B08F22K6S9"
    },
    {
      title: "Langotiya Yaar",
      genre: "Friendship & Staying Grounded",
      img: "./assets/images/book-langotiya.webp",
      desc: "As career success grows, authentic relationships often fade. This book explores genuine connection, lifelong friendships, and how to stay humble as you rise.",
      link: "https://www.amazon.in/dp/B08F22S9KM"
    },
    {
      title: "Nadar Rishte",
      genre: "Family Harmony & Emotional EQ",
      img: "./assets/images/book-nadar.webp",
      desc: "Addresses the unspoken friction and hidden expectations inside families. Offers simple, honest communication tools to heal strained bonds and restore peace.",
      link: "https://www.amazon.in/dp/B08F23CSW7"
    },
    {
      title: "Anubhav Sagar",
      genre: "Life Wisdom & Real Lessons",
      img: "./assets/images/book-anubhav.webp",
      desc: "Synthesized from 15+ years in corporate IT, personal failures, and deep mentorship. Timeless life principles that no business school or textbook will ever teach you.",
      link: "https://www.amazon.in/dp/B08F22X54M"
    }
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="about-header text-center">
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', marginBottom: '1rem' }}>
            Jagat Singh Turkiya
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem', color: 'var(--text-silver)', lineHeight: 1.6 }}>
            Transformation Coach, Author of 5 Books &amp; Founder of Aapka Coach. Helping high earners and leaders find clarity, conquer self-doubt, and live with disciplined purpose.
          </p>
        </div>
      </section>

      {/* Origin Story - The 4 km Daily Walk */}
      <section className="section">
        <div className="container">
          <div className="story-split">
            <div className="story-image-wrap">
              <img src="./assets/images/seminar.webp" alt="Jagat Turkiya Live Seminar" loading="lazy" />
            </div>

            <div className="story-text">
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '1.25rem' }}>
                Walking 4 Kilometers to Save ₹30
              </h2>
              <p>
                Long before speaking on international stages or mentoring senior executives, Jagat walked 4 kilometers on foot through Delhi every single day for an entire year—simply to save ₹30 in daily bus fare so his family could make ends meet.
              </p>
              <p>
                Those long walks in the Delhi heat and winter cold became his crucible. They taught him a truth that no textbook could ever explain: <em>circumstances do not define your future; your daily discipline and refusal to make excuses do.</em>
              </p>

              <div className="editorial-quote">
                <p>"When you begin to believe in yourself, your life begins to transform. Think Different, Make Difference."</p>
                <span>— Jagat Turkiya</span>
              </div>

              <p>
                Today, when he coaches high earners or addresses large audiences, he doesn't speak from theory. He speaks from the lived reality of having pulled himself up through grit, relentless self-belief, and personal accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 15+ Years in Enterprise IT & Mentorship */}
      <section className="section section-dark">
        <div className="container">
          <div className="story-split story-reverse">
            <div className="story-text">
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '1.25rem' }}>
                15+ Years in the Corporate Trenches
              </h2>
              <p>
                For over 15 years, Jagat worked inside demanding enterprise IT environments alongside brilliant engineers, project leaders, and executives.
              </p>
              <p>
                During that time, he observed a painful contradiction: people were earning high salaries and climbing corporate ladders, yet privately battling crippling anxiety, burnout, relationship strain at home, and a complete lack of financial direction.
              </p>
              <p>
                He realized that technical intelligence alone is not enough to live well. You need emotional grounding, defensive financial habits, and inner peace. That realization led to the founding of his mentorship practice, where he has now conducted over 1,500 private one-on-one sessions and guided 15,000+ individuals across 9 countries.
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
            <h2 className="section-title">Milestones &amp; Recognitions</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Quiet dedication recognized on national and global stages.
            </p>
          </div>

          <div className="achievements-grid">
            <div className="achievement-card card-glass">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏆</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#ffffff' }}>Guinness World Record</h4>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Official co-author in the Guinness World Record for the thickest published book in the world.
              </p>
            </div>

            <div className="achievement-card card-glass">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎖️</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#ffffff' }}>National Icon Award 2024</h4>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Honored for significant contributions to mindset transformation and executive coaching.
              </p>
            </div>

            <div className="achievement-card card-glass">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏅</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#ffffff' }}>Dr. APJ Abdul Kalam Award</h4>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Recognized for leadership in youth development, education, and empowering communities.
              </p>
            </div>

            <div className="achievement-card card-glass">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌟</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#ffffff' }}>Times Square NYC Billboard</h4>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Featured by Topmate’s Creator Club on the Nasdaq digital marquee in Times Square, New York City.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Disciplines */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">The 4 Core Disciplines</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Simple, unwavering principles that cut through noise and build real momentum.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">01</div>
              <h4>Radical Clarity</h4>
              <p>Seeing reality as it is—not better, not worse. Stripping away the self-deception and internal stories holding you back from making clear decisions.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">02</div>
              <h4>Undivided Focus</h4>
              <p>Stop chasing ten shiny opportunities at once. Identifying the 2 or 3 critical priorities that will genuinely move your life and family forward.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">03</div>
              <h4>Clear Direction</h4>
              <p>Speed means nothing if you are traveling down the wrong road. Establishing a clear North Star for your finances, career, and relationships.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">04</div>
              <h4>Disciplined Daily Action</h4>
              <p>Motivation is fleeting and unreliable. Real transformation happens through small, disciplined daily habits executed consistently over time.</p>
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
              Real-world insights on personal leadership, family dynamics, and overcoming inner roadblocks.
            </p>
          </div>

          <div className="bookshelf-grid">
            {books.map((b, i) => (
              <div key={i} className="book-card">
                <div className="book-cover-container">
                  <img src={b.img} alt={b.title} loading="lazy" />
                </div>
                <span className="book-tag">{b.genre}</span>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
                <div className="book-footer">
                  <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>
                    Request a Copy
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Panel */}
      <section className="section section-dark">
        <div className="container">
          <div className="about-mission-panel">
            <div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', marginBottom: '1rem' }}>
                On a Mission to Empower 500,000 Lives
              </h2>
              <p style={{ color: 'var(--text-silver)', lineHeight: 1.7, fontSize: '1rem', marginBottom: '1.75rem' }}>
                Through <strong>Minderist Training LLP</strong>, 5 published books, and <strong>Aapka Coach</strong> (<a href="https://apkacoach.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'underline' }}>apkacoach.com</a>), Jagat is dedicated to equipping 500,000 people with the tools to live with absolute clarity, emotional strength, and financial sovereignty.
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

            <div className="about-mission-stats">
              <div className="about-stat-item">
                <h3>500,000</h3>
                <p>Mission Target</p>
              </div>
              <div className="about-stat-item">
                <h3>9+</h3>
                <p>Countries Mentored</p>
              </div>
              <div className="about-stat-item">
                <h3>1,500+</h3>
                <p>1-on-1 Sessions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
