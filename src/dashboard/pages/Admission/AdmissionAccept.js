import React, { useEffect, useMemo, useState } from "react";
import { GetAllaccept } from "../../../slices/Admission/thunk";
import { createSelector } from "reselect";
import { ToastContainer, toast } from "react-toastify";
import { clearNotificationMessage } from "../../../slices/message/reducer";
//redux
import { useSelector, useDispatch } from "react-redux";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { message, Table } from "antd";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";
import withRouter from "../../../Components/Common/withRouter";

const acceptTables = (props) => {
  const dispatch = useDispatch();
  const selectacceptState = (state) => state;

  useEffect(() => {
    dispatch(GetAllaccept());
  }, []);

  const acceptpageData = createSelector(selectacceptState, (state) => ({
    AdmissionData: state.Admissiondashboard.AdmissionData,
    isNotificationVisible: state.Message.isNotificationVisible,
    notificationMessage: state.Message.notificationMessage,
    isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
    errorMessage: state.Message.errorMessage,
  }));

  const {
    AdmissionData,
    isNotificationVisible,
    notificationMessage,
    isErrorNotificationVisible,
    errorMessage,
  } = useSelector(acceptpageData);

  const columns = [
    {
      title: "Index",
      key: "Index",
      fixed: "left",
      width: 80,
      render: (text, record, index) => index + 1,
    },
    {
      title: "first Name",
      key: "firstName",
      dataIndex: "firstName",
    },
    {
      title: "last Name",
      key: "lastName",
      dataIndex: "lastName",
    },
    {
      title: "email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "phone",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "Gender",
      key: "gender",
      dataIndex: "gender",
      render: (gender) =>
        gender === 0 ? (
          <span className="badge bg-secondary-subtle text-secondary badge-border">
            Male
          </span>
        ) : (
          <span className="badge bg-warning-subtle text-warning badge-border">
            Female
          </span>
        ),
    },
    {
      title: "Actions",
      fixed: "right",
      width: 100,
      render: (record) => {
        return (
          <>
            <Link
              to={`/dashboard/admission/${record.id}/detail`}
              className="d-flex justify-content-center"
            >
              <span className="bg-gradient me-3 fs-4 text-info">
                <i className="mdi mdi-eye"></i>
              </span>
            </Link>
            {/* <span
              className="fs-4 text-danger"
              onClick={() => tog_togdelete(record.id)}
            >
              <i className="ri-delete-bin-5-line"></i>
            </span> */}
          </>
        );
      },
    },
  ];

  useEffect(() => {
    if (isNotificationVisible && notificationMessage) {
      message.success(notificationMessage);
      dispatch(clearNotificationMessage());
    }
  }, [isNotificationVisible, notificationMessage, dispatch]);

  useEffect(() => {
    if (isErrorNotificationVisible && errorMessage) {
      message.error(errorMessage);
      dispatch(clearNotificationMessage());
    }
  }, [isErrorNotificationVisible, errorMessage]);

  document.title = "Admission accept";

  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <div className="page-content">
            <Container fluid>
              <BreadCrumb title="Admission accept" pageTitle="Admission" />
              <Row>
                <Col lg={12}>
                  <Card>
                    <CardHeader>
                      <ToastContainer />
                      <h4 className="card-title mb-0">Admission accept</h4>
                    </CardHeader>
                    <CardBody>
                      <div className="listjs-table" id="customerList">
                        <Row className="g-4 mb-3">
                          {/* <Col className="col-sm-auto">
                            <Link to="/dashboard/accept/create">
                              <Button
                                color="success"
                                className="add-btn me-1"
                                id="create-btn"
                              >
                                <i className="ri-add-line align-bottom me-1"></i>{" "}
                                Add
                              </Button>
                            </Link>
                          </Col> */}
                          <Col className="col-sm">
                            <div className="d-flex justify-content-sm-end">
                              <div className="search-box ms-2">
                                <input
                                  type="text"
                                  className="form-control search"
                                  placeholder="Search..."
                                />
                                <i className="ri-search-line search-icon"></i>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Table
                          columns={columns}
                          dataSource={AdmissionData}
                          rowKey={"id"}
                        />
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

export default withRouter(acceptTables);
