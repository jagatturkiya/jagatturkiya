import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Phone, 
  Mail, 
  ExternalLink,
  MessageCircle,
  FileSpreadsheet
} from 'lucide-react';
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

  return (
    <div className="bookings-orders-view" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Page Title */}
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{
          fontSize: '1.65rem',
          fontWeight: 800,
          margin: '0 0 0.35rem',
          color: '#0f172a',
          fontFamily: "'Instrument Sans', sans-serif"
        }}>
          Sales & Bookings Log
        </h1>
        <p style={{ margin: 0, color: '#64748b', fontSize: '0.88rem' }}>
          <strong>Bookings & Orders Hub:</strong> Track all system registrations, consulting slots, and Razorpay course payments.
        </p>
      </div>

      {/* 4 Stat Cards matching screenshot media_1792664289414.jpg */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: '1.25rem',
        marginBottom: '1.75rem'
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '1.25rem 1.4rem',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em' }}>
            TOTAL REVENUE
          </div>
          <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', margin: '0.4rem 0 0.2rem' }}>
            ₹20,993.67
          </div>
          <div style={{ fontSize: '0.72rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#16a34a' }} />
            From Successful Sales
          </div>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '1.25rem 1.4rem',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em' }}>
            SUCCESSFUL ORDERS
          </div>
          <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', margin: '0.4rem 0 0.2rem' }}>
            9
          </div>
          <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
            Paid & Slot Confirmed
          </div>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '1.25rem 1.4rem',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em' }}>
            ABANDONED / PENDING
          </div>
          <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#d97706', margin: '0.4rem 0 0.2rem' }}>
            10
          </div>
          <div style={{ fontSize: '0.72rem', color: '#d97706' }}>
            Checkout Initiated
          </div>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '1.25rem 1.4rem',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em' }}>
            TOTAL HITS
          </div>
          <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', margin: '0.4rem 0 0.2rem' }}>
            19
          </div>
          <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
            Overall traffic log
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '0.85rem 1.25rem',
        border: '1px solid #e2e8f0',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {['All', 'Paid', 'Pending', 'Failed'].map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 600,
                border: 'none',
                backgroundColor: filter === tab ? '#0f172a' : '#f1f5f9',
                color: filter === tab ? '#ffffff' : '#64748b',
                cursor: 'pointer'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: '1 1 280px', maxWidth: '380px' }}>
          <input
            type="text"
            placeholder="Search name, phone, email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              padding: '0.45rem 0.85rem',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              fontSize: '0.84rem',
              outline: 'none'
            }}
          />
          <button
            style={{
              backgroundColor: '#0f172a',
              color: '#ffffff',
              border: 'none',
              padding: '0.45rem 0.95rem',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Find
          </button>
        </div>
      </div>

      {/* Orders Table matching media_1792664289414.jpg */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '14px',
        border: '1px solid #e2e8f0',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
      }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.84rem' }}>
            <thead>
              <tr style={{
                backgroundColor: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
                color: '#64748b',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.06em'
              }}>
                <th style={{ padding: '0.95rem 1.25rem' }}>ORDER ID & DATE</th>
                <th style={{ padding: '0.95rem 1.25rem' }}>CUSTOMER DETAILS</th>
                <th style={{ padding: '0.95rem 1.25rem' }}>PROGRAM / PRODUCT</th>
                <th style={{ padding: '0.95rem 1.25rem' }}>SLOT DETAILS</th>
                <th style={{ padding: '0.95rem 1.25rem' }}>AMOUNT</th>
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
                      borderBottom: '1px solid #f1f5f9',
                      transition: 'background-color 0.1s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <td style={{ padding: '1rem 1.25rem' }}>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.84rem' }}>
                        {ord.order_id}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                        {ord.date}
                      </div>
                    </td>

                    <td style={{ padding: '1rem 1.25rem' }}>
                      <div style={{ fontWeight: 600, color: '#1e293b' }}>
                        {ord.customer_name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.15rem' }}>
                        {ord.customer_email}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.2rem' }}>
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: '0.75rem',
                            color: '#059669',
                            textDecoration: 'none',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem'
                          }}
                        >
                          <MessageCircle size={12} />
                          <span>{ord.customer_phone}</span>
                        </a>
                      </div>
                    </td>

                    <td style={{ padding: '1rem 1.25rem' }}>
                      <div style={{ fontWeight: 600, color: '#0f172a' }}>
                        {ord.item_title}
                      </div>
                      <span style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px',
                        backgroundColor: '#f1f5f9',
                        color: '#475569',
                        display: 'inline-block',
                        marginTop: '0.25rem'
                      }}>
                        {ord.item_type}
                      </span>
                    </td>

                    <td style={{ padding: '1rem 1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#475569', fontSize: '0.8rem' }}>
                        <Calendar size={13} color="#6366f1" />
                        <span>{ord.slot}</span>
                      </div>
                    </td>

                    <td style={{ padding: '1rem 1.25rem' }}>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.92rem' }}>
                        ₹{ord.amount}
                      </div>
                      <span style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        color: ord.status === 'Paid' ? '#16a34a' : '#d97706'
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
