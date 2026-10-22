import React, { useState, useEffect } from 'react';
import { BookOpen, Plus, Edit3, Trash2, ExternalLink, Image as ImageIcon, Check } from 'lucide-react';
import { getStories, saveStory, deleteStory } from '../../lib/cmsStore';

export default function SuccessStoriesAdmin() {
  const [stories, setStories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [editingStory, setEditingStory] = useState({
    id: '',
    title: '',
    category: 'Leadership & Mindset',
    clientName: '',
    readTime: '5 min read',
    date: '16 Jun, 2026',
    image: '',
    excerpt: '',
    paragraphs: ['']
  });

  useEffect(() => {
    loadStories();
  }, []);

  const loadStories = () => {
    const data = getStories();
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
      paragraphs: Array.isArray(story.paragraphs) && story.paragraphs.length > 0 
        ? [...story.paragraphs] 
        : [story.content || '']
    });
    setIsModalOpen(true);
  };

  const handleParagraphChange = (idx, text) => {
    const updated = [...editingStory.paragraphs];
    updated[idx] = text.slice(0, 1000);
    setEditingStory(prev => ({ ...prev, paragraphs: updated }));
  };

  const handleAddParagraph = () => {
    setEditingStory(prev => ({
      ...prev,
      paragraphs: [...prev.paragraphs, '']
    }));
  };

  const handleRemoveParagraph = (idx) => {
    if (editingStory.paragraphs.length === 1) return;
    const updated = editingStory.paragraphs.filter((_, i) => i !== idx);
    setEditingStory(prev => ({ ...prev, paragraphs: updated }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!editingStory.title.trim()) {
      alert('Please enter a title for the story.');
      return;
    }

    const payload = {
      ...editingStory,
      title: editingStory.title.trim().slice(0, 100),
      clientName: (editingStory.clientName || '').trim().slice(0, 60),
      category: (editingStory.category || 'Mindset').trim().slice(0, 50),
      readTime: (editingStory.readTime || '5 min read').trim().slice(0, 20),
      excerpt: (editingStory.excerpt || '').trim().slice(0, 250),
      paragraphs: editingStory.paragraphs.filter(p => p.trim().length > 0)
    };

    const updated = saveStory(payload);
    setStories(updated);
    setIsModalOpen(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Delete the story: "${title}"?\nThis will remove it from the live website.`)) {
      const updated = deleteStory(id);
      setStories(updated);
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
          <span>Story saved successfully! Changes are live immediately on the website.</span>
        </div>
      )}

      {/* Header bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <div>
          <h1 style={{
            fontSize: '1.75rem',
            fontWeight: 800,
            margin: '0 0 0.35rem',
            color: '#ffffff',
            fontFamily: "'Instrument Sans', sans-serif"
          }}>
            Success Stories CMS
          </h1>
          <p style={{ margin: 0, color: '#888888', fontSize: '0.88rem' }}>
            Directly edit stories displayed on the homepage magazine grid and story reader modals.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="btn btn-white"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.65rem 1.35rem',
            fontSize: '0.86rem',
            cursor: 'pointer'
          }}
        >
          <Plus size={16} />
          <span>Add New Story</span>
        </button>
      </div>

      {/* Stories Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
        gap: '1.25rem'
      }}>
        {stories.map((st) => (
          <div
            key={st.id}
            style={{
              backgroundColor: '#0a0a0a',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s, border-color 0.2s'
            }}
          >
            {/* Story Thumbnail preview */}
            <div style={{
              position: 'relative',
              height: '180px',
              backgroundColor: '#141414',
              overflow: 'hidden'
            }}>
              <img
                src={st.localImage || st.image || 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'}
                alt={st.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80';
                }}
              />
            </div>

            {/* Story Details */}
            <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#ffffff',
                margin: '0 0 0.5rem',
                lineHeight: 1.4,
                fontFamily: "'Instrument Sans', sans-serif"
              }}>
                {st.title}
              </h3>

              {st.clientName && (
                <div style={{ fontSize: '0.78rem', color: '#888888', marginBottom: '0.65rem' }}>
                  Client / Mentee: <strong style={{ color: '#ffffff' }}>{st.clientName}</strong>
                </div>
              )}

              <p style={{
                fontSize: '0.84rem',
                color: '#a1a1aa',
                lineHeight: 1.6,
                margin: '0 0 1.25rem',
                flex: 1,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {st.excerpt || (st.paragraphs && st.paragraphs[0]) || ''}
              </p>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <span style={{ fontSize: '0.72rem', color: '#666666' }}>
                  {st.paragraphs ? `${st.paragraphs.length} paragraphs` : 'Full article'}
                </span>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => handleOpenEdit(st)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      padding: '0.45rem 0.85rem',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    <Edit3 size={13} />
                    <span>Edit</span>
                  </button>

                  <button
                    onClick={() => handleDelete(st.id, st.title)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.25)',
                      color: '#ef4444',
                      padding: '0.45rem 0.75rem',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    <Trash2 size={13} />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Edit Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(6px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div style={{
            backgroundColor: '#0a0a0a',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '14px',
            width: '100%',
            maxWidth: '750px',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#ffffff', fontWeight: 700 }}>
                  {editingStory.id ? 'Edit Story' : 'Write New Story'}
                </h3>
                <p style={{ margin: '3px 0 0', fontSize: '0.78rem', color: '#888888' }}>
                  Changes will update live across the website instantly.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#888888',
                  fontSize: '1.3rem',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <form onSubmit={handleSave} style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
              {/* Title Input with character limit */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Story Title *</label>
                  <span style={{ fontSize: '0.72rem', color: '#888888' }}>{editingStory.title.length}/100</span>
                </div>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={editingStory.title}
                  onChange={e => setEditingStory({ ...editingStory, title: e.target.value })}
                  placeholder="e.g. Walking 4 km Daily to Save ₹30: The Delhi Days"
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

              {/* Grid: Client Name & Category */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Client / Mentee Name</label>
                    <span style={{ fontSize: '0.72rem', color: '#888888' }}>{(editingStory.clientName || '').length}/60</span>
                  </div>
                  <input
                    type="text"
                    maxLength={60}
                    value={editingStory.clientName || ''}
                    onChange={e => setEditingStory({ ...editingStory, clientName: e.target.value })}
                    placeholder="e.g. Rahul Singh / Jagat Turkiya"
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
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Category &amp; Focus</label>
                    <span style={{ fontSize: '0.72rem', color: '#888888' }}>{(editingStory.category || '').length}/50</span>
                  </div>
                  <input
                    type="text"
                    maxLength={50}
                    value={editingStory.category || ''}
                    onChange={e => setEditingStory({ ...editingStory, category: e.target.value })}
                    placeholder="e.g. Leadership, Financial Discipline"
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

              {/* Grid: Read Time & Cover Image */}
              <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                    Read Time
                  </label>
                  <input
                    type="text"
                    maxLength={20}
                    value={editingStory.readTime || ''}
                    onChange={e => setEditingStory({ ...editingStory, readTime: e.target.value })}
                    placeholder="e.g. 5 min read"
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
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                    Cover Image URL
                  </label>
                  <input
                    type="text"
                    value={editingStory.image || ''}
                    onChange={e => setEditingStory({ ...editingStory, image: e.target.value })}
                    placeholder="https://... or ./assets/images/..."
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

              {/* Short Excerpt */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Brief Excerpt / Summary *</label>
                  <span style={{ fontSize: '0.72rem', color: '#888888' }}>{(editingStory.excerpt || '').length}/250</span>
                </div>
                <textarea
                  required
                  rows={2}
                  maxLength={250}
                  value={editingStory.excerpt || ''}
                  onChange={e => setEditingStory({ ...editingStory, excerpt: e.target.value })}
                  placeholder="A short punchy teaser shown on the card preview..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: '#141414',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Full Paragraphs Editor */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>
                    Full Story Content (Paragraphs)
                  </label>
                  <button
                    type="button"
                    onClick={handleAddParagraph}
                    style={{
                      background: 'none',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      fontSize: '0.74rem',
                      cursor: 'pointer'
                    }}
                  >
                    + Add Paragraph
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {editingStory.paragraphs.map((para, pIdx) => (
                    <div key={pIdx} style={{ position: 'relative' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontSize: '0.72rem', color: '#888888' }}>Paragraph {pIdx + 1}</span>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.7rem', color: '#666666' }}>{para.length}/1000</span>
                          {editingStory.paragraphs.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveParagraph(pIdx)}
                              style={{
                                background: 'none',
                                border: 'none',
                                color: '#ef4444',
                                fontSize: '0.72rem',
                                cursor: 'pointer',
                                padding: 0
                              }}
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                      <textarea
                        rows={3}
                        maxLength={1000}
                        value={para}
                        onChange={e => handleParagraphChange(pIdx, e.target.value)}
                        placeholder={`Paragraph ${pIdx + 1} content...`}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          backgroundColor: '#141414',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '8px',
                          color: '#ffffff',
                          fontSize: '0.88rem',
                          outline: 'none',
                          resize: 'vertical',
                          lineHeight: 1.6
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '0.75rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1.25rem'
              }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#a1a1aa',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '9999px',
                    fontSize: '0.88rem',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-white"
                  style={{
                    padding: '0.75rem 1.75rem',
                    fontSize: '0.88rem',
                    cursor: 'pointer'
                  }}
                >
                  Save &amp; Publish Live
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
