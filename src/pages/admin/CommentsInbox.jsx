import React, { useState, useEffect } from 'react';
import { MessageSquare, Search, Trash2, Edit3, Check, Clock, Send, MessageCircle } from 'lucide-react';
import { getComments, updateCoachReply, deleteComment } from '../../lib/supabase';

export default function CommentsInbox() {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [replyText, setReplyText] = useState('');

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    const data = await getComments();
    setComments(data);
  };

  const handleStartEdit = (comment) => {
    setEditingId(comment.id);
    setReplyText(comment.coach_reply || '');
  };

  const handleSaveReply = async (id) => {
    if (!replyText.trim()) return;
    const updated = await updateCoachReply(id, replyText.trim());
    setComments(updated);
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this comment?')) {
      const updated = await deleteComment(id);
      setComments(updated);
    }
  };

  const filtered = comments.filter(c => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !q || 
      (c.author && c.author.toLowerCase().includes(q)) || 
      (c.email && c.email.toLowerCase().includes(q)) || 
      (c.text && c.text.toLowerCase().includes(q)) ||
      (c.article && c.article.toLowerCase().includes(q));

    const matchesFilter = 
      filter === 'All' ? true :
      filter === 'Unreplied' ? !c.coach_reply :
      Boolean(c.coach_reply);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="dark-comments-inbox" style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
            Audience Discussions & Replies
          </h1>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.85rem' }}>
            Real reflections and questions from readers on success stories. Replies appear live on the website.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.4rem' }}>
          {['All', 'Unreplied', 'Replied'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              style={{
                padding: '0.42rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.78rem',
                fontWeight: 600,
                border: 'none',
                backgroundColor: filter === tab ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
                color: filter === tab ? '#050505' : '#94a3b8',
                cursor: 'pointer'
              }}
            >
              {tab === 'All' ? `All (${comments.length})` : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Search Input */}
      <div style={{
        backgroundColor: '#0b0f19',
        borderRadius: '10px',
        padding: '0.65rem 1rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <Search size={16} color="#64748b" />
        <input
          type="text"
          placeholder="Search by reader name, comment, or article title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            border: 'none',
            outline: 'none',
            fontSize: '0.85rem',
            width: '100%',
            backgroundColor: 'transparent',
            color: '#ffffff'
          }}
        />
      </div>

      {/* Comments List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {filtered.map((comm) => (
          <div
            key={comm.id}
            style={{
              backgroundColor: '#0b0f19',
              borderRadius: '14px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '1.5rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)'
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginBottom: '0.85rem'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.92rem' }}>
                    {comm.author}
                  </span>
                  {comm.email && (
                    <span style={{ fontSize: '0.74rem', color: '#64748b' }}>
                      ({comm.email})
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  On: <strong style={{ color: '#ffffff' }}>{comm.article}</strong> • {comm.date || 'Recently'}
                </div>
              </div>

              <button
                onClick={() => handleDelete(comm.id)}
                title="Delete Comment"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '0.35rem'
                }}
              >
                <Trash2 size={15} />
              </button>
            </div>

            {/* Comment Text */}
            <p style={{
              fontSize: '0.88rem',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: 1.6,
              margin: '0 0 1rem'
            }}>
              "{comm.text}"
            </p>

            {/* Coach Reply Section */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              padding: '1rem 1.15rem'
            }}>
              {editingId === comm.id ? (
                <div>
                  <label style={{ fontSize: '0.74rem', fontWeight: 700, color: '#d97706', display: 'block', marginBottom: '0.4rem', letterSpacing: '0.06em' }}>
                    REPLY AS COACH JAGAT TURKIYA
                  </label>
                  <textarea
                    rows={3}
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Type your response to the reader..."
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      padding: '0.65rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.84rem',
                      marginBottom: '0.65rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => handleSaveReply(comm.id)}
                      style={{
                        backgroundColor: '#ffffff',
                        color: '#050505',
                        border: 'none',
                        padding: '0.45rem 1rem',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      Post Reply to Website
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      style={{
                        backgroundColor: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        padding: '0.45rem 0.85rem',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        color: '#94a3b8',
                        cursor: 'pointer'
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : comm.coach_reply ? (
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#d97706', letterSpacing: '0.06em', marginBottom: '0.3rem' }}>
                      COACH JAGAT TURKIYA REPLY (LIVE ON SITE)
                    </div>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#ffffff', lineHeight: 1.55 }}>
                      {comm.coach_reply}
                    </p>
                  </div>
                  <button
                    onClick={() => handleStartEdit(comm)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      background: 'none',
                      border: 'none',
                      color: '#94a3b8',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                  >
                    <Edit3 size={13} />
                    <span>Edit Reply</span>
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                    No reply given yet.
                  </span>
                  <button
                    onClick={() => handleStartEdit(comm)}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <MessageSquare size={13} />
                    <span>Reply as Coach Jagat</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
