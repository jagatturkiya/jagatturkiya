import React, { useState, useEffect } from 'react';
import { Video, MessageSquare, Plus, Edit3, Trash2, Check, ExternalLink, Star } from 'lucide-react';
import { getTestimonials, saveTestimonial, deleteTestimonial } from '../../lib/cmsStore';
import ImageDropzone from '../../components/admin/ImageDropzone';

export default function TestimonialsAdmin() {
  const [activeTab, setActiveTab] = useState('video'); // 'video' | 'reviews'
  const [data, setData] = useState({ videos: [], reviews: [] });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('video'); // 'video' | 'review'
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Form states
  const [videoForm, setVideoForm] = useState({
    id: '',
    type: 'video',
    name: '',
    role: '',
    thumbnail: '',
    videoUrl: '',
    quote: ''
  });

  const [reviewForm, setReviewForm] = useState({
    id: '',
    type: 'text',
    name: '',
    role: '',
    image: '',
    monogram: 'JT',
    source: '1-on-1 Mentorship',
    quote: ''
  });

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = () => {
    const res = getTestimonials();
    setData(res);
  };

  // Open Add modal
  const handleOpenAdd = () => {
    if (activeTab === 'video') {
      setVideoForm({
        id: '',
        type: 'video',
        name: '',
        role: '',
        thumbnail: '',
        videoUrl: '',
        quote: ''
      });
      setModalType('video');
    } else {
      setReviewForm({
        id: '',
        type: 'text',
        name: '',
        role: '',
        image: '',
        monogram: '',
        source: '1-on-1 Mentorship',
        quote: ''
      });
      setModalType('review');
    }
    setIsModalOpen(true);
  };

  // Open Edit modal
  const handleOpenEdit = (item, type) => {
    if (type === 'video') {
      setVideoForm({ ...item, type: 'video' });
      setModalType('video');
    } else {
      setReviewForm({ ...item, type: 'text' });
      setModalType('review');
    }
    setIsModalOpen(true);
  };

  // Handle Save
  const handleSave = (e) => {
    e.preventDefault();

    if (modalType === 'video') {
      if (!videoForm.name.trim() || !videoForm.quote.trim()) {
        alert('Please fill in the client name and quote.');
        return;
      }
      saveTestimonial({
        ...videoForm,
        name: videoForm.name.trim().slice(0, 60),
        role: (videoForm.role || '').trim().slice(0, 80),
        quote: videoForm.quote.trim().slice(0, 500),
        videoUrl: (videoForm.videoUrl || '').trim().slice(0, 300),
        thumbnail: (videoForm.thumbnail || '').trim()
      });
    } else {
      if (!reviewForm.name.trim() || !reviewForm.quote.trim()) {
        alert('Please fill in the client name and quote.');
        return;
      }
      const mono = (reviewForm.monogram || reviewForm.name.split(' ').map(w => w[0]).join('')).slice(0, 2).toUpperCase();
      saveTestimonial({
        ...reviewForm,
        name: reviewForm.name.trim().slice(0, 60),
        role: (reviewForm.role || '').trim().slice(0, 80),
        source: (reviewForm.source || '1-on-1 Mentorship').trim().slice(0, 50),
        monogram: mono,
        quote: reviewForm.quote.trim().slice(0, 500)
      });
    }

    loadTestimonials();
    setIsModalOpen(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  // Delete
  const handleDelete = (id, type, name) => {
    if (window.confirm(`Delete testimonial for "${name}"?\nThis will remove it from the live website.`)) {
      deleteTestimonial(id, type);
      loadTestimonials();
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Success banner */}
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
          <span>Testimonial updated! Changes reflect live on Success Stories and Homepage.</span>
        </div>
      )}

      {/* Top Header */}
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
            Client Testimonials CMS
          </h1>
          <p style={{ margin: 0, color: '#888888', fontSize: '0.88rem' }}>
            Control video stories and verified client reviews shown on the public website.
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
          <span>{activeTab === 'video' ? 'Add Video Testimonial' : 'Add Written Review'}</span>
        </button>
      </div>

      {/* Minimal Underline Tabs (NO capsule box) */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        marginBottom: '2rem',
        gap: '2rem'
      }}>
        <button
          type="button"
          onClick={() => setActiveTab('video')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.85rem 0',
            border: 'none',
            borderBottom: activeTab === 'video' ? '2px solid #ffffff' : '2px solid transparent',
            backgroundColor: 'transparent',
            color: activeTab === 'video' ? '#ffffff' : '#666666',
            fontSize: '0.9rem',
            fontWeight: activeTab === 'video' ? 700 : 500,
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
        >
          <Video size={16} />
          <span>Video Testimonials ({data.videos.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('reviews')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.85rem 0',
            border: 'none',
            borderBottom: activeTab === 'reviews' ? '2px solid #ffffff' : '2px solid transparent',
            backgroundColor: 'transparent',
            color: activeTab === 'reviews' ? '#ffffff' : '#666666',
            fontSize: '0.9rem',
            fontWeight: activeTab === 'reviews' ? 700 : 500,
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
        >
          <MessageSquare size={16} />
          <span>Written Reviews ({data.reviews.length})</span>
        </button>
      </div>

      {/* Tab 1: Video Testimonials Grid */}
      {activeTab === 'video' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '1.25rem'
        }}>
          {data.videos.map((vid) => (
            <div
              key={vid.id}
              style={{
                backgroundColor: '#0a0a0a',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Video Thumbnail */}
              <div style={{
                position: 'relative',
                height: '190px',
                backgroundColor: '#121212',
                overflow: 'hidden'
              }}>
                <img
                  src={vid.thumbnail}
                  alt={vid.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: 0,
                      height: 0,
                      borderTop: '7px solid transparent',
                      borderBottom: '7px solid transparent',
                      borderLeft: '11px solid #000000',
                      marginLeft: '3px'
                    }} />
                  </div>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '0.75rem' }}>
                  <h3 style={{ margin: '0 0 3px', fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>
                    {vid.name}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: '#888888' }}>
                    {vid.role}
                  </div>
                </div>

                <p style={{
                  fontSize: '0.88rem',
                  color: '#d4d4d8',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  margin: '0 0 1.25rem',
                  flex: 1
                }}>
                  "{vid.quote}"
                </p>

                {vid.videoUrl && (
                  <div style={{
                    fontSize: '0.72rem',
                    color: '#666666',
                    marginBottom: '1rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    Source: {vid.videoUrl}
                  </div>
                )}

                {/* Actions */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '0.5rem',
                  paddingTop: '0.9rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <button
                    onClick={() => handleOpenEdit(vid, 'video')}
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
                    onClick={() => handleDelete(vid.id, 'video', vid.name)}
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
          ))}
        </div>
      )}

      {/* Tab 2: Written Reviews Grid */}
      {activeTab === 'reviews' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '1.25rem'
        }}>
          {data.reviews.map((rev) => (
            <div
              key={rev.id}
              style={{
                backgroundColor: '#0a0a0a',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '1.4rem',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}>
                <div style={{ color: '#fbbf24', fontSize: '0.9rem', letterSpacing: '2px' }}>
                  ★★★★★
                </div>
                <span style={{
                  fontSize: '0.72rem',
                  color: '#888888',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  letterSpacing: '0.04em'
                }}>
                  {rev.source}
                </span>
              </div>

              {/* Quote */}
              <p style={{
                color: '#d4d4d8',
                fontSize: '0.9rem',
                lineHeight: 1.65,
                margin: '0 0 1.25rem',
                flex: 1
              }}>
                "{rev.quote}"
              </p>

              {/* Author lockup & actions */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {rev.image ? (
                    <img
                      src={rev.image}
                      alt={rev.name}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '1px solid rgba(255, 255, 255, 0.15)'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.82rem'
                    }}>
                      {rev.monogram || 'JT'}
                    </div>
                  )}
                  <div>
                    <h5 style={{ margin: 0, fontSize: '0.92rem', color: '#ffffff', fontWeight: 700 }}>
                      {rev.name}
                    </h5>
                    <p style={{ margin: 0, fontSize: '0.74rem', color: '#888888' }}>
                      {rev.role}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <button
                    onClick={() => handleOpenEdit(rev, 'reviews')}
                    style={{
                      background: 'none',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      padding: '0.4rem 0.6rem',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    <Edit3 size={13} />
                  </button>
                  <button
                    onClick={() => handleDelete(rev.id, 'review', rev.name)}
                    style={{
                      background: 'none',
                      border: '1px solid rgba(239, 68, 68, 0.25)',
                      color: '#ef4444',
                      padding: '0.4rem 0.6rem',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit / Add Modal */}
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
            maxWidth: '650px',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            {/* Header */}
            <div style={{
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#ffffff', fontWeight: 700 }}>
                  {modalType === 'video'
                    ? (videoForm.id ? 'Edit Video Testimonial' : 'Add Video Testimonial')
                    : (reviewForm.id ? 'Edit Client Review' : 'Add Client Review')
                  }
                </h3>
                <p style={{ margin: '3px 0 0', fontSize: '0.78rem', color: '#888888' }}>
                  Updates live on the public website immediately.
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

            {/* Modal Body */}
            <form onSubmit={handleSave} style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
              {modalType === 'video' ? (
                <>
                  {/* Client Name & Role */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Client Name *</label>
                        <span style={{ fontSize: '0.72rem', color: '#888888' }}>{videoForm.name.length}/60</span>
                      </div>
                      <input
                        type="text"
                        required
                        maxLength={60}
                        value={videoForm.name}
                        onChange={e => setVideoForm({ ...videoForm, name: e.target.value })}
                        placeholder="e.g. Yogeta Shrivastav"
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
                        <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Role / Profession</label>
                        <span style={{ fontSize: '0.72rem', color: '#888888' }}>{videoForm.role.length}/80</span>
                      </div>
                      <input
                        type="text"
                        maxLength={80}
                        value={videoForm.role}
                        onChange={e => setVideoForm({ ...videoForm, role: e.target.value })}
                        placeholder="e.g. Senior Corporate Leader"
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

                  {/* Video URL */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Video Link / File URL</label>
                      <span style={{ fontSize: '0.72rem', color: '#888888' }}>{videoForm.videoUrl.length}/300</span>
                    </div>
                    <input
                      type="text"
                      maxLength={300}
                      value={videoForm.videoUrl}
                      onChange={e => setVideoForm({ ...videoForm, videoUrl: e.target.value })}
                      placeholder="e.g. https://www.youtube.com/watch?v=... or direct video link"
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

                  {/* Drag and Drop Thumbnail */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <ImageDropzone
                      value={videoForm.thumbnail}
                      onChange={(dataUrl) => setVideoForm({ ...videoForm, thumbnail: dataUrl })}
                      label="Drop Video Thumbnail Image (Auto-compressed)"
                    />
                  </div>

                  {/* Quote */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Client Quote / Testimonial *</label>
                      <span style={{ fontSize: '0.72rem', color: '#888888' }}>{videoForm.quote.length}/500</span>
                    </div>
                    <textarea
                      required
                      rows={4}
                      maxLength={500}
                      value={videoForm.quote}
                      onChange={e => setVideoForm({ ...videoForm, quote: e.target.value })}
                      placeholder="e.g. Coach Jagat's mentorship brought complete stillness to my decision-making and transformed how I steward our family wealth..."
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
                </>
              ) : (
                <>
                  {/* Client Name & Role */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Reviewer Name *</label>
                        <span style={{ fontSize: '0.72rem', color: '#888888' }}>{reviewForm.name.length}/60</span>
                      </div>
                      <input
                        type="text"
                        required
                        maxLength={60}
                        value={reviewForm.name}
                        onChange={e => setReviewForm({ ...reviewForm, name: e.target.value })}
                        placeholder="e.g. Rahul Singh"
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
                        <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Role / Designation</label>
                        <span style={{ fontSize: '0.72rem', color: '#888888' }}>{reviewForm.role.length}/80</span>
                      </div>
                      <input
                        type="text"
                        maxLength={80}
                        value={reviewForm.role}
                        onChange={e => setReviewForm({ ...reviewForm, role: e.target.value })}
                        placeholder="e.g. Senior Software Architect"
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

                  {/* Source & Monogram */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Verification Source</label>
                        <span style={{ fontSize: '0.72rem', color: '#888888' }}>{reviewForm.source.length}/50</span>
                      </div>
                      <input
                        type="text"
                        maxLength={50}
                        value={reviewForm.source}
                        onChange={e => setReviewForm({ ...reviewForm, source: e.target.value })}
                        placeholder="e.g. 1-on-1 Mentorship / Topmate"
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
                        Initials
                      </label>
                      <input
                        type="text"
                        maxLength={2}
                        value={reviewForm.monogram}
                        onChange={e => setReviewForm({ ...reviewForm, monogram: e.target.value.toUpperCase() })}
                        placeholder="RS"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          backgroundColor: '#141414',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '8px',
                          color: '#ffffff',
                          fontSize: '0.9rem',
                          outline: 'none',
                          textAlign: 'center',
                          fontWeight: 700
                        }}
                      />
                    </div>
                  </div>

                  {/* Drag and Drop Profile Photo */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <ImageDropzone
                      value={reviewForm.image}
                      onChange={(dataUrl) => setReviewForm({ ...reviewForm, image: dataUrl })}
                      label="Drop Reviewer Profile Photo (Auto-compressed)"
                    />
                  </div>

                  {/* Review Text */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Review Experience *</label>
                      <span style={{ fontSize: '0.72rem', color: '#888888' }}>{reviewForm.quote.length}/500</span>
                    </div>
                    <textarea
                      required
                      rows={4}
                      maxLength={500}
                      value={reviewForm.quote}
                      onChange={e => setReviewForm({ ...reviewForm, quote: e.target.value })}
                      placeholder="e.g. Jagat’s insights shifted my entire financial strategy. I went from constant overwhelm to having clear frameworks..."
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
                </>
              )}

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
                  Save &amp; Update Live
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
