import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('YOUR_SUPABASE_URL')
);

// Fallback dummy client if keys aren't added yet, so the app doesn't throw on startup
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Service to save a new lead to Supabase (with automatic fallback to localStorage)
 */
export async function submitLead(leadData) {
  const payload = {
    first_name: leadData.firstName || leadData.name || '',
    last_name: leadData.lastName || '',
    email: leadData.email || '',
    phone: leadData.phone || '',
    source: leadData.source || 'website',
    program: leadData.program || 'Mastermind',
    preferred_time: leadData.preferredTime || leadData.preferred_time || 'Morning (10 AM - 1 PM)',
    notes: leadData.notes || '',
    status: 'New'
  };

  // Try Supabase first if configured
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('leads')
        .insert([payload])
        .select();

      if (error) {
        console.warn('Supabase lead insert error:', error);
      } else {
        return { success: true, data, source: 'supabase' };
      }
    } catch (err) {
      console.warn('Supabase connection failed, falling back to local storage:', err);
    }
  }

  // LocalStorage fallback so no lead is ever lost even if offline or before keys are set
  try {
    const existing = JSON.parse(localStorage.getItem('jt_leads_cache') || '[]');
    const localLead = {
      ...payload,
      id: 'local_' + Date.now(),
      created_at: new Date().toISOString()
    };
    existing.unshift(localLead);
    localStorage.setItem('jt_leads_cache', JSON.stringify(existing.slice(0, 100)));
    return { success: true, data: localLead, source: 'local_cache' };
  } catch (err) {
    return { success: false, error: err };
  }
}
