import React, { useState, useEffect } from 'react';
import { getStories } from '../lib/cmsStore';
import StoryReaderModal from './StoryReaderModal';

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

  // Find featured story (or first available)
  const featuredStory = stories.find(s => s.id === '30-rupees-walk') || stories[0] || {};
  const featuredIndex = stories.findIndex(s => s.id === featuredStory.id);

  const remaining = stories.filter(s => s.id !== featuredStory.id);
  const leftStories = (remaining.slice(0, 2).length > 0 ? remaining.slice(0, 2) : stories.slice(0, 2)).map(story => ({
    story,
    index: stories.findIndex(s => s.id === story.id)
  }));

  const rightStories = (remaining.slice(2, 4).length > 0 ? remaining.slice(2, 4) : stories.slice(2, 4)).map(story => ({
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

  return (
    <section className="section stories-section" id="stories">
      <div className="container">
        {/* Section Header: Pure English, Clean & Focused (NO Eyebrow Tag, NO Badges) */}
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

        {/* 3-Column Magazine Bento Grid: Pure Focus on Stories (NO Badges, NO Pills) */}
        <div className="stories-bento-grid">
          {/* Left Column (2 Stacked Stories) */}
          <div className="stories-side-col">
            {leftStories.map(({ story, index }) => (
              <div
                key={story.id}
                className="story-card story-card-compact"
                onClick={() => handleOpen(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleOpen(index); }}
              >
                <div className="story-card-bg-wrap">
                  <img
                    src={story.localImage || story.image}
                    alt={story.title}
                    className="story-card-bg-img"
                    loading="lazy"
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
                  src={featuredStory.localImage || featuredStory.image}
                  alt={featuredStory.title}
                  className="story-card-bg-img"
                  loading="lazy"
                />
                <div className="story-card-overlay featured-overlay"></div>
              </div>

              <div className="story-card-content featured-content">
                <h3 className="story-card-title featured-title">
                  {featuredStory.title}
                </h3>
                <p className="story-card-excerpt">
                  {featuredStory.excerpt}
                </p>
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
                key={story.id}
                className="story-card story-card-compact"
                onClick={() => handleOpen(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleOpen(index); }}
              >
                <div className="story-card-bg-wrap">
                  <img
                    src={story.localImage || story.image}
                    alt={story.title}
                    className="story-card-bg-img"
                    loading="lazy"
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
