import React, { useEffect, useRef } from 'react';

export default function StoryReaderModal({
  story,
  onClose
}) {
  const scrollContainerRef = useRef(null);

  // Lock body scroll and handle Escape key to close
  useEffect(() => {
    if (!story) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [story, onClose]);

  if (!story) return null;

  return (
    <div
      className="story-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={story.title}
    >
      {/* Official Executive Header (Logo on Left, Back to Stories on Right) */}
      <header className="story-modal-header">
        <div className="story-modal-header-inner">
          <div
            className="story-modal-logo-wrap"
            onClick={onClose}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            title="Back to home"
          >
            <img
              src="./assets/images/logo-executive.svg"
              alt="Jagat Turkiya"
              className="header-logo-img"
              style={{ height: '28px', width: 'auto', display: 'block' }}
            />
          </div>

          <button
            type="button"
            className="btn btn-outline story-top-back-btn"
            onClick={onClose}
            aria-label="Back to stories"
          >
            &larr; Back<span className="hide-on-mobile"> to Stories</span>
          </button>
        </div>
      </header>

      {/* Main Full-Screen Scrollable Viewport */}
      <div className="story-modal-scroll" ref={scrollContainerRef}>
        {/* Full-Width Cinematic Hero Banner (Edge-to-Edge) */}
        <section className="story-full-hero">
          <img
            src={story.localImage || story.image}
            alt={story.title}
            className="story-full-hero-bg"
            loading="eager"
          />
          <div className="story-full-hero-gradient"></div>

          <div className="container story-hero-inner">
            <h1 className="story-hero-title">{story.title}</h1>
            {story.excerpt && (
              <p className="story-hero-lead">{story.excerpt}</p>
            )}
          </div>
        </section>

        {/* Article Reading Area Below Hero */}
        <main className="story-reading-container">
          {/* Author Metadata Bar */}
          <div className="story-meta-row">
            <div className="story-author-lockup">
              <img
                src="./assets/images/jagat-avatar.png"
                alt="Jagat Turkiya"
                className="story-author-photo"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = './assets/images/jagat-portrait.webp';
                }}
              />
              <div className="story-author-details">
                <span className="story-author-name">Jagat Turkiya</span>
                <span className="story-author-title">Founder, Aapka Coach</span>
              </div>
            </div>

            <div className="story-meta-info">
              <span>16 Jun, 2026</span>
              <span className="story-meta-dot">•</span>
              <span>5 min read</span>
            </div>
          </div>

          {/* Hindi Article Content */}
          <div className="story-article-body">
            {story.paragraphs && story.paragraphs.map((p, idx) => {
              const isQuote = p.startsWith('“') || p.startsWith('"') || p.startsWith('**“');
              const isShortHighlight = p.length < 80 && (p.includes('?') || p.includes('!') || p.includes('—'));

              if (isQuote) {
                return (
                  <blockquote key={idx} className="story-blockquote">
                    <p>{p.replace(/\*\*/g, '')}</p>
                  </blockquote>
                );
              }

              return (
                <p
                  key={idx}
                  className={`story-paragraph ${isShortHighlight ? 'story-paragraph-highlight' : ''}`}
                >
                  {p.replace(/\*\*/g, '')}
                </p>
              );
            })}
          </div>

          {/* Bottom Back Button */}
          <footer className="story-modal-footer">
            <button
              type="button"
              className="btn btn-white story-bottom-back-btn"
              onClick={onClose}
            >
              &larr; Back to Stories
            </button>
          </footer>
        </main>
      </div>
    </div>
  );
}
