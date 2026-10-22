import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Mastermind from './pages/Mastermind';
import About from './pages/About';
import Contact from './pages/Contact';
import SuccessStories from './pages/SuccessStories';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';
import Disclaimer from './pages/Disclaimer';
import NotFound from './pages/NotFound';
import Vsl from './pages/Vsl';
import Optin from './pages/Optin';
import ThankYou from './pages/ThankYou';

// Admin Portal Pages
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import LeadsCRM from './pages/admin/LeadsCRM';
import BookingsOrders from './pages/admin/BookingsOrders';
import ProgramsCatalog from './pages/admin/ProgramsCatalog';
import CommentsInbox from './pages/admin/CommentsInbox';
import SuccessStoriesAdmin from './pages/admin/SuccessStoriesAdmin';
import TestimonialsAdmin from './pages/admin/TestimonialsAdmin';
import BlogsAdmin from './pages/admin/BlogsAdmin';
import SubscribersAdmin from './pages/admin/SubscribersAdmin';
import WebSettings from './pages/admin/WebSettings';
import AdminLogin from './pages/admin/AdminLogin';

export default function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isStandaloneFunnel = ['/vsl', '/optin', '/form', '/forms', '/apply', '/access', '/thank-you'].includes(location.pathname);

  // If in admin portal, render Admin directly without public headers/footers
  if (isAdminRoute) {
    return (
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="leads" element={<LeadsCRM />} />
            <Route path="bookings" element={<BookingsOrders />} />
            <Route path="programs" element={<ProgramsCatalog />} />
            <Route path="comments" element={<CommentsInbox />} />
            <Route path="stories" element={<SuccessStoriesAdmin />} />
            <Route path="testimonials" element={<TestimonialsAdmin />} />
            <Route path="blogs" element={<BlogsAdmin />} />
            <Route path="subscribers" element={<SubscribersAdmin />} />
            <Route path="settings" element={<WebSettings />} />
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Route>
        </Routes>
      </>
    );
  }

  return (
    <div className={`site-wrapper ${isStandaloneFunnel ? 'funnel-layout' : ''}`}>
      <ScrollToTop />
      {!isStandaloneFunnel && <Header />}
      <main className={isStandaloneFunnel ? 'funnel-main-content' : 'main-content'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mastermind" element={<Mastermind />} />
          <Route path="/about" element={<About />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />

          {/* Standalone Private Funnel Pages */}
          <Route path="/optin" element={<Optin />} />
          <Route path="/vsl" element={<Vsl />} />
          <Route path="/thank-you" element={<ThankYou />} />

          {/* Redirections to /optin as requested */}
          <Route path="/form" element={<Navigate to="/optin" replace />} />
          <Route path="/forms" element={<Navigate to="/optin" replace />} />
          <Route path="/apply" element={<Navigate to="/optin" replace />} />
          <Route path="/access" element={<Navigate to="/optin" replace />} />

          {/* Legacy route redirects */}
          <Route path="/testimonials" element={<Navigate to="/success-stories" replace />} />
          <Route path="/stories" element={<Navigate to="/success-stories" replace />} />
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

