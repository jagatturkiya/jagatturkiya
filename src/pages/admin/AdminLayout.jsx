import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Layers,
  BookOpen,
  Star,
  FileText,
  MessageSquare,
  Mail,
  Settings,
  LogOut,
  Menu,
  X,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('jt_admin_authenticated');
    navigate('/admin/login');
  };

  const navGroups = [
    {
      group: 'OPERATIONS',
      items: [
        { label: 'Overview', path: '/admin', icon: LayoutDashboard, exact: true }
      ]
    },
    {
      group: 'CLIENTS & SALES',
      items: [
        { label: 'Leads CRM', path: '/admin/leads', icon: Users, badge: 'Live' },
        { label: 'Bookings & Orders', path: '/admin/bookings', icon: ShoppingBag }
      ]
    },
    {
      group: 'CATALOG',
      items: [
        { label: 'Programs & Sessions', path: '/admin/programs', icon: Layers }
      ]
    },
    {
      group: 'CONTENT & COMMUNITY',
      items: [
        { label: 'Success Stories', path: '/admin/stories', icon: BookOpen },
        { label: 'Audience Discussions', path: '/admin/comments', icon: MessageSquare },
        { label: 'Client Testimonials', path: '/admin/testimonials', icon: Star },
        { label: 'Articles & Insights', path: '/admin/blogs', icon: FileText }
      ]
    },
    {
      group: 'SYSTEM',
      items: [
        { label: 'Database & Settings', path: '/admin/settings', icon: Settings }
      ]
    }
  ];

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/admin') return 'Executive Overview';
    if (path.includes('leads')) return 'Leads CRM';
    if (path.includes('bookings')) return 'Orders & Transactions';
    if (path.includes('programs')) return 'Programs & Pricing Catalog';
    if (path.includes('comments')) return 'Audience Discussions & Replies';
    if (path.includes('stories')) return 'Stories & Case Studies';
    if (path.includes('testimonials')) return 'Client Testimonials';
    if (path.includes('blogs')) return 'Articles & Essays';
    if (path.includes('settings')) return 'Database & Web Settings';
    return 'Executive Overview';
  };

  return (
    <div className="admin-portal-dark-root" style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#05070e',
      color: '#e2e8f0',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 998,
            backdropFilter: 'blur(4px)'
          }}
        />
      )}

      {/* Dark Luxury Executive Sidebar */}
      <aside style={{
        width: '260px',
        backgroundColor: '#070a12',
        color: '#94a3b8',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: 999,
        transform: sidebarOpen ? 'translateX(0)' : 'none',
        transition: 'transform 0.25s ease',
        borderRight: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '4px 0 30px rgba(0, 0, 0, 0.5)'
      }}
      className={sidebarOpen ? 'sidebar-mobile-open' : 'sidebar-desktop'}
      >
        {/* Brand Header */}
        <div style={{
          padding: '1.4rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: '#0d121f',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.04em'
            }}>
              JT
            </span>
            <div>
              <div style={{
                color: '#ffffff',
                fontSize: '0.92rem',
                fontWeight: 800,
                letterSpacing: '0.06em',
                fontFamily: "'Instrument Sans', sans-serif"
              }}>
                JAGAT TURKIYA
              </div>
              <div style={{
                fontSize: '0.62rem',
                color: '#94a3b8',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 600
              }}>
                Executive Portal
              </div>
            </div>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer'
            }}
            className="mobile-close-btn"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Nav List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.25rem 0.85rem'
        }}>
          {navGroups.map((group, gIdx) => (
            <div key={gIdx} style={{ marginBottom: '1.4rem' }}>
              <div style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                color: '#64748b',
                letterSpacing: '0.1em',
                padding: '0.3rem 0.85rem',
                marginBottom: '0.35rem'
              }}>
                {group.group}
              </div>

              {group.items.map((item, iIdx) => {
                const Icon = item.icon;
                const isActive = item.exact 
                  ? location.pathname === item.path
                  : location.pathname.startsWith(item.path);

                return (
                  <NavLink
                    key={iIdx}
                    to={item.path}
                    end={item.exact}
                    onClick={() => setSidebarOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.62rem 0.85rem',
                      borderRadius: '8px',
                      color: isActive ? '#ffffff' : '#94a3b8',
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                      borderLeft: isActive ? '3px solid #ffffff' : '3px solid transparent',
                      textDecoration: 'none',
                      fontSize: '0.84rem',
                      fontWeight: isActive ? 600 : 500,
                      transition: 'all 0.15s ease',
                      marginBottom: '0.15rem'
                    }}
                  >
                    <Icon size={16} style={{ color: isActive ? '#ffffff' : '#64748b' }} />
                    <span style={{ flex: 1 }}>{item.label}</span>
                    {item.badge && (
                      <span style={{
                        backgroundColor: '#10b981',
                        color: '#ffffff',
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        padding: '0.1rem 0.45rem',
                        borderRadius: '4px'
                      }}>
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          ))}

          <div style={{ padding: '0.5rem 0.85rem' }}>
            <a
              href="#/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.6rem 0.85rem',
                borderRadius: '8px',
                color: '#64748b',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                fontSize: '0.78rem',
                textDecoration: 'none',
                transition: 'color 0.15s'
              }}
            >
              <ExternalLink size={14} />
              <span>View Public Website</span>
            </a>
          </div>
        </div>

        {/* Profile Lockup at bottom */}
        <div style={{
          padding: '1rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          backgroundColor: '#05070e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              backgroundColor: '#1e293b',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.9rem'
            }}>
              J
            </div>
            <div>
              <div style={{ color: '#ffffff', fontSize: '0.82rem', fontWeight: 600 }}>
                Jagat Turkiya
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.64rem', fontWeight: 600, letterSpacing: '0.04em' }}>
                Principal Coach
              </div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            title="Log Out"
            style={{
              background: 'none',
              border: 'none',
              color: '#64748b',
              cursor: 'pointer',
              padding: '0.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* Main Workspace */}
      <div style={{
        flex: 1,
        marginLeft: '260px',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        backgroundColor: '#05070e'
      }}
      className="admin-main-wrap"
      >
        {/* Top Navbar */}
        <header style={{
          height: '60px',
          backgroundColor: '#070a12',
          borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <button
              onClick={() => setSidebarOpen(true)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '0.3rem'
              }}
              className="admin-mobile-toggle"
            >
              <Menu size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#64748b' }}>
              <span>Admin</span>
              <span>/</span>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>{getPageTitle()}</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '0.35rem 0.75rem',
              borderRadius: '6px',
              fontSize: '0.8rem',
              color: '#e2e8f0'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              <span>Supabase Connected</span>
            </div>
          </div>
        </header>

        {/* Inner Content */}
        <main style={{
          padding: '2rem',
          flex: 1,
          overflowY: 'auto'
        }}>
          <Outlet />
        </main>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sidebar-desktop {
            transform: translateX(-100%) !important;
          }
          .sidebar-mobile-open {
            transform: translateX(0) !important;
          }
          .admin-main-wrap {
            margin-left: 0 !important;
          }
          .admin-mobile-toggle {
            display: block !important;
          }
          .mobile-close-btn {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
