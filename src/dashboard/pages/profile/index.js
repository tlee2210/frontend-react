import React, { useState, useEffect } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { createSelector } from "reselect";
import withRouter from "../../../Components/Common/withRouter";
// here
import {
  GetStaffProfile,
  ChangePasswordStaff,
} from "../../../slices/profile/thunk";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Table,
  Input,
  Label,
  Button,
  Form,
  FormFeedback,
} from "reactstrap";
import { message } from "antd";
import { clearNotificationMessage } from "../../../slices/message/reducer";

// Redux
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import * as Yup from "yup";
import { useFormik } from "formik";

const ProfileDetail = (props) => {
  document.title = "Profile";

  const history = useNavigate();
  const dispatch = useDispatch();
  const selectProfileDetailState = (state) => state;
  const ProfileDetailpageData = createSelector(
    selectProfileDetailState,
    (state) => ({
      profileData: state.Profile.profileData,
      isNotificationVisible: state.Message.isNotificationVisible,
      notificationMessage: state.Message.notificationMessage,
      isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
      errorMessage: state.Message.errorMessage,
    })
  );
  const {
    profileData,
    isNotificationVisible,
    notificationMessage,
    isErrorNotificationVisible,
    errorMessage,
  } = useSelector(ProfileDetailpageData);
  // here
  useEffect(() => {
    dispatch(GetStaffProfile());
  }, []);
  const [CurrentPasswordShow, setCurrentPasswordShow] = useState(false);
  const [NewPasswordShow, setNewPasswordShow] = useState(false);
  const [ConfirmPasswordShow, setConfirmPasswordShow] = useState(false);

  // useEffect(() => {
  //   console.log("Current validation errors:", validation.errors);
  // }, [validation.errors]);

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

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      CurrentPassword: "",
      NewPassword: "",
      ConfirmPassword: "",
    },
    validationSchema: Yup.object({
      CurrentPassword: Yup.string().required("Password is required")
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
      dispatch(ChangePasswordStaff(formData));
    },
  });

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Profile" pageTitle="Profile" />

        <Row>
          <Col md={12}>
            <Card>
              <CardBody>
                <Row>
                  <Col xxl={12}>
                    <Col md={12}>
                      <img
                        src={profileData.fileAvatar}
                        className="avatar-md rounded-top mb-4"
                        alt={profileData.firstName}
                      />
                    </Col>
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
                              email :
                            </th>
                            <td className="text-muted">{profileData.email}</td>
                            <th className="ps-0" scope="row">
                              phone :
                            </th>
                            <td className="text-muted">{profileData.phone}</td>
                          </tr>
                          <tr>
                            <th className="ps-0" scope="row">
                              address :
                            </th>
                            <td className="text-muted">
                              {profileData.address}
                            </td>
                            <th className="ps-0" scope="row">
                              gender :
                            </th>
                            <td className="text-muted">
                              {profileData.gender == 0 ? "Male" : "Female"}
                            </td>
                          </tr>
                          <tr>
                            <th className="ps-0" scope="row">
                              role :
                            </th>
                            <td className="text-muted">{profileData.role}</td>
                            <th className="ps-0" scope="row"></th>
                          </tr>
                          <tr>
                            <th className="ps-0" scope="row">
                              qualification :
                            </th>
                            <td className="text-muted">
                              {profileData.qualification}
                            </td>
                            <th className="ps-0" scope="row">
                              experience
                            </th>
                            <td className="text-muted">
                              {profileData.experience}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Row>
                  <h5 className="card-title mb-3">change password</h5>
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
                    <Label className="form-label" htmlFor="password-input">
                      Current Password
                    </Label>
                    <div className="position-relative auth-pass-inputgroup mb-3">
                      <Input
                        name="CurrentPassword"
                        value={validation.values.CurrentPassword || ""}
                        type={CurrentPasswordShow ? "text" : "password"}
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
                          setCurrentPasswordShow(!CurrentPasswordShow)
                        }
                      >
                        <i className="ri-eye-fill align-middle"></i>
                      </button>
                    </div>
                  </div>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="password-input">
                      New Password
                    </Label>
                    <div className="position-relative auth-pass-inputgroup mb-3">
                      <Input
                        name="NewPassword"
                        value={validation.values.NewPassword || ""}
                        type={NewPasswordShow ? "text" : "password"}
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
                        onClick={() => setNewPasswordShow(!NewPasswordShow)}
                      >
                        <i className="ri-eye-fill align-middle"></i>
                      </button>
                    </div>
                  </div>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="password-input">
                      Password
                    </Label>
                    <div className="position-relative auth-pass-inputgroup mb-3">
                      <Input
                        name="ConfirmPassword"
                        value={validation.values.ConfirmPassword || ""}
                        type={ConfirmPasswordShow ? "text" : "password"}
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
                          setConfirmPasswordShow(!ConfirmPasswordShow)
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
      </Container>
    </div>
  );
};

export default withRouter(ProfileDetail);
