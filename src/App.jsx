import React, { useState } from 'react';
import './App.css';
import {
  FaInstagram,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

import aboutImage from './assets/image.png';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBookNow = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // ✅ WhatsApp Booking Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form[0].value;
    const email = form[1].value;
    const phone = form[2].value;
    const service = form[3].value;
    const date = form[4].value;
    const message = form[5].value;

    const whatsappMessage = `
🌸 *New Booking Appointment* 🌸

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
💄 Service: ${service}
📅 Date: ${date}
📝 Message: ${message}
`;

    const whatsappURL = `https://wa.me/917050246826?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, '_blank');
    setShowForm(false);
  };

  return (
    <div className="App">
      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="header-inner">
          <h1>Glow by Ankita</h1>

          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
            <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <button className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2>Ankita Kumari</h2>
          <p>Transforming Beauty with Elegance and Precision</p>
          <button className="cta-button" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            With over 2 years of experience in the beauty industry, I specialize
            in creating timeless, luxurious looks that enhance your natural
            beauty. My goal is to make every client feel confident and radiant.
          </p>
          <img src={aboutImage} alt="Ankita Kumari" />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="services">
        <div className="container">
          <h2>Services</h2>
          <div className="service-cards">
            <div className="card">
              <h3>Bridal Makeup</h3>
              <p>Flawless, long-lasting makeup for your special day.</p>
              <p className="price">Starting at ₹8,000</p>
            </div>
            <div className="card">
              <h3>Party Makeup</h3>
              <p>Glamorous looks for events and celebrations.</p>
              <p className="price">Starting at ₹3,000</p>
            </div>
            <div className="card">
              <h3>Editorial / Photoshoot</h3>
              <p>Creative, high-fashion makeup for shoots.</p>
              <p className="price">Starting at ₹5,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2>Portfolio</h2>
          <div className="gallery">
            {[
              "v1765979006/WhatsApp_Image_2025-12-17_at_09.39.58_2_dkma1p.jpg",
              "v1765979007/WhatsApp_Image_2025-12-17_at_09.39.57_gnndz0.jpg",
              "v1765979006/WhatsApp_Image_2025-12-17_at_09.39.59_1_brofqs.jpg",
              "v1765979007/WhatsApp_Image_2025-12-17_at_09.39.59_b95r3u.jpg",
              "v1765979007/WhatsApp_Image_2025-12-17_at_09.39.58_uvf0rc.jpg",
              "v1765979006/WhatsApp_Image_2025-12-17_at_09.39.58_1_hygkhj.jpg",
              "v1765979004/WhatsApp_Image_2025-12-17_at_09.47.35_xtrcc1.jpg",
              "v1765979004/WhatsApp_Image_2025-12-17_at_09.47.37_2_zt8ax6.jpg",
              "v1765979005/WhatsApp_Image_2025-12-17_at_09.39.59_2_dblv62.jpg",
              "v1765979005/WhatsApp_Image_2025-12-17_at_09.47.34_kyt2gm.jpg",
              "v1765979005/WhatsApp_Image_2025-12-17_at_09.47.37_1_u38c09.jpg",
              "v1765979004/WhatsApp_Image_2025-12-17_at_09.47.36_uqhns2.jpg",
              "v1765979004/WhatsApp_Image_2025-12-17_at_09.47.37_iqxsto.jpg",
              "v1765979004/WhatsApp_Image_2025-12-17_at_09.47.38_yqfunn.jpg"
            ].map((img, index) => (
              <img
                key={index}
                src={`https://res.cloudinary.com/drsrdkhn7/image/upload/f_auto,q_auto/${img}`}
                alt={`Makeup look ${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>Testimonials</h2>
          <div className="testimonial-cards">
            <div className="card">
              <p>"Absolutely loved my bridal look. Stunning work!"</p>
              <cite>- Suhani Gupta</cite>
            </div>
            <div className="card">
              <p>"Very professional and creative makeup artist."</p>
              <cite>- Priyanka G</cite>
            </div>
            <div className="card">
              <p>"Perfect makeup for my photoshoot."</p>
              <cite>- Uma Devi</cite>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact & Book</h2>
          <p>Ready to glow? Let’s create something beautiful together.</p>
          <div className="contact-info">
            <p>📞 (+91) 7050246826</p>
            <p>📧 ankitakumari@gmail.com</p>
            <a
              href="https://wa.me/917050246826"
              className="whatsapp-button"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp /> Book via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="container">
          <p>© 2023 Glow by Ankita. All rights reserved.</p>
          <div className="social-links">
            <a
              href="https://www.instagram.com/anky_makeup_creative/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>

      {/* ================= BOOKING MODAL ================= */}
      {showForm && (
        <div className="booking-modal">
          <div className="booking-form">
            <button className="close-button" onClick={handleCloseForm}>
              ×
            </button>
            <h2>Book Your Appointment</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone" required />
              <select required>
                <option value="">Select Service</option>
                <option value="Bridal Makeup">Bridal Makeup</option>
                <option value="Party Makeup">Party Makeup</option>
                <option value="Editorial / Photoshoot">
                  Editorial / Photoshoot
                </option>
              </select>
              <input type="date" required />
              <textarea placeholder="Additional Message" rows="4" />
              <button type="submit" className="submit-button">
                Submit Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
