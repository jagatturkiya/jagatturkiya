import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Search, 
  Mail, 
  Phone, 
  Clock, 
  Trash2, 
  Plus, 
  ExternalLink,
  ChevronDown,
  CheckCircle,
  MessageCircle,
  RefreshCw,
  Sparkles,
  Filter
} from 'lucide-react';
import { getLeads, updateLeadStatus, deleteLead, submitLead } from '../../lib/supabase';

export default function LeadsCRM() {
  const [leads, setLeads] = useState([]);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedMessageId, setExpandedMessageId] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newLeadForm, setNewLeadForm] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_time: 'Morning (10 AM - 1 PM)',
    message: ''
  });
  const [isSubmittingNew, setIsSubmittingNew] = useState(false);

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    const data = await getLeads();
    setLeads(data);
  };

  const handleStatusChange = async (id, newStatus) => {
    const updated = await updateLeadStatus(id, newStatus);
    setLeads(updated);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      const updated = await deleteLead(id);
      setLeads(updated);
    }
  };

  const handleCreateLead = async (e) => {
    e.preventDefault();
    if (!newLeadForm.name || !newLeadForm.phone) {
      alert('Please provide name and phone number.');
      return;
    }
    setIsSubmittingNew(true);
    await submitLead(newLeadForm);
    await loadLeads();
    setIsSubmittingNew(false);
    setIsAddModalOpen(false);
    setNewLeadForm({
      name: '',
      email: '',
      phone: '',
      preferred_time: 'Morning (10 AM - 1 PM)',
      message: ''
    });
  };

  // Filter & Search
  const filteredLeads = leads.filter(lead => {
    const matchesFilter = 
      filter === 'All' ? true :
      filter === 'Closed' ? lead.status.includes('Closed') :
      lead.status === filter;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !query || 
      (lead.name && lead.name.toLowerCase().includes(query)) ||
      (lead.email && lead.email.toLowerCase().includes(query)) ||
      (lead.phone && lead.phone.includes(query)) ||
      (lead.message && lead.message.toLowerCase().includes(query));

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="leads-crm-view" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Top Header */}
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
            Leads CRM
          </h1>
          <p style={{ margin: 0, color: '#64748b', fontSize: '0.88rem' }}>
            Review inquiries, track consultation pipelines, and initiate 1-click WhatsApp conversations.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={loadLeads}
            title="Refresh Leads"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              padding: '0.55rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: '#475569',
              cursor: 'pointer'
            }}
          >
            <RefreshCw size={14} />
            <span>Refresh</span>
          </button>

          <button
            onClick={() => setIsAddModalOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#4338ca',
              color: '#ffffff',
              border: 'none',
              padding: '0.58rem 1.15rem',
              borderRadius: '8px',
              fontSize: '0.84rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(67, 56, 202, 0.25)'
            }}
          >
            <Plus size={16} />
            <span>Add Manual Lead</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '0.85rem 1rem',
        border: '1px solid #e2e8f0',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {/* Search Input */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '0.45rem 0.85rem',
          flex: '1 1 280px',
          maxWidth: '420px'
        }}>
          <Search size={16} color="#94a3b8" />
          <input
            type="text"
            placeholder="Search by name, email, phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              outline: 'none',
              fontSize: '0.85rem',
              width: '100%',
              color: '#0f172a'
            }}
          />
        </div>

        {/* Status Filters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
          {['All', 'New', 'In Conversation', 'Closed'].map((tab) => {
            const isActive = filter === tab;
            return (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  border: 'none',
                  backgroundColor: isActive ? '#4338ca' : '#f1f5f9',
                  color: isActive ? '#ffffff' : '#64748b',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {tab === 'All' ? `All Leads (${leads.length})` : tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Leads 2-Column Grid matching user's screenshot media_1792664309970.jpg */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
        gap: '1.25rem'
      }}>
        {filteredLeads.map((lead) => {
          const isExpanded = expandedMessageId === lead.id;
          const cleanPhone = (lead.phone || '').replace(/[^0-9]/g, '');
          const waNumber = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;
          const waMessage = encodeURIComponent(`Hi ${lead.name || 'there'}, this is Jagat Turkiya Team. We received your consultation request regarding the Mastermind program.`);
          const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

          return (
            <div
              key={lead.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                border: '1px solid #e2e8f0',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                position: 'relative'
              }}
            >
              {/* Card Header */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: '0.85rem'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    margin: '0 0 0.25rem',
                    color: '#0f172a'
                  }}>
                    {lead.name}
                  </h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.72rem',
                    color: '#64748b'
                  }}>
                    <Clock size={12} />
                    <span>{lead.created_at || 'Recently'}</span>
                  </div>
                </div>

                <input
                  type="checkbox"
                  style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: '#4338ca' }}
                />
              </div>

              {/* Status Dropdown Pill */}
              <div style={{ marginBottom: '1rem' }}>
                <select
                  value={lead.status}
                  onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                  style={{
                    backgroundColor: lead.status.includes('Closed') 
                      ? '#ecfdf5' 
                      : lead.status === 'New' 
                      ? '#eff6ff' 
                      : '#fef3c7',
                    color: lead.status.includes('Closed')
                      ? '#065f46'
                      : lead.status === 'New'
                      ? '#1e40af'
                      : '#92400e',
                    border: '1px solid',
                    borderColor: lead.status.includes('Closed')
                      ? '#a7f3d0'
                      : lead.status === 'New'
                      ? '#bfdbfe'
                      : '#fde68a',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '999px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  <option value="New">New (Pending)</option>
                  <option value="In Conversation">In Conversation</option>
                  <option value="Follow-up">Follow-up</option>
                  <option value="Closed (Resolved)">Closed (Resolved)</option>
                </select>
              </div>

              {/* Contact Box */}
              <div style={{
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                padding: '0.75rem',
                border: '1px solid #f1f5f9',
                marginBottom: '0.85rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                fontSize: '0.82rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', color: '#334155' }}>
                  <Mail size={14} color="#64748b" />
                  <a
                    href={`mailto:${lead.email}`}
                    style={{ color: '#334155', textDecoration: 'none', wordBreak: 'break-all' }}
                  >
                    {lead.email || 'No email provided'}
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', color: '#334155' }}>
                  <Phone size={14} color="#64748b" />
                  <a
                    href={`tel:${lead.phone}`}
                    style={{ color: '#334155', textDecoration: 'none', fontWeight: 600 }}
                  >
                    {lead.phone || 'No phone'}
                  </a>
                </div>
              </div>

              {/* Preferred Time Pill */}
              <div style={{
                backgroundColor: '#eff6ff',
                borderRadius: '6px',
                padding: '0.35rem 0.65rem',
                fontSize: '0.72rem',
                color: '#1e40af',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginBottom: '0.85rem',
                width: 'fit-content'
              }}>
                <Clock size={12} />
                <span>PREF. TIME: {lead.preferred_time || 'MORNING'}</span>
              </div>

              {/* Message Snippet */}
              <div style={{ flex: 1, marginBottom: '1.25rem' }}>
                <p style={{
                  fontSize: '0.82rem',
                  color: '#475569',
                  lineHeight: 1.5,
                  margin: '0 0 0.35rem',
                  display: isExpanded ? 'block' : '-webkit-box',
                  WebkitLineClamp: isExpanded ? 'none' : 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  "{lead.message || 'Client inquired regarding 10-week Mastermind program.'}"
                </p>

                <button
                  onClick={() => setExpandedMessageId(isExpanded ? null : lead.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#4338ca',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  {isExpanded ? 'Hide Message' : 'Read Full Message'}
                </button>
              </div>

              {/* Bottom 1-Click WhatsApp & Delete Button */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    backgroundColor: '#10b981',
                    color: '#ffffff',
                    padding: '0.6rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    boxShadow: '0 2px 6px rgba(16, 185, 129, 0.25)',
                    transition: 'background-color 0.15s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#059669'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#10b981'}
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>

                <button
                  onClick={() => handleDelete(lead.id)}
                  title="Delete Lead"
                  style={{
                    backgroundColor: '#fef2f2',
                    border: '1px solid #fee2e2',
                    color: '#ef4444',
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredLeads.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '4rem 1rem',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          color: '#64748b'
        }}>
          <Users size={40} style={{ opacity: 0.35, marginBottom: '0.75rem' }} />
          <h3 style={{ margin: '0 0 0.35rem', color: '#1e293b' }}>No leads found</h3>
          <p style={{ margin: 0, fontSize: '0.85rem' }}>Try clearing your search query or filter tab.</p>
        </div>
      )}

      {/* Add Manual Lead Modal */}
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
              Add New Lead Manually
            </h2>

            <form onSubmit={handleCreateLead} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '0.3rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={newLeadForm.name}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, name: e.target.value })}
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
                  Phone Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={newLeadForm.phone}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
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
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. rahul@example.com"
                  value={newLeadForm.email}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, email: e.target.value })}
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
                  Preferred Call Time
                </label>
                <select
                  value={newLeadForm.preferred_time}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, preferred_time: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.85rem',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.85rem',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                  <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '0.3rem' }}>
                  Notes / Inquired Program
                </label>
                <textarea
                  rows={3}
                  placeholder="Notes about client requirements..."
                  value={newLeadForm.message}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.85rem',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.85rem',
                    resize: 'vertical'
                  }}
                />
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
                  disabled={isSubmittingNew}
                  style={{
                    flex: 1,
                    backgroundColor: '#4338ca',
                    border: 'none',
                    padding: '0.65rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    color: '#ffffff',
                    cursor: 'pointer'
                  }}
                >
                  {isSubmittingNew ? 'Saving...' : 'Save Lead'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
