import React from 'react';
import { FaStar, FaGem, FaHeart, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';

export function About({ onOpenBooking }) {
  const credentials = [
    { title: 'Lakme Certified Professional', desc: 'Formally trained in advanced skin prep, color theory, HD contouring, and bridal styling.' },
    { title: 'Dedicated Nail Extension Specialist', desc: 'Expertise in sculpted acrylics, hard gel overlays, polygel sculpting, and damage-free tip systems.' },
    { title: '100% Organic Henna Formulary', desc: 'Crafting pure chemical-free mehndi paste enriched with natural essential oils for guaranteed rich dark stains.' },
    { title: 'Hygiene-First Studio Protocols', desc: 'Strict sterilization of nail implements, sanitized makeup brushes, and single-use disposables for every client.' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-split-layout">
          {/* Visual Column */}
          <div className="about-visual-column">
            <div className="about-portrait-frame">
              <img
                src="https://res.cloudinary.com/drsrdkhn7/image/upload/v1769354881/WhatsApp_Image_2026-01-17_at_13.22.39_jwhyxb.jpg"
                alt="Ankita Kumari — Lakme Certified Makeup Artist & Nail Specialist"
                className="about-portrait-img"
                loading="lazy"
              />
              <div className="experience-floating-pill">
                <span className="exp-number">5+</span>
                <span className="exp-label">Years of<br />Artistry</span>
              </div>
            </div>

            <div className="about-quote-box">
              <p>“True beauty isn’t about masking who you are; it’s about highlighting the glow you already carry within.”</p>
              <span className="quote-author">— Ankita Kumari, Founder</span>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="about-text-column">
            <div className="tag-pill">
              <FaHeart className="pill-icon" />
              <span>Meet the Artist</span>
            </div>

            <h2 className="section-title">
              Crafting Elegance with <span className="title-serif-italic">Passion & Precision</span>
            </h2>

            <p className="about-paragraph">
              Welcome to <strong>Glow by Ankita</strong>. I am Ankita Kumari, a Lakme Certified Makeup Artist,
              Nail Specialist, and Mehndi Artist with over 5 years of hands-on experience transforming
              brides and beauty enthusiasts across festive occasions and editorial sets.
            </p>

            <p className="about-paragraph">
              My philosophy balances modern beauty techniques with mindful care. Whether sculpting flawless
              acrylic and hard gel nail extensions, delivering camera-ready bridal HD skin that lasts through
              emotional wedding ceremonies, or crafting intricate bridal henna motifs, every brushstroke is
              tailored to your personality and comfort.
            </p>

            {/* Credentials Grid */}
            <div className="credentials-list">
              {credentials.map((cred, i) => (
                <div key={i} className="credential-row">
                  <div className="cred-icon-box">
                    <FaCheckCircle />
                  </div>
                  <div className="cred-text">
                    <h4>{cred.title}</h4>
                    <p>{cred.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-cta-row">
              <button
                className="btn-primary"
                onClick={() => onOpenBooking()}
              >
                <FaCalendarAlt />
                <span>Book With Ankita</span>
              </button>

              <a
                href="https://www.instagram.com/anky_makeup_creative/"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
