import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, ArrowRight } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('admin@jagatturkiya.com');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!password) {
      setError('Please enter your administrator password.');
      return;
    }

    if (password === 'admin123' || password === 'jagatturkiya2026' || password === 'admin') {
      localStorage.setItem('jt_admin_authenticated', 'true');
      navigate('/admin/stories');
    } else {
      setError('Invalid credentials. (Hint: Use default password admin123)');
    }
  };

  const handleDemoPass = () => {
    localStorage.setItem('jt_admin_authenticated', 'true');
    navigate('/admin/stories');
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#050505',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        backgroundColor: '#0a0a0a',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '2.5rem 2rem',
        color: '#ffffff'
      }}>
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '10px',
            background: '#121212',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            fontWeight: 800,
            marginBottom: '1rem',
            letterSpacing: '0.04em'
          }}>
            JT
          </div>

          <h1 style={{
            fontSize: '1.45rem',
            fontWeight: 800,
            margin: '0 0 0.25rem',
            fontFamily: "'Instrument Sans', sans-serif",
            letterSpacing: '0.04em'
          }}>
            JAGAT TURKIYA
          </h1>
          <div style={{
            fontSize: '0.72rem',
            fontWeight: 600,
            color: '#888888',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            Website Admin &amp; CMS
          </div>
        </div>

        {error && (
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.12)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            color: '#f87171',
            padding: '0.65rem 0.85rem',
            borderRadius: '8px',
            fontSize: '0.8rem',
            marginBottom: '1.25rem',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
          <div>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#e2e8f0', display: 'block', marginBottom: '0.4rem' }}>
              Administrator Email
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color="#666666" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.85rem 0.75rem 2.4rem',
                  borderRadius: '8px',
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#e2e8f0', display: 'block', marginBottom: '0.4rem' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color="#666666" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="password"
                required
                placeholder="Enter password..."
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.85rem 0.75rem 2.4rem',
                  borderRadius: '8px',
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>
            <div style={{ fontSize: '0.72rem', color: '#666666', marginTop: '0.35rem' }}>
              Default password: <code style={{ color: '#ffffff' }}>admin123</code>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-white"
            style={{
              width: '100%',
              padding: '0.85rem',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '0.5rem',
              cursor: 'pointer'
            }}
          >
            <span>Sign In to Admin</span>
            <ArrowRight size={16} />
          </button>

          <button
            type="button"
            onClick={handleDemoPass}
            style={{
              background: 'none',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#cccccc',
              padding: '0.7rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Instant 1-Click Demo Login
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.75rem' }}>
          <Link
            to="/"
            style={{
              fontSize: '0.78rem',
              color: '#888888',
              textDecoration: 'none'
            }}
          >
            ← Return to public website
          </Link>
        </div>
      </div>
    </div>
  );
}
