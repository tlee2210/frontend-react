import React from 'react';
import { Button } from 'reactstrap';


const HeaderSourcePage = () => {
  return (
    <header className="header-container-graduate-Header">
      <div className="header-content-graduate-Header">
        <h1 className="header-title-graduate-Header" style={{color:'#5a4f4f'}}>
        COURSE
        </h1>
        <div className="header-actions-graduate-Header">
          <div className="student-status-graduate-Header fs-3">
            <span>The new Bachelor of Business</span>
          </div>
        </div>
        <p className='mt-3 fs-6'>One-degree, endless opportunities. Upgrade your skills with industry-leading digital tools and become a next gen_business grad.</p>
        <Button color='danger mt-3' outline> Learn more about</Button>
      </div>
    </header>
  );
};

export default HeaderSourcePage;