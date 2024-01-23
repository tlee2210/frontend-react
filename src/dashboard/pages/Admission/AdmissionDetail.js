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
  Row,
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

import { Link, useNavigate } from "react-router-dom";
//edit import
import {
  GetDetailadmission,
  accept,
  reject,
} from "../../../slices/Admission/thunk";
//formik
import { useFormik } from "formik";
import * as Yup from "yup";

import Select from "react-select";

const AdmissionDetail = (props) => {
  // console.log(props.router.params.id);
  const id = props.router.params.id;

  document.title = "admission Detail";
  const history = useNavigate();
  const dispatch = useDispatch();
  const selectFacultyCreateState = (state) => state;
  const FacultyCreatepageData = createSelector(
    selectFacultyCreateState,
    (state) => ({
      item: state.Admissiondashboard.item,
      isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
      errorMessage: state.Message.errorMessage,
    })
  );
  const { isErrorNotificationVisible, errorMessage, item } = useSelector(
    FacultyCreatepageData
  );

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      address: item.address,
      dob: item.dob,
      gender: item.gender == 0 ? "Male" : "Female",
      phone: item.phone,
      faculty: item.faculty,
      facultycode: item.faculty?.code,
      enrollmentNumber: item.enrollmentNumber,
      fatherName: item.fatherName,
      motherName: item.motherName,
      gpa: item.gpa,
      highSchool: item.highSchool,
      status: item.status,
    },
  });

  useEffect(() => {
    if (errorMessage && isErrorNotificationVisible) {
      message.error(errorMessage);
      dispatch(clearNotificationMessage());
    }
  }, [errorMessage, isErrorNotificationVisible]);

  useEffect(() => {
    dispatch(GetDetailadmission(id));
  }, []);

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="admission detail" pageTitle="admission" />

        <Row>
          <Col md={8}>
            <Card>
              <CardBody>
                <Row>
                  <Col md={6}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        first Name
                      </Label>
                      <Input
                        disabled
                        type="text"
                        className="form-control"
                        value={validation.values.firstName || ""}
                        readOnly={true}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        last Name
                      </Label>
                      <Input
                        disabled
                        type="text"
                        className="form-control"
                        value={validation.values.lastName || ""}
                        readOnly={true}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        email
                      </Label>
                      <Input
                        disabled
                        type="text"
                        className="form-control"
                        value={validation.values.email || ""}
                        readOnly={true}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        address
                      </Label>
                      <Input
                        disabled
                        type="text"
                        className="form-control"
                        value={validation.values.address || ""}
                        readOnly={true}
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        dob
                      </Label>
                      <Input
                        disabled
                        type="text"
                        className="form-control"
                        value={validation.values.dob || ""}
                        readOnly={true}
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        gender
                      </Label>
                      <Input
                        disabled
                        type="text"
                        className="form-control"
                        value={validation.values.gender || ""}
                        readOnly={true}
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        phone
                      </Label>
                      <Input
                        disabled
                        type="text"
                        className="form-control"
                        value={validation.values.phone || ""}
                        readOnly={true}
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        enrollmentNumber
                      </Label>
                      <Input
                        disabled
                        type="text"
                        className="form-control"
                        value={validation.values.enrollmentNumber || ""}
                        readOnly={true}
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        gpa
                      </Label>
                      <Input
                        disabled
                        type="text"
                        className="form-control"
                        value={validation.values.gpa || ""}
                        readOnly={true}
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        highSchool
                      </Label>
                      <Input
                        disabled
                        type="text"
                        className="form-control"
                        value={validation.values.highSchool || ""}
                        readOnly={true}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        father Name
                      </Label>
                      <Input
                        disabled
                        type="text"
                        className="form-control"
                        value={validation.values.fatherName || ""}
                        readOnly={true}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        mother Name
                      </Label>
                      <Input
                        disabled
                        type="text"
                        className="form-control"
                        value={validation.values.motherName || ""}
                        readOnly={true}
                      />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            {item.status !== "Accept" && item.status !== "Reject" && (
              <Row>
                <Col md={12}>
                  <div className="text-end">
                    <Button
                      color="warning"
                      className="btn-label me-2"
                      onClick={() => {
                        dispatch(reject(id, props.router.navigate));
                      }}
                    >
                      <i className="ri-error-warning-line label-icon align-middle fs-16 me-2"></i>
                      Reject
                    </Button>
                    <Button
                      color="success"
                      className="btn-label text-end me-2"
                      onClick={() => {
                        dispatch(accept(id, props.router.navigate));
                      }}
                    >
                      <i className="ri-check-double-line label-icon align-middle fs-16 me-2"></i>
                      Accept
                    </Button>
                  </div>
                </Col>
              </Row>
            )}
          </Col>

          <Col md={4}>
            <Card>
              <CardHeader>
                <h5 className="card-title mb-0">faculty admission</h5>
              </CardHeader>
              <CardBody>
                <Col md={12}>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                      faculty title
                    </Label>
                    <Input
                      disabled
                      type="text"
                      className="form-control"
                      name="faculty"
                      readOnly={true}
                      value={validation.values.faculty?.title || ""}
                    />
                  </div>
                </Col>{" "}
                <Col md={12}>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                      faculty code
                    </Label>
                    <Input
                      disabled
                      type="text"
                      className="form-control"
                      name="faculty"
                      readOnly={true}
                      value={validation.values.faculty?.code || ""}
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                      entry Score
                    </Label>
                    <Input
                      disabled
                      type="text"
                      className="form-control"
                      name="faculty"
                      readOnly={true}
                      value={validation.values.faculty?.entryScore || ""}
                    />
                  </div>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(AdmissionDetail);
