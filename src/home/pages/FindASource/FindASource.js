import React from 'react';
import './FindASource.css';
import ParticlesAuth from '../../layouts/ParticlesAuth';
import BasicTables from './BasicTables';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import banner from '../../../assets/images/small/4.png'; // Corrected the file path

const FindASource = () => {
  return (
    <div style={{paddingTop:100}}>
       <ParticlesAuth>

<div className="find-a-source-main-banner">
  <img className="find-a-source-banner-image" src={banner} alt="Students working together" />
  <div className="find-a-source-text-box" style={{bottom:-90}}>
    <div className="find-a-source-text-content1">
      <h1>Courses Search</h1>
      <h2>Bachelor of Applied Innovation</h2>
      <p>Don't just graduate, innovate. The Bachelor of Applied Innovation aims to make you think like an innovator, explore bold ideas, and create unprecedented solutions.</p>
      <div className="find-a-source-buttons">
        <button className="btn learn-more">Find A Source now</button>
      </div>
    </div>
  </div>
</div>
<Container>

  <p className="intro-fs" style={{ paddingTop: 50 }}>
    Add the Bachelor of Applied Innovation to one of our popular bachelor degrees as a double. You'll grow creative confidence, learn how to collaborate in team, and hone your leadership potential, in this first degree of its kind in Victoria.
  </p>
  <h2>What is a Bachelor of Applied Innovation?</h2>
  <p className="description-fs">
    It's the degree that helps you understand and explore disruption and bring ideas to life. You'll work with different disciplines, methods and ways of looking at the world to find solutions to the world's biggest challenges.
  </p>
  <p className="description-fs">
    Want to learn how to experiment, challenge assumptions, build prototypes and evolve ideas? Do you want to apply innovation to shape your industry's future, now?
  </p>
  <ul className="skills-fs"> You’ll take part in industry projects, design challenges, innovation sprints, and hackathons. And graduate with the skills to:
    <li>implement new ideas and help organisations be future-ready, now,</li>
    <li>combine data-informed insights with imagination, intellectual curiosity and initiative,</li>
    <li>use technology to develop the kind of innovation the world needs,</li>
    <li>make decisions based on analytical and strategic thinking, human understanding, and respect for future generations.</li>
  </ul>
  <h3>Learn from industry</h3>
  <p className="industry-fs">
    Thrive in Swinburne's culture of creativity and innovation built through decades of tight-knit relationships with industry.
  </p>
  <p className="industry-sf">
    Enjoy access to a broad array of industry partners in creating a comprehensive innovation project portfolio. Previous partners include CSIRO, Panasonic, St Vincent's and ANZ.
  </p>
  <p className="industry-footer-fs">
    Graduate ready to be the innovator your industry needs.
  </p>

</Container>
<BasicTables />
<div>
  <div className="cta-container">
    <div className="cta-content">
      <h1 className="cta-heading">Want to graduate ready to be the innovator your industry needs?</h1>
      <p className="cta-subheading">Let's chat.</p>
      <Link to="/about-us" className="button-showinformation">
        <i className='mdi mdi-information-outline'></i>
        Contact Us
        <i className='mdi mdi-arrow-right'></i>
      </Link>
    </div>
  </div>
</div>
</ParticlesAuth>
    </div>
   
  );
};

export default FindASource;