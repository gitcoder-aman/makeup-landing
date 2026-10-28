import React, { useState } from 'react';
import { FAQS } from '../data/faqData';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

export function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="section-container">
        {/* Header */}
        <div className="section-header-editorial">
          <div className="tag-pill">
            <FaQuestionCircle className="pill-icon" />
            <span>Got Questions?</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="title-serif-italic">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our nail extension methods, makeup trials, booking timeline, and aftercare.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="faq-accordion-container">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <FaChevronDown className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                </button>
                {isOpen && (
                  <div className="faq-answer-pane">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
