import React from 'react';
import { REVIEWS } from '../data/reviewsData';
import { FaStar, FaQuoteLeft, FaHeart } from 'react-icons/fa';

export function Testimonials() {
  return (
    <section id="reviews" className="testimonials-section">
      <div className="section-container">
        {/* Header */}
        <div className="section-header-editorial">
          <div className="tag-pill">
            <FaHeart className="pill-icon" />
            <span>Client Love</span>
          </div>
          <h2 className="section-title">
            Words From Our <span className="title-serif-italic">Radiant Clients</span>
          </h2>
          <p className="section-subtitle">
            Authentic experiences shared by the beautiful brides and clients who trusted us with their special moments.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {REVIEWS.map((review) => (
            <div key={review.id} className="testimonial-card">
              <div className="testimonial-top">
                <div className="star-rating">
                  {Array(review.stars).fill(0).map((_, i) => (
                    <FaStar key={i} className="star-gold" />
                  ))}
                </div>
                <FaQuoteLeft className="quote-mark" />
              </div>

              <p className="testimonial-text">"{review.text}"</p>

              <div className="testimonial-footer">
                <div className="client-avatar-placeholder">
                  {review.name.charAt(0)}
                </div>
                <div className="client-meta">
                  <span className="client-name">{review.name}</span>
                  <span className="client-role">{review.role} • {review.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
