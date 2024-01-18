import React, { useEffect, useMemo, useState } from "react";
import { createSelector } from "reselect";
import { ToastContainer, toast } from "react-toastify";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import { clearNotificationMessage } from "../../../slices/message/reducer";

import { GetContactUs, UpdateContactUs } from "../../../slices/ContactUs/thunk";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Row,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import withRouter from "../../../Components/Common/withRouter";

const ContactUs = (props) => {
  const dispatch = useDispatch();
  const selectArticleCreateState = (state) => state;
  const ArticleCreatepageData = createSelector(
    selectArticleCreateState,
    (state) => ({
      ContactUs: state.ContactUsdashboard.ContactUs,
      isNotificationVisible: state.Message.isNotificationVisible,
      notificationMessage: state.Message.notificationMessage,
      isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
      errorMessage: state.Message.errorMessage,
    })
  );

  const {
    ContactUs,
    isNotificationVisible,
    notificationMessage,
    isErrorNotificationVisible,
    errorMessage,
  } = useSelector(ArticleCreatepageData);

  useEffect(() => {
    let timeoutId;

    if (isNotificationVisible && notificationMessage) {
      successnotify(notificationMessage);
      dispatch(clearNotificationMessage());
    }
  }, [isNotificationVisible, notificationMessage, dispatch]);

  useEffect(() => {
    if (isErrorNotificationVisible && errorMessage) {
      errornotify(errorMessage);
      dispatch(clearNotificationMessage());
    }
  }, [isErrorNotificationVisible, errorMessage]);

  const errornotify = (errorMessage) =>
    toast(String(errorMessage), {
      position: "top-center",
      hideProgressBar: true,
      closeOnClick: false,
      className: "bg-danger text-white",
    });

  const successnotify = (Msg) =>
    toast(String(Msg), {
      position: "top-center",
      hideProgressBar: true,
      closeOnClick: false,
      className: "bg-success text-white",
    });

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      Email: ContactUs.email,
      Phone: ContactUs.phone,
      Address: ContactUs.address,
      YouTubeLink: ContactUs.youTubeLink,
      Description: ContactUs.description,
    },

    validationSchema: Yup.object({
      Email: Yup.string()
        .email("Invalid email format")
        .required("Please Enter Your Email"),
      Phone: Yup.string()
        .required("Please Enter Your Phone Number")
        .matches(
          /^09\d{7,9}$/,
          "Phone number must start with 09 and be 9 to 11 digits long"
        ),
      Address: Yup.string().required("Please Enter Your Address"),
      Description: Yup.string().required("Please Enter a Description"),
      YouTubeLink: Yup.string()
        .matches(
          /^https:\/\/www\.youtube\.com\/watch\?v=[\w-]+$/,
          "Enter a valid YouTube video URL in the format: https://www.youtube.com/watch?v=videoId"
        )
        .required("Please Enter the YouTube Link"),
    }),

    onSubmit: (values) => {
      //   console.log(values);
      const formData = new FormData();
      formData.append("Email", values.Email);
      formData.append("Phone", values.Phone);
      formData.append("Address", values.Address);
      formData.append("YouTubeLink", values.YouTubeLink);
      formData.append("Description", values.Description);
      dispatch(UpdateContactUs(formData));
    },
  });

  // useEffect(() => {
  //   console.log("Current validation errors:", validation.errors);
  // }, [validation.errors]);

  useEffect(() => {
    dispatch(GetContactUs());
  }, []);

  document.title = "Contact Us";

  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <div className="page-content">
            <Container fluid>
              <BreadCrumb title="Contact Us" pageTitle="Contact" />
              <Row>
                <Col lg={12}>
                  <Card>
                    <ToastContainer />

                    <CardBody>
                      <div className="listjs-table" id="customerList">
                        <Row className="g-4 mb-3">
                          <Form
                            className="needs-validation"
                            onSubmit={(e) => {
                              e.preventDefault();
                              validation.handleSubmit();
                              return false;
                            }}
                          >
                            <Row>
                              <Col md="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom01">
                                    Email
                                  </Label>
                                  <div className="input-group">
                                    <span
                                      className="input-group-text"
                                      id="basic-addon1"
                                    >
                                      <i className="mdi mdi-email"></i>
                                    </span>
                                    <Input
                                      name="Email"
                                      placeholder="email"
                                      type="email"
                                      className="form-control"
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={validation.values.Email || ""}
                                      invalid={
                                        validation.touched.Email &&
                                        validation.errors.Email
                                          ? true
                                          : false
                                      }
                                    />
                                  </div>
                                  {validation.touched.Email &&
                                  validation.errors.Email ? (
                                    <div className="invalid-feedback d-block">
                                      {validation.errors.Email}
                                    </div>
                                  ) : null}
                                </FormGroup>
                              </Col>
                              <Col md="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom01">
                                    Phone
                                  </Label>
                                  <div className="input-group">
                                    <span
                                      className="input-group-text"
                                      id="basic-addon1"
                                    >
                                      <i className="lab las la-phone-volume"></i>
                                    </span>
                                    <Input
                                      name="Phone"
                                      placeholder="Phone"
                                      type="text"
                                      className="form-control"
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={validation.values.Phone || ""}
                                      invalid={
                                        validation.touched.Phone &&
                                        validation.errors.Phone
                                          ? true
                                          : false
                                      }
                                    />
                                  </div>
                                  {validation.touched.Phone &&
                                  validation.errors.Phone ? (
                                    <div className="invalid-feedback d-block">
                                      {validation.errors.Phone}
                                    </div>
                                  ) : null}
                                </FormGroup>
                              </Col>
                              <Col md="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom01">
                                    Address
                                  </Label>
                                  <div className="input-group">
                                    <span
                                      className="input-group-text"
                                      id="basic-addon1"
                                    >
                                      <i className="ri-send-plane-fill"></i>
                                    </span>
                                    <Input
                                      name="Address"
                                      placeholder="Address"
                                      type="text"
                                      className="form-control"
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={validation.values.Address || ""}
                                      invalid={
                                        validation.touched.Address &&
                                        validation.errors.Address
                                          ? true
                                          : false
                                      }
                                    />
                                  </div>
                                  {validation.touched.Address &&
                                  validation.errors.Address ? (
                                    <div className="invalid-feedback d-block">
                                      {validation.errors.Address}
                                    </div>
                                  ) : null}
                                </FormGroup>
                              </Col>
                              <Col md="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom01">
                                    YouTube Video Link
                                  </Label>
                                  <div className="input-group">
                                    <span
                                      className="input-group-text"
                                      id="basic-addon1"
                                    >
                                      <i className="bx bxs-caret-right-circle"></i>
                                    </span>
                                    <Input
                                      name="YouTubeLink"
                                      placeholder="YouTube Video Link"
                                      type="text"
                                      className="form-control"
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={
                                        validation.values.YouTubeLink || ""
                                      }
                                      invalid={
                                        validation.touched.YouTubeLink &&
                                        validation.errors.YouTubeLink
                                          ? true
                                          : false
                                      }
                                    />
                                  </div>
                                  {validation.touched.YouTubeLink &&
                                  validation.errors.YouTubeLink ? (
                                    <div className="invalid-feedback d-block">
                                      {validation.errors.YouTubeLink}
                                    </div>
                                  ) : null}
                                </FormGroup>
                              </Col>
                              <Col md="12" className="mb-3">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom02">
                                    Description
                                  </Label>
                                </FormGroup>
                                {/* <Form method="post"> */}
                                <CKEditor
                                  editor={ClassicEditor}
                                  data={validation.values.Description}
                                  onChange={(event, editor) => {
                                    const data = editor.getData();
                                    validation.setFieldValue(
                                      "Description",
                                      data
                                    );
                                  }}
                                  onBlur={() =>
                                    validation.setFieldTouched(
                                      "Description",
                                      true
                                    )
                                  }
                                />
                                {validation.touched.Description &&
                                validation.errors.Description ? (
                                  <div className="invalid-feedback d-block">
                                    {validation.errors.Description}
                                  </div>
                                ) : null}
                              </Col>
                            </Row>
                            <Button
                              color="success"
                              className="btn-label me-2"
                              type="submit"
                            >
                              {" "}
                              <i className="ri-check-double-line label-icon align-middle fs-16 me-2"></i>{" "}
                              Update contact{" "}
                            </Button>
                            <Button
                              color="warning"
                              className="btn-label"
                              onClick={() => {
                                dispatch(GetContactUs());
                              }}
                            >
                              {" "}
                              <i className="ri-restart-fill label-icon align-middle fs-16 me-2"></i>{" "}
                              Reset{" "}
                            </Button>
                          </Form>
                        </Row>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default withRouter(ContactUs);
