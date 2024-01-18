import React, { useEffect, useMemo, useState } from "react";
import {
  GetCourses,
  CreateCourses,
  UpdateCourses,
  deleteCourses,
} from "../../../slices/Courses/thunk";
import { createSelector } from "reselect";
import { findCoursesById, clearCourses } from "../../../slices/Courses/reducer";
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
} from "reactstrap";
import { message, Table } from "antd";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import { clearNotificationMessage } from "../../../slices/message/reducer";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";

const Courseslist = (props) => {
  const dispatch = useDispatch();
  const [formcheck, setformcheck] = useState(false);
  const [Id, setId] = useState("");
  const [modal_togFirst, setmodal_togFirst] = useState(false);
  const [modal_togtitle, setmodal_togtitle] = useState("Create New Courses");
  const [modal_detele, setmodal_detele] = useState(false);
  const selectCategoryState = (state) => state;

  const CoursespageData = createSelector(selectCategoryState, (state) => ({
    CoursesData: state.Coursesdashboard.CoursesData,
    item: state.Coursesdashboard.item,
    isNotificationVisible: state.Message.isNotificationVisible,
    notificationMessage: state.Message.notificationMessage,
    isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
    errorMessage: state.Message.errorMessage,
  }));

  const {
    CoursesData,
    isNotificationVisible,
    notificationMessage,
    item,
    isErrorNotificationVisible,
    errorMessage,
  } = useSelector(CoursespageData);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      id: item?.id || "",
      name: item?.name || "",
      Description: item?.description || "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Please Enter Name")
        .test(
          "is-unique",
          "This Courses name is already in use",
          function (value) {
            const currentId = this.parent.id;
            return !CoursesData.some(
              (item) => item.name === value && item.id !== currentId
            );
          }
        ),
      Description: Yup.string().required("Please Enter Description"),
    }),

    onSubmit: (values) => {
      // console.log(values);
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("Description", values.Description);
      if (formcheck) {
        // console.log("edit: ", values);
        formData.append("id", values.id);

        dispatch(UpdateCourses(formData));
      } else {
        // console.log("create: ", values);
        dispatch(CreateCourses(formData));
      }
    },
  });
  const columns = [
    {
      title: "Index",
      fixed: "left",
      width: 100,
      render: (text, record, index) => index + 1,
    },
    {
      title: "name",
      dataIndex: "name",
    },
    {
      title: "description",
      dataIndex: "description",
    },
    {
      title: "Actions",
      fixed: "right",
      width: 200,
      render: (record) => {
        return (
          <>
            <span
              className="bg-gradient me-3 fs-4 text-info"
              onClick={() => {
                getedit(record.id);
                setformcheck(true);
                settitle(false);
              }}
            >
              <i className="ri-edit-2-fill"></i>
            </span>
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
    dispatch(GetCourses());
  }, []);

  useEffect(() => {
    if (notificationMessage && isNotificationVisible) {
      validation.resetForm();
      setmodal_togFirst(false);
      message.success(notificationMessage);
      dispatch(clearNotificationMessage());
      dispatch(clearCourses());
    }
  }, [notificationMessage, isNotificationVisible]);

  useEffect(() => {
    if (errorMessage && isErrorNotificationVisible) {
      validation.resetForm();
      setmodal_togFirst(false);
      message.error(errorMessage);
      dispatch(clearNotificationMessage());
    }
  }, [errorMessage, isErrorNotificationVisible]);

  function settitle(type) {
    if (!type) {
      setmodal_togtitle("Edit Courses");
    } else {
      setmodal_togtitle("Create New Courses");
      dispatch(clearNotificationMessage());
      dispatch(clearCourses());
    }
  }

  function deleteitem(id) {
    // console.log(id);
    if (id) {
      dispatch(deleteCourses(id));
    }
  }

  function tog_togFirst() {
    validation.resetForm();
    setmodal_togFirst(!modal_togFirst);
  }

  const getedit = (id) => {
    // console.log(id);
    dispatch(findCoursesById(id));
    setmodal_togFirst(!modal_togFirst);
  };

  function tog_togdelete(id) {
    setmodal_detele(!modal_togFirst);
    if (id) {
      setId(id);
    }
  }
  document.title = "Courses List";

  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <div className="page-content">
            <Container fluid>
              <BreadCrumb title="Courses" pageTitle="Courses List" />
              <Row>
                <Col lg={12}>
                  <Card>
                    <CardHeader>
                      <h4 className="card-title mb-0">Courses list</h4>
                    </CardHeader>
                    <CardBody>
                      <div className="listjs-table" id="customerList">
                        <Row className="g-4 mb-3">
                          <Col className="col-sm-auto">
                            <div>
                              <Button
                                color="success"
                                className="add-btn me-1"
                                id="create-btn"
                                onClick={() => {
                                  tog_togFirst();
                                  setformcheck(false);
                                  settitle(true);
                                }}
                              >
                                <i className="ri-add-line align-bottom me-1"></i>{" "}
                                Add
                              </Button>
                            </div>
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
                          rowKey={"id"}
                          dataSource={CoursesData}
                        />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          {/* create modal */}
          <Modal
            isOpen={modal_togFirst}
            toggle={() => {
              tog_togFirst();
            }}
            centered
          >
            <ModalHeader>
              <Button
                type="button"
                className="btn-close"
                onClick={() => {
                  setmodal_togFirst(false);
                }}
                aria-label="Close"
              ></Button>
              <div className="modal-title">{modal_togtitle}</div>
            </ModalHeader>
            <ModalBody>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
                action="#"
              >
                <div className="row g-3">
                  <Col xxl={12}>
                    <div>
                      <label htmlFor="firstName" className="form-label">
                        Name
                      </label>
                      <Input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Enter Courses"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.name || ""}
                        invalid={
                          validation.touched.name && validation.errors.name
                            ? true
                            : false
                        }
                      />
                      {validation.touched.name && validation.errors.name ? (
                        <FormFeedback type="invalid">
                          {validation.errors.name}
                        </FormFeedback>
                      ) : null}
                    </div>
                  </Col>
                  <Col xxl={12}>
                    <div>
                      <label htmlFor="firstName" className="form-label">
                        Description
                      </label>
                      <textarea
                        name="Description"
                        className="form-control"
                        id="exampleFormControlTextarea5"
                        rows="3"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.Description}
                      />
                      {validation.touched.Description &&
                      validation.errors.Description ? (
                        <div className="invalid-feedback d-block">
                          {validation.errors.Description}
                        </div>
                      ) : null}
                    </div>
                  </Col>
                  <div className="col-lg-12">
                    <div className="hstack gap-2 justify-content-end">
                      <Button
                        color="light"
                        onClick={() => setmodal_togFirst(false)}
                      >
                        Close
                      </Button>
                      <Button color="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </Form>
            </ModalBody>
          </Modal>
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
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Courseslist;
