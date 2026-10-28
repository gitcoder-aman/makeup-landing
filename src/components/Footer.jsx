import React from 'react';
import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaHeart,
  FaLinkedin,
  FaLaptopCode,
  FaExternalLinkAlt,
} from 'react-icons/fa';

export function Footer({ onOpenBooking }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-column">
            <span className="brand-name">Glow <span className="brand-sub">by Ankita</span></span>
            <p className="footer-desc">
              Premier beauty salon, specialized nail extension lounge, and handcrafted bridal mehndi artistry.
              Directed by Lakme Certified Professional Ankita Kumari.
            </p>
            <div className="footer-social-row">
              <a
                href="https://www.instagram.com/anky_makeup_creative/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
                className="footer-social-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/917050246826"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Chat"
                className="footer-social-icon"
              >
                <FaWhatsapp />
              </a>
              <a
                href="tel:+917050246826"
                aria-label="Phone Call"
                className="footer-social-icon"
              >
                <FaPhoneAlt />
              </a>
              <a
                href="mailto:ankitagupta7050@gmail.com"
                aria-label="Email"
                className="footer-social-icon"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links-column">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => scrollTo('home')}>Home</button></li>
              <li><button onClick={() => scrollTo('nails')} className="highlight-text">Nail Studio (New)</button></li>
              <li><button onClick={() => scrollTo('services')}>All Services & Pricing</button></li>
              <li><button onClick={() => scrollTo('about')}>About Ankita</button></li>
              <li><button onClick={() => scrollTo('gallery')}>Portfolio & Looks</button></li>
              <li><button onClick={() => scrollTo('reviews')}>Client Testimonials</button></li>
              <li><button onClick={() => scrollTo('faq')}>FAQ & Guide</button></li>
              <li><button onClick={() => scrollTo('contact')}>Contact & Studio</button></li>
            </ul>
          </div>

          {/* Nail Services Column */}
          <div className="footer-links-column">
            <h4 className="footer-col-title">Nail Extensions</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => onOpenBooking('Acrylic Nail Extension')}>Acrylic Extensions (From ₹1,500)</button></li>
              <li><button onClick={() => onOpenBooking('Hard Gel Extension')}>Hard Gel Extensions (From ₹1,500)</button></li>
              <li><button onClick={() => onOpenBooking('Poly Gel Extension')}>Poly Gel Extensions (₹1,000)</button></li>
              <li><button onClick={() => onOpenBooking('Soft Gel Tip Extension')}>Soft Gel Tips (₹1,200)</button></li>
              <li><button onClick={() => onOpenBooking('Fake Tip Extension')}>Fake Tip Extensions (₹800)</button></li>
              <li><button onClick={() => onOpenBooking('Natural Nail Overlay')}>Natural Overlays (From ₹800)</button></li>
            </ul>
          </div>

          {/* QR Code / Direct Connect Column */}
          <div className="footer-qr-column">
            <h4 className="footer-col-title">Quick Connect</h4>
            <p className="qr-hint">Scan to chat or book directly on WhatsApp:</p>
            <div className="qr-image-wrapper">
              <img
                src="/qr-code.png"
                alt="Scan to Chat on WhatsApp with Ankita"
                className="footer-qr-img"
                loading="lazy"
              />
            </div>
            <a
              href="https://wa.me/917050246826"
              target="_blank"
              rel="noreferrer"
              className="footer-phone-direct"
            >
              +91 7050246826
            </a>
          </div>
        </div>

        {/* Dedicated Contact Developer Section */}
        <div className="footer-developer-banner" id="developer">
          <div className="dev-banner-left">
            <div className="dev-avatar-icon">
              <FaLaptopCode />
            </div>
            <div className="dev-text">
              <span className="dev-label">Contact Developer & Engineer</span>
              <h4 className="dev-name">Engineered & Designed by Aman Kumar</h4>
              <p className="dev-tagline">
                Creative Full-Stack & UI/UX Developer specializing in modern, high-performance web applications. Open for freelance, collaborations, and project inquiries.
              </p>
            </div>
          </div>
          <div className="dev-banner-right">
            <a
              href="mailto:amankumaruohyd@gmail.com"
              className="btn-developer-email"
              aria-label="Email Aman Kumar"
            >
              <FaEnvelope />
              <span>amankumaruohyd@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aman-kumar-4aaa631b5/"
              target="_blank"
              rel="noreferrer"
              className="btn-developer-linkedin"
              aria-label="Connect with Aman Kumar on LinkedIn"
            >
              <FaLinkedin className="linkedin-brand-icon" />
              <span>Connect on LinkedIn</span>
              <FaExternalLinkAlt className="dev-external-icon" />
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} <strong>Glow by Ankita</strong>. Crafted with{' '}
            <FaHeart className="inline-heart" /> for every radiant woman. Built by{' '}
            <a
              href="https://www.linkedin.com/in/aman-kumar-4aaa631b5/"
              target="_blank"
              rel="noreferrer"
              className="dev-credit-link"
            >
              Aman Kumar
            </a>
            . All rights reserved.
          </p>
          <div className="footer-policies">
            <span>Lakme Certified Artist</span>
            <span className="dot-sep">•</span>
            <span>Hygiene Guaranteed</span>
            <span className="dot-sep">•</span>
            <span>By Appointment</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
