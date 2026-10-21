import React, { useState } from 'react';
import storiesData from '../data/stories.json';
import StoryReaderModal from './StoryReaderModal';

export default function StoriesSection({
  title = "Insights for a Better Life",
  subtitle = "Explore powerful insights from Jagat Turkiya on health, mindset, relationships and personal growth to help you create lasting transformation."
}) {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);

  const stories = storiesData;

  // Find featured story (₹30 walk) and the side stories
  const featuredStory = stories.find(s => s.id === '30-rupees-walk') || stories[2];
  const featuredIndex = stories.findIndex(s => s.id === '30-rupees-walk');

  const leftStories = [
    { story: stories.find(s => s.id === 'founder-journey') || stories[0], index: stories.findIndex(s => s.id === 'founder-journey') },
    { story: stories.find(s => s.id === 'leadership-ego') || stories[1], index: stories.findIndex(s => s.id === 'leadership-ego') }
  ];

  const rightStories = [
    { story: stories.find(s => s.id === 'cycle-consistency') || stories[3], index: stories.findIndex(s => s.id === 'cycle-consistency') },
    { story: stories.find(s => s.id === 'artisan-experience') || stories[4], index: stories.findIndex(s => s.id === 'artisan-experience') }
  ];

  const handleOpen = (idx) => {
    setSelectedStoryIndex(idx);
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
