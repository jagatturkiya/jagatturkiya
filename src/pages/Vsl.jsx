import React from 'react';
import { Link } from 'react-router-dom';
import FunnelHeader from '../components/FunnelHeader';
import FunnelFooter from '../components/FunnelFooter';
import HlsPlayer from '../components/HlsPlayer';

export default function Vsl() {

  return (
    <div className="vsl-page" style={{
      minHeight: '100vh',
      backgroundColor: '#050505',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      {/* Official Executive Header (Bold Non-Clickable) */}
      <FunnelHeader />

      {/* Main Expansive Content Area (No congestion, wide & breathable) */}
      <main style={{
        flex: 1,
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '3rem 1.5rem 5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Main Headline (Spacious & Clean) */}
        <h1 style={{
          fontFamily: "'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif",
          fontSize: 'clamp(2rem, 4.2vw, 3rem)',
          fontWeight: 700,
          lineHeight: 1.22,
          color: '#ffffff',
          textAlign: 'center',
          maxWidth: '960px',
          margin: '0 auto 2.5rem',
          letterSpacing: '-0.02em'
        }}>
          How High-Performing Leaders &amp; Executives Break Internal Ceilings &amp; Build Unshakeable Peace of Mind
        </h1>

        {/* Clean HLS Video Player (100% video focus, no watermarks, no stream buttons) */}
        <div style={{ width: '100%', maxWidth: '980px', marginBottom: '3rem' }}>
          <HlsPlayer autoPlay={true} src="https://pub-ba6edddb861846b39535d2d0cabfeeea.r2.dev/Jagat%20Video%202%20compressed.mp4" />
        </div>

        {/* CTA Button: BOOK A CALL (Solid Crisp White .btn-white) */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '560px',
          marginBottom: '4rem'
        }}>
          <Link
            to="/exclusive"
            style={{
              display: 'block',
              width: '100%',
              maxWidth: '460px',
              padding: '1.25rem 2rem',
              backgroundColor: '#ffffff',
              border: '1px solid #ffffff',
              borderRadius: '6px',
              color: '#080808',
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              textAlign: 'center',
              boxSizing: 'border-box'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#e4e4e7';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            CONNECT WITH COACH JAGAT
          </Link>

          {/* Subtext */}
          <p style={{
            color: '#10b981',
            fontSize: '0.95rem',
            fontWeight: 600,
            marginTop: '1.25rem',
            textAlign: 'center',
            letterSpacing: '0.02em'
          }}>
            ✓ Strict Closed-Door Confidentiality • Priority Consultation
          </p>
        </div>

        {/* Roadmap Section (Changed Heading & Spacious Layout) */}
        <div style={{
          width: '100%',
          maxWidth: '860px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '3rem',
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem'
        }}>
          {/* Executive Heading */}
          <h2 style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: '1.4rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '2rem',
            textAlign: 'left',
            letterSpacing: '-0.01em'
          }}>
            Your Transformation Blueprint: What to Expect Next
          </h2>

          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.85rem'
          }}>
            {/* Bullet 1 */}
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{
                color: '#ffffff',
                fontSize: '1.25rem',
                lineHeight: '1.5',
                userSelect: 'none'
              }}>&bull;</span>
              <p style={{
                color: '#d4d4d8',
                fontSize: '1rem',
                lineHeight: 1.7,
                margin: 0
              }}>
                <strong style={{ color: '#ffffff', fontWeight: 600 }}>Grab your 1-on-1 time:</strong>{' '}
                Click the button above to pick a date and time that fits your schedule.
              </p>
            </li>

            {/* Bullet 2 */}
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{
                color: '#ffffff',
                fontSize: '1.25rem',
                lineHeight: '1.5',
                userSelect: 'none'
              }}>&bull;</span>
              <p style={{
                color: '#d4d4d8',
                fontSize: '1rem',
                lineHeight: 1.7,
                margin: 0
              }}>
                <strong style={{ color: '#ffffff', fontWeight: 600 }}>What we do on the call:</strong>{' '}
                We get on a private video chat to diagnose your internal bottlenecks, talk through your life and career goals, and see if our 10-week program with 6 months of handholding support is genuinely the right fit for you. No pressure.
              </p>
            </li>

            {/* Bullet 3 */}
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{
                color: '#ffffff',
                fontSize: '1.25rem',
                lineHeight: '1.5',
                userSelect: 'none'
              }}>&bull;</span>
              <p style={{
                color: '#d4d4d8',
                fontSize: '1rem',
                lineHeight: 1.7,
                margin: 0
              }}>
                <strong style={{ color: '#ffffff', fontWeight: 600 }}>Instant 100% Refund:</strong>{' '}
                The second you show up to your scheduled call, your ₹499 is transferred right back to you. Even if we decide the program isn't right for you, you still get your full deposit back immediately.
              </p>
            </li>

            {/* Bullet 4 */}
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{
                color: '#ffffff',
                fontSize: '1.25rem',
                lineHeight: '1.5',
                userSelect: 'none'
              }}>&bull;</span>
              <p style={{
                color: '#d4d4d8',
                fontSize: '1rem',
                lineHeight: 1.7,
                margin: 0
              }}>
                <strong style={{ color: '#ffffff', fontWeight: 600 }}>The only exception:</strong>{' '}
                The deposit is non-refundable only if you book a slot, block Coach Jagat's time, and simply don't show up without telling us beforehand.
              </p>
            </li>
          </ul>

          {/* Direct Support Note */}
          <p style={{
            marginTop: '2.5rem',
            color: '#a1a1aa',
            fontSize: '0.92rem',
            lineHeight: 1.6
          }}>
            Have any questions before booking? Write to us directly at{' '}
            <a
              href="mailto:hello@apkacoach.com"
              style={{
                color: '#ffffff',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                fontWeight: 600
              }}
            >
              hello@apkacoach.com
            </a>
            .
          </p>
        </div>
      </main>

      {/* Structured Executive Footer */}
      <FunnelFooter />
    </div>
  );
}
