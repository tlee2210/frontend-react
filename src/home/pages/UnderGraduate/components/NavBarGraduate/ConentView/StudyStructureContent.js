import React, { useState } from 'react';
import './ContentCSS/StudyStructureContent.css';

const unitsOfStudy = [
  { name: "Financial Information for Decision Making", code: "ACC10007" },
  { name: "Economics for Business Decision Making", code: "ECO10005" },
  // ... other units
];

const unitsOfStudy2 = [
  { name: "Exploring Creativity and Innovation", code: "INV10001" },
  { name: "Fundamentals of Innovation Practice", code: "INV10002" },
  // ... other units
];
const unitsOfStudy3 = [
  { name: "Work Experience In Industry A", code: "WEI20001" },
  { name: "Integrated Professional Placement A - Business", code: "BUS20010" },
  { name: "Work Experience in Industry B", code: "WEI20002" },
  { name: "Integrated Professional Placement B - Business", code: "BUS20011" },
  
];


const StudyStructureContent = () => {
  const [showBusinessUnits, setShowBusinessUnits] = useState(false);
  const [showInnovationUnits, setShowInnovationUnits] = useState(false);
  const [ShowOptionalProfessional, setShowOptionalProfessional] = useState(false);
  return (

    <div className='StudyStructureContent'style={{paddingTop:50}}>
      {/* add unit */}
      <div className="overview-container-overview-Graduated" style={{
        paddingLeft: 95
      }}>
        <h1 className="overview-title-overview-Graduated"></h1>
        <div className="overview-text">
          <div className="study-expo-container-overview-Graduated">
            <h2 className="study-expo-title-overview-Graduated">Add Major</h2>
            <p className="study-expo-text-overview-Graduated">
              Add your major for a more personalised experience.
            </p>
            <button className="button-add-graduate-Header">Add major <i style={{ marginLeft: 30 }} className='bx bx-plus'></i></button>
          </div>
        </div>
      </div>
      {/* how Credit Work */}
      <div className="overview-container-overview-Graduated">
        <h1 className="overview-title-overview-Graduated">How credit points work</h1>
        <div className="overview-text">
          <p className="overview-text-overview-Graduated">
            Successful completion of the Bachelor of Business / Bachelor of Applied Innovation requires students to complete units of study to the value of 400 credit points. All units of study are valued at 12.5 credit points unless otherwise stated
          </p>
          <div className="credit-points-container">
            <div className="credit-points-header">
              <p style={{
                textAlign: 'left'
              }}>Successful completion of the Bachelor of Business / Bachelor of Applied Innovation requires students to complete units of study to the value of 400 credit points. All units of study are valued at 12.5 credit points unless otherwise stated.</p>
            </div>
            <div className="credit-points-container">
              {/* Credit Point Info */}
              <div className="credit-points-info">
                <div className="credit-point-item">
                  <div className="credit-point-circle">18</div>
                  <p>Core units</p>
                </div>
                <span className="plus-symbol">+</span>
                <div className="credit-point-item">
                  <div className="credit-point-circle">8</div>
                  <p>Major units</p>
                </div>
                <span className="plus-symbol">+</span>
                <div className="credit-point-item">
                  <div className="credit-point-circle">4</div>
                  <p>Elective units</p>
                </div>
                <span className="equals-symbol">=</span>
                <div className="credit-point-item">
                  <div className="credit-point-circle-red"><i style={{ color: 'white', fontSize: 50 }} className=' las la-graduation-cap'></i></div>
                  <p>4-year bachelor degree</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* What your course could look like */}
      <div className="overview-container-overview-Graduated">
        <h1 className="overview-title-overview-Graduated">What your course could look like</h1>
        <div className="overview-text">
          <p className="overview-text-overview-Graduated">
            These are some examples of the units currently in this course. Your sequence may vary depending on unit availability, prerequisite requirements and the semester in which you commenced your course.
          </p>
          {/* Bachelor of Business */}
          <div className="bachelor-container">
            <div className="bachelor-header" onClick={() => setShowBusinessUnits(!showBusinessUnits)}>
              <h1>Bachelor of Business</h1>
              {/* Toggle Icon */}
              {showBusinessUnits ? (
                /* Replace with an actual minus icon */
                // <MinusIcon className="icon" />
                <span className="icon">-</span>
              ) : (
                /* Replace with an actual plus icon */
                // <PlusIcon className="icon" />
                <span className="icon">+</span>
              )}
            </div>

            {showBusinessUnits && (
              <div className="units-table">
                <div className="table-header">
                  <span>Units of study</span>
                  <span>Unit code</span>
                </div>
                {unitsOfStudy.map((unit, index) => (
                  <div key={index} className="table-row">
                    <span>{unit.name}</span>
                    <span>{unit.code}</span>
                  </div>
                ))}
              </div>
            )}
          </div>


          {/* Bachelor of Applied Innovation */}
          <div className="bachelor-container">
            <div className="bachelor-header" onClick={() => setShowInnovationUnits(!showInnovationUnits)}>
              <h1>Bachelor of Applied Innovation</h1>
              {/* Toggle Icon */}
              {showInnovationUnits ? (
                /* Replace with an actual minus icon */
                // <MinusIcon className="icon" />
                <span className="icon">-</span>
              ) : (
                /* Replace with an actual plus icon */
                // <PlusIcon className="icon" />
                <span className="icon">+</span>
              )}
            </div>

            {showInnovationUnits && (
              <div className="units-table">
                <div className="table-header">
                  <span>Units of study</span>
                  <span>Unit code</span>
                </div>
                {unitsOfStudy2.map((unit, index) => (
                  <div key={index} className="table-row">
                    <span>{unit.name}</span>
                    <span>{unit.code}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <p style={{ paddingTop: 20 }} className="overview-text-overview-Graduated">
            *Upon enrolment you will choose your Business Practice electives; these include Sustainable Business Practice, Future Work Skills, internships, and study tours.
          </p>
          <div className="overview-container-overview-Graduated" style={{
            paddingLeft: 95
          }}>
            
            <div className="overview-text" style={{
              marginLeft: -94,
              paddingRight:60
              
            }}>
              <div className="study-expo-container-overview-Graduated">
                <h2 className="study-expo-title-overview-Graduated">Want to learn more about the available majors?</h2>
                <p className="study-expo-text-overview-Graduated">
                Learn about all the units you can take in each available major from the course handbook.
                </p>
                <a href='#' style={{color:'red'}}>View Source HandBook</a>
              </div>
            </div>
          </div>

          {/* Optional professional work placement  */}
          <div className="bachelor-container">
            <div className="bachelor-header" onClick={() => setShowOptionalProfessional(!ShowOptionalProfessional)}>
              <h1>Bachelor of Business</h1>
              {/* Toggle Icon */}
              {ShowOptionalProfessional ? (
                /* Replace with an actual minus icon */
                // <MinusIcon className="icon" />
                <span className="icon">-</span>
              ) : (
                /* Replace with an actual plus icon */
                // <PlusIcon className="icon" />
                <span className="icon">+</span>
              )}
            </div>

            {ShowOptionalProfessional && (
              <div className="units-table">
                <div className="table-header">
                  <span>Units of study</span>
                  <span>Unit code</span>
                </div>
                {unitsOfStudy3.map((unit, index) => (
                  <div key={index} className="table-row">
                    <span>{unit.name}</span>
                    <span>{unit.code}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>


    </div>
  );
};

export default StudyStructureContent;