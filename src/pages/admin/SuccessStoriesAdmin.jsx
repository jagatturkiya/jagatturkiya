import React, { useState, useEffect } from 'react';
import { BookOpen, Plus, Edit3, Trash2, Clock, Calendar, CheckCircle } from 'lucide-react';
import { getStories, saveStory, deleteStory } from '../../lib/supabase';

export default function SuccessStoriesAdmin() {
  const [stories, setStories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStory, setEditingStory] = useState(null);

  useEffect(() => {
    loadStories();
  }, []);

  const loadStories = async () => {
    const data = await getStories();
    setStories(data);
  };

  const handleOpenAdd = () => {
    setEditingStory({
      id: '',
      title: '',
      category: 'Leadership & Mindset',
      clientName: '',
      readTime: '5 min read',
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
      excerpt: '',
      paragraphs: ['']
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (story) => {
    setEditingStory({
      ...story,
      paragraphs: story.paragraphs || [story.content || '']
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!editingStory.title) return;
    const updated = await saveStory(editingStory);
    setStories(updated);
    setIsModalOpen(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this story?')) {
      const updated = await deleteStory(id);
      setStories(updated);
    }
  };

  return (
    <div className="dark-stories-admin" style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            fontSize: '1.75rem',
            fontWeight: 800,
            margin: '0 0 0.35rem',
            color: '#ffffff',
            fontFamily: "'Instrument Sans', sans-serif"
          }}>
            Success Stories & Case Studies
          </h1>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.85rem' }}>
            Live editorial library displayed on the public website. Edit, publish, or remove client transformation articles.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#ffffff',
            color: '#050505',
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

      {/* Dark Table */}
      <div style={{
        backgroundColor: '#0b0f19',
        borderRadius: '14px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden'
      }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.84rem' }}>
            <thead>
              <tr style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#64748b',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em'
              }}>
                <th style={{ padding: '1rem 1.25rem' }}>STORY & CLIENT</th>
                <th style={{ padding: '1rem 1.25rem' }}>CATEGORY</th>
                <th style={{ padding: '1rem 1.25rem' }}>STATUS</th>
                <th style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {stories.map((st) => (
                <tr
                  key={st.id}
                  style={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                    transition: 'background-color 0.1s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <td style={{ padding: '1.15rem 1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '8px',
                        backgroundColor: '#1e293b',
                        overflow: 'hidden',
                        flexShrink: 0
                      }}>
                        <img
                          src={st.localImage || st.image}
                          alt={st.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          onError={(e) => e.currentTarget.style.display = 'none'}
                        />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.88rem' }}>
                          {st.title}
                        </div>
                        <div style={{ fontSize: '0.74rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                          Client: {st.clientName || 'Private Mentee'} • {st.date || '16 Jun, 2026'}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ padding: '1.15rem 1.25rem' }}>
                    <span style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      color: '#ffffff',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px',
                      fontSize: '0.74rem',
                      fontWeight: 600
                    }}>
                      {st.category}
                    </span>
                  </td>

                  <td style={{ padding: '1.15rem 1.25rem' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#34d399',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                      <span>Live on Website</span>
                    </span>
                  </td>

                  <td style={{ padding: '1.15rem 1.25rem', textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      <button
                        onClick={() => handleOpenEdit(st)}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#ffffff',
                          padding: '0.35rem 0.65rem',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem'
                        }}
                      >
                        <Edit3 size={13} />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => handleDelete(st.id)}
                        style={{
                          backgroundColor: 'rgba(239, 68, 68, 0.1)',
                          border: '1px solid rgba(239, 68, 68, 0.2)',
                          color: '#f87171',
                          padding: '0.35rem',
                          borderRadius: '6px',
                          cursor: 'pointer'
                        }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Story Modal */}
      {isModalOpen && editingStory && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#0b0f19',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            width: '100%',
            maxWidth: '620px',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '2rem',
            color: '#ffffff'
          }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '0 0 1.25rem' }}>
              {editingStory.id ? 'Edit Transformation Story' : 'Write New Transformation Story'}
            </h2>

            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                  Headline / Title *
                </label>
                <input
                  type="text"
                  required
                  value={editingStory.title}
                  onChange={(e) => setEditingStory({ ...editingStory, title: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                    Client Name
                  </label>
                  <input
                    type="text"
                    value={editingStory.clientName || ''}
                    placeholder="e.g. Vikram Malhotra, Banker"
                    onChange={(e) => setEditingStory({ ...editingStory, clientName: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                    Category
                  </label>
                  <input
                    type="text"
                    value={editingStory.category}
                    onChange={(e) => setEditingStory({ ...editingStory, category: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                  Image URL / Cover
                </label>
                <input
                  type="text"
                  value={editingStory.image}
                  onChange={(e) => setEditingStory({ ...editingStory, image: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                  Summary / Excerpt
                </label>
                <textarea
                  rows={2}
                  value={editingStory.excerpt || ''}
                  onChange={(e) => setEditingStory({ ...editingStory, excerpt: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                  Story Content (Paragraphs)
                </label>
                <textarea
                  rows={5}
                  value={Array.isArray(editingStory.paragraphs) ? editingStory.paragraphs.join('\n\n') : (editingStory.paragraphs || '')}
                  onChange={(e) => setEditingStory({ ...editingStory, paragraphs: e.target.value.split('\n\n').filter(Boolean) })}
                  placeholder="Paste or write full story paragraphs here..."
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    lineHeight: 1.5,
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#94a3b8',
                    padding: '0.65rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    backgroundColor: '#ffffff',
                    color: '#050505',
                    border: 'none',
                    padding: '0.65rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Save & Publish Story
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
