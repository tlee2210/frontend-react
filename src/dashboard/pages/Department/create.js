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
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Input,
  Label,
  FormFeedback,
  Form,
  Button,
} from "reactstrap";
import { message } from "antd";
import { clearNotificationMessage } from "../../../slices/message/reducer";

// Redux
import { useDispatch, useSelector } from "react-redux";
// import { addNewProduct as onAddNewProduct } from "../../../slices/thunks";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import classnames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { GetCreateFaculty, FacultyStore } from "../../../slices/Faculty/thunk";
//formik
import { useFormik } from "formik";
import * as Yup from "yup";

import Flatpickr from "react-flatpickr";
import Select from "react-select";

const FacultyCreate = (props) => {
  document.title = "Create Faculty";
  const history = useNavigate();
  const dispatch = useDispatch();
  const selectFacultyCreateState = (state) => state;
  const FacultyCreatepageData = createSelector(
    selectFacultyCreateState,
    (state) => ({
      SelectOption: state.Facultydashboard.SelectOption,
      isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
      errorMessage: state.Message.errorMessage,
    })
  );
  const { SelectOption, isErrorNotificationVisible, errorMessage } =
    useSelector(FacultyCreatepageData);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      Subject: "",
      Code: "",
      Description: "",
    },
    validationSchema: Yup.object({
      Subject: Yup.string().required("Please Enter a Subject Title"),
      Code: Yup.string()
        .required("Please Enter a Code")
        .matches(
          /^[A-Z]{3}\d{5}$/,
          "Code must be 3 uppercase letters followed by 5 numbers"
        ),

      Description: Yup.string().required("Please Enter a Description")
    }),
    onSubmit: (values) => {
      console.log(values);
      const formData = new FormData();
      formData.append("Subject", values.Subject);
      formData.append("Code", values.Code);
      formData.append("Description", values.Description);
      // dispatch(FacultyStore(formData, props.router.navigate));
      //   validation.resetForm();
    },
  });
  // useEffect(() => {
  //   console.log("Current validation errors:", validation.errors);
  // }, [validation.errors]);

  useEffect(() => {
    if (errorMessage && isErrorNotificationVisible) {
      message.error(errorMessage);
      dispatch(clearNotificationMessage());
    }
  }, [errorMessage, isErrorNotificationVisible]);

  useEffect(() => {
    dispatch(GetCreateFaculty());
  }, []);

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Create faculty" pageTitle="faculty" />

        <Row>
          <Col md={12}>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                validation.handleSubmit();
                return false;
              }}
            >
              <Card>
                <CardBody>
                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          Subject
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter Subject title"
                          name="Subject"
                          value={validation.values.Subject || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.Subject && validation.touched.Subject
                              ? true
                              : false
                          }
                        />
                        {validation.errors.Subject && validation.touched.Subject ? (
                          <FormFeedback type="invalid">
                            {validation.errors.Subject}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          Code
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter Code"
                          name="Code"
                          value={validation.values.Code || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.Code && validation.touched.Code
                              ? true
                              : false
                          }
                        />
                        {validation.errors.Code && validation.touched.Code ? (
                          <FormFeedback type="invalid">
                            {validation.errors.Code}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                  </Row>

                  <div>
                    <Label>Description</Label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={validation.values.Description}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        validation.setFieldValue("Description", data);
                      }}
                      onBlur={() =>
                        validation.setFieldTouched("Description", true)
                      }
                    />
                    {validation.touched.Description &&
                    validation.errors.Description ? (
                      <div className="invalid-feedback d-block">
                        {validation.errors.Description}
                      </div>
                    ) : null}
                  </div>
                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button type="submit" className="btn btn-success w-sm">
                  Submit
                </button>
              </div>
            </Form>
          </Col>

          
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(FacultyCreate);
