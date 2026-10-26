import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

export default function HlsPlayer({ 
  src = 'https://pub-ba6edddb861846b39535d2d0cabfeeea.r2.dev/Jagat%20Video%202%20compressed.mp4',
  poster = '',
  autoPlay = true,
  trimEndSeconds = 0
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const hlsRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [customSrc, setCustomSrc] = useState(src);
  const [mutedAutoplayActive, setMutedAutoplayActive] = useState(false);

  // Lock forward/backward seeking
  const lastAllowedTimeRef = useRef(0);
  const controlsTimeoutRef = useRef(null);

  // Check query parameter ?video= or ?v= on mount
  useEffect(() => {
    try {
      const hashQuery = window.location.hash.split('?')[1];
      const directQuery = window.location.search.replace(/^\?/, '');
      const queryStr = hashQuery || directQuery;
      if (queryStr) {
        const params = new URLSearchParams(queryStr);
        const urlVideo = params.get('video') || params.get('v');
        if (urlVideo) {
          setCustomSrc(decodeURIComponent(urlVideo));
        }
      }
    } catch {
      // Fallback
    }
  }, []);

  useEffect(() => {
    if (src) setCustomSrc(src);
  }, [src]);

  // Attempt autoplay safely handling browser policies
  const attemptAutoPlay = () => {
    const video = videoRef.current;
    if (!video) return;

    // Check if autoplay requested
    const hashQuery = window.location.hash.split('?')[1] || '';
    const directQuery = window.location.search.replace(/^\?/, '');
    const queryStr = hashQuery || directQuery;
    const hasAutoplayParam = queryStr.includes('autoplay=1');
    const shouldAutoplay = autoPlay || hasAutoplayParam;

    if (!shouldAutoplay) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setMutedAutoplayActive(false);
        })
        .catch(() => {
          // Browser prevented unmuted autoplay -> initiate muted autoplay
          video.muted = true;
          setIsMuted(true);
          setMutedAutoplayActive(true);
          video.play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              // Both blocked, wait for user interaction
            });
        });
    }
  };

  // Auto unmute on first user touch/click anywhere on page
  useEffect(() => {
    const handleFirstInteraction = () => {
      const video = videoRef.current;
      if (video && video.muted) {
        video.muted = false;
        setIsMuted(false);
        setMutedAutoplayActive(false);
        video.volume = 1;
        setVolume(1);
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  // Sync fullscreen state & auto-lock orientation to landscape on mobile devices
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFull = !!(document.fullscreenElement || document.webkitFullscreenElement);
      setIsFullscreen(isFull);

      if (isFull) {
        // Auto-tilt: lock screen orientation to landscape
        if (window.screen?.orientation?.lock) {
          window.screen.orientation.lock('landscape').catch(() => {
            // Orientation lock fallback
          });
        }
      } else {
        // Unlock screen orientation back to normal/portrait
        if (window.screen?.orientation?.unlock) {
          try {
            window.screen.orientation.unlock();
          } catch {
            // Ignore
          }
        }
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Initialize HLS / Native video source
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !customSrc) return;

    // Reset seeking anchor
    lastAllowedTimeRef.current = 0;
    setCurrentTime(0);

    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    const isHls = customSrc.includes('.m3u8');

    if (isHls && Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 90
      });
      hlsRef.current = hls;

      hls.loadSource(customSrc);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        attemptAutoPlay();
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError();
              break;
            default:
              hls.destroy();
              break;
          }
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl') || !isHls) {
      // Native Safari HLS or regular MP4/video
      video.src = customSrc;
      
      const onLoaded = () => {
        attemptAutoPlay();
      };
      video.addEventListener('loadeddata', onLoaded, { once: true });
      video.addEventListener('canplay', onLoaded, { once: true });
      // In case metadata is already cached
      if (video.readyState >= 2) {
        attemptAutoPlay();
      }
    }

    // Safety timeout to trigger autoplay if events missed
    const timer = setTimeout(() => {
      attemptAutoPlay();
    }, 450);

    return () => {
      clearTimeout(timer);
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [customSrc]);

  // Anti-seeking enforcement & optional trimEnd cutoff
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const current = video.currentTime;
    const effectiveMax = (video.duration && !isNaN(video.duration) && trimEndSeconds > 0 && video.duration > trimEndSeconds)
      ? video.duration - trimEndSeconds
      : null;

    if (effectiveMax !== null && current >= effectiveMax) {
      video.pause();
      video.currentTime = effectiveMax;
      setIsPlaying(false);
      lastAllowedTimeRef.current = effectiveMax;
      setCurrentTime(effectiveMax);
      return;
    }

    if (current > lastAllowedTimeRef.current + 1.8 || current < lastAllowedTimeRef.current - 1.5) {
      video.currentTime = lastAllowedTimeRef.current;
    } else {
      lastAllowedTimeRef.current = current;
      setCurrentTime(current);
    }
  };

  const handleSeeking = () => {
    const video = videoRef.current;
    if (!video) return;

    const effectiveMax = (video.duration && !isNaN(video.duration) && trimEndSeconds > 0 && video.duration > trimEndSeconds)
      ? video.duration - trimEndSeconds
      : null;

    if (effectiveMax !== null && video.currentTime > effectiveMax) {
      video.currentTime = effectiveMax;
      return;
    }

    if (Math.abs(video.currentTime - lastAllowedTimeRef.current) > 1.2) {
      video.currentTime = lastAllowedTimeRef.current;
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay policy or error
      });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.muted = false;
      setIsMuted(false);
      video.volume = volume > 0 ? volume : 0.8;
      setVolume(volume > 0 ? volume : 0.8);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const toggleFullscreen = async () => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const isCurrentlyFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement);

    if (!isCurrentlyFullscreen) {
      try {
        if (container.requestFullscreen) {
          await container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
          await container.webkitRequestFullscreen();
        } else if (video.webkitEnterFullscreen) {
          // iOS Safari native fullscreen handles automatic landscape rotation
          video.webkitEnterFullscreen();
          setIsFullscreen(true);
          return;
        }

        setIsFullscreen(true);

        // Auto-tilt / lock screen orientation to landscape
        if (window.screen?.orientation?.lock) {
          window.screen.orientation.lock('landscape').catch(() => {});
        }
      } catch {
        if (video.webkitEnterFullscreen) {
          video.webkitEnterFullscreen();
          setIsFullscreen(true);
        }
      }
    } else {
      try {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          await document.webkitExitFullscreen();
        }
      } catch {
        // Fallback
      }
      setIsFullscreen(false);

      if (window.screen?.orientation?.unlock) {
        try {
          window.screen.orientation.unlock();
        } catch {
          // Ignore
        }
      }
    }
  };

  // Keyboard shortcut management: Block seeking, allow play/volume only
  const handleKeyDown = (e) => {
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown', 'j', 'l', 'J', 'L'].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    if (e.key === ' ' || e.key === 'k' || e.key === 'K') {
      e.preventDefault();
      togglePlay();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newVol = Math.min(1, volume + 0.1);
      setVolume(newVol);
      if (videoRef.current) {
        videoRef.current.volume = newVol;
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newVol = Math.max(0, volume - 0.1);
      setVolume(newVol);
      if (videoRef.current) {
        videoRef.current.volume = newVol;
        if (newVol === 0) {
          videoRef.current.muted = true;
          setIsMuted(true);
        }
      }
    } else if (e.key === 'm' || e.key === 'M') {
      e.preventDefault();
      toggleMute();
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      toggleFullscreen();
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3500);
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div 
      className="vsl-player-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        margin: '0 auto',
        borderRadius: '14px',
        overflow: 'hidden',
        background: '#000000',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95)',
        border: '1px solid rgba(255, 255, 255, 0.14)',
        userSelect: 'none',
        outline: 'none'
      }}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div 
        ref={containerRef}
        className="vsl-player-container"
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '56.25%', // 16:9 Aspect Ratio
          background: '#040405',
          cursor: isPlaying ? 'default' : 'pointer'
        }}
        onMouseMove={handleMouseMove}
        onClick={(e) => {
          if (!e.target.closest('.vsl-control-bar')) {
            if (isMuted && isPlaying) {
              toggleMute();
            } else {
              togglePlay();
            }
          }
        }}
      >
        {/* Unmute floating banner if playing muted */}
        {isPlaying && isMuted && (
          <div 
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
            }}
            style={{
              position: 'absolute',
              top: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 15,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(0, 0, 0, 0.82)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '24px',
              padding: '8px 16px',
              color: '#ffffff',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)'
            }}
          >
            <span>🔊 Video playing muted — Tap for sound</span>
          </div>
        )}

        {/* Video Element */}
        <video
          ref={videoRef}
          poster={poster}
          preload="metadata"
          playsInline
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking}
          onEnded={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />

        {/* Big Central Crisp White Play Button Overlay */}
        {!isPlaying && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 4,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '74px',
              height: '74px',
              borderRadius: '50%',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.75)',
              transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: 'scale(1)'
            }}>
              <svg 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="#080808"
                style={{ marginLeft: '4px' }}
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
        )}

        {/* Custom Monochrome Control Bar - NO SEEK BAR (Locked Progress) */}
        <div 
          className="vsl-control-bar"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '12px 18px',
            background: 'linear-gradient(to top, rgba(4, 5, 7, 0.95) 0%, rgba(4, 5, 7, 0.6) 70%, transparent 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            zIndex: 10,
            opacity: showControls || !isPlaying ? 1 : 0,
            transition: 'opacity 0.28s ease',
            pointerEvents: showControls || !isPlaying ? 'auto' : 'none'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left Controls: Play/Pause & Time Elapsed */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
                borderRadius: '6px',
                transition: 'opacity 0.2s, transform 0.15s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              {isPlaying ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                  <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              )}
            </button>

            {/* Time Elapsed (No Seeker - purely informational) */}
            <span style={{
              fontFamily: "'Inter', monospace",
              fontSize: '0.82rem',
              color: '#d4d4d8',
              letterSpacing: '0.04em',
              fontWeight: 500
            }}>
              {formatTime(currentTime)}
            </span>
          </div>

          {/* Right Controls: Volume Slider & Fullscreen */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Volume Control */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: isMuted ? '#ef4444' : '#ffffff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px',
                  transition: 'opacity 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                {isMuted || volume === 0 ? (
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <line x1="23" y1="9" x2="17" y2="15"></line>
                    <line x1="17" y1="9" x2="23" y2="15"></line>
                  </svg>
                ) : volume < 0.5 ? (
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  </svg>
                ) : (
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                  </svg>
                )}
              </button>

              {/* White Volume Slider */}
              <input
                type="range"
                min="0"
                max="1"
                step="0.02"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                aria-label="Volume Slider"
                style={{
                  width: '85px',
                  height: '4px',
                  accentColor: '#ffffff',
                  cursor: 'pointer',
                  borderRadius: '2px'
                }}
              />
            </div>

            {/* Fullscreen Toggle */}
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label="Toggle Fullscreen"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '6px',
                borderRadius: '6px',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              {isFullscreen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
