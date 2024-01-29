import React, { useEffect, useMemo, useState } from "react";
import { GetFaculty, DeleteFaculty } from "../../../slices/Faculty/thunk";
import { createSelector } from "reselect";
import { ToastContainer, toast } from "react-toastify";
import { clearNotificationMessage } from "../../../slices/message/reducer";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Form,
  FormFeedback,
  Badge,
} from "reactstrap";
import { message, Table } from "antd";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";

const ArticleTables = (props) => {
  const dispatch = useDispatch();
  const selectArticleState = (state) => state;
  const [modal_detele, setmodal_detele] = useState(false);
  const [Id, setId] = useState("");

  useEffect(() => {
    dispatch(GetFaculty());
  }, []);

  const ArticlepageData = createSelector(selectArticleState, (state) => ({
    FacultyData: state.Facultydashboard.FacultyData,
    isNotificationVisible: state.Message.isNotificationVisible,
    notificationMessage: state.Message.notificationMessage,
    isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
    errorMessage: state.Message.errorMessage,
  }));

  const {
    FacultyData,
    isNotificationVisible,
    notificationMessage,
    isErrorNotificationVisible,
    errorMessage,
  } = useSelector(ArticlepageData);

  function tog_togdelete(id) {
    setmodal_detele(!modal_detele);
    if (id) {
      setId(id);
    }
  }

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
      title: "Name",
      key: "Name",
      dataIndex: "title",
    },
    {
      title: "courses",
      key: "coursesName",
      dataIndex: "coursesName",
    },
    {
      title: "entryScore",
      key: "entryScore",
      dataIndex: "entryScore",
    },

    {
      title: "opportunities",
      key: "opportunities",
      render: (record) => {
        const opportunitiesArray = record.opportunities.split(",");
        return (
          <>
            {opportunitiesArray.map((opportunity, index) => (
              <Badge
                key={index}
                className="badge bg-info-subtle text-info badge-border me-2"
              >
                {opportunity}
              </Badge>
            ))}
          </>
        );
      },
    },
    {
      title: "skill learn",
      key: "skill_learn",
      render: (record) => {
        const opportunitiesArray = record.skill_learn.split(",");
        return (
          <>
            {opportunitiesArray.map((opportunity, index) => (
              <Badge
                key={index}
                className="badge bg-secondary-subtle text-secondary badge-border me-2"
              >
                {opportunity}
              </Badge>
            ))}
          </>
        );
      },
    },
    {
      title: "Actions",
      fixed: "right",
      width: 200,
      render: (record) => {
        return (
          <>
            <Link to={`/dashboard/faculty/${record.id}/edit`}>
              <span className="bg-gradient me-3 fs-4 text-info">
                <i className="ri-edit-2-fill"></i>
              </span>
            </Link>
            <span
              className="fs-4 text-danger"
              onClick={() => tog_togdelete(record.id)}
            >
              <i className="ri-delete-bin-5-line"></i>
            </span>
          </>
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

  function deleteitem(id) {
    if (id) {
      // console.log(id);
      dispatch(DeleteFaculty(id));
    }
  }

  document.title = "faculty List";

  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <div className="page-content">
            <Container fluid>
              <BreadCrumb title="faculty list" pageTitle="faculty" />
              <Row>
                <Col lg={12}>
                  <Card>
                    <CardHeader>
                      <ToastContainer />
                      <h4 className="card-title mb-0">faculty list</h4>
                    </CardHeader>
                    <CardBody>
                      <div className="listjs-table" id="customerList">
                        <Row className="g-4 mb-3">
                          <Col className="col-sm-auto">
                            <Link to="/dashboard/faculty/create">
                              <Button
                                color="success"
                                className="add-btn me-1"
                                id="create-btn"
                              >
                                <i className="ri-add-line align-bottom me-1"></i>{" "}
                                Add
                              </Button>
                            </Link>
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
                        <Table
                          columns={columns}
                          dataSource={FacultyData}
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
        {/* delete modal */}
        <Modal
          isOpen={modal_detele}
          toggle={() => {
            tog_togdelete();
          }}
          id="firstmodal"
          centered
        >
          <ModalBody className="text-center p-5">
            {/* <lord-icon
              src="https://cdn.lordicon.com/tdrtiskw.json"
              trigger="loop"
              colors="primary:#f7b84b,secondary:#405189"
              style={{ width: "130px", height: "130px" }}
            ></lord-icon> */}
            <div className="pt-4">
              <h4>Confirm Deletion</h4>
              <p className="text-muted">
                {" "}
                Are you sure you want to delete this item?
              </p>
            </div>
            <div className="col-lg-12">
              <div className="hstack gap-2 justify-content-center">
                <Button color="light" onClick={() => setmodal_detele(false)}>
                  Cancel
                </Button>
                <Button
                  color="danger"
                  type="submit"
                  onClick={() => {
                    deleteitem(Id);
                    setmodal_detele(false);
                  }}
                >
                  Yes, Delete
                </Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </Row>
    </React.Fragment>
  );
};

export default ArticleTables;
