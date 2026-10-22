import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Search, 
  Mail, 
  Phone, 
  Trash2, 
  Plus, 
  RefreshCw,
  MessageCircle,
  ExternalLink,
  Filter,
  CheckCircle2,
  Calendar,
  Tag
} from 'lucide-react';
import { getLeadsList, recordLead, removeLead, updateLeadStatus } from '../../lib/cmsStore';

export default function LeadsCRM() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sourceFilter, setSourceFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [expandedId, setExpandedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newLead, setNewLead] = useState({
    name: '',
    email: '',
    phone: '',
    source: 'Manual Inquiry',
    message: '',
    status: 'New'
  });

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    setLoading(true);
    const data = await getLeadsList();
    setLeads(data);
    setLoading(false);
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Delete lead entry for "${name}"?`)) {
      const updated = await removeLead(id);
      setLeads(updated);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status: newStatus } : l));
    await updateLeadStatus(id, newStatus);
  };

  const handleCreateLead = async (e) => {
    e.preventDefault();
    if (!newLead.name.trim() || !newLead.phone.trim()) {
      alert('Please provide client name and phone number.');
      return;
    }

    await recordLead({
      name: newLead.name.trim().slice(0, 60),
      email: (newLead.email || '').trim().slice(0, 80),
      phone: newLead.phone.trim().slice(0, 15),
      message: (newLead.message || '').trim().slice(0, 500),
      source: newLead.source || 'Manual CRM Entry',
      program: 'Mastermind Inquiry',
      status: 'New'
    });

    setIsModalOpen(false);
    setNewLead({
      name: '',
      email: '',
      phone: '',
      source: 'Manual Inquiry',
      message: '',
      status: 'New'
    });
    await loadLeads();
  };

  // Filter leads
  const filteredLeads = leads.filter(l => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      (l.name && l.name.toLowerCase().includes(q)) ||
      (l.email && l.email.toLowerCase().includes(q)) ||
      (l.phone && l.phone.includes(q)) ||
      (l.message && l.message.toLowerCase().includes(q));

    const matchesSource = 
      sourceFilter === 'ALL' ? true :
      sourceFilter === 'OPTIN' ? (l.source && l.source.toLowerCase().includes('optin')) :
      sourceFilter === 'CONTACT' ? (l.source && (l.source.toLowerCase().includes('contact') || l.source.toLowerCase().includes('inquiry'))) :
      true;

    const leadStatus = (l.status || 'New').toLowerCase();
    const matchesStatus = 
      statusFilter === 'ALL' ? true :
      leadStatus === statusFilter.toLowerCase();

    return matchesSearch && matchesSource && matchesStatus;
  });

  const optinCount = leads.filter(l => l.source && l.source.toLowerCase().includes('optin')).length;
  const contactCount = leads.filter(l => l.source && (l.source.toLowerCase().includes('contact') || l.source.toLowerCase().includes('inquiry'))).length;

  const newCount = leads.filter(l => !l.status || l.status.toLowerCase() === 'new').length;
  const contactedCount = leads.filter(l => l.status && l.status.toLowerCase() === 'contacted').length;
  const followUpCount = leads.filter(l => l.status && l.status.toLowerCase() === 'follow-up').length;
  const convertedCount = leads.filter(l => l.status && l.status.toLowerCase() === 'converted').length;
  const closedCount = leads.filter(l => l.status && l.status.toLowerCase() === 'closed').length;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            Leads &amp; Inquiries CRM
          </h1>
          <p style={{ margin: 0, color: '#888888', fontSize: '0.88rem' }}>
            Live repository of all submissions from the VSL Optin Funnel and Contact Us forms.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={loadLeads}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: '#0a0a0a',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#cccccc',
              padding: '0.65rem 1rem',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            <span>Refresh</span>
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
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
            <span>Add Lead</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem',
        marginBottom: '1.25rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        {/* Source Filter Text Tabs */}
        <div style={{
          display: 'flex',
          gap: '1.75rem',
          alignItems: 'center'
        }}>
          <button
            type="button"
            onClick={() => setSourceFilter('ALL')}
            style={{
              padding: '0.4rem 0',
              border: 'none',
              borderBottom: sourceFilter === 'ALL' ? '2px solid #ffffff' : '2px solid transparent',
              backgroundColor: 'transparent',
              color: sourceFilter === 'ALL' ? '#ffffff' : '#666666',
              fontSize: '0.88rem',
              fontWeight: sourceFilter === 'ALL' ? 700 : 500,
              cursor: 'pointer'
            }}
          >
            All Inquiries ({leads.length})
          </button>
          <button
            type="button"
            onClick={() => setSourceFilter('OPTIN')}
            style={{
              padding: '0.4rem 0',
              border: 'none',
              borderBottom: sourceFilter === 'OPTIN' ? '2px solid #ffffff' : '2px solid transparent',
              backgroundColor: 'transparent',
              color: sourceFilter === 'OPTIN' ? '#ffffff' : '#666666',
              fontSize: '0.88rem',
              fontWeight: sourceFilter === 'OPTIN' ? 700 : 500,
              cursor: 'pointer'
            }}
          >
            Optin Funnel ({optinCount})
          </button>
          <button
            type="button"
            onClick={() => setSourceFilter('CONTACT')}
            style={{
              padding: '0.4rem 0',
              border: 'none',
              borderBottom: sourceFilter === 'CONTACT' ? '2px solid #ffffff' : '2px solid transparent',
              backgroundColor: 'transparent',
              color: sourceFilter === 'CONTACT' ? '#ffffff' : '#666666',
              fontSize: '0.88rem',
              fontWeight: sourceFilter === 'CONTACT' ? 700 : 500,
              cursor: 'pointer'
            }}
          >
            Contact Us ({contactCount})
          </button>
        </div>

        {/* Search */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '340px'
        }}>
          <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#666666' }} />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by name, email, phone..."
            style={{
              width: '100%',
              padding: '0.65rem 1rem 0.65rem 2.4rem',
              backgroundColor: '#0a0a0a',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '0.86rem',
              outline: 'none'
            }}
          />
        </div>
      </div>

      {/* Status Tags Filter */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        flexWrap: 'wrap',
        marginBottom: '1.5rem'
      }}>
        <span style={{ fontSize: '0.78rem', color: '#888888', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          <Tag size={13} /> Tag Filter:
        </span>
        {[
          { id: 'ALL', label: `All (${leads.length})` },
          { id: 'New', label: `New (${newCount})`, color: '#10b981' },
          { id: 'Contacted', label: `Contacted (${contactedCount})`, color: '#f59e0b' },
          { id: 'Follow-up', label: `Follow-up (${followUpCount})`, color: '#38bdf8' },
          { id: 'Converted', label: `Converted (${convertedCount})`, color: '#c084fc' },
          { id: 'Closed', label: `Closed (${closedCount})`, color: '#a1a1aa' }
        ].map((tab) => {
          const isSelected = statusFilter.toLowerCase() === tab.id.toLowerCase();
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setStatusFilter(tab.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                border: isSelected ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                color: isSelected ? '#ffffff' : '#888888',
                fontSize: '0.78rem',
                fontWeight: isSelected ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {tab.color && (
                <span style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: tab.color,
                  display: 'inline-block'
                }} />
              )}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Leads Table */}
      <div style={{
        backgroundColor: '#0a0a0a',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden'
      }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#666666',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}>
                <th style={{ padding: '0.95rem 1.25rem' }}>Client Name</th>
                <th style={{ padding: '0.95rem 1.25rem' }}>Contact Info</th>
                <th style={{ padding: '0.95rem 1.25rem' }}>Status / Tag</th>
                <th style={{ padding: '0.95rem 1.25rem' }}>Source</th>
                <th style={{ padding: '0.95rem 1.25rem' }}>Message / Inquiry</th>
                <th style={{ padding: '0.95rem 1.25rem' }}>Received</th>
                <th style={{ padding: '0.95rem 1.25rem', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ padding: '3.5rem 1rem', textAlign: 'center', color: '#666666' }}>
                    {loading ? 'Fetching inquiries from database...' : 'No leads found matching your criteria.'}
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => {
                  const phoneClean = (lead.phone || '').replace(/\D/g, '');
                  const waNumber = phoneClean.length === 10 ? `91${phoneClean}` : phoneClean;
                  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(`Hello ${lead.name}, this is Coach Jagat Turkiya's team. Thank you for reaching out!`)}`;
                  const isOptin = lead.source && lead.source.toLowerCase().includes('optin');

                  return (
                    <tr
                      key={lead.id}
                      style={{
                        borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                        transition: 'background-color 0.15s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      {/* Name */}
                      <td style={{ padding: '1rem 1.25rem' }}>
                        <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.9rem' }}>
                          {lead.name}
                        </div>
                        {lead.program && (
                          <div style={{ fontSize: '0.72rem', color: '#888888', marginTop: '2px' }}>
                            {lead.program}
                          </div>
                        )}
                      </td>

                      {/* Contact & WhatsApp Action */}
                      <td style={{ padding: '1rem 1.25rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          {lead.phone && (
                            <a
                              href={waUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Message on WhatsApp"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                color: '#10b981',
                                fontSize: '0.82rem',
                                fontWeight: 600,
                                textDecoration: 'none'
                              }}
                            >
                              <MessageCircle size={13} />
                              <span>{lead.phone}</span>
                            </a>
                          )}
                          {lead.email && (
                            <a
                              href={`mailto:${lead.email}`}
                              title="Send Email"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                color: '#888888',
                                fontSize: '0.76rem',
                                textDecoration: 'none'
                              }}
                            >
                              <Mail size={12} />
                              <span>{lead.email}</span>
                            </a>
                          )}
                        </div>
                      </td>

                      {/* Status / Tag Interactive Dropdown */}
                      <td style={{ padding: '1rem 1.25rem' }}>
                        <select
                          value={lead.status || 'New'}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          style={{
                            backgroundColor:
                              (lead.status === 'New' || !lead.status) ? 'rgba(16, 185, 129, 0.12)' :
                              lead.status === 'Contacted' ? 'rgba(245, 158, 11, 0.12)' :
                              lead.status === 'Follow-up' ? 'rgba(56, 189, 248, 0.12)' :
                              lead.status === 'Converted' ? 'rgba(168, 85, 247, 0.12)' :
                              'rgba(113, 113, 122, 0.12)',
                            color:
                              (lead.status === 'New' || !lead.status) ? '#10b981' :
                              lead.status === 'Contacted' ? '#f59e0b' :
                              lead.status === 'Follow-up' ? '#38bdf8' :
                              lead.status === 'Converted' ? '#c084fc' :
                              '#a1a1aa',
                            border: `1px solid ${
                              (lead.status === 'New' || !lead.status) ? 'rgba(16, 185, 129, 0.3)' :
                              lead.status === 'Contacted' ? 'rgba(245, 158, 11, 0.3)' :
                              lead.status === 'Follow-up' ? 'rgba(56, 189, 248, 0.3)' :
                              lead.status === 'Converted' ? 'rgba(168, 85, 247, 0.3)' :
                              'rgba(113, 113, 122, 0.3)'
                            }`,
                            borderRadius: '6px',
                            padding: '0.35rem 0.65rem',
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            outline: 'none',
                            cursor: 'pointer'
                          }}
                        >
                          <option value="New" style={{ backgroundColor: '#141414', color: '#10b981' }}>● New</option>
                          <option value="Contacted" style={{ backgroundColor: '#141414', color: '#f59e0b' }}>● Contacted</option>
                          <option value="Follow-up" style={{ backgroundColor: '#141414', color: '#38bdf8' }}>● Follow-up</option>
                          <option value="Converted" style={{ backgroundColor: '#141414', color: '#c084fc' }}>● Converted</option>
                          <option value="Closed" style={{ backgroundColor: '#141414', color: '#a1a1aa' }}>● Closed</option>
                        </select>
                      </td>

                      {/* Source */}
                      <td style={{ padding: '1rem 1.25rem' }}>
                        <span style={{
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: isOptin ? '#10b981' : '#38bdf8'
                        }}>
                          {lead.source}
                        </span>
                      </td>

                      {/* Message / Notes */}
                      <td style={{ padding: '1rem 1.25rem', maxWidth: '320px' }}>
                        {lead.message ? (
                          <div>
                            <p style={{
                              margin: 0,
                              color: '#d4d4d8',
                              fontSize: '0.82rem',
                              lineHeight: 1.5,
                              display: expandedId === lead.id ? 'block' : '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            }}>
                              {lead.message}
                            </p>
                            {lead.message.length > 70 && (
                              <button
                                type="button"
                                onClick={() => setExpandedId(expandedId === lead.id ? null : lead.id)}
                                style={{
                                  background: 'none',
                                  border: 'none',
                                  color: '#888888',
                                  fontSize: '0.7rem',
                                  cursor: 'pointer',
                                  padding: 0,
                                  marginTop: '4px'
                                }}
                              >
                                {expandedId === lead.id ? 'Show less' : 'Read full'}
                              </button>
                            )}
                          </div>
                        ) : (
                          <span style={{ color: '#555555', fontSize: '0.76rem', fontStyle: 'italic' }}>
                            Registration lead
                          </span>
                        )}
                      </td>

                      {/* Date */}
                      <td style={{ padding: '1rem 1.25rem', color: '#888888', fontSize: '0.76rem', whiteSpace: 'nowrap' }}>
                        {lead.created_at || 'Recently'}
                      </td>

                      {/* Actions */}
                      <td style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                          {lead.phone && (
                            <a
                              href={waUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Chat on WhatsApp"
                              style={{
                                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                border: '1px solid rgba(16, 185, 129, 0.25)',
                                color: '#10b981',
                                padding: '0.4rem 0.55rem',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center'
                              }}
                            >
                              <MessageCircle size={14} />
                            </a>
                          )}

                          <button
                            onClick={() => handleDelete(lead.id, lead.name)}
                            title="Delete Lead"
                            style={{
                              backgroundColor: 'rgba(239, 68, 68, 0.1)',
                              border: '1px solid rgba(239, 68, 68, 0.25)',
                              color: '#ef4444',
                              padding: '0.4rem 0.55rem',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center'
                            }}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Lead Manually Modal */}
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
            maxWidth: '550px',
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
                Record Inquired Lead
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                style={{ background: 'none', border: 'none', color: '#888888', fontSize: '1.3rem', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateLead} style={{ padding: '1.5rem' }}>
              {/* Name */}
              <div style={{ marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Full Name *</label>
                  <span style={{ fontSize: '0.72rem', color: '#888888' }}>{newLead.name.length}/60</span>
                </div>
                <input
                  type="text"
                  required
                  maxLength={60}
                  value={newLead.name}
                  onChange={e => setNewLead({ ...newLead, name: e.target.value })}
                  placeholder="e.g. Vikramaditya Sharma"
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

              {/* Phone & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.2rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Phone / WhatsApp *</label>
                    <span style={{ fontSize: '0.72rem', color: '#888888' }}>{newLead.phone.length}/15</span>
                  </div>
                  <input
                    type="tel"
                    required
                    maxLength={15}
                    value={newLead.phone}
                    onChange={e => setNewLead({ ...newLead, phone: e.target.value })}
                    placeholder="+91 98765 43210"
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
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Email Address</label>
                    <span style={{ fontSize: '0.72rem', color: '#888888' }}>{newLead.email.length}/80</span>
                  </div>
                  <input
                    type="email"
                    maxLength={80}
                    value={newLead.email}
                    onChange={e => setNewLead({ ...newLead, email: e.target.value })}
                    placeholder="e.g. vikram@enterprise.com"
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

              {/* Source */}
              <div style={{ marginBottom: '1.2rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                  Source Tag
                </label>
                <select
                  value={newLead.source}
                  onChange={e => setNewLead({ ...newLead, source: e.target.value })}
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
                >
                  <option value="Manual Inquiry">Manual Inquiry</option>
                  <option value="VSL Optin Funnel">VSL Optin Funnel</option>
                  <option value="Contact Page Inquiry">Contact Page Inquiry</option>
                  <option value="Direct Call / WhatsApp">Direct Call / WhatsApp</option>
                  <option value="Referral">Referral</option>
                </select>
              </div>

              {/* Message */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Notes / Message Details</label>
                  <span style={{ fontSize: '0.72rem', color: '#888888' }}>{newLead.message.length}/500</span>
                </div>
                <textarea
                  rows={3}
                  maxLength={500}
                  value={newLead.message}
                  onChange={e => setNewLead({ ...newLead, message: e.target.value })}
                  placeholder="e.g. Inquired about 1-on-1 wealth architecture & executive mindset coaching..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: '#141414',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '0.88rem',
                    outline: 'none',
                    resize: 'vertical'
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
                    color: '#888888',
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
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
