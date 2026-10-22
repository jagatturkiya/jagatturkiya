import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LiquidHero from '../components/LiquidHero';
import StoriesSection from '../components/StoriesSection';
import { getTestimonials } from '../lib/cmsStore';

export default function Home() {
  const [testimonials, setTestimonials] = useState(() => {
    const data = getTestimonials();
    return data.reviews;
  });

  useEffect(() => {
    const handleUpdate = () => {
      const data = getTestimonials();
      setTestimonials(data.reviews);
    };
    window.addEventListener('jt_cms_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('jt_cms_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-center">
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

      {/* Times Square NYC Global Recognition */}
      <section className="section" id="times-square">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Featured on Times Square, New York City</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Spotlighted on the global digital marquee in Times Square, NYC for excellence in transformational leadership.
            </p>
          </div>

          <div className="ts-showcase-grid">
            <div className="ts-image-card">
              <img
                src="./assets/images/times-square-wide.webp"
                alt="Jagat Turkiya featured on Times Square Billboard in New York City"
                loading="lazy"
              />
            </div>
            <div className="ts-image-card">
              <img
                src="./assets/images/times-square-close.webp"
                alt="Jagat Turkiya Times Square Billboard Close View"
                loading="lazy"
              />
            </div>
          </div>

          <div className="ts-narrative-box">
            <div>
              <h3>From Walking 4 km Daily to the Heart of Manhattan</h3>
              <p>
                In 2024, Jagat Singh Turkiya was spotlighted on the world-famous digital marquee in Times Square, New York City by Topmate’s Creator Club. This recognition honored him as an "incredible transformation coach" who has helped thousands of individuals overcome internal roadblocks and create lasting clarity in their lives and careers.
              </p>
              <p>
                For someone who once walked four kilometers every day simply to save ₹30 in bus fare, seeing his name and mission projected in the center of NYC stands as proof: with disciplined focus, genuine humility, and consistent execution, authentic work transcends every geographical boundary.
              </p>
            </div>
            <div className="ts-narrative-stats">
              <div className="ts-stat-badge">
                <h4>Times Sq.</h4>
                <p>New York City</p>
              </div>
              <div className="ts-stat-badge">
                <h4>Topmate</h4>
                <p>Creator Club</p>
              </div>
              <div className="ts-stat-badge">
                <h4>15,000+</h4>
                <p>Lives Impacted</p>
              </div>
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
                Transformation That Lasts a Lifetime
              </h2>
              <p>
                Jagat Turkiya is an internationally recognized transformational coach and mentor dedicated to helping high earners, founders, and leaders eliminate friction and master unshakeable direction.
              </p>
              <p>
                With over 15 years of coaching experience, 200+ workshops, and 15,000+ lives transformed across 9 countries, his battle-tested frameworks turn confusion into decisive action.
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/about" className="btn btn-outline">
                  Learn More About Jagat →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Life Stories & Wisdom Hub (Insights for a Better Life) */}
      <StoriesSection />

      {/* What Clients Say (Testimonials Cards) */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">What Clients Say</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Real feedback from entrepreneurs, executives, and leaders who have worked directly with Jagat Turkiya.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="test-stars">★★★★★</div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="test-author-info">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="author-pic"
                      loading="lazy"
                    />
                  ) : (
                    <div className="author-avatar-monogram">{t.monogram}</div>
                  )}
                  <div className="author-meta">
                    <h5>{t.name}</h5>
                    <p>{t.role}</p>
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
