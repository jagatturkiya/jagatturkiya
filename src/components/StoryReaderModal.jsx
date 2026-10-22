import React, { useEffect, useRef, useState } from 'react';
import { getComments, postComment } from '../lib/supabase';

export default function StoryReaderModal({
  story,
  onClose
}) {
  const scrollContainerRef = useRef(null);
  const [comments, setComments] = useState([]);
  const [commentForm, setCommentForm] = useState({ name: '', email: '', text: '' });
  const [submittingComment, setSubmittingComment] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (story) {
      getComments(story.id || story.slug || story.title).then(setComments);
    }
  }, [story]);

  const handlePostComment = async (e) => {
    e.preventDefault();
    if (!commentForm.name.trim() || !commentForm.text.trim()) return;
    setSubmittingComment(true);
    const newComm = await postComment({
      story_id: story.id || story.slug || story.title,
      story_title: story.title,
      author_name: commentForm.name.trim(),
      author_email: commentForm.email.trim(),
      comment_text: commentForm.text.trim()
    });
    if (newComm) {
      setComments(prev => [newComm, ...prev]);
      setCommentForm({ name: '', email: '', text: '' });
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 4000);
    }
    setSubmittingComment(false);
  };

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
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80';
            }}
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

          {/* Interactive Reader Discussions / Comments Section */}
          <section className="story-comments-section" style={{
            marginTop: '3.5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div>
                <h3 style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  margin: '0 0 0.35rem',
                  color: '#ffffff',
                  fontFamily: "'Instrument Sans', sans-serif"
                }}>
                  Reader Discussions & Insights
                </h3>
                <p style={{ margin: 0, color: 'var(--text-silver, #94a3b8)', fontSize: '0.85rem' }}>
                  Share your reflections or ask Jagat Turkiya a question directly.
                </p>
              </div>

              <span style={{
                fontSize: '0.78rem',
                color: 'var(--text-silver, #94a3b8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.25rem 0.65rem',
                borderRadius: '999px'
              }}>
                {comments.length} {comments.length === 1 ? 'Response' : 'Responses'}
              </span>
            </div>

            {/* Leave a Comment Form */}
            <form onSubmit={handlePostComment} style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '1.4rem',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', marginBottom: '0.85rem' }}>
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={commentForm.name}
                  onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
                <input
                  type="email"
                  placeholder="Your Email (Optional, kept private)"
                  value={commentForm.email}
                  onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
              </div>

              <textarea
                rows={3}
                required
                placeholder="What was your main takeaway from this transformation story?..."
                value={commentForm.text}
                onChange={(e) => setCommentForm({ ...commentForm, text: e.target.value })}
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  fontSize: '0.88rem',
                  lineHeight: 1.5,
                  resize: 'vertical',
                  outline: 'none',
                  marginBottom: '0.85rem'
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                {submitSuccess && (
                  <span style={{ color: '#34d399', fontSize: '0.82rem', fontWeight: 600 }}>
                    ✓ Thank you! Your thought has been posted.
                  </span>
                )}
                <button
                  type="submit"
                  disabled={submittingComment}
                  style={{
                    marginLeft: 'auto',
                    backgroundColor: '#ffffff',
                    color: '#050505',
                    border: 'none',
                    padding: '0.6rem 1.35rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: submittingComment ? 'not-allowed' : 'pointer'
                  }}
                >
                  {submittingComment ? 'Posting...' : 'Post Thought'}
                </button>
              </div>
            </form>

            {/* Existing Comments List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {comments.map((c, i) => (
                <div
                  key={c.id || i}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    padding: '1.25rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.85rem'
                      }}>
                        {c.author ? c.author[0] : 'R'}
                      </div>
                      <span style={{ fontWeight: 600, color: '#ffffff', fontSize: '0.9rem' }}>
                        {c.author}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-silver, #94a3b8)' }}>
                      {c.date || 'Recently'}
                    </span>
                  </div>

                  <p style={{
                    margin: '0 0 0.85rem',
                    color: 'rgba(255, 255, 255, 0.82)',
                    fontSize: '0.88rem',
                    lineHeight: 1.6
                  }}>
                    {c.text}
                  </p>

                  {/* Coach Jagat Turkiya Reply Block */}
                  {c.coach_reply && (
                    <div style={{
                      backgroundColor: 'rgba(217, 119, 6, 0.08)',
                      borderLeft: '3px solid #f59e0b',
                      borderRadius: '0 8px 8px 0',
                      padding: '0.85rem 1rem',
                      marginTop: '0.75rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        color: '#f59e0b',
                        letterSpacing: '0.06em',
                        marginBottom: '0.35rem'
                      }}>
                        <span>COACH JAGAT TURKIYA REPLY</span>
                      </div>
                      <p style={{
                        margin: 0,
                        fontSize: '0.85rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: 1.55
                      }}>
                        {c.coach_reply}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Back Button */}
          <footer className="story-modal-footer" style={{ marginTop: '2.5rem' }}>
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
