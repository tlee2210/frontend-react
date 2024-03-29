import React, { useState, useEffect } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { createSelector } from "reselect";
import withRouter from "../../../Components/Common/withRouter";
// here
import { getEditStudent } from "../../../slices/Student/thunk";
import { Card, CardBody, Col, Container, Row, Table } from "reactstrap";
import { message } from "antd";
import { clearNotificationMessage } from "../../../slices/message/reducer";

// Redux
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
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
      isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
      errorMessage: state.Message.errorMessage,
    })
  );
  const { item, isErrorNotificationVisible, errorMessage } = useSelector(
    StudentdetailpageData
  );
  // here
  useEffect(() => {
    dispatch(getEditStudent(id));
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    return format(date, "MMMM do, yyyy");
  };
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
                  <Col xxl={12}>
                    <Col md={12}>
                      <img
                        src={item.avatar}
                        className="avatar-md rounded-top mb-4"
                        alt={item.firstName}
                      />
                    </Col>
                    <div className="table-responsive">
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
                              student Code :
                            </th>
                            <td className="text-muted">{item.studentCode}</td>
                            <th className="ps-0" scope="row">
                              email :
                            </th>
                            <td className="text-muted">{item.email}</td>
                          </tr>
                          <tr>
                            <th className="ps-0" scope="row">
                              address :
                            </th>
                            <td className="text-muted">{item.address}</td>
                            <th className="ps-0" scope="row">
                              date Of Birth :
                            </th>
                            <td className="text-muted">
                              {moment(item.dateOfBirth).format("DD-MM-YYYY")}
                            </td>
                          </tr>
                          <tr>
                            <th className="ps-0" scope="row">
                              gender :
                            </th>
                            <td className="text-muted">
                              {item.gender == 0 ? "Male" : "Female"}
                            </td>
                            <th className="ps-0" scope="row">
                              phone :
                            </th>
                            <td className="text-muted">{item.phone}</td>
                          </tr>
                          <tr>
                            <th className="ps-0" scope="row">
                              Father Name :
                            </th>
                            <td className="text-muted">{item.fatherName}</td>
                            <th className="ps-0" scope="row">
                              Mother Name :
                            </th>
                            <td className="text-muted">{item.motherName}</td>
                          </tr>
                          <tr>
                            <th className="ps-0" scope="row">
                              Faculty
                            </th>
                            <td className="text-muted">
                              {item.studentFacultySemesters?.faculty?.title}
                            </td>
                            <th className="ps-0" scope="row">
                              code
                            </th>
                            <td className="text-muted">
                              {item.studentFacultySemesters?.faculty?.code}
                            </td>
                          </tr>
                          <tr>
                            <th className="ps-0" scope="row">
                              academic Year
                            </th>
                            <td className="text-muted">
                              {
                                item.studentFacultySemesters?.semester
                                  ?.academicYear
                              }
                            </td>
                            <th className="ps-0" scope="row">
                              semester Number
                            </th>
                            <td className="text-muted">
                              {
                                item.studentFacultySemesters?.semester
                                  ?.semesterNumber
                              }
                            </td>
                          </tr>
                          <tr>
                            <th className="ps-0" scope="row">
                              session code
                            </th>
                            <td className="text-muted">
                              {item.studentFacultySemesters?.session?.code}
                            </td>
                            <th className="ps-0" scope="row">
                              year
                            </th>
                            <td className="text-muted">
                              {moment(
                                item.studentFacultySemesters?.session?.yearStart
                              ).format("YYYY")}
                              -
                              {moment(
                                item.studentFacultySemesters?.session?.yearEnd
                              ).format("YYYY")}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
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
