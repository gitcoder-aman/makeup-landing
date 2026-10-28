import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NailLounge } from './components/NailLounge';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { InstagramFeed } from './components/InstagramFeed';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ALL_GALLERY, NAIL_GALLERY, MAKEUP_GALLERY, MEHNDI_GALLERY } from './data/galleryData';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  // Lightbox State
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState(ALL_GALLERY);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Active section tracking on scroll
  useEffect(() => {
    const sectionIds = ['home', 'nails', 'services', 'about', 'gallery', 'reviews', 'faq', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Booking handlers
  const handleOpenBooking = (serviceName = '') => {
    setPreselectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedService('');
  };

  // Lightbox handlers
  const handleOpenLightbox = (index, filterCategory = 'all') => {
    let images = ALL_GALLERY;
    if (filterCategory === 'nails') images = NAIL_GALLERY;
    else if (filterCategory === 'makeup') images = MAKEUP_GALLERY;
    else if (filterCategory === 'mehndi') images = MEHNDI_GALLERY;

    setLightboxImages(images);
    setLightboxIndex(index >= 0 && index < images.length ? index : 0);
    setIsLightboxOpen(true);
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  const scrollToServices = () => {
    const el = document.getElementById('nails');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="glow-app">
      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={scrollToServices}
        />

        {/* 2. Dedicated Nail Lounge & Studio Section (With 6 Services & Real Images) */}
        <NailLounge
          onOpenBooking={handleOpenBooking}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 3. Comprehensive Beauty Services Section */}
        <Services
          onOpenBooking={handleOpenBooking}
        />

        {/* 4. About Ankita & Lakme Credentials Section */}
        <About
          onOpenBooking={handleOpenBooking}
        />

        {/* 5. Editorial Beauty Gallery & Transformations */}
        <Gallery
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 6. Genuine Client Reviews */}
        <Testimonials />

        {/* 7. FAQs */}
        <Faq />

        {/* 8. Instagram Social Journey */}
        <InstagramFeed />

        {/* 9. Contact & Studio Hours */}
        <Contact
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Interactive Appointment Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={preselectedService}
      />

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setIsLightboxOpen(false)}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
        onBookLook={handleOpenBooking}
      />
    </div>
  );
}

export default App;
