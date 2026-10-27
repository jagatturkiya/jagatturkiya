import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FunnelHeader from '../components/FunnelHeader';
import FunnelFooter from '../components/FunnelFooter';
import { recordLead } from '../lib/cmsStore';

export default function LeadForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName.trim()) {
      setErrorMsg('Please enter your first name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (formData.phone.trim().length < 8) {
      setErrorMsg('Please enter a valid phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      localStorage.setItem('jt_vsl_lead', JSON.stringify({
        name: formData.firstName.trim().slice(0, 50),
        email: formData.email.trim().slice(0, 80),
        phone: formData.phone.trim().slice(0, 15),
        timestamp: new Date().toISOString()
      }));

      await recordLead({
        name: formData.firstName.trim().slice(0, 50),
        email: formData.email.trim().slice(0, 80),
        phone: formData.phone.trim().slice(0, 15),
        source: 'VSL Optin Funnel',
        program: 'Mastermind (10-Week + 6M)',
        preferred_time: 'Optin Registration'
      });
    } catch {
      // storage error fallback
    }

    // Direct user to VSL training page
    setTimeout(() => {
      navigate('/exclusive?autoplay=1');
    }, 200);
  };

  return (
    <div className="lead-form-page" style={{
      minHeight: '100vh',
      backgroundColor: '#050505',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      {/* Official Executive Header (Bold Non-Clickable) */}
      <FunnelHeader />

      {/* Main Expansive Content Area (No box, no glow, pure direct delivery) */}
      <main style={{
        flex: 1,
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '4rem 1.5rem 5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Coach-Centric Professional Headline */}
        <h1 style={{
          fontFamily: "'Instrument Sans', -apple-system, sans-serif",
          fontSize: 'clamp(2rem, 4.5vw, 3rem)',
          fontWeight: 700,
          lineHeight: 1.2,
          color: '#ffffff',
          textAlign: 'center',
          maxWidth: '860px',
          marginBottom: '1.75rem',
          letterSpacing: '-0.025em'
        }}>
          Work Directly With Coach Jagat Turkiya To Break Internal Bottlenecks, Master Decisive Clarity &amp; Build Unshakeable Direction.
        </h1>

        {/* Money-Back Guarantee in Vibrant Green (Directly above the form) */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '1.05rem',
          fontWeight: 700,
          color: '#10b981',
          textAlign: 'center',
          marginBottom: '2rem',
          letterSpacing: '0.01em'
        }}>
          Money-Back Guarantee: 100% Risk-Free
        </p>

        {/* Direct Form: NO enclosing card/box, NO glow effects */}
        <form 
          onSubmit={handleSubmit}
          style={{
            width: '100%',
            maxWidth: '480px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}
        >
          {errorMsg && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid #ef4444',
              color: '#ffffff',
              padding: '10px 14px',
              borderRadius: '6px',
              fontSize: '0.85rem',
              textAlign: 'center'
            }}>
              {errorMsg}
            </div>
          )}

          {/* First Name Input */}
          <input
            type="text"
            name="firstName"
            required
            maxLength={50}
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '16px 18px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              borderRadius: '6px',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 500,
              outline: 'none',
              fontFamily: "'Inter', sans-serif",
              transition: 'border-color 0.2s, background-color 0.2s'
            }}
            onFocus={e => {
              e.target.style.borderColor = '#ffffff';
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            }}
            onBlur={e => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.18)';
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            }}
          />

          {/* Email Address Input */}
          <input
            type="email"
            name="email"
            required
            maxLength={80}
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '16px 18px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              borderRadius: '6px',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 500,
              outline: 'none',
              fontFamily: "'Inter', sans-serif",
              transition: 'border-color 0.2s, background-color 0.2s'
            }}
            onFocus={e => {
              e.target.style.borderColor = '#ffffff';
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            }}
            onBlur={e => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.18)';
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            }}
          />

          {/* Phone Input */}
          <input
            type="tel"
            name="phone"
            required
            maxLength={15}
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '16px 18px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              borderRadius: '6px',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 500,
              outline: 'none',
              fontFamily: "'Inter', sans-serif",
              transition: 'border-color 0.2s, background-color 0.2s'
            }}
            onFocus={e => {
              e.target.style.borderColor = '#ffffff';
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            }}
            onBlur={e => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.18)';
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            }}
          />

          {/* Crisp White CTA Button with 'Inter' Font */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              marginTop: '6px',
              width: '100%',
              padding: '16px 20px',
              backgroundColor: '#ffffff',
              border: '1px solid #ffffff',
              borderRadius: '6px',
              color: '#050505',
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 700,
              letterSpacing: '0.02em',
              cursor: isSubmitting ? 'wait' : 'pointer',
              transition: 'all 0.15s ease',
              textAlign: 'center'
            }}
            onMouseEnter={e => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = '#e4e4e7';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }
            }}
            onMouseLeave={e => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            {isSubmitting ? 'Processing...' : 'Register For The Training Now'}
          </button>
        </form>
      </main>

      {/* Structured Executive Footer */}
      <FunnelFooter />
    </div>
  );
}
