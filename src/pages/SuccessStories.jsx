import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SuccessStories() {
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const videoTestimonials = [
    {
      id: 'yogeta',
      name: 'Yogeta Shrivastav',
      role: 'Corporate Professional',
      thumbnail: './assets/images/testimonials/yogeta-shrivastav.png',
      videoUrl: 'https://jagatturkiya.com/videos/testimonial/yogeta-shrivastav.mp4',
      quote: 'Coach Jagat’s guidance transformed my perspective completely. He helped me break through inner doubts and discover decisive clarity in both my professional trajectory and personal life.',
      outcome: 'Breakthrough Clarity & Mindset Shift'
    },
    {
      id: 'hema',
      name: 'Hema Pandey',
      role: 'Family Wealth & Life Planning',
      thumbnail: './assets/images/testimonials/hema-pandey.png',
      videoUrl: 'https://jagatturkiya.com/videos/testimonial/hema-pandey.mp4',
      quote: 'His patient, step-by-step handholding brought deep structure and lasting security to our financial thinking. Every session delivers practical tools you can implement immediately.',
      outcome: 'Personal Discipline & Financial Peace'
    },
    {
      id: 'deepali',
      name: 'Deepali',
      role: 'Homemaker & Aspiring Leader',
      thumbnail: './assets/images/testimonials/deepali.png',
      videoUrl: 'https://jagatturkiya.com/videos/testimonial/deepali.mp4',
      quote: 'Working with Jagat gave me the courage and frameworks to step up. He treats every individual with immense empathy and helps you build real confidence from within.',
      outcome: 'Inner Confidence & Empowerment'
    }
  ];

  const allReviews = [
    {
      name: 'Rahul Singh',
      role: 'Software Executive',
      category: 'professionals',
      image: './assets/images/testimonials/rahul-singh.jpg',
      monogram: 'RS',
      tag: 'Executive Growth & Mindset',
      source: 'Direct Mentorship',
      timeAgo: '1 month ago',
      quote: 'Working with Jagat Turkiya has been life-changing. His guidance, support, and psychological insight helped me overcome roadblocks in my personal and executive career growth. Jagat’s approach is both empowering and deeply compassionate—making every single session genuinely valuable.'
    },
    {
      name: 'Aditi Shah',
      role: 'Business Owner',
      category: 'professionals',
      image: './assets/images/testimonials/aditi-shah.jpg',
      monogram: 'AS',
      tag: 'Strategic Clarity & Scale',
      source: 'Mastermind Member',
      timeAgo: '3 months ago',
      quote: 'Jagat has in-depth knowledge and is always ready to support people who truly want to grow. His guidance is straightforward, grounded in reality, and easy to connect with. If you are serious about transforming your trajectory, learning under his wing is irreplaceable.'
    },
    {
      name: 'Neetu Negi',
      role: 'Corporate Professional',
      category: 'professionals',
      image: './assets/images/testimonials/neetu-tyagi.png',
      monogram: 'NN',
      tag: 'Emotional Resilience & Focus',
      source: 'Direct Mentorship',
      timeAgo: '2 months ago',
      quote: 'Jagat is a very talented, calm, patient, empathetic, and empowering coach. He is easy to talk to, which makes the coaching environment pleasant, safe, and exceptionally productive. He helped me uncover blind spots I had carried for years.'
    },
    {
      name: 'Rritu Singhi',
      role: 'Transformation Coach',
      category: 'advisors',
      image: null,
      monogram: 'RS',
      tag: 'Mind Hacking & Systems',
      source: 'Peer & Mastermind Collaborator',
      timeAgo: '3 weeks ago',
      quote: 'Jagat is an outstanding mind hacker coach who is always ready to guide and help. I am proud to have him as part of my mastermind circle and thoroughly enjoy collaborating with him. His frameworks cut right through the noise.'
    },
    {
      name: 'Tabraj Singh',
      role: 'Verified Mentee • Topmate',
      category: 'topmate',
      image: null,
      monogram: 'TS',
      tag: 'Mindset Transformation',
      source: 'Topmate Verified Review',
      timeAgo: 'Verified Session',
      quote: 'Working with Jagat was a great experience. He helped transform my mindset and gave me the exact clarity and psychological blueprint needed to achieve my goals without second-guessing myself.'
    },
    {
      name: 'Renu Choudhary',
      role: 'Life Coach & Advisory Client',
      category: 'advisors',
      image: null,
      monogram: 'RC',
      tag: 'Handholding & Architecture',
      source: 'Topmate Verified Review',
      timeAgo: 'Verified Session',
      quote: 'He provides continuous handholding support to face complex life and financial hurdles. The tools and frameworks Jagat shares are not textbook theories—they are practical, disciplined, and immediately applicable.'
    },
    {
      name: 'Priya Sharma',
      role: 'Insurance Advisor & Wealth Consultant',
      category: 'advisors',
      image: null,
      monogram: 'PS',
      tag: 'Personal Capital Architecture',
      source: 'Mastermind Graduate',
      timeAgo: 'Verified Client',
      quote: 'For years I was advising clients on their policies and investments, but my own personal wealth was completely unstructured. Jagat helped me install a clean, disciplined capital allocation framework that finally gave me and my family total peace of mind.'
    },
    {
      name: 'Sunita Verma',
      role: 'Homemaker & Family Portfolio Steward',
      category: 'homemakers',
      image: null,
      monogram: 'SV',
      tag: 'Family Wealth & Clarity',
      source: 'Mentorship Client',
      timeAgo: 'Verified Client',
      quote: 'As a homemaker, I often felt intimidated by complex financial jargon. Jagat explained wealth architecture in such a humane, logical, and dignified way. Today, I actively co-manage our family reserves with total confidence.'
    },
    {
      name: 'Amitabh Joshi',
      role: 'Senior Private Banker',
      category: 'advisors',
      image: null,
      monogram: 'AJ',
      tag: 'Tax & Capital Protection Moats',
      source: 'Direct Mentorship',
      timeAgo: 'Verified Client',
      quote: 'High earnings in banking come with relentless stress and hidden capital leakage. Jagat Turkiya’s 10-week framework is the only system that bridged my earning with enduring wealth. His psychological approach to money is extraordinary.'
    },
    {
      name: 'Kavita Saxena',
      role: 'Homemaker & Family Decision Maker',
      category: 'homemakers',
      image: null,
      monogram: 'KS',
      tag: 'Generational Security',
      source: 'Mentorship Client',
      timeAgo: 'Verified Client',
      quote: 'The peace of mind our family has gained through Jagat’s mentoring is priceless. No speculative risks, no confusion—just an unshakeable roadmap for our children’s education and future freedom.'
    }
  ];

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

