import React, { useState, useEffect } from 'react';
import { getStories } from '../lib/cmsStore';
import StoryReaderModal from './StoryReaderModal';

const DEFAULT_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80';

export default function StoriesSection({
  title = "Insights for a Better Life",
  subtitle = "Explore powerful insights from Jagat Turkiya on health, mindset, relationships and personal growth to help you create lasting transformation."
}) {
  const [stories, setStories] = useState(() => getStories());
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);

  useEffect(() => {
    const handleUpdate = () => {
      setStories(getStories());
    };
    window.addEventListener('jt_cms_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('jt_cms_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  // Featured story is ₹30 walk (or first story)
  const featuredStory = stories.find(s => s.id === '30-rupees-walk') || stories[0] || {};
  const featuredIndex = stories.findIndex(s => s.id === featuredStory.id);

  const remaining = stories.filter(s => s.id !== featuredStory.id);

  // Left 2 and Right 2 for Bento showcase
  const leftStories = remaining.slice(0, 2).map(story => ({
    story,
    index: stories.findIndex(s => s.id === story.id)
  }));

  const rightStories = remaining.slice(2, 4).map(story => ({
    story,
    index: stories.findIndex(s => s.id === story.id)
  }));

  // Any 5th, 6th, 7th... stories go into the Extended Grid so NOTHING disappears!
  const additionalStories = remaining.slice(4).map(story => ({
    story,
    index: stories.findIndex(s => s.id === story.id)
  }));

  const handleOpen = (idx) => {
    if (idx >= 0 && idx < stories.length) {
      setSelectedStoryIndex(idx);
    }
  };

  const handleClose = () => {
    setSelectedStoryIndex(null);
  };

  const activeStory = selectedStoryIndex !== null ? stories[selectedStoryIndex] : null;

  const getImageSrc = (story) => {
    const src = story.image || story.localImage;
    if (!src || typeof src !== 'string' || src.trim().length < 5) {
      return DEFAULT_FALLBACK_IMAGE;
    }
    return src;
  };

  return (
    <section className="section stories-section" id="stories">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.1rem, 4vw, 3rem)' }}>
            Insights for a <span className="serif-font">Better Life</span>
          </h2>
          <p
            className="section-subtitle"
            style={{ margin: '0.85rem auto 0', maxWidth: '720px', lineHeight: 1.7 }}
          >
            {subtitle}
          </p>
        </div>

        {/* 3-Column Magazine Bento Grid for top 5 stories */}
        <div className="stories-bento-grid">
          {/* Left Column (2 Stacked Stories) */}
          <div className="stories-side-col">
            {leftStories.map(({ story, index }) => (
              <div
                key={story.id || index}
                className="story-card story-card-compact"
                onClick={() => handleOpen(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleOpen(index); }}
              >
                <div className="story-card-bg-wrap">
                  <img
                    src={getImageSrc(story)}
                    alt={story.title}
                    className="story-card-bg-img"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = DEFAULT_FALLBACK_IMAGE;
                    }}
                  />
                  <div className="story-card-overlay"></div>
                </div>

                <div className="story-card-content">
                  <h3 className="story-card-title">{story.title}</h3>
                  <div className="story-card-action">
                    <span>Read Story &rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Tall Featured Story */}
          <div className="stories-featured-col">
            <div
              className="story-card story-card-featured"
              onClick={() => handleOpen(featuredIndex)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleOpen(featuredIndex); }}
            >
              <div className="story-card-bg-wrap">
                <img
                  src={getImageSrc(featuredStory)}
                  alt={featuredStory.title}
                  className="story-card-bg-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = DEFAULT_FALLBACK_IMAGE;
                  }}
                />
                <div className="story-card-overlay featured-overlay"></div>
              </div>

              <div className="story-card-content featured-content">
                <h3 className="story-card-title featured-title">
                  {featuredStory.title}
                </h3>
                {featuredStory.excerpt && (
                  <p className="story-card-excerpt">
                    {featuredStory.excerpt}
                  </p>
                )}
                <div className="story-card-action featured-action">
                  <span>Read Article</span>
                  <span className="action-arrow">&rarr;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (2 Stacked Stories) */}
          <div className="stories-side-col">
            {rightStories.map(({ story, index }) => (
              <div
                key={story.id || index}
                className="story-card story-card-compact"
                onClick={() => handleOpen(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleOpen(index); }}
              >
                <div className="story-card-bg-wrap">
                  <img
                    src={getImageSrc(story)}
                    alt={story.title}
                    className="story-card-bg-img"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = DEFAULT_FALLBACK_IMAGE;
                    }}
                  />
                  <div className="story-card-overlay"></div>
                </div>

                <div className="story-card-content">
                  <h3 className="story-card-title">{story.title}</h3>
                  <div className="story-card-action">
                    <span>Read Story &rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extended Stories Grid: If new stories are added, they are rendered here seamlessly without pushing out old ones! */}
        {additionalStories.length > 0 && (
          <div style={{ marginTop: '2.5rem' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem'
            }}>
              {additionalStories.map(({ story, index }) => (
                <div
                  key={story.id || index}
                  className="story-card story-card-compact"
                  style={{ minHeight: '260px' }}
                  onClick={() => handleOpen(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleOpen(index); }}
                >
                  <div className="story-card-bg-wrap">
                    <img
                      src={getImageSrc(story)}
                      alt={story.title}
                      className="story-card-bg-img"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = DEFAULT_FALLBACK_IMAGE;
                      }}
                    />
                    <div className="story-card-overlay"></div>
                  </div>

                  <div className="story-card-content">
                    <h3 className="story-card-title">{story.title}</h3>
                    {story.excerpt && (
                      <p style={{
                        fontSize: '0.84rem',
                        color: '#d4d4d8',
                        lineHeight: 1.5,
                        margin: '0 0 1rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {story.excerpt}
                      </p>
                    )}
                    <div className="story-card-action">
                      <span>Read Story &rarr;</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Full-Screen Immersive Story Reader Modal */}
      {activeStory && (
        <StoryReaderModal
          story={activeStory}
          onClose={handleClose}
        />
      )}
    </section>
  );
}
