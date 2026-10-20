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

  const modules = [
    {
      num: "01",
      title: "Psychology of Money & Mindset",
      desc: "Uncover and eliminate the unconscious habits, scarcity fears, and spending triggers that cause high earners to feel insecure."
    },
    {
      num: "02",
      title: "Defensive Financial Structure",
      desc: "Set up emergency runway buffers, plug silent money leaks, and build safety nets that protect you and your family."
    },
    {
      num: "03",
      title: "Clear Capital Allocation",
      desc: "Learn straightforward frameworks to allocate your monthly cashflow into safe savings, investments, and business growth."
    },
    {
      num: "04",
      title: "Sustained Peace of Mind",
      desc: "Install a clear financial operating system that runs predictably so you can focus on your work, family, and passions."
    }
  ];

  const faqItems = [
    {
      question: "Who is the Mastermind designed for?",
      answer: "The Mastermind is designed for business owners, salaried leaders, and professionals who earn well but want clarity, structure, and a reliable system to manage and protect their wealth."
    },
    {
      question: "What is the format and time commitment?",
      answer: "The program includes structured weekly masterclasses, practical blueprint exercises, and direct Q&A sessions with Jagat Turkiya. The commitment is roughly 2 to 3 hours per week."
    },
    {
      question: "How do I join or get more details?",
      answer: "Click the 'Join Mastermind' or 'Book Consultation' button to reach out to our team. We will share the full program details and schedule a brief call to see if it is the right fit."
    }
  ];

  return (
    <div className="mastermind-page">
      {/* Hero Section */}
      <section className="hero-section text-center" style={{ padding: '6.5rem 0 4.5rem 0' }}>
        <LiquidHero />
        <div className="container hero-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 className="hero-title" style={{ marginBottom: '1.25rem' }}>
            The Financial &amp; Wealth <br />
            <span className="serif-font">Transformation Mastermind</span>
          </h1>
          <p className="hero-lead" style={{ maxWidth: '720px', margin: '0 auto 2.25rem auto' }}>
            Earning money is one skill. Protecting and compounding it without anxiety is another. Mastermind gives you the clarity and systems to manage your wealth with confidence.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-white">
              Join Mastermind
            </Link>
            <a href="#bookshelf" className="btn btn-glass">
              Explore Books ↓
            </a>
          </div>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section className="section" id="framework">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">What You Will Learn</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Four practical modules engineered to bring order, structure, and growth to your finances.
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
        </div>
      </section>

      {/* Bookshelf Section */}
      <section className="section section-dark" id="bookshelf">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Author of 5 Published Books</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Jagat Turkiya’s published works on personal leadership, relationships, and mindset.
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
      <section className="section">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="section-header text-center">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Common questions about the Mastermind structure and participation.
            </p>
          </div>

          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Final Mastermind CTA */}
      <section className="section section-dark text-center" style={{ padding: '5.5rem 0' }}>
        <div className="container" style={{ maxWidth: '740px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', marginBottom: '1rem' }}>
            Take Control of Your <span className="serif-font">Financial Future</span>
          </h2>
          <p style={{ color: 'var(--text-silver)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.6 }}>
            Connect with Jagat Turkiya and his team to learn more about upcoming Mastermind sessions.
          </p>
          <Link to="/contact" className="btn btn-white" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
