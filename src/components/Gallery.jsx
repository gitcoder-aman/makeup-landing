import React, { useState } from 'react';
import { ALL_GALLERY, NAIL_GALLERY, MAKEUP_GALLERY, MEHNDI_GALLERY } from '../data/galleryData';
import { FaSearch, FaGem } from 'react-icons/fa';

export function Gallery({ onOpenLightbox }) {
  const [filter, setFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: `All Looks (${ALL_GALLERY.length})` },
    { id: 'nails', label: `Nail Studio (${NAIL_GALLERY.length})` },
    { id: 'makeup', label: `Bridal & Makeup (${MAKEUP_GALLERY.length})` },
    { id: 'mehndi', label: `Mehndi Art (${MEHNDI_GALLERY.length})` },
  ];

  const getFilteredItems = () => {
    if (filter === 'nails') return NAIL_GALLERY;
    if (filter === 'makeup') return MAKEUP_GALLERY;
    if (filter === 'mehndi') return MEHNDI_GALLERY;
    return ALL_GALLERY;
  };

  const currentItems = getFilteredItems();

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-container">
        {/* Header */}
        <div className="section-header-editorial">
          <div className="tag-pill">
            <FaGem className="pill-icon" />
            <span>Salon Portfolio</span>
          </div>
          <h2 className="section-title">
            Artistry & <span className="title-serif-italic">Real Transformations</span>
          </h2>
          <p className="section-subtitle">
            Authentic photographs of real brides, clients, and nail extension sets crafted in our studio.
            Click any look to expand in high-definition.
          </p>

          {/* Filter Tabs */}
          <div className="gallery-filter-tabs">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                className={`gallery-tab-btn ${filter === tab.id ? 'active' : ''}`}
                onClick={() => setFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-masonry-grid">
          {currentItems.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-card aspect-${item.aspect || 'tall'}`}
              onClick={() => onOpenLightbox(index, filter)}
            >
              <div className="gallery-img-inner">
                <img
                  src={item.thumb || item.src}
                  alt={item.title}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-hover-overlay">
                  <div className="hover-badge">
                    <FaSearch />
                    <span>View Detail</span>
                  </div>
                  <div className="hover-meta">
                    <span className="hover-tag">{item.tag || item.categoryLabel}</span>
                    <h4 className="hover-title">{item.title}</h4>
                    {item.price && <span className="hover-price">{item.price}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
