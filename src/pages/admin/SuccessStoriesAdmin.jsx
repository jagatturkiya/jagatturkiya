import React, { useState } from 'react';
import { BookOpen, Plus, Edit3, Trash2, Clock, Calendar } from 'lucide-react';
import storiesData from '../../data/stories.json';

export default function SuccessStoriesAdmin() {
  const [stories, setStories] = useState(storiesData);

  return (
    <div className="stories-admin-view" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1.75rem'
      }}>
        <div>
          <h1 style={{
            fontSize: '1.65rem',
            fontWeight: 800,
            margin: '0 0 0.35rem',
            color: '#0f172a',
            fontFamily: "'Instrument Sans', sans-serif"
          }}>
            Success Stories Management
          </h1>
          <p style={{ margin: 0, color: '#64748b', fontSize: '0.88rem' }}>
            <strong>Success Stories:</strong> Manage client transformations and inspirational journeys.
          </p>
        </div>

        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#4338ca',
            color: '#ffffff',
            border: 'none',
            padding: '0.62rem 1.25rem',
            borderRadius: '8px',
            fontSize: '0.84rem',
            fontWeight: 700,
            cursor: 'pointer'
          }}
        >
          <Plus size={16} />
          <span>Write New Story</span>
        </button>
      </div>

      {/* Stories Table matching media_1792664214543.jpg */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '14px',
        border: '1px solid #e2e8f0',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
      }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.84rem' }}>
            <thead>
              <tr style={{
                backgroundColor: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
                color: '#64748b',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.06em'
              }}>
                <th style={{ padding: '0.95rem 1.25rem' }}>STORY & DETAILS</th>
                <th style={{ padding: '0.95rem 1.25rem' }}>CATEGORY / CLIENT</th>
                <th style={{ padding: '0.95rem 1.25rem' }}>STATUS</th>
                <th style={{ padding: '0.95rem 1.25rem', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {stories.slice(0, 10).map((st) => (
                <tr
                  key={st.id}
                  style={{
                    borderBottom: '1px solid #f1f5f9',
                    transition: 'background-color 0.1s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <td style={{ padding: '1rem 1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '8px',
                        backgroundColor: '#0f172a',
                        overflow: 'hidden',
                        flexShrink: 0
                      }}>
                        <img
                          src={st.image}
                          alt={st.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.86rem' }}>
                          {st.title}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Clock size={11} /> {st.readTime || '5 min read'}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Calendar size={11} /> {st.date || '16 Jun, 2026'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ padding: '1rem 1.25rem' }}>
                    <div style={{ fontWeight: 600, color: '#334155' }}>
                      {st.category}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '0.2rem' }}>
                      Client: {st.clientName || 'Jagat Turkiya Mentee'}
                    </div>
                  </td>

                  <td style={{ padding: '1rem 1.25rem' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      backgroundColor: '#ecfdf5',
                      color: '#059669',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '999px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}>
                      • PUBLISHED
                    </span>
                  </td>

                  <td style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      <button
                        title="Edit"
                        style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '0.3rem' }}
                      >
                        <Edit3 size={15} />
                      </button>
                      <button
                        title="Delete"
                        style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.3rem' }}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
