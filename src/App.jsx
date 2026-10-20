import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Mastermind from './pages/Mastermind';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';
import Disclaimer from './pages/Disclaimer';
import NotFound from './pages/NotFound';
import Vsl from './pages/Vsl';
import LeadForm from './pages/LeadForm';
import ThankYou from './pages/ThankYou';

export default function App() {
  const location = useLocation();
  const isStandaloneFunnel = ['/vsl', '/form', '/apply', '/access', '/thank-you'].includes(location.pathname);

  return (
    <div className={`site-wrapper ${isStandaloneFunnel ? 'funnel-layout' : ''}`}>
      <ScrollToTop />
      {!isStandaloneFunnel && <Header />}
      <main className={isStandaloneFunnel ? 'funnel-main-content' : 'main-content'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mastermind" element={<Mastermind />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />

          {/* Standalone Private Funnel Pages (Not linked in navigation) */}
          <Route path="/vsl" element={<Vsl />} />
          <Route path="/form" element={<LeadForm />} />
          <Route path="/apply" element={<LeadForm />} />
          <Route path="/access" element={<LeadForm />} />
          <Route path="/thank-you" element={<ThankYou />} />

          {/* Legacy route redirects */}
          <Route path="/books" element={<Navigate to="/mastermind" replace />} />
          <Route path="/products" element={<Navigate to="/mastermind" replace />} />
          <Route path="/legal" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/media" element={<Navigate to="/about" replace />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isStandaloneFunnel && <Footer />}
    </div>
  );
}
