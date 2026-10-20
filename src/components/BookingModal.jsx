import React, { useState } from 'react';

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [name, setName] = useState(() => {
    try {
      const saved = localStorage.getItem('jt_vsl_lead');
      return saved ? JSON.parse(saved).name || '' : '';
    } catch {
      return '';
    }
  });
  const [email, setEmail] = useState(() => {
    try {
      const saved = localStorage.getItem('jt_vsl_lead');
      return saved ? JSON.parse(saved).email || '' : '';
    } catch {
      return '';
    }
  });
  const [phone, setPhone] = useState(() => {
    try {
      const saved = localStorage.getItem('jt_vsl_lead');
      return saved ? JSON.parse(saved).phone || '' : '';
    } catch {
      return '';
    }
  });

  if (!isOpen) return null;

  const timeSlots = [
    '11:00 AM - 11:45 AM IST',
    '02:30 PM - 03:15 PM IST',
    '05:00 PM - 05:45 PM IST',
    '07:30 PM - 08:15 PM IST'
  ];

  const availableDates = [
    { label: 'Tomorrow', date: 'Oct 22, 2026' },
    { label: 'Thursday', date: 'Oct 23, 2026' },
    { label: 'Friday', date: 'Oct 24, 2026' },
    { label: 'Saturday', date: 'Oct 25, 2026' },
    { label: 'Monday', date: 'Oct 27, 2026' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(5, 5, 5, 0.92)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      padding: '1rem',
      animation: 'fadeIn 0.2s ease-out',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{
        background: '#0a0a0c',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '12px',
        padding: '2rem',
        maxWidth: '540px',
        width: '100%',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95)',
        position: 'relative'
      }}>
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'transparent',
            border: 'none',
            color: '#ffffff',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.4rem',
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s'
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.75'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
        >
          &times;
        </button>

        {step === 1 ? (
          <div>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <p style={{
                color: '#a1a1aa',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                marginBottom: '8px'
              }}>
                100% Refundable ₹499 Commitment Deposit
              </p>
              <h3 style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '6px'
              }}>
                Book Your 1-on-1 Wealth Session
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '0.85rem' }}>
                Pick your preferred time slot. Your ₹499 is transferred right back to you the second you show up.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Date selection */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#d4d4d8', marginBottom: '6px', fontWeight: 600 }}>
                  Select Date:
                </label>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(95px, 1fr))',
                  gap: '8px'
                }}>
                  {availableDates.map(item => (
                    <button
                      key={item.date}
                      type="button"
                      onClick={() => setSelectedDate(item.date)}
                      style={{
                        padding: '8px 6px',
                        background: selectedDate === item.date ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
                        border: selectedDate === item.date ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '6px',
                        color: selectedDate === item.date ? '#000000' : '#d4d4d8',
                        cursor: 'pointer',
                        textAlign: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        transition: 'all 0.15s'
                      }}
                    >
                      <strong style={{ display: 'block', fontSize: '0.72rem' }}>{item.label}</strong>
                      <span style={{ fontSize: '0.68rem', opacity: 0.8 }}>{item.date}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Slot selection */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#d4d4d8', marginBottom: '6px', fontWeight: 600 }}>
                  Select Time Slot:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {timeSlots.map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      style={{
                        padding: '10px 8px',
                        background: selectedSlot === slot ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
                        border: selectedSlot === slot ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '6px',
                        color: selectedSlot === slot ? '#000000' : '#d4d4d8',
                        cursor: 'pointer',
                        fontSize: '0.76rem',
                        fontWeight: 600,
                        transition: 'all 0.15s'
                      }}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#9ca3af', marginBottom: '4px' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Full Name"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '6px',
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#9ca3af', marginBottom: '4px' }}>
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+91 9876543210"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '6px',
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#9ca3af', marginBottom: '4px' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  marginTop: '10px',
                  padding: '14px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #ffffff',
                  borderRadius: '6px',
                  color: '#080808',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(255, 255, 255, 0.12)',
                  transition: 'all 0.15s ease'
                }}
              >
                Confirm &amp; Proceed (₹499 Deposit)
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Step */
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid #ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
              color: '#ffffff'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            <h3 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.45rem',
              color: '#ffffff',
              marginBottom: '8px'
            }}>
              Slot Reserved, {name || 'Partner'}!
            </h3>

            <p style={{ color: '#d4d4d8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Your private video consultation has been slated for <strong style={{ color: '#ffffff' }}>{selectedDate || 'Upcoming Date'}</strong> at <strong style={{ color: '#ffffff' }}>{selectedSlot || 'Your Slot'}</strong>.
              <br /><br />
              <span style={{ color: '#9ca3af', fontSize: '0.8rem' }}>
                A confirmation note and calendar invite have been dispatched to <strong>{email}</strong>. As promised, your deposit is 100% refundable upon attending the call.
              </span>
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  window.location.hash = '#/thank-you';
                }}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #ffffff',
                  borderRadius: '6px',
                  color: '#08080a',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer'
                }}
              >
                View Next Steps &rarr;
              </button>
              <button
                type="button"
                onClick={onClose}
                style={{
                  padding: '12px 20px',
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '6px',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer'
                }}
              >
                Back to Video
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
