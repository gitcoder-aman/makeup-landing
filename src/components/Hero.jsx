import React from 'react';
import { FaCalendarAlt, FaGem, FaStar, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export function Hero({ onOpenBooking, onExploreServices }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-atmosphere">
        <div className="glow-sphere sphere-1" />
        <div className="glow-sphere sphere-2" />
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <div className="hero-text-content">
            <div className="hero-eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Premier Beauty Parlour & Nail Lounge</span>
            </div>

            <h1 className="hero-title">
              Your Beauty,<br />
              <span className="title-serif-italic">Your Signature</span> Glow.
            </h1>

            <p className="hero-description">
              Indulge in bespoke beauty artistry crafted by Lakme Certified Artist Ankita Kumari.
              From show-stopping acrylic and hard gel nail extensions to timeless bridal couture
              and handcrafted organic mehndi, we elevate your natural radiance.
            </p>

            <div className="hero-action-buttons">
              <button
                className="btn-hero-primary"
                onClick={() => onOpenBooking()}
              >
                <FaCalendarAlt />
                <span>Book Your Appointment</span>
              </button>
              <button
                className="btn-hero-secondary"
                onClick={onExploreServices}
              >
                <span>Explore Services</span>
                <FaArrowRight />
              </button>
            </div>

            {/* Verified Trust Badges */}
            <div className="hero-trust-bar">
              <div className="trust-item">
                <div className="trust-icon-wrap">
                  <FaStar className="gold-star" />
                </div>
                <div className="trust-meta">
                  <strong>Lakme Certified</strong>
                  <span>Professional Artist</span>
                </div>
              </div>

              <div className="trust-divider" />

              <div className="trust-item">
                <div className="trust-icon-wrap">
                  <FaGem className="rose-gem" />
                </div>
                <div className="trust-meta">
                  <strong>Luxury Nails</strong>
                  <span>From ₹800 & Gel Art</span>
                </div>
              </div>

              <div className="trust-divider" />

              <div className="trust-item">
                <div className="trust-icon-wrap">
                  <FaCheckCircle className="green-check" />
                </div>
                <div className="trust-meta">
                  <strong>5+ Years</strong>
                  <span>Bridal & Studio Exp.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Visuals */}
          <div className="hero-visual-composition">
            <div className="visual-frame-main">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
                alt="Radiant Luxury Beauty Editorial"
                className="hero-main-img"
                loading="eager"
              />
              <div className="frame-overlay-tint" />
            </div>

            {/* Floating Editorial Card 1: Nail Art Highlight */}
            <div className="hero-floating-card card-top-right">
              <div className="floating-nail-preview">
                <img
                  src="/nail_collection/IMG_1124.PNG"
                  alt="Nail Extension Highlight"
                  className="preview-thumbnail"
                />
                <div className="preview-details">
                  <span className="preview-label">New Service</span>
                  <span className="preview-name">Nail Extensions</span>
                  <span className="preview-price">Starting from ₹800</span>
                </div>
              </div>
            </div>

            {/* Floating Editorial Card 2: Artist Credential */}
            <div className="hero-floating-card card-bottom-left">
              <div className="floating-credential">
                <div className="artist-avatar-mini">
                  <img
                    src="https://res.cloudinary.com/drsrdkhn7/image/upload/v1769354881/WhatsApp_Image_2026-01-17_at_13.22.39_jwhyxb.jpg"
                    alt="Ankita Kumari"
                  />
                </div>
                <div>
                  <div className="credential-rating">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <p className="credential-quote">"Lakme Certified Artistry"</p>
                  <span className="credential-sub">Ankita Kumari • 500+ Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
