import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../../../Components/Common/TableContainerReactTable";
import {
  GetCategories,
  CreateCategories,
  deleteCategories,
  UpdateCategories,
} from "../../../../slices/ArticleCategory/thunk";
import { createSelector } from "reselect";
import { ToastContainer, toast } from "react-toastify";

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
import { Space, Table, Tag } from "antd";
import { message } from "antd";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  clearNotification,
  findCategoryById,
} from "../../../../slices/ArticleCategory/reducer";

import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";

const CategoryTables = (props) => {
  const dispatch = useDispatch();
  const [formcheck, setformcheck] = useState(false);
  const [Id, setId] = useState("");
  const [modal_togFirst, setmodal_togFirst] = useState(false);
  const [modal_togtitle, setmodal_togtitle] = useState("Create New Category");
  const [modal_detele, setmodal_detele] = useState(false);
  const selectCategoryState = (state) => state;

  const CategorypageData = createSelector(selectCategoryState, (state) => ({
    CategoryData: state.CategoryReducer.CategoryData,
    notification: state.CategoryReducer.notification,
    Msg: state.CategoryReducer.Msg,
    item: state.CategoryReducer.item,
    errorNotification: state.CategoryReducer.errorNotification,
    errMsg: state.CategoryReducer.errMsg,
  }));

  const { CategoryData, notification, Msg, item, errorNotification, errMsg } =
    useSelector(CategorypageData);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      name: item?.name || "",
      id: item?.id || "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Please Enter Name")
        .test(
          "is-unique",
          "This category name is already in use",
          function (value) {
            const currentId = this.parent.id;
            return !CategoryData.some(
              (category) => category.name === value && category.id !== currentId
            );
          }
        ),
    }),

    onSubmit: (values) => {
      // console.log(values);
      if (formcheck) {
        // console.log("edit: ", values);
        dispatch(UpdateCategories(values));
      } else {
        // console.log("create: ", values);
        dispatch(CreateCategories(values.name));
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
      title: "Name",
      dataIndex: "name",
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
              <i
                className="ri-delete-bin-5-line"
                onClick={() => tog_togdelete(record.id)}
              ></i>
            </span>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(GetCategories());
  }, []);

  function settitle(type) {
    if (!type) {
      setmodal_togtitle("Edit Category");
    } else {
      setmodal_togtitle("Create New Category");
      dispatch(clearNotification());
    }
  }

  function deleteitem(id) {
    if (id) {
      dispatch(deleteCategories(id));
    }
  }

  function tog_togFirst() {
    validation.resetForm();
    setmodal_togFirst(!modal_togFirst);
  }

  const getedit = (id) => {
    dispatch(findCategoryById(id));
    setmodal_togFirst(!modal_togFirst);
  };

  useEffect(() => {
    if (notification && Msg) {
      setmodal_togFirst(false);
      message.success(Msg);
      dispatch(clearNotification());
    }
  }, [notification, Msg, dispatch]);

  useEffect(() => {
    if (errorNotification && errMsg) {
      validation.resetForm();
      setmodal_togFirst(false);
      message.error(errMsg);
      dispatch(clearNotification());
    }
  }, [errorNotification, errMsg]);

  function tog_togdelete(id) {
    setmodal_detele(!modal_togFirst);
    if (id) {
      setId(id);
    }
  }
  document.title = "Category List";

  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <div className="page-content">
            <Container fluid>
              <BreadCrumb title="Category" pageTitle="Article" />
              <Row>
                <Col lg={12}>
                  <Card>
                    <CardHeader>
                      <ToastContainer />
                      <h4 className="card-title mb-0">Category list</h4>
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
                          dataSource={CategoryData}
                          rowKey={"id"}
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
                className="btn-close mr-2"
                onClick={() => {
                  setmodal_togFirst(false);
                }}
                aria-label="Close"
              ></Button>
              <div>{modal_togtitle}</div>
              {/* <h4 className="modal-title"></h4> */}
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
                        placeholder="Enter Category"
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

export default CategoryTables;
