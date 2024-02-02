import React, { useState, useEffect } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { createSelector } from "reselect";
import withRouter from "../../../Components/Common/withRouter";

import Select from "react-select";
import {
  GetParameters,
  GetSearch,
  deleteSemester,
  CreateSemesters,
} from "../../../slices/Semester/thunk";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Label,
  Form,
  Button,
  CardHeader,
} from "reactstrap";
import { message, Table } from "antd";

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
      SemesterData: state.Semesterdashboard.SemesterData,
      facultyOptions: state.Semesterdashboard.facultyOptions,
      semesterOptions: state.Semesterdashboard.semesterOptions,
      sessionOptions: state.Semesterdashboard.sessionOptions,
      isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
      errorMessage: state.Message.errorMessage,
      isNotificationVisible: state.Message.isNotificationVisible,
      notificationMessage: state.Message.notificationMessage,
    })
  );
  const {
    SemesterData,
    departmentOptions,
    facultyOptions,
    semesterOptions,
    sessionOptions,
    isErrorNotificationVisible,
    errorMessage,
    isNotificationVisible,
    notificationMessage,
  } = useSelector(SemesterCreateCreatepageData);
  const k = 2;
  const getYearFromLabel = (label) => {
    const matches = label.match(/\d{4}/);
    return matches ? parseInt(matches[0], 10) : null;
  };

  const currentYear = new Date().getFullYear();

  const [semesterCourses, setSemesterCourses] = useState([]);
  const [semesterFaculty, setSemesterFaculty] = useState(null);
  const [semestery, setSemester] = useState(null);
  const collectCourseIdsForSemester = (semesterIndex) => {
    const selectedSemesterCourses = SemesterData[semesterIndex];

    const DepartmentIds = selectedSemesterCourses.map((course) => course.id);
    setSemesterCourses(DepartmentIds);

    let facultyId = null; // Define facultyId
    let semesterId = null; // Define semesterId

    if (selectedSemesterCourses.length > 0) {
      facultyId = selectedSemesterCourses[0].facultyId;
      semesterId = selectedSemesterCourses[0].semesterId;
      setSemesterFaculty(facultyId);
      setSemester(semesterId);
    }

    if (facultyId && semesterId) {
      const dataToSend = {
        facultyId,
        semesterId,
        DepartmentIds,
      };
      console.log(dataToSend);
      dispatch(CreateSemesters(dataToSend));
    }
  };

  const columns = [
    {
      title: "Index",
      key: "Index",
      fixed: "left",
      width: 100,
      render: (text, record, index) => index + 1,
    },
    {
      title: "code",
      key: "code",
      render: (text, record) => {
        const department = record.department;

        return <>{department.code}</>;
      },
    },
    {
      title: "subject",
      key: "subject",
      dataIndex: "subject",
      render: (text, record) => {
        const department = record.department;

        return <>{department.subject}</>;
      },
    },
    {
      title: "Actions",
      fixed: "right",
      render: (record) => {
        const selectedSessionYear = getYearFromLabel(sessionSelectValue?.label);
        if (selectedSessionYear && currentYear <= selectedSessionYear) {
          return (
            <span
              className="fs-4 text-danger"
              onClick={() => {
                dispatch(deleteSemester(record.id));
                validation.handleSubmit();
              }}
            >
              <i className="ri-delete-bin-5-line"></i>
            </span>
          );
        } else {
          return null;
        }
      },
    },
  ];

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
    validationSchema: Yup.object({
      facultyId: Yup.string().required("Faculty is required"),
      sessionId: Yup.string().required("Session is required"),
    }),
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
  useEffect(() => {
    if (isNotificationVisible && notificationMessage) {
      message.success(notificationMessage);
      dispatch(clearNotificationMessage());
    }
  }, [isNotificationVisible, notificationMessage, dispatch]);
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
              {SemesterData.map((semester, index) => (
                <Card key={index}>
                  <CardHeader>{`Year ${Math.floor(index / 2) + 1}, Semester ${
                    (index % 2) + 1
                  }`}</CardHeader>
                  <Table columns={columns} dataSource={semester} rowKey="id" />
                  {semester.length > 0 && (
                    <Button
                      color="primary"
                      onClick={() => collectCourseIdsForSemester(index)}
                    >
                      ADD next year
                    </Button>
                  )}
                </Card>
              ))}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(SemesterCreate);
