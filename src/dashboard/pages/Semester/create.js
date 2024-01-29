import React, { useState, useEffect } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { createSelector } from "reselect";
import withRouter from "../../../Components/Common/withRouter";

import Select from "react-select";
import {
  GetCreateSemester,
  SemesterStore,
} from "../../../slices/Semester/thunk";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Input,
  Label,
  FormFeedback,
  Form,
  FormGroup,
} from "reactstrap";
import { message } from "antd";
import { clearNotificationMessage } from "../../../slices/message/reducer";

// Redux
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
// import { SemesterStore } from "../../../slices/Semester/thunk";
//formik
import { useFormik } from "formik";
import * as Yup from "yup";

const SemesterCreate = (props) => {
  document.title = "Create Semester";
  const history = useNavigate();
  const dispatch = useDispatch();
  const selectSemesterCreateState = (state) => state;
  const SemesterCreateCreatepageData = createSelector(
    selectSemesterCreateState,
    (state) => ({
      departmentOptions: state.Semesterdashboard.departmentOptions,
      facultyOptions: state.Semesterdashboard.facultyOptions,
      semesterOptions: state.Semesterdashboard.semesterOptions,
      sessionOptions: state.Semesterdashboard.sessionOptions,
      isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
      errorMessage: state.Message.errorMessage,
    })
  );
  const {
    departmentOptions,
    facultyOptions,
    semesterOptions,
    sessionOptions,
    isErrorNotificationVisible,
    errorMessage,
  } = useSelector(SemesterCreateCreatepageData);

  useEffect(() => {
    dispatch(GetCreateSemester());
  }, []);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      facultyId: "",
      departmentId: "",
      semesterId: "",
      sessionId: "",
    },
    validationSchema: Yup.object({
      facultyId: Yup.string().required("Please Enter a Faculty"),
      departmentId: Yup.string().required("Please Enter a department"),
      semesterId: Yup.string().required("Please Enter a semester"),
      sessionId: Yup.string().required("Please Enter a session"),
    }),
    onSubmit: (values) => {
      // console.log(values);
      const formData = new FormData();
      formData.append("facultyId", values.facultyId);
      formData.append("departmentId", values.departmentId);
      formData.append("semesterId", values.semesterId);
      formData.append("sessionId", values.sessionId);

      dispatch(SemesterStore(formData, props.router.navigate));
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
        <BreadCrumb title="study program Create" pageTitle="study" />

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
                          faculty
                        </Label>
                        <Select
                          name="facultyId"
                          options={facultyOptions}
                          classNamePrefix="select"
                          onChange={(option) => {
                            validation.setFieldValue("facultyId", option.value);
                            validation.setFieldTouched("facultyId", true);
                          }}
                          onBlur={() =>
                            validation.setFieldTouched("facultyId", true)
                          }
                          value={facultyOptions.find(
                            (opt) => opt.value === validation.values.facultyId
                          )}
                          className={
                            validation.errors.facultyId &&
                            validation.touched.facultyId
                              ? "is-invalid"
                              : ""
                          }
                        />
                        {validation.errors.facultyId &&
                          validation.touched.facultyId && (
                            <div className="invalid-feedback">
                              {validation.errors.facultyId}
                            </div>
                          )}
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          department
                        </Label>
                        <Select
                          name="FacultyId"
                          options={departmentOptions}
                          classNamePrefix="select"
                          onChange={(option) => {
                            validation.setFieldValue(
                              "departmentId",
                              option.value
                            );
                            validation.setFieldTouched("departmentId", true);
                          }}
                          onBlur={() =>
                            validation.setFieldTouched("departmentId", true)
                          }
                          value={departmentOptions.find(
                            (opt) =>
                              opt.value === validation.values.departmentId
                          )}
                          className={
                            validation.errors.departmentId &&
                            validation.touched.departmentId
                              ? "is-invalid"
                              : ""
                          }
                        />
                        {validation.errors.departmentId &&
                          validation.touched.departmentId && (
                            <div className="invalid-feedback">
                              {validation.errors.departmentId}
                            </div>
                          )}
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          semester
                        </Label>
                        <Select
                          name="semesterId"
                          options={semesterOptions}
                          classNamePrefix="select"
                          onChange={(option) => {
                            validation.setFieldValue(
                              "semesterId",
                              option.value
                            );
                            validation.setFieldTouched("semesterId", true);
                          }}
                          onBlur={() =>
                            validation.setFieldTouched("semesterId", true)
                          }
                          value={semesterOptions.find(
                            (opt) => opt.value === validation.values.semesterId
                          )}
                          className={
                            validation.errors.semesterId &&
                            validation.touched.semesterId
                              ? "is-invalid"
                              : ""
                          }
                        />
                        {validation.errors.semesterId &&
                          validation.touched.semesterId && (
                            <div className="invalid-feedback">
                              {validation.errors.semesterId}
                            </div>
                          )}
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          session
                        </Label>
                        <Select
                          name="FacultyId"
                          options={sessionOptions}
                          classNamePrefix="select"
                          onChange={(option) => {
                            validation.setFieldValue("sessionId", option.value);
                            validation.setFieldTouched("sessionId", true);
                          }}
                          onBlur={() =>
                            validation.setFieldTouched("sessionId", true)
                          }
                          value={sessionOptions.find(
                            (opt) => opt.value === validation.values.sessionId
                          )}
                          className={
                            validation.errors.sessionId &&
                            validation.touched.sessionId
                              ? "is-invalid"
                              : ""
                          }
                        />
                        {validation.errors.sessionId &&
                          validation.touched.sessionId && (
                            <div className="invalid-feedback">
                              {validation.errors.sessionId}
                            </div>
                          )}
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

export default withRouter(SemesterCreate);
