import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Check, X } from 'lucide-react';

export default function ImageCropperModal({
  imageSrc,
  shape = 'circle', // 'circle' or 'rect'
  aspectRatio = 1,  // 1 for 1:1, 16/9, etc.
  onCrop,
  onClose
}) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imgLoaded, setImgLoaded] = useState(false);

  const canvasRef = useRef(null);
  const imgRef = useRef(new Image());

  const VIEW_SIZE = 360; // preview canvas square size

  useEffect(() => {
    const img = imgRef.current;
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      // Calculate initial scale to fit the crop area
      const minDimension = Math.min(img.width, img.height);
      const initialScale = (VIEW_SIZE * 0.75) / minDimension;
      setScale(Math.max(initialScale, 0.4));
      setPosition({ x: 0, y: 0 });
      setImgLoaded(true);
    };
    img.src = imageSrc;
  }, [imageSrc]);

  useEffect(() => {
    if (!imgLoaded) return;
    drawPreview();
  }, [imgLoaded, scale, position, shape]);

  const drawPreview = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = imgRef.current;

    ctx.clearRect(0, 0, VIEW_SIZE, VIEW_SIZE);

    // 1. Draw dark background
    ctx.fillStyle = '#0f0f0f';
    ctx.fillRect(0, 0, VIEW_SIZE, VIEW_SIZE);

    // 2. Draw scaled & translated image
    ctx.save();
    ctx.translate(VIEW_SIZE / 2 + position.x, VIEW_SIZE / 2 + position.y);
    ctx.scale(scale, scale);
    ctx.drawImage(img, -img.width / 2, -img.height / 2);
    ctx.restore();

    // 3. Draw dark overlay with transparent cutout mask
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
    ctx.fillRect(0, 0, VIEW_SIZE, VIEW_SIZE);

    ctx.globalCompositeOperation = 'destination-out';

    const cropBoxSize = shape === 'circle' ? 240 : 260;
    const cropBoxHeight = shape === 'circle' ? 240 : Math.round(260 / (aspectRatio || 1));
    const cropX = (VIEW_SIZE - cropBoxSize) / 2;
    const cropY = (VIEW_SIZE - cropBoxHeight) / 2;

    if (shape === 'circle') {
      ctx.beginPath();
      ctx.arc(VIEW_SIZE / 2, VIEW_SIZE / 2, cropBoxSize / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.beginPath();
      // rounded rect cutout
      const r = 8;
      ctx.moveTo(cropX + r, cropY);
      ctx.lineTo(cropX + cropBoxSize - r, cropY);
      ctx.quadraticCurveTo(cropX + cropBoxSize, cropY, cropX + cropBoxSize, cropY + r);
      ctx.lineTo(cropX + cropBoxSize, cropY + cropBoxHeight - r);
      ctx.quadraticCurveTo(cropX + cropBoxSize, cropY + cropBoxHeight, cropX + cropBoxSize - r, cropY + cropBoxHeight);
      ctx.lineTo(cropX + r, cropY + cropBoxHeight);
      ctx.quadraticCurveTo(cropX, cropY + cropBoxHeight, cropX, cropY + cropBoxHeight - r);
      ctx.lineTo(cropX, cropY + r);
      ctx.quadraticCurveTo(cropX, cropY, cropX + r, cropY);
      ctx.closePath();
      ctx.fill();
    }

    ctx.restore();

    // 4. Draw crop outline ring
    ctx.save();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#38bdf8';
    ctx.setLineDash([6, 6]);

    if (shape === 'circle') {
      ctx.beginPath();
      ctx.arc(VIEW_SIZE / 2, VIEW_SIZE / 2, cropBoxSize / 2, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      ctx.strokeRect(cropX, cropY, cropBoxSize, cropBoxHeight);
    }
    ctx.restore();
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX - position.x, y: e.touches[0].clientY - position.y });
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    setPosition({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleApplyCrop = () => {
    const img = imgRef.current;
    if (!img) return;

    // Output crop at high quality (e.g. 600x600 for avatar or 1200 for banner)
    const outWidth = shape === 'circle' ? 600 : 800;
    const outHeight = shape === 'circle' ? 600 : Math.round(800 / (aspectRatio || 1));

    const cropBoxSize = shape === 'circle' ? 240 : 260;
    const cropBoxHeight = shape === 'circle' ? 240 : Math.round(260 / (aspectRatio || 1));

    const outCanvas = document.createElement('canvas');
    outCanvas.width = outWidth;
    outCanvas.height = outHeight;
    const outCtx = outCanvas.getContext('2d');

    // Scale ratio from preview canvas to final output
    const scaleRatio = outWidth / cropBoxSize;

    outCtx.save();

    if (shape === 'circle') {
      outCtx.beginPath();
      outCtx.arc(outWidth / 2, outHeight / 2, outWidth / 2, 0, Math.PI * 2);
      outCtx.clip();
    }

    outCtx.translate(outWidth / 2 + position.x * scaleRatio, outHeight / 2 + position.y * scaleRatio);
    outCtx.scale(scale * scaleRatio, scale * scaleRatio);
    outCtx.drawImage(img, -img.width / 2, -img.height / 2);
    outCtx.restore();

    const croppedDataUrl = outCanvas.toDataURL(shape === 'circle' ? 'image/png' : 'image/jpeg', 0.88);
    onCrop(croppedDataUrl);
    onClose();
  };

  const handleReset = () => {
    const img = imgRef.current;
    if (!img) return;
    const minDimension = Math.min(img.width, img.height);
    const initialScale = (VIEW_SIZE * 0.75) / minDimension;
    setScale(Math.max(initialScale, 0.4));
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.88)',
      backdropFilter: 'blur(8px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div style={{
        backgroundColor: '#0d0d0d',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '16px',
        width: '100%',
        maxWidth: '440px',
        overflow: 'hidden',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)'
      }}>
        {/* Header */}
        <div style={{
          padding: '1.15rem 1.4rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.05rem', color: '#ffffff', fontWeight: 700 }}>
              {shape === 'circle' ? 'Crop Profile Photo' : 'Crop & Adjust Image'}
            </h3>
            <p style={{ margin: '2px 0 0', fontSize: '0.74rem', color: '#888888' }}>
              Drag to position &amp; use slider to zoom
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#888888',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Canvas Workspace */}
        <div style={{
          padding: '1.25rem',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#050505'
        }}>
          <canvas
            ref={canvasRef}
            width={VIEW_SIZE}
            height={VIEW_SIZE}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              width: '100%',
              maxWidth: `${VIEW_SIZE}px`,
              height: 'auto',
              aspectRatio: '1',
              borderRadius: '10px',
              cursor: isDragging ? 'grabbing' : 'grab',
              touchAction: 'none'
            }}
          />
        </div>

        {/* Controls: Zoom slider & Reset */}
        <div style={{ padding: '1rem 1.4rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
            <button
              type="button"
              onClick={() => setScale(s => Math.max(s * 0.85, 0.2))}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                width: '32px',
                height: '32px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Zoom Out"
            >
              <ZoomOut size={15} />
            </button>

            <input
              type="range"
              min="0.2"
              max="3"
              step="0.02"
              value={scale}
              onChange={e => setScale(parseFloat(e.target.value))}
              style={{
                flex: 1,
                accentColor: '#38bdf8',
                cursor: 'pointer'
              }}
            />

            <button
              type="button"
              onClick={() => setScale(s => Math.min(s * 1.15, 3))}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                width: '32px',
                height: '32px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Zoom In"
            >
              <ZoomIn size={15} />
            </button>

            <button
              type="button"
              onClick={handleReset}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#a1a1aa',
                padding: '0 0.6rem',
                height: '32px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.74rem',
                cursor: 'pointer'
              }}
              title="Reset position and zoom"
            >
              <RotateCcw size={13} />
              <span>Reset</span>
            </button>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
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
              type="button"
              onClick={handleApplyCrop}
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                border: 'none',
                padding: '0.55rem 1.4rem',
                borderRadius: '9999px',
                fontSize: '0.84rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem'
              }}
            >
              <Check size={14} />
              <span>Done &amp; Crop</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
