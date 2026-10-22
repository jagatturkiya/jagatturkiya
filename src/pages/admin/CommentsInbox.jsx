import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Search, 
  Clock, 
  Trash2, 
  Edit3, 
  Check, 
  CheckCircle,
  X,
  Send
} from 'lucide-react';
import { getComments, updateCoachReply } from '../../lib/supabase';

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
    const updated = await updateCoachReply(id, replyText);
    setComments(updated);
    setEditingId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this comment?')) {
      const updated = comments.filter(c => c.id !== id);
      setComments(updated);
      try {
        localStorage.setItem('jt_admin_comments', JSON.stringify(updated));
      } catch {}
    }
  };

  const filtered = comments.filter(c => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !q || 
      c.author.toLowerCase().includes(q) || 
      c.email.toLowerCase().includes(q) || 
      c.text.toLowerCase().includes(q) ||
      (c.article && c.article.toLowerCase().includes(q));

    const matchesFilter = 
      filter === 'All' ? true :
      filter === 'Pending Review' ? c.status === 'Pending' :
      c.status === 'Approved';

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="comments-inbox-view" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      {/* Page Header */}
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{
          fontSize: '1.65rem',
          fontWeight: 800,
          margin: '0 0 0.35rem',
          color: '#0f172a',
          fontFamily: "'Instrument Sans', sans-serif"
        }}>
          Comments Inbox
        </h1>
        <p style={{ margin: 0, color: '#64748b', fontSize: '0.88rem' }}>
          Review, reply, and moderate audience feedback across all articles.
        </p>
      </div>

      {/* Search Input matching screenshot */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '0.65rem 1rem',
        border: '1px solid #e2e8f0',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <Search size={18} color="#94a3b8" />
        <input
          type="text"
          placeholder="Search by name, email or keyword..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            border: 'none',
            outline: 'none',
            fontSize: '0.86rem',
            width: '100%',
            color: '#0f172a'
          }}
        />
      </div>

      {/* Filter Tabs matching media_1792664195445.jpg */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '1.5rem'
      }}>
        <button
          onClick={() => setFilter('Pending Review')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.45rem 0.95rem',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontWeight: 600,
            border: '1px solid #e2e8f0',
            backgroundColor: filter === 'Pending Review' ? '#0f172a' : '#ffffff',
            color: filter === 'Pending Review' ? '#ffffff' : '#64748b',
            cursor: 'pointer'
          }}
        >
          <Clock size={13} />
          <span>Pending Review (0)</span>
        </button>

        <button
          onClick={() => setFilter('Approved')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.45rem 0.95rem',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontWeight: 600,
            border: '1px solid #e2e8f0',
            backgroundColor: filter === 'Approved' ? '#0f172a' : '#ffffff',
            color: filter === 'Approved' ? '#ffffff' : '#64748b',
            cursor: 'pointer'
          }}
        >
          <Check size={13} />
          <span>Approved ({comments.length})</span>
        </button>

        <button
          onClick={() => setFilter('All')}
          style={{
            padding: '0.45rem 0.95rem',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontWeight: 600,
            border: '1px solid #e2e8f0',
            backgroundColor: filter === 'All' ? '#0f172a' : '#ffffff',
            color: filter === 'All' ? '#ffffff' : '#64748b',
            cursor: 'pointer'
          }}
        >
          <span>All Comments ({comments.length})</span>
        </button>
      </div>

      {/* Comments List matching screenshot */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {filtered.map((comm) => (
          <div
            key={comm.id}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '14px',
              border: '1px solid #e2e8f0',
              borderLeft: '4px solid #10b981',
              padding: '1.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
            }}
          >
            {/* Header: Author + Actions */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: '#f1f5f9',
                  color: '#4338ca',
                  fontWeight: 800,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {comm.author[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.92rem' }}>
                    {comm.author}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    {comm.email}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={() => handleDelete(comm.id)}
                  title="Delete Comment"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    padding: '0.35rem'
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            {/* Commented On snippet */}
            <div style={{
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              padding: '0.65rem 0.85rem',
              border: '1px solid #f1f5f9',
              marginBottom: '1rem'
            }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.04em' }}>
                COMMENTED ON:
              </div>
              <div style={{ color: '#4338ca', fontWeight: 600, fontSize: '0.84rem', marginTop: '0.15rem' }}>
                {comm.article}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                <Clock size={11} />
                <span>{comm.date}</span>
              </div>
            </div>

            {/* Status Pill */}
            <div style={{ marginBottom: '0.75rem' }}>
              <span style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                backgroundColor: '#ecfdf5',
                color: '#059669',
                padding: '0.2rem 0.55rem',
                borderRadius: '4px',
                letterSpacing: '0.04em'
              }}>
                APPROVED
              </span>
            </div>

            {/* Comment Text */}
            <p style={{
              fontSize: '0.88rem',
              color: '#334155',
              lineHeight: 1.6,
              margin: '0 0 1.25rem'
            }}>
              {comm.text}
            </p>

            {/* Coach Reply Box matching screenshot */}
            <div style={{
              backgroundColor: '#f5f3ff',
              borderRadius: '10px',
              border: '1px solid #ede9fe',
              padding: '1rem 1.15rem'
            }}>
              <div style={{
                display: 'inline-block',
                backgroundColor: '#4338ca',
                color: '#ffffff',
                fontSize: '0.65rem',
                fontWeight: 800,
                letterSpacing: '0.06em',
                padding: '0.15rem 0.5rem',
                borderRadius: '4px',
                marginBottom: '0.6rem'
              }}>
                COACH REPLY
              </div>

              {editingId === comm.id ? (
                <div>
                  <textarea
                    rows={3}
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.6rem',
                      borderRadius: '6px',
                      border: '1px solid #c7d2fe',
                      fontSize: '0.84rem',
                      marginBottom: '0.5rem',
                      fontFamily: 'inherit'
                    }}
                  />
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => handleSaveReply(comm.id)}
                      style={{
                        backgroundColor: '#4338ca',
                        color: '#ffffff',
                        border: 'none',
                        padding: '0.4rem 0.85rem',
                        borderRadius: '6px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      Save Reply
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #cbd5e1',
                        padding: '0.4rem 0.85rem',
                        borderRadius: '6px',
                        fontSize: '0.78rem',
                        color: '#475569',
                        cursor: 'pointer'
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                  <p style={{
                    margin: 0,
                    fontSize: '0.85rem',
                    color: '#312e81',
                    lineHeight: 1.55
                  }}>
                    {comm.coach_reply || 'No reply yet.'}
                  </p>
                  <button
                    onClick={() => handleStartEdit(comm)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: 'none',
                      border: 'none',
                      color: '#4338ca',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      padding: '0.2rem 0.4rem'
                    }}
                  >
                    <Edit3 size={13} />
                    <span>Edit Reply</span>
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
