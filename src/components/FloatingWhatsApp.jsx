import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export function FloatingWhatsApp() {
  return (
    <aside className="floating-whatsapp-container" aria-label="WhatsApp quick chat">
      <a
        href="https://wa.me/917050246826?text=Hi%20Ankita,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment%20at%20Glow%20by%20Ankita."
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp-pill"
      >
        <span className="pulse-ping" />
        <div className="wa-icon-box">
          <FaWhatsapp />
        </div>
        <div className="wa-text-box">
          <span className="wa-title">Chat with Ankita</span>
          <span className="wa-status">Online • Instant Reply</span>
        </div>
      </a>
    </aside>
  );
}
