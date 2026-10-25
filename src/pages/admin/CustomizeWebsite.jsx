import React, { useState, useEffect } from 'react';
import {
  Edit3,
  Camera,
  Check,
  X,
  Plus,
  Trash2,
  ExternalLink,
  Monitor,
  Smartphone,
  Eye,
  Sparkles,
  Layers,
  Image as ImageIcon,
  ArrowRight,
  Crop
} from 'lucide-react';
import {
  getHeroAndTimesSquare,
  saveHeroAndTimesSquare,
  getMastermindDetails,
  saveCurriculumWeek,
  deleteCurriculumWeek
} from '../../lib/cmsStore';
import ImageDropzone from '../../components/admin/ImageDropzone';

export default function CustomizeWebsite() {
  const [activeTab, setActiveTab] = useState('homepage'); // 'homepage' | 'mastermind' | 'media'
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop' | 'mobile'

  // Data states
  const [homeData, setHomeData] = useState(() => getHeroAndTimesSquare());
  const [mmData, setMmData] = useState(() => getMastermindDetails());

  // Editing drawer state
  const [activeEditor, setActiveEditor] = useState(null);
  // activeEditor format: { type: 'hero_headline' | 'hero_lead' | 'hero_ctas' | 'ts_header' | 'ts_story' | 'ts_stats' | 'ts_images' | 'seminar_image' | 'mm_week' | 'media_item', data: any }
  const [draftData, setDraftData] = useState({});
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [successToast, setSuccessToast] = useState('');

  useEffect(() => {
    const handleUpdate = () => {
      setHomeData(getHeroAndTimesSquare());
      setMmData(getMastermindDetails());
    };
    window.addEventListener('jt_cms_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('jt_cms_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const showToast = (msg) => {
    setSuccessToast(msg);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const openEditor = (type, initialData) => {
    setActiveEditor(type);
    setDraftData(initialData || {});
  };

  const closeEditor = () => {
    setActiveEditor(null);
    setDraftData({});
  };

  const handleSaveHomeField = (fieldsToSave) => {
    const updated = saveHeroAndTimesSquare(fieldsToSave);
    setHomeData(updated);
    closeEditor();
    showToast('Updated live on website!');
  };

  const handleSaveWeekModule = (e) => {
    e.preventDefault();
    if (!draftData.title || !draftData.desc) {
      alert('Please fill in module title and description.');
      return;
    }
    saveCurriculumWeek(draftData);
    setMmData(getMastermindDetails());
    closeEditor();
    showToast('Curriculum module updated live!');
  };

  const handleDeleteModule = (id, title) => {
    if (window.confirm(`Delete module "${title}"?`)) {
      deleteCurriculumWeek(id);
      setMmData(getMastermindDetails());
      showToast('Module removed.');
    }
  };

  const handleOpenAddModule = () => {
    const nextNum = `Week ${(mmData.weeks.length + 1).toString().padStart(2, '0')}`;
    openEditor('mm_week', {
      id: '',
      num: nextNum,
      title: '',
      desc: ''
    });
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', paddingBottom: '4rem' }}>
      {/* Toast Notification */}
      {saveSuccess && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#0a2318',
          border: '1px solid #10b981',
          color: '#ffffff',
          padding: '0.85rem 1.4rem',
          borderRadius: '10px',
          zIndex: 3000,
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontSize: '0.9rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)'
        }}>
          <Check size={18} color="#10b981" />
          <span>{successToast || 'Changes updated live!'}</span>
        </div>
      )}

      {/* Top Control Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        padding: '1.25rem 1.5rem',
        backgroundColor: '#0a0a0a',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '14px',
        marginBottom: '1.75rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '4px' }}>
            <h1 style={{ margin: 0, fontSize: '1.35rem', color: '#ffffff', fontWeight: 800 }}>
              Customize Website &amp; Media
            </h1>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              color: '#38bdf8',
              fontSize: '0.72rem',
              fontWeight: 600,
              padding: '2px 8px',
              borderRadius: '9999px'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38bdf8', display: 'inline-block' }} />
              Visual In-Context Editor
            </span>
          </div>
          <p style={{ margin: 0, color: '#888888', fontSize: '0.82rem' }}>
            Hover and click any section, headline, CTA button, or image to edit live with instant preview.
          </p>
        </div>

        {/* Tab & Viewport Switchers */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {/* Page Tabs */}
          <div style={{
            display: 'flex',
            backgroundColor: '#141414',
            borderRadius: '8px',
            padding: '3px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <button
              type="button"
              onClick={() => setActiveTab('homepage')}
              style={{
                backgroundColor: activeTab === 'homepage' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                color: activeTab === 'homepage' ? '#ffffff' : '#a1a1aa',
                border: 'none',
                padding: '0.45rem 0.9rem',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <span>🏠 Homepage</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('mastermind')}
              style={{
                backgroundColor: activeTab === 'mastermind' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                color: activeTab === 'mastermind' ? '#ffffff' : '#a1a1aa',
                border: 'none',
                padding: '0.45rem 0.9rem',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <span>🎓 Mastermind &amp; Curriculum</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('media')}
              style={{
                backgroundColor: activeTab === 'media' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                color: activeTab === 'media' ? '#ffffff' : '#a1a1aa',
                border: 'none',
                padding: '0.45rem 0.9rem',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <span>🖼️ Media &amp; Photos</span>
            </button>
          </div>

          {/* Viewport switch */}
          <div style={{
            display: 'flex',
            backgroundColor: '#141414',
            borderRadius: '8px',
            padding: '3px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <button
              type="button"
              onClick={() => setViewMode('desktop')}
              style={{
                backgroundColor: viewMode === 'desktop' ? '#ffffff' : 'transparent',
                color: viewMode === 'desktop' ? '#000000' : '#888888',
                border: 'none',
                padding: '0.45rem',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}
              title="Desktop View"
            >
              <Monitor size={15} />
            </button>
            <button
              type="button"
              onClick={() => setViewMode('mobile')}
              style={{
                backgroundColor: viewMode === 'mobile' ? '#ffffff' : 'transparent',
                color: viewMode === 'mobile' ? '#000000' : '#888888',
                border: 'none',
                padding: '0.45rem',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}
              title="Mobile Smartphone View"
            >
              <Smartphone size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Canvas Container */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative'
      }}>
        {/* Viewport Frame */}
        <div style={{
          width: viewMode === 'mobile' ? '410px' : '100%',
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          border: viewMode === 'mobile' ? '10px solid #1a1a1a' : '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: viewMode === 'mobile' ? '36px' : '16px',
          overflow: 'hidden',
          backgroundColor: '#050505',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)'
        }}>

          {/* TAB 1: HOMEPAGE VISUAL BUILDER */}
          {activeTab === 'homepage' && (
            <div>
              {/* Section 1: Hero */}
              <div style={{
                position: 'relative',
                padding: '4rem 2rem',
                textAlign: 'center',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'radial-gradient(circle at 50% 20%, rgba(255,255,255,0.03) 0%, rgba(5,5,5,1) 80%)'
              }}>
                <div style={{ maxWidth: '820px', margin: '0 auto' }}>
                  {/* Hero Headline Editable Zone */}
                  <EditableBlock
                    label="Edit Headline"
                    onClick={() => openEditor('hero_headline', {
                      heroTitle: homeData.heroTitle,
                      heroTitleHighlight: homeData.heroTitleHighlight
                    })}
                  >
                    <h1 style={{
                      fontFamily: "'Instrument Sans', sans-serif",
                      fontSize: viewMode === 'mobile' ? '1.85rem' : 'clamp(2.4rem, 4.5vw, 3.6rem)',
                      fontWeight: 800,
                      lineHeight: 1.15,
                      color: '#ffffff',
                      margin: '0 0 1.25rem 0',
                      letterSpacing: '-0.02em'
                    }}>
                      {homeData.heroTitle || 'Transform Your Perspective with'}{' '}
                      <span style={{
                        fontFamily: "'Hedvig Letters Serif', serif",
                        fontStyle: 'italic',
                        fontWeight: 400,
                        display: 'block',
                        color: '#f4f4f5',
                        marginTop: '4px'
                      }}>
                        {homeData.heroTitleHighlight || 'Clarity, Focus & Action'}
                      </span>
                    </h1>
                  </EditableBlock>

                  {/* Sub-headline / Lead Editable Zone */}
                  <EditableBlock
                    label="Edit Lead Paragraph"
                    onClick={() => openEditor('hero_lead', { heroLead: homeData.heroLead })}
                  >
                    <p style={{
                      color: '#a1a1aa',
                      fontSize: viewMode === 'mobile' ? '0.92rem' : '1.12rem',
                      lineHeight: 1.65,
                      maxWidth: '680px',
                      margin: '0 auto 2rem auto'
                    }}>
                      {homeData.heroLead || 'Overcome limiting beliefs, eliminate friction, and build an unshakeable direction for your career, wealth, and life with Jagat Turkiya.'}
                    </p>
                  </EditableBlock>

                  {/* CTA Buttons Editable Zone */}
                  <EditableBlock
                    label="Edit CTA Buttons & Links"
                    onClick={() => openEditor('hero_ctas', {
                      ctaPrimaryText: homeData.ctaPrimaryText,
                      ctaPrimaryLink: homeData.ctaPrimaryLink,
                      ctaSecondaryText: homeData.ctaSecondaryText,
                      ctaSecondaryLink: homeData.ctaSecondaryLink
                    })}
                  >
                    <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                      <span style={{
                        backgroundColor: '#ffffff',
                        color: '#000000',
                        padding: '0.75rem 1.6rem',
                        borderRadius: '9999px',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        {homeData.ctaPrimaryText || 'Explore Mastermind'}
                        <ArrowRight size={14} />
                      </span>
                      <span style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        padding: '0.75rem 1.6rem',
                        borderRadius: '9999px',
                        fontSize: '0.88rem',
                        fontWeight: 600
                      }}>
                        {homeData.ctaSecondaryText || 'Book Consultation'}
                      </span>
                    </div>
                  </EditableBlock>
                </div>
              </div>

              {/* Section 2: Times Square NYC Recognition */}
              <div style={{ padding: '3.5rem 1.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                {/* Section Header Editable */}
                <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem' }}>
                  <EditableBlock
                    label="Edit Section Header"
                    onClick={() => openEditor('ts_header', {
                      timesSquareTitle: homeData.timesSquareTitle,
                      timesSquareSubtitle: homeData.timesSquareSubtitle
                    })}
                  >
                    <h2 style={{
                      fontSize: viewMode === 'mobile' ? '1.5rem' : '2.1rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      margin: '0 0 0.6rem',
                      letterSpacing: '-0.02em'
                    }}>
                      {homeData.timesSquareTitle || 'Featured on Times Square, New York City'}
                    </h2>
                    <p style={{ color: '#888888', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
                      {homeData.timesSquareSubtitle || 'Spotlighted on the global digital marquee in Times Square, NYC for excellence in transformational leadership.'}
                    </p>
                  </EditableBlock>
                </div>

                {/* Showcase Photos Editable */}
                <EditableBlock
                  label="Change Times Square Photos"
                  onClick={() => openEditor('ts_images', {
                    timesSquareImageWide: homeData.timesSquareImageWide,
                    timesSquareImageClose: homeData.timesSquareImageClose
                  })}
                >
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: viewMode === 'mobile' ? '1fr' : '1.4fr 1fr',
                    gap: '1rem',
                    marginBottom: '2rem'
                  }}>
                    <div style={{ height: '220px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <img
                        src={homeData.timesSquareImageWide || "./assets/images/times-square-wide.webp"}
                        alt="Times Square Wide"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ height: '220px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <img
                        src={homeData.timesSquareImageClose || "./assets/images/times-square-close.webp"}
                        alt="Times Square Close"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </EditableBlock>

                {/* Narrative & Stats Box */}
                <div style={{
                  backgroundColor: '#0a0a0a',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '2rem'
                }}>
                  {/* Story Text */}
                  <EditableBlock
                    label="Edit Story Narrative"
                    onClick={() => openEditor('ts_story', {
                      timesSquareStoryTitle: homeData.timesSquareStoryTitle,
                      timesSquareStoryPara1: homeData.timesSquareStoryPara1,
                      timesSquareStoryPara2: homeData.timesSquareStoryPara2
                    })}
                  >
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: '0 0 1rem' }}>
                      {homeData.timesSquareStoryTitle || 'Global Recognition: Times Square, New York'}
                    </h3>
                    <p style={{ color: '#a1a1aa', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '0.85rem' }}>
                      {homeData.timesSquareStoryPara1}
                    </p>
                    <p style={{ color: '#a1a1aa', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>
                      {homeData.timesSquareStoryPara2}
                    </p>
                  </EditableBlock>

                  {/* Impact Stats */}
                  <div style={{ marginTop: '1.75rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <EditableBlock
                      label="Edit Impact Badges & Numbers"
                      onClick={() => openEditor('ts_stats', {
                        stat1Val: homeData.stat1Val,
                        stat1Label: homeData.stat1Label,
                        stat2Val: homeData.stat2Val,
                        stat2Label: homeData.stat2Label,
                        stat3Val: homeData.stat3Val,
                        stat3Label: homeData.stat3Label
                      })}
                    >
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: viewMode === 'mobile' ? '1fr' : 'repeat(3, 1fr)',
                        gap: '1rem'
                      }}>
                        <div style={{ backgroundColor: '#141414', padding: '1rem', borderRadius: '10px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                          <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff' }}>{homeData.stat1Val || 'Times Sq.'}</div>
                          <div style={{ fontSize: '0.74rem', color: '#888888', marginTop: '3px' }}>{homeData.stat1Label || 'New York City'}</div>
                        </div>
                        <div style={{ backgroundColor: '#141414', padding: '1rem', borderRadius: '10px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                          <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff' }}>{homeData.stat2Val || 'Topmate'}</div>
                          <div style={{ fontSize: '0.74rem', color: '#888888', marginTop: '3px' }}>{homeData.stat2Label || 'Creator Club'}</div>
                        </div>
                        <div style={{ backgroundColor: '#141414', padding: '1rem', borderRadius: '10px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                          <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff' }}>{homeData.stat3Val || '15,000+'}</div>
                          <div style={{ fontSize: '0.74rem', color: '#888888', marginTop: '3px' }}>{homeData.stat3Label || 'Lives Impacted'}</div>
                        </div>
                      </div>
                    </EditableBlock>
                  </div>
                </div>
              </div>

              {/* Section 3: Seminar / Live Mentorship Split */}
              <div style={{ padding: '3.5rem 1.75rem' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: viewMode === 'mobile' ? '1fr' : '1fr 1.2fr',
                  gap: '2rem',
                  alignItems: 'center'
                }}>
                  <EditableBlock
                    label="Change Seminar Photo"
                    onClick={() => openEditor('seminar_image', { seminarImage: homeData.seminarImage })}
                  >
                    <div style={{ height: '240px', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <img
                        src={homeData.seminarImage || "./assets/images/seminar.webp"}
                        alt="Seminar"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </EditableBlock>

                  <div>
                    <h2 style={{ fontSize: '1.65rem', fontWeight: 700, color: '#ffffff', margin: '0 0 1rem' }}>
                      Transformation That Lasts a Lifetime
                    </h2>
                    <p style={{ color: '#a1a1aa', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '0.8rem' }}>
                      Jagat Turkiya is an internationally recognized transformational coach and mentor dedicated to helping high earners, founders, and leaders eliminate friction and master unshakeable direction.
                    </p>
                    <p style={{ color: '#a1a1aa', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                      With over 15 years of coaching experience, 200+ workshops, and 15,000+ lives transformed across 9 countries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MASTERMIND CURRICULUM ROADMAP BUILDER */}
          {activeTab === 'mastermind' && (
            <div style={{ padding: '3.5rem 2rem' }}>
              <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
                <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.6rem' }}>
                  The 10-Week Executive Roadmap
                </h2>
                <p style={{ color: '#888888', fontSize: '0.92rem', margin: 0 }}>
                  Click any module card below to edit its week number, title, or description.
                </p>
                <div style={{ marginTop: '1.25rem' }}>
                  <button
                    type="button"
                    onClick={handleOpenAddModule}
                    className="btn btn-white"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.55rem 1.25rem',
                      fontSize: '0.82rem',
                      cursor: 'pointer'
                    }}
                  >
                    <Plus size={15} />
                    <span>Add New Module</span>
                  </button>
                </div>
              </div>

              {/* Modules Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: viewMode === 'mobile' ? '1fr' : 'repeat(auto-fill, minmax(310px, 1fr))',
                gap: '1.25rem'
              }}>
                {mmData.weeks.map((week, idx) => (
                  <div
                    key={week.id || idx}
                    style={{
                      position: 'relative',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '12px',
                      padding: '1.5rem',
                      transition: 'border-color 0.2s, transform 0.2s'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '0.6rem'
                    }}>
                      <span style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: '#38bdf8',
                        letterSpacing: '0.04em'
                      }}>
                        {week.num}
                      </span>

                      <div style={{ display: 'flex', gap: '0.35rem' }}>
                        <button
                          type="button"
                          onClick={() => openEditor('mm_week', week)}
                          style={{
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: '#ffffff',
                            padding: '4px 8px',
                            borderRadius: '5px',
                            fontSize: '0.72rem',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '3px'
                          }}
                        >
                          <Edit3 size={11} />
                          <span>Edit</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteModule(week.id, week.title)}
                          style={{
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.25)',
                            color: '#ef4444',
                            padding: '4px 6px',
                            borderRadius: '5px',
                            fontSize: '0.72rem',
                            cursor: 'pointer'
                          }}
                        >
                          <Trash2 size={11} />
                        </button>
                      </div>
                    </div>

                    <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                      {week.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.84rem', color: '#a1a1aa', lineHeight: 1.6 }}>
                      {week.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: BRAND MEDIA & PHOTOS GALLERY */}
          {activeTab === 'media' && (
            <div style={{ padding: '3.5rem 2rem' }}>
              <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.6rem' }}>
                  Brand Media &amp; Photos Hub
                </h2>
                <p style={{ color: '#888888', fontSize: '0.92rem', margin: 0 }}>
                  Manage and crop photos used across the website. Profile pictures support circular crop frames.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: viewMode === 'mobile' ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem'
              }}>
                {/* 1. Coach Jagat Turkiya Profile Avatar (Circular) */}
                <div style={{
                  backgroundColor: '#0a0a0a',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                    Coach Jagat Turkiya Avatar
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#888888', marginBottom: '1.25rem' }}>
                    Circular profile picture with built-in round cropper
                  </div>
                  <ImageDropzone
                    value={homeData.coachProfileImage}
                    onChange={(newUrl) => handleSaveHomeField({ coachProfileImage: newUrl })}
                    label=""
                    shape="circle"
                    aspectRatio={1}
                    crop={true}
                  />
                </div>

                {/* 2. Times Square Wide Photo */}
                <div style={{
                  backgroundColor: '#0a0a0a',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '1.75rem'
                }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                    Times Square Wide Marquee
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#888888', marginBottom: '1.25rem' }}>
                    Primary New York City showcase image
                  </div>
                  <ImageDropzone
                    value={homeData.timesSquareImageWide}
                    onChange={(newUrl) => handleSaveHomeField({ timesSquareImageWide: newUrl })}
                    label=""
                    shape="rect"
                    aspectRatio={1.5}
                    crop={true}
                  />
                </div>

                {/* 3. Times Square Close Photo */}
                <div style={{
                  backgroundColor: '#0a0a0a',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '1.75rem'
                }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                    Times Square Close-Up Marquee
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#888888', marginBottom: '1.25rem' }}>
                    Secondary New York City billboard perspective
                  </div>
                  <ImageDropzone
                    value={homeData.timesSquareImageClose}
                    onChange={(newUrl) => handleSaveHomeField({ timesSquareImageClose: newUrl })}
                    label=""
                    shape="rect"
                    aspectRatio={1.3}
                    crop={true}
                  />
                </div>

                {/* 4. Live Seminar & Keynote Photo */}
                <div style={{
                  backgroundColor: '#0a0a0a',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '1.75rem'
                }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                    Stage Keynote &amp; Seminar Photo
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#888888', marginBottom: '1.25rem' }}>
                    Featured on the "Transformation That Lasts" section
                  </div>
                  <ImageDropzone
                    value={homeData.seminarImage}
                    onChange={(newUrl) => handleSaveHomeField({ seminarImage: newUrl })}
                    label=""
                    shape="rect"
                    aspectRatio={1.4}
                    crop={true}
                  />
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Slide-Over Editing Drawer */}
      {activeEditor && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(6px)',
          zIndex: 2500,
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '480px',
            height: '100%',
            backgroundColor: '#0d0d0d',
            borderLeft: '1px solid rgba(255, 255, 255, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '-15px 0 50px rgba(0, 0, 0, 0.8)',
            animation: 'slideInRight 0.25s ease-out'
          }}>
            {/* Drawer Header */}
            <div style={{
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#ffffff', fontWeight: 700 }}>
                  {activeEditor === 'hero_headline' && 'Edit Hero Headline'}
                  {activeEditor === 'hero_lead' && 'Edit Lead Paragraph'}
                  {activeEditor === 'hero_ctas' && 'Edit Call To Actions'}
                  {activeEditor === 'ts_header' && 'Edit Times Square Header'}
                  {activeEditor === 'ts_story' && 'Edit Story Narrative'}
                  {activeEditor === 'ts_stats' && 'Edit Impact Counter Stats'}
                  {activeEditor === 'ts_images' && 'Change Times Square Photos'}
                  {activeEditor === 'seminar_image' && 'Change Seminar Photo'}
                  {activeEditor === 'mm_week' && (draftData.id ? 'Edit Curriculum Module' : 'Add Curriculum Module')}
                </h3>
                <span style={{ fontSize: '0.74rem', color: '#888888' }}>
                  Changes will apply live immediately
                </span>
              </div>
              <button
                type="button"
                onClick={closeEditor}
                style={{ background: 'none', border: 'none', color: '#888888', cursor: 'pointer', padding: '4px' }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Drawer Body */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
              {/* 1. Hero Headline Form */}
              {activeEditor === 'hero_headline' && (
                <form onSubmit={(e) => { e.preventDefault(); handleSaveHomeField(draftData); }}>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Headline Line 1
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={80}
                      value={draftData.heroTitle || ''}
                      onChange={e => setDraftData({ ...draftData, heroTitle: e.target.value })}
                      placeholder="Headline Line 1"
                      style={drawerInputStyle}
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Headline Highlight (Serif Accent)
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={80}
                      value={draftData.heroTitleHighlight || ''}
                      onChange={e => setDraftData({ ...draftData, heroTitleHighlight: e.target.value })}
                      placeholder="Headline highlight"
                      style={drawerInputStyle}
                    />
                  </div>

                  <DrawerActions onClose={closeEditor} />
                </form>
              )}

              {/* 2. Hero Lead Form */}
              {activeEditor === 'hero_lead' && (
                <form onSubmit={(e) => { e.preventDefault(); handleSaveHomeField(draftData); }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Lead Paragraph
                    </label>
                    <textarea
                      rows={4}
                      maxLength={300}
                      value={draftData.heroLead || ''}
                      onChange={e => setDraftData({ ...draftData, heroLead: e.target.value })}
                      placeholder="Sub-headline / lead paragraph..."
                      style={{ ...drawerInputStyle, resize: 'vertical', lineHeight: 1.6 }}
                    />
                  </div>

                  <DrawerActions onClose={closeEditor} />
                </form>
              )}

              {/* 3. Hero CTAs Form */}
              {activeEditor === 'hero_ctas' && (
                <form onSubmit={(e) => { e.preventDefault(); handleSaveHomeField(draftData); }}>
                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Primary Button Text
                    </label>
                    <input
                      type="text"
                      maxLength={40}
                      value={draftData.ctaPrimaryText || ''}
                      onChange={e => setDraftData({ ...draftData, ctaPrimaryText: e.target.value })}
                      placeholder="Primary button label"
                      style={drawerInputStyle}
                    />
                  </div>

                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Primary Button Link URL
                    </label>
                    <input
                      type="text"
                      maxLength={100}
                      value={draftData.ctaPrimaryLink || ''}
                      onChange={e => setDraftData({ ...draftData, ctaPrimaryLink: e.target.value })}
                      placeholder="/mastermind"
                      style={drawerInputStyle}
                    />
                  </div>

                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Secondary Button Text
                    </label>
                    <input
                      type="text"
                      maxLength={40}
                      value={draftData.ctaSecondaryText || ''}
                      onChange={e => setDraftData({ ...draftData, ctaSecondaryText: e.target.value })}
                      placeholder="Secondary button label"
                      style={drawerInputStyle}
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Secondary Button Link URL
                    </label>
                    <input
                      type="text"
                      maxLength={100}
                      value={draftData.ctaSecondaryLink || ''}
                      onChange={e => setDraftData({ ...draftData, ctaSecondaryLink: e.target.value })}
                      placeholder="/contact"
                      style={drawerInputStyle}
                    />
                  </div>

                  <DrawerActions onClose={closeEditor} />
                </form>
              )}

              {/* 4. Times Square Header */}
              {activeEditor === 'ts_header' && (
                <form onSubmit={(e) => { e.preventDefault(); handleSaveHomeField(draftData); }}>
                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Section Title
                    </label>
                    <input
                      type="text"
                      maxLength={100}
                      value={draftData.timesSquareTitle || ''}
                      onChange={e => setDraftData({ ...draftData, timesSquareTitle: e.target.value })}
                      placeholder="Section title"
                      style={drawerInputStyle}
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Section Subtitle
                    </label>
                    <textarea
                      rows={3}
                      maxLength={140}
                      value={draftData.timesSquareSubtitle || ''}
                      onChange={e => setDraftData({ ...draftData, timesSquareSubtitle: e.target.value })}
                      placeholder="Section subtitle"
                      style={{ ...drawerInputStyle, resize: 'vertical', lineHeight: 1.6 }}
                    />
                  </div>

                  <DrawerActions onClose={closeEditor} />
                </form>
              )}

              {/* 5. Times Square Photos */}
              {activeEditor === 'ts_images' && (
                <div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Wide Marquee Photo
                    </label>
                    <ImageDropzone
                      value={draftData.timesSquareImageWide}
                      onChange={(newUrl) => setDraftData({ ...draftData, timesSquareImageWide: newUrl })}
                      label=""
                      shape="rect"
                      aspectRatio={1.5}
                      crop={true}
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Close-Up Photo
                    </label>
                    <ImageDropzone
                      value={draftData.timesSquareImageClose}
                      onChange={(newUrl) => setDraftData({ ...draftData, timesSquareImageClose: newUrl })}
                      label=""
                      shape="rect"
                      aspectRatio={1.3}
                      crop={true}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                    <button
                      type="button"
                      onClick={closeEditor}
                      style={{ backgroundColor: 'transparent', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#a1a1aa', padding: '0.55rem 1.1rem', borderRadius: '9999px', fontSize: '0.84rem', cursor: 'pointer' }}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSaveHomeField(draftData)}
                      className="btn btn-white"
                      style={{ padding: '0.55rem 1.4rem', fontSize: '0.84rem', cursor: 'pointer' }}
                    >
                      Save Photos Live
                    </button>
                  </div>
                </div>
              )}

              {/* 6. Seminar Photo */}
              {activeEditor === 'seminar_image' && (
                <div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Stage / Seminar Photo
                    </label>
                    <ImageDropzone
                      value={draftData.seminarImage}
                      onChange={(newUrl) => setDraftData({ ...draftData, seminarImage: newUrl })}
                      label=""
                      shape="rect"
                      aspectRatio={1.4}
                      crop={true}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                    <button
                      type="button"
                      onClick={closeEditor}
                      style={{ backgroundColor: 'transparent', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#a1a1aa', padding: '0.55rem 1.1rem', borderRadius: '9999px', fontSize: '0.84rem', cursor: 'pointer' }}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSaveHomeField(draftData)}
                      className="btn btn-white"
                      style={{ padding: '0.55rem 1.4rem', fontSize: '0.84rem', cursor: 'pointer' }}
                    >
                      Save Photo Live
                    </button>
                  </div>
                </div>
              )}

              {/* 7. Times Square Story */}
              {activeEditor === 'ts_story' && (
                <form onSubmit={(e) => { e.preventDefault(); handleSaveHomeField(draftData); }}>
                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Story Heading
                    </label>
                    <input
                      type="text"
                      maxLength={120}
                      value={draftData.timesSquareStoryTitle || ''}
                      onChange={e => setDraftData({ ...draftData, timesSquareStoryTitle: e.target.value })}
                      placeholder="Narrative heading"
                      style={drawerInputStyle}
                    />
                  </div>

                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Story Paragraph 1
                    </label>
                    <textarea
                      rows={4}
                      maxLength={500}
                      value={draftData.timesSquareStoryPara1 || ''}
                      onChange={e => setDraftData({ ...draftData, timesSquareStoryPara1: e.target.value })}
                      placeholder="Story paragraph 1..."
                      style={{ ...drawerInputStyle, resize: 'vertical', lineHeight: 1.55 }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Story Paragraph 2
                    </label>
                    <textarea
                      rows={4}
                      maxLength={500}
                      value={draftData.timesSquareStoryPara2 || ''}
                      onChange={e => setDraftData({ ...draftData, timesSquareStoryPara2: e.target.value })}
                      placeholder="Story paragraph 2..."
                      style={{ ...drawerInputStyle, resize: 'vertical', lineHeight: 1.55 }}
                    />
                  </div>

                  <DrawerActions onClose={closeEditor} />
                </form>
              )}

              {/* 8. Impact Counter Stats */}
              {activeEditor === 'ts_stats' && (
                <form onSubmit={(e) => { e.preventDefault(); handleSaveHomeField(draftData); }}>
                  {/* Stat 1 */}
                  <div style={{ padding: '0.85rem', backgroundColor: '#141414', borderRadius: '8px', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>Badge 1</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <input
                        type="text"
                        maxLength={30}
                        value={draftData.stat1Val || ''}
                        onChange={e => setDraftData({ ...draftData, stat1Val: e.target.value })}
                        placeholder="Stat value"
                        style={drawerInputStyle}
                      />
                      <input
                        type="text"
                        maxLength={40}
                        value={draftData.stat1Label || ''}
                        onChange={e => setDraftData({ ...draftData, stat1Label: e.target.value })}
                        placeholder="Stat label"
                        style={drawerInputStyle}
                      />
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div style={{ padding: '0.85rem', backgroundColor: '#141414', borderRadius: '8px', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>Badge 2</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <input
                        type="text"
                        maxLength={30}
                        value={draftData.stat2Val || ''}
                        onChange={e => setDraftData({ ...draftData, stat2Val: e.target.value })}
                        placeholder="Stat value"
                        style={drawerInputStyle}
                      />
                      <input
                        type="text"
                        maxLength={40}
                        value={draftData.stat2Label || ''}
                        onChange={e => setDraftData({ ...draftData, stat2Label: e.target.value })}
                        placeholder="Stat label"
                        style={drawerInputStyle}
                      />
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div style={{ padding: '0.85rem', backgroundColor: '#141414', borderRadius: '8px', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>Badge 3</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <input
                        type="text"
                        maxLength={30}
                        value={draftData.stat3Val || ''}
                        onChange={e => setDraftData({ ...draftData, stat3Val: e.target.value })}
                        placeholder="Stat value"
                        style={drawerInputStyle}
                      />
                      <input
                        type="text"
                        maxLength={40}
                        value={draftData.stat3Label || ''}
                        onChange={e => setDraftData({ ...draftData, stat3Label: e.target.value })}
                        placeholder="Stat label"
                        style={drawerInputStyle}
                      />
                    </div>
                  </div>

                  <DrawerActions onClose={closeEditor} />
                </form>
              )}

              {/* 9. Mastermind Module Form */}
              {activeEditor === 'mm_week' && (
                <form onSubmit={handleSaveWeekModule}>
                  <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '0.85rem', marginBottom: '1.2rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                        Week Tag
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={15}
                        value={draftData.num || ''}
                        onChange={e => setDraftData({ ...draftData, num: e.target.value })}
                        placeholder="Week 01"
                        style={drawerInputStyle}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                        Module Title *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={60}
                        value={draftData.title || ''}
                        onChange={e => setDraftData({ ...draftData, title: e.target.value })}
                        placeholder="Module title"
                        style={drawerInputStyle}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Module Description *
                    </label>
                    <textarea
                      required
                      rows={5}
                      maxLength={350}
                      value={draftData.desc || ''}
                      onChange={e => setDraftData({ ...draftData, desc: e.target.value })}
                      placeholder="Module description..."
                      style={{ ...drawerInputStyle, resize: 'vertical', lineHeight: 1.6 }}
                    />
                  </div>

                  <DrawerActions onClose={closeEditor} />
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Reusable Hoverable & Clickable Editable Wrapper
function EditableBlock({ label, onClick, children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        position: 'relative',
        cursor: 'pointer',
        transition: 'all 0.18s ease',
        outline: hovered ? '2px dashed #38bdf8' : '2px dashed transparent',
        outlineOffset: '5px',
        borderRadius: '8px'
      }}
    >
      {children}

      {/* Floating Edit Pill on Hover */}
      {hovered && (
        <div style={{
          position: 'absolute',
          top: '-14px',
          right: '8px',
          zIndex: 100,
          backgroundColor: '#38bdf8',
          color: '#000000',
          padding: '3px 10px',
          borderRadius: '9999px',
          fontSize: '0.72rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          boxShadow: '0 4px 12px rgba(56, 189, 248, 0.4)',
          pointerEvents: 'none',
          animation: 'fadeIn 0.15s ease-out'
        }}>
          <Edit3 size={11} />
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}

function DrawerActions({ onClose }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
      <button
        type="button"
        onClick={onClose}
        style={{
          backgroundColor: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: '#a1a1aa',
          padding: '0.55rem 1.1rem',
          borderRadius: '9999px',
          fontSize: '0.84rem',
          fontWeight: 500,
          cursor: 'pointer'
        }}
      >
        Cancel
      </button>
      <button
        type="submit"
        className="btn btn-white"
        style={{
          padding: '0.55rem 1.4rem',
          fontSize: '0.84rem',
          cursor: 'pointer'
        }}
      >
        Save Live
      </button>
    </div>
  );
}

const drawerInputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  backgroundColor: '#141414',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '0.88rem',
  outline: 'none'
};
