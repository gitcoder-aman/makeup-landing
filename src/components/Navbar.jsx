import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';

export function Navbar({ activeSection, onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'nails', label: 'Nails & Studio', isSpecial: true },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-container">
        <a href="#home" className="brand-logo" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
          <span className="brand-name">Glow</span>
          <span className="brand-sub">by Ankita</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`nav-link ${activeSection === link.id ? 'active' : ''} ${link.isSpecial ? 'nav-special' : ''}`}
            >
              {link.label}
              {link.isSpecial && <span className="nav-tag-dot" />}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="header-actions">
          <button
            className="btn-book-header"
            onClick={() => onOpenBooking()}
            aria-label="Book an Appointment"
          >
            <FaCalendarAlt className="btn-icon" />
            <span>Book Appointment</span>
          </button>

          {/* Mobile Hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      <div className={`mobile-nav-drawer ${menuOpen ? 'is-open' : ''}`}>
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-header">
            <span className="brand-name">Glow <span className="brand-sub">by Ankita</span></span>
            <button
              className="drawer-close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
          <div className="mobile-links-list">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`mobile-link ${activeSection === link.id ? 'active' : ''} ${link.isSpecial ? 'special-link' : ''}`}
              >
                <span>{link.label}</span>
                {link.isSpecial && <span className="mobile-badge">New Nails</span>}
              </button>
            ))}
          </div>

          <div className="mobile-drawer-footer">
            <button
              className="btn-primary w-full"
              onClick={() => {
                setMenuOpen(false);
                onOpenBooking();
              }}
            >
              <FaCalendarAlt /> Book Appointment
            </button>
            <a
              href="https://wa.me/917050246826"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary w-full"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
      {menuOpen && <div className="drawer-backdrop" onClick={() => setMenuOpen(false)} />}
    </header>
  );
}
