import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, ArrowRight, Sparkles } from 'lucide-react';

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

    // Default master password or any custom configured
    if (password === 'admin123' || password === 'jagatturkiya2026' || password === 'admin') {
      localStorage.setItem('jt_admin_authenticated', 'true');
      navigate('/admin');
    } else {
      setError('Invalid credentials. (Hint: Use default password admin123)');
    }
  };

  const handleDemoPass = () => {
    localStorage.setItem('jt_admin_authenticated', 'true');
    navigate('/admin');
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#070a14',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        backgroundColor: '#0d111d',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '2.5rem 2.25rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        color: '#ffffff'
      }}>
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            color: '#ffffff',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            fontWeight: 800,
            marginBottom: '1rem',
            boxShadow: '0 8px 16px rgba(245, 158, 11, 0.25)'
          }}>
            ⚡
          </div>

          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            margin: '0 0 0.35rem',
            fontFamily: "'Instrument Sans', sans-serif",
            letterSpacing: '0.04em'
          }}>
            JAGAT TURKIYA
          </h1>
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            color: '#818cf8',
            letterSpacing: '0.12em'
          }}>
            EXECUTIVE ADMIN PORTAL
          </div>
        </div>

        {error && (
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.15)',
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
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', display: 'block', marginBottom: '0.4rem' }}>
              Administrator Email
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color="#64748b" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.7rem 0.85rem 0.7rem 2.4rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', display: 'block', marginBottom: '0.4rem' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color="#64748b" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="password"
                required
                placeholder="Enter password..."
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                style={{
                  width: '100%',
                  padding: '0.7rem 0.85rem 0.7rem 2.4rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>
            <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.35rem' }}>
              Default master password: <code style={{ color: '#818cf8' }}>admin123</code>
            </div>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#4f46e5',
              color: '#ffffff',
              border: 'none',
              padding: '0.75rem',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '0.5rem',
              boxShadow: '0 4px 14px rgba(79, 70, 229, 0.35)',
              transition: 'background-color 0.15s ease'
            }}
          >
            <span>Sign In to Dashboard</span>
            <ArrowRight size={16} />
          </button>

          <button
            type="button"
            onClick={handleDemoPass}
            style={{
              background: 'none',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#cbd5e1',
              padding: '0.65rem',
              borderRadius: '10px',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem'
            }}
          >
            <Sparkles size={14} color="#f59e0b" />
            <span>1-Click Instant Demo Access</span>
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.75rem' }}>
          <a
            href="#/"
            style={{
              fontSize: '0.78rem',
              color: '#64748b',
              textDecoration: 'none'
            }}
          >
            ← Return to public website
          </a>
        </div>
      </div>
    </div>
  );
}
