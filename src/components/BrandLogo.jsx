import React from 'react';

/**
 * BrandLogo - Premium vector-based brand lockup for Jagat Turkiya
 * Features the signature golden rhombus diamond JT emblem + crisp dual-tone wordmark
 */
export default function BrandLogo({ height = 36, className = "" }) {
  const diamondSize = Math.round(height * 0.92);
  const fontSize = Math.round(height * 0.58);
  const jtFontSize = Math.round(height * 0.38);

  return (
    <div 
      className={`brand-logo-wrap ${className}`} 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '0.75rem', 
        userSelect: 'none',
        lineHeight: 1
      }}
    >
      {/* Signature Golden Rhombus Diamond Icon */}
      <div 
        style={{
          width: `${diamondSize}px`,
          height: `${diamondSize}px`,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <div 
          style={{
            position: 'absolute',
            inset: '3px',
            borderRadius: '6px',
            transform: 'rotate(45deg)',
            border: '2.5px solid #F59E0B',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.24) 0%, rgba(217, 119, 6, 0.12) 100%)',
            boxShadow: '0 0 14px rgba(245, 158, 11, 0.3)'
          }}
        />
        <span 
          style={{
            position: 'relative',
            zIndex: 2,
            color: '#FFFFFF',
            fontFamily: "var(--font-heading, 'Instrument Sans', sans-serif)",
            fontWeight: 800,
            fontSize: `${jtFontSize}px`,
            letterSpacing: '-0.3px',
            lineHeight: 1
          }}
        >
          JT
        </span>
      </div>

      {/* Brand Wordmark Text: Crisp White Jagat + Radiant Gold Turkiya */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', lineHeight: 1 }}>
        <span 
          style={{
            color: '#FFFFFF',
            fontFamily: "var(--font-heading, 'Instrument Sans', sans-serif)",
            fontWeight: 800,
            fontSize: `${fontSize}px`,
            letterSpacing: '-0.02em'
          }}
        >
          Jagat
        </span>
        <span 
          style={{
            color: '#F59E0B',
            fontFamily: "var(--font-heading, 'Instrument Sans', sans-serif)",
            fontWeight: 800,
            fontSize: `${fontSize}px`,
            letterSpacing: '-0.02em'
          }}
        >
          Turkiya
        </span>
      </div>
    </div>
  );
}
