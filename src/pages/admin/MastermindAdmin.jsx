import React, { useState, useEffect } from 'react';
import { Award, Plus, Edit3, Trash2, Check } from 'lucide-react';
import { getMastermindDetails, saveCurriculumWeek, deleteCurriculumWeek } from '../../lib/cmsStore';

export default function MastermindAdmin() {
  const [data, setData] = useState({ weeks: [] });
  const [isWeekModalOpen, setIsWeekModalOpen] = useState(false);
  const [editingWeek, setEditingWeek] = useState({
    id: '',
    num: '',
    title: '',
    desc: ''
  });
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const res = getMastermindDetails();
    setData(res);
  };

  const notifySuccess = (msg) => {
    setSaveMessage(msg);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleOpenAddWeek = () => {
    const nextNum = `Week ${(data.weeks.length + 1).toString().padStart(2, '0')}`;
    setEditingWeek({
      id: '',
      num: nextNum,
      title: '',
      desc: ''
    });
    setIsWeekModalOpen(true);
  };

  const handleOpenEditWeek = (week) => {
    setEditingWeek(week);
    setIsWeekModalOpen(true);
  };

  const handleSaveWeek = (e) => {
    e.preventDefault();
    if (!editingWeek.title.trim() || !editingWeek.desc.trim()) {
      alert('Please fill in module title and description.');
      return;
    }
    saveCurriculumWeek(editingWeek);
    loadData();
    setIsWeekModalOpen(false);
    notifySuccess('Curriculum module saved successfully!');
  };

  const handleDeleteWeek = (id, title) => {
    if (window.confirm(`Delete module: "${title}"?\nThis will remove it from the 10-week roadmap.`)) {
      deleteCurriculumWeek(id);
      loadData();
      notifySuccess('Curriculum module removed.');
    }
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
          <span>{saveMessage || 'Changes updated live!'}</span>
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
          Mastermind Curriculum CMS
        </h1>
        <p style={{ margin: 0, color: '#888888', fontSize: '0.88rem' }}>
          Manage the 10-week curriculum roadmap modules displayed on the Mastermind page.
        </p>
      </div>

      {/* Curriculum Roadmap Modules List */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.25rem'
        }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#ffffff', fontWeight: 700 }}>
              Curriculum Roadmap Modules ({data.weeks.length})
            </h2>
            <p style={{ margin: '3px 0 0', color: '#888888', fontSize: '0.84rem' }}>
              Displayed in order on the Mastermind 10-Week Roadmap section.
            </p>
          </div>

          <button
            type="button"
            onClick={handleOpenAddWeek}
            className="btn btn-white"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.6rem 1.25rem',
              fontSize: '0.84rem',
              cursor: 'pointer'
            }}
          >
            <Plus size={15} />
            <span>Add Module</span>
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
          {data.weeks.map((week, idx) => (
            <div
              key={week.id || idx}
              style={{
                backgroundColor: '#0a0a0a',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                padding: '1.35rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{
                  display: 'inline-block',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.04em'
                }}>
                  {week.num}
                </div>
                <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.02rem', fontWeight: 700, color: '#ffffff' }}>
                  {week.title}
                </h3>
                <p style={{ margin: '0 0 1.25rem', fontSize: '0.86rem', color: '#a1a1aa', lineHeight: 1.6 }}>
                  {week.desc}
                </p>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '0.5rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)'
              }}>
                <button
                  type="button"
                  onClick={() => handleOpenEditWeek(week)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    padding: '0.4rem 0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  <Edit3 size={12} />
                  <span>Edit</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteWeek(week.id, week.title)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.25)',
                    color: '#ef4444',
                    padding: '0.4rem 0.65rem',
                    borderRadius: '6px',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  <Trash2 size={12} />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit / Add Week Modal */}
      {isWeekModalOpen && (
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
            maxWidth: '560px',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <h3 style={{ margin: 0, fontSize: '1.15rem', color: '#ffffff', fontWeight: 700 }}>
                {editingWeek.id ? 'Edit Curriculum Module' : 'Add Curriculum Module'}
              </h3>
              <button
                type="button"
                onClick={() => setIsWeekModalOpen(false)}
                style={{ background: 'none', border: 'none', color: '#888888', fontSize: '1.3rem', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveWeek} style={{ padding: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', marginBottom: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                    Week Tag
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={15}
                    value={editingWeek.num}
                    onChange={e => setEditingWeek({ ...editingWeek, num: e.target.value })}
                    placeholder="Week 01"
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Module Title *</label>
                    <span style={{ fontSize: '0.72rem', color: '#888888' }}>{editingWeek.title.length}/60</span>
                  </div>
                  <input
                    type="text"
                    required
                    maxLength={60}
                    value={editingWeek.title}
                    onChange={e => setEditingWeek({ ...editingWeek, title: e.target.value })}
                    placeholder="Module title"
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

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Module Description *</label>
                  <span style={{ fontSize: '0.72rem', color: '#888888' }}>{editingWeek.desc.length}/350</span>
                </div>
                <textarea
                  required
                  rows={4}
                  maxLength={350}
                  value={editingWeek.desc}
                  onChange={e => setEditingWeek({ ...editingWeek, desc: e.target.value })}
                  placeholder="Module description..."
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

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => setIsWeekModalOpen(false)}
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
                  Save Module
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
