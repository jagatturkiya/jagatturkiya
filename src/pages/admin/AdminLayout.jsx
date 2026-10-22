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
  ChevronDown,
  ShieldCheck,
  Bell
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
      group: 'OVERVIEW',
      items: [
        { label: 'Dashboard', path: '/admin', icon: LayoutDashboard, exact: true }
      ]
    },
    {
      group: 'SALES & CRM',
      items: [
        { label: 'Bookings & Orders', path: '/admin/bookings', icon: ShoppingBag },
        { label: 'Leads CRM', path: '/admin/leads', icon: Users, badge: 'Live' }
      ]
    },
    {
      group: 'CATALOG',
      items: [
        { label: 'Programs & Courses', path: '/admin/programs', icon: Layers }
      ]
    },
    {
      group: 'CONTENT',
      items: [
        { label: 'Success Stories', path: '/admin/stories', icon: BookOpen },
        { label: 'Testimonials', path: '/admin/testimonials', icon: Star },
        { label: 'Blogs & Articles', path: '/admin/blogs', icon: FileText },
        { label: 'Comments Inbox', path: '/admin/comments', icon: MessageSquare },
        { label: 'Subscribers', path: '/admin/subscribers', icon: Mail }
      ]
    },
    {
      group: 'SYSTEM',
      items: [
        { label: 'Web Settings', path: '/admin/settings', icon: Settings }
      ]
    }
  ];

  // Helper for active breadcrumbs title
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/admin') return 'Admin Dashboard';
    if (path.includes('leads')) return 'Leads CRM';
    if (path.includes('bookings')) return 'Sales & Bookings Log';
    if (path.includes('programs')) return 'Manage Programs & Courses';
    if (path.includes('comments')) return 'Comments Inbox';
    if (path.includes('stories')) return 'Success Stories Management';
    if (path.includes('testimonials')) return 'Manage Testimonials';
    if (path.includes('blogs')) return 'Blogs & Articles Management';
    if (path.includes('subscribers')) return 'Audience Subscribers';
    if (path.includes('settings')) return 'System Settings';
    return 'Admin Dashboard';
  };

  return (
    <div className="admin-portal-root" style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      color: '#1f2937',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            zIndex: 998,
            backdropFilter: 'blur(3px)'
          }}
        />
      )}

      {/* Dark Sidebar matching Jagat Turkiya Screenshots */}
      <aside style={{
        width: '260px',
        backgroundColor: '#0a0d18',
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
        borderRight: '1px solid rgba(255, 255, 255, 0.06)',
        boxShadow: '4px 0 24px rgba(0, 0, 0, 0.35)'
      }}
      className={sidebarOpen ? 'sidebar-mobile-open' : 'sidebar-desktop'}
      >
        {/* Brand Logo Header */}
        <div style={{
          padding: '1.4rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              color: '#ffffff',
              fontSize: '1.05rem',
              fontWeight: 800
            }}>
              ⚡
            </span>
            <span style={{
              color: '#ffffff',
              fontSize: '1.15rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              fontFamily: "'Instrument Sans', sans-serif"
            }}>
              ADMIN
            </span>
          </div>

          {/* Close for mobile */}
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

        {/* Scrollable Navigation Items */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.25rem 0.85rem'
        }}>
          {navGroups.map((group, gIdx) => (
            <div key={gIdx} style={{ marginBottom: '1.4rem' }}>
              <div style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                color: '#475569',
                letterSpacing: '0.08em',
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
                      color: isActive ? '#ffffff' : '#8b9bb4',
                      backgroundColor: isActive ? 'rgba(79, 70, 229, 0.22)' : 'transparent',
                      borderLeft: isActive ? '3px solid #6366f1' : '3px solid transparent',
                      textDecoration: 'none',
                      fontSize: '0.86rem',
                      fontWeight: isActive ? 600 : 500,
                      transition: 'all 0.15s ease',
                      marginBottom: '0.2rem'
                    }}
                  >
                    <Icon size={17} style={{ color: isActive ? '#818cf8' : '#64748b' }} />
                    <span style={{ flex: 1 }}>{item.label}</span>
                    {item.badge && (
                      <span style={{
                        backgroundColor: '#10b981',
                        color: '#ffffff',
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        padding: '0.12rem 0.45rem',
                        borderRadius: '999px',
                        letterSpacing: '0.04em'
                      }}>
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          ))}

          {/* Quick link to live public site */}
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
                fontSize: '0.8rem',
                textDecoration: 'none',
                transition: 'color 0.15s'
              }}
            >
              <ExternalLink size={14} />
              <span>View Public Website</span>
            </a>
          </div>
        </div>

        {/* Bottom SuperAdmin Pill Profile matching screenshots */}
        <div style={{
          padding: '1rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          backgroundColor: '#070a14',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '9px',
              backgroundColor: '#6366f1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '1rem'
            }}>
              J
            </div>
            <div>
              <div style={{ color: '#ffffff', fontSize: '0.84rem', fontWeight: 600 }}>
                Jagat Turkiya
              </div>
              <div style={{ color: '#6366f1', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.06em' }}>
                SUPERADMIN
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
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.15s'
            }}
          >
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* Main Administrative Workspace */}
      <div style={{
        flex: 1,
        marginLeft: '260px',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0
      }}
      className="admin-main-wrap"
      >
        {/* Top Navbar */}
        <header style={{
          height: '62px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1.75rem',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          {/* Left: Mobile hamburger & Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <button
              onClick={() => setSidebarOpen(true)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                color: '#374151',
                cursor: 'pointer',
                padding: '0.3rem'
              }}
              className="admin-mobile-toggle"
            >
              <Menu size={22} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#6b7280' }}>
              <span>Admin</span>
              <span>/</span>
              <span style={{ color: '#111827', fontWeight: 600 }}>{getPageTitle()}</span>
            </div>
          </div>

          {/* Right User menu badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
              padding: '0.35rem 0.75rem',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 500,
              color: '#374151',
              cursor: 'pointer'
            }}>
              <span>Jagat Turkiya</span>
              <ChevronDown size={14} color="#6b7280" />
            </div>
          </div>
        </header>

        {/* Dynamic Inner Page Content */}
        <main style={{
          padding: '1.75rem',
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
