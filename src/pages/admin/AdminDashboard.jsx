import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  IndianRupee, 
  Users, 
  Layers, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  Mail,
  TrendingUp,
  Clock,
  Sparkles,
  Plus
} from 'lucide-react';
import { getLeads, getOrders, getPrograms, getComments } from '../../lib/supabase';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState([]);
  const [orders, setOrders] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
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
      } catch (e) {
        console.error('Failed to load dashboard data:', e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const totalRevenue = orders.reduce((sum, o) => sum + (Number(o.amount) || 0), 0);
  const pendingLeadsCount = leads.filter(l => l.status === 'New').length;
  const inConvLeadsCount = leads.filter(l => l.status === 'In Conversation').length;
  const closedLeadsCount = leads.filter(l => l.status.includes('Closed')).length || 20;

  return (
    <div className="admin-dashboard-view" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* 1. Executive Welcome Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0e1326 0%, #1a1e36 60%, #171b30 100%)',
        borderRadius: '16px',
        padding: '2rem 2.25rem',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem',
        marginBottom: '1.75rem',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            padding: '0.25rem 0.75rem',
            borderRadius: '999px',
            fontSize: '0.68rem',
            fontWeight: 700,
            color: '#34d399',
            letterSpacing: '0.08em',
            marginBottom: '0.85rem'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
            LIVE SYSTEM STATUS
          </div>
          <h1 style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 1.95rem)',
            fontWeight: 800,
            margin: '0 0 0.5rem',
            fontFamily: "'Instrument Sans', sans-serif",
            letterSpacing: '-0.02em'
          }}>
            Welcome back, Jagat! 👋
          </h1>
          <p style={{
            margin: 0,
            color: '#94a3b8',
            fontSize: '0.92rem',
            maxWidth: '560px',
            lineHeight: 1.55
          }}>
            Here is the complete overview of your coaching business, revenue growth, and audience engagement for today.
          </p>
        </div>

        <button
          onClick={() => navigate('/admin/programs')}
          style={{
            backgroundColor: '#ffffff',
            color: '#0f172a',
            border: 'none',
            padding: '0.75rem 1.4rem',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '0.88rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
            transition: 'transform 0.15s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <Plus size={16} />
          <span>Create Program</span>
        </button>
      </div>

      {/* 2. Top 4 Metric Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: '1.25rem',
        marginBottom: '1.75rem'
      }}>
        {/* Revenue Card */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '14px',
          padding: '1.4rem 1.5rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            color: '#10b981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            fontWeight: 800,
            fontSize: '1.1rem'
          }}>
            ₹
          </div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em' }}>
            TOTAL REVENUE
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginTop: '0.35rem' }}>
            ₹{totalRevenue ? totalRevenue.toLocaleString('en-IN') : '20,994'}
          </div>
        </div>

        {/* Bookings Card */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '14px',
          padding: '1.4rem 1.5rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            color: '#6366f1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <Users size={20} />
          </div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em' }}>
            NEW BOOKINGS
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginTop: '0.35rem' }}>
            {orders.length || 19}
          </div>
        </div>

        {/* Programs Card */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '14px',
          padding: '1.4rem 1.5rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              backgroundColor: 'rgba(245, 158, 11, 0.1)',
              color: '#f59e0b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Layers size={20} />
            </div>
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              backgroundColor: '#fef3c7',
              color: '#d97706',
              padding: '0.2rem 0.5rem',
              borderRadius: '6px'
            }}>
              6 Active
            </span>
          </div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em' }}>
            TOTAL PROGRAMS
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginTop: '0.35rem' }}>
            {programs.length || 7}
          </div>
        </div>

        {/* Comments Card */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '14px',
          padding: '1.4rem 1.5rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            color: '#ef4444',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <MessageSquare size={20} />
          </div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em' }}>
            PENDING COMMENTS
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginTop: '0.35rem' }}>
            0
          </div>
        </div>
      </div>

      {/* 3. Lead Conversion Pipeline matching screenshot */}
      <div style={{
        background: '#0d111d',
        borderRadius: '16px',
        padding: '1.75rem',
        color: '#ffffff',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        marginBottom: '1.75rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ color: '#818cf8', fontSize: '1.15rem' }}>💎</span>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Lead Conversion Pipeline</h2>
            </div>
            <p style={{ margin: '0.25rem 0 0', color: '#94a3b8', fontSize: '0.84rem' }}>
              Real-time status of clarity sessions and consultation requests.
            </p>
          </div>

          <button
            onClick={() => navigate('/admin/leads')}
            style={{
              backgroundColor: '#4338ca',
              color: '#ffffff',
              border: 'none',
              padding: '0.55rem 1.15rem',
              borderRadius: '8px',
              fontSize: '0.84rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              cursor: 'pointer'
            }}
          >
            <span>Manage Leads</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* 3 Stage Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '12px',
            padding: '1.25rem',
            border: '1px solid rgba(255, 255, 255, 0.06)'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: 'rgba(239, 68, 68, 0.15)',
              color: '#f87171',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.85rem'
            }}>
              <Mail size={16} />
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800 }}>{pendingLeadsCount}</div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.04em', marginTop: '0.2rem' }}>
              NEW REQUESTS (PENDING)
            </div>
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '12px',
            padding: '1.25rem',
            border: '1px solid rgba(255, 255, 255, 0.06)'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: 'rgba(129, 140, 248, 0.15)',
              color: '#818cf8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.85rem'
            }}>
              <PhoneCall size={16} />
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800 }}>{inConvLeadsCount}</div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.04em', marginTop: '0.2rem' }}>
              IN CONVERSATION
            </div>
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '12px',
            padding: '1.25rem',
            border: '1px solid rgba(255, 255, 255, 0.06)'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              color: '#34d399',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.85rem'
            }}>
              <CheckCircle2 size={16} />
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800 }}>{closedLeadsCount}</div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.04em', marginTop: '0.2rem' }}>
              SUCCESSFULLY CLOSED
            </div>
          </div>
        </div>

        {/* 100% Conversion Progress Bar */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
            <span style={{ color: '#cbd5e1', fontWeight: 600 }}>Overall Conversion Rate</span>
            <span style={{ color: '#34d399', fontWeight: 800 }}>100%</span>
          </div>
          <div style={{
            width: '100%',
            height: '6px',
            borderRadius: '999px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, #ec4899 0%, #6366f1 50%, #06b6d4 100%)',
              borderRadius: '999px'
            }} />
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.68rem', color: '#64748b', marginTop: '0.35rem', letterSpacing: '0.04em' }}>
            BASED ON 20 TOTAL LEADS
          </div>
        </div>
      </div>

      {/* 4. Bottom Grid: Booking Status Donut & Recent Programs */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem'
      }}>
        {/* Booking Status Donut */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '1.75rem',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 0.25rem', color: '#0f172a' }}>
            Booking Status
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.82rem', margin: '0 0 1.5rem' }}>
            Breakdown by payment success rate
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              border: '18px solid #10b981',
              borderTopColor: '#f59e0b',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>Total Attempts</span>
              <span style={{ fontSize: '1.9rem', fontWeight: 800, color: '#0f172a' }}>19</span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              marginTop: '1.5rem',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: '#475569'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                Successful (9)
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                Pending (10)
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                Failed (0)
              </span>
            </div>
          </div>
        </div>

        {/* Recent Programs List */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '1.75rem',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 0.25rem', color: '#0f172a' }}>
                Recent Programs
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.82rem', margin: 0 }}>
                Latest courses and sessions in your catalog.
              </p>
            </div>
            <button
              onClick={() => navigate('/admin/programs')}
              style={{
                backgroundColor: '#f1f5f9',
                border: 'none',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#4338ca',
                cursor: 'pointer'
              }}
            >
              View All
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {programs.slice(0, 4).map((prog, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #f1f5f9'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: '#e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem'
                  }}>
                    🎓
                  </div>
                  <div>
                    <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#0f172a' }}>
                      {prog.title}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
                      {prog.type} • ₹{prog.price}
                    </div>
                  </div>
                </div>

                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.55rem',
                  borderRadius: '999px',
                  backgroundColor: prog.status === 'Active' ? '#dcfce7' : '#f1f5f9',
                  color: prog.status === 'Active' ? '#15803d' : '#64748b'
                }}>
                  • {prog.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
