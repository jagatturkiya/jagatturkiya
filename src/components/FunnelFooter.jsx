import React, { useState } from 'react';

export default function FunnelFooter() {
  const [activePolicy, setActivePolicy] = useState(null); // 'privacy' | 'terms' | 'refund' | null

  return (
    <>
      <footer 
        className="funnel-footer" 
        style={{
          width: '100%',
          padding: '2.5rem 1.5rem',
          backgroundColor: '#050505',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          marginTop: 'auto',
          fontFamily: "'Inter', sans-serif"
        }}
      >
        <div 
          style={{ 
            maxWidth: '580px', 
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            textAlign: 'center'
          }}
        >
          {/* Jagat Turkiya Logo */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="./assets/images/logo-executive.svg"
              alt="Jagat Turkiya"
              width="135"
              height="22"
              style={{
                height: '22px',
                width: 'auto',
                display: 'block'
              }}
            />
          </div>

          {/* Policies in exact "policy | terms | refund" pipe format */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.65rem',
            fontSize: '0.84rem',
            color: '#71717a',
            flexWrap: 'wrap'
          }}>
            <button
              type="button"
              onClick={() => setActivePolicy('privacy')}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: '#d4d4d8',
                fontSize: '0.84rem',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = '#d4d4d8'}
            >
              Privacy Policy
            </button>
            <span style={{ color: '#52525b' }}>|</span>
            <button
              type="button"
              onClick={() => setActivePolicy('terms')}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: '#d4d4d8',
                fontSize: '0.84rem',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = '#d4d4d8'}
            >
              Terms &amp; Conditions
            </button>
            <span style={{ color: '#52525b' }}>|</span>
            <button
              type="button"
              onClick={() => setActivePolicy('refund')}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: '#d4d4d8',
                fontSize: '0.84rem',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = '#d4d4d8'}
            >
              Refund Policy
            </button>
          </div>

          {/* Copyright and Powered By Lockup - Tight & Connected */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            fontSize: '0.78rem',
            color: '#71717a'
          }}>
            <span>&copy; 2026 Jagat Turkiya. All rights reserved.</span>
            <span style={{ color: '#3f3f46' }}>•</span>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span style={{
                fontSize: '0.72rem',
                color: '#71717a',
                textTransform: 'lowercase',
                letterSpacing: '0.04em'
              }}>
                powered by
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  opacity: 0.85,
                  cursor: 'default',
                  userSelect: 'none'
                }}
              >
                <img
                  src="./assets/images/apkacoach-logo-dark.png"
                  alt="Aapka Coach"
                  style={{
                    height: '14px',
                    width: 'auto',
                    display: 'block'
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Dedicated In-Funnel Policy Modal (Crisp white cross, NO close button at bottom, NO last-updated text) */}
      {activePolicy && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            backdropFilter: 'blur(12px)',
            zIndex: 100000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.2s ease'
          }}
          onClick={() => setActivePolicy(null)}
        >
          <div 
            style={{
              backgroundColor: '#0a0a0c',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '12px',
              padding: '2.5rem',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '82vh',
              overflowY: 'auto',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95)',
              position: 'relative',
              color: '#e4e4e7'
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Close Cross - Pure White */}
            <button
              type="button"
              onClick={() => setActivePolicy(null)}
              aria-label="Close policy"
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                fontSize: '1.75rem',
                lineHeight: 1,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              &times;
            </button>

            {/* Policy 1: Privacy Policy */}
            {activePolicy === 'privacy' && (
              <div>
                <h2 style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.6rem', color: '#ffffff', marginBottom: '1.5rem' }}>
                  Privacy Policy
                </h2>
                <div style={{ fontSize: '0.92rem', lineHeight: '1.75', color: '#d4d4d8', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p>
                    We respect your privacy and confidentiality. Any information you submit on this advisory portal—including your name, email address, and contact number—is strictly used for communication regarding your strategy consultation and our 10-week private mentorship with 6 months of handholding support.
                  </p>
                  <p>
                    <strong>Data Protection:</strong> We do not sell, rent, or distribute your personal contact information to third-party marketing brokers or advertisers. All transmissions are encrypted using standard industry security protocols.
                  </p>
                  <p>
                    <strong>Communications:</strong> You may receive session reminders, calendar invites, and advisory orientation guides via email or WhatsApp. You can opt out at any time by replying &quot;STOP&quot; or emailing us at hello@apkacoach.com.
                  </p>
                </div>
              </div>
            )}

            {/* Policy 2: Terms & Conditions */}
            {activePolicy === 'terms' && (
              <div>
                <h2 style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.6rem', color: '#ffffff', marginBottom: '1.5rem' }}>
                  Terms &amp; Conditions
                </h2>
                <div style={{ fontSize: '0.92rem', lineHeight: '1.75', color: '#d4d4d8', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p>
                    By registering for our private video briefing or booking a 1-on-1 strategy call, you acknowledge and agree that Jagat Turkiya provides life, mindset &amp; executive transformation coaching, clarity frameworks, and personal leadership mentorship.
                  </p>
                  <p>
                    <strong>Attendance Commitment:</strong> Private coaching sessions involve dedicated time blocked with Coach Jagat. If you book a consultation slot, you are expected to attend on time or reschedule at least 12 hours in advance.
                  </p>
                  <p>
                    <strong>Authentic Growth Commitment:</strong> We do not provide quick-fix tricks or superficial motivation. Meaningful personal and executive transformation depends on individual commitment, self-honesty, and disciplined execution.
                  </p>
                </div>
              </div>
            )}

            {/* Policy 3: Refund Policy */}
            {activePolicy === 'refund' && (
              <div>
                <h2 style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: '1.6rem', color: '#ffffff', marginBottom: '1.5rem' }}>
                  Refund Policy
                </h2>
                <div style={{ fontSize: '0.92rem', lineHeight: '1.75', color: '#d4d4d8', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p>
                    <strong>100% Instant Refund:</strong> When you book a 1-on-1 strategy call, the ₹499 commitment deposit is strictly a reservation anchor to prevent no-shows. The moment you show up to your scheduled video chat, your ₹499 is transferred right back to your source account.
                  </p>
                  <p>
                    <strong>Mutual Fit Decision:</strong> Even if, during or after the call, we determine that our 10-week mentorship is not the ideal fit for your current goals and stage in life, you still receive your 100% full deposit back immediately.
                  </p>
                  <p>
                    <strong>The Only Exception:</strong> The deposit is non-refundable only if you book a slot, block Coach Jagat&apos;s time, and simply don&apos;t show up without informing us beforehand.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
