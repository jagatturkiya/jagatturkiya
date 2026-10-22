import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import {
  BookOpen,
  Star,
  Users,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      label: 'Success Stories',
      path: '/admin/stories',
      icon: BookOpen
    },
    {
      label: 'Client Testimonials',
      path: '/admin/testimonials',
      icon: Star
    },
    {
      label: 'Leads & Inquiries',
      path: '/admin/leads',
      icon: Users
    }
  ];

  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes('testimonials')) return 'Client Testimonials';
    if (path.includes('leads')) return 'Leads & Inquiries CRM';
    return 'Success Stories';
  };

  return (
    <div style={{
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

      {/* Clean Minimalist Dark Luxury Sidebar */}
      <aside style={{
        width: '260px',
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
          padding: '1.75rem 1.75rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          <div>
            <div style={{
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              fontFamily: "'Instrument Sans', sans-serif"
            }}>
              JAGAT TURKIYA
            </div>
            <div style={{
              fontSize: '0.68rem',
              color: '#666666',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginTop: '3px'
            }}>
              Content Management
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

        {/* Minimal Navigation: Pure clean typography links, NO capsule boxes */}
        <nav style={{
          flex: 1,
          padding: '1.75rem 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem'
        }}>
          <div style={{
            fontSize: '0.66rem',
            fontWeight: 700,
            color: '#555555',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '0 0.75rem',
            marginBottom: '0.75rem'
          }}>
            Website Editors
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
                  padding: '0.75rem 0.85rem',
                  color: isActive ? '#ffffff' : '#888888',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 700 : 500,
                  transition: 'color 0.15s ease',
                  borderLeft: isActive ? '2px solid #ffffff' : '2px solid transparent',
                  paddingLeft: isActive ? '0.75rem' : '0.85rem'
                }}
              >
                <Icon size={17} color={isActive ? '#ffffff' : '#666666'} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}

          {/* Direct link to public website */}
          <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <Link
              to="/"
              target="_blank"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.65rem 0.85rem',
                color: '#777777',
                fontSize: '0.82rem',
                textDecoration: 'none',
                transition: 'color 0.15s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = '#777777'}
            >
              <ExternalLink size={15} />
              <span>View Website</span>
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Workspace */}
      <div style={{
        flex: 1,
        marginLeft: '260px',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        backgroundColor: '#050505'
      }}
      className="admin-main-wrap"
      >
        {/* Top Navbar */}
        <header style={{
          height: '60px',
          backgroundColor: '#050505',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2.5rem',
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

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#555555' }}>
              <span>Admin</span>
              <span>/</span>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>{getPageTitle()}</span>
            </div>
          </div>

          <div>
            <Link
              to="/"
              target="_blank"
              style={{
                fontSize: '0.82rem',
                color: '#888888',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = '#888888'}
            >
              <span>Live Site</span>
              <ExternalLink size={13} />
            </Link>
          </div>
        </header>

        {/* Content Area */}
        <main style={{
          padding: '2.5rem 2.5rem 4rem',
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
