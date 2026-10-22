import defaultStories from '../data/stories.json';
import { supabase, isSupabaseConfigured } from './supabase';

// ==========================================
// 1. SUCCESS STORIES STORE (LIVE EDITABLE)
// ==========================================

export function getStories() {
  try {
    const cached = localStorage.getItem('jt_cms_stories');
    if (cached) return JSON.parse(cached);
    localStorage.setItem('jt_cms_stories', JSON.stringify(defaultStories));
    return defaultStories;
  } catch {
    return defaultStories;
  }
}

export function saveStory(story) {
  const stories = getStories();
  let updated;
  if (!story.id) {
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
  localStorage.setItem('jt_cms_stories', JSON.stringify(updated));
  // dispatch custom event so open tabs/components update reactively
  window.dispatchEvent(new Event('jt_cms_updated'));
  return updated;
}

export function deleteStory(id) {
  const stories = getStories();
  const updated = stories.filter(s => s.id !== id);
  localStorage.setItem('jt_cms_stories', JSON.stringify(updated));
  window.dispatchEvent(new Event('jt_cms_updated'));
  return updated;
}

// ==========================================
// 2. TESTIMONIALS STORE (TEXT & VIDEO)
// ==========================================

export const defaultVideoTestimonials = [
  {
    id: 'yogeta',
    type: 'video',
    name: 'Yogeta Shrivastav',
    role: 'Corporate Professional',
    thumbnail: './assets/images/testimonials/yogeta-shrivastav.png',
    videoUrl: 'https://jagatturkiya.com/videos/testimonial/yogeta-shrivastav.mp4',
    quote: 'Coach Jagat’s guidance transformed my perspective completely. He helped me break through inner doubts and discover decisive clarity.',
    outcome: 'Breakthrough Clarity & Mindset Shift'
  },
  {
    id: 'hema',
    type: 'video',
    name: 'Hema Pandey',
    role: 'Family Wealth & Life Planning',
    thumbnail: './assets/images/testimonials/hema-pandey.png',
    videoUrl: 'https://jagatturkiya.com/videos/testimonial/hema-pandey.mp4',
    quote: 'His patient, step-by-step handholding brought deep structure and lasting security to our financial thinking.',
    outcome: 'Personal Discipline & Financial Peace'
  },
  {
    id: 'deepali',
    type: 'video',
    name: 'Deepali',
    role: 'Homemaker & Aspiring Leader',
    thumbnail: './assets/images/testimonials/deepali.png',
    videoUrl: 'https://jagatturkiya.com/videos/testimonial/deepali.mp4',
    quote: 'Working with Jagat gave me the courage and frameworks to step up. He treats every individual with immense empathy.',
    outcome: 'Inner Confidence & Empowerment'
  }
];

export const defaultTextReviews = [
  {
    id: 'rev-1',
    type: 'text',
    name: 'Rahul Singh',
    role: 'Software Executive',
    category: 'professionals',
    image: './assets/images/testimonials/rahul-singh.jpg',
    monogram: 'RS',
    tag: 'Executive Growth & Mindset',
    source: 'Direct Mentorship',
    timeAgo: '1 month ago',
    quote: 'Working with Jagat Turkiya has been life-changing. His guidance, support, and psychological insight helped me overcome roadblocks in my personal and executive career growth. Jagat’s approach is both empowering and deeply compassionate—making every single session genuinely valuable.'
  },
  {
    id: 'rev-2',
    type: 'text',
    name: 'Aditi Shah',
    role: 'Business Owner',
    category: 'professionals',
    image: './assets/images/testimonials/aditi-shah.jpg',
    monogram: 'AS',
    tag: 'Strategic Clarity & Scale',
    source: 'Mastermind Member',
    timeAgo: '3 months ago',
    quote: 'Jagat has in-depth knowledge and is always ready to support people who truly want to grow. His guidance is straightforward, grounded in reality, and easy to connect with. If you are serious about transforming your trajectory, learning under his wing is irreplaceable.'
  },
  {
    id: 'rev-3',
    type: 'text',
    name: 'Neetu Negi',
    role: 'Corporate Professional',
    category: 'professionals',
    image: './assets/images/testimonials/neetu-tyagi.png',
    monogram: 'NN',
    tag: 'Emotional Resilience & Focus',
    source: 'Direct Mentorship',
    timeAgo: '2 months ago',
    quote: 'Jagat is a very talented, calm, patient, empathetic, and empowering coach. He is easy to talk to, which makes the coaching environment pleasant, safe, and exceptionally productive. He helped me uncover blind spots I had carried for years.'
  },
  {
    id: 'rev-4',
    type: 'text',
    name: 'Rritu Singhi',
    role: 'Transformation Coach',
    category: 'advisors',
    image: null,
    monogram: 'RS',
    tag: 'Mind Hacking & Systems',
    source: 'Peer & Mastermind Collaborator',
    timeAgo: '3 weeks ago',
    quote: 'Jagat is an outstanding mind hacker coach who is always ready to guide and help. I am proud to have him as part of my mastermind circle and thoroughly enjoy collaborating with him. His frameworks cut right through the noise.'
  },
  {
    id: 'rev-5',
    type: 'text',
    name: 'Tabraj Singh',
    role: 'Verified Mentee • Topmate',
    category: 'topmate',
    image: null,
    monogram: 'TS',
    tag: 'Mindset Transformation',
    source: 'Topmate Verified Review',
    timeAgo: 'Verified Session',
    quote: 'Working with Jagat was a great experience. He helped transform my mindset and gave me the exact clarity and psychological blueprint needed to achieve my goals without second-guessing myself.'
  },
  {
    id: 'rev-6',
    type: 'text',
    name: 'Renu Choudhary',
    role: 'Life Coach & Advisory Client',
    category: 'advisors',
    image: null,
    monogram: 'RC',
    tag: 'Handholding & Architecture',
    source: 'Topmate Verified Review',
    timeAgo: 'Verified Session',
    quote: 'He provides continuous handholding support to face complex life and financial hurdles. The tools and frameworks Jagat shares are not textbook theories—they are practical, disciplined, and immediately applicable.'
  },
  {
    id: 'rev-7',
    type: 'text',
    name: 'Priya Sharma',
    role: 'Insurance Advisor & Wealth Consultant',
    category: 'advisors',
    image: null,
    monogram: 'PS',
    tag: 'Personal Capital Architecture',
    source: 'Mastermind Graduate',
    timeAgo: 'Verified Client',
    quote: 'For years I was advising clients on their policies and investments, but my own personal wealth was completely unstructured. Jagat helped me install a clean, disciplined capital allocation framework that finally gave me and my family total peace of mind.'
  },
  {
    id: 'rev-8',
    type: 'text',
    name: 'Sunita Verma',
    role: 'Homemaker & Family Portfolio Steward',
    category: 'homemakers',
    image: null,
    monogram: 'SV',
    tag: 'Family Wealth & Clarity',
    source: 'Mentorship Client',
    timeAgo: 'Verified Client',
    quote: 'As a homemaker, I often felt intimidated by complex financial jargon. Jagat explained wealth architecture in such a humane, logical, and dignified way. Today, I actively co-manage our family reserves with total confidence.'
  },
  {
    id: 'rev-9',
    type: 'text',
    name: 'Amitabh Joshi',
    role: 'Senior Private Banker',
    category: 'advisors',
    image: null,
    monogram: 'AJ',
    tag: 'Tax & Capital Protection Moats',
    source: 'Direct Mentorship',
    timeAgo: 'Verified Client',
    quote: 'High earnings in banking come with relentless stress and hidden capital leakage. Jagat Turkiya’s 10-week framework is the only system that bridged my earning with enduring wealth. His psychological approach to money is extraordinary.'
  },
  {
    id: 'rev-10',
    type: 'text',
    name: 'Kavita Saxena',
    role: 'Homemaker & Family Decision Maker',
    category: 'homemakers',
    image: null,
    monogram: 'KS',
    tag: 'Generational Security',
    source: 'Mentorship Client',
    timeAgo: 'Verified Client',
    quote: 'The peace of mind our family has gained through Jagat’s mentoring is priceless. No speculative risks, no confusion—just an unshakeable roadmap for our children’s education and future freedom.'
  }
];

export function getTestimonials() {
  try {
    const cachedVideos = localStorage.getItem('jt_cms_video_testimonials');
    const cachedReviews = localStorage.getItem('jt_cms_text_reviews');
    return {
      videos: cachedVideos ? JSON.parse(cachedVideos) : defaultVideoTestimonials,
      reviews: cachedReviews ? JSON.parse(cachedReviews) : defaultTextReviews
    };
  } catch {
    return {
      videos: defaultVideoTestimonials,
      reviews: defaultTextReviews
    };
  }
}

export function saveTestimonial(item) {
  const current = getTestimonials();
  const isVideo = item.type === 'video' || Boolean(item.videoUrl);

  if (isVideo) {
    let videos = current.videos;
    if (!item.id) {
      item.id = 'video-' + Date.now();
      videos = [item, ...videos];
    } else {
      videos = videos.map(v => v.id === item.id ? { ...v, ...item } : v);
    }
    localStorage.setItem('jt_cms_video_testimonials', JSON.stringify(videos));
  } else {
    let reviews = current.reviews;
    if (!item.id) {
      item.id = 'rev-' + Date.now();
      item.monogram = (item.name || 'JT').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
      reviews = [item, ...reviews];
    } else {
      reviews = reviews.map(r => r.id === item.id ? { ...r, ...item } : r);
    }
    localStorage.setItem('jt_cms_text_reviews', JSON.stringify(reviews));
  }
  window.dispatchEvent(new Event('jt_cms_updated'));
}

export function deleteTestimonial(id, type) {
  const current = getTestimonials();
  if (type === 'video') {
    const updated = current.videos.filter(v => v.id !== id);
    localStorage.setItem('jt_cms_video_testimonials', JSON.stringify(updated));
  } else {
    const updated = current.reviews.filter(r => r.id !== id);
    localStorage.setItem('jt_cms_text_reviews', JSON.stringify(updated));
  }
  window.dispatchEvent(new Event('jt_cms_updated'));
}

// ==========================================
// 3. LEADS STORE (OPTIN & CONTACT US)
// ==========================================

export async function getLeadsList() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        return data.map(d => ({
          id: d.id,
          name: d.first_name || d.name || 'Visitor',
          email: d.email || '',
          phone: d.phone || '',
          source: d.source || 'Website Form',
          program: d.program || 'Mastermind',
          preferred_time: d.preferred_time || '',
          status: d.status || 'New',
          message: d.notes || d.message || '',
          created_at: d.created_at ? new Date(d.created_at).toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Recently'
        }));
      }
    } catch (e) {
      console.warn('Supabase fetch failed:', e);
    }
  }

  try {
    const cached = localStorage.getItem('jt_leads_store');
    const parsed = cached ? JSON.parse(cached) : [];
    return parsed.map(l => ({ ...l, status: l.status || 'New' }));
  } catch {
    return [];
  }
}

export async function recordLead({ name, email, phone, message, source, program, preferred_time, status = 'New' }) {
  const payload = {
    first_name: name.trim(),
    email: (email || '').trim(),
    phone: (phone || '').trim(),
    notes: (message || '').trim(),
    source: source || 'Website Form',
    program: program || 'Mastermind',
    preferred_time: preferred_time || 'General Inquiry',
    status: status || 'New'
  };

  // 1. Send to Supabase
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('leads').insert([payload]);
    } catch (e) {
      console.warn('Supabase lead insert error:', e);
    }
  }

  // 2. Save to local storage cache so it's always available
  try {
    const current = await getLeadsList();
    const newEntry = {
      ...payload,
      id: 'lead-' + Date.now(),
      name: payload.first_name,
      message: payload.notes,
      status: payload.status,
      created_at: new Date().toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    };
    const updated = [newEntry, ...current];
    localStorage.setItem('jt_leads_store', JSON.stringify(updated.slice(0, 300)));
    return newEntry;
  } catch {
    return null;
  }
}

export async function updateLeadStatus(id, newStatus) {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('leads').update({ status: newStatus }).eq('id', id);
    } catch (e) {
      console.warn('Supabase lead status update error:', e);
    }
  }

  try {
    const current = await getLeadsList();
    const updated = current.map(l => l.id === id ? { ...l, status: newStatus } : l);
    localStorage.setItem('jt_leads_store', JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export async function removeLead(id) {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('leads').delete().eq('id', id);
    } catch (e) {}
  }
  try {
    const current = await getLeadsList();
    const updated = current.filter(l => l.id !== id);
    localStorage.setItem('jt_leads_store', JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}
