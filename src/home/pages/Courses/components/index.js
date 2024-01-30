import React, { useEffect, useState } from "react";
import "./index.css";
import {
  FaGlobe,
  FaIndustry,
  FaBookOpen,
  FaLaptop,
  FaUserGraduate,
} from "react-icons/fa";
import { Row, Col, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { Link } from "react-router-dom";
import withRouter from "../../../../Components/Common/withRouter";

// Gethomecourses
import { Gethomecourses } from "../../../../slices/home/courses/thunk";
const index = (props) => {
  const dispatch = useDispatch();
  const selecthomeState = (state) => state;
  const [searchTerm, setSearchTerm] = useState("");
  const homepageData = createSelector(selecthomeState, (state) => ({
    coursesData: state.Courses.coursesData,
    isNotificationVisible: state.Message.isNotificationVisible,
    notificationMessage: state.Message.notificationMessage,
    isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
    errorMessage: state.Message.errorMessage,
  }));
  const {
    coursesData,
    isNotificationVisible,
    notificationMessage,
    isErrorNotificationVisible,
    errorMessage,
  } = useSelector(homepageData);
  document.title = "courses";

  useEffect(() => {
    dispatch(Gethomecourses());
  }, []);

  const handleSearch = (event) => {
    // console.log("Searching for:", searchTerm);
    props.router.navigate(`/courses-page/${searchTerm}/search`);
  };

  return (
    <div className="index ">
      {/*Study with Us */}
      <div className="why-study-with-us" style={{ paddingBottom: 0 }}>
        <h4 className="fs-2">Why study with us?</h4>
        <div className="features-courses-page row">
          <div className="col-md-2 feature-courses-page">
            <FaGlobe className="icon-courses-page " />
            <p className="feature-text-courses-page">
              We are an internationally recognised university
            </p>
          </div>
          <div className="col-md-2 feature-courses-page">
            <FaIndustry className="icon-courses-page" />
            <p className="feature-text-courses-page">
              Guaranteed real industry experience in all bachelor degrees
            </p>
          </div>
          <div className="col-md-2 feature-courses-page">
            <FaBookOpen className="icon-courses-page" />
            <p className="feature-text-courses-page">
              High-quality research and teaching
            </p>
          </div>
          <div className="col-md-2 feature-courses-page">
            <FaLaptop className="icon-courses-page" />
            <p className="feature-text-courses-page">
              Cutting-edge facilities that enhance learning
            </p>
          </div>
          <div className="col-md-2 feature-courses-page">
            <FaUserGraduate className="icon-courses-page" />
            <p className="feature-text-courses-page">
              Flexible study options available
            </p>
          </div>
        </div>
      </div>

      {/* Future-ready learning */}
      <div className="row pt-3 pb-5 w-100">
        <div className="col-sm-4"></div>
        <div className="col-sm-8">
          <h4 className="fs-1">Future-ready learning</h4>
          <div>
            <p>
              Students come first at Swinburne. Our courses are designed with
              your future in mind. Swinburne offers high-quality teaching,
              opportunities to engage with industry, state-of-the-art facilities
              and flexible study options.
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div
        className="search-container-source-page"
        style={{ paddingBottom: 100 }}
      >
        <h2 className="fs-1">Search our courses</h2>
        <div className="row">
          <div className="col-md-8 mx-auto pt-3">
            <div className="input-group mb-3 ">
              <input
                type="text"
                className="form-control"
                placeholder="Search by course name, interest area or career"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleSearch}
                >
                  <i className="las la-search"> </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Or browse by study area */}
      <div className="pt-5" style={{ paddingBottom: 60, marginLeft: 70 }}>
        <h2 className="fs-1 mb-4">Or browse by study area</h2>
        <Row md="4" className="mb-3">
          {/* coursesData */}
          {coursesData.map((item, index) => (
            <Col key={index} className="mb-2">
              <Link to={`/courses-page/${item.slug}`}>
                <Button color="dark" outline block>
                  {item.name}
                </Button>
              </Link>
            </Col>
          ))}
        </Row>
      </div>

      {/* Real industry experience */}
      <div className="row  w-100" style={{ paddingBottom: 50 }}>
        <div className="col-sm-4"></div>
        <div className="col-sm-8">
          <h4 className="fs-1">Real industry experience</h4>
          <div>
            <p>
              At Swinburne, your education is more than reading; it’s doing.
              It’s Work Integrated Learning (WIL) in the form of placements,
              internships or industry-linked projects, and it’s guaranteed in
              all our bachelor degrees. Not looking to study a bachelor degree?
              That’s ok. There’s plenty of WIL opportunities available to all
              Swinburne students.
            </p>
            <a href="#" style={{ color: "red" }}>
              Learn more about Work Integrated Learning
            </a>
          </div>
        </div>
      </div>

      {/* Study your way with our flexible options */}
      <div className="row  w-100" style={{ paddingBottom: 50 }}>
        <div className="col-sm-4"></div>
        <div className="col-sm-8">
          <h4 className="fs-1">Study your way with our flexible options</h4>
          <div>
            <p>
              We understand that you may have to organise your studies around
              family and other commitments. That's why we offer flexible course
              options to allow you to study part-time, over the weekends, at
              nights, online or even out of the country. Learn more about the
              study options we offer to suit your lifestyle.
            </p>
            <a href="#" style={{ color: "red" }}>
              Learn more about course delivery options
            </a>
          </div>
        </div>
      </div>

      {/* Study online with Swinburne */}
      <div style={{ paddingBottom: 100 }}>
        <header className="header-container-Sources-Header">
          <div className="header-content-Sources-Header">
            <h1
              className="header-title-Sources-Header"
              style={{ color: "#5a4f4f" }}
            >
              Study online with Swinburne
            </h1>
            <div className="header-actions-Sources-Header"></div>
            <p className="mt-3 fs-6">
              Swinburne is a world leader in online education by using
              interactive and innovative technologies to deliver our courses and
              degrees. From vocational education and undergraduate to
              postgraduate study, Swinburne has online study options at all
              levels.
            </p>
            <Button color="danger mt-3" outline>
              {" "}
              View Online Sources
            </Button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default withRouter(index);
