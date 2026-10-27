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
    role: 'Executive & Life Transformation',
    thumbnail: './assets/images/testimonials/hema-pandey.png',
    videoUrl: 'https://jagatturkiya.com/videos/testimonial/hema-pandey.mp4',
    quote: 'His patient, step-by-step handholding brought deep structure, emotional clarity, and lasting direction to our lives.',
    outcome: 'Personal Discipline & Lifelong Peace'
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
    tag: 'Handholding & Life Architecture',
    source: 'Topmate Verified Review',
    timeAgo: 'Verified Session',
    quote: 'He provides continuous handholding support to face complex life and career hurdles. The tools and frameworks Jagat shares are not textbook theories—they are practical, disciplined, and immediately applicable.'
  },
  {
    id: 'rev-7',
    type: 'text',
    name: 'Priya Sharma',
    role: 'Corporate Leader & Consultant',
    category: 'advisors',
    image: null,
    monogram: 'PS',
    tag: 'Life & Leadership Architecture',
    source: 'Mastermind Graduate',
    timeAgo: 'Verified Client',
    quote: 'For years I was managing high-stakes projects, but my own personal life and mindset were completely burned out. Jagat helped me install a clean, disciplined personal operating system that finally gave me and my family total peace of mind.'
  },
  {
    id: 'rev-8',
    type: 'text',
    name: 'Sunita Verma',
    role: 'Homemaker & Family Decision Maker',
    category: 'homemakers',
    image: null,
    monogram: 'SV',
    tag: 'Family Harmony & Inner Clarity',
    source: 'Mentorship Client',
    timeAgo: 'Verified Client',
    quote: 'Jagat explained life transformation, emotional resilience, and communication in such a humane, logical, and dignified way. Today, I lead our household decisions with total confidence and zero anxiety.'
  },
  {
    id: 'rev-9',
    type: 'text',
    name: 'Amitabh Joshi',
    role: 'Senior Banking Executive',
    category: 'advisors',
    image: null,
    monogram: 'AJ',
    tag: 'Stress Mastery & Life Alignment',
    source: 'Direct Mentorship',
    timeAgo: 'Verified Client',
    quote: 'High earnings in banking come with relentless stress and internal friction. Jagat Turkiya’s 10-week framework is the only system that eliminated my anxiety and gave me unshakeable mental clarity. His psychological approach to personal transformation is extraordinary.'
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

// ==========================================
// 4. FAQS STORE (CONTACT & MASTERMIND)
// ==========================================

export const defaultMastermindFaqs = [
  {
    id: 'mm-faq-1',
    question: "Who is The Mastermind specifically built for?",
    answer: "The Mastermind is crafted for driven leaders, corporate professionals, entrepreneurs, and seekers who have achieved external milestones but are facing internal ceilings, burnout, or a lack of deep fulfillment. It is for anyone who wants an unshakeable, systematic personal operating system to master their mindset, conquer self-doubt, and live with decisive clarity and permanent peace of mind."
  },
  {
    id: 'mm-faq-2',
    question: "What makes Jagat Turkiya's coaching methodology unique?",
    answer: "Jagat's approach is not generic motivational hype. Synthesized from 15+ years in high-stakes enterprise IT, 5 published books, and 1,500+ private mentorship sessions, his framework uncovers subconscious blind spots, silences inner fear, and installs practical, daily behavioral architecture tailored to your life."
  },
  {
    id: 'mm-faq-3',
    question: "How are the sessions and handholding conducted?",
    answer: "You go through a structured 10-week intensive curriculum, paired with private 1-on-1 diagnostic sessions with Jagat Turkiya. Following the 10 weeks, you receive continuous handholding support till 6 months to review your execution, adapt your blueprint, and resolve any real-world hurdles."
  },
  {
    id: 'mm-faq-4',
    question: "What is the weekly time commitment required?",
    answer: "Approximately 2 to 3 hours per week. This includes the strategic session, execution of your practical worksheets, and periodic one-on-one reviews. The program is built for busy executives with zero busywork."
  },
  {
    id: 'mm-faq-5',
    question: "How do I enroll or check eligibility?",
    answer: "Click the 'Apply for Mastermind' or 'Book Consultation' button below to schedule an initial diagnostic conversation. We review your current situation to ensure the program is a mutual fit before enrollment."
  }
];

export const defaultContactFaqs = [
  {
    id: 'contact-faq-1',
    question: "How do I schedule a consultation?",
    answer: "Submit your details using the form on this page or email us at hello@apkacoach.com. Our team will get back to you within 24 hours to schedule your session."
  },
  {
    id: 'contact-faq-2',
    question: "Can I book Jagat Turkiya for keynote speaking or events?",
    answer: "Yes. Jagat is available for keynote speaking, corporate workshops, and leadership seminars in India and internationally."
  },
  {
    id: 'contact-faq-3',
    question: "How do I request a copy of the books?",
    answer: "Mention the book title in your message along with your delivery address or email, and our team will assist you with access."
  },
  {
    id: 'contact-faq-4',
    question: "Is my inquiry kept confidential?",
    answer: "Yes, 100%. All communications, inquiries, and personal details are strictly private and confidential."
  }
];

export function getFaqs() {
  try {
    const cached = localStorage.getItem('jt_cms_faqs');
    if (cached) return JSON.parse(cached);
    const initial = {
      mastermind: defaultMastermindFaqs,
      contact: defaultContactFaqs
    };
    localStorage.setItem('jt_cms_faqs', JSON.stringify(initial));
    return initial;
  } catch {
    return {
      mastermind: defaultMastermindFaqs,
      contact: defaultContactFaqs
    };
  }
}

export function saveFaq({ type, id, question, answer }) {
  const all = getFaqs();
  const list = all[type] || [];
  let updatedList;
  if (!id) {
    const newFaq = {
      id: `${type}-faq-${Date.now()}`,
      question: question.trim(),
      answer: answer.trim()
    };
    updatedList = [...list, newFaq];
  } else {
    updatedList = list.map(item => item.id === id ? { ...item, question: question.trim(), answer: answer.trim() } : item);
  }
  const updatedAll = { ...all, [type]: updatedList };
  localStorage.setItem('jt_cms_faqs', JSON.stringify(updatedAll));
  window.dispatchEvent(new Event('jt_cms_updated'));
  return updatedAll;
}

export function deleteFaq(type, id) {
  const all = getFaqs();
  const list = all[type] || [];
  const updatedList = list.filter(item => item.id !== id);
  const updatedAll = { ...all, [type]: updatedList };
  localStorage.setItem('jt_cms_faqs', JSON.stringify(updatedAll));
  window.dispatchEvent(new Event('jt_cms_updated'));
  return updatedAll;
}

// ==========================================
// 5. MASTERMIND COHORT & CURRICULUM STORE
// ==========================================

export const defaultCurriculumWeeks = [
  {
    id: 'week-1',
    num: "Week 01",
    title: "Know Your Identity & Core Drives",
    desc: "Discover what truly drives your decisions beneath social conditioning. Use deep diagnostic question frameworks to unlock self-awareness, radical honesty, and personal alignment."
  },
  {
    id: 'week-2',
    num: "Week 02",
    title: "Dismantling Inner Friction & Bottlenecks",
    desc: "Identify and silence the 'Black Dragon' of self-doubt, chronic hesitation, and imposter anxiety that drains your mental energy and stalls progress."
  },
  {
    id: 'week-3',
    num: "Week 03",
    title: "Multi-Horizon Life & Purpose Architecture",
    desc: "Define what genuine fulfillment and peace look like across three clear horizons: immediate mental calm, medium-term family milestones, and long-term legacy."
  },
  {
    id: 'week-4',
    num: "Week 04",
    title: "Emotional Resilience & High-Pressure Mastery",
    desc: "Master emotional grounding under high-stakes conditions. Learn psychological firewalls so external chaos, workplace friction, or crises never shake your internal calm."
  },
  {
    id: 'week-5',
    num: "Week 05",
    title: "Radical Focus & Mental Energy Audit",
    desc: "Eliminate decision fatigue and time-wasting commitments. Audit where your cognitive bandwidth leaks and protect your highest-leverage life priorities."
  },
  {
    id: 'week-6',
    num: "Week 06",
    title: "Authentic Leadership & Relationship Harmony",
    desc: "Restore honest communication and deep empathy in high-pressure family and professional relationships, removing unspoken friction and expectations."
  },
  {
    id: 'week-7',
    num: "Week 07",
    title: "High-Stakes Decision-Making Framework",
    desc: "Stop relying on emotional impulse or chronic overthinking. Install a stress-tested evaluation matrix to make bold, decisive life and career moves with absolute calm."
  },
  {
    id: 'week-8',
    num: "Week 08",
    title: "Your Custom Personal Life Blueprint",
    desc: "Synthesize your values, energy cycles, family priorities, and long-term vision into a single, actionable personal operating manual built exclusively for you."
  },
  {
    id: 'week-9',
    num: "Week 09",
    title: "Hands-On Habit Execution & Daily Cadence",
    desc: "Put transformation into daily motion. Build non-negotiable morning and evening anchors, emotional self-check protocols, and structured personal accountability."
  },
  {
    id: 'week-10',
    num: "Week 10",
    title: "Your Permanent Operating System",
    desc: "Integrate every tool into an unshakeable way of living—giving you permanent clarity, fearless execution, and unshakeable peace of mind for the next 6 months and beyond."
  }
];

export function getMastermindDetails() {
  try {
    const cached = localStorage.getItem('jt_cms_mastermind');
    if (cached) return JSON.parse(cached);
    const initial = {
      weeks: defaultCurriculumWeeks
    };
    localStorage.setItem('jt_cms_mastermind', JSON.stringify(initial));
    return initial;
  } catch {
    return {
      weeks: defaultCurriculumWeeks
    };
  }
}

export function saveMastermindCohort(cohortData) {
  const current = getMastermindDetails();
  const updated = {
    ...current,
    cohort: { ...current.cohort, ...cohortData }
  };
  localStorage.setItem('jt_cms_mastermind', JSON.stringify(updated));
  window.dispatchEvent(new Event('jt_cms_updated'));
  return updated;
}

export function saveCurriculumWeek(weekData) {
  const current = getMastermindDetails();
  let updatedWeeks;
  if (!weekData.id) {
    const newWeek = {
      ...weekData,
      id: 'week-' + Date.now(),
      num: weekData.num || `Week ${(current.weeks.length + 1).toString().padStart(2, '0')}`
    };
    updatedWeeks = [...current.weeks, newWeek];
  } else {
    updatedWeeks = current.weeks.map(w => w.id === weekData.id ? { ...w, ...weekData } : w);
  }
  const updated = { ...current, weeks: updatedWeeks };
  localStorage.setItem('jt_cms_mastermind', JSON.stringify(updated));
  window.dispatchEvent(new Event('jt_cms_updated'));
  return updated;
}

export function deleteCurriculumWeek(id) {
  const current = getMastermindDetails();
  const updatedWeeks = current.weeks.filter(w => w.id !== id);
  const updated = { ...current, weeks: updatedWeeks };
  localStorage.setItem('jt_cms_mastermind', JSON.stringify(updated));
  window.dispatchEvent(new Event('jt_cms_updated'));
  return updated;
}

// ==========================================
// 6. HOMEPAGE HERO & TIMES SQUARE STATS STORE
// ==========================================

export const defaultHeroAndStats = {
  heroTitle: "Shifting Perspectives. Rewiring Minds.",
  heroTitleHighlight: "Transforming Human Lives.",
  heroLead: "Overcome deep-seated internal roadblocks, silence self-doubt, and discover decisive clarity for your life, relationships, and leadership with Jagat Turkiya — a globally recognized Transformation Coach who has transformed over 15,000 lives across 9 countries.",
  ctaPrimaryText: "Explore Mastermind",
  ctaPrimaryLink: "/mastermind",
  ctaSecondaryText: "Book Consultation",
  ctaSecondaryLink: "/contact",
  timesSquareTitle: "Featured on Times Square, New York City",
  timesSquareSubtitle: "Spotlighted on the global digital marquee in Times Square, NYC for excellence in transformational coaching.",
  timesSquareStoryTitle: "Global Recognition: Times Square, New York",
  timesSquareStoryPara1: "In 2025, Jagat Singh Turkiya was spotlighted on the digital marquee in Times Square, NYC by Topmate’s Creator Club for excellence in life and mindset transformation.",
  timesSquareStoryPara2: "From overcoming acute personal adversity to having his work projected in the center of Manhattan, Jagat’s journey is living proof: authentic transformation and disciplined execution transcend all boundaries.",
  timesSquareImageWide: "./assets/images/times-square-wide.webp",
  timesSquareImageClose: "./assets/images/times-square-close.webp",
  seminarImage: "./assets/images/coach/jagat-coach-seminar.jpg",
  mastermindImage: "./assets/images/coach/jagat-mentor-desk.jpg",
  coachProfileImage: "./assets/images/coach/jagat-hero-portrait.png",
  stat1Val: "Times Sq.",
  stat1Label: "New York City",
  stat2Val: "Topmate",
  stat2Label: "Creator Club",
  stat3Val: "15,000+",
  stat3Label: "Lives Impacted"
};

export function getHeroAndTimesSquare() {
  try {
    const cached = localStorage.getItem('jt_cms_home_stats');
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed.timesSquareStoryTitle === "From Walking 4 km Daily to the Heart of Manhattan" || (parsed.timesSquareStoryPara1 && parsed.timesSquareStoryPara1.includes('2024'))) {
        parsed.timesSquareStoryTitle = defaultHeroAndStats.timesSquareStoryTitle;
        parsed.timesSquareStoryPara1 = defaultHeroAndStats.timesSquareStoryPara1;
        parsed.timesSquareStoryPara2 = defaultHeroAndStats.timesSquareStoryPara2;
        localStorage.setItem('jt_cms_home_stats', JSON.stringify(parsed));
      }
      return { ...defaultHeroAndStats, ...parsed };
    }
    localStorage.setItem('jt_cms_home_stats', JSON.stringify(defaultHeroAndStats));
    return defaultHeroAndStats;
  } catch {
    return defaultHeroAndStats;
  }
}

export function saveHeroAndTimesSquare(data) {
  const current = getHeroAndTimesSquare();
  const updated = { ...current, ...data };
  localStorage.setItem('jt_cms_home_stats', JSON.stringify(updated));
  window.dispatchEvent(new Event('jt_cms_updated'));
  return updated;
}

// ==========================================
// 7. DIRECT CONTACT & ADVISORY INFO STORE
// ==========================================

export const defaultContactInfo = {
  email: "hello@apkacoach.com",
  phone: "",
  whatsapp: "",
  location: "New Delhi, India",
  availability: "Available for in-person consultations in New Delhi and virtual sessions worldwide.",
  responseHours: "Quick response within 24 business hours.",
  topmateUrl: "https://topmate.io/jagatturkiya",
  wealthCompassUrl: "https://yourwealthcompass.in"
};

export function getContactInfo() {
  try {
    const cached = localStorage.getItem('jt_cms_contact_info');
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed.phone && (parsed.phone.includes('98765') || parsed.phone === '+91 98765 43210')) {
        parsed.phone = "";
      }
      if (parsed.whatsapp && (parsed.whatsapp.includes('98765') || parsed.whatsapp === '+91 98765 43210')) {
        parsed.whatsapp = "";
      }
      localStorage.setItem('jt_cms_contact_info', JSON.stringify(parsed));
      return { ...defaultContactInfo, ...parsed };
    }
    localStorage.setItem('jt_cms_contact_info', JSON.stringify(defaultContactInfo));
    return defaultContactInfo;
  } catch {
    return defaultContactInfo;
  }
}

export function saveContactInfo(data) {
  const current = getContactInfo();
  const updated = { ...current, ...data };
  localStorage.setItem('jt_cms_contact_info', JSON.stringify(updated));
  window.dispatchEvent(new Event('jt_cms_updated'));
  return updated;
}
