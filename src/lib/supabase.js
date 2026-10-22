import { createClient } from '@supabase/supabase-js';
import { initialLeads, initialOrders, initialPrograms, initialComments } from '../data/adminInitialData';

// 1. Resolve Supabase credentials (from env OR user settings in localStorage)
const getCustomConfig = () => {
  try {
    return JSON.parse(localStorage.getItem('jt_supabase_custom_config') || '{}');
  } catch {
    return {};
  }
};

const customConfig = getCustomConfig();
export const supabaseUrl = customConfig.url || import.meta.env.VITE_SUPABASE_URL || '';
export const supabaseAnonKey = customConfig.anonKey || import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('YOUR_SUPABASE_URL') &&
  supabaseUrl.startsWith('http')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Helper to save Supabase config dynamically from Admin Settings UI
export function saveSupabaseConfig(url, anonKey) {
  try {
    localStorage.setItem('jt_supabase_custom_config', JSON.stringify({ url, anonKey }));
    window.location.reload();
    return true;
  } catch (err) {
    console.error('Failed to save config:', err);
    return false;
  }
}

// ==========================================
// LEADS CRM SERVICES
// ==========================================

export async function getLeads() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        return data;
      }
    } catch (err) {
      console.warn('Supabase getLeads error, falling back to local cache:', err);
    }
  }

  // Fallback to localStorage or initial seed
  try {
    const cached = localStorage.getItem('jt_admin_leads');
    if (cached) {
      return JSON.parse(cached);
    }
    localStorage.setItem('jt_admin_leads', JSON.stringify(initialLeads));
    return initialLeads;
  } catch {
    return initialLeads;
  }
}

export async function submitLead(leadData) {
  const payload = {
    name: leadData.name || `${leadData.firstName || ''} ${leadData.lastName || ''}`.trim() || 'New Lead',
    email: leadData.email || '',
    phone: leadData.phone || '',
    source: leadData.source || 'website',
    program: leadData.program || 'Mastermind',
    preferred_time: leadData.preferredTime || leadData.preferred_time || 'Morning (10 AM - 1 PM)',
    message: leadData.message || leadData.notes || '',
    status: 'New',
    created_at: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ' - ' + new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('leads')
        .insert([{
          first_name: payload.name,
          email: payload.email,
          phone: payload.phone,
          source: payload.source,
          program: payload.program,
          preferred_time: payload.preferred_time,
          notes: payload.message,
          status: payload.status
        }])
        .select();

      if (!error) {
        return { success: true, data: data[0], source: 'supabase' };
      }
    } catch (err) {
      console.warn('Supabase lead insert error:', err);
    }
  }

  // Local storage update
  try {
    const leads = await getLeads();
    const newLead = { ...payload, id: 'lead-' + Date.now() };
    const updated = [newLead, ...leads];
    localStorage.setItem('jt_admin_leads', JSON.stringify(updated));
    return { success: true, data: newLead, source: 'local' };
  } catch (err) {
    return { success: false, error: err };
  }
}

export async function updateLeadStatus(id, newStatus) {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('leads').update({ status: newStatus }).eq('id', id);
    } catch (e) {
      console.warn('Supabase update status failed:', e);
    }
  }

  try {
    const leads = await getLeads();
    const updated = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
    localStorage.setItem('jt_admin_leads', JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export async function deleteLead(id) {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('leads').delete().eq('id', id);
    } catch (e) {
      console.warn('Supabase delete lead failed:', e);
    }
  }

  try {
    const leads = await getLeads();
    const updated = leads.filter(l => l.id !== id);
    localStorage.setItem('jt_admin_leads', JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

// ==========================================
// ORDERS & BOOKINGS SERVICES
// ==========================================

export async function getOrders() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        return data;
      }
    } catch (err) {
      console.warn('Supabase getOrders error:', err);
    }
  }

  try {
    const cached = localStorage.getItem('jt_admin_orders');
    if (cached) return JSON.parse(cached);
    localStorage.setItem('jt_admin_orders', JSON.stringify(initialOrders));
    return initialOrders;
  } catch {
    return initialOrders;
  }
}

// ==========================================
// PROGRAMS CATALOG SERVICES
// ==========================================

export async function getPrograms() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('programs')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        return data;
      }
    } catch (err) {
      console.warn('Supabase getPrograms error:', err);
    }
  }

  try {
    const cached = localStorage.getItem('jt_admin_programs');
    if (cached) return JSON.parse(cached);
    localStorage.setItem('jt_admin_programs', JSON.stringify(initialPrograms));
    return initialPrograms;
  } catch {
    return initialPrograms;
  }
}

export async function toggleProgramStatus(id) {
  try {
    const programs = await getPrograms();
    const updated = programs.map(p => {
      if (p.id === id) {
        const nextStatus = p.status === 'Active' ? 'Draft' : 'Active';
        return { ...p, status: nextStatus };
      }
      return p;
    });
    localStorage.setItem('jt_admin_programs', JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

// ==========================================
// COMMENTS INBOX SERVICES
// ==========================================

export async function getComments() {
  try {
    const cached = localStorage.getItem('jt_admin_comments');
    if (cached) return JSON.parse(cached);
    localStorage.setItem('jt_admin_comments', JSON.stringify(initialComments));
    return initialComments;
  } catch {
    return initialComments;
  }
}

export async function updateCoachReply(id, replyText) {
  try {
    const comments = await getComments();
    const updated = comments.map(c => c.id === id ? { ...c, coach_reply: replyText } : c);
    localStorage.setItem('jt_admin_comments', JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}
