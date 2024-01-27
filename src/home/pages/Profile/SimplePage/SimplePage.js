import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  Table,
  TabPane,
} from "reactstrap";
import moment from "moment";
import { createSelector } from "reselect";
import classnames from "classnames";
import ParticlesAuth from "../../../layouts/ParticlesAuth";
import { GetStudentProfile } from "../../../../slices/profile/thunk";
import { useSelector, useDispatch } from "react-redux";

const SimplePage = () => {
  const dispatch = useDispatch();

  document.title = "Student Profile";
  const selectprofileState = (state) => state;
  const profilepageData = createSelector(selectprofileState, (state) => ({
    profileData: state.Profile.profileData,
    isNotificationVisible: state.Message.isNotificationVisible,
    notificationMessage: state.Message.notificationMessage,
    isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
    errorMessage: state.Message.errorMessage,
  }));
  const {
    profileData,
    isNotificationVisible,
    notificationMessage,
    isErrorNotificationVisible,
    errorMessage,
  } = useSelector(profilepageData);
  useEffect(() => {
    dispatch(GetStudentProfile());
  }, []);

  const [activeTab, setActiveTab] = useState("1");
  const [activityTab, setActivityTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const toggleActivityTab = (tab) => {
    if (activityTab !== tab) {
      setActivityTab(tab);
    }
  };

  return (
    <React.Fragment>
      <ParticlesAuth>
        <div className="page-content">
          <Container fluid>
            <div className="profile-foreground position-relative mx-n4 mt-n4">
              <div className="profile-wid-bg">
                <img
                  src="https://localhost:7112/Image/Student/1244434656.jpg"
                  alt=""
                  className="profile-wid-img"
                />
              </div>
            </div>
            <div className="pt-4 mb-4 mb-lg-3 pb-lg-4">
              <Row className="g-3">
                <div className="col-auto">
                  <div className="avatar-lg">
                    {/* <img
                      src={profileData.avatar}
                      alt={profileData.firstName}
                      className="img-thumbnail rounded-circle"
                    /> */}
                    <img
                      src={profileData.avatar}
                      className="avatar-md img-thumbnail rounded-circle mb-4"
                      alt={profileData.firstName}
                    />
                  </div>
                </div>

                <Col>
                  <div className="p-2">
                    <h3 className="text-white mb-1">
                      {profileData.firstName} {profileData.lastName}
                    </h3>
                    <p className="text-white text-opacity-75">Student</p>
                    {/* <div className="hstack text-white-50 gap-1">
                      <div className="me-2">
                        <i className="ri-map-pin-user-line me-1 text-white text-opacity-75 fs-16 align-middle"></i>
                        California, United States
                      </div>
                      <div>
                        <i className="ri-building-line me-1 text-white text-opacity-75 fs-16 align-middle"></i>
                        Themesbrand
                      </div>
                    </div> */}
                  </div>
                </Col>
              </Row>
            </div>
            <Row>
              <Col lg={12}>
                <div>
                  <div className="d-flex">
                    <Nav
                      pills
                      className="animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1"
                      role="tablist"
                    >
                      <NavItem className="fs-14">
                        <NavLink
                          href="#profile-Info"
                          className={classnames({ active: activeTab === "1" })}
                          onClick={() => {
                            toggleTab("1");
                          }}
                        >
                          <i className="ri-airplay-fill d-inline-block d-md-none"></i>{" "}
                          <span className="d-none d-md-inline-block">
                            profile Info
                          </span>
                        </NavLink>
                      </NavItem>
                      <NavItem className="fs-14">
                        <NavLink
                          href="#activities"
                          className={classnames({ active: activeTab === "2" })}
                          onClick={() => {
                            toggleTab("2");
                          }}
                        >
                          <i className="ri-list-unordered d-inline-block d-md-none"></i>{" "}
                          <span className="d-none d-md-inline-block">
                            Activities
                          </span>
                        </NavLink>
                      </NavItem>
                      <NavItem className="fs-14">
                        <NavLink
                          href="#projects"
                          className={classnames({ active: activeTab === "3" })}
                          onClick={() => {
                            toggleTab("3");
                          }}
                        >
                          <i className="ri-price-tag-line d-inline-block d-md-none"></i>{" "}
                          <span className="d-none d-md-inline-block">
                            Projects
                          </span>
                        </NavLink>
                      </NavItem>
                      <NavItem className="fs-14">
                        <NavLink
                          href="#documents"
                          className={classnames({ active: activeTab === "4" })}
                          onClick={() => {
                            toggleTab("4");
                          }}
                        >
                          <i className="ri-folder-4-line d-inline-block d-md-none"></i>{" "}
                          <span className="d-none d-md-inline-block">
                            Documents
                          </span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>

                  <TabContent activeTab={activeTab} className="pt-4">
                    <TabPane tabId="1">
                      <Row>
                        <Col xxl={12}>
                          <Card>
                            <CardBody>
                              <h5 className="card-title mb-3">Info</h5>
                              <div className="table-responsive">
                                <Table className="table-borderless mb-0">
                                  <tbody>
                                    <tr>
                                      <th className="ps-0" scope="row">
                                        First Name :
                                      </th>
                                      <td className="text-muted">
                                        {profileData.firstName}
                                      </td>
                                      <th className="ps-0" scope="row">
                                        Last Name :
                                      </th>
                                      <td className="text-muted">
                                        {profileData.lastName}
                                      </td>
                                    </tr>
                                    <tr>
                                      <th className="ps-0" scope="row">
                                        student Code :
                                      </th>
                                      <td className="text-muted">
                                        {profileData.studentCode}
                                      </td>
                                      <th className="ps-0" scope="row">
                                        email :
                                      </th>
                                      <td className="text-muted">
                                        {profileData.email}
                                      </td>
                                    </tr>
                                    <tr>
                                      <th className="ps-0" scope="row">
                                        address :
                                      </th>
                                      <td className="text-muted">
                                        {profileData.address}
                                      </td>
                                      <th className="ps-0" scope="row">
                                        date Of Birth :
                                      </th>
                                      <td className="text-muted">
                                        {moment(profileData.dateOfBirth).format(
                                          "DD-MM-YYYY"
                                        )}
                                      </td>
                                    </tr>
                                    <tr>
                                      <th className="ps-0" scope="row">
                                        gender :
                                      </th>
                                      <td className="text-muted">
                                        {profileData.gender == 0
                                          ? "Male"
                                          : "Female"}
                                      </td>
                                      <th className="ps-0" scope="row">
                                        phone :
                                      </th>
                                      <td className="text-muted">
                                        {profileData.phone}
                                      </td>
                                    </tr>
                                    <tr>
                                      <th className="ps-0" scope="row">
                                        Father Name :
                                      </th>
                                      <td className="text-muted">
                                        {profileData.fatherName}
                                      </td>
                                      <th className="ps-0" scope="row">
                                        Mother Name :
                                      </th>
                                      <td className="text-muted">
                                        {profileData.motherName}
                                      </td>
                                    </tr>
                                    <tr>
                                      <th className="ps-0" scope="row">
                                        Faculty
                                      </th>
                                      <td className="text-muted">
                                        {
                                          profileData.studentFacultySemesters
                                            ?.faculty?.title
                                        }
                                      </td>
                                      <th className="ps-0" scope="row">
                                        code
                                      </th>
                                      <td className="text-muted">
                                        {
                                          profileData.studentFacultySemesters
                                            ?.faculty?.code
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <th className="ps-0" scope="row">
                                        academic Year
                                      </th>
                                      <td className="text-muted">
                                        {
                                          profileData.studentFacultySemesters
                                            ?.semester?.academicYear
                                        }
                                      </td>
                                      <th className="ps-0" scope="row">
                                        semester Number
                                      </th>
                                      <td className="text-muted">
                                        {
                                          profileData.studentFacultySemesters
                                            ?.semester?.semesterNumber
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <th className="ps-0" scope="row">
                                        session code
                                      </th>
                                      <td className="text-muted">
                                        {
                                          profileData.studentFacultySemesters
                                            ?.session?.code
                                        }
                                      </td>
                                      <th className="ps-0" scope="row">
                                        year
                                      </th>
                                      <td className="text-muted">
                                        {moment(
                                          profileData.studentFacultySemesters
                                            ?.session?.yearStart
                                        ).format("YYYY")}
                                        -
                                        {moment(
                                          profileData.studentFacultySemesters
                                            ?.session?.yearEnd
                                        ).format("YYYY")}
                                      </td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </div>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Card>
                        <CardBody>
                          <Row>
                            <h5 className="card-title mb-3">Activities</h5>
                          </Row>
                        </CardBody>
                      </Card>
                    </TabPane>

                    <TabPane tabId="3">
                      <Card>
                        <CardBody>
                          <Row>
                            <h5 className="card-title mb-3">projects</h5>
                          </Row>
                        </CardBody>
                      </Card>
                    </TabPane>

                    <TabPane tabId="4">
                      <Card>
                        <CardBody>
                          <Row>
                            <h5 className="card-title mb-3">documents</h5>
                          </Row>
                        </CardBody>
                      </Card>
                    </TabPane>
                  </TabContent>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </ParticlesAuth>
    </React.Fragment>
  );
};

export default SimplePage;
