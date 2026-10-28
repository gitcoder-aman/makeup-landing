import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaClock, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

export function Contact({ onOpenBooking }) {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        {/* Header */}
        <div className="section-header-editorial">
          <div className="tag-pill">
            <FaWhatsapp className="pill-icon" />
            <span>Connect & Reserve</span>
          </div>
          <h2 className="section-title">
            Get in Touch & <span className="title-serif-italic">Book Your Glow</span>
          </h2>
          <p className="section-subtitle">
            Have a question about a customized nail art idea, bridal package, or event date?
            We are just a phone call or WhatsApp message away.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="contact-cards-grid">
          <div className="contact-info-card">
            <div className="contact-icon-bubble">
              <FaPhoneAlt />
            </div>
            <h3>Direct Call</h3>
            <p className="contact-card-sub">Speak directly with Ankita</p>
            <a href="tel:+917050246826" className="contact-link-highlight">
              (+91) 7050246826
            </a>
            <span className="contact-note">Mon - Sun, 10 AM - 8 PM</span>
          </div>

          <div className="contact-info-card featured-contact-card">
            <div className="contact-icon-bubble whatsapp-bubble">
              <FaWhatsapp />
            </div>
            <h3>WhatsApp Instant</h3>
            <p className="contact-card-sub">Fastest confirmation & portfolio inquiries</p>
            <a
              href="https://wa.me/917050246826"
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp-card"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
            <span className="contact-note">Typically replies in 15 mins</span>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon-bubble">
              <FaEnvelope />
            </div>
            <h3>Email Inquiries</h3>
            <p className="contact-card-sub">Event collaborations & detailed briefs</p>
            <a href="mailto:ankitagupta7050@gmail.com" className="contact-link-highlight">
              ankitagupta7050@gmail.com
            </a>
            <span className="contact-note">Official communications</span>
          </div>
        </div>

        {/* Studio Details Banner */}
        <div className="studio-details-box">
          <div className="studio-detail-item">
            <FaClock className="detail-icon" />
            <div>
              <strong>Studio Hours</strong>
              <p>Monday to Sunday: 10:00 AM – 8:00 PM</p>
              <small>Advance booking recommended for weekend slots</small>
            </div>
          </div>

          <div className="studio-detail-divider" />

          <div className="studio-detail-item">
            <FaMapMarkerAlt className="detail-icon" />
            <div>
              <strong>Service Availability</strong>
              <p>In-Studio Appointments & On-Location Bridal Visits</p>
              <small>Destination and venue visits upon request</small>
            </div>
          </div>

          <div className="studio-detail-divider" />

          <div className="studio-detail-action">
            <button
              className="btn-primary"
              onClick={() => onOpenBooking()}
            >
              <FaCalendarAlt />
              <span>Book Appointment Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
