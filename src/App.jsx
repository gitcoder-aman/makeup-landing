import React, { useState, useEffect } from 'react';
import './App.css';
import {
  FaInstagram,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaStar,
  FaChevronDown,
  FaSearch,
} from 'react-icons/fa';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioTab, setPortfolioTab] = useState('makeup');
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [portfolioTab]);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = e.target;
    const msg = `🌸 *New Booking* 🌸\n\n👤 ${f[0].value}\n📧 ${f[1].value}\n📱 ${f[2].value}\n💄 ${f[3].value}\n📅 ${f[4].value}\n📝 ${f[5].value}`;
    window.open(`https://wa.me/917050246826?text=${encodeURIComponent(msg)}`, '_blank');
    setShowForm(false);
  };

  const CLOUD = 'https://res.cloudinary.com/drsrdkhn7/image/upload/f_auto,q_auto';

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

  const mehndiImages = [
    { url: "v1766221942/WhatsApp_Image_2025-12-20_at_14.21.33_tip31y.jpg", name: "Party Mehndi", price: "₹1,500" },
    { url: "v1766222870/WhatsApp_Image_2025-12-20_at_14.55.12_egruhk.jpg", name: "Indian Mehndi", price: "₹2,000" },
    { url: "v1766222870/WhatsApp_Image_2025-12-20_at_14.53.03_tmnjdx.jpg", name: "Arabic Mehndi", price: "₹600" },
    { url: "v1766222993/WhatsApp_Image_2025-12-20_at_14.58.02_cuaj0x.jpg", name: "Theme Mehndi", price: "₹1,500" },
    { url: "v1766224467/WhatsApp_Image_2025-12-20_at_15.08.56_k8wkfg.jpg", name: "Foot Mehndi", price: "₹500" },
    { url: "v1766225079/Screenshot_2025-12-20-15-32-06-508_com.frontrow.vlog-edit_gespak.jpg", name: "Bridal Mehndi", price: "₹3,500" },
    { url: "v1766228386/WhatsApp_Image_2025-12-20_at_14.44.18_k3k5oz.jpg", name: "Mandala Mehndi", price: "₹500" }
  ];

  const services = [
    { title: "Bridal Makeup", desc: "Flawless, long-lasting makeup crafted for your most special day.", price: "From ₹10,000", icon: "💋" },
    { title: "Party Makeup", desc: "Glamorous, head-turning looks for every celebration.", price: "From ₹2,500", icon: "✨" },
    { title: "Engagement Makeup", desc: "Elegant, sophisticated beauty for your engagement ceremony.", price: "From ₹7,000", icon: "💍" },
    { title: "Bridal Mehndi", desc: "Intricate, elegant henna artistry for the bride.", price: "From ₹3,500", icon: "🌿" },
    { title: "Party Mehndi", desc: "Stylish, trendy mehndi designs for festive occasions.", price: "From ₹1,500", icon: "🎨" },
    { title: "Arabic Mehndi", desc: "Bold, beautiful traditional Arabic henna patterns.", price: "From ₹600", icon: "🪷" },
    { title: "Theme Mehndi", desc: "Custom creative mehndi designs for your unique vision.", price: "From ₹1,500", icon: "🦋" },
  ];

  const reviews = [
    { text: "Absolutely loved my bridal look. Ankita made me feel like a queen on my wedding day!", name: "Suhani Gupta", stars: 5 },
    { text: "Very professional and incredibly creative. My party look was perfection.", name: "Priyanka G", stars: 5 },
    { text: "The photoshoot makeup was flawless. It lasted the entire day without a touch-up.", name: "Uma Devi", stars: 5 },
    { text: "Her mehndi artistry is incredible. The bridal design was so detailed and beautiful!", name: "Aisha Khan", stars: 5 },
    { text: "The Arabic mehndi was exactly what I wanted. Highly recommend her work!", name: "Fatima R", stars: 5 },
  ];

  const navItems = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];

  return (
    <div className="App">
      {/* HEADER */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#home" className="logo">Glow <em>by Ankita</em></a>
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            {navItems.map((s) => (
              <a key={s} href={`#${s}`} onClick={closeMenu} className={activeSection === s ? 'active' : ''}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            ))}
          </nav>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-bg" />
        <div className="hero-gradient" />
        <div className="hero-content">
          <div className="hero-tag">Beauty & Artistry</div>
          <h2>The Art of<br /><em>Beautiful</em> You</h2>
          <p className="hero-sub">
            Professional makeup & mehndi artistry that enhances your natural beauty.
            Creating timeless elegance for your most cherished moments.
          </p>
          <div className="hero-buttons">
            <button className="hero-cta" onClick={() => setShowForm(true)}>Book Appointment</button>
            <a href="#portfolio" className="hero-outline">View My Work</a>
          </div>
        </div>
        <div className="scroll-down"><FaChevronDown size={20} /></div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="about-grid">
          <div className="about-visual reveal">
            <div className="about-img-wrapper">
              <img
                src="https://res.cloudinary.com/drsrdkhn7/image/upload/v1769354881/WhatsApp_Image_2026-01-17_at_13.22.39_jwhyxb.jpg"
                alt="Ankita Kumari"
              />
              <div className="about-accent-box">
                3+ Years
                <span>Experience</span>
              </div>
            </div>
          </div>
          <div className="about-text reveal reveal-d2">
            <h3>About</h3>
            <h2>Crafting <em>Beauty</em><br />With Passion</h2>
            <p>
              With over 3 years of professional experience in the beauty industry,
              I specialize in creating flawless makeup looks and intricate mehndi
              designs that enhance natural beauty.
            </p>
            <p>
              As a <strong>Lakme Certified Makeup Artist</strong>, I am trained in
              modern techniques, skin-friendly products, and personalized styling
              to bring out the best in every client.
            </p>
            <p>
              My goal is to make every client feel confident, radiant, and truly
              special on their most important days.
            </p>
            <div className="about-badge">⭐ Lakme Certified Professional</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <div style={{ padding: '6rem 2.5rem 0' }}>
          <div className="section-header reveal">
            <div className="section-tag">What I Offer</div>
            <h2>Services & <em>Pricing</em></h2>
            <div className="section-line" />
          </div>
        </div>
        <div className="service-grid">
          {services.map((s, i) => (
            <div key={i} className={`service-item reveal reveal-d${(i % 3) + 1}`}>
              <div className="icon-wrap">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-price">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">My Work</div>
            <h2>Portfolio <em>Showcase</em></h2>
            <div className="section-line" />
          </div>
          <div className="port-tabs reveal">
            <button className={`port-tab ${portfolioTab === 'makeup' ? 'active' : ''}`} onClick={() => setPortfolioTab('makeup')}>
              Makeup
            </button>
            <button className={`port-tab ${portfolioTab === 'mehndi' ? 'active' : ''}`} onClick={() => setPortfolioTab('mehndi')}>
              Mehndi
            </button>
          </div>
          <div className="port-grid">
            {portfolioTab === 'makeup' ? (
              makeupImages.map((img, i) => (
                <div
                  key={i}
                  className="port-item reveal"
                  onClick={() => setSelectedImage(`${CLOUD}/w_800/${img}`)}
                >
                  <img src={`${CLOUD}/w_500/${img}`} alt={`Makeup ${i + 1}`} loading="lazy" />
                  <div className="port-item-overlay">
                    <span><FaSearch /> View</span>
                  </div>
                </div>
              ))
            ) : (
              mehndiImages.map((item, i) => (
                <div
                  key={i}
                  className="mehndi-card reveal"
                  onClick={() => setSelectedImage(`${CLOUD}/w_800/${item.url}`)}
                >
                  <img src={`${CLOUD}/w_500/${item.url}`} alt={item.name} loading="lazy" />
                  <div className="mehndi-card-info">
                    <h4>{item.name}</h4>
                    <span>{item.price}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Kind Words</div>
            <h2>What Clients <em>Say</em></h2>
            <div className="section-line" />
            <p className="section-desc">Hear from the beautiful people I've had the pleasure of working with.</p>
          </div>
          <div className="testi-grid">
            {reviews.map((r, i) => (
              <div key={i} className={`testi-card reveal reveal-d${(i % 3) + 1}`}>
                <div className="testi-stars">
                  {Array(r.stars).fill(0).map((_, j) => <FaStar key={j} />)}
                </div>
                <p>"{r.text}"</p>
                <cite>{r.name}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Get In Touch</div>
            <h2>Contact & <em>Booking</em></h2>
            <div className="section-line" />
          </div>
          <p className="contact-intro reveal">
            Ready to glow? I'd love to hear from you. Reach out to book your
            appointment or simply say hello.
          </p>
          <div className="contact-grid reveal">
            <div className="contact-box">
              <div className="c-icon"><FaPhoneAlt /></div>
              <h4>Phone</h4>
              <p><a href="tel:+917050246826">(+91) 7050246826</a></p>
            </div>
            <div className="contact-box">
              <div className="c-icon"><FaEnvelope /></div>
              <h4>Email</h4>
              <p><a href="mailto:ankitagupta7050@gmail.com">ankitagupta7050@gmail.com</a></p>
            </div>
            <div className="contact-box">
              <div className="c-icon"><FaWhatsapp /></div>
              <h4>WhatsApp</h4>
              <p><a href="https://wa.me/917050246826" target="_blank" rel="noreferrer">Chat Now</a></p>
            </div>
          </div>
          <div className="contact-center reveal">
            <a href="https://wa.me/917050246826" className="whatsapp-btn" target="_blank" rel="noreferrer">
              <FaWhatsapp /> Book via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">Glow <em>by Ankita</em></div>
          <p className="footer-tagline">Professional Makeup & Mehndi Artist</p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/anky_makeup_creative/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://wa.me/917050246826" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Glow by Ankita. All rights reserved.</p>
        </div>
      </footer>

      {/* BOOKING MODAL */}
      {showForm && (
        <div className="modal-backdrop" onClick={() => setShowForm(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowForm(false)}>×</button>
            <h2>Book Appointment</h2>
            <p className="modal-sub">I'll confirm your booking via WhatsApp</p>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone Number" required />
              <select required>
                <option value="">Select Service</option>
                <option>Bridal Makeup</option>
                <option>Party Makeup</option>
                <option>Engagement Makeup</option>
                <option>Bridal Mehndi</option>
                <option>Party Mehndi</option>
                <option>Arabic Mehndi</option>
                <option>Theme Based Mehndi</option>
              </select>
              <input type="date" required />
              <textarea placeholder="Additional notes (optional)" rows="4" />
              <button type="submit" className="modal-submit">Confirm Booking</button>
            </form>
          </div>
        </div>
      )}

      {/* IMAGE VIEWER */}
      {selectedImage && (
        <div className="viewer-backdrop" onClick={() => setSelectedImage(null)}>
          <div className="viewer-content" onClick={(e) => e.stopPropagation()}>
            <button className="viewer-close" onClick={() => setSelectedImage(null)}>
              <FaTimes />
            </button>
            <img src={selectedImage} alt="Portfolio" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
