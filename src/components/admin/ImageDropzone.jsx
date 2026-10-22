import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

export default function ImageDropzone({ value, onChange, label = "Upload Image" }) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const processFile = (file) => {
    if (!file || !file.type.startsWith('image/')) {
      alert('Please select a valid image file (PNG, JPG, WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;

      // Optimize image through HTML5 Canvas so it stays fast and lightweight in storage (< 300KB)
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

        const optimizedDataUrl = canvas.toDataURL('image/jpeg', 0.86);
        onChange(optimizedDataUrl);
      };
      img.onerror = () => {
        onChange(dataUrl);
      };
      img.src = dataUrl;
    };
    reader.readAsDataURL(file);
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
  };

  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>
        {label}
      </label>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />

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
            backgroundColor: 'rgba(0, 0, 0, 0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
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
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Change Image
            </button>
            <button
              type="button"
              onClick={() => onChange('')}
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.9)',
                color: '#ffffff',
                border: 'none',
                padding: '0.5rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
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
            border: `2px dashed ${isDragging ? '#ffffff' : 'rgba(255, 255, 255, 0.18)'}`,
            backgroundColor: isDragging ? 'rgba(255, 255, 255, 0.05)' : '#0d0d0d',
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
  );
}
