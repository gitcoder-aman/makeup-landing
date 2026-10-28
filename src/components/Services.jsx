import React, { useState } from 'react';
import { ALL_SERVICES, NAIL_SERVICES, MAKEUP_SERVICES, MEHNDI_SERVICES } from '../data/servicesData';
import { FaClock, FaCheck, FaArrowRight, FaGem } from 'react-icons/fa';

export function Services({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'nails', label: 'Nail Extensions & Art' },
    { id: 'makeup', label: 'Bridal & Party Makeup' },
    { id: 'mehndi', label: 'Handcrafted Mehndi' },
  ];

  const getFilteredServices = () => {
    if (activeCategory === 'nails') return NAIL_SERVICES;
    if (activeCategory === 'makeup') return MAKEUP_SERVICES;
    if (activeCategory === 'mehndi') return MEHNDI_SERVICES;
    return ALL_SERVICES;
  };

  const filtered = getFilteredServices();

  return (
    <section id="services" className="services-section">
      <div className="section-container">
        {/* Header */}
        <div className="section-header-editorial">
          <div className="tag-pill">
            <FaGem className="pill-icon" />
            <span>Complete Salon Menu</span>
          </div>
          <h2 className="section-title">
            Bespoke Services & <span className="title-serif-italic">Transparent Pricing</span>
          </h2>
          <p className="section-subtitle">
            Every service is personalized to complement your individuality, skin tone,
            and personal celebration. No hidden charges.
          </p>

          {/* Category Filter Pills */}
          <div className="services-filter-row">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-unified-grid">
          {filtered.map((item) => (
            <div key={item.id} className="service-editorial-card">
              <div className="card-media-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-image"
                  loading="lazy"
                />
                <span className="card-badge-floating">{item.badge}</span>
                <span className="card-price-overlay">{item.price}</span>
              </div>

              <div className="card-content">
                <div className="card-meta">
                  <span className="meta-category">{item.category.toUpperCase()}</span>
                  <span className="meta-duration">
                    <FaClock /> {item.duration}
                  </span>
                </div>

                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.desc}</p>

                <div className="card-features-container">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="feature-chip">
                      <FaCheck className="feature-check-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="card-footer">
                  <div className="price-display">
                    <span className="price-label">Price</span>
                    <span className="price-value">{item.price}</span>
                  </div>

                  <button
                    className="btn-card-action"
                    onClick={() => onOpenBooking(item.title)}
                  >
                    <span>Book Service</span>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
