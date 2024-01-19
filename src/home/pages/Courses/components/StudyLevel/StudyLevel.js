import React from 'react';
import './StudyLevel.css';


function StudyLevel() {
  return (
    <div className="study-levels-section">
      <div className="title-container">
        <i className='las las la-graduation-cap icon'></i>
        <h2 className="title">Study levels designed for you</h2>
      </div>
      <p className="description">
        Find the perfect course for you through our wide range of study levels and learning options. From bachelor degrees to PhDs, diplomas to short courses and even studying a single unit, learn more about the study levels we offer here at Swinburne.<a href="#" className="learn-more-link">Learn more →</a>
      </p>
      
    </div>
  );
}

export default StudyLevel;