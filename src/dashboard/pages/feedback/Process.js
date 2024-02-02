import React, { useEffect, useMemo, useState } from "react";
import { GetListProcess } from "../../../slices/feedback/thunk";
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
    dispatch(GetListProcess());
  }, []);

  const acceptpageData = createSelector(selectacceptState, (state) => ({
    feedbackData: state.Feedbackdashboard.feedbackData,
    isNotificationVisible: state.Message.isNotificationVisible,
    notificationMessage: state.Message.notificationMessage,
    isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
    errorMessage: state.Message.errorMessage,
  }));

  const {
    feedbackData,
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
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "description",
      key: "description",
      dataIndex: "description",
    },
    {
      title: "responses",
      key: "responses",
      dataIndex: "responses",
      render: (text) => {
        const createMarkup = (htmlString) => {
          return { __html: htmlString };
        };
        return <div dangerouslySetInnerHTML={createMarkup(text)} />;
      },
    },
    {
      title: "Actions",
      fixed: "right",
      width: 100,
      render: (record) => {
        return (
          <>
            <Link
              to={`/dashboard/feedback/${record.id}/detail`}
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

  document.title = "Feedback Process";

  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <div className="page-content">
            <Container fluid>
              <BreadCrumb title="Feedback Process" pageTitle="Feedback" />
              <Row>
                <Col lg={12}>
                  <Card>
                    <CardHeader>
                      <ToastContainer />
                      <h4 className="card-title mb-0">Feedback Process</h4>
                    </CardHeader>
                    <CardBody>
                      <div className="listjs-table" id="customerList">
                        <Row className="g-4 mb-3">
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
                          dataSource={feedbackData}
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
