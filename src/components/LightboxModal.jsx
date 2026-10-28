import React, { useEffect, useCallback } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaCalendarAlt, FaGem } from 'react-icons/fa';

export function LightboxModal({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onNext,
  onPrev,
  onBookLook,
}) {
  const currentImage = images[currentIndex];

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen || !currentImage) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close Lightbox"
        >
          <FaTimes />
        </button>

        {/* Counter Badge */}
        <div className="lightbox-counter">
          <span>{currentIndex + 1}</span> / <span>{images.length}</span>
        </div>

        {/* Main Image Stage */}
        <div className="lightbox-stage">
          {images.length > 1 && (
            <button
              className="lightbox-nav-btn prev"
              onClick={onPrev}
              aria-label="Previous Look"
            >
              <FaChevronLeft />
            </button>
          )}

          <div className="lightbox-image-box">
            <img
              src={currentImage.src}
              alt={currentImage.title}
              className="lightbox-img"
            />
          </div>

          {images.length > 1 && (
            <button
              className="lightbox-nav-btn next"
              onClick={onNext}
              aria-label="Next Look"
            >
              <FaChevronRight />
            </button>
          )}
        </div>

        {/* Image Caption & Book CTA */}
        <div className="lightbox-caption-bar">
          <div className="lightbox-meta">
            <div className="caption-tag-row">
              <span className="caption-category">
                <FaGem className="meta-gem" /> {currentImage.categoryLabel || currentImage.category?.toUpperCase()}
              </span>
              {currentImage.tag && (
                <span className="caption-tag">{currentImage.tag}</span>
              )}
            </div>
            <h3 className="caption-title">{currentImage.title}</h3>
            {currentImage.price && (
              <span className="caption-price">{currentImage.price}</span>
            )}
          </div>

          <div className="lightbox-action">
            <button
              className="btn-lightbox-book"
              onClick={() => {
                onClose();
                onBookLook(currentImage.title);
              }}
            >
              <FaCalendarAlt />
              <span>Book This Look</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
