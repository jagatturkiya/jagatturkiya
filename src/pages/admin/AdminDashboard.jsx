import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  ShoppingBag, 
  Layers, 
  MessageSquare, 
  ArrowRight, 
  PhoneCall, 
  Clock, 
  ExternalLink,
  Plus,
  CheckCircle,
  Database
} from 'lucide-react';
import { getLeads, getOrders, getPrograms, getComments } from '../../lib/supabase';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState([]);
  const [orders, setOrders] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function load() {
      const [l, o, p, c] = await Promise.all([
        getLeads(),
        getOrders(),
        getPrograms(),
        getComments()
      ]);
      setLeads(l);
      setOrders(o);
      setPrograms(p);
      setComments(c);
    }
    load();
  }, []);

  const totalRevenue = orders.reduce((sum, o) => sum + (Number(o.amount) || 0), 0);
  const pendingLeads = leads.filter(l => l.status === 'New');

  return (
    <div className="admin-dark-dashboard" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Top Operations Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.25rem',
        marginBottom: '2rem'
      }}>
        <div>
          <div style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            color: '#64748b',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '0.35rem'
          }}>
            Advisory Operations Dashboard
          </div>
          <h1 style={{
            fontSize: '1.85rem',
            fontWeight: 800,
            margin: 0,
            color: '#ffffff',
            fontFamily: "'Instrument Sans', sans-serif"
          }}>
            Welcome, Jagat Turkiya
          </h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={() => navigate('/admin/leads')}
            style={{
              backgroundColor: '#10b981',
              color: '#ffffff',
              border: 'none',
              padding: '0.65rem 1.25rem',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer'
            }}
          >
            <Users size={16} />
            <span>Open Leads CRM ({leads.length})</span>
          </button>

          <button
            onClick={() => navigate('/admin/programs')}
            style={{
              backgroundColor: '#1e293b',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              padding: '0.65rem 1.15rem',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            + Manage Programs
          </button>
        </div>
      </div>

      {/* 4 Clean Executive Metric Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: '1.25rem',
        marginBottom: '2rem'
      }}>
        {/* Card 1: Leads */}
        <div style={{
          backgroundColor: '#0b0f19',
          borderRadius: '12px',
          padding: '1.4rem 1.5rem',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.08em' }}>
              TOTAL INQUIRIES
            </span>
            <Users size={18} color="#94a3b8" />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>
            {leads.length}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '0.35rem', fontWeight: 600 }}>
            {pendingLeads.length} new follow-ups pending
          </div>
        </div>

        {/* Card 2: Bookings */}
        <div style={{
          backgroundColor: '#0b0f19',
          borderRadius: '12px',
          padding: '1.4rem 1.5rem',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.08em' }}>
              RECORDED SESSIONS
            </span>
            <ShoppingBag size={18} color="#94a3b8" />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>
            {orders.length}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.35rem' }}>
            Paid consultations & bookings
          </div>
        </div>

        {/* Card 3: Programs */}
        <div style={{
          backgroundColor: '#0b0f19',
          borderRadius: '12px',
          padding: '1.4rem 1.5rem',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.08em' }}>
              ACTIVE CATALOG
            </span>
            <Layers size={18} color="#94a3b8" />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>
            {programs.length}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#d97706', marginTop: '0.35rem', fontWeight: 600 }}>
            {programs.filter(p => p.status === 'Active').length} active for enrolment
          </div>
        </div>

        {/* Card 4: Reader Reflections */}
        <div style={{
          backgroundColor: '#0b0f19',
          borderRadius: '12px',
          padding: '1.4rem 1.5rem',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.08em' }}>
              STORY DISCUSSIONS
            </span>
            <MessageSquare size={18} color="#94a3b8" />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>
            {comments.length}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.35rem' }}>
            Audience comments & feedback
          </div>
        </div>
      </div>

      {/* Main Split: Latest Leads Action Center & Recent Orders */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '1.5rem'
      }}>
        {/* Latest Leads with 1-Click WhatsApp */}
        <div style={{
          backgroundColor: '#0b0f19',
          borderRadius: '14px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '1.75rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.2rem', color: '#ffffff' }}>
                Recent Inquiries & Follow-ups
              </h3>
              <p style={{ margin: 0, fontSize: '0.78rem', color: '#64748b' }}>
                Synced directly from public website forms.
              </p>
            </div>

            <button
              onClick={() => navigate('/admin/leads')}
              style={{
                background: 'none',
                border: 'none',
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <span>View All</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {leads.slice(0, 4).map((lead) => {
              const cleanPhone = (lead.phone || '').replace(/[^0-9]/g, '');
              const waUrl = `https://wa.me/91${cleanPhone}?text=${encodeURIComponent(`Hi ${lead.name}, this is Jagat Turkiya Team. We received your consultation request.`)}`;

              return (
                <div
                  key={lead.id}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '10px',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.88rem' }}>
                        {lead.name}
                      </span>
                      <span style={{
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        padding: '0.1rem 0.45rem',
                        borderRadius: '4px',
                        backgroundColor: lead.status === 'New' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                        color: lead.status === 'New' ? '#f87171' : '#34d399'
                      }}>
                        {lead.status}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.74rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                      {lead.phone} • {lead.preferred_time || 'Morning'}
                    </div>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: '#10b981',
                      color: '#ffffff',
                      textDecoration: 'none',
                      padding: '0.45rem 0.85rem',
                      borderRadius: '6px',
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      flexShrink: 0
                    }}
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Catalog Quick Manager */}
        <div style={{
          backgroundColor: '#0b0f19',
          borderRadius: '14px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '1.75rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.2rem', color: '#ffffff' }}>
                Programs & Consulting Pricing
              </h3>
              <p style={{ margin: 0, fontSize: '0.78rem', color: '#64748b' }}>
                Editable live product catalog.
              </p>
            </div>

            <button
              onClick={() => navigate('/admin/programs')}
              style={{
                background: 'none',
                border: 'none',
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <span>Manage</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {programs.slice(0, 4).map((prog) => (
              <div
                key={prog.id}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '10px',
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '0.86rem' }}>
                    {prog.title}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '0.2rem' }}>
                    {prog.type} • {prog.tag}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.92rem' }}>
                    ₹{prog.price}
                  </div>
                  <span style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: prog.status === 'Active' ? '#10b981' : '#64748b'
                  }}>
                    • {prog.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
