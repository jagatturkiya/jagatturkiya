import React, { useState, useEffect } from 'react';
import { Sparkles, Check, Globe } from 'lucide-react';
import { getHeroAndTimesSquare, saveHeroAndTimesSquare } from '../../lib/cmsStore';

export default function HomePageAdmin() {
  const [formData, setFormData] = useState({});
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    const data = getHeroAndTimesSquare();
    setFormData(data);
  }, []);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    saveHeroAndTimesSquare(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      {/* Success Notification */}
      {saveSuccess && (
        <div style={{
          backgroundColor: '#0a2318',
          border: '1px solid #10b981',
          color: '#ffffff',
          padding: '0.85rem 1.25rem',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontSize: '0.88rem'
        }}>
          <Check size={18} color="#10b981" />
          <span>Homepage copy &amp; Times Square stats updated live on the website!</span>
        </div>
      )}

      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{
          fontSize: '1.75rem',
          fontWeight: 800,
          margin: '0 0 0.35rem',
          color: '#ffffff',
          fontFamily: "'Instrument Sans', sans-serif"
        }}>
          Homepage Hero &amp; Times Square Stats CMS
        </h1>
        <p style={{ margin: 0, color: '#888888', fontSize: '0.88rem' }}>
          Customize the main website headline, call-to-actions, Times Square narrative, and social proof stats.
        </p>
      </div>

      <form onSubmit={handleSave}>
        {/* Card 1: Hero Section */}
        <div style={{
          backgroundColor: '#0a0a0a',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '1.75rem',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <Sparkles size={18} color="#ffffff" />
            <h2 style={{ margin: 0, fontSize: '1.15rem', color: '#ffffff', fontWeight: 700 }}>
              Homepage Hero Section
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Headline Line 1</label>
                <span style={{ fontSize: '0.72rem', color: '#888888' }}>{(formData.heroTitle || '').length}/80</span>
              </div>
              <input
                type="text"
                required
                maxLength={80}
                value={formData.heroTitle || ''}
                onChange={e => handleChange('heroTitle', e.target.value)}
                placeholder="Headline Line 1"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Headline Highlight (Serif)</label>
                <span style={{ fontSize: '0.72rem', color: '#888888' }}>{(formData.heroTitleHighlight || '').length}/80</span>
              </div>
              <input
                type="text"
                required
                maxLength={80}
                value={formData.heroTitleHighlight || ''}
                onChange={e => handleChange('heroTitleHighlight', e.target.value)}
                placeholder="Headline highlight"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Hero Lead Paragraph */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Sub-headline / Lead Paragraph</label>
              <span style={{ fontSize: '0.72rem', color: '#888888' }}>{(formData.heroLead || '').length}/300</span>
            </div>
            <textarea
              rows={3}
              maxLength={300}
              value={formData.heroLead || ''}
              onChange={e => handleChange('heroLead', e.target.value)}
              placeholder="Sub-headline / lead paragraph..."
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                backgroundColor: '#141414',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.9rem',
                outline: 'none',
                resize: 'vertical',
                lineHeight: 1.6
              }}
            />
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                Primary Button Label
              </label>
              <input
                type="text"
                maxLength={40}
                value={formData.ctaPrimaryText || ''}
                onChange={e => handleChange('ctaPrimaryText', e.target.value)}
                placeholder="Primary button label"
                style={{
                  width: '100%',
                  padding: '0.7rem 1rem',
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                Primary Button Link
              </label>
              <input
                type="text"
                maxLength={100}
                value={formData.ctaPrimaryLink || ''}
                onChange={e => handleChange('ctaPrimaryLink', e.target.value)}
                placeholder="/mastermind"
                style={{
                  width: '100%',
                  padding: '0.7rem 1rem',
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                Secondary Button Label
              </label>
              <input
                type="text"
                maxLength={40}
                value={formData.ctaSecondaryText || ''}
                onChange={e => handleChange('ctaSecondaryText', e.target.value)}
                placeholder="Secondary button label"
                style={{
                  width: '100%',
                  padding: '0.7rem 1rem',
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                Secondary Button Link
              </label>
              <input
                type="text"
                maxLength={100}
                value={formData.ctaSecondaryLink || ''}
                onChange={e => handleChange('ctaSecondaryLink', e.target.value)}
                placeholder="/contact"
                style={{
                  width: '100%',
                  padding: '0.7rem 1rem',
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>
        </div>

        {/* Card 2: Times Square Showcase & Stats */}
        <div style={{
          backgroundColor: '#0a0a0a',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '1.75rem',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <Globe size={18} color="#ffffff" />
            <h2 style={{ margin: 0, fontSize: '1.15rem', color: '#ffffff', fontWeight: 700 }}>
              Times Square NYC Showcase &amp; Impact Stats
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                Section Title
              </label>
              <input
                type="text"
                maxLength={100}
                value={formData.timesSquareTitle || ''}
                onChange={e => handleChange('timesSquareTitle', e.target.value)}
                placeholder="Section title"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                Section Subtitle
              </label>
              <input
                type="text"
                maxLength={140}
                value={formData.timesSquareSubtitle || ''}
                onChange={e => handleChange('timesSquareSubtitle', e.target.value)}
                placeholder="Section subtitle"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
              Story Narrative Heading
            </label>
            <input
              type="text"
              maxLength={120}
              value={formData.timesSquareStoryTitle || ''}
              onChange={e => handleChange('timesSquareStoryTitle', e.target.value)}
              placeholder="Narrative heading"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                backgroundColor: '#141414',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                Story Paragraph 1
              </label>
              <textarea
                rows={4}
                maxLength={500}
                value={formData.timesSquareStoryPara1 || ''}
                onChange={e => handleChange('timesSquareStoryPara1', e.target.value)}
                placeholder="Story paragraph 1..."
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.86rem',
                  outline: 'none',
                  resize: 'vertical',
                  lineHeight: 1.55
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                Story Paragraph 2
              </label>
              <textarea
                rows={4}
                maxLength={500}
                value={formData.timesSquareStoryPara2 || ''}
                onChange={e => handleChange('timesSquareStoryPara2', e.target.value)}
                placeholder="Story paragraph 2..."
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.86rem',
                  outline: 'none',
                  resize: 'vertical',
                  lineHeight: 1.55
                }}
              />
            </div>
          </div>

          {/* Impact Stats */}
          <h4 style={{ margin: '0 0 0.85rem', fontSize: '0.92rem', color: '#ffffff', fontWeight: 700 }}>
            Impact Counter Badges
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {/* Stat 1 */}
            <div style={{ padding: '1rem', backgroundColor: '#141414', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ marginBottom: '8px' }}>
                <label style={{ fontSize: '0.74rem', color: '#888888', fontWeight: 600 }}>Stat 1 Value</label>
                <input
                  type="text"
                  maxLength={30}
                  value={formData.stat1Val || ''}
                  onChange={e => handleChange('stat1Val', e.target.value)}
                  placeholder="Stat value"
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.84rem'
                  }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.74rem', color: '#888888', fontWeight: 600 }}>Stat 1 Label</label>
                <input
                  type="text"
                  maxLength={40}
                  value={formData.stat1Label || ''}
                  onChange={e => handleChange('stat1Label', e.target.value)}
                  placeholder="Stat label"
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.84rem'
                  }}
                />
              </div>
            </div>

            {/* Stat 2 */}
            <div style={{ padding: '1rem', backgroundColor: '#141414', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ marginBottom: '8px' }}>
                <label style={{ fontSize: '0.74rem', color: '#888888', fontWeight: 600 }}>Stat 2 Value</label>
                <input
                  type="text"
                  maxLength={30}
                  value={formData.stat2Val || ''}
                  onChange={e => handleChange('stat2Val', e.target.value)}
                  placeholder="Stat value"
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.84rem'
                  }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.74rem', color: '#888888', fontWeight: 600 }}>Stat 2 Label</label>
                <input
                  type="text"
                  maxLength={40}
                  value={formData.stat2Label || ''}
                  onChange={e => handleChange('stat2Label', e.target.value)}
                  placeholder="Stat label"
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.84rem'
                  }}
                />
              </div>
            </div>

            {/* Stat 3 */}
            <div style={{ padding: '1rem', backgroundColor: '#141414', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ marginBottom: '8px' }}>
                <label style={{ fontSize: '0.74rem', color: '#888888', fontWeight: 600 }}>Stat 3 Value</label>
                <input
                  type="text"
                  maxLength={30}
                  value={formData.stat3Val || ''}
                  onChange={e => handleChange('stat3Val', e.target.value)}
                  placeholder="Stat value"
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.84rem'
                  }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.74rem', color: '#888888', fontWeight: 600 }}>Stat 3 Label</label>
                <input
                  type="text"
                  maxLength={40}
                  value={formData.stat3Label || ''}
                  onChange={e => handleChange('stat3Label', e.target.value)}
                  placeholder="Stat label"
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.84rem'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '3rem' }}>
          <button
            type="submit"
            className="btn btn-white"
            style={{
              padding: '0.75rem 2rem',
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}
          >
            Save Homepage &amp; Stats Live
          </button>
        </div>
      </form>
    </div>
  );
}
