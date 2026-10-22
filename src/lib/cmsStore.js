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

// ==========================================
// 4. FAQS STORE (CONTACT & MASTERMIND)
// ==========================================

export const defaultMastermindFaqs = [
  {
    id: 'mm-faq-1',
    question: "Who is The Mastermind specifically built for?",
    answer: "The Mastermind is crafted for driven working professionals, financial practitioners, bankers, insurance advisors, and family wealth custodians who have money coming in and are ready to turn it into enduring, protected wealth. It is for anyone who wants an organized, systematic operating system to manage, protect, and multiply their capital with complete peace of mind."
  },
  {
    id: 'mm-faq-2',
    question: "Is this program about selling financial products or stocks?",
    answer: "No. Absolutely not. The Mastermind is an independent educational and strategic advisory framework. We do not sell insurance, mutual funds, or stocks, nor do we take commissions. Our sole objective is to give you the clarity, frameworks, and decision-making system to manage your own wealth independently."
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
    title: "Know Your Identity",
    desc: "Discover what drives you to do what you do. These simple question-based tools help you unlock financial clarity, personal transformation, and how each area of your life aligns."
  },
  {
    id: 'week-2',
    num: "Week 02",
    title: "Flow of Money & Silent Leakage",
    desc: "Map your true cash flow and plug unnoticed leaks. Understand the psychology behind your spending and install simple controls to keep your capital safe."
  },
  {
    id: 'week-3',
    num: "Week 03",
    title: "Multi-Horizon Financial Goals",
    desc: "Define what you want your money to accomplish across three clear timelines: immediate peace of mind, medium-term family milestones, and generational freedom."
  },
  {
    id: 'week-4',
    num: "Week 04",
    title: "Objective Investment Guidance",
    desc: "Stop reacting to market noise and stock tips. Learn a practical, objective framework to assess real risk capacity, time horizons, and asset quality."
  },
  {
    id: 'week-5',
    num: "Week 05",
    title: "Defensive Risk & Capital Moats",
    desc: "Master downside protection. Build unshakeable emergency buffers and insurance firewalls so market shocks never threaten your family’s security."
  },
  {
    id: 'week-6',
    num: "Week 06",
    title: "Cohesive Wealth Allocation",
    desc: "Connect scattered investments into one balanced ecosystem where liquid reserves, real estate, and equities work together seamlessly."
  },
  {
    id: 'week-7',
    num: "Week 07",
    title: "High-Stakes Decision Making",
    desc: "Eliminate emotional, impulsive financial choices. Install a stress-tested evaluation matrix to decide what to fund, cut, or scale with absolute calm."
  },
  {
    id: 'week-8',
    num: "Week 08",
    title: "Your Custom Financial Blueprint",
    desc: "Synthesize your unique cash flow, commitments, and family priorities into a single personalized strategy built exclusively for you."
  },
  {
    id: 'week-9',
    num: "Week 09",
    title: "Hands-On Execution & Restructuring",
    desc: "Put strategy into live action. Reorganize account allocations, automate capital defense protocols, and implement your blueprint step-by-step."
  },
  {
    id: 'week-10',
    num: "Week 10",
    title: "Your Permanent Operating System",
    desc: "Integrate every layer into an unshakeable operating system—giving you lifelong clarity, daily focus, and permanent financial peace of mind."
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
  heroTitle: "Transform Your Perspective with",
  heroTitleHighlight: "Clarity, Focus & Action",
  heroLead: "Overcome limiting beliefs, eliminate friction, and build an unshakeable direction for your career, wealth, and life with Jagat Turkiya.",
  ctaPrimaryText: "Explore Mastermind",
  ctaPrimaryLink: "/mastermind",
  ctaSecondaryText: "Book Consultation",
  ctaSecondaryLink: "/contact",
  timesSquareTitle: "Featured on Times Square, New York City",
  timesSquareSubtitle: "Spotlighted on the global digital marquee in Times Square, NYC for excellence in transformational leadership.",
  timesSquareStoryTitle: "From Walking 4 km Daily to the Heart of Manhattan",
  timesSquareStoryPara1: "In 2024, Jagat Singh Turkiya was spotlighted on the world-famous digital marquee in Times Square, New York City by Topmate’s Creator Club. This recognition honored him as an \"incredible transformation coach\" who has helped thousands of individuals overcome internal roadblocks and create lasting clarity in their lives and careers.",
  timesSquareStoryPara2: "For someone who once walked four kilometers every day simply to save ₹30 in bus fare, seeing his name and mission projected in the center of NYC stands as proof: with disciplined focus, genuine humility, and consistent execution, authentic work transcends every geographical boundary.",
  timesSquareImageWide: "./assets/images/times-square-wide.webp",
  timesSquareImageClose: "./assets/images/times-square-close.webp",
  seminarImage: "./assets/images/seminar.webp",
  mastermindImage: "./assets/images/mastermind-session.png",
  coachProfileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
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
    if (cached) return { ...defaultHeroAndStats, ...JSON.parse(cached) };
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
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  location: "New Delhi, India",
  availability: "Available for in-person consultations in New Delhi and virtual sessions worldwide.",
  responseHours: "Quick response within 24 business hours.",
  topmateUrl: "https://topmate.io/jagatturkiya",
  wealthCompassUrl: "https://yourwealthcompass.in"
};

export function getContactInfo() {
  try {
    const cached = localStorage.getItem('jt_cms_contact_info');
    if (cached) return { ...defaultContactInfo, ...JSON.parse(cached) };
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
