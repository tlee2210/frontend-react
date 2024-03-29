import React, { useEffect, useMemo, useState } from "react";
import {
  GetSession,
  createSession,
  UpdateSessions,
} from "../../../slices/Session/thunk";

import { createSelector } from "reselect";
import { ToastContainer, toast } from "react-toastify";
import { clearNotificationMessage } from "../../../slices/message/reducer";
import moment from "moment";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Badge,
} from "reactstrap";
import { message, Table } from "antd";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";
import withRouter from "../../../Components/Common/withRouter";

const SessionTables = (props) => {
  const dispatch = useDispatch();
  const selectSessionState = (state) => state;

  useEffect(() => {
    dispatch(GetSession());
  }, []);

  const SessionpageData = createSelector(selectSessionState, (state) => ({
    SessionData: state.Sessiondashboard.SessionData,
    isNotificationVisible: state.Message.isNotificationVisible,
    notificationMessage: state.Message.notificationMessage,
    isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
    errorMessage: state.Message.errorMessage,
  }));

  const {
    SessionData,
    isNotificationVisible,
    notificationMessage,
    isErrorNotificationVisible,
    errorMessage,
  } = useSelector(SessionpageData);

  const getStatusText = (statusCode) => {
    const statusConfig = {
      0: {
        text: "Active",
        color: "success",
        className: "badge bg-secondary-subtle text-secondary  badge-border",
      },
      1: {
        text: "Inactive",
        color: "warning",
        className: "badge bg-warning-subtle  text-warning badge-border",
      },
      2: {
        text: "Completed",
        color: "secondary",
        className: "badge bg-success-subtle text-success badge-border",
      },
    };

    const config = statusConfig[statusCode] || {
      text: "Unknown",
      className: "badge-unknown",
    };
    return (
      <Badge color={config.color} className={config.className}>
        {config.text}
      </Badge>
    );
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
      dataIndex: "code",
    },
    {
      title: "year Start",
      key: "yearStart",
      dataIndex: "yearStart",
      render: (text) => {
        return moment(text).format("MM/DD/YYYY");
      },
    },
    {
      title: "year End",
      key: "yearEnd",
      dataIndex: "yearEnd",
      render: (text) => {
        return moment(text).format("MM/DD/YYYY");
      },
    },
    {
      title: "status",
      key: "status",
      dataIndex: "status",
      render: (status) => {
        return getStatusText(status);
      },
    },
    {
      title: "Is Current Year",
      key: "isCurrentYear",
      dataIndex: "isCurrentYear",
      render: (isCurrentYear) => {
        return isCurrentYear ? (
          <Badge color="success" className="fs-5">
            <i className="ri-checkbox-circle-line"></i>
          </Badge>
        ) : (
          <Badge color="danger" className="fs-5">
            <i className="ri-close-circle-line"></i>
          </Badge>
        );
      },
    },
  ];

  useEffect(() => {
    let timeoutId;
    if (isNotificationVisible && notificationMessage) {
      message.success(notificationMessage);
      timeoutId = setTimeout(() => {
        dispatch(clearNotificationMessage());
      }, 5000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isNotificationVisible, notificationMessage, dispatch]);

  useEffect(() => {
    if (isErrorNotificationVisible && errorMessage) {
      message.error(errorMessage);
      dispatch(clearNotificationMessage());
    }
  }, [isErrorNotificationVisible, errorMessage]);

  document.title = "Session List";

  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <div className="page-content">
            <Container fluid>
              <BreadCrumb title="Session list" pageTitle="Session" />
              <Row>
                <Col lg={12}>
                  <Card>
                    <CardHeader>
                      <ToastContainer />
                      <h4 className="card-title mb-0">Session list</h4>
                    </CardHeader>
                    <CardBody>
                      <div className="listjs-table" id="customerList">
                        <Row className="g-4 mb-3">
                          <Col className="col-sm-auto">
                            <Button
                              color="success"
                              className="btn-animation me-2"
                              id="create-btn"
                              data-text="Create"
                              onClick={() => dispatch(createSession())}
                            >
                              <span>
                                <i className="ri-add-line align-bottom me-1"></i>{" "}
                                Create Next Session
                              </span>
                            </Button>

                            <Button
                              color="info"
                              className="btn-animation me-2"
                              data-text="Recalculate"
                              id="create-btn"
                              onClick={() => dispatch(UpdateSessions())}
                            >
                              <span>
                                <i className="ri-refresh-fill me-2 fs-6"></i>
                                Recalculate Current Sessions
                              </span>
                            </Button>
                          </Col>
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
                        {/* here */}
                        <Table
                          columns={columns}
                          dataSource={SessionData}
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

export default withRouter(SessionTables);
