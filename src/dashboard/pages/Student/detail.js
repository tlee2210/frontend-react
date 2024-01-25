import React, { useState, useEffect } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { createSelector } from "reselect";
import withRouter from "../../../Components/Common/withRouter";
import { FilePond, registerPlugin } from "react-filepond";

import Select from "react-select";
// here
import { getEditStudent, studentUpdate } from "../../../slices/Student/thunk";
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
//formik
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";

const Studentdetail = (props) => {
  document.title = "detail Student";
  const id = props.router.params.id;

  const history = useNavigate();
  const dispatch = useDispatch();
  const selectStudentdetailState = (state) => state;
  const StudentdetailpageData = createSelector(
    selectStudentdetailState,
    (state) => ({
      item: state.Studentsdashboard.item,
      SelectOption: state.Studentsdashboard.SelectOption,
      isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
      errorMessage: state.Message.errorMessage,
    })
  );
  const { item, SelectOption, isErrorNotificationVisible, errorMessage } =
    useSelector(StudentdetailpageData);
  // here
  useEffect(() => {
    dispatch(getEditStudent(id));
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    return format(date, "MMMM do, yyyy");
  };

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      studentCode: item.studentCode || "",
      FirstName: item.firstName || "",
      LastName: item.lastName || "",
      Email: item.email || "",
      Phone: item.phone || "",
      Address: item.address || "",
      Gender: item.gender === 0 ? "Male" : item.gender === 1 ? "Female" : "",
      FatherName: item.fatherName || "",
      MotherName: item.motherName || "",
      FacultyId: item.studentFacultySemesters?.facultyId || "",
      Faculty: item.studentFacultySemesters?.faculty || "",
      semester: item.studentFacultySemesters?.semester || "",
      session: item.studentFacultySemesters?.session || "",
      dateOfBirth: moment(item.dateOfBirth).format("MM/DD/YYYY"),
      image: item.avatar || "",
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
        <BreadCrumb title="detail Student" pageTitle="Student" />

        <Row>
          <Col md={12}>
            <Card>
              <CardBody>
                <Row>
                  <Col md={12}>
                    <img
                      src={validation.values.image}
                      className="avatar-md rounded-top mb-4"
                      alt="rounded-top"
                    />
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        student Code
                      </Label>
                      <Input
                        disabled
                        type="text"
                        readOnly={true}
                        className="form-control"
                        value={validation.values.studentCode}
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        First Name
                      </Label>
                      <Input
                        disabled
                        type="text"
                        readOnly={true}
                        className="form-control"
                        value={validation.values.FirstName}
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        Last Name
                      </Label>
                      <Input
                        disabled
                        type="text"
                        readOnly={true}
                        className="form-control"
                        value={validation.values.LastName}
                      />
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
                        disabled
                        type="text"
                        readOnly={true}
                        className="form-control"
                        value={validation.values.Email}
                      />
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
                        disabled
                        type="text"
                        readOnly={true}
                        className="form-control"
                        value={validation.values.Address}
                      />
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
                        Date Of Birth
                      </Label>
                      <Input
                        disabled
                        type="text"
                        readOnly={true}
                        className="form-control"
                        value={validation.values.dateOfBirth}
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        Gender
                      </Label>
                      <Input
                        disabled
                        type="text"
                        readOnly={true}
                        className="form-control"
                        value={validation.values.Gender}
                      />
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
                        disabled
                        type="text"
                        readOnly={true}
                        className="form-control"
                        value={validation.values.Phone}
                      />
                    </div>
                  </Col>
                  {/* <Col md={4}>
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
                        value={validation.values.Password}
                      />
                    </div>
                  </Col> */}
                  <Col md={3}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        faculty code
                      </Label>
                      <Input
                        disabled
                        type="text"
                        readOnly={true}
                        className="form-control"
                        value={validation.values.Faculty?.code || ""}
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        Faculty
                      </Label>
                      <Select
                        isDisabled
                        type="text"
                        readOnly={true}
                        name="FacultyId"
                        options={SelectOption || []} // Ensure this is always an array
                        classNamePrefix="select"
                        value={
                          SelectOption
                            ? SelectOption.find(
                                (opt) =>
                                  opt.value === validation.values.FacultyId
                              )
                            : ""
                        }
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        academic Year
                      </Label>
                      <Input
                        disabled
                        type="text"
                        readOnly={true}
                        className="form-control"
                        value={validation.values.semester?.academicYear || ""}
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        semester Number
                      </Label>
                      <Input
                        disabled
                        type="text"
                        readOnly={true}
                        className="form-control"
                        value={validation.values.semester?.semesterNumber || ""}
                      />
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
                        session
                      </Label>
                      <Input
                        disabled
                        type="text"
                        readOnly={true}
                        className="form-control"
                        value={validation.values.session.code || ""}
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        year Start
                      </Label>
                      <Input
                        disabled
                        type="text"
                        readOnly={true}
                        className="form-control"
                        value={moment(
                          validation.values.session.yearStart
                        ).format("MM/DD/YYYY")}
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        year End
                      </Label>
                      <Input
                        disabled
                        type="text"
                        readOnly={true}
                        className="form-control"
                        value={moment(validation.values.session.yearEnd).format(
                          "MM/DD/YYYY"
                        )}
                      />
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
                        Father Name
                      </Label>
                      <Input
                        disabled
                        type="text"
                        readOnly={true}
                        className="form-control"
                        value={validation.values.FatherName}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        Mother Name
                      </Label>
                      <Input
                        disabled
                        type="text"
                        readOnly={true}
                        className="form-control"
                        value={validation.values.MotherName}
                      />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Studentdetail);
