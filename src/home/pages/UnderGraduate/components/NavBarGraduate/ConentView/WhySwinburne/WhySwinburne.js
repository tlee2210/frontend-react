import React from 'react';
import './WhySwinburne.css';
import { Container } from 'reactstrap';
// Assuming you have SVG icons as React components, import them
// import GlobeIcon from './GlobeIcon'; // Example icon component
// ... other icon imports

const WhySwinburne = () => {
  return (
    <div className="why-swinburne-container-overview-WhySwinburne">
      <h2 className="why-swinburne-heading-overview-WhySwinburne">Why Swinburne?</h2>
      <Container>
      <div className="why-swinburne-items-overview-WhySwinburne">
        <div className="why-swinburne-item-overview-WhySwinburne">
          <i className=' las la-globe' style={{
            fontSize:70,
            color:'red'
          }}></i>
          <p>Top 5% of the world’s higher education business schools</p>
        </div>
        <div className="why-swinburne-item-overview-WhySwinburne">
        <i className=' las la-medal' style={{
            fontSize:70,
            color:'red'
          }}></i>
          <p>Top 300 for business and economics</p>
        </div>
        <div className="why-swinburne-item-overview-WhySwinburne">
          {/* <HeartIcon /> */}
          <i className='las la-hand-holding-heart' style={{
            fontSize:70,
            color:'red'
          }}></i>
          <p>#1 in Melbourne for student support</p>
        </div>
        <div className="why-swinburne-item-overview-WhySwinburne">
          {/* <DollarIcon /> */}
          <i className='las la-money-bill-wave-alt' style={{
            fontSize:70,
            color:'red'
          }}></i>
          <p>#1 in Melbourne for graduate salary one year out</p>
        </div>
      </div>
      </Container>
      <div className="why-swinburne-sources-overview-WhySwinburne">
        <a href="#">Sources</a>
      </div>
    </div>
  );
};

export default WhySwinburne;
