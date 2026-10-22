import React, { useState } from 'react';
import { Settings, Database, Phone, Save, CheckCircle2, RefreshCw } from 'lucide-react';
import { supabaseUrl, supabaseAnonKey, isSupabaseConfigured, saveSupabaseConfig } from '../../lib/supabase';

export default function WebSettings() {
  const [url, setUrl] = useState(supabaseUrl);
  const [anonKey, setAnonKey] = useState(supabaseAnonKey);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [waNumber, setWaNumber] = useState(localStorage.getItem('jt_wa_number') || '919799879381');

  const handleSaveSupabase = (e) => {
    e.preventDefault();
    if (!url.trim().startsWith('http')) {
      alert('Please enter a valid Supabase Project URL (e.g. https://your-id.supabase.co)');
      return;
    }
    const ok = saveSupabaseConfig(url.trim(), anonKey.trim());
    if (ok) {
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    }
  };

  const handleSaveWa = (e) => {
    e.preventDefault();
    localStorage.setItem('jt_wa_number', waNumber);
    alert('WhatsApp number updated.');
  };

  const handleClearCache = () => {
    if (window.confirm('Reset local cache to default sample data?')) {
      localStorage.removeItem('jt_admin_leads');
      localStorage.removeItem('jt_admin_orders');
      localStorage.removeItem('jt_admin_programs');
      localStorage.removeItem('jt_admin_stories');
      localStorage.removeItem('jt_admin_comments');
      window.location.reload();
    }
  };

  return (
    <div className="dark-web-settings" style={{ maxWidth: '850px', margin: '0 auto' }}>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{
          fontSize: '1.75rem',
          fontWeight: 800,
          margin: '0 0 0.35rem',
          color: '#ffffff',
          fontFamily: "'Instrument Sans', sans-serif"
        }}>
          Database & System Configuration
        </h1>
        <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.85rem' }}>
          Live connection to Supabase PostgreSQL, WhatsApp hotline, and data synchronization.
        </p>
      </div>

      {/* Supabase Connection Card */}
      <div style={{
        backgroundColor: '#0b0f19',
        borderRadius: '14px',
        padding: '1.75rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        marginBottom: '1.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              color: '#34d399',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Database size={18} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                Supabase PostgreSQL Connection
              </h2>
              <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '0.15rem' }}>
                Project: xzyezjhorrjlbkglmcqw.supabase.co
              </div>
            </div>
          </div>

          <span style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            padding: '0.2rem 0.6rem',
            borderRadius: '999px',
            backgroundColor: isSupabaseConfigured ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
            color: isSupabaseConfigured ? '#34d399' : '#fbbf24',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: isSupabaseConfigured ? '#10b981' : '#f59e0b'
            }} />
            <span>{isSupabaseConfigured ? 'Live Connected' : 'Offline Cache'}</span>
          </span>
        </div>

        <form onSubmit={handleSaveSupabase} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
              Project URL
            </label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.84rem',
                fontFamily: 'monospace'
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
              Anon / Public API Key
            </label>
            <textarea
              rows={3}
              value={anonKey}
              onChange={(e) => setAnonKey(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontFamily: 'monospace',
                resize: 'vertical'
              }}
            />
          </div>

          {savedSuccess && (
            <div style={{
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#34d399',
              padding: '0.6rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.82rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <CheckCircle2 size={16} />
              <span>Credentials updated and re-verified.</span>
            </div>
          )}

          <div>
            <button
              type="submit"
              style={{
                backgroundColor: '#ffffff',
                color: '#050505',
                border: 'none',
                padding: '0.65rem 1.35rem',
                borderRadius: '8px',
                fontSize: '0.84rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer'
              }}
            >
              <Save size={15} />
              <span>Save & Connect</span>
            </button>
          </div>
        </form>
      </div>

      {/* WhatsApp Hotline */}
      <div style={{
        backgroundColor: '#0b0f19',
        borderRadius: '14px',
        padding: '1.75rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        marginBottom: '1.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '8px',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            color: '#10b981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Phone size={18} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
              Advisory WhatsApp Line
            </h2>
            <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '0.15rem' }}>
              The number that receives direct client queries.
            </div>
          </div>
        </div>

        <form onSubmit={handleSaveWa} style={{ display: 'flex', gap: '0.75rem', maxWidth: '400px' }}>
          <input
            type="text"
            value={waNumber}
            onChange={(e) => setWaNumber(e.target.value)}
            style={{
              flex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              padding: '0.6rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.85rem'
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#10b981',
              color: '#ffffff',
              border: 'none',
              padding: '0.6rem 1.15rem',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Update
          </button>
        </form>
      </div>

      {/* Reset Diagnostic */}
      <div style={{
        backgroundColor: '#0b0f19',
        borderRadius: '14px',
        padding: '1.75rem',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <h2 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 0.35rem', color: '#ffffff' }}>
          Database Cache Maintenance
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.82rem', margin: '0 0 1rem' }}>
          Clears local browser cache and re-fetches latest clean records from Supabase.
        </p>
        <button
          onClick={handleClearCache}
          style={{
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            color: '#f87171',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            padding: '0.55rem 1.15rem',
            borderRadius: '8px',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem'
          }}
        >
          <RefreshCw size={14} />
          <span>Reset Browser Cache</span>
        </button>
      </div>
    </div>
  );
}
