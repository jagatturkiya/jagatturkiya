import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SuccessStories() {
  const [activeTab, setActiveTab] = useState('all');
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

  const filteredReviews = activeTab === 'all' 
    ? allReviews 
    : allReviews.filter(r => r.category === activeTab);

  return (
    <div className="success-stories-page">
      {/* Hero Header */}
      <section className="section text-center" style={{ paddingTop: '5rem', paddingBottom: '3.5rem' }}>
        <div className="container" style={{ maxWidth: '920px', margin: '0 auto' }}>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', marginBottom: '1.25rem', lineHeight: 1.18 }}>
            Real People. Real Breakthroughs. <br />
            <span className="serif-font">Permanent Peace of Mind.</span>
          </h1>

          <p className="section-subtitle" style={{ maxWidth: '740px', margin: '0 auto 2.5rem', fontSize: '1.08rem', lineHeight: 1.68 }}>
            Discover how corporate executives, insurance advisors, bankers, and homemakers turned money into enduring wealth, overcame limiting beliefs, and built unshakeable direction working with Coach Jagat Turkiya.
          </p>

          {/* Social Proof Stats Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1.25rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            borderRadius: '12px',
            padding: '1.75rem 1.5rem',
            maxWidth: '820px',
            margin: '0 auto'
          }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif" }}>15,000+</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-silver)', marginTop: '4px' }}>Lives Impacted Globally</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#10b981', fontFamily: "'Instrument Sans', sans-serif" }}>4.9 / 5.0</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-silver)', marginTop: '4px' }}>Topmate Verified Rating</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif" }}>Times Sq. NYC</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-silver)', marginTop: '4px' }}>Topmate Creator Club</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', fontFamily: "'Instrument Sans', sans-serif" }}>9+ Countries</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-silver)', marginTop: '4px' }}>Global Alumni Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Testimonials */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title">Video Stories &amp; Case Studies</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Hear directly from clients on how their mindset, habits, and relationship with money evolved through Jagat’s mentorship.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {videoTestimonials.map((v) => (
              <div 
                key={v.id} 
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, border-color 0.25s ease'
                }}
              >
                {/* Video / Thumbnail Container */}
                <div 
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '56.25%',
                    backgroundColor: '#000',
                    cursor: 'pointer'
                  }}
                  onClick={() => setActiveVideoModal(v)}
                >
                  <img
                    src={v.thumbnail}
                    alt={v.name}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.2s'
                  }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)'
                    }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="#050505" style={{ marginLeft: '3px' }}>
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
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
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setActiveVideoModal(null)}
        >
          <div 
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '820px',
              backgroundColor: '#0a0a0c',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.9)',
              border: '1px solid rgba(255, 255, 255, 0.18)'
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 18px',
              borderBottom: '1px solid rgba(255,255,255,0.08)'
            }}>
              <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#ffffff' }}>
                {activeVideoModal.name} — Client Experience
              </h4>
              <button 
                type="button"
                onClick={() => setActiveVideoModal(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '1.4rem',
                  cursor: 'pointer',
                  lineHeight: 1
                }}
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
          <div style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            borderRadius: '14px',
            padding: 'clamp(2rem, 4vw, 3rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', lineHeight: 1.25, marginBottom: '1rem' }}>
                Honored on the World Stage by Topmate's Creator Club
              </h3>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.98rem', lineHeight: 1.68, marginBottom: '1rem' }}>
                In 2024, Jagat Singh Turkiya was spotlighted on the world-famous digital marquee in Times Square, New York City as an exceptional transformation coach who has guided thousands through personal and financial sovereignty.
              </p>
              <p style={{ color: 'var(--text-silver)', fontSize: '0.98rem', lineHeight: 1.68 }}>
                From walking 4 km daily through Delhi to save ₹30 in bus fare to standing tall in Manhattan, this recognition is a testament to the life-changing results delivered to his mentees.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem'
            }}>
              <img
                src="./assets/images/times-square-wide.webp"
                alt="Jagat Turkiya Times Square NYC"
                style={{
                  width: '100%',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  objectFit: 'cover'
                }}
              />
              <img
                src="./assets/images/times-square-close.webp"
                alt="Jagat Turkiya Close View Times Square"
                style={{
                  width: '100%',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  objectFit: 'cover'
                }}
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
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '660px' }}>
              Explore unfiltered perspectives across professionals, bankers, insurance advisors, and homemakers.
            </p>

            {/* Filter Tabs */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '1.75rem'
            }}>
              {[
                { id: 'all', label: 'All Reviews (10)' },
                { id: 'professionals', label: 'Professionals & Corporate' },
                { id: 'advisors', label: 'Insurance Agents & Bankers' },
                { id: 'homemakers', label: 'Homemakers & Family Wealth' },
                { id: 'topmate', label: 'Topmate Verified' }
              ].map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    backgroundColor: activeTab === tab.id ? '#ffffff' : 'rgba(255,255,255,0.06)',
                    color: activeTab === tab.id ? '#080808' : '#d4d4d8',
                    border: activeTab === tab.id ? '1px solid #ffffff' : '1px solid rgba(255,255,255,0.14)'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Testimonials Masonry / Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {filteredReviews.map((r, i) => (
              <div 
                key={i}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '12px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, border-color 0.2s ease'
                }}
              >
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
      <section className="section text-center" style={{ padding: '5.5rem 0' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
            Ready to Build Your Own <span className="serif-font">Success Story?</span>
          </h2>
          <p style={{ color: 'var(--text-silver)', fontSize: '1.05rem', marginBottom: '2.25rem', lineHeight: 1.6 }}>
            Whether you are navigating executive complexity, financial advisory practices, or stewarding family capital—work directly with Coach Jagat Turkiya to install an institutional wealth and life architecture.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
