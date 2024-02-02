import React, { useEffect, useMemo, useState } from "react";
import { GetStudent } from "../../../slices/Student/thunk";
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
import { message, Table, Image } from "antd";
import moment from "moment";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";
import withRouter from "../../../Components/Common/withRouter";

const DepartmentTables = (props) => {
  const dispatch = useDispatch();
  const selectDepartmentState = (state) => state;
  const [modal_detele, setmodal_detele] = useState(false);
  const [Id, setId] = useState("");

  useEffect(() => {
    dispatch(GetStudent());
  }, []);

  const DepartmentpageData = createSelector(selectDepartmentState, (state) => ({
    StudentData: state.Studentsdashboard.StudentData,
    isNotificationVisible: state.Message.isNotificationVisible,
    notificationMessage: state.Message.notificationMessage,
    isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
    errorMessage: state.Message.errorMessage,
  }));

  const {
    StudentData,
    isNotificationVisible,
    notificationMessage,
    isErrorNotificationVisible,
    errorMessage,
  } = useSelector(DepartmentpageData);

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
      title: "avatar",
      key: "avatar",
      render: (record) => {
        return (
          <>
            <Image src={record.avatar} alt={record.firstName} width={100} />
          </>
        );
      },
    },
    {
      title: "student Code",
      key: "studentCode",
      dataIndex: "studentCode",
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
      width: 130,
      render: (record) => {
        return (
          <>
            <Link to={`/dashboard/student/${record.id}/edit`}>
              <span className="bg-gradient me-3 fs-4 text-info">
                <i className="ri-edit-2-fill"></i>
              </span>
            </Link>
            <Link to={`/dashboard/student/${record.id}/detail`}>
              <span className="bg-gradient me-3 fs-4 text-info">
                <i className="ri-eye-fill"></i>
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

  function deleteitem(id) {
    if (id) {
      console.log(id);
      // dispatch(DeleteDepartment(id));
    }
  }

  document.title = "students List";

  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <div className="page-content">
            <Container fluid>
              <BreadCrumb title="students list" pageTitle="students" />
              <Row>
                <Col lg={12}>
                  <Card>
                    <CardHeader>
                      <ToastContainer />
                      <h4 className="card-title mb-0">students list</h4>
                    </CardHeader>
                    <CardBody>
                      <div className="listjs-table" id="customerList">
                        <Row className="g-4 mb-3">
                          <Col className="col-sm-auto">
                            <Link to="/dashboard/student/create">
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
                          dataSource={StudentData}
                          scroll={{ x: 2000 }}
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

export default withRouter(DepartmentTables);
