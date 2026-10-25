import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(prev => !prev);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-container">
          <Link to="/" className="header-logo-link" aria-label="Jagat Turkiya Home">
            <img
              src="./assets/images/logo-executive.svg"
              alt="Jagat Turkiya"
              className="header-logo-img"
              width="180"
              height="32"
            />
          </Link>

          <nav className="main-nav" aria-label="Primary Navigation">
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/mastermind" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Mastermind
            </NavLink>
            <NavLink to="/success-stories" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Success Stories
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </nav>

          <div className="header-cta-wrap">
            <Link to="/contact" className="btn btn-white">
              Book Clarity Call
            </Link>
            <button
              type="button"
              className="hamburger-btn"
              onClick={toggleDrawer}
              aria-label="Open Navigation Menu"
              aria-expanded={drawerOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <img
            src="./assets/images/logo-executive.svg"
            alt="Jagat Turkiya"
            className="header-logo-img"
            width="160"
            height="30"
          />
          <button
            type="button"
            className="drawer-close-btn"
            onClick={closeDrawer}
            aria-label="Close Menu"
          >
            &times;
          </button>
        </div>
        <ul className="mobile-links">
          <li>
            <NavLink to="/" end onClick={closeDrawer} className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/mastermind" onClick={closeDrawer} className={({ isActive }) => (isActive ? 'active' : '')}>
              Mastermind
            </NavLink>
          </li>
          <li>
            <NavLink to="/success-stories" onClick={closeDrawer} className={({ isActive }) => (isActive ? 'active' : '')}>
              Success Stories
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeDrawer} className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeDrawer} className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
          <Link to="/contact" onClick={closeDrawer} className="btn btn-white" style={{ width: '100%' }}>
            Book Consultation
          </Link>
        </div>
      </div>

      {drawerOpen && (
        <div
          onClick={closeDrawer}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 998
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
}
