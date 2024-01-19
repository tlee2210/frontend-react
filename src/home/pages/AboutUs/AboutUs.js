import React from 'react';
import './AboutUs.css';
import ContactPage from './components/ContactPage';
import ContactForm from './components/ContactForm';
import ParticlesHome from "../../layouts/ParticlesAuth";
// Import Data
import Sidebar from '../../layouts/Sidebar';
import Header from './Header';



function AboutUs() {
  return (   
    <div style={{paddingTop:150}}>
      <ParticlesHome>
        <Header />
        <ContactPage />
        <ContactForm />    
      </ParticlesHome>
    </div>
       
  );
}

export default AboutUs;