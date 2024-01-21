import React from "react";
import "./HeaderGraduate.css";

const HeaderGraduate = () => {
  return (
    <header className="header-container-graduate-Header">
      <div className="header-content-graduate-Header">
        <span className="header-code-graduate-Header">
          BB-BUSAIN1 • Double degree
        </span>
        <h1 className="header-title-graduate-Header">
          Bachelor of Business/Bachelor of Applied Innovation
        </h1>
        <div className="header-actions-graduate-Header">
          <button className="button-add-graduate-Header">
            Add major <i style={{ marginLeft: 30 }} className="bx bx-plus"></i>
          </button>
          <div className="student-status-graduate-Header">
            <span>
              I am a domestic student{" "}
              <a href="#" className="change-graduate-Header-red">
                Change
              </a>{" "}
            </span>
          </div>
        </div>
        <div className="details-container-graduate-Header">
          <div className="detail-graduate-Header">
            <strong>60</strong>
            <span style={{ fontSize: 12 }}>
              ATAR Guaranteed Entry Score or more entry options
            </span>
          </div>
          <div className="detail-graduate-Header">
            <strong>
              <i style={{ fontSize: 25 }} className="las la-clock"></i>
            </strong>
            <span style={{ fontSize: 12 }}>
              4 years full-time or equivalent part-time
            </span>
          </div>
          <div className="detail-graduate-Header">
            <strong>
              <i className="mdi mdi-hospital-building"></i>
            </strong>
            <span style={{ fontSize: 12 }}>Hawthorn</span>
          </div>
          <div className="detail-graduate-Header">
            <strong>
              <i className="las la-calendar"></i>
            </strong>
            <span style={{ fontSize: 12 }}>Semester 2</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderGraduate;
