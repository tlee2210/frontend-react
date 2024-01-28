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
  Button,
  Table,
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
                  {/* here */}
                  <Table className="table-borderless mb-0">
                    <tbody>
                      <tr>
                        <th className="ps-0" scope="row">
                          First Name :
                        </th>
                        <td className="text-muted">{item.firstName}</td>
                        <th className="ps-0" scope="row">
                          Last Name :
                        </th>
                        <td className="text-muted">{item.lastName}</td>
                      </tr>
                      <tr>
                        <th className="ps-0" scope="row">
                          email :
                        </th>
                        <td className="text-muted">{item.email}</td>
                        <th className="ps-0" scope="row">
                          phone :
                        </th>
                        <td className="text-muted">{item.phone}</td>
                      </tr>
                      <tr>
                        <th className="ps-0" scope="row">
                          address :
                        </th>
                        <td className="text-muted">{item.address}</td>
                        <th className="ps-0" scope="row">
                          gender :
                        </th>
                        <td className="text-muted">
                          {item.gender == 0 ? "Male" : "Female"}
                        </td>
                      </tr>
                      <tr>
                        <th className="ps-0" scope="row">
                          DOB :
                        </th>
                        <td className="text-muted">{item.dob}</td>
                        <th className="ps-0" scope="row">
                          enrollment Number :
                        </th>
                        <td className="text-muted">{item.enrollmentNumber}</td>
                      </tr>
                      <tr>
                        <th className="ps-0" scope="row">
                          highSchool :
                        </th>
                        <td className="text-muted">{item.highSchool}</td>
                        <th className="ps-0" scope="row">
                          Gpa
                        </th>
                        <td className="text-muted">{item.gpa}</td>
                      </tr>
                      <tr>
                        <th className="ps-0" scope="row">
                          fatherName
                        </th>
                        <td className="text-muted">{item.fatherName}</td>
                        <th className="ps-0" scope="row">
                          mother Name :
                        </th>
                        <td className="text-muted">{item.motherName}</td>
                      </tr>
                    </tbody>
                  </Table>
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
                <Table className="table-borderless mb-0">
                  <tbody>
                    <tr>
                      <th className="ps-0" scope="row">
                        faculty :
                      </th>
                      <td className="text-muted">{item.faculty?.title}</td>
                    </tr>
                    <tr>
                      <th className="ps-0" scope="row">
                        code :
                      </th>
                      <td className="text-muted">{item.faculty?.code}</td>
                    </tr>
                    <tr>
                      <th className="ps-0" scope="row">
                        entryScore :
                      </th>
                      <td className="text-muted">{item.faculty?.entryScore}</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(AdmissionDetail);
