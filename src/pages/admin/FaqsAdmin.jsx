import React, { useState, useEffect } from 'react';
import { HelpCircle, Plus, Edit3, Trash2, Check, MessageSquare } from 'lucide-react';
import { getFaqs, saveFaq, deleteFaq } from '../../lib/cmsStore';

export default function FaqsAdmin() {
  const [activeTab, setActiveTab] = useState('mastermind'); // 'mastermind' | 'contact'
  const [faqs, setFaqs] = useState({ mastermind: [], contact: [] });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [editingFaq, setEditingFaq] = useState({
    id: '',
    type: 'mastermind',
    question: '',
    answer: ''
  });

  useEffect(() => {
    loadFaqs();
  }, []);

  const loadFaqs = () => {
    const data = getFaqs();
    setFaqs(data);
  };

  const handleOpenAdd = () => {
    setEditingFaq({
      id: '',
      type: activeTab,
      question: '',
      answer: ''
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (faq) => {
    setEditingFaq({
      ...faq,
      type: activeTab
    });
    setIsModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!editingFaq.question.trim() || !editingFaq.answer.trim()) {
      alert('Please fill in both the question and the answer.');
      return;
    }

    saveFaq({
      type: activeTab,
      id: editingFaq.id,
      question: editingFaq.question.slice(0, 150),
      answer: editingFaq.answer.slice(0, 800)
    });

    loadFaqs();
    setIsModalOpen(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleDelete = (id, question) => {
    if (window.confirm(`Delete question:\n"${question}"?\nThis will remove it from the live website.`)) {
      deleteFaq(activeTab, id);
      loadFaqs();
    }
  };

  const currentList = faqs[activeTab] || [];

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
          <span>FAQ updated successfully! Reflects live across public pages.</span>
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
            Frequently Asked Questions CMS
          </h1>
          <p style={{ margin: 0, color: '#888888', fontSize: '0.88rem' }}>
            Manage questions and answers displayed on the Mastermind and Contact Us pages.
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
          <span>Add Question</span>
        </button>
      </div>

      {/* Underline Tabs */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        marginBottom: '2rem',
        gap: '2rem'
      }}>
        <button
          type="button"
          onClick={() => setActiveTab('mastermind')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.85rem 0',
            border: 'none',
            borderBottom: activeTab === 'mastermind' ? '2px solid #ffffff' : '2px solid transparent',
            backgroundColor: 'transparent',
            color: activeTab === 'mastermind' ? '#ffffff' : '#666666',
            fontSize: '0.9rem',
            fontWeight: activeTab === 'mastermind' ? 700 : 500,
            cursor: 'pointer'
          }}
        >
          <HelpCircle size={16} />
          <span>Mastermind FAQs ({faqs.mastermind?.length || 0})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('contact')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.85rem 0',
            border: 'none',
            borderBottom: activeTab === 'contact' ? '2px solid #ffffff' : '2px solid transparent',
            backgroundColor: 'transparent',
            color: activeTab === 'contact' ? '#ffffff' : '#666666',
            fontSize: '0.9rem',
            fontWeight: activeTab === 'contact' ? 700 : 500,
            cursor: 'pointer'
          }}
        >
          <MessageSquare size={16} />
          <span>Contact Page FAQs ({faqs.contact?.length || 0})</span>
        </button>
      </div>

      {/* FAQs List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {currentList.length === 0 ? (
          <div style={{
            padding: '3.5rem 1rem',
            textAlign: 'center',
            color: '#666666',
            backgroundColor: '#0a0a0a',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            No questions found. Click "Add Question" above to create one.
          </div>
        ) : (
          currentList.map((faq, index) => (
            <div
              key={faq.id || index}
              style={{
                backgroundColor: '#0a0a0a',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                padding: '1.4rem',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '1.5rem'
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.72rem', color: '#666666', fontWeight: 700 }}>
                    Q{index + 1}
                  </span>
                  <h3 style={{ margin: 0, fontSize: '1.02rem', fontWeight: 700, color: '#ffffff' }}>
                    {faq.question}
                  </h3>
                </div>
                <p style={{
                  margin: 0,
                  fontSize: '0.88rem',
                  color: '#a1a1aa',
                  lineHeight: 1.65
                }}>
                  {faq.answer}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                <button
                  type="button"
                  onClick={() => handleOpenEdit(faq)}
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
                  type="button"
                  onClick={() => handleDelete(faq.id, faq.question)}
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
          ))
        )}
      </div>

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
            maxWidth: '600px',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.15rem', color: '#ffffff', fontWeight: 700 }}>
                  {editingFaq.id ? 'Edit Question' : 'Add Question'}
                </h3>
                <p style={{ margin: '3px 0 0', fontSize: '0.76rem', color: '#888888' }}>
                  Target page: {activeTab === 'mastermind' ? 'Mastermind Page' : 'Contact Us Page'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                style={{ background: 'none', border: 'none', color: '#888888', fontSize: '1.3rem', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSave} style={{ padding: '1.5rem' }}>
              {/* Question */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Question *</label>
                  <span style={{ fontSize: '0.72rem', color: '#888888' }}>{editingFaq.question.length}/150</span>
                </div>
                <input
                  type="text"
                  required
                  maxLength={150}
                  value={editingFaq.question}
                  onChange={e => setEditingFaq({ ...editingFaq, question: e.target.value })}
                  placeholder="Enter question"
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

              {/* Answer */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Answer *</label>
                  <span style={{ fontSize: '0.72rem', color: '#888888' }}>{editingFaq.answer.length}/800</span>
                </div>
                <textarea
                  required
                  rows={5}
                  maxLength={800}
                  value={editingFaq.answer}
                  onChange={e => setEditingFaq({ ...editingFaq, answer: e.target.value })}
                  placeholder="Enter answer..."
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

              {/* Actions */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#a1a1aa',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '9999px',
                    fontSize: '0.86rem',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-white"
                  style={{
                    padding: '0.65rem 1.75rem',
                    fontSize: '0.86rem',
                    cursor: 'pointer'
                  }}
                >
                  Save Question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
