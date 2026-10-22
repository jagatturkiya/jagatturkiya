import React, { useState } from 'react';
import { FileText, Plus, MessageSquare, Clock, Calendar, CheckCircle2 } from 'lucide-react';

export default function BlogsAdmin() {
  const [blogs] = useState([
    {
      id: 'b-1',
      title: '₹30 बचाने के लिए 12 महीने तक हर दिन पैदल चला।',
      author: 'Jagat Turkiya',
      date: '16 Jun, 2026',
      category: 'Consistency & Growth',
      commentsCount: 1,
      status: 'PUBLISHED',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'b-2',
      title: 'आपका ज़िन्दगी को देखने का नज़रिया कैसा है',
      author: 'Jagat Turkiya',
      date: '16 Jun, 2026',
      category: 'Mindset Mastery',
      commentsCount: 2,
      status: 'PUBLISHED',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80'
    }
  ]);

  return (
    <div className="blogs-admin-view" style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            Blogs & Articles Management
          </h1>
          <p style={{ margin: 0, color: '#64748b', fontSize: '0.88rem' }}>
            <strong>Blogs & Articles:</strong> Manage your knowledge base and insightful posts.
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
          <span>Write New Article</span>
        </button>
      </div>

      {/* Blogs Table matching media_1792664203429.jpg */}
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
                <th style={{ padding: '0.95rem 1.25rem' }}>ARTICLE DETAILS</th>
                <th style={{ padding: '0.95rem 1.25rem' }}>CATEGORY</th>
                <th style={{ padding: '0.95rem 1.25rem' }}>ENGAGEMENT</th>
                <th style={{ padding: '0.95rem 1.25rem' }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((b) => (
                <tr
                  key={b.id}
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
                        width: '54px',
                        height: '42px',
                        borderRadius: '6px',
                        backgroundColor: '#0f172a',
                        overflow: 'hidden',
                        flexShrink: 0
                      }}>
                        <img
                          src={b.image}
                          alt={b.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.86rem' }}>
                          {b.title}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                          👤 {b.author} • 📅 {b.date}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ padding: '1rem 1.25rem' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      backgroundColor: '#f1f5f9',
                      color: '#334155',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px'
                    }}>
                      {b.category}
                    </span>
                  </td>

                  <td style={{ padding: '1rem 1.25rem' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      backgroundColor: '#eef2ff',
                      color: '#4f46e5',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 700
                    }}>
                      <MessageSquare size={13} />
                      <span>{b.commentsCount}</span>
                    </span>
                  </td>

                  <td style={{ padding: '1rem 1.25rem' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      backgroundColor: '#ecfdf5',
                      color: '#059669',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '999px'
                    }}>
                      • {b.status}
                    </span>
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
