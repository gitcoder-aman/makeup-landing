import React, { useState } from 'react';
import { NAIL_SERVICES } from '../data/servicesData';
import { NAIL_GALLERY } from '../data/galleryData';
import { FaGem, FaClock, FaCheck, FaArrowRight, FaCalendarAlt, FaSearch } from 'react-icons/fa';

export function NailLounge({ onOpenBooking, onOpenLightbox }) {
  const [activeTab, setActiveTab] = useState('cards'); // 'cards' | 'guide'

  const comparisonData = [
    {
      name: 'Acrylic Nail Extension',
      price: 'Starting from ₹1,500',
      duration: '90 - 120 mins',
      hold: '4+ Weeks',
      strength: 'Maximum Durability',
      bestFor: 'Those wanting long, sculpted extensions with heavy nail art or stiletto/coffin shapes.',
    },
    {
      name: 'Hard Gel Extension',
      price: 'Starting from ₹1,500',
      duration: '90 - 110 mins',
      hold: '3 - 4 Weeks',
      strength: 'High Flexibility & Glass Gloss',
      bestFor: 'Clients with brittle or sensitive natural nails seeking an odorless, ultra-glossy finish.',
    },
    {
      name: 'Poly Gel Extension',
      price: '₹1,000',
      duration: '75 - 90 mins',
      hold: '3 - 4 Weeks',
      strength: 'Lightweight & Natural Strength',
      bestFor: 'Anyone wanting durable length without feeling any weight or heavy tension on the nail bed.',
    },
    {
      name: 'Soft Gel Tip Extension',
      price: '₹1,200',
      duration: '60 - 80 mins',
      hold: '3 - 4 Weeks',
      strength: 'Uniform Pre-contoured Gel',
      bestFor: 'Fast application with zero damage to the natural nail plate; easy soak-off removal.',
    },
    {
      name: 'Fake Tip Extension',
      price: '₹800',
      duration: '45 - 60 mins',
      hold: '2 - 3 Weeks',
      strength: 'Classic Quick Length',
      bestFor: 'Short-term parties, weddings, weekend trips, and budget-friendly immediate glamour.',
    },
    {
      name: 'Natural Nail Overlay',
      price: 'Starting from ₹800',
      duration: '45 - 60 mins',
      hold: '3+ Weeks',
      strength: 'Natural Plate Reinforcement',
      bestFor: 'Growing and reinforcing your natural nails without artificial tip length.',
    },
  ];

  return (
    <section id="nails" className="nail-lounge-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="tag-pill">
            <FaGem className="pill-icon" />
            <span>Dedicated Nail Studio</span>
          </div>
          <h2 className="section-title">
            The Glow <span className="title-serif-italic">Nail Lounge</span>
          </h2>
          <p className="section-subtitle">
            Precision sculpting, protective overlays, and runway-worthy nail extensions.
            Crafted with salon-grade, skin-friendly products and certified techniques.
          </p>

          {/* View Toggle */}
          <div className="nail-view-toggle">
            <button
              className={`toggle-tab-btn ${activeTab === 'cards' ? 'active' : ''}`}
              onClick={() => setActiveTab('cards')}
            >
              Services & Pricing
            </button>
            <button
              className={`toggle-tab-btn ${activeTab === 'guide' ? 'active' : ''}`}
              onClick={() => setActiveTab('guide')}
            >
              Extension Comparison Guide
            </button>
          </div>
        </div>

        {/* TAB 1: 6 SERVICE CARDS */}
        {activeTab === 'cards' && (
          <div className="nail-services-grid">
            {NAIL_SERVICES.map((service, index) => (
              <div key={service.id} className="nail-card">
                <div className="nail-card-image-wrap">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="nail-card-img"
                    loading="lazy"
                  />
                  <div className="nail-card-badge">{service.badge}</div>
                  <div className="nail-card-price-tag">{service.price}</div>
                </div>

                <div className="nail-card-body">
                  <div className="nail-meta-row">
                    <span className="nail-duration">
                      <FaClock /> {service.duration}
                    </span>
                    <span className="nail-num">0{index + 1}</span>
                  </div>

                  <h3 className="nail-title">{service.title}</h3>
                  <p className="nail-tagline">{service.tagline}</p>
                  <p className="nail-desc">{service.desc}</p>

                  <ul className="nail-features-list">
                    {service.features.map((feat, i) => (
                      <li key={i}>
                        <FaCheck className="feature-check" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="btn-book-service"
                    onClick={() => onOpenBooking(service.title)}
                  >
                    <span>Book This Service</span>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: COMPARISON GUIDE */}
        {activeTab === 'guide' && (
          <div className="nail-guide-wrapper">
            <div className="guide-intro-banner">
              <h3>Which Nail Extension is Perfect for You?</h3>
              <p>Compare our 6 signature extension techniques to match your natural nail condition, desired length, and lifestyle needs.</p>
            </div>

            <div className="guide-table-scroll">
              <table className="nail-guide-table">
                <thead>
                  <tr>
                    <th>Extension Method</th>
                    <th>Price</th>
                    <th>Duration</th>
                    <th>Longevity</th>
                    <th>Key Advantage</th>
                    <th>Recommended For</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i}>
                      <td className="font-semibold text-burgundy">{row.name}</td>
                      <td className="font-medium text-rose">{row.price}</td>
                      <td>{row.duration}</td>
                      <td>{row.hold}</td>
                      <td>{row.strength}</td>
                      <td className="text-muted text-sm">{row.bestFor}</td>
                      <td>
                        <button
                          className="btn-guide-book"
                          onClick={() => onOpenBooking(row.name)}
                        >
                          Book
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Curated 17 Nail Looks Preview Strip */}
        <div className="nail-gallery-preview-strip">
          <div className="strip-header">
            <div>
              <span className="strip-eyebrow">Real Salon Portfolio</span>
              <h3 className="strip-title">17 Exclusive Nail Art Designs</h3>
            </div>
            <a href="#gallery" className="btn-link-underline">
              View All In Gallery & Lightbox <FaArrowRight />
            </a>
          </div>

          <div className="strip-carousel">
            {NAIL_GALLERY.slice(0, 8).map((look, i) => (
              <div
                key={look.id}
                className="strip-item"
                onClick={() => onOpenLightbox(i, 'nails')}
              >
                <img src={look.src} alt={look.title} loading="lazy" />
                <div className="strip-item-overlay">
                  <FaSearch />
                  <span className="strip-look-title">{look.title}</span>
                  <span className="strip-look-tag">{look.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
