import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LiquidHero from '../components/LiquidHero';
import StoriesSection from '../components/StoriesSection';
import { getTestimonials, getHeroAndTimesSquare } from '../lib/cmsStore';

export default function Home() {
  const [testimonials, setTestimonials] = useState(() => {
    const data = getTestimonials();
    return data.reviews;
  });

  const [heroStats, setHeroStats] = useState(() => getHeroAndTimesSquare());

  useEffect(() => {
    const handleUpdate = () => {
      const data = getTestimonials();
      setTestimonials(data.reviews);
      setHeroStats(getHeroAndTimesSquare());
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
        <div className="container hero-container" style={{ maxWidth: '920px', margin: '0 auto' }}>
          <h1 className="hero-title">
            For High-Performing Executives, Founders &amp; Leaders: <br className="hero-desktop-br" />
            <span className="serif-font">Break Internal Bottlenecks. Master Decisive Clarity.</span>
          </h1>

          <p className="hero-lead">
            Battle-tested 1-on-1 and cohort advisory with Jagat Turkiya. Dismantle internal bottlenecks, align high-stakes decisions, and install permanent peace of mind.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-white">
              Book Your Clarity Call
            </Link>
            <Link to="/mastermind" className="btn btn-glass">
              Explore Mastermind
            </Link>
          </div>
        </div>
      </section>

      {/* Times Square NYC Global Recognition */}
      <section className="section" id="times-square">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{heroStats.timesSquareTitle || 'Featured on Times Square, New York City'}</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              {heroStats.timesSquareSubtitle || 'Spotlighted on the global digital marquee in Times Square, NYC for excellence in transformational leadership.'}
            </p>
          </div>

          <div className="ts-showcase-grid">
            <div className="ts-image-card">
              <img
                src={heroStats.timesSquareImageWide || "./assets/images/times-square-wide.webp"}
                alt="Jagat Turkiya featured on Times Square Billboard in New York City"
                loading="lazy"
              />
            </div>
            <div className="ts-image-card">
              <img
                src={heroStats.timesSquareImageClose || "./assets/images/times-square-close.webp"}
                alt="Jagat Turkiya Times Square Billboard Close View"
                loading="lazy"
              />
            </div>
          </div>

          <div className="ts-narrative-split">
            <div className="ts-narrative-text">
              <h3>{heroStats.timesSquareStoryTitle || 'Global Recognition: Times Square, New York'}</h3>
              <p>
                {(heroStats.timesSquareStoryPara1 ? heroStats.timesSquareStoryPara1.replace('2024', '2025') : "In 2025, Jagat Singh Turkiya was spotlighted on the digital marquee in Times Square, NYC by Topmate’s Creator Club for excellence in life and mindset transformation.")}
              </p>
              <p>
                {heroStats.timesSquareStoryPara2 || "From overcoming acute personal adversity to having his work projected in the center of Manhattan, Jagat’s journey is living proof: authentic transformation and disciplined execution transcend all boundaries."}
              </p>
            </div>
            <div className="ts-stats-row">
              <div className="ts-stat-item">
                <h4>{heroStats.stat1Val || 'Times Sq.'}</h4>
                <p>{heroStats.stat1Label || 'New York City'}</p>
              </div>
              <div className="ts-stat-item">
                <h4>{heroStats.stat2Val || 'Topmate'}</h4>
                <p>{heroStats.stat2Label || 'Creator Club'}</p>
              </div>
              <div className="ts-stat-item">
                <h4>{heroStats.stat3Val || '15,000+'}</h4>
                <p>{heroStats.stat3Label || 'Lives Impacted'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ground-Level Proof & Transformational Impact Gallery */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">
              How Jagat Turkiya <br />
              <span className="serif-font">Transforms Lives &amp; Shifts Perspectives</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Real transformation happens in live coaching trenches—breaking decades of self-doubt through deep 1-on-1 human conversations.
            </p>
          </div>

          <div className="home-proof-gallery">
            <div className="home-proof-card">
              <div className="home-proof-img-wrap">
                <img 
                  src="./assets/images/coach/jagat-coach-seminar.jpg" 
                  alt="Coach Training Seminar Cohort" 
                  loading="lazy" 
                />
              </div>
              <div className="home-proof-info">
                <h4>Transformative Coach Training</h4>
                <p>Equipping mentors and mentees with deep psychological frameworks and self-mastery tools.</p>
              </div>
            </div>

            <div className="home-proof-card">
              <div className="home-proof-img-wrap">
                <img 
                  src="./assets/images/coach/jagat-podcast-talk.jpg" 
                  alt="Victory Success Talk with Kaushal" 
                  loading="lazy" 
                />
              </div>
              <div className="home-proof-info">
                <h4>Media &amp; Public Dialogue</h4>
                <p>Featured on 'Victory Success Talk' sharing vulnerable truths on overcoming failure and fear.</p>
              </div>
            </div>

            <div className="home-proof-card">
              <div className="home-proof-img-wrap">
                <img 
                  src="./assets/images/coach/jagat-community-felicitation.jpg" 
                  alt="Grassroots Community Felicitation" 
                  loading="lazy" 
                />
              </div>
              <div className="home-proof-info">
                <h4>Community &amp; Youth Impact</h4>
                <p>Honored at grassroots community walks for uplifting underprivileged families and guiding youth.</p>
              </div>
            </div>

            <div className="home-proof-card">
              <div className="home-proof-img-wrap">
                <img 
                  src="./assets/images/coach/jagat-mentor-desk.jpg" 
                  alt="Jagat Turkiya 1-on-1 Mentorship Advisory" 
                  loading="lazy" 
                />
              </div>
              <div className="home-proof-info">
                <h4>Confidential 1-on-1 Sessions</h4>
                <p>1,500+ private consultations uncovering deep subconscious bottlenecks and family alignment.</p>
              </div>
            </div>
          </div>

          {/* Deep Narrative Split */}
          <div className="story-split" style={{ marginTop: '3rem' }}>
            <div className="story-image-wrap">
              <img 
                src="./assets/images/coach/jagat-hero-portrait.png" 
                alt="Jagat Turkiya Executive Coach" 
                loading="lazy" 
              />
            </div>

            <div className="story-text">
              <h3 style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.2rem)', marginBottom: '1.25rem', color: '#ffffff' }}>
                "When your perspective shifts, your entire reality responds."
              </h3>
              <p>
                Over 15 years in enterprise IT, Jagat witnessed brilliant leaders achieve external status yet battle internal anxiety, self-doubt, and emotional isolation.
              </p>
              <p>
                His coaching delivers what conventional education never taught: emotional resilience, unlearning fear, and designing a disciplined personal operating system for permanent peace of mind.
              </p>
              <div style={{ marginTop: '1.75rem' }}>
                <Link to="/about" className="btn btn-outline">
                  Read Jagat's Full Transformation Journey →
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

      {/* Final Callout with Dynamic Coach Portrait */}
      <section className="section section-dark home-final-cta-section" style={{ padding: '6.5rem 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <div className="home-cta-split">
            <div className="home-cta-text-side">
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', marginBottom: '1.25rem', color: '#ffffff', lineHeight: 1.15 }}>
                Ready to Break Your Internal Ceiling? <br />
                <span className="serif-font">Book Your Private Clarity Call.</span>
              </h2>
              <p style={{ color: 'var(--text-silver)', fontSize: '1.08rem', marginBottom: '2.25rem', lineHeight: 1.7, maxWidth: '580px' }}>
                In this confidential 45-minute call, Jagat Turkiya will audit your bottlenecks, identify subconscious friction, and build your actionable transformation roadmap.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-white" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
                  Book Your Clarity Call
                </Link>
                <Link to="/mastermind" className="btn btn-glass" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
                  Explore Mastermind
                </Link>
              </div>
            </div>

            <div className="home-cta-img-wrap">
              <img 
                src="./assets/images/coach/jagat-cta-energy.jpg" 
                alt="Jagat Turkiya Transformation Coach" 
                loading="lazy" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
