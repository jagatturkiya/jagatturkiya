import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found-page" style={{ padding: '8rem 0 6rem 0', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '640px', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1rem', color: '#ffffff' }}>404</h1>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: 'var(--text-silver)' }}>
          Page Not Found
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          The requested advisory destination does not exist or has been relocated to our core executive platform.
        </p>
        <Link to="/" className="btn btn-white">
          Return to Executive Home →
        </Link>
      </div>
    </div>
  );
}
