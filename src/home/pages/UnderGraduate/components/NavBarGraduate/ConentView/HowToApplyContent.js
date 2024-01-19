import React from 'react';
import './ContentCSS/HowToApplyContent.css';

const HowToApplyContent = () => {
  return (
    <div className='HowToApplyContent' style={{paddingTop:50}}>
      {/* Apply directly */}
      <div className="fees-scholarships-container-how-to-apply">
        <div className="title-container-how-to-apply">
          <h2>Apply directly</h2>
        </div>
        <div className="description-container-how-to-apply">
          <p>Ready to take on a new challenge and reach your academic goals? If you already know which course you want to study and understand the entry requirements, what are you waiting for? Apply online! Remember, you cannot apply directly if you have an active VTAC application.</p>
        </div>
        <div className="apply-container-how-to-apply">
          <div className="course-code-container-how-to-apply">
            <h3>Course code</h3>
            <p>BB-BUSAIN1</p>
            <button className="apply-button-how-to-apply">Apply directly</button>
          </div>
        </div>
      </div>
      {/* Apply directly */}
      <div className="fees-scholarships-container-how-to-apply">
        <div className="title-container-how-to-apply">
          <h2>Apply through VTAC</h2>
        </div>
        <div className="description-container-how-to-apply">
          <p>VTAC is the central office that administers the application processes for places in tertiary courses, scholarships and the Special Entry Access Scheme at universities, TAFEs and independent tertiary colleges in Victoria.</p>
        </div>
        <div className="apply-container-how-to-apply">
          <div className="course-code-container-how-to-apply">
            <h3>VTAC Code (CSP)</h3>
            <p>3400212531 (CSP)</p>
            <button className="apply-button-how-to-apply">Apply through VTAC</button>
          </div>
        </div>
      </div>

      {/* Tabnle */}
      <div className="dates-container-how-to-apply">
      <section className="start-dates-how-to-apply">
        <h2 className="heading-how-to-apply">Start dates</h2>
        <div className="table-how-to-apply">
          {/* Rows for Semester start dates */}
          <div className="row-how-to-apply">
            <div className="semester-how-to-apply">Semester 1</div>
            <div className="location-how-to-apply">Hawthorn</div>
            <div className="apply-date-how-to-apply">21-February-2024</div>
            <div className="start-date-how-to-apply">26-February-2024</div>
          </div>
          <div className="row-how-to-apply">
            <div className="semester-how-to-apply">Semester 2</div>
            <div className="location-how-to-apply">Hawthorn</div>
            <div className="apply-date-how-to-apply">24-July-2024</div>
            <div className="start-date-how-to-apply">29-July-2024</div>
          </div>
        </div>
      </section>
      
      <section className="upcoming-events-how-to-apply">
        <h2 className="heading-how-to-apply">Upcoming events</h2>
        <div className="event-how-to-apply">
          <div className="event-name-how-to-apply">2024 Study Expo</div>
          <div className="event-date-how-to-apply">23-January-2024</div>
        </div>
      </section>
    </div>
    </div>

  );
};

export default HowToApplyContent;