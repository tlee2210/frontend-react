import React, { useState } from "react";
import {
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  Container,
  TabPane,
  Col,
  Row,
} from "reactstrap";
import "./NavBarGraduate.css";
import classnames from "classnames";

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

const MainPage = ({ data, data2 }) => {
  // console.log(data2);
  // const [showBusinessUnits, setShowBusinessUnits] = useState(false);
  const [showBusinessUnits, setShowBusinessUnits] = useState(
    new Array(data2.length).fill(false)
  );
  const [showInnovationUnits, setShowInnovationUnits] = useState(false);
  const [ShowOptionalProfessional, setShowOptionalProfessional] =
    useState(false);

  // Border Top Nav
  const [topBorderTab, settopBorderTab] = useState("1");
  const topBordertoggle = (tab) => {
    if (topBorderTab !== tab) {
      settopBorderTab(tab);
    }
  };
  // Border Top Nav Justified Tabs
  const [topBorderjustifyTab, settopBorderjustifyTab] = useState("1");
  const topBorderJustifytoggle = (tab) => {
    if (topBorderjustifyTab !== tab) {
      settopBorderjustifyTab(tab);
    }
  };

  return (
    <Card>
      <CardBody style={{ padding: 0 }}>
        <Nav
          tabs
          className="fs-5 nav nav-tabs nav-justified nav-border-top nav-border-top-success mb-3"
        >
          <NavItem>
            <NavLink
              style={{ cursor: "pointer", padding: 20 }}
              className={classnames({ active: topBorderTab === "1" })}
              onClick={() => {
                topBordertoggle("1");
              }}
            >
              <i className="ri-home-5-line align-middle me-1"></i> Overview
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer", padding: 20 }}
              className={classnames({ active: topBorderTab === "2" })}
              onClick={() => {
                topBordertoggle("2");
              }}
            >
              <i className="ri-user-line me-1 align-middle"></i>
              Entry requirements
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer", padding: 20 }}
              className={classnames({ active: topBorderTab === "3" })}
              onClick={() => {
                topBordertoggle("3");
              }}
            >
              <i className="ri-question-answer-line align-middle me-1"></i>Study
              structure
            </NavLink>
          </NavItem>
        </Nav>
        <Container fluid>
          <TabContent activeTab={topBorderTab} className="text-muted">
            {/* Overview */}
            <TabPane tabId="1" id="nav-border-justified-home">
              <div className="OverViewContent" style={{ paddingTop: 50 }}>
                {/* Overview Content */}
                <div className="row" style={{ paddingBottom: 70 }}>
                  <div className="col-sm-4">
                    <h2 className="overview-title-overview-Graduated">
                      Overview
                    </h2>
                  </div>
                  {/* Study Expo Container */}
                  <div className="col-sm-8">
                    <p className="fs-5">{data.description}</p>
                  </div>
                </div>

                {/* Skills you’ll learn */}
                <div className="row">
                  {/* Overview Container */}
                  <div className="col-sm-4">
                    <div className="overview-container-overview-Graduated">
                      <h1 className="overview-title-overview-Graduated">
                        Skills you’ll learn
                      </h1>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <Row>
                      {data?.skill_learn?.split(",").map((item, index) => (
                        // <li key={index}>{opportunity.trim()}</li>
                        <Col className="mb-2" key={index} md={6}>
                          {item.trim()}
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>
                {/* Your career opportunities */}
                <div className="row pb-3">
                  <div className="col-sm-4">
                    <div className="overview-container-overview-Graduated">
                      <h1 className="overview-title-overview-Graduated">
                        Your career opportunities
                      </h1>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <Row>
                      {data?.opportunities
                        ?.split(",")
                        .map((opportunity, index) => (
                          <Col className="mb-2" key={index} md={6}>
                            {opportunity.trim()}
                          </Col>
                        ))}
                    </Row>
                  </div>
                </div>
                {/* Key Codes */}
                <div className="row">
                  <div className="col-sm-4">
                    <div className="overview-container-overview-Graduated">
                      <h1 className="overview-title-overview-Graduated">
                        Key Codes{" "}
                      </h1>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <p className="overview-text-overview-Graduated">
                      VTAC Code (CSP)
                    </p>
                    <p>{data.code}</p>
                  </div>
                </div>
              </div>
              {/* Why Swinburne? */}
              <div style={{ backgroundColor: "red" }}>
                <div className="why-swinburne-container-overview-WhySwinburne">
                  <h2 className="why-swinburne-heading-overview-WhySwinburne">
                    Why Swinburne?
                  </h2>
                  <div className="why-swinburne-items-overview-WhySwinburne">
                    <div className="why-swinburne-item-overview-WhySwinburne">
                      <i
                        className=" las la-globe"
                        style={{
                          fontSize: 70,
                          color: "red",
                        }}
                      ></i>
                      <p>
                        Top 5% of the world’s higher education business schools
                      </p>
                    </div>
                    <div className="why-swinburne-item-overview-WhySwinburne">
                      <i
                        className=" las la-medal"
                        style={{
                          fontSize: 70,
                          color: "red",
                        }}
                      ></i>
                      <p>Top 300 for business and economics</p>
                    </div>
                    <div className="why-swinburne-item-overview-WhySwinburne">
                      {/* <HeartIcon /> */}
                      <i
                        className="las la-hand-holding-heart"
                        style={{
                          fontSize: 70,
                          color: "red",
                        }}
                      ></i>
                      <p>#1 in Melbourne for student support</p>
                    </div>
                    <div className="why-swinburne-item-overview-WhySwinburne">
                      {/* <DollarIcon /> */}
                      <i
                        className="las la-money-bill-wave-alt"
                        style={{
                          fontSize: 70,
                          color: "red",
                        }}
                      ></i>
                      <p>#1 in Melbourne for graduate salary one year out</p>
                    </div>
                  </div>
                  <div className="why-swinburne-sources-overview-WhySwinburne">
                    <a href="#">Sources</a>
                  </div>
                </div>
              </div>
            </TabPane>
            {/* Entry requirements */}
            <TabPane tabId="2" id="nav-border-justified-profile">
              <div
                className="EntryRequirementsContent"
                style={{ paddingTop: 50 }}
              >
                {/* Qualifications */}
                <div className="row">
                  {/* Title */}
                  <div className="col-sm-4">
                    <h2 className="overview-title-overview-Graduated">
                      Qualifications
                    </h2>
                  </div>
                  {/* Content */}
                  <div className="col-sm-8">
                    <ul className="text-Entry-requiment">
                      <li>
                        Successful completion of the Victorian Certificate of
                        Education (VCE) or its equivalent, such as an interstate
                        or international Year 12 qualification
                      </li>
                      <li>
                        Completion or partial completion of an approved tertiary
                        qualification (including certificates, diplomas,
                        advanced diplomas, associate degrees and degrees).
                      </li>
                    </ul>
                    <p className="text-Entry-requiment">
                      Students admitted to the course with prior tertiary
                      studies that satisfy part of the academic requirements of
                      this course may be eligible for academic credit.
                    </p>
                    <p className="text-Entry-requiment">
                      Without a formal qualification but with significant and
                      relevant work experience will be considered if they can
                      demonstrate that they can undertake the course with a
                      reasonable prospect of success.
                    </p>
                    <p className="text-Entry-requiment">
                      The University may determine selection criteria and
                      restrictions in respect of courses to apply in addition to
                      these entry requirements.
                    </p>
                    <div className="container my-3">
                      <div className="row">
                        <div className="col-md-2 d-flex align-items-center">
                          <div>
                            <p className="mb-1 ">ATAR Guaranteed Entry Score</p>
                            <p
                              className="fs-1 fw-bold"
                              style={{ color: "black" }}
                            >
                              {data.entryScore}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course prerequisites */}
                <div className="row">
                  {/* Title */}
                  <div className="col-sm-4">
                    <h2 className="overview-title-overview-Graduated">
                      Course prerequisites
                    </h2>
                  </div>
                  {/* Content */}
                  <div className="col-sm-8">
                    <ul className="text-Entry-requiment">
                      <li>{data?.courses?.name}</li>
                      <li>{data.courses?.description}</li>
                    </ul>
                    {/* <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-success rounded mb-0">
                      <p className="text-body mb-2 fw-bold">
                        Admission requirements
                      </p>
                      <p className="study-expo-text-overview-Graduated ">
                        Meeting the minimum entry requirements for the course
                        does not guarantee an offer of a place. See admission
                        requirements for general information about the admission
                        process.
                      </p>
                      <a
                        href="#"
                        className="text-Entry-requiment"
                        style={{ color: "red" }}
                      >
                        View Source HandBook
                      </a>
                    </blockquote> */}
                  </div>
                </div>

                {/* Recognition of prior learning */}
                <div className="row" style={{ paddingTop: 70 }}>
                  {/* Title */}
                  <div className="col-sm-4">
                    <h2 className="overview-title-overview-Graduated">
                      Recognition of prior learning
                    </h2>
                  </div>
                  {/* Content */}
                  <div className="col-sm-8">
                    <p className="text-Entry-requiment">
                      Recognition of Prior Learning (RPL) allows students to
                      gain credit (advanced standing) towards their course in
                      recognition of skills and knowledge gained through work
                      experience, life experience, and/or formal training.
                      Applicants are assessed on a case-by-case basis.
                    </p>
                    <p
                      className="text-Entry-requiment cursor-pointer"
                      style={{ color: "red" }}
                    >
                      Learn more about RPL
                    </p>
                  </div>
                </div>
              </div>
            </TabPane>
            {/* Study Structure */}
            <TabPane tabId="3" id="nav-border-justified-messages">
              <div className="StudyStructureContent" style={{ paddingTop: 50 }}>
                {/* how Credit Work */}
                <div className="row" style={{ paddingTop: 70 }}>
                  <div className="col-sm-4 align-self-end">
                    <h1 className="overview-title-overview-Graduated">
                      How credit points work
                    </h1>
                  </div>
                  <div className="col-sm-8">
                    <p className="text-Entry-requiment">
                      Successful completion of the Bachelor of Business /
                      Bachelor of Applied Innovation requires students to
                      complete units of study to the value of 400 credit points.
                      All units of study are valued at 12.5 credit points unless
                      otherwise stated.
                    </p>
                    <div className="credit-points-container">
                      <div className="credit-points-header">
                        <p style={{ textAlign: "left" }}>
                          Successful completion of the Bachelor of Business /
                          Bachelor of Applied Innovation requires students to
                          complete units of study to the value of 400 credit
                          points. All units of study are valued at 12.5 credit
                          points unless otherwise stated.
                        </p>
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
                            <div className="credit-point-circle-red">
                              <i
                                style={{ color: "white", fontSize: 50 }}
                                className="las la-graduation-cap"
                              ></i>
                            </div>
                            <p>4-year bachelor degree</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* What your course could look like */}
                <div
                  className="row"
                  style={{ paddingTop: 70, paddingBottom: 30 }}
                >
                  <div className="col-sm-4">
                    <h1 className="overview-title-overview-Graduated">
                      What your course could look like
                    </h1>
                  </div>
                  <div className="col-sm-8">
                    <p className="text-Entry-requiment">
                      These are some examples of the units currently in this
                      course. Your sequence may vary depending on unit
                      availability, prerequisite requirements, and the semester
                      in which you commenced your course.
                    </p>
                    {/* Bachelor of Business */}

                    <div className="bachelor-container">
                      {data2.map((semesterSessions, semesterIndex) => (
                        <div key={semesterIndex} className="mb-4">
                          <div
                            className="bachelor-header"
                            onClick={() => {
                              const updatedShowBusinessUnits = [
                                ...showBusinessUnits,
                              ];
                              updatedShowBusinessUnits[semesterIndex] =
                                !updatedShowBusinessUnits[semesterIndex];
                              setShowBusinessUnits(updatedShowBusinessUnits);
                            }}
                          >
                            <h1>{`${data.title} - Semester ${
                              semesterIndex + 1
                            }`}</h1>
                            {/* Toggle Icon */}
                            {showBusinessUnits[semesterIndex] ? (
                              <span className="icon">-</span>
                            ) : (
                              <span className="icon">+</span>
                            )}
                          </div>
                          {showBusinessUnits[semesterIndex] && (
                            <div className="units-table">
                              <div className="table-header">
                                <span>Units of study</span>
                                <span>Unit code</span>
                              </div>
                              {semesterSessions.map((session, sessionIndex) => (
                                <div key={sessionIndex} className="table-row">
                                  <span>{session.department?.subject}</span>{" "}
                                  <span>{session.department?.code}</span>{" "}
                                  {/* Replace departmentName with the actual property name */}
                                  <span>{session.code}</span>{" "}
                                  {/* Replace code with the actual property name */}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
          </TabContent>
        </Container>
      </CardBody>
    </Card>
  );
};

export default MainPage;
