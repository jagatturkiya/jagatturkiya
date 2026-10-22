import React, { useState } from 'react';
import { Star, Plus, Edit3, Trash2 } from 'lucide-react';

export default function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState([
    {
      id: 't-1',
      reviewer: 'Anonymous',
      forProgram: 'Pre-Marriage & Relationship Consult',
      content: 'The session was truly eye-opening. I finally understood how our financial goals could align without conflict.',
      rating: 5
    },
    {
      id: 't-2',
      reviewer: 'Anonymous',
      forProgram: 'Pre-Marriage & Relationship Consult',
      content: 'Jagat Turkiya is an incredible transformation coach! Their clarity and patience made a profound difference.',
      rating: 5
    },
    {
      id: 't-3',
      reviewer: 'Anonymous',
      forProgram: 'Free Next Step Talk : U Turn Call',
      content: 'The session was truly eye-opening. I finally understood where my hidden financial leakages were happening.',
      rating: 5
    },
    {
      id: 't-4',
      reviewer: 'Anonymous',
      forProgram: 'Free Next Step Talk : U Turn Call',
      content: 'Jagat Turkiya is an incredible transformation coach! Their systems-level advice helped me make an immediate career leap.',
      rating: 5
    },
    {
      id: 't-5',
      reviewer: 'Anonymous',
      forProgram: 'Pen2 Fame : Become an author',
      content: 'The session was truly eye-opening. I completed the entire book outline within 48 hours following their exact steps.',
      rating: 5
    },
    {
      id: 't-6',
      reviewer: 'Anonymous',
      forProgram: 'Pen2 Fame : Become an author',
      content: 'Jagat Turkiya is an incredible transformation coach! Their book positioning strategies are unmatched.',
      rating: 5
    }
  ]);

  return (
    <div className="testimonials-admin-view" style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            Manage Testimonials
          </h1>
          <p style={{ margin: 0, color: '#64748b', fontSize: '0.88rem' }}>
            <strong>Student Success Stories:</strong> Manage feedback, reviews, and testimonials for your programs.
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
          <span>Add Testimonial</span>
        </button>
      </div>

      {/* Testimonials Table matching media_1792664210004.jpg */}
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
                <th style={{ padding: '0.95rem 1.25rem' }}>REVIEWER</th>
                <th style={{ padding: '0.95rem 1.25rem' }}>REVIEW CONTENT</th>
                <th style={{ padding: '0.95rem 1.25rem' }}>RATING</th>
                <th style={{ padding: '0.95rem 1.25rem', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map((t) => (
                <tr
                  key={t.id}
                  style={{
                    borderBottom: '1px solid #f1f5f9',
                    transition: 'background-color 0.1s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <td style={{ padding: '1rem 1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: '#f1f5f9',
                        color: '#64748b',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.85rem'
                      }}>
                        {t.reviewer[0]}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.86rem' }}>
                          {t.reviewer}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.15rem' }}>
                          For: {t.forProgram}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ padding: '1rem 1.25rem', maxWidth: '420px' }}>
                    <p style={{ margin: 0, color: '#334155', lineHeight: 1.55 }}>
                      "{t.content}"
                    </p>
                  </td>

                  <td style={{ padding: '1rem 1.25rem' }}>
                    <div style={{ display: 'flex', gap: '0.15rem', color: '#f59e0b' }}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                  </td>

                  <td style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      <button style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '0.3rem' }}>
                        <Edit3 size={15} />
                      </button>
                      <button style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.3rem' }}>
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
