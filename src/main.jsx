import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Force browser to bust sticky favicon cache immediately
try {
  const v = Date.now();
  const iconLink = document.querySelector("link[rel*='icon']") || document.createElement('link');
  iconLink.type = 'image/png';
  iconLink.rel = 'icon';
  iconLink.href = `./favicon-32x32.png?v=${v}`;
  document.head.appendChild(iconLink);
} catch (e) {
  // Silent fallback
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
