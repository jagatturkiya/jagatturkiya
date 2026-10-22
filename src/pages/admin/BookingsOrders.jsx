import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Calendar, Phone, Mail, MessageCircle } from 'lucide-react';
import { getOrders } from '../../lib/supabase';

export default function BookingsOrders() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    const data = await getOrders();
    setOrders(data);
  };

  const filteredOrders = orders.filter(o => {
    const matchesFilter = filter === 'All' ? true : o.status === filter;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !query ||
      (o.order_id && o.order_id.toLowerCase().includes(query)) ||
      (o.customer_name && o.customer_name.toLowerCase().includes(query)) ||
      (o.customer_email && o.customer_email.toLowerCase().includes(query)) ||
      (o.customer_phone && o.customer_phone.includes(query)) ||
      (o.item_title && o.item_title.toLowerCase().includes(query));

    return matchesFilter && matchesSearch;
  });

  const totalRevenue = orders.reduce((sum, o) => sum + (Number(o.amount) || 0), 0);

  return (
    <div className="dark-orders-view" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1.75rem'
      }}>
        <div>
          <h1 style={{
            fontSize: '1.75rem',
            fontWeight: 800,
            margin: '0 0 0.35rem',
            color: '#ffffff',
            fontFamily: "'Instrument Sans', sans-serif"
          }}>
            Orders & Bookings
          </h1>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.85rem' }}>
            Paid coaching sessions, digital products, and Razorpay transaction records.
          </p>
        </div>

        <div style={{
          backgroundColor: '#0b0f19',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '10px',
          padding: '0.5rem 1.15rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div>
            <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.08em' }}>
              TOTAL REVENUE
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
              ₹{totalRevenue.toLocaleString('en-IN')}
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div style={{
        backgroundColor: '#0b0f19',
        borderRadius: '12px',
        padding: '0.75rem 1rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          {['All', 'Paid', 'Pending'].map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.78rem',
                fontWeight: 600,
                border: 'none',
                backgroundColor: filter === tab ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
                color: filter === tab ? '#050505' : '#94a3b8',
                cursor: 'pointer'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '8px',
          padding: '0.45rem 0.85rem',
          flex: '1 1 280px',
          maxWidth: '380px'
        }}>
          <Search size={15} color="#64748b" />
          <input
            type="text"
            placeholder="Search by customer, order ID, phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              outline: 'none',
              fontSize: '0.85rem',
              width: '100%',
              color: '#ffffff'
            }}
          />
        </div>
      </div>

      {/* Orders Table */}
      <div style={{
        backgroundColor: '#0b0f19',
        borderRadius: '14px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden'
      }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.84rem' }}>
            <thead>
              <tr style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#64748b',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em'
              }}>
                <th style={{ padding: '1rem 1.25rem' }}>TRANSACTION & DATE</th>
                <th style={{ padding: '1rem 1.25rem' }}>CLIENT DETAILS</th>
                <th style={{ padding: '1rem 1.25rem' }}>PROGRAM PURCHASED</th>
                <th style={{ padding: '1rem 1.25rem' }}>SLOT / ACCESS</th>
                <th style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((ord, idx) => {
                const cleanPhone = (ord.customer_phone || '').replace(/[^0-9]/g, '');
                const waUrl = `https://wa.me/91${cleanPhone}`;

                return (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                      transition: 'background-color 0.1s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <td style={{ padding: '1.15rem 1.25rem' }}>
                      <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.86rem' }}>
                        {ord.order_id}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '0.2rem' }}>
                        {ord.date}
                      </div>
                    </td>

                    <td style={{ padding: '1.15rem 1.25rem' }}>
                      <div style={{ fontWeight: 600, color: '#ffffff' }}>
                        {ord.customer_name}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: '#94a3b8', marginTop: '0.15rem' }}>
                        {ord.customer_email}
                      </div>
                      {ord.customer_phone && (
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: '0.74rem',
                            color: '#10b981',
                            textDecoration: 'none',
                            fontWeight: 600,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            marginTop: '0.2rem'
                          }}
                        >
                          <MessageCircle size={12} />
                          <span>{ord.customer_phone}</span>
                        </a>
                      )}
                    </td>

                    <td style={{ padding: '1.15rem 1.25rem' }}>
                      <div style={{ fontWeight: 600, color: '#ffffff' }}>
                        {ord.item_title}
                      </div>
                      <span style={{
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        padding: '0.12rem 0.45rem',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        color: '#94a3b8',
                        display: 'inline-block',
                        marginTop: '0.25rem'
                      }}>
                        {ord.item_type}
                      </span>
                    </td>

                    <td style={{ padding: '1.15rem 1.25rem', color: '#94a3b8' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem' }}>
                        <Calendar size={13} color="#94a3b8" />
                        <span>{ord.slot}</span>
                      </div>
                    </td>

                    <td style={{ padding: '1.15rem 1.25rem', textAlign: 'right' }}>
                      <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.95rem' }}>
                        ₹{Number(ord.amount).toLocaleString('en-IN')}
                      </div>
                      <span style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        color: ord.status === 'Paid' ? '#34d399' : '#fbbf24'
                      }}>
                        • {ord.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
