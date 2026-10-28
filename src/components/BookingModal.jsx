import React, { useState, useEffect } from 'react';
import { ALL_SERVICES } from '../data/servicesData';
import {
  FaTimes,
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft,
  FaWhatsapp,
  FaInfoCircle,
} from 'react-icons/fa';

export function BookingModal({ isOpen, onClose, initialService = '' }) {
  const [step, setStep] = useState(1); // 1: Service, 2: Date & Slot, 3: Details, 4: Review, 5: Success
  const [selectedService, setSelectedService] = useState(initialService || ALL_SERVICES[0].title);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('11:30 AM');
  const [serviceLocation, setServiceLocation] = useState('In-Studio');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Update initial service when modal opens with a pre-selected service
  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  // Set default minimum date to today
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (!selectedDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setSelectedDate(tomorrow.toISOString().split('T')[0]);
    }
  }, [selectedDate]);

  if (!isOpen) return null;

  const timeSlots = [
    { time: '10:00 AM', period: 'Morning' },
    { time: '11:30 AM', period: 'Morning' },
    { time: '01:00 PM', period: 'Afternoon' },
    { time: '02:30 PM', period: 'Afternoon' },
    { time: '04:00 PM', period: 'Afternoon' },
    { time: '05:30 PM', period: 'Evening' },
    { time: '07:00 PM', period: 'Evening' },
  ];

  const currentServiceObj = ALL_SERVICES.find((s) => s.title === selectedService) || ALL_SERVICES[0];

  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }
    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    if (!phoneClean) {
      newErrors.phone = 'Please enter your contact number';
    } else if (!/^[6-9]\d{9}$/.test(phoneClean) && phoneClean.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      if (!selectedService) {
        setErrors({ service: 'Please select a service' });
        return;
      }
      setErrors({});
      setStep(2);
    } else if (step === 2) {
      if (!selectedDate) {
        setErrors({ date: 'Please choose an appointment date' });
        return;
      }
      if (!selectedSlot) {
        setErrors({ slot: 'Please choose an available time slot' });
        return;
      }
      setErrors({});
      setStep(3);
    } else if (step === 3) {
      if (validateStep3()) {
        setStep(4);
      }
    }
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const refCode = `GBA-${new Date().getFullYear()}-${randomSuffix}`;
    setBookingRef(refCode);

    // Format WhatsApp confirmation text
    const message = `✨ *APPOINTMENT REQUEST — GLOW BY ANKITA* ✨\n` +
      `📋 *Booking Reference:* ${refCode}\n\n` +
      `💅 *Service:* ${selectedService} (${currentServiceObj.price})\n` +
      `📅 *Date:* ${selectedDate}\n` +
      `⏰ *Preferred Time:* ${selectedSlot}\n` +
      `📍 *Location:* ${serviceLocation}\n\n` +
      `👤 *Client Name:* ${formData.name}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      (formData.email ? `📧 *Email:* ${formData.email}\n` : '') +
      (formData.notes ? `📝 *Notes/Style Idea:* ${formData.notes}\n\n` : '\n') +
      `_Please confirm availability for this appointment slot._`;

    setTimeout(() => {
      setIsSubmitting(false);
      setStep(5);
      // Open WhatsApp to dispatch request directly to Ankita
      window.open(`https://wa.me/917050246826?text=${encodeURIComponent(message)}`, '_blank');
    }, 900);
  };

  const handleReset = () => {
    setStep(1);
    setFormData({ name: '', phone: '', email: '', notes: '' });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="booking-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="booking-modal-header">
          <div>
            <span className="booking-pill">Glow by Ankita</span>
            <h3 className="modal-title">Book an Appointment</h3>
          </div>
          <button className="modal-close-icon-btn" onClick={onClose} aria-label="Close booking modal">
            <FaTimes />
          </button>
        </div>

        {/* Step Progress Tracker (Steps 1 to 4) */}
        {step <= 4 && (
          <div className="booking-steps-progress">
            <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>
              <span>1</span>
              <label>Service</label>
            </div>
            <div className={`step-connector ${step >= 2 ? 'active' : ''}`} />
            <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>
              <span>2</span>
              <label>Date & Time</label>
            </div>
            <div className={`step-connector ${step >= 3 ? 'active' : ''}`} />
            <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>
              <span>3</span>
              <label>Your Details</label>
            </div>
            <div className={`step-connector ${step >= 4 ? 'active' : ''}`} />
            <div className={`step-dot ${step >= 4 ? 'active' : ''}`}>
              <span>4</span>
              <label>Review</label>
            </div>
          </div>
        )}

        {/* STEP 1: SERVICE SELECTION */}
        {step === 1 && (
          <div className="modal-step-body">
            <h4 className="step-heading">Step 1: Choose Your Desired Service</h4>
            <p className="step-subtext">Select from our nail studio, bridal makeup, or handcrafted mehndi art.</p>

            <div className="services-selection-list">
              {ALL_SERVICES.map((s) => {
                const isSelected = selectedService === s.title;
                return (
                  <div
                    key={s.id}
                    className={`service-select-item ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => setSelectedService(s.title)}
                  >
                    <div className="select-radio-dot">
                      {isSelected && <div className="dot-inner" />}
                    </div>
                    <div className="select-item-content">
                      <div className="select-item-top">
                        <strong className="select-title">{s.title}</strong>
                        <span className="select-price">{s.price}</span>
                      </div>
                      <span className="select-meta">{s.category.toUpperCase()} • {s.duration}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: DATE & TIME SLOT */}
        {step === 2 && (
          <div className="modal-step-body">
            <h4 className="step-heading">Step 2: Select Date & Available Slot</h4>
            <p className="step-subtext">Choose your preferred day and time for your session with Ankita.</p>

            <div className="date-picker-wrap">
              <label htmlFor="appointment-date" className="input-label">
                <FaCalendarAlt /> Appointment Date:
              </label>
              <input
                id="appointment-date"
                type="date"
                min={today}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="modal-date-input"
                required
              />
              {errors.date && <p className="field-error">{errors.date}</p>}
            </div>

            <div className="slots-picker-wrap">
              <label className="input-label">
                <FaClock /> Available Time Slots:
              </label>
              <div className="slots-grid">
                {timeSlots.map((slot) => {
                  const isSelected = selectedSlot === slot.time;
                  return (
                    <button
                      key={slot.time}
                      type="button"
                      className={`slot-chip ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedSlot(slot.time)}
                    >
                      <span className="slot-time">{slot.time}</span>
                      <span className="slot-period">{slot.period}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="location-toggle-wrap">
              <label className="input-label">
                <FaMapMarkerAlt /> Preferred Location:
              </label>
              <div className="location-options">
                <button
                  type="button"
                  className={`loc-btn ${serviceLocation === 'In-Studio' ? 'active' : ''}`}
                  onClick={() => setServiceLocation('In-Studio')}
                >
                  In-Studio (Salon)
                </button>
                <button
                  type="button"
                  className={`loc-btn ${serviceLocation === 'On-Location Visit' ? 'active' : ''}`}
                  onClick={() => setServiceLocation('On-Location Visit')}
                >
                  On-Location / Bridal Visit
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: CONTACT DETAILS */}
        {step === 3 && (
          <div className="modal-step-body">
            <h4 className="step-heading">Step 3: Contact & Booking Details</h4>
            <p className="step-subtext">Ankita will contact you to confirm your slot availability.</p>

            <div className="form-fields-grid">
              <div className="form-group">
                <label className="input-label">
                  <FaUser /> Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Priya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`modal-text-input ${errors.name ? 'input-error' : ''}`}
                  required
                />
                {errors.name && <p className="field-error">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label className="input-label">
                  <FaPhoneAlt /> Mobile Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`modal-text-input ${errors.phone ? 'input-error' : ''}`}
                  required
                />
                {errors.phone && <p className="field-error">{errors.phone}</p>}
              </div>

              <div className="form-group full-width">
                <label className="input-label">
                  <FaEnvelope /> Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="e.g. priya@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`modal-text-input ${errors.email ? 'input-error' : ''}`}
                />
                {errors.email && <p className="field-error">{errors.email}</p>}
              </div>

              <div className="form-group full-width">
                <label className="input-label">
                  Special Notes / Nail Art Reference / Event Details (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="e.g. Want almond shape acrylic with French ombre, or wedding sangeet date..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="modal-textarea"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: REVIEW & SUBMIT */}
        {step === 4 && (
          <div className="modal-step-body">
            <h4 className="step-heading">Step 4: Review Your Booking Request</h4>
            <p className="step-subtext">Please review all details before submitting to Ankita via WhatsApp.</p>

            <div className="review-summary-card">
              <div className="review-row">
                <span className="review-label">Selected Service:</span>
                <span className="review-value font-semibold">{selectedService}</span>
              </div>
              <div className="review-row">
                <span className="review-label">Estimated Price:</span>
                <span className="review-value text-rose font-semibold">{currentServiceObj.price}</span>
              </div>
              <div className="review-row">
                <span className="review-label">Estimated Duration:</span>
                <span className="review-value">{currentServiceObj.duration}</span>
              </div>
              <div className="review-row">
                <span className="review-label">Date & Time:</span>
                <span className="review-value">{selectedDate} at {selectedSlot}</span>
              </div>
              <div className="review-row">
                <span className="review-label">Service Setting:</span>
                <span className="review-value">{serviceLocation}</span>
              </div>
              <div className="review-row">
                <span className="review-label">Client Name:</span>
                <span className="review-value">{formData.name}</span>
              </div>
              <div className="review-row">
                <span className="review-label">Contact Phone:</span>
                <span className="review-value">{formData.phone}</span>
              </div>
              {formData.email && (
                <div className="review-row">
                  <span className="review-label">Email:</span>
                  <span className="review-value">{formData.email}</span>
                </div>
              )}
              {formData.notes && (
                <div className="review-row">
                  <span className="review-label">Notes:</span>
                  <span className="review-value text-sm">{formData.notes}</span>
                </div>
              )}
            </div>

            <div className="booking-notice-box">
              <FaInfoCircle className="notice-icon" />
              <p>
                Submitting this request connects you directly with Ankita on WhatsApp (+91 7050246826).
                Your slot will be officially confirmed after checking real-time availability.
              </p>
            </div>
          </div>
        )}

        {/* STEP 5: SUCCESS / CONFIRMATION */}
        {step === 5 && (
          <div className="modal-step-body step-success">
            <div className="success-icon-wrap">
              <FaCheckCircle className="success-icon" />
            </div>
            <h3 className="success-title">Booking Request Dispatched!</h3>
            <p className="success-subtitle">
              Your appointment request has been formatted and opened directly in WhatsApp with Ankita.
            </p>

            <div className="confirmation-ticket">
              <div className="ticket-header">
                <span>REQUEST REF</span>
                <strong>{bookingRef}</strong>
              </div>
              <div className="ticket-body">
                <p><strong>Service:</strong> {selectedService}</p>
                <p><strong>Date & Time:</strong> {selectedDate} • {selectedSlot}</p>
                <p><strong>Client:</strong> {formData.name} ({formData.phone})</p>
                <p><strong>Location:</strong> {serviceLocation}</p>
              </div>
            </div>

            <p className="ticket-note">
              Ankita will reply to confirm your reservation and share salon directions or bridal consultation details.
            </p>

            <div className="success-actions">
              <button className="btn-primary w-full" onClick={handleReset}>
                Done & Close
              </button>
            </div>
          </div>
        )}

        {/* Modal Footer Controls */}
        {step <= 4 && (
          <div className="booking-modal-footer">
            {step > 1 ? (
              <button
                type="button"
                className="btn-modal-back"
                onClick={() => setStep(step - 1)}
              >
                <FaArrowLeft /> Back
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                type="button"
                className="btn-modal-next"
                onClick={handleNext}
              >
                <span>Continue</span>
                <FaArrowRight />
              </button>
            ) : (
              <button
                type="button"
                className="btn-modal-submit"
                onClick={handleSubmitBooking}
                disabled={isSubmitting}
              >
                <FaWhatsapp />
                <span>{isSubmitting ? 'Dispatching...' : 'Confirm & Request via WhatsApp'}</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
