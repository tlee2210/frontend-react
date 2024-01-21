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

const MainPage = () => {
  const [showBusinessUnits, setShowBusinessUnits] = useState(false);
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
      <CardBody>
        <Nav
          tabs
          className="fs-5 nav nav-tabs nav-justified nav-border-top nav-border-top-success mb-3"
        >
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
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
              style={{ cursor: "pointer" }}
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
              style={{ cursor: "pointer" }}
              className={classnames({ active: topBorderTab === "3" })}
              onClick={() => {
                topBordertoggle("3");
              }}
            >
              <i className="ri-question-answer-line align-middle me-1"></i>Study
              structure
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              className={classnames({ active: topBorderTab === "4" })}
              onClick={() => {
                topBordertoggle("4");
              }}
            >
              <i className="ri-home-5-line align-middle me-1"></i> Fees &
              Scholarships
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              className={classnames({ active: topBorderTab === "5" })}
              onClick={() => {
                topBordertoggle("5");
              }}
            >
              <i className="ri-home-5-line align-middle me-1"></i> How to apply
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
                    <p className="fs-5">
                      Anyone can enter the world of business, but not everyone
                      will succeed. Learn essential management skills to carve
                      out career success with a Bachelor of Business / Bachelor
                      of Applied Innovation. You'll collaborate and solve
                      complex problems in a creative way and be able to develop
                      and deliver projects that adapt to uncertain and changing
                      contexts. Prepare to be job-ready.
                    </p>
                    <a
                      href="#"
                      className="course-handbook-link-overview-Graduated"
                    >
                      View Bachelor of Business / Bachelor of Applied Innovation
                      course handbook
                    </a>
                    <a
                      href="#"
                      className="course-guide-link-overview-Graduated text-Entry-requiment"
                    >
                      Get a copy of our course guide
                    </a>
                    <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-success rounded mb-0">
                      <p className="text-body mb-2 fw-bold">
                        Thinking about applying for 2024?
                      </p>
                      <p className="study-expo-text-overview-Graduated">
                        Swinburne’s 2024 Study Expo is your one-stop-shop for
                        information and assistance. Chat to academics and
                        admissions staff, browse study areas and course options,
                        get tailored advice and more.
                      </p>
                      <a
                        href="#"
                        className="register-link-overview-Graduated"
                        style={{ color: "red" }}
                      >
                        Register now
                      </a>
                    </blockquote>
                  </div>
                </div>
                {/* Your industry experience */}
                <div className="row">
                  {/* Overview Container */}
                  <div className="col-sm-4">
                    <div className="overview-container-overview-Graduated">
                      <h2 className="overview-title-overview-Graduated">
                        Your industry experience
                      </h2>
                    </div>
                  </div>
                  {/* Study Expo Container */}
                  <div className="col-sm-8">
                    <div>
                      <p className="overview-text-overview-Graduated">
                        We offer hands-on learning that mirrors the industry –
                        it’s just like working in an innovation lab. You’ll take
                        part in industry projects, design challenges, innovation
                        sprints, and hackathons. This double degree teaches you
                        how the industry does innovation.
                      </p>
                      <a
                        href="#"
                        className="course-handbook-link-overview-Graduated"
                        style={{ color: "red" }}
                      >
                        Explore Work Integrated Learning
                      </a>
                    </div>
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
                    <ul className="overview-text-overview-Graduated-column">
                      <li>Communication skills</li>
                      <li>Teamwork skills</li>
                      <li>Broad business knowledge</li>
                      <li>Broad business knowledge</li>
                      <li>Broad business knowledge</li>
                      <li>Broad business knowledge</li>
                    </ul>
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
                    <p>3400212531</p>
                  </div>
                </div>
                {/* Why Swinburne? */}
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
                              60
                            </p>
                          </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-left ">
                          <div>
                            <p className="mb-1">
                              2023 lowest rank to receive an offer [before
                              adjustment pts.]
                            </p>
                            <p
                              className="fs-1 fw-bold"
                              style={{ color: "black" }}
                            >
                              65.1
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
                      <li>
                        VCE Units 3 and 4: a minimum study score of 25 in any
                        English (except EAL) or 30 in English as Alternate
                        Language (EAL) or equivalent
                      </li>
                    </ul>
                    <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-success rounded mb-0">
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
                    </blockquote>
                  </div>
                </div>

                {/* Credit transfer */}
                <div className="row" style={{ paddingTop: 70 }}>
                  {/* Title */}
                  <div className="col-sm-4">
                    <h2 className="overview-title-overview-Graduated">
                      Credit transfer
                    </h2>
                  </div>
                  {/* Content */}
                  <div className="col-sm-8">
                    <p className="text-Entry-requiment">
                      Credit is granted in recognition of previous study and/or
                      experience and allows students to gain advanced standing
                      towards their course. Applicants are assessed on a
                      case-by-case basis.
                    </p>
                    <a style={{ color: "red" }} href="#">
                      Learn more about credit
                    </a>
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
                {/* Add Major */}
                <div className="row">
                  <div className="col-sm-4"></div>
                  <div className="col-sm-8">
                    <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-success rounded mb-0">
                      <p className="text-body mb-2 fw-bold">Add your major</p>
                      <p className="study-expo-text-overview-Graduated">
                        Add your major for a more personalized experience.
                      </p>
                      <button className="button-add-graduate-Header">
                        Add major{" "}
                        <i
                          style={{ marginLeft: 30 }}
                          className="bx bx-plus"
                        ></i>
                      </button>
                    </blockquote>
                  </div>
                </div>
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
                      <div
                        className="bachelor-header"
                        onClick={() => setShowBusinessUnits(!showBusinessUnits)}
                      >
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
                      <div
                        className="bachelor-header"
                        onClick={() =>
                          setShowInnovationUnits(!showInnovationUnits)
                        }
                      >
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
                    <p
                      style={{ paddingTop: 20 }}
                      className="text-Entry-requiment"
                    >
                      *Upon enrolment you will choose your Business Practice
                      electives; these include Sustainable Business Practice,
                      Future Work Skills, internships, and study tours.
                    </p>
                    <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-success rounded mb-0">
                      <p className="text-body mb-2 fw-bold">
                        Want to learn more about the available majors?
                      </p>
                      <p className="study-expo-text-overview-Graduated">
                        Learn about all the units you can take in each available
                        major from the course handbook.
                      </p>
                      <a
                        href="#"
                        className="register-link-overview-Graduated"
                        style={{ color: "red" }}
                      >
                        View Source handbook
                      </a>
                    </blockquote>
                    {/* Optional professional work placement  */}
                    <div
                      className="bachelor-container"
                      style={{ paddingTop: 30 }}
                    >
                      <div
                        className="bachelor-header"
                        onClick={() =>
                          setShowOptionalProfessional(!ShowOptionalProfessional)
                        }
                      >
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
            </TabPane>

            {/*  Fees & Scholarships */}
            <TabPane tabId="4" id="nav-border-justified-messages">
              <div style={{ paddingTop: 0 }}>
                <div
                  className="FeesScholarshipsContent"
                  style={{ paddingTop: 50 }}
                >
                  {/* 2024 fees */}
                  <div className="row">
                    <div className="col-sm-4">
                      <h1 className="overview-title-overview-Graduated">
                        2024 fees
                      </h1>
                    </div>
                    <div className="col-sm-8">
                      <div className="row">
                        <div className="col-sm-3">
                          {" "}
                          Yearly fee* ($AUD)
                          <p
                            className="fs-2 fw-bold"
                            style={{ color: "black" }}
                          >
                            $16,323
                          </p>
                        </div>
                        <div className="col-sm-2">
                          {" "}
                          Total fee* ($AUD)
                          <p
                            className="fs-2 fw-bold"
                            style={{ color: "black" }}
                          >
                            $65,292
                          </p>
                        </div>
                      </div>
                      <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-success rounded mb-0">
                        <p className="text-body mb-2 fw-bold">
                          Fees are estimates only
                        </p>
                        <p className="study-expo-text-overview-Graduated">
                          The student tuition fees as published are subject to
                          change given individual circumstances at enrolment.
                          These fees apply to 2024 unit enrolments for HE
                          Commonwealth Supported Place (CSP) and Undergraduate
                          Full Fee Paying (FFP) only and may change for units
                          studied in future years. If part-time study is
                          permitted, annual fees will be proportionally lower
                          based on the number of units taken per semester.
                        </p>
                      </blockquote>
                    </div>
                  </div>

                  {/* How do I pay my fees? */}
                  <div className="row" style={{ paddingTop: 70 }}>
                    <div className="col-sm-4">
                      <h2 className="verview-title-overview-Graduated">
                        How do I pay my fees?
                      </h2>
                    </div>
                    <div className="col-sm-8">
                      <p className="overview-text-overview-Graduated">
                        HECS-HELP is a loan and discount scheme available to you
                        if you are eligible and enrolled in a Commonwealth
                        supported place. A HECS-HELP loan can cover all or part
                        of your contribution amount. You can also choose to pay
                        your fees up front.
                      </p>
                      <a style={{ color: "red" }} href="#">
                        Find out more fee{" "}
                      </a>
                    </div>
                  </div>

                  {/* Eligibility for HECS-HELP */}
                  <div className="row" style={{ paddingTop: 70 }}>
                    <div className="col-sm-4">
                      <h2 className="verview-title-overview-Graduated">
                        Eligibility for HECS-HELP
                      </h2>
                    </div>
                    <div className="col-sm-8">
                      <div>
                        <ul className="list-unstyled">
                          <li className="overview-text-overview-Graduated">
                            You are eligible for a HECS-HELP loan if you have
                            been offered a Commonwealth Supported Place (CSP)
                            for an undergraduate degree at Swinburne or a
                            UniLink course, and you:
                          </li>
                          <ul>
                            <li className="overview-text-overview-Graduated">
                              are an Australian citizen and doing at least one
                              unit of your course in Australia; or
                            </li>
                            <li className="overview-text-overview-Graduated">
                              hold a permanent humanitarian visa and will be
                              living in Australia for the duration of your
                              course; or
                            </li>
                            <li className="overview-text-overview-Graduated">
                              hold a New Zealand Special Category visa and meet
                              the special eligibility requirements for New
                              Zealand citizens.
                            </li>
                          </ul>
                        </ul>
                        <a style={{ color: "red" }} href="#">
                          Learn more about HECS-HELP{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Student services and amenities fee */}
                <div className="row" style={{ paddingTop: 70 }}>
                  <div className="col-sm-4">
                    <h1 className="overview-title-overview-Graduated">
                      Student services and amenities fee
                    </h1>
                  </div>
                  <div className="col-sm-8">
                    <p className="study-expo-text-overview-Graduated">
                      This funding serves to improve the student experience at
                      Swinburne. You may use many or just some of the services
                      and amenities that the fee provides.
                    </p>
                    <p className="study-expo-text-overview-Graduated">
                      The fee shown in the capped amount for 2024.
                    </p>
                    <div className="row">
                      <div className="col-sm-2 fs-4">
                        {" "}
                        SSAF fee* ($AUD)
                        <p className="fs-1 fw-bold" style={{ color: "black" }}>
                          $16,323
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Scholarships */}
                <div className="row" style={{ paddingTop: 70 }}>
                  <div className="col-sm-4">
                    <h2 className="verview-title-overview-Graduated">
                      How do I pay my fees?
                    </h2>
                  </div>
                  <div className="col-sm-8">
                    <p className="overview-text-overview-Graduated">
                      Scholarship applications for 2023 are open. Scholarships
                      at Swinburne are about providing opportunity, promoting
                      equity and recognising excellence and achievement. We want
                      you to reach your potential and achieve your life and
                      career goals.
                    </p>
                    <p className="overview-text-overview-Graduated">
                      Our handy guide will assist you to gather documents for
                      your application.
                    </p>
                    <a style={{ color: "red" }} href="#">
                      Find out more fee{" "}
                    </a>
                  </div>
                </div>

                {/* Professional placement fees */}
                <div className="row" style={{ paddingTop: 70 }}>
                  <div className="col-sm-4">
                    <h2 className="verview-title-overview-Graduated">
                      Professional placement fees
                    </h2>
                  </div>
                  <div className="col-sm-8">
                    <p className="overview-text-overview-Graduated">
                      Students who participate in a six- or 12-month
                      professional placement will be subject to an increase in
                      total course fees.
                    </p>
                    <a style={{ color: "red" }} href="#">
                      Find out more fee{" "}
                    </a>
                  </div>
                </div>
              </div>
            </TabPane>

            {/*  How To Apply */}
            <TabPane tabId="5" id="nav-border-justified-messages">
              <div className="HowToApplyContent" style={{ paddingTop: 50 }}>
                {/* Apply directly */}
                <div className="row">
                  <div className="col-sm-3">
                    <div className="fees-scholarships-container-how-to-apply">
                      <div className="title-container-how-to-apply">
                        <h2>Apply directly</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="description-container-how-to-apply">
                      <p>
                        Ready to take on a new challenge and reach your academic
                        goals? If you already know which course you want to
                        study and understand the entry requirements, what are
                        you waiting for? Apply online! Remember, you cannot
                        apply directly if you have an active VTAC application.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-2 ">
                    <Card
                      className="card-body"
                      style={{
                        left: 110,
                        maxWidth: 243,
                      }}
                    >
                      <h4 className="card-title text-center">Course code</h4>
                      <p className="card-text text-muted text-center">
                        BB-BUSAIN1
                      </p>
                      <button className="apply-button-how-to-apply">
                        Apply directly
                      </button>
                    </Card>
                  </div>
                </div>
                {/* Apply through VTAC */}
                <div className="row">
                  <div className="col-sm-3">
                    <div className="fees-scholarships-container-how-to-apply">
                      <div className="title-container-how-to-apply">
                        <h2>Apply through VTAC</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="description-container-how-to-apply">
                      <p>
                        VTAC is the central office that administers the
                        application processes for places in tertiary courses,
                        scholarships and the Special Entry Access Scheme at
                        universities, TAFEs and independent tertiary colleges in
                        Victoria.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-2 ">
                    <Card
                      className="card-body"
                      style={{
                        left: 110,
                        maxWidth: 243,
                      }}
                    >
                      <h4 className="card-title text-center">
                        VTAC Code (CSP)
                      </h4>
                      <p className="card-text text-muted text-center">
                        3400212531
                      </p>
                      <button className="apply-button-how-to-apply">
                        Apply directly
                      </button>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="dates-container-how-to-apply">
                <section className="start-dates-how-to-apply">
                  <h2 className="heading-how-to-apply">Start dates</h2>
                  <div className="table-how-to-apply">
                    {/* Rows for Semester start dates */}
                    <div className="row-how-to-apply">
                      <div className="semester-how-to-apply">Semester 1</div>
                      <div className="location-how-to-apply">Hawthorn</div>
                      <div className="apply-date-how-to-apply">
                        21-February-2024
                      </div>
                      <div className="start-date-how-to-apply">
                        26-February-2024
                      </div>
                    </div>
                    <div className="row-how-to-apply">
                      <div className="semester-how-to-apply">Semester 2</div>
                      <div className="location-how-to-apply">Hawthorn</div>
                      <div className="apply-date-how-to-apply">
                        24-July-2024
                      </div>
                      <div className="start-date-how-to-apply">
                        29-July-2024
                      </div>
                    </div>
                  </div>
                </section>

                <section className="upcoming-events-how-to-apply">
                  <h2 className="heading-how-to-apply">Upcoming events</h2>
                  <div className="event-how-to-apply">
                    <div className="event-name-how-to-apply">
                      2024 Study Expo
                    </div>
                    <div className="event-date-how-to-apply">
                      23-January-2024
                    </div>
                  </div>
                </section>
              </div>
            </TabPane>
          </TabContent>
        </Container>
      </CardBody>
    </Card>
  );
};

export default MainPage;
