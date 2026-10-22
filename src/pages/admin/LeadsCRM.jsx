import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Search, 
  Mail, 
  Phone, 
  Clock, 
  Trash2, 
  Plus, 
  RefreshCw,
  MessageCircle,
  ExternalLink
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
    if (window.confirm('Delete this lead record?')) {
      const updated = await deleteLead(id);
      setLeads(updated);
    }
  };

  const handleCreateLead = async (e) => {
    e.preventDefault();
    if (!newLeadForm.name || !newLeadForm.phone) {
      alert('Please provide client name and phone number.');
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
    <div className="dark-leads-crm" style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            fontSize: '1.75rem',
            fontWeight: 800,
            margin: '0 0 0.35rem',
            color: '#ffffff',
            fontFamily: "'Instrument Sans', sans-serif"
          }}>
            Leads & Clients CRM
          </h1>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.85rem' }}>
            Live client inquiries from website forms with 1-click direct WhatsApp conversation links.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={loadLeads}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: '#0b0f19',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '0.6rem 0.95rem',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: '#94a3b8',
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
            <span>Add Inquired Client</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div style={{
        backgroundColor: '#0b0f19',
        borderRadius: '12px',
        padding: '0.75rem 1rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '8px',
          padding: '0.45rem 0.85rem',
          flex: '1 1 280px',
          maxWidth: '380px'
        }}>
          <Search size={15} color="#64748b" />
          <input
            type="text"
            placeholder="Search by name, phone, notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              outline: 'none',
              fontSize: '0.85rem',
              width: '100%',
              color: '#ffffff'
            }}
          />
        </div>

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
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  border: 'none',
                  backgroundColor: isActive ? '#ffffff' : 'transparent',
                  color: isActive ? '#050505' : '#94a3b8',
                  cursor: 'pointer'
                }}
              >
                {tab === 'All' ? `All Inquiries (${leads.length})` : tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2-Column Dark Luxury Leads Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
        gap: '1.25rem'
      }}>
        {filteredLeads.map((lead) => {
          const isExpanded = expandedMessageId === lead.id;
          const cleanPhone = (lead.phone || '').replace(/[^0-9]/g, '');
          const waNumber = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;
          const waMessage = encodeURIComponent(`Hi ${lead.name || 'there'}, this is Jagat Turkiya Team. We received your consultation inquiry.`);
          const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

          return (
            <div
              key={lead.id}
              style={{
                backgroundColor: '#0b0f19',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '1.4rem',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)'
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.25rem', color: '#ffffff' }}>
                    {lead.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: '#64748b' }}>
                    <Clock size={12} />
                    <span>{lead.created_at || 'Recently'}</span>
                  </div>
                </div>

                <select
                  value={lead.status}
                  onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                  style={{
                    backgroundColor: lead.status === 'New' 
                      ? 'rgba(239, 68, 68, 0.15)' 
                      : lead.status.includes('Closed')
                      ? 'rgba(16, 185, 129, 0.15)'
                      : 'rgba(245, 158, 11, 0.15)',
                    color: lead.status === 'New' 
                      ? '#f87171' 
                      : lead.status.includes('Closed')
                      ? '#34d399'
                      : '#fbbf24',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="New" style={{ background: '#0f172a', color: '#fff' }}>New (Pending)</option>
                  <option value="In Conversation" style={{ background: '#0f172a', color: '#fff' }}>In Conversation</option>
                  <option value="Follow-up" style={{ background: '#0f172a', color: '#fff' }}>Follow-up</option>
                  <option value="Closed (Resolved)" style={{ background: '#0f172a', color: '#fff' }}>Closed</option>
                </select>
              </div>

              {/* Contact Information */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                padding: '0.75rem 0.85rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                marginBottom: '0.85rem',
                fontSize: '0.82rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.45rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', color: '#cbd5e1' }}>
                  <Phone size={13} color="#94a3b8" />
                  <a href={`tel:${lead.phone}`} style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}>
                    {lead.phone || 'No phone'}
                  </a>
                </div>

                {lead.email && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', color: '#94a3b8' }}>
                    <Mail size={13} color="#64748b" />
                    <span style={{ wordBreak: 'break-all' }}>{lead.email}</span>
                  </div>
                )}
              </div>

              {/* Preferred Slot */}
              <div style={{
                fontSize: '0.72rem',
                color: '#94a3b8',
                marginBottom: '0.85rem'
              }}>
                <span style={{ color: '#64748b' }}>Preferred Slot:</span> <strong style={{ color: '#e2e8f0' }}>{lead.preferred_time || 'Morning'}</strong>
              </div>

              {/* Message Snippet */}
              <div style={{ flex: 1, marginBottom: '1.25rem' }}>
                <p style={{
                  fontSize: '0.82rem',
                  color: 'rgba(255, 255, 255, 0.75)',
                  lineHeight: 1.55,
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
                    color: '#94a3b8',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: 0,
                    textDecoration: 'underline'
                  }}
                >
                  {isExpanded ? 'Hide' : 'Read Full Message'}
                </button>
              </div>

              {/* Actions: Direct WhatsApp & Delete */}
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
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none'
                  }}
                >
                  <MessageCircle size={15} />
                  <span>Direct WhatsApp</span>
                </a>

                <button
                  onClick={() => handleDelete(lead.id)}
                  title="Delete Record"
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    color: '#f87171',
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Lead Modal */}
      {isAddModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
            maxWidth: '460px',
            padding: '1.75rem',
            color: '#ffffff'
          }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 1.25rem' }}>
              Add Client Inquiry
            </h2>

            <form onSubmit={handleCreateLead} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                  Client Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={newLeadForm.name}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, name: e.target.value })}
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

              <div>
                <label style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                  WhatsApp Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={newLeadForm.phone}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
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

              <div>
                <label style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. client@example.com"
                  value={newLeadForm.email}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, email: e.target.value })}
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

              <div>
                <label style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                  Inquiry Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Client background, goals, or program interest..."
                  value={newLeadForm.message}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, message: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    outline: 'none',
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
                  disabled={isSubmittingNew}
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
