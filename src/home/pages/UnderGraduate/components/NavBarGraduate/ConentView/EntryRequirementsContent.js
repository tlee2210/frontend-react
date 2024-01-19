import React from 'react';
import './ContentCSS/EntryRequirementsContent.css'
const EntryRequirementsContent = () => {
  return (
    <div>
      <div className='EntryRequirementsContent' style={{paddingTop:50}}>
        {/* Qualifications */}
        <div className="overview-container-overview-Graduated">
          <h1 className="overview-title-overview-Graduated">Qualifications</h1>
          <div className="overview-text">

            <ul className="text-Entry-requiment"> One of the following :
              <li>Successful completion of the Victorian Certificate of Education (VCE) or its equivalent, such as an interstate or international Year 12 qualification</li>
              <li>Completion or partial completion of an approved tertiary qualification (including certificates, diplomas, advanced diplomas, associate degrees and degrees).</li>
            </ul>
            <p className="text-Entry-requiment">Students admitted to the course with prior tertiary studies that satisfy part of the academic requirements of this course may be eligible for academic credit.</p>
            <br />
            <p className="text-Entry-requiment"> without a formal qualification but with significant and relevant work experience will be considered if they can demonstrate that they can undertake the course with a reasonable prospect of success.</p>
            <br />
            <p className="text-Entry-requiment">The University may determine selection criteria and restrictions in respect of courses to apply in addition to these entry requirements.</p>
            <div className='overview-text'>
              <div className='row'>
                <div className='col-sm-6 col-md-2 course-fees__block' style={{
                  marginLeft: -184,
                }}>
                  <p className='p-entry-requirement-edit'>ATAR Guaranteed Entry Score</p>
                  <h4 className='h4-entry-requirement-edit'>60</h4>
                </div>
                <div className='col-sm-6 col-md-2 course-fees__block' style={{
                  marginLeft: 129,
                }}>
                  <p className='p-entry-requirement-edit-2'>2023 lowest rank to receive an offer [before adjustment pts.]</p>
                  <h4 className='h4-entry-requirement-edit'>67.85</h4>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* Course prerequisites */}
        <div className="overview-container-overview-Graduated">
          <h1 className="overview-title-overview-Graduated">Course prerequisites</h1>
          <div className="overview-text">
            <ul className="text-Entry-requiment">
              <li>VCE Units 3 and 4: a minimum study score of 25 in any English (except EAL) or 30 in English as Alternate Language (EAL) or equivalent</li>
            </ul>
            <div className="study-expo-container-overview-Graduated">
              <h2 className="study-expo-title-overview-Graduated">Admission requirements</h2>
              <p className="study-expo-text-overview-Graduated">
                Meeting the minimum entry requirements for the course does not guarantee an offer of a place. See <a href='#' style={{ color: 'red' }}>admission requirements</a> for general information about the admission process.
              </p>
              <a href="#" className="register-link-overview-Graduated">
                View Source HandBook
              </a>
            </div>
          </div>
        </div>
        {/* Credit transfer */}
        <div className="overview-container-overview-Graduated">
          <h1 className="overview-title-overview-Graduated">Credit transfer</h1>
          <div className="overview-text">

            <p className="overview-text-overview-Graduated">
            Credit is granted in recognition of previous study and/or experience and allows students to gain advanced standing towards their course. Applicants are assessed on a case-by-case basis.
            </p>
            <a style={{color:'red'}} href='#'>Learn more about credit </a>
          </div>
        </div>
        {/* Your career opportunities */}
        <div className="overview-container-overview-Graduated">
          <h1 className="overview-title-overview-Graduated">Recognition of prior learning</h1>
          <div className="overview-text">

            <p className="overview-text-overview-Graduated">
            Recognition of Prior Learning (RPL) allows students to gain credit (advanced standing) towards their course in recognition of skills and knowledge gained through work experience, life experience and/or formal training. Applicants are assessed on a case-by-case basis.
            </p>
            <a style={{color:'red'}} href='#'>Learn more about RPL </a>
          </div>
        </div>
        {/* Key Codes */}
      </div>
    </div>
  );
};

export default EntryRequirementsContent;