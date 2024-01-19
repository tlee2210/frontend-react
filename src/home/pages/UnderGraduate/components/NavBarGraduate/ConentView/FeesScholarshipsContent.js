import React from 'react';
import './ContentCSS/FeesScholarshipsContent.css';

const FeesScholarshipsContent = () => {
  return (
    <div style={{ paddingTop: 50 }}>
      <div className='FeesScholarshipsContent' style={{paddingTop:50}}>
        {/* 2024 fees */}
        <div className="overview-container-overview-Graduated">
          <h1 className="overview-title-overview-Graduated">2024 fees</h1>
          <div className="overview-text">

            <div className='overview-text'>
              <div className='row'>
                <div className='col-sm-6 col-md-2 course-fees__block' style={{
                  marginLeft: -184,
                }}>
                  <p className='p-entry-requirement-edit'>Yearly fee* ($AUD)</p>
                  <h4 className='h4-entry-requirement-edit'>$16,323</h4>
                </div>
                <div className='col-sm-6 col-md-2 course-fees__block' style={{
                  marginLeft: 129,
                }}>
                  <p className='p-entry-requirement-edit-2' style={{ marginBottom: 29 }}>Total fee* ($AUD)</p>
                  <h4 className='h4-entry-requirement-edit'>$65,292</h4>
                </div>
              </div>
              {/* Card */}
              <div className="study-expo-container-overview-Graduated" style={{ marginLeft: -189 }}>
                <h2 className="study-expo-title-overview-Graduated">Fees are estimates only</h2>
                <p className="study-expo-text-overview-Graduated">
                  The student tuition fees as published are subject to change given individual circumstances at enrolment. These fees apply to 2024 unit enrolments for HE Commonwealth Supported Place (CSP) and Undergraduate Full Fee Paying (FFP) only and may change for units studied in future years. If part-time study is permitted, annual fees will be proportionally lower based on the number of units taken per semester.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* How do I pay my fees? */}
        <div className="overview-container-overview-Graduated">
          <h1 className="overview-title-overview-Graduated">How do I pay my fees?</h1>
          <div className="overview-text">

            <p className="overview-text-overview-Graduated">
              HECS-HELP is a loan and discount scheme available to you if you are eligible and enrolled in a Commonwealth supported place. A HECS-HELP loan can cover all or part of your contribution amount. You can also choose to pay your fees up front.
            </p>
            <a style={{ color: 'red' }} href='#'>Find out more fee </a>
          </div>
        </div>
        {/* Eligibility for HECS-HELP */}
        <div className="overview-container-overview-Graduated">
          <h1 className="overview-title-overview-Graduated">Eligibility for HECS-HELP</h1>
          <div className="overview-text">

            <ul className="overview-text-overview-Graduated"> You are eligible for a HECS-HELP loan if you have been offered a Commonwealth Supported Place (CSP) for an undergraduate degree at Swinburne or a UniLink course, and you:
              <li>
                are an Australian citizen and doing at least one unit of your course in Australia; or
              </li>
              <li>
                hold a permanent humanitarian visa and will be living in Australia for the duration of your course; or
              </li>
              <li>
                hold a New Zealand Special Category visa and meet the special eligibility requirements for New Zealand citizens.
              </li>
            </ul>
            <a style={{ color: 'red' }} href='#'>Learn more about HECS-HELP </a>
          </div>
        </div>

        {/* Student services and amenities fee */}
        <div className="overview-container-overview-Graduated">
          <h1 className="overview-title-overview-Graduated">Student services and amenities fee</h1>
          <div className="overview-text">

            <p className="text-Entry-requiment">
              This funding serves to improve the student experience at Swinburne. You may use many or just some of the services and amenities that the fee provides.
            </p>
            <p className="text-Entry-requiment">The fee shown in the capped amount for 2024.</p>
            <br />
            <div className='overview-text'>
              <div className='row'>
                <div className='col-sm-6 col-md-2 course-fees__block' style={{
                  marginLeft: -184,
                }}>
                  <p className='p-entry-requirement-edit'>SSAF fee* ($AUD)</p>
                  <h4 className='h4-entry-requirement-edit'>$351.00</h4>
                </div>
              </div>
            </div>
            <a style={{ color: 'red' }} href='#'>Learn more about HECS-HELP </a>
          </div>

        </div>

        {/* Scholarships */}
        <div className="overview-container-overview-Graduated">
          <h1 className="overview-title-overview-Graduated">Scholarships</h1>
          <div className="overview-text">

            <p className="overview-text-overview-Graduated">
              Scholarship applications for 2023 are open. Scholarships at Swinburne are about providing opportunity, promoting equity and recognising excellence and achievement. We want you to reach your potential and achieve your life and career goals.
            </p>
            <p className="overview-text-overview-Graduated">
              Our handy guide will assist you to gather documents for your application.
            </p>
            <a style={{ color: 'red' }} href='#'>Find more about Scholarships </a>
          </div>
        </div>

        {/* Professional placement fees */}
        <div className="overview-container-overview-Graduated">
          <h1 className="overview-title-overview-Graduated">Professional placement fees</h1>
          <div className="overview-text">

            <p className="overview-text-overview-Graduated">
            Students who participate in a six- or 12-month professional placement will be subject to an increase in total course fees.
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default FeesScholarshipsContent;