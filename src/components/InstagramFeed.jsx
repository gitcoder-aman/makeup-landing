import React from 'react';
import { FaInstagram, FaHeart } from 'react-icons/fa';

export function InstagramFeed() {
  const feedItems = [
    { src: '/nail_collection/IMG_1124.PNG', caption: 'French Ombre Nail Art' },
    { src: 'https://res.cloudinary.com/drsrdkhn7/image/upload/f_auto,q_auto/w_600/v1765979006/WhatsApp_Image_2025-12-17_at_09.39.58_2_dkma1p.jpg', caption: 'Bridal Royal Glam' },
    { src: '/nail_collection/IMG_1125.PNG', caption: 'Stiletto Hard Gel Chrome' },
    { src: 'https://res.cloudinary.com/drsrdkhn7/image/upload/f_auto,q_auto/w_600/v1766225079/Screenshot_2025-12-20-15-32-06-508_com.frontrow.vlog-edit_gespak.jpg', caption: 'Intricate Bridal Henna' },
    { src: '/nail_collection/IMG_1127.PNG', caption: 'Floral Soft Gel Tips' },
    { src: 'https://res.cloudinary.com/drsrdkhn7/image/upload/f_auto,q_auto/w_600/v1765979007/WhatsApp_Image_2025-12-17_at_09.39.57_gnndz0.jpg', caption: 'Engagement Dewy Look' },
  ];

  return (
    <section className="instagram-section">
      <div className="section-container">
        <div className="instagram-header">
          <div className="insta-pill">
            <FaInstagram />
            <span>@anky_makeup_creative</span>
          </div>
          <h2 className="section-title">
            Follow Our <span className="title-serif-italic">Artistic Journey</span>
          </h2>
          <p className="section-subtitle">
            Daily behind-the-scenes, fresh nail extension sets, client reveals, and bridal stories on Instagram.
          </p>
        </div>

        <div className="instagram-grid">
          {feedItems.map((item, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/anky_makeup_creative/"
              target="_blank"
              rel="noreferrer"
              className="insta-tile"
              aria-label={`View ${item.caption} on Instagram`}
            >
              <img src={item.src} alt={item.caption} loading="lazy" />
              <div className="insta-hover-overlay">
                <FaInstagram className="insta-icon" />
                <span>{item.caption}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="instagram-action-center">
          <a
            href="https://www.instagram.com/anky_makeup_creative/"
            target="_blank"
            rel="noreferrer"
            className="btn-instagram"
          >
            <FaInstagram />
            <span>Follow @anky_makeup_creative</span>
          </a>
        </div>
      </div>
    </section>
  );
}
