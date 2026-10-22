import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import {
  BookOpen,
  Star,
  Users,
  LogOut,
  Menu,
  X,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('jt_admin_authenticated');
    navigate('/admin/login');
  };

  const navItems = [
    {
      label: 'Success Stories CMS',
      path: '/admin/stories',
      icon: BookOpen,
      desc: 'Edit website transformation articles'
    },
    {
      label: 'Client Testimonials CMS',
      path: '/admin/testimonials',
      icon: Star,
      desc: 'Edit video & written reviews'
    },
    {
      label: 'Leads & Inquiries CRM',
      path: '/admin/leads',
      icon: Users,
      desc: 'Optin funnel & contact leads'
    }
  ];

  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes('testimonials')) return 'Client Testimonials CMS';
    if (path.includes('leads')) return 'Leads & Inquiries CRM';
    return 'Success Stories CMS';
  };

  return (
    <div className="admin-portal-root" style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#050505',
      color: '#ffffff',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 998,
            backdropFilter: 'blur(6px)'
          }}
        />
      )}

      {/* Dark Luxury Website-Matching Sidebar */}
      <aside style={{
        width: '270px',
        backgroundColor: '#000000',
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
        borderRight: '1px solid rgba(255, 255, 255, 0.08)'
      }}
      className={sidebarOpen ? 'sidebar-mobile-open' : 'sidebar-desktop'}
      >
        {/* Brand Header */}
        <div style={{
          padding: '1.5rem 1.4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: '#0a0a0a',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              fontSize: '0.88rem',
              fontWeight: 800,
              letterSpacing: '0.04em'
            }}>
              JT
            </span>
            <div>
              <div style={{
                color: '#ffffff',
                fontSize: '0.95rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                fontFamily: "'Instrument Sans', sans-serif"
              }}>
                JAGAT TURKIYA
              </div>
              <div style={{
                fontSize: '0.66rem',
                color: '#888888',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginTop: '1px'
              }}>
                Admin &amp; CMS
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

        {/* Live Website Status Pill */}
        <div style={{ padding: '1rem 1.25rem 0.5rem' }}>
          <div style={{
            padding: '0.65rem 0.85rem',
            borderRadius: '8px',
            backgroundColor: '#0a0a0a',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem'
          }}>
            <span style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 8px #10b981'
            }} />
            <span style={{ fontSize: '0.74rem', color: '#e2e8f0', fontWeight: 600 }}>
              Live Frontend Sync Active
            </span>
          </div>
        </div>

        {/* Focused 3-Item Navigation */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem 0.85rem'
        }}>
          <div style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            color: '#666666',
            letterSpacing: '0.12em',
            padding: '0.3rem 0.85rem',
            marginBottom: '0.5rem',
            textTransform: 'uppercase'
          }}>
            Website Management
          </div>

          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive = location.pathname.startsWith(item.path) || 
              (item.path === '/admin/stories' && location.pathname === '/admin');

            return (
              <NavLink
                key={idx}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.85rem 1rem',
                  borderRadius: '10px',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                  border: isActive ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid transparent',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 700 : 500,
                  transition: 'all 0.15s ease',
                  marginBottom: '0.5rem'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: isActive ? '#ffffff' : '#0a0a0a',
                  color: isActive ? '#000000' : '#888888',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <Icon size={16} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ lineHeight: 1.2 }}>{item.label}</div>
                  <div style={{
                    fontSize: '0.68rem',
                    color: isActive ? '#d4d4d8' : '#666666',
                    marginTop: '2px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {item.desc}
                  </div>
                </div>
              </NavLink>
            );
          })}

          {/* Quick link to public website */}
          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <Link
              to="/"
              target="_blank"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.7rem 0.85rem',
                borderRadius: '8px',
                color: '#94a3b8',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                fontSize: '0.8rem',
                textDecoration: 'none',
                transition: 'color 0.15s'
              }}
            >
              <ExternalLink size={15} />
              <span>Preview Live Website</span>
            </Link>
          </div>
        </div>

        {/* User footer & logout */}
        <div style={{
          padding: '1rem 1.25rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          backgroundColor: '#050505',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: 700 }}>
              Jagat Turkiya
            </div>
            <div style={{ color: '#888888', fontSize: '0.68rem', marginTop: '1px' }}>
              Administrator
            </div>
          </div>

          <button
            onClick={handleLogout}
            title="Log Out"
            style={{
              background: 'none',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#ef4444',
              borderRadius: '8px',
              padding: '0.45rem 0.65rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              cursor: 'pointer',
              fontSize: '0.74rem',
              fontWeight: 600
            }}
          >
            <LogOut size={14} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Workspace with matching #050505 theme */}
      <div style={{
        flex: 1,
        marginLeft: '270px',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        backgroundColor: '#050505'
      }}
      className="admin-main-wrap"
      >
        {/* Top Navbar */}
        <header style={{
          height: '64px',
          backgroundColor: 'rgba(5, 5, 5, 0.85)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
              <Menu size={22} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#666666' }}>
              <span>Admin</span>
              <span>/</span>
              <span style={{ color: '#ffffff', fontWeight: 700 }}>{getPageTitle()}</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <Link
              to="/"
              target="_blank"
              className="btn btn-outline"
              style={{
                fontSize: '0.78rem',
                padding: '0.45rem 0.95rem',
                borderRadius: '9999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#ffffff',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}
            >
              <ExternalLink size={13} />
              <span>View Website</span>
            </Link>
          </div>
        </header>

        {/* Content Area */}
        <main style={{
          padding: '2.25rem 2rem 4rem',
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
