import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Award, Medal, Tv } from 'lucide-react';
import StoriesSection from '../components/StoriesSection';

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

      {/* Executive Biography - Meet the Mind Behind Thousands of Transformations */}
      <section className="section">
        <div className="container">
          <div className="story-split">
            <div className="story-image-wrap">
              <img src="./assets/images/coach/jagat-coach-seminar.jpg" alt="Jagat Turkiya Live Seminar & Coach Cohort" loading="lazy" />
            </div>

            <div className="story-text">
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '1.25rem' }}>
                Meet the Mind Behind Thousands of Transformations
              </h2>
              <p>
                Jagat Turkiya is a globally recognized Life &amp; Mindset Transformation Coach, author of 5 books, and founder of Aapka Coach. He helps executives and high-earners break through self-imposed ceilings to live with clarity and purpose.
              </p>
              <p>
                Over 15+ years, he has conducted 200+ workshops and empowered 15,000+ individuals across 9 countries to eliminate limiting beliefs, conquer fear, and align their life direction.
              </p>

              <div className="editorial-quote">
                <p>"When you begin to believe in yourself, your life begins to transform. Think Different, Make Difference."</p>
                <span>— Jagat Turkiya</span>
              </div>

              <p>
                Every framework he delivers is battle-tested through 1,500+ private consultations and executive advisory—engineered to produce permanent shifts in human perspective.
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
                For over 15 years, Jagat worked inside demanding enterprise IT environments alongside top engineers and corporate leaders.
              </p>
              <p>
                He observed a painful paradox: people were achieving external status while battling burnout, anxiety, and relationship strain at home.
              </p>
              <p>
                Realizing that technical acumen is meaningless without emotional grounding and inner peace, he founded his transformation practice—now trusted by over 15,000 people globally.
              </p>
            </div>

            <div className="story-image-wrap">
              <img src="./assets/images/coach/jagat-hero-portrait.png" alt="Jagat Turkiya Studio Portrait" loading="lazy" />
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
              <div className="milestone-icon-wrap">
                <Trophy size={32} strokeWidth={1.5} color="#ffffff" />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#ffffff' }}>Guinness World Record</h4>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Official co-author in the Guinness World Record for the thickest published book in the world.
              </p>
            </div>

            <div className="achievement-card card-glass">
              <div className="milestone-icon-wrap">
                <Award size={32} strokeWidth={1.5} color="#ffffff" />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#ffffff' }}>National Icon Award 2024</h4>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Honored for significant contributions to mindset transformation and executive coaching.
              </p>
            </div>

            <div className="achievement-card card-glass">
              <div className="milestone-icon-wrap">
                <Medal size={32} strokeWidth={1.5} color="#ffffff" />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#ffffff' }}>Dr. APJ Abdul Kalam Award</h4>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Recognized for leadership in youth development, education, and empowering communities.
              </p>
            </div>

            <div className="achievement-card card-glass">
              <div className="milestone-icon-wrap">
                <Tv size={32} strokeWidth={1.5} color="#ffffff" />
              </div>
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

      {/* Real Life Stories & Wisdom Hub (Pure Hindi, No Capsules) */}
      <StoriesSection />

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
