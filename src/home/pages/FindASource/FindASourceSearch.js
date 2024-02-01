import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import withRouter from "../../../Components/Common/withRouter";

import ParticlesAuth from "../../layouts/ParticlesAuth";
import "./FindASource.css";
import {
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { createSelector } from "reselect";
import { SearchFacultyByTitle } from "../../../slices/home/courses/thunk";

const FindASource = (props) => {
  // console.log(props);
  const title = props.router.params.title;

  const dispatch = useDispatch();
  const selecthomeState = (state) => state;
  useEffect(() => {
    dispatch(SearchFacultyByTitle(title));
    // console.log(id);
  }, [title]);

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

  return (
    <div style={{ paddingTop: 100 }}>
      <ParticlesAuth>
        <header className="header-container-graduate-Header">
          <div className="header-content-graduate-Header">
            <h1
              className="header-title-graduate-Header"
              style={{ color: "#5a4f4f" }}
            >
              Bachelor of Applied Innovation
            </h1>
            <p className="mt-3 fs-6">
              Don't just graduate, innovate. The Bachelor of Applied Innovation
              aims to make you think like an innovator, explore bold ideas, and
              create unprecedented solutions.
            </p>
            <Button color="danger mt-3" outline>
              Find A Source
            </Button>
          </div>
        </header>

        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-8">
            <p className="intro-fs" style={{ paddingTop: 50 }}>
              Add the Bachelor of Applied Innovation to one of our popular
              bachelor degrees as a double. You'll grow creative confidence,
              learn how to collaborate in team, and hone your leadership
              potential, in this first degree of its kind in Victoria.
            </p>
            <h2 className="fw-bold">
              What is a Bachelor of Applied Innovation?
            </h2>
            <p className="description-fs">
              It's the degree that helps you understand and explore disruption
              and bring ideas to life. You'll work with different disciplines,
              methods and ways of looking at the world to find solutions to the
              world's biggest challenges.
            </p>
            <p className="description-fs">
              Want to learn how to experiment, challenge assumptions, build
              prototypes and evolve ideas? Do you want to apply innovation to
              shape your industry's future, now?
            </p>
            <ul className="skills-fs">
              {" "}
              You’ll take part in industry projects, design challenges,
              innovation sprints, and hackathons. And graduate with the skills
              to:
              <li>
                implement new ideas and help organisations be future-ready, now,
              </li>
              <li>
                combine data-informed insights with imagination, intellectual
                curiosity and initiative,
              </li>
              <li>
                use technology to develop the kind of innovation the world
                needs,
              </li>
              <li>
                make decisions based on analytical and strategic thinking, human
                understanding, and respect for future generations.
              </li>
            </ul>
            <h2 className="fw-bold">Learn from industry</h2>
            <p className="industry-fs">
              Thrive in Swinburne's culture of creativity and innovation built
              through decades of tight-knit relationships with industry.
            </p>
            <p className="industry-sf">
              Enjoy access to a broad array of industry partners in creating a
              comprehensive innovation project portfolio. Previous partners
              include CSIRO, Panasonic, St Vincent's and ANZ.
            </p>
            <p className="industry-footer-fs">
              Graduate ready to be the innovator your industry needs.
            </p>
          </div>
        </div>

        <Container>
          {/* Table */}
          <div style={{ paddingTop: 30, paddingBottom: 30 }}>
            <h1>Course Search</h1>
            <Row>
              <Col xl={12}>
                <Card>
                  <CardBody>
                    <div className="live-preview">
                      <div className="table-responsive table-card">
                        <table className="table align-middle table-nowrap table-striped-columns mb-0">
                          <thead className="table-light">
                            <tr>
                              <th scope="col" style={{ width: "700px" }}>
                                Course Title
                              </th>
                              <th scope="col">Course code</th>
                            </tr>
                          </thead>
                          <tbody>
                            {coursesData.map((item, index) => (
                              <tr key={index}>
                                <td>
                                  <Link
                                    to={`/courses-page/undergraduate/${item.slug}`}
                                    className="fw-medium"
                                  >
                                    {item.title}
                                  </Link>
                                </td>
                                <td>{item.code}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>

        {/* Want to graduate ready to be the innovator your industry needs? */}
        <div style={{ paddingBottom: 100 }}>
          <div className="cta-container">
            <div className="cta-content">
              <h1 className="cta-heading">
                Want to graduate ready to be the innovator your industry needs?
              </h1>
              <p className="cta-subheading">Let's chat.</p>
              <Button to="/about-us" className="btn-soft-dark btn-border">
                <i
                  className="mdi mdi-information-outline"
                  style={{ paddingRight: 3 }}
                ></i>
                Contact Us
                <i
                  className="mdi mdi-arrow-right"
                  style={{ paddingLeft: 15 }}
                ></i>
              </Button>
            </div>
          </div>
        </div>
      </ParticlesAuth>
    </div>
  );
};

export default withRouter(FindASource);
