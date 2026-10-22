import React, { useState, useEffect } from 'react';
import { Layers, Plus, Edit3, Trash2, Check, X, Folder, Sparkles } from 'lucide-react';
import { getPrograms, saveProgram, toggleProgramStatus, deleteProgram } from '../../lib/supabase';

export default function ProgramsCatalog() {
  const [programs, setPrograms] = useState([]);
  const [filter, setFilter] = useState('All');
  const [editingProgram, setEditingProgram] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadPrograms();
  }, []);

  const loadPrograms = async () => {
    const data = await getPrograms();
    setPrograms(data);
  };

  const handleOpenAdd = () => {
    setEditingProgram({
      id: '',
      title: '',
      slug: '',
      type: 'SESSION',
      tag: 'Transformation',
      price: 999,
      original_price: 2999,
      status: 'Active',
      description: ''
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (prog) => {
    setEditingProgram({ ...prog });
    setIsModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!editingProgram.title) return;
    const updated = await saveProgram(editingProgram);
    setPrograms(updated);
    setIsModalOpen(false);
  };

  const handleToggle = async (id) => {
    const updated = await toggleProgramStatus(id);
    setPrograms(updated);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this program from catalog?')) {
      const updated = await deleteProgram(id);
      setPrograms(updated);
    }
  };

  const filtered = programs.filter(p => {
    if (filter === 'All') return true;
    if (filter === '1:1 Sessions') return p.type === 'SESSION';
    if (filter === 'Courses') return p.type === 'COURSE';
    if (filter === 'Bundles') return p.type === 'BUNDLE';
    if (filter === 'Digital Products') return p.type === 'DIGITAL';
    return true;
  });

  return (
    <div className="dark-programs-catalog" style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            Programs & Pricing Catalog
          </h1>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.85rem' }}>
            Live coaching programs, strategy sessions, and digital blueprints. Real-time editable.
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
          <span>Add Program</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        marginBottom: '1.5rem',
        flexWrap: 'wrap'
      }}>
        {['All', '1:1 Sessions', 'Courses', 'Bundles', 'Digital Products'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            style={{
              padding: '0.42rem 0.9rem',
              borderRadius: '6px',
              fontSize: '0.8rem',
              fontWeight: 600,
              border: 'none',
              backgroundColor: filter === tab ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
              color: filter === tab ? '#050505' : '#94a3b8',
              cursor: 'pointer'
            }}
          >
            {tab}
          </button>
        ))}
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
                <th style={{ padding: '1rem 1.25rem' }}>PROGRAM & DETAILS</th>
                <th style={{ padding: '1rem 1.25rem' }}>TYPE & TAG</th>
                <th style={{ padding: '1rem 1.25rem' }}>PRICING</th>
                <th style={{ padding: '1rem 1.25rem' }}>STATUS</th>
                <th style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((prod) => (
                <tr
                  key={prod.id}
                  style={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                    transition: 'background-color 0.1s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <td style={{ padding: '1.15rem 1.25rem' }}>
                    <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.9rem' }}>
                      {prod.title}
                    </div>
                    {prod.description && (
                      <div style={{ fontSize: '0.74rem', color: '#94a3b8', marginTop: '0.2rem', maxWidth: '420px' }}>
                        {prod.description}
                      </div>
                    )}
                  </td>

                  <td style={{ padding: '1.15rem 1.25rem' }}>
                    <div style={{
                      display: 'inline-block',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      color: '#ffffff',
                      marginBottom: '0.25rem'
                    }}>
                      {prod.type}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
                      {prod.tag}
                    </div>
                  </td>

                  <td style={{ padding: '1.15rem 1.25rem' }}>
                    <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.95rem' }}>
                      ₹{Number(prod.price).toLocaleString('en-IN')}
                    </div>
                    {prod.original_price > 0 && (
                      <div style={{ fontSize: '0.72rem', color: '#64748b', textDecoration: 'line-through' }}>
                        ₹{Number(prod.original_price).toLocaleString('en-IN')}
                      </div>
                    )}
                  </td>

                  <td style={{ padding: '1.15rem 1.25rem' }}>
                    <button
                      onClick={() => handleToggle(prod.id)}
                      title="Click to toggle status"
                      style={{
                        background: 'none',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: prod.status === 'Active' ? '#34d399' : '#94a3b8',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: prod.status === 'Active' ? '#10b981' : '#64748b'
                      }} />
                      <span>{prod.status}</span>
                    </button>
                  </td>

                  <td style={{ padding: '1.15rem 1.25rem', textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      <button
                        onClick={() => handleOpenEdit(prod)}
                        title="Edit Program"
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
                        onClick={() => handleDelete(prod.id)}
                        title="Delete Program"
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

      {/* Edit / Create Modal */}
      {isModalOpen && editingProgram && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#0b0f19',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            width: '100%',
            maxWidth: '500px',
            padding: '2rem',
            color: '#ffffff'
          }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '0 0 1.25rem' }}>
              {editingProgram.id ? 'Edit Program Details' : 'Create New Program'}
            </h2>

            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                  Program Title *
                </label>
                <input
                  type="text"
                  required
                  value={editingProgram.title}
                  onChange={(e) => setEditingProgram({ ...editingProgram, title: e.target.value })}
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
                    Type
                  </label>
                  <select
                    value={editingProgram.type}
                    onChange={(e) => setEditingProgram({ ...editingProgram, type: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: '#0f172a',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem'
                    }}
                  >
                    <option value="SESSION">1:1 Session</option>
                    <option value="COURSE">Course</option>
                    <option value="BUNDLE">Bundle</option>
                    <option value="DIGITAL">Digital Product</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                    Category Tag
                  </label>
                  <input
                    type="text"
                    value={editingProgram.tag}
                    onChange={(e) => setEditingProgram({ ...editingProgram, tag: e.target.value })}
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                    Selling Price (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    value={editingProgram.price}
                    onChange={(e) => setEditingProgram({ ...editingProgram, price: e.target.value })}
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
                    Original Price (₹)
                  </label>
                  <input
                    type="number"
                    value={editingProgram.original_price}
                    onChange={(e) => setEditingProgram({ ...editingProgram, original_price: e.target.value })}
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
                  Brief Description
                </label>
                <textarea
                  rows={2}
                  value={editingProgram.description || ''}
                  onChange={(e) => setEditingProgram({ ...editingProgram, description: e.target.value })}
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
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
