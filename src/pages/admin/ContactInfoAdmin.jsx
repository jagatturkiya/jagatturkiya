import React, { useState, useEffect } from 'react';
import { PhoneCall, Mail, MessageCircle, MapPin, Check, ExternalLink } from 'lucide-react';
import { getContactInfo, saveContactInfo } from '../../lib/cmsStore';

export default function ContactInfoAdmin() {
  const [formData, setFormData] = useState({});
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    const data = getContactInfo();
    setFormData(data);
  }, []);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    saveContactInfo(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Success Notification */}
      {saveSuccess && (
        <div style={{
          backgroundColor: '#0a2318',
          border: '1px solid #10b981',
          color: '#ffffff',
          padding: '0.85rem 1.25rem',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontSize: '0.88rem'
        }}>
          <Check size={18} color="#10b981" />
          <span>Contact &amp; Advisory details updated live across website footer and contact page!</span>
        </div>
      )}

      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{
          fontSize: '1.75rem',
          fontWeight: 800,
          margin: '0 0 0.35rem',
          color: '#ffffff',
          fontFamily: "'Instrument Sans', sans-serif"
        }}>
          Direct Contact &amp; Advisory Info CMS
        </h1>
        <p style={{ margin: 0, color: '#888888', fontSize: '0.88rem' }}>
          Updates phone numbers, WhatsApp links, official email, and consulting locations sitewide.
        </p>
      </div>

      <form onSubmit={handleSave}>
        <div style={{
          backgroundColor: '#0a0a0a',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '1.75rem',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
            {/* Email */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <Mail size={14} color="#888888" />
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Official Email Address</label>
              </div>
              <input
                type="email"
                required
                maxLength={80}
                value={formData.email || ''}
                onChange={e => handleChange('email', e.target.value)}
                placeholder="hello@apkacoach.com"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Phone */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <PhoneCall size={14} color="#888888" />
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Calling Phone Number</label>
              </div>
              <input
                type="tel"
                maxLength={20}
                value={formData.phone || ''}
                onChange={e => handleChange('phone', e.target.value)}
                placeholder="+91 98765 43210"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* WhatsApp */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <MessageCircle size={14} color="#10b981" />
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>WhatsApp Support Number</label>
              </div>
              <input
                type="tel"
                maxLength={20}
                value={formData.whatsapp || ''}
                onChange={e => handleChange('whatsapp', e.target.value)}
                placeholder="+91 98765 43210"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Office Location */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <MapPin size={14} color="#888888" />
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Base Location</label>
              </div>
              <input
                type="text"
                maxLength={80}
                value={formData.location || ''}
                onChange={e => handleChange('location', e.target.value)}
                placeholder="New Delhi, India"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Availability Note */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
              Consultation Availability Note
            </label>
            <input
              type="text"
              maxLength={150}
              value={formData.availability || ''}
              onChange={e => handleChange('availability', e.target.value)}
              placeholder="Available for in-person consultations in New Delhi and virtual sessions worldwide."
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                backgroundColor: '#141414',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Response Hours */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
              Team Response Time Commitment
            </label>
            <input
              type="text"
              maxLength={80}
              value={formData.responseHours || ''}
              onChange={e => handleChange('responseHours', e.target.value)}
              placeholder="Quick response within 24 business hours."
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                backgroundColor: '#141414',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>

          {/* External Links */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                Topmate Consultation Booking Link
              </label>
              <input
                type="text"
                maxLength={120}
                value={formData.topmateUrl || ''}
                onChange={e => handleChange('topmateUrl', e.target.value)}
                placeholder="https://topmate.io/jagatturkiya"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                Your Wealth Compass Link
              </label>
              <input
                type="text"
                maxLength={120}
                value={formData.wealthCompassUrl || ''}
                onChange={e => handleChange('wealthCompassUrl', e.target.value)}
                placeholder="https://yourwealthcompass.in"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '3rem' }}>
          <button
            type="submit"
            className="btn btn-white"
            style={{
              padding: '0.75rem 2rem',
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}
          >
            Save Contact Details Live
          </button>
        </div>
      </form>
    </div>
  );
}
