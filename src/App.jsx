import React, { useState } from 'react';
import './App.css';
import {
  FaInstagram,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaTimes as FaClose,
} from 'react-icons/fa';

import aboutImage from './assets/image.png';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioTab, setPortfolioTab] = useState('makeup'); // State for portfolio tabs
  const [selectedImage, setSelectedImage] = useState(null); // State for image viewer

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

  // Makeup Images
  const makeupImages = [
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
    "v1765979004/WhatsApp_Image_2025-12-17_at_09.47.38_yqfunn.jpg",
    "v1767797014/IMG_7186_ojfswu.jpg",
    "v1767797014/IMG_7190_etstvl.jpg"
  ];

  // Mehndi Images with Name and Price
  const mehndiImages = [
    // { url: "v1766221942/WhatsApp_Image_2025-12-20_at_14.20.28_ublnln.jpg", name: "Bridal Mehndi", price: "₹5,000" },
    { url: "v1766221942/WhatsApp_Image_2025-12-20_at_14.21.33_tip31y.jpg", name: "Party Mehndi", price: "₹1,500" },
    // { url: "v1766221943/WhatsApp_Image_2025-12-20_at_14.23.50_togwha.jpg", name: "Simple Mehndi", price: "₹1,000" },
    { url: "v1766222870/WhatsApp_Image_2025-12-20_at_14.55.12_egruhk.jpg", name: "Indian mehndi", price: "₹2,000" },
    { url: "v1766222870/WhatsApp_Image_2025-12-20_at_14.53.03_tmnjdx.jpg", name: "Arabic mehndi", price: "₹600" },
    { url: "v1766222993/WhatsApp_Image_2025-12-20_at_14.58.02_cuaj0x.jpg", name: "Theme based mehndi", price: "₹1,500" },
    { url: "v1766224467/WhatsApp_Image_2025-12-20_at_15.08.56_k8wkfg.jpg", name: "Foot mehndi", price: "₹500" },
    { url: "v1766225079/Screenshot_2025-12-20-15-32-06-508_com.frontrow.vlog-edit_gespak.jpg", name: "Bridal mehndi", price: "₹3,500" },
    { url: "v1766228386/WhatsApp_Image_2025-12-20_at_14.44.18_k3k5oz.jpg", name: "Mandala mehndi", price: "₹500" }
  ];

  return (
    <div className="App">
      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="header-inner">
          <h1>Glow by Ankita - Makeup & Mehndi Artist</h1>

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
          <h2>Glow by Ankita</h2>
          <p>Ankita Kumari • Professional Makeup & Mehndi Artist</p>

          <button className="cta-button" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="about">
        <div className="container about-content">

          <div className="about-text">
            <h2>About Me</h2>
            <p>
              With over 3 years of professional experience in the beauty industry, I specialize in creating flawless makeup looks and intricate mehndi designs that enhance natural beauty.
              <br /><br />
              I am a <strong>Lakmé Certified Makeup Artist</strong>, trained in modern techniques, skin-friendly products, and personalized styling.
              <br /><br />
              My goal is to make every client feel confident, radiant, and truly special on their most important days.
            </p>
          </div>

          <div className="about-image">
            <img src="https://res.cloudinary.com/drsrdkhn7/image/upload/v1769354881/WhatsApp_Image_2026-01-17_at_13.22.39_jwhyxb.jpg" alt="Ankita Kumari" />
          </div>

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
              <p className="price">Starting at ₹10,000</p>
            </div>
            <div className="card">
              <h3>Party Makeup</h3>
              <p>Glamorous looks for events and celebrations.</p>
              <p className="price">Starting at ₹2,500</p>
            </div>
            <div className="card">
              <h3>Engagement Makeup</h3>
              <p>Creative, high-fashion makeup for shoots.</p>
              <p className="price">Starting at ₹7,000</p>
            </div>
            <div className="card">
              <h3>Bridal Mehndi</h3>
              <p>Intricate and elegant mehndi designs for brides.</p>
              <p className="price">Starting at ₹3,500</p>
            </div>
            <div className="card">
              <h3>Party Mehndi</h3>
              <p>Stylish mehndi for events and celebrations.</p>
              <p className="price">Starting at ₹1,500</p>
            </div>
            <div className="card">
              <h3>Arabic Mehndi</h3>
              <p>Traditional Arabic mehndi patterns.</p>
              <p className="price">Starting at ₹600</p>
            </div>
            <div className="card">
              <h3>Theme based Mehndi </h3>
              <p>Traditional Theme based mehndi patterns.</p>
              <p className="price">Starting at ₹1,500</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2>Portfolio</h2>
          <div className="portfolio-tabs">
            <button
              className={`tab-button ${portfolioTab === 'makeup' ? 'active' : ''}`}
              onClick={() => setPortfolioTab('makeup')}
            >
              Makeup
            </button>
            <button
              className={`tab-button ${portfolioTab === 'mehndi' ? 'active' : ''}`}
              onClick={() => setPortfolioTab('mehndi')}
            >
              Mehndi
            </button>
          </div>
          <div className="gallery">
            {portfolioTab === 'makeup' ? (
              makeupImages.map((img, index) => (
                <img
                  key={`makeup-${index}`}
                  src={`https://res.cloudinary.com/drsrdkhn7/image/upload/f_auto,q_auto/${img}`}
                  alt={`Makeup look ${index + 1}`}
                  loading="lazy"
                  onClick={() => setSelectedImage(`https://res.cloudinary.com/drsrdkhn7/image/upload/f_auto,q_auto/${img}`)}
                  style={{ cursor: 'pointer' }}
                />
              ))
            ) : (
              mehndiImages.map((item, index) => (
                <div key={`mehndi-${index}`} className="mehndi-item">
                  <img
                    src={`https://res.cloudinary.com/drsrdkhn7/image/upload/f_auto,q_auto/${item.url}`}
                    alt={item.name}
                    loading="lazy"
                    onClick={() => setSelectedImage(`https://res.cloudinary.com/drsrdkhn7/image/upload/f_auto,q_auto/${item.url}`)}
                    style={{ cursor: 'pointer' }}
                  />
                  <div className="mehndi-caption">
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                  </div>
                </div>
              ))
            )}
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
            <div className="card">
              <p>"Incredible mehndi designs for my wedding. So detailed and beautiful!"</p>
              <cite>- Aisha Khan</cite>
            </div>
            <div className="card">
              <p>"Loved the Arabic mehndi. Highly recommend!"</p>
              <cite>- Fatima R</cite>
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
            <p>📧 ankitagupta7050@gmail.com</p>
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
              <FaInstagram style={{ fontSize: '32px' }} />
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
                <option value="Party Makeup">Party Makeup</option>
                <option value="Engagement Makeup">Engagement Makeup</option>
                <option value="Bridal Makeup">Bridal Makeup</option>
                <option value="Bridal Mehndi">Bridal Mehndi</option>
                <option value="Party Mehndi">Party Mehndi</option>
                <option value="Arabic Mehndi">Arabic Mehndi</option>
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

      {/* ================= IMAGE VIEWER MODAL ================= */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-close-button" onClick={() => setSelectedImage(null)}>
              <FaClose />
            </button>
            <img src={selectedImage} alt="Selected" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;