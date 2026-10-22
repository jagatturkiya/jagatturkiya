import React, { useState, useRef } from 'react';
import { Upload, X, Crop, Camera, Image as ImageIcon } from 'lucide-react';
import ImageCropperModal from './ImageCropperModal';

export default function ImageDropzone({
  value,
  onChange,
  label = "Upload Image",
  shape = 'rect', // 'circle' or 'rect'
  aspectRatio = 1,
  crop = true
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [cropperOpen, setCropperOpen] = useState(false);
  const [tempImageSrc, setTempImageSrc] = useState(null);
  const fileInputRef = useRef(null);

  const processFile = (file) => {
    if (!file || !file.type.startsWith('image/')) {
      alert('Please select a valid image file (PNG, JPG, WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      if (crop) {
        setTempImageSrc(dataUrl);
        setCropperOpen(true);
      } else {
        optimizeAndSave(dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const optimizeAndSave = (dataUrl) => {
    const img = new Image();
    img.onload = () => {
      const maxWidth = 1200;
      const maxHeight = 1200;
      let width = img.width;
      let height = img.height;

      if (width > maxWidth || height > maxHeight) {
        if (width > height) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        } else {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const optimizedDataUrl = canvas.toDataURL(shape === 'circle' ? 'image/png' : 'image/jpeg', 0.88);
      onChange(optimizedDataUrl);
    };
    img.onerror = () => {
      onChange(dataUrl);
    };
    img.src = dataUrl;
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
    // reset input so same file can be selected again
    e.target.value = '';
  };

  const handleOpenExistingCrop = () => {
    if (!value) return;
    setTempImageSrc(value);
    setCropperOpen(true);
  };

  return (
    <div style={{ marginBottom: '1.25rem' }}>
      {label && (
        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>
          {label}
        </label>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />

      {/* CIRCLE PROFILE PHOTO MODE */}
      {shape === 'circle' ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0' }}>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{
              position: 'relative',
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              backgroundColor: '#141414',
              border: `2px ${value ? 'solid' : 'dashed'} ${isDragging ? '#38bdf8' : 'rgba(255, 255, 255, 0.2)'}`,
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
              transition: 'border-color 0.2s, transform 0.2s'
            }}
          >
            {value ? (
              <>
                <img
                  src={value}
                  alt="Profile Avatar"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                  }}
                />
                {/* Hover Overlay */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.65)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    opacity: 0,
                    transition: 'opacity 0.2s',
                    color: '#ffffff'
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                >
                  <Camera size={18} />
                  <span style={{ fontSize: '0.68rem', fontWeight: 600 }}>Change</span>
                </div>
              </>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  color: isDragging ? '#38bdf8' : '#888888'
                }}
              >
                <Camera size={22} />
                <span style={{ fontSize: '0.7rem', fontWeight: 600, textAlign: 'center', padding: '0 8px' }}>
                  {isDragging ? 'Drop Here' : 'Add Photo'}
                </span>
              </div>
            )}
          </div>

          {/* Action buttons under circle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {value ? 'Upload New' : 'Browse Photo'}
            </button>

            {value && crop && (
              <button
                type="button"
                onClick={handleOpenExistingCrop}
                style={{
                  backgroundColor: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  color: '#38bdf8',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Crop size={12} />
                <span>Crop</span>
              </button>
            )}

            {value && (
              <button
                type="button"
                onClick={() => onChange('')}
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  color: '#ef4444',
                  padding: '0.35rem 0.6rem',
                  borderRadius: '6px',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      ) : (
        /* RECTANGULAR MODE */
        <div>
          {value ? (
            <div style={{
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
              backgroundColor: '#121212',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              height: '180px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img
                src={value}
                alt="Uploaded preview"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80';
                }}
              />

              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.55)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                opacity: 0,
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0'}
              >
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    border: 'none',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Change
                </button>
                {crop && (
                  <button
                    type="button"
                    onClick={handleOpenExistingCrop}
                    style={{
                      backgroundColor: 'rgba(56, 189, 248, 0.9)',
                      color: '#000000',
                      border: 'none',
                      padding: '0.45rem 0.85rem',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Crop size={13} />
                    <span>Crop</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => onChange('')}
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.9)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.45rem 0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              style={{
                border: `2px dashed ${isDragging ? '#38bdf8' : 'rgba(255, 255, 255, 0.18)'}`,
                backgroundColor: isDragging ? 'rgba(56, 189, 248, 0.05)' : '#0d0d0d',
                borderRadius: '10px',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'border-color 0.2s, background-color 0.2s'
              }}
            >
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.75rem',
                color: '#ffffff'
              }}>
                <Upload size={18} />
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                Drag and drop an image here, or <span style={{ textDecoration: 'underline', color: '#38bdf8' }}>browse</span>
              </div>
              <div style={{ fontSize: '0.74rem', color: '#666666' }}>
                Supports PNG, JPG, WEBP (stored automatically in database)
              </div>
            </div>
          )}
        </div>
      )}

      {/* Interactive Crop Modal */}
      {cropperOpen && tempImageSrc && (
        <ImageCropperModal
          imageSrc={tempImageSrc}
          shape={shape}
          aspectRatio={aspectRatio}
          onCrop={(croppedDataUrl) => {
            onChange(croppedDataUrl);
            setTempImageSrc(null);
            setCropperOpen(false);
          }}
          onClose={() => {
            setTempImageSrc(null);
            setCropperOpen(false);
          }}
        />
      )}
    </div>
  );
}
