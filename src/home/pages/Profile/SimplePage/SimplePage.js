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
  TabPane,
  FormFeedback,
  Table,
  Input,
  Label,
  Button,
  Form,
} from "reactstrap";
import { message } from "antd";

import moment from "moment";
import { createSelector } from "reselect";
import classnames from "classnames";
import ParticlesAuth from "../../../layouts/ParticlesAuth";
import {
  GetStudentProfile,
  ChangePasswordStudent,
} from "../../../../slices/profile/thunk";
import { useSelector, useDispatch } from "react-redux";
import { clearNotificationMessage } from "../../../../slices/message/reducer";

import image from "../../../../assets/images/bg/1.jpg";

import * as Yup from "yup";
import { useFormik } from "formik";

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

  useEffect(() => {
    if (errorMessage && isErrorNotificationVisible) {
      message.error(errorMessage);
      dispatch(clearNotificationMessage());
    }
  }, [errorMessage, isErrorNotificationVisible]);
  useEffect(() => {
    if (isNotificationVisible && notificationMessage) {
      message.success(notificationMessage);
      dispatch(clearNotificationMessage());
      validation.resetForm();
    }
  }, [isNotificationVisible, notificationMessage]);

  const [CurrentPasswordShow, setCurrentPasswordShow] = useState(false);
  const [NewPasswordShow, setNewPasswordShow] = useState(false);
  const [ConfirmPasswordShow, setConfirmPasswordShow] = useState(false);

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
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      CurrentPassword: "",
      NewPassword: "",
      ConfirmPassword: "",
    },
    validationSchema: Yup.object({
      CurrentPassword: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters long")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(
          /^[A-Za-z0-9]*$/,
          "Password must not contain special characters or spaces"
        ),
      NewPassword: Yup.string()
        .required("Please Enter Your New Password")
        .min(6, "New Password must be at least 6 characters long")
        .matches(
          /[A-Z]/,
          "New Password must contain at least one uppercase letter"
        )
        .matches(/[0-9]/, "New Password must contain at least one number")
        .matches(
          /^[A-Za-z0-9]*$/,
          "New Password must not contain special characters or spaces"
        )
        .notOneOf(
          [Yup.ref("CurrentPassword")],
          "New Password cannot be the same as the current password"
        ),
      ConfirmPassword: Yup.string()
        .required("Please Enter Your Confirm Password")
        .oneOf([Yup.ref("NewPassword"), null], "Confirm Password must match")
        .min(6, "Password must be at least 6 characters long")
        .matches(
          /[A-Z]/,
          "Confirm Password must contain at least one uppercase letter"
        )
        .matches(/[0-9]/, "Confirm Password must contain at least one number")
        .matches(
          /^[A-Za-z0-9]*$/,
          "Confirm Password must not contain special characters or spaces"
        ),
    }),

    onSubmit: (values) => {
      // console.log(values);
      const formData = new FormData();
      formData.append("OldPassword", values.CurrentPassword);
      formData.append("NewPassword", values.NewPassword);
      formData.append("ConfirmPassword", values.ConfirmPassword);
      dispatch(ChangePasswordStudent(formData));
    },
  });
  return (
    <React.Fragment>
      <ParticlesAuth>
        <div className="page-content">
          <Container fluid>
            <div className="profile-foreground position-relative mx-n4 mt-n4">
              <div className="profile-wid-bg">
                <img src={image} alt="bg" className="profile-wid-img" />
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
                          <Card>
                            <CardBody>
                              <Row>
                                <h5 className="card-title mb-3">
                                  change password
                                </h5>
                              </Row>
                              <Form
                                onSubmit={(e) => {
                                  e.preventDefault();
                                  validation.handleSubmit();
                                  return false;
                                }}
                                action="#"
                              >
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="password-input"
                                  >
                                    Current Password
                                  </Label>
                                  <div className="position-relative auth-pass-inputgroup mb-3">
                                    <Input
                                      name="CurrentPassword"
                                      value={
                                        validation.values.CurrentPassword || ""
                                      }
                                      type={
                                        CurrentPasswordShow
                                          ? "text"
                                          : "password"
                                      }
                                      className="form-control pe-5"
                                      placeholder="Enter Password"
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      invalid={
                                        validation.touched.CurrentPassword &&
                                        validation.errors.CurrentPassword
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.CurrentPassword &&
                                    validation.errors.CurrentPassword ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.CurrentPassword}
                                      </FormFeedback>
                                    ) : null}
                                    <button
                                      className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted mr-3"
                                      type="button"
                                      id="CurrentPassword"
                                      onClick={() =>
                                        setCurrentPasswordShow(
                                          !CurrentPasswordShow
                                        )
                                      }
                                    >
                                      <i className="ri-eye-fill align-middle"></i>
                                    </button>
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="password-input"
                                  >
                                    New Password
                                  </Label>
                                  <div className="position-relative auth-pass-inputgroup mb-3">
                                    <Input
                                      name="NewPassword"
                                      value={
                                        validation.values.NewPassword || ""
                                      }
                                      type={
                                        NewPasswordShow ? "text" : "password"
                                      }
                                      className="form-control pe-5"
                                      placeholder="Enter Password"
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      invalid={
                                        validation.touched.NewPassword &&
                                        validation.errors.NewPassword
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.NewPassword &&
                                    validation.errors.NewPassword ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.NewPassword}
                                      </FormFeedback>
                                    ) : null}
                                    <button
                                      className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                                      type="button"
                                      id="NewPasswordShow"
                                      onClick={() =>
                                        setNewPasswordShow(!NewPasswordShow)
                                      }
                                    >
                                      <i className="ri-eye-fill align-middle"></i>
                                    </button>
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="password-input"
                                  >
                                    Password
                                  </Label>
                                  <div className="position-relative auth-pass-inputgroup mb-3">
                                    <Input
                                      name="ConfirmPassword"
                                      value={
                                        validation.values.ConfirmPassword || ""
                                      }
                                      type={
                                        ConfirmPasswordShow
                                          ? "text"
                                          : "password"
                                      }
                                      className="form-control pe-5"
                                      placeholder="Enter Password"
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      invalid={
                                        validation.touched.ConfirmPassword &&
                                        validation.errors.ConfirmPassword
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.ConfirmPassword &&
                                    validation.errors.ConfirmPassword ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.ConfirmPassword}
                                      </FormFeedback>
                                    ) : null}
                                    <button
                                      className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                                      type="button"
                                      id="ConfirmPasswordShow"
                                      onClick={() =>
                                        setConfirmPasswordShow(
                                          !ConfirmPasswordShow
                                        )
                                      }
                                    >
                                      <i className="ri-eye-fill align-middle"></i>
                                    </button>
                                  </div>
                                </div>

                                <div className="mt-4">
                                  <Button
                                    color="success"
                                    className="btn btn-success w-100"
                                    type="submit"
                                  >
                                    Change Password
                                  </Button>
                                </div>
                              </Form>
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
