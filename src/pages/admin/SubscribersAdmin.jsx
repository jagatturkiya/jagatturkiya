import React, { useState } from 'react';
import { Mail, Search, Download, Trash2, Calendar } from 'lucide-react';

export default function SubscribersAdmin() {
  const [subscribers, setSubscribers] = useState([
    { id: 1, email: 'vikram.wealth@corp.in', date: '21 Oct, 2026', source: 'Mastermind Optin' },
    { id: 2, email: 'anita.investor@gmail.com', date: '20 Oct, 2026', source: 'Success Stories' },
    { id: 3, email: 'rahul.corp@outlook.com', date: '19 Oct, 2026', source: 'Home Hero' },
    { id: 4, email: 'dr.sharma.consulting@yahoo.com', date: '18 Oct, 2026', source: 'Books Section' }
  ]);

  return (
    <div className="subscribers-admin-view" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1.75rem'
      }}>
        <div>
          <h1 style={{
            fontSize: '1.65rem',
            fontWeight: 800,
            margin: '0 0 0.35rem',
            color: '#0f172a',
            fontFamily: "'Instrument Sans', sans-serif"
          }}>
            Audience Subscribers
          </h1>
          <p style={{ margin: 0, color: '#64748b', fontSize: '0.88rem' }}>
            Newsletter signups, VSL training subscribers, and email leads.
          </p>
        </div>

        <button
          onClick={() => alert('Exporting CSV...')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#ffffff',
            border: '1px solid #cbd5e1',
            padding: '0.58rem 1rem',
            borderRadius: '8px',
            fontSize: '0.84rem',
            fontWeight: 600,
            color: '#334155',
            cursor: 'pointer'
          }}
        >
          <Download size={15} />
          <span>Export CSV</span>
        </button>
      </div>

      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '14px',
        border: '1px solid #e2e8f0',
        overflow: 'hidden'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.84rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.72rem', fontWeight: 700 }}>
              <th style={{ padding: '0.95rem 1.25rem' }}>SUBSCRIBER EMAIL</th>
              <th style={{ padding: '0.95rem 1.25rem' }}>SIGNUP SOURCE</th>
              <th style={{ padding: '0.95rem 1.25rem' }}>DATE JOINED</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((s) => (
              <tr key={s.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '1rem 1.25rem', fontWeight: 600, color: '#0f172a' }}>
                  {s.email}
                </td>
                <td style={{ padding: '1rem 1.25rem', color: '#64748b' }}>
                  {s.source}
                </td>
                <td style={{ padding: '1rem 1.25rem', color: '#94a3b8', fontSize: '0.75rem' }}>
                  {s.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
