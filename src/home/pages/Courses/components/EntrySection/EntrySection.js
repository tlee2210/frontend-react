import React from 'react';
import './EntrySection.css';

function EntrySection() {
  return (
    <div className="entry-section">
      <h1 className="main-title">Your entry into study, sorted</h1>
      <p className="main-description">
        Whether you’re studying for the first time, always wanted to study overseas or you're just ready to upskill and make the next move in your career, Swinburne has options to suit your needs. Start planning your academic future at Swinburne.
      </p>
      <a href="#" className="main-link">Learn more about planning your future →</a>

      <div className="promo-box">
        <i className="la las la-money-bill-alt"></i>
        <div className="promo-content">
          <h2 className="promo-title">Cut to your new career_now with an Alumni Discount</h2>
          <p className="promo-description">
            Swinburne Alumni receive a 10% discount on short courses, microcredentials, university certificates and any full fee paying course. Led by industry experts, they are designed to accelerate your career, now.
          </p>
          <a href="#" className="promo-link">Discover our certificates, micro-credentials and short courses →</a>
        </div>
      </div>
    </div>
  );
}

export default EntrySection;