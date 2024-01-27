import React, { useState, useEffect } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { createSelector } from "reselect";
import withRouter from "../../../Components/Common/withRouter";
// here
import { GetStaffProfile } from "../../../slices/profile/thunk";
import { Card, CardBody, Col, Container, Row, Table } from "reactstrap";
import { message } from "antd";
import { clearNotificationMessage } from "../../../slices/message/reducer";

// Redux
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

const Studentdetail = (props) => {
  document.title = "Profile";

  const history = useNavigate();
  const dispatch = useDispatch();
  const selectStudentdetailState = (state) => state;
  const StudentdetailpageData = createSelector(
    selectStudentdetailState,
    (state) => ({
      profileData: state.Profile.profileData,
      isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
      errorMessage: state.Message.errorMessage,
    })
  );
  const { profileData, isErrorNotificationVisible, errorMessage } = useSelector(
    StudentdetailpageData
  );
  // here
  useEffect(() => {
    dispatch(GetStaffProfile());
  }, []);

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
                              student Code :
                            </th>
                            <td className="text-muted">
                              {profileData.studentCode}
                            </td>
                            <th className="ps-0" scope="row">
                              email :
                            </th>
                            <td className="text-muted">{profileData.email}</td>
                          </tr>
                          <tr>
                            <th className="ps-0" scope="row">
                              address :
                            </th>
                            <td className="text-muted">
                              {profileData.address}
                            </td>
                            <th className="ps-0" scope="row">
                              date Of Birth :
                            </th>
                            <td className="text-muted">
                              {moment(profileData.dateOfBirth).format(
                                "DD-MM-YYYY"
                              )}
                            </td>
                          </tr>
                          <tr>
                            <th className="ps-0" scope="row">
                              gender :
                            </th>
                            <td className="text-muted">
                              {profileData.gender == 0 ? "Male" : "Female"}
                            </td>
                            <th className="ps-0" scope="row">
                              phone :
                            </th>
                            <td className="text-muted">{profileData.phone}</td>
                          </tr>
                          <tr>
                            <th className="ps-0" scope="row">
                              Father Name :
                            </th>
                            <td className="text-muted">
                              {profileData.fatherName}
                            </td>
                            <th className="ps-0" scope="row">
                              Mother Name :
                            </th>
                            <td className="text-muted">
                              {profileData.motherName}
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
