import React from 'react';
import './StudyWithUs.css'; 


const WhyStudyWithUs = () => {
  return (
    <div className="why-study-with-us">
      <h4>Why study with us?</h4>
      <div className="features">
        <div className="feature">
          <img className="icon" />
          <p className='feature-text'>We are an internationally recognised university</p>
        </div>
        <div className="feature">
          <i className="icon" />
          <p className='feature-text'>Guaranteed real industry experience in all bachelor degrees</p>
        </div>
        <div className="feature">
          <i className="icon" />
          <p className='feature-text'>High-quality research and teaching</p>
        </div>
        <div className="feature">
          <i className="icon" />
          <p className='feature-text'>Cutting-edge facilities that enhance learning</p>
        </div>
        <div className="feature">
          <i className="icon" />
          <p className='feature-text'>Flexible study options available</p>
        </div>
      </div>
      <h4>Future-ready learning</h4>
      <p className='feature-ready'>Students come first at Swinburne. Our courses are designed with your future in mind. Swinburne offers high-quality teaching, opportunities to engage with industry, state-of-the-art facilities and flexible study options.</p>
    </div>
  );
};

export default WhyStudyWithUs;