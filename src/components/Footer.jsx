import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getContactInfo } from '../lib/cmsStore';

export default function Footer() {
  const [contact, setContact] = useState(() => getContactInfo());

  useEffect(() => {
    const handleUpdate = () => {
      setContact(getContactInfo());
    };
    window.addEventListener('jt_cms_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('jt_cms_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="header-logo-link" aria-label="Jagat Turkiya Home">
              <img
                src="./assets/images/logo-executive.svg"
                alt="Jagat Turkiya"
                className="header-logo-img"
                width="160"
                height="28"
              />
            </Link>
            <p>
              Global Transformation Coach, Financial Consultant, Author of 5 published books, and Founder of Aapka Coach.
            </p>
          </div>

          <div className="footer-nav-col">
            <h5>Platform</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/mastermind">Mastermind</Link></li>
              <li><Link to="/success-stories">Success Stories</Link></li>
              <li><Link to="/about">About Jagat Turkiya</Link></li>
              <li><Link to="/contact">Contact &amp; Advisory</Link></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h5>Legal &amp; Policies</h5>
            <ul className="footer-links">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms &amp; Conditions</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h5>Advisory Desk</h5>
            <ul className="footer-links">
              <li><a href={`mailto:${contact.email || 'hello@apkacoach.com'}`}>{contact.email || 'hello@apkacoach.com'}</a></li>
              <li><Link to="/contact">Book Clarity Call</Link></li>
              {contact.wealthCompassUrl && (
                <li>
                  <a href={contact.wealthCompassUrl} target="_blank" rel="noopener noreferrer">
                    Your Wealth Compass (Tool) ↗
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Jagat Turkiya. All rights reserved.</p>
          <div className="footer-powered-inline">
            <span className="powered-by-label">powered by</span>
            <a
              href="https://www.apkacoach.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Aapka Coach"
            >
              <img
                src="./assets/images/apkacoach-logo-dark.png"
                alt="Aapka Coach"
                className="apkacoach-logo-img"
                width="95"
                height="18"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
