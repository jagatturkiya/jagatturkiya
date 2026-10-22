import React, { useState } from 'react';
import { Settings, Database, Key, Phone, Save, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
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
    alert('WhatsApp number saved!');
  };

  const handleClearCache = () => {
    if (window.confirm('Reset local cache to default sample data?')) {
      localStorage.removeItem('jt_admin_leads');
      localStorage.removeItem('jt_admin_orders');
      localStorage.removeItem('jt_admin_programs');
      localStorage.removeItem('jt_admin_comments');
      window.location.reload();
    }
  };

  return (
    <div className="web-settings-view" style={{ maxWidth: '850px', margin: '0 auto' }}>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{
          fontSize: '1.65rem',
          fontWeight: 800,
          margin: '0 0 0.35rem',
          color: '#0f172a',
          fontFamily: "'Instrument Sans', sans-serif"
        }}>
          Web & Backend Settings
        </h1>
        <p style={{ margin: 0, color: '#64748b', fontSize: '0.88rem' }}>
          Configure live Supabase database credentials, WhatsApp integration, and system options.
        </p>
      </div>

      {/* Supabase Integration Card */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '1.75rem',
        border: '1px solid #e2e8f0',
        marginBottom: '1.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              backgroundColor: '#ecfdf5',
              color: '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Database size={20} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: '#0f172a' }}>
                Supabase Database Connection
              </h2>
              <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.15rem' }}>
                PostgreSQL cloud database for instant leads sync and Razorpay logs.
              </div>
            </div>
          </div>

          <span style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            padding: '0.25rem 0.65rem',
            borderRadius: '999px',
            backgroundColor: isSupabaseConfigured ? '#dcfce7' : '#fef3c7',
            color: isSupabaseConfigured ? '#15803d' : '#b45309',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: isSupabaseConfigured ? '#16a34a' : '#d97706'
            }} />
            <span>{isSupabaseConfigured ? 'Connected Live' : 'Using Local Cache'}</span>
          </span>
        </div>

        <form onSubmit={handleSaveSupabase} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
              Project URL
            </label>
            <input
              type="text"
              placeholder="https://xyzabcdefghijklm.supabase.co"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                fontSize: '0.85rem',
                fontFamily: 'monospace'
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
              Anon / Public Key
            </label>
            <textarea
              rows={3}
              placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
              value={anonKey}
              onChange={(e) => setAnonKey(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                fontSize: '0.82rem',
                fontFamily: 'monospace',
                resize: 'vertical'
              }}
            />
          </div>

          {savedSuccess && (
            <div style={{
              backgroundColor: '#ecfdf5',
              border: '1px solid #a7f3d0',
              color: '#065f46',
              padding: '0.65rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.82rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <CheckCircle2 size={16} />
              <span>Credentials saved successfully! Reloading connection...</span>
            </div>
          )}

          <div>
            <button
              type="submit"
              style={{
                backgroundColor: '#0f172a',
                color: '#ffffff',
                border: 'none',
                padding: '0.65rem 1.4rem',
                borderRadius: '8px',
                fontSize: '0.84rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer'
              }}
            >
              <Save size={16} />
              <span>Save & Connect Supabase</span>
            </button>
          </div>
        </form>
      </div>

      {/* WhatsApp Quick Follow-up Configuration */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '1.75rem',
        border: '1px solid #e2e8f0',
        marginBottom: '1.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            backgroundColor: '#ecfdf5',
            color: '#10b981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Phone size={20} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: '#0f172a' }}>
              Admin WhatsApp Contact
            </h2>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.15rem' }}>
              Default number for public advisory and instant chat.
            </div>
          </div>
        </div>

        <form onSubmit={handleSaveWa} style={{ display: 'flex', gap: '0.75rem', maxWidth: '420px' }}>
          <input
            type="text"
            value={waNumber}
            onChange={(e) => setWaNumber(e.target.value)}
            style={{
              flex: 1,
              padding: '0.65rem 0.85rem',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              fontSize: '0.85rem'
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#10b981',
              color: '#ffffff',
              border: 'none',
              padding: '0.65rem 1.25rem',
              borderRadius: '8px',
              fontSize: '0.84rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Update
          </button>
        </form>
      </div>

      {/* System Cache Maintenance */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '1.75rem',
        border: '1px solid #e2e8f0',
        boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
      }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.35rem', color: '#0f172a' }}>
          System Diagnostics & Reset
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.84rem', margin: '0 0 1rem' }}>
          Reset sample leads, orders, programs, and comments back to initial defaults.
        </p>
        <button
          onClick={handleClearCache}
          style={{
            backgroundColor: '#fee2e2',
            color: '#b91c1c',
            border: '1px solid #fecaca',
            padding: '0.6rem 1.15rem',
            borderRadius: '8px',
            fontSize: '0.82rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem'
          }}
        >
          <RefreshCw size={14} />
          <span>Reset Local Cache</span>
        </button>
      </div>
    </div>
  );
}
