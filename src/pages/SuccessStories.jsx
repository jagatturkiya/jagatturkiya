import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTestimonials } from '../lib/cmsStore';

export default function SuccessStories() {
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [testimonialsData, setTestimonialsData] = useState(() => getTestimonials());

  useEffect(() => {
    const handleUpdate = () => {
      setTestimonialsData(getTestimonials());
    };
    window.addEventListener('jt_cms_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('jt_cms_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const videoTestimonials = testimonialsData.videos;
  const allReviews = testimonialsData.reviews;

  return (
    <div className="success-stories-page">
      {/* Hero Header */}
      <section className="section text-center success-hero-section">
        <div className="container success-hero-container">
          <h1 className="section-title success-hero-title">
            Real People. Real Breakthroughs. <br />
            <span className="serif-font">Permanent Peace of Mind.</span>
          </h1>

          <p className="section-subtitle success-hero-subtitle">
            Discover how corporate executives, insurance advisors, bankers, and homemakers turned money into enduring wealth, overcame limiting beliefs, and built unshakeable direction working with Coach Jagat Turkiya.
          </p>

          {/* Social Proof Stats Bar */}
          <div className="success-stats-grid">
            <div className="success-stat-item">
              <div className="stat-num">15,000+</div>
              <div className="stat-label">Lives Impacted Globally</div>
            </div>
            <div className="success-stat-item">
              <div className="stat-num stat-num-accent">4.9 / 5.0</div>
              <div className="stat-label">Topmate Verified Rating</div>
            </div>
            <div className="success-stat-item">
              <div className="stat-num">Times Sq. NYC</div>
              <div className="stat-label">Topmate Creator Club</div>
            </div>
            <div className="success-stat-item">
              <div className="stat-num">9+ Countries</div>
              <div className="stat-label">Global Alumni Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Testimonials */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title">Video Stories &amp; Case Studies</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Hear directly from clients on how their mindset, habits, and relationship with money evolved through Jagat’s mentorship.
            </p>
          </div>

          <div className="success-video-grid">
            {videoTestimonials.map((v) => (
              <div key={v.id} className="success-video-card">
                {/* Video / Thumbnail Container */}
                <div 
                  className="success-video-thumb-wrap"
                  onClick={() => setActiveVideoModal(v)}
                >
                  <img
                    src={v.thumbnail}
                    alt={v.name}
                    className="success-video-thumb-img"
                  />
                  <div className="success-video-play-overlay">
                    <div className="success-video-play-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="#050505" style={{ marginLeft: '3px' }}>
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="success-video-card-body">
                  <p style={{
                    fontSize: '0.82rem',
                    color: '#d4d4d8',
                    fontWeight: 500,
                    margin: '0 0 0.75rem 0'
                  }}>
                    {v.outcome}
                  </p>

                  <p style={{
                    color: 'var(--text-silver)',
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                    marginBottom: '1.25rem',
                    flex: 1
                  }}>
                    "{v.quote}"
                  </p>

                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: '0 0 2px' }}>
                      {v.name}
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
                      {v.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      {activeVideoModal && (
        <div 
          className="success-video-modal-overlay"
          onClick={() => setActiveVideoModal(null)}
        >
          <div 
            className="success-video-modal-card"
            onClick={e => e.stopPropagation()}
          >
            <div className="success-video-modal-header">
              <h4 className="success-video-modal-title">
                {activeVideoModal.name} — Client Experience
              </h4>
              <button 
                type="button"
                onClick={() => setActiveVideoModal(null)}
                className="success-video-modal-close"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div style={{ position: 'relative', paddingTop: '56.25%', backgroundColor: '#000' }}>
              <video
                src={activeVideoModal.videoUrl}
                controls
                autoPlay
                playsInline
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Times Square Recognition Spotlight Banner */}
      <section className="section" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div className="success-ts-banner">
            <div>
              <h3 className="success-ts-title">
                Honored on the World Stage by Topmate's Creator Club
              </h3>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.98rem', lineHeight: 1.68, marginBottom: '1rem' }}>
                In 2024, Jagat Singh Turkiya was spotlighted on the world-famous digital marquee in Times Square, New York City as an exceptional transformation coach who has guided thousands through personal and financial sovereignty.
              </p>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.98rem', lineHeight: 1.68 }}>
                From walking 4 km daily through Delhi to save ₹30 in bus fare to standing tall in Manhattan, this recognition is a testament to the life-changing results delivered to his mentees.
              </p>
            </div>

            <div className="success-ts-images-grid">
              <img
                src="./assets/images/times-square-wide.webp"
                alt="Jagat Turkiya Times Square NYC"
                className="success-ts-img"
              />
              <img
                src="./assets/images/times-square-close.webp"
                alt="Jagat Turkiya Close View Times Square"
                className="success-ts-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Client Reviews with Category Filters */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title">Verified Mentee &amp; Client Experiences</h2>
          </div>

          {/* Testimonials Masonry / Grid */}
          <div className="success-reviews-grid">
            {allReviews.map((r, i) => (
              <div key={i} className="success-review-card">
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}>
                    <div style={{ color: '#fbbf24', fontSize: '0.95rem', letterSpacing: '2px' }}>
                      ★★★★★
                    </div>
                    <span style={{
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}>
                      {r.source}
                    </span>
                  </div>

                  <p style={{
                    color: 'var(--text-silver)',
                    fontSize: '0.95rem',
                    lineHeight: 1.68,
                    marginBottom: '1.5rem'
                  }}>
                    "{r.quote}"
                  </p>
                </div>

                <div>
                  <p style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                    margin: '0 0 0.85rem 0'
                  }}>
                    {r.tag}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    paddingTop: '1rem'
                  }}>
                    {r.image ? (
                      <img
                        src={r.image}
                        alt={r.name}
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '1px solid rgba(255,255,255,0.2)'
                        }}
                      />
                    ) : (
                      <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.9rem'
                      }}>
                        {r.monogram}
                      </div>
                    )}
                    <div>
                      <h5 style={{ margin: 0, fontSize: '0.95rem', color: '#ffffff', fontWeight: 700 }}>
                        {r.name}
                      </h5>
                      <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {r.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="section text-center" style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
            Ready to Build Your Own <span className="serif-font">Success Story?</span>
          </h2>
          <p style={{ color: 'var(--text-silver)', fontSize: '1.05rem', marginBottom: '2.25rem', lineHeight: 1.6 }}>
            Whether you are navigating executive complexity, financial advisory practices, or stewarding family capital—work directly with Coach Jagat Turkiya to install an institutional wealth and life architecture.
          </p>
          <div className="success-cta-actions">
            <Link to="/optin" className="btn btn-white" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
              Apply for Mentorship
            </Link>
            <Link to="/mastermind" className="btn btn-glass" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
              Explore Mastermind Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

