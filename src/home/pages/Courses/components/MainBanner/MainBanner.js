import React from 'react';
import './MainBanner.css';
import banner from "../../../../../assets/images/small/3.png"; 

const MainBanner = () => {
  return (
    <div className="main-banner">
      <img className="banner-image" src={banner} alt="Students working together" />
      <div className="text-box">
        <div className="text-content">
          <h1>Courses</h1>
          <h2>The new Bachelor of Business</h2>
          <p>One-degree, endless opportunities. Upgrade your skills with industry-leading digital tools and become a next-gen business grad.</p>
          <div className="buttons">
            <button className="btn learn-more">Learn more now</button>
            <button className="btn browse">No thanks, I want to browse by study area.</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;