import React from 'react';
import './SectionIndustry.css';

function SectionHeader({ title, text, linkText, linkHref }) {
  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <p className="section-text">{text}</p>
      <a href={linkHref} className="section-link">{linkText}</a>
    </div>
  );
}

function SectionIndustry() {
  return (
    <div className="content">
      <SectionHeader
        title="Real industry experience"
        text="At Swinburne, your education is more than reading; it's doing. It's Work Integrated Learning (WIL) in the form of placements, internships or Industry-linked projects, and it's guaranteed in all our bachelor degrees. Not looking to study a bachelor degree? That's ok. There's plenty of WIL opportunities available to all Swinburne students."
        linkText="Learn more about Work Integrated Learning"
        linkHref="#"
      />
      <SectionHeader
        title="Study your way with our flexible options"
        text="We understand that you may have to organise your studies around family and other commitments. That's why we offer flexible course options to allow you to study part-time, over the weekends, at nights, online or even out of the country."
        linkText="Learn more about course delivery options"
        linkHref="#"
      />
    </div>
  );
}

export default SectionIndustry;