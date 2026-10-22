import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  Plus, 
  Folder, 
  Edit3, 
  ExternalLink, 
  Check, 
  X,
  Sparkles,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';
import { getPrograms, toggleProgramStatus } from '../../lib/supabase';

export default function ProgramsCatalog() {
  const [programs, setPrograms] = useState([]);
  const [filter, setFilter] = useState('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProgram, setNewProgram] = useState({
    title: '',
    slug: '',
    type: 'SESSION',
    tag: 'Transformation',
    price: 999,
    original_price: 2999,
    status: 'Active',
    description: ''
  });

  useEffect(() => {
    loadPrograms();
  }, []);

  const loadPrograms = async () => {
    const data = await getPrograms();
    setPrograms(data);
  };

  const handleToggle = async (id) => {
    const updated = await toggleProgramStatus(id);
    setPrograms(updated);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const created = {
      ...newProgram,
      id: 'prog-' + Date.now(),
      price: Number(newProgram.price),
      original_price: Number(newProgram.original_price)
    };
    const updated = [created, ...programs];
    setPrograms(updated);
    try {
      localStorage.setItem('jt_admin_programs', JSON.stringify(updated));
    } catch {}
    setIsAddModalOpen(false);
    setNewProgram({
      title: '',
      slug: '',
      type: 'SESSION',
      tag: 'Transformation',
      price: 999,
      original_price: 2999,
      status: 'Active',
      description: ''
    });
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
    <div className="programs-catalog-view" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Page Header */}
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
            Manage Programs & Courses
          </h1>
          <p style={{ margin: 0, color: '#64748b', fontSize: '0.88rem' }}>
            <strong>Products Catalog:</strong> Manage your sessions, courses, bundles, and digital products.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#0f172a',
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
          <span>Add New Product</span>
        </button>
      </div>

      {/* Filter Tabs matching media_1792664221606.jpg */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '1.5rem',
        flexWrap: 'wrap'
      }}>
        {['All Products', '1:1 Sessions', 'Courses', 'Bundles', 'Digital Products'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            style={{
              padding: '0.45rem 0.95rem',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 600,
              border: filter === tab ? '1px solid #cbd5e1' : '1px solid transparent',
              backgroundColor: filter === tab ? '#ffffff' : '#f1f5f9',
              color: filter === tab ? '#0f172a' : '#64748b',
              cursor: 'pointer',
              boxShadow: filter === tab ? '0 1px 3px rgba(0,0,0,0.06)' : 'none'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products Table matching screenshot */}
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
                <th style={{ padding: '0.95rem 1.25rem' }}>PRODUCT NAME</th>
                <th style={{ padding: '0.95rem 1.25rem' }}>TYPE & CATEGORY</th>
                <th style={{ padding: '0.95rem 1.25rem' }}>PRICING</th>
                <th style={{ padding: '0.95rem 1.25rem' }}>STATUS</th>
                <th style={{ padding: '0.95rem 1.25rem', textAlign: 'right' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((prod) => (
                <tr
                  key={prod.id}
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
                        width: '42px',
                        height: '42px',
                        borderRadius: '8px',
                        backgroundColor: '#f1f5f9',
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.1rem'
                      }}>
                        📦
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.86rem' }}>
                          {prod.title}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.15rem' }}>
                          /program/{prod.slug || prod.id}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ padding: '1rem 1.25rem' }}>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px',
                      backgroundColor: prod.type === 'SESSION' ? '#eff6ff' : prod.type === 'BUNDLE' ? '#fef3c7' : '#f5f3ff',
                      color: prod.type === 'SESSION' ? '#2563eb' : prod.type === 'BUNDLE' ? '#d97706' : '#7c3aed',
                      display: 'inline-block',
                      marginBottom: '0.3rem'
                    }}>
                      {prod.type}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#64748b', fontSize: '0.75rem' }}>
                      <Folder size={12} />
                      <span>{prod.tag}</span>
                    </div>
                  </td>

                  <td style={{ padding: '1rem 1.25rem' }}>
                    <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.9rem' }}>
                      ₹{prod.price}
                    </div>
                    {prod.original_price && (
                      <div style={{ fontSize: '0.72rem', color: '#94a3b8', textDecoration: 'line-through' }}>
                        ₹{prod.original_price}
                      </div>
                    )}
                  </td>

                  <td style={{ padding: '1rem 1.25rem' }}>
                    <button
                      onClick={() => handleToggle(prod.id)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '999px',
                        border: 'none',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        backgroundColor: prod.status === 'Active' ? '#dcfce7' : '#f1f5f9',
                        color: prod.status === 'Active' ? '#15803d' : '#64748b',
                        cursor: 'pointer'
                      }}
                    >
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: prod.status === 'Active' ? '#16a34a' : '#94a3b8'
                      }} />
                      <span>{prod.status}</span>
                    </button>
                  </td>

                  <td style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>
                    <button
                      title="Edit Product"
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#64748b',
                        cursor: 'pointer',
                        padding: '0.35rem'
                      }}
                    >
                      <Edit3 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New Product Modal */}
      {isAddModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '480px',
            padding: '1.75rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)'
          }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 1.25rem', color: '#0f172a' }}>
              Add New Product / Session
            </h2>

            <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '0.3rem' }}>
                  Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Wealth Mastery Mentorship"
                  value={newProgram.title}
                  onChange={(e) => setNewProgram({ ...newProgram, title: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.85rem',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.85rem'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '0.3rem' }}>
                    Type
                  </label>
                  <select
                    value={newProgram.type}
                    onChange={(e) => setNewProgram({ ...newProgram, type: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.6rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.85rem',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <option value="SESSION">1:1 Session</option>
                    <option value="COURSE">Course</option>
                    <option value="BUNDLE">Bundle</option>
                    <option value="DIGITAL">Digital Product</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '0.3rem' }}>
                    Category Tag
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Transformation"
                    value={newProgram.tag}
                    onChange={(e) => setNewProgram({ ...newProgram, tag: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.6rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '0.3rem' }}>
                    Price (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 999"
                    value={newProgram.price}
                    onChange={(e) => setNewProgram({ ...newProgram, price: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.6rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '0.3rem' }}>
                    Original Price (₹)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 2999"
                    value={newProgram.original_price}
                    onChange={(e) => setNewProgram({ ...newProgram, original_price: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.6rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  style={{
                    flex: 1,
                    backgroundColor: '#f1f5f9',
                    border: 'none',
                    padding: '0.65rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                    color: '#475569',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    backgroundColor: '#0f172a',
                    border: 'none',
                    padding: '0.65rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    color: '#ffffff',
                    cursor: 'pointer'
                  }}
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
