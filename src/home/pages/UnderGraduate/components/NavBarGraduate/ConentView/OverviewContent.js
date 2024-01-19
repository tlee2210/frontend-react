import React from 'react';
import './ContentCSS/OverviewContent.css'; // Import your CSS file
import ProfessionalAccreditations from './ProfessionalAccreditations/ProfessionalAccreditations';
import WhySwinburne from './WhySwinburne/WhySwinburne';

const OverviewContent = () => {
    return (
        <div className='OverViewContent' style={{paddingTop:50}}>
            {/* Overview */}
            <div className="overview-container-overview-Graduated">
                <h1 className="overview-title-overview-Graduated">Overview</h1>
                <div className="overview-text">
                    <p className="overview-text-overview-Graduated">
                        Anyone can enter the world of business, but not everyone will succeed. Learn essential
                        management skills to carve out career success with a Bachelor of Business / Bachelor of
                        Applied Innovation. You'll collaborate and solve complex problems in a creative way and
                        be able to develop and deliver projects that adapt to uncertain and changing contexts.
                        Prepare to be job-ready.
                    </p>
                    <a href="#" className="course-handbook-link-overview-Graduated">
                        View Bachelor of Business / Bachelor of Applied Innovation course handbook
                    </a>
                    <a href="#" className="course-guide-link-overview-Graduated">
                        Get a copy of our course guide
                    </a>
                    <div className="study-expo-container-overview-Graduated">
                        <h2 className="study-expo-title-overview-Graduated">Thinking about applying for 2024?</h2>
                        <p className="study-expo-text-overview-Graduated">
                            Swinburne’s 2024 Study Expo is your one-stop-shop for information and assistance. Chat to
                            academics and admissions staff, browse study areas and course options, get tailored advice
                            and more.
                        </p>
                        <a href="#" className="register-link-overview-Graduated">
                            Register now
                        </a>
                    </div>
                </div>
            </div>
            {/* Your industry experience */}
            <div className="overview-container-overview-Graduated">
                <h1 className="overview-title-overview-Graduated">Your industry experience</h1>
                <div className="overview-text">
                    <p className="overview-text-overview-Graduated">
                        We offer hands-on learning that mirrors the industry – it’s just like working in an innovation lab. You’ll take part in industry projects, design challenges, innovation sprints, and hackathons. This double degree teaches you how the industry does innovation.
                    </p>
                    <a href="#" className="course-handbook-link-overview-Graduated">
                    Explore Work Integrated Learning 
                    </a>
                </div>
            </div>
            {/* Skills you’ll learn */}
            <div className="overview-container-overview-Graduated">
                <h1 className="overview-title-overview-Graduated">Skills you’ll learn</h1>
                <div className="overview-text">
                    
                    <ul className="overview-text-overview-Graduated-column">
                    <li> Communication skills</li>
                    <li> Teamwork skills</li>
                    <li> Broad business knowledge</li>
                    <li> Broad business knowledge</li>
                    <li> Broad business knowledge</li>
                    <li> Broad business knowledge</li>
                   </ul>
                    
                  
                   
                
                </div>
            </div>
            {/* Your career opportunities */}
            <div className="overview-container-overview-Graduated">
                <h1 className="overview-title-overview-Graduated">Your career opportunities</h1>
                <div className="overview-text">
                    
                    <ul className="overview-text-overview-Graduated-column">
                    <li> Innovation manager 1</li>
                    <li> Innovation manager 2</li>
                    <li> Innovation manager 3</li>
                    <li> Innovation manager 4</li>
                    <li> Innovation manager 5</li>
                    <li> Innovation manager 6</li>
                   </ul>
                    
                  
                   
                
                </div>
            </div>
            {/* Key Codes */}
            <div className="overview-container-overview-Graduated">
                <h1 className="overview-title-overview-Graduated">Key Codes </h1>
                <div className="overview-text">
                    <p className="overview-text-overview-Graduated">
                    VTAC Code (CSP)
                    </p>
                    <p>3400212531</p>
                </div>
            </div>
            <ProfessionalAccreditations/>
            <WhySwinburne/>
        </div>
        


    );
};

export default OverviewContent;