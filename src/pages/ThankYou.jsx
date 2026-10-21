import React from 'react';
import FunnelHeader from '../components/FunnelHeader';
import FunnelFooter from '../components/FunnelFooter';

export default function ThankYou() {
  return (
    <div className="thank-you-page" style={{
      minHeight: '100vh',
      backgroundColor: '#050505',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      {/* Official Executive Header (Bold Non-Clickable) */}
      <FunnelHeader />

      {/* Main Content Area (Spacious, clean, pure points, NO CTA button) */}
      <main style={{
        flex: 1,
        width: '100%',
        maxWidth: '920px',
        margin: '0 auto',
        padding: '4rem 1.5rem 6rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        {/* Thank You Headline */}
        <h1 style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: '1rem',
          lineHeight: 1.2,
          letterSpacing: '-0.025em'
        }}>
          Thank You! Your Application Has Been Received.
        </h1>

        <p style={{
          fontSize: '1.1rem',
          color: '#d4d4d8',
          lineHeight: 1.7,
          maxWidth: '820px',
          marginBottom: '2.5rem'
        }}>
          We&apos;re excited to connect with you. Please review the next steps below:
        </p>

        {/* Steps in Simple Clean Points (NO boxed cards, NO video mention, NO Step 4 guarantee) */}
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.85rem',
          marginBottom: '3.5rem'
        }}>
          {/* Point 1: Check Email & Spam Folder */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <span style={{
              color: '#ffffff',
              fontSize: '1.1rem',
              fontWeight: 700,
              minWidth: '24px'
            }}>
              1.
            </span>
            <p style={{
              margin: 0,
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: '#d4d4d8'
            }}>
              <strong style={{ color: '#ffffff' }}>Check your email inbox immediately:</strong>{' '}
              We have dispatched your confirmation and questionnaire link. If you do not see it in your Primary inbox,{' '}
              <strong style={{ color: '#ffffff', textDecoration: 'underline' }}>
                please check your Spam or Promotions folder
              </strong>{' '}
              and mark it as &quot;Important&quot; or &quot;Not Spam&quot; so you don&apos;t miss any scheduling updates.
            </p>
          </div>

          {/* Point 2: Fill Out Application */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <span style={{
              color: '#ffffff',
              fontSize: '1.1rem',
              fontWeight: 700,
              minWidth: '24px'
            }}>
              2.
            </span>
            <p style={{
              margin: 0,
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: '#d4d4d8'
            }}>
              <strong style={{ color: '#ffffff' }}>Complete the application form:</strong>{' '}
              Fill out the short questions sent to your email with your real numbers, current wealth stage, and primary goals. This allows our advisory desk to prepare specifically for your situation.
            </p>
          </div>

          {/* Point 3: Advisory Review & Call Scheduling */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <span style={{
              color: '#ffffff',
              fontSize: '1.1rem',
              fontWeight: 700,
              minWidth: '24px'
            }}>
              3.
            </span>
            <p style={{
              margin: 0,
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: '#d4d4d8'
            }}>
              <strong style={{ color: '#ffffff' }}>Advisory review &amp; scheduling:</strong>{' '}
              Our team will review your application within 24&ndash;48 business hours. Once accepted, you will receive an exclusive calendar link to schedule your private 1-on-1 strategy call with us.
            </p>
          </div>
        </div>

        {/* Support Note & Author Sign-off (NO CTA BUTTON) */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '2.5rem',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <p style={{
            fontSize: '0.95rem',
            color: '#a1a1aa',
            margin: 0,
            lineHeight: 1.6
          }}>
            Have any immediate questions? Write to our advisory team directly at{' '}
            <a 
              href="mailto:hello@apkacoach.com" 
              style={{ color: '#ffffff', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 600 }}
            >
              hello@apkacoach.com
            </a>.
          </p>

          <p style={{
            fontSize: '1.05rem',
            fontWeight: 700,
            color: '#ffffff',
            margin: 0
          }}>
            &mdash; Jagat Turkiya
          </p>
        </div>
      </main>

      {/* Structured Executive Footer */}
      <FunnelFooter />
    </div>
  );
}
