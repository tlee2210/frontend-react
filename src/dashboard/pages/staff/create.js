import React, { useState, useEffect } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { createSelector } from "reselect";
import withRouter from "../../../Components/Common/withRouter";

import {
  Card,
  CardBody,
  Col,
  Container,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Input,
  Label,
  FormFeedback,
  Form,
  Button,
} from "reactstrap";
import { message } from "antd";
import { clearNotificationMessage } from "../../../slices/message/reducer";

// Redux
import { useDispatch, useSelector } from "react-redux";
// import { addNewProduct as onAddNewProduct } from "../../../slices/thunks";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import classnames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { DepartmentStore } from "../../../slices/Department/thunk";
//formik
import { useFormik } from "formik";
import * as Yup from "yup";

import Flatpickr from "react-flatpickr";
import Select from "react-select";

const FacultyCreate = (props) => {
  document.title = "Create Staff";
  const history = useNavigate();
  const dispatch = useDispatch();
  const selectFacultyCreateState = (state) => state;
  const FacultyCreatepageData = createSelector(
    selectFacultyCreateState,
    (state) => ({
      isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
      errorMessage: state.Message.errorMessage,
    })
  );
  const { isErrorNotificationVisible, errorMessage } = useSelector(
    FacultyCreatepageData
  );

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Address: "",
      Gender: "",
      Phone: "",
      Password: "",
      Qualification: "",
      Experience: "",
    },
    validationSchema: Yup.object({
      FirstName: Yup.string().required("Please Enter a First Name"),
      LastName: Yup.string().required("Please Enter a Last Name"),
      Email: Yup.string().required("Please Enter a Email"),
      Address: Yup.string().required("Please Enter a Address"),
      Gender: Yup.string().required("Please Enter a Gender"),
      Phone: Yup.string().required("Please Enter a Phone"),
      Password: Yup.string().required("Please Enter a Password"),
      Qualification: Yup.string().required("Please Enter a Qualification"),
      Experience: Yup.string().required("Please Enter a Experience"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // const formData = new FormData();
      // formData.append("Subject", values.Subject);
      // formData.append("Code", values.Code);
      // formData.append("Description", values.Description);
      // dispatch(DepartmentStore(formData, props.router.navigate));
      //   validation.resetForm();
    },
  });
  // useEffect(() => {
  //   console.log("Current validation errors:", validation.errors);
  // }, [validation.errors]);

  useEffect(() => {
    if (errorMessage && isErrorNotificationVisible) {
      message.error(errorMessage);
      dispatch(clearNotificationMessage());
    }
  }, [errorMessage, isErrorNotificationVisible]);

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Create Staff" pageTitle="Staff" />

        <Row>
          <Col md={12}>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                validation.handleSubmit();
                return false;
              }}
            >
              <Card>
                <CardBody>
                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          First Name
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter First Name"
                          name="FirstName"
                          value={validation.values.FirstName || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.FirstName &&
                            validation.touched.FirstName
                              ? true
                              : false
                          }
                        />
                        {validation.errors.FirstName &&
                        validation.touched.FirstName ? (
                          <FormFeedback type="invalid">
                            {validation.errors.FirstName}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          Last Name
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter Last Name"
                          name="LastName"
                          value={validation.values.LastName || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.LastName && validation.touched.LastName
                              ? true
                              : false
                          }
                        />
                        {validation.errors.LastName && validation.touched.LastName ? (
                          <FormFeedback type="invalid">
                            {validation.errors.LastName}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          Email
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter Email"
                          name="Email"
                          value={validation.values.Email || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.Email &&
                            validation.touched.Email
                              ? true
                              : false
                          }
                        />
                        {validation.errors.Email &&
                        validation.touched.Email ? (
                          <FormFeedback type="invalid">
                            {validation.errors.Email}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          Address
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter Address"
                          name="Address"
                          value={validation.values.Address || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.Address && validation.touched.Address
                              ? true
                              : false
                          }
                        />
                        {validation.errors.Address && validation.touched.Address ? (
                          <FormFeedback type="invalid">
                            {validation.errors.Address}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          Gender
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter Gender"
                          name="Gender"
                          value={validation.values.Gender || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.Gender &&
                            validation.touched.Gender
                              ? true
                              : false
                          }
                        />
                        {validation.errors.Gender &&
                        validation.touched.Gender ? (
                          <FormFeedback type="invalid">
                            {validation.errors.Gender}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          Phone
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter Phone"
                          name="Phone"
                          value={validation.values.Phone || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.Phone && validation.touched.Phone
                              ? true
                              : false
                          }
                        />
                        {validation.errors.Phone && validation.touched.Phone ? (
                          <FormFeedback type="invalid">
                            {validation.errors.Phone}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          Password
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter Password"
                          name="Password"
                          value={validation.values.Password || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.Password &&
                            validation.touched.Password
                              ? true
                              : false
                          }
                        />
                        {validation.errors.Password &&
                        validation.touched.Password ? (
                          <FormFeedback type="invalid">
                            {validation.errors.Password}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          Qualification
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter Qualification"
                          name="Qualification"
                          value={validation.values.Qualification || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.Qualification &&
                            validation.touched.Qualification
                              ? true
                              : false
                          }
                        />
                        {validation.errors.Qualification &&
                        validation.touched.Qualification ? (
                          <FormFeedback type="invalid">
                            {validation.errors.Qualification}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          Experience
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter Experience"
                          name="Experience"
                          value={validation.values.Experience || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.Experience && validation.touched.Experience
                              ? true
                              : false
                          }
                        />
                        {validation.errors.Experience && validation.touched.Experience ? (
                          <FormFeedback type="invalid">
                            {validation.errors.Experience}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button type="submit" className="btn btn-success w-sm">
                  Submit
                </button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(FacultyCreate);
