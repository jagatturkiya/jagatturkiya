import React from 'react';

export default function FunnelHeader() {
  return (
    <header 
      className="funnel-header"
      style={{
        width: '100%',
        height: '76px',
        backgroundColor: 'rgba(5, 5, 5, 0.96)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '1200px',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Official Executive Logo - Clean Dark & Centered */}
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'default',
            userSelect: 'none'
          }}
          aria-label="Jagat Turkiya"
        >
          <img
            src="./assets/images/logo-clean-dark.png"
            alt="Jagat Turkiya"
            width="150"
            height="44"
            style={{
              height: '44px',
              width: 'auto',
              display: 'block',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>
    </header>
  );
}
