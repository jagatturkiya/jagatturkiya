import { createClient } from '@supabase/supabase-js';
import { initialLeads, initialOrders, initialPrograms, initialComments } from '../data/adminInitialData';
import defaultStories from '../data/stories.json';

// 1. Resolve Supabase credentials
const getCustomConfig = () => {
  try {
    return JSON.parse(localStorage.getItem('jt_supabase_custom_config') || '{}');
  } catch {
    return {};
  }
};

const defaultUrl = 'https://xzyezjhorrjlbkglmcqw.supabase.co';
const defaultAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6eWV6amhvcnJqbGJrZ2xtY3F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2NjM1MjAsImV4cCI6MjEwODIzOTUyMH0.Xbq_0dNcCYPu1dtwsCNzGzw2qGZLKUm-Bm_cFclH2kM';

const customConfig = getCustomConfig();
export const supabaseUrl = customConfig.url || import.meta.env.VITE_SUPABASE_URL || defaultUrl;
export const supabaseAnonKey = customConfig.anonKey || import.meta.env.VITE_SUPABASE_ANON_KEY || defaultAnonKey;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('YOUR_SUPABASE_URL') &&
  supabaseUrl.startsWith('http')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

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

      if (!error && data) {
        const liveLeads = data.map(d => ({
          ...d,
          name: d.name || `${d.first_name || ''} ${d.last_name || ''}`.trim() || 'Client',
          message: d.notes || d.message || '',
          preferred_time: d.preferred_time || 'Morning (10 AM - 1 PM)',
          created_at: d.created_at ? new Date(d.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ' • ' + new Date(d.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : 'Recently'
        }));
        const sampleFiltered = initialLeads.filter(s => !liveLeads.some(l => l.email === s.email));
        return [...liveLeads, ...sampleFiltered];
      }
    } catch (err) {
      console.warn('Supabase getLeads error, falling back to local cache:', err);
    }
  }

  try {
    const cached = localStorage.getItem('jt_admin_leads');
    if (cached) return JSON.parse(cached);
    localStorage.setItem('jt_admin_leads', JSON.stringify(initialLeads));
    return initialLeads;
  } catch {
    return initialLeads;
  }
}

export async function submitLead(leadData) {
  const payload = {
    first_name: leadData.firstName || leadData.name || 'Website Visitor',
    last_name: leadData.lastName || '',
    email: leadData.email || '',
    phone: leadData.phone || '',
    source: leadData.source || 'Website Lead',
    program: leadData.program || 'Mastermind',
    preferred_time: leadData.preferredTime || leadData.preferred_time || 'Morning (10 AM - 1 PM)',
    notes: leadData.message || leadData.notes || '',
    status: 'New'
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('leads')
        .insert([payload])
        .select();

      if (!error && data && data.length > 0) {
        return { success: true, data: data[0], source: 'supabase' };
      }
    } catch (err) {
      console.warn('Supabase lead insert error:', err);
    }
  }

  try {
    const leads = await getLeads();
    const newLead = {
      ...payload,
      id: 'lead-' + Date.now(),
      created_at: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ' • ' + new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };
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
      console.warn('Supabase update status error:', e);
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
      console.warn('Supabase delete error:', e);
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
// PROGRAMS & SESSIONS CATALOG SERVICES (EDITABLE)
// ==========================================

export async function getPrograms() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('programs')
        .select('*')
        .order('price', { ascending: false });

      if (!error && data && data.length > 0) {
        return data.map(d => ({
          ...d,
          status: d.is_active !== false ? 'Active' : 'Draft'
        }));
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

export async function saveProgram(program) {
  const isNew = !program.id || program.id.startsWith('temp_');
  const payload = {
    title: program.title,
    slug: program.slug || program.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    type: program.type || 'SESSION',
    tag: program.tag || 'Transformation',
    price: Number(program.price) || 0,
    original_price: Number(program.original_price) || 0,
    is_active: program.status === 'Active',
    description: program.description || ''
  };

  if (isSupabaseConfigured && supabase) {
    try {
      if (isNew) {
        const { data, error } = await supabase.from('programs').insert([payload]).select();
        if (!error && data) program.id = data[0].id;
      } else {
        await supabase.from('programs').update(payload).eq('id', program.id);
      }
    } catch (err) {
      console.warn('Supabase save program failed:', err);
    }
  }

  try {
    const programs = await getPrograms();
    let updated;
    if (isNew) {
      const created = { ...program, id: program.id || 'prog-' + Date.now() };
      updated = [created, ...programs];
    } else {
      updated = programs.map(p => p.id === program.id ? { ...p, ...program } : p);
    }
    localStorage.setItem('jt_admin_programs', JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export async function toggleProgramStatus(id) {
  try {
    const programs = await getPrograms();
    const target = programs.find(p => p.id === id);
    if (!target) return programs;
    const newStatus = target.status === 'Active' ? 'Draft' : 'Active';

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('programs').update({ is_active: newStatus === 'Active' }).eq('id', id);
      } catch (e) {}
    }

    const updated = programs.map(p => p.id === id ? { ...p, status: newStatus } : p);
    localStorage.setItem('jt_admin_programs', JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export async function deleteProgram(id) {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('programs').delete().eq('id', id);
    } catch (e) {}
  }
  try {
    const programs = await getPrograms();
    const updated = programs.filter(p => p.id !== id);
    localStorage.setItem('jt_admin_programs', JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

// ==========================================
// SUCCESS STORIES SERVICES (EDITABLE)
// ==========================================

export async function getStories() {
  try {
    const cached = localStorage.getItem('jt_admin_stories');
    if (cached) return JSON.parse(cached);
    localStorage.setItem('jt_admin_stories', JSON.stringify(defaultStories));
    return defaultStories;
  } catch {
    return defaultStories;
  }
}

export async function saveStory(story) {
  try {
    const stories = await getStories();
    let updated;
    const isNew = !story.id;
    if (isNew) {
      const newStory = {
        ...story,
        id: 'story-' + Date.now(),
        date: story.date || '16 Jun, 2026',
        readTime: story.readTime || '5 min read'
      };
      updated = [newStory, ...stories];
    } else {
      updated = stories.map(s => s.id === story.id ? { ...s, ...story } : s);
    }
    localStorage.setItem('jt_admin_stories', JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export async function deleteStory(id) {
  try {
    const stories = await getStories();
    const updated = stories.filter(s => s.id !== id);
    localStorage.setItem('jt_admin_stories', JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

// ==========================================
// REAL-TIME COMMENTS & COACH REPLIES SERVICES
// ==========================================

export async function getComments(storyId = null) {
  // Check Supabase first
  if (isSupabaseConfigured && supabase) {
    try {
      let query = supabase.from('comments').select('*').order('created_at', { ascending: false });
      if (storyId) query = query.eq('story_id', storyId);
      const { data, error } = await query;
      if (!error && data && data.length > 0) {
        return data.map(d => ({
          id: d.id,
          author: d.author_name || 'Anonymous',
          email: d.author_email || '',
          article: d.story_title || 'General Insight',
          story_id: d.story_id,
          date: new Date(d.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ' • ' + new Date(d.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          status: d.is_approved !== false ? 'Approved' : 'Pending',
          text: d.comment_text,
          coach_reply: d.coach_reply || null
        }));
      }
    } catch (e) {
      // fallback to local
    }
  }

  try {
    const cached = localStorage.getItem('jt_admin_comments');
    const all = cached ? JSON.parse(cached) : initialComments;
    if (storyId) {
      return all.filter(c => c.story_id === storyId || c.article?.includes(storyId));
    }
    return all;
  } catch {
    return initialComments;
  }
}

export async function postComment({ story_id, story_title, author_name, author_email, comment_text }) {
  const payload = {
    story_id: String(story_id || 'general'),
    story_title: story_title || 'Success Story',
    author_name: author_name || 'Reader',
    author_email: author_email || '',
    comment_text: comment_text,
    coach_reply: null,
    is_approved: true
  };

  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('comments').insert([payload]);
    } catch (e) {}
  }

  try {
    const current = await getComments();
    const newComment = {
      id: 'comm-' + Date.now(),
      author: payload.author_name,
      email: payload.author_email,
      article: payload.story_title,
      story_id: payload.story_id,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ' • ' + new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      status: 'Approved',
      text: payload.comment_text,
      coach_reply: null
    };
    const updated = [newComment, ...current];
    localStorage.setItem('jt_admin_comments', JSON.stringify(updated));
    return newComment;
  } catch (err) {
    return null;
  }
}

export async function updateCoachReply(id, replyText) {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('comments').update({ coach_reply: replyText }).eq('id', id);
    } catch (e) {}
  }

  try {
    const comments = await getComments();
    const updated = comments.map(c => c.id === id ? { ...c, coach_reply: replyText } : c);
    localStorage.setItem('jt_admin_comments', JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export async function deleteComment(id) {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('comments').delete().eq('id', id);
    } catch (e) {}
  }
  try {
    const comments = await getComments();
    const updated = comments.filter(c => c.id !== id);
    localStorage.setItem('jt_admin_comments', JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

// ==========================================
// ORDERS SERVICES
// ==========================================

export async function getOrders() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
      if (!error && data && data.length > 0) return data;
    } catch (e) {}
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
