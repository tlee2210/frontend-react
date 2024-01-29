import React, { useState, useEffect } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { createSelector } from "reselect";
import withRouter from "../../../Components/Common/withRouter";

import Select from "react-select";
import { GetParameters, GetSearch } from "../../../slices/Semester/thunk";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Label,
  Form,
  Button,
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
  document.title = "study program";
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
    dispatch(GetParameters());
  }, []);

  const [facultySelectValue, setFacultySelectValue] = useState();
  const [semesterSelectValue, setSemesterSelectValue] = useState();
  const [sessionSelectValue, setSessionSelectValue] = useState();

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      facultyId: "",
      semesterId: "",
      sessionId: "",
    },
    // validationSchema: Yup.object({

    // }),
    onSubmit: (values) => {
      // console.log(values);
      dispatch(GetSearch(values));
    },
  });

  useEffect(() => {
    const selectedFaculty = facultyOptions?.find(
      (opt) => opt.value === validation.values.facultyId
    );
    setFacultySelectValue(selectedFaculty || null);

    const selectedSemester = semesterOptions?.find(
      (opt) => opt.value === validation.values.semesterId
    );
    setSemesterSelectValue(selectedSemester || null);

    const selectedSession = sessionOptions?.find(
      (opt) => opt.value === validation.values.sessionId
    );
    setSessionSelectValue(selectedSession || null);
  }, [validation.values, facultyOptions, semesterOptions, sessionOptions]);

  useEffect(() => {
    if (errorMessage && isErrorNotificationVisible) {
      message.error(errorMessage);
      dispatch(clearNotificationMessage());
    }
  }, [errorMessage, isErrorNotificationVisible]);

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="study program" pageTitle="study" />
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
                    <Col md={12}>
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
                            setFacultySelectValue(option);
                          }}
                          value={facultySelectValue}
                        />
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
                            setSemesterSelectValue(option);
                          }}
                          value={semesterSelectValue}
                        />
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
                          name="sessionId"
                          options={sessionOptions}
                          classNamePrefix="select"
                          onChange={(option) => {
                            validation.setFieldValue("sessionId", option.value);
                            setSessionSelectValue(option);
                          }}
                          value={sessionSelectValue}
                        />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="text-end mb-3">
                        <Button
                          type="button"
                          color="warning"
                          className="btn-label me-2"
                          onClick={() => {
                            validation.setValues({
                              facultyId: null,
                              semesterId: null,
                              sessionId: null,
                            });
                            setFacultySelectValue(null);
                            setSemesterSelectValue(null);
                            setSessionSelectValue(null);
                          }}
                        >
                          <i className="ri-restart-fill label-icon align-middle fs-16 me-2"></i>
                          Reset
                        </Button>
                        <Button
                          type="submit"
                          className="btn btn-success w-sm me-2"
                        >
                          search
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(SemesterCreate);
