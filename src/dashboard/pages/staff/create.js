import React, { useState, useEffect } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { createSelector } from "reselect";
import withRouter from "../../../Components/Common/withRouter";
import { FilePond, registerPlugin } from "react-filepond";
import Dropzone from "react-dropzone";

import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Input,
  Label,
  FormFeedback,
  Form,
  FormGroup,
} from "reactstrap";
import { message } from "antd";
import { clearNotificationMessage } from "../../../slices/message/reducer";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Redux
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { staffStore } from "../../../slices/Staff/thunk";
//formik
import { useFormik } from "formik";
import * as Yup from "yup";

const StaffCreate = (props) => {
  document.title = "Create Staff";
  const history = useNavigate();
  const dispatch = useDispatch();
  const selectStaffCreateState = (state) => state;
  const StaffCreatepageData = createSelector(
    selectStaffCreateState,
    (state) => ({
      isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
      errorMessage: state.Message.errorMessage,
    })
  );
  const { isErrorNotificationVisible, errorMessage } =
    useSelector(StaffCreatepageData);
  const [selectedFiles, setselectedFiles] = useState([]);
  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
  const customStyles = {
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: "#1fe6f0",
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      backgroundColor: "#1fe6f0",
      color: "white",
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: "white",
      backgroundColor: "#1fe6f0",
      ":hover": {
        backgroundColor: "#405189",
        color: "white",
      },
    }),
  };

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Address: "",
      Gender: "",
      Phone: "",
      Password: "",
      Qualification: "",
      Experience: "",
      files: [],
    },
    validationSchema: Yup.object({
      FirstName: Yup.string().required("Please Enter a First Name"),
      LastName: Yup.string().required("Please Enter a Last Name"),
      Email: Yup.string().required("Please Enter a Email"),
      Address: Yup.string().required("Please Enter a Address"),
      Gender: Yup.string()
        .oneOf(
          ["Male", "Female"],
          "Invalid gender. Please choose either Male or Female."
        )
        .required("Please Enter a Gender"),
      Phone: Yup.string()
        .required("Please Enter a Phone")
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
      Password: Yup.string().required("Please Enter a Password"),
      Qualification: Yup.string().required("Please Enter a Qualification"),
      Experience: Yup.string()
        .matches(
          /^(\d+)\s*(year|years)?$/,
          "Experience must be a number followed by 'year' or 'years'"
        )
        .required("Please Enter Experience"),
      files: Yup.array()
        .of(
          Yup.mixed().test(
            "fileType",
            "Unsupported File Format",
            (value) => value && value.type.startsWith("image/")
          )
        )
        .min(1, "Please upload at least one avatar"),
    }),
    onSubmit: (values) => {
      // console.log(values);
      const formData = new FormData();
      formData.append("FirstName", values.FirstName);
      formData.append("LastName", values.LastName);
      formData.append("Email", values.Email);
      formData.append("Address", values.Address);
      formData.append("Gender", values.Gender);
      formData.append("Phone", values.Phone);
      formData.append("Password", values.Password);
      formData.append("Qualification", values.Qualification);
      formData.append("Experience", values.Experience);
      formData.append("FileAvatar", values.files[0]);
      dispatch(staffStore(formData, props.router.navigate));
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

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Create Staff" pageTitle="Staff" />

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
                          First Name
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter First Name"
                          name="FirstName"
                          value={validation.values.FirstName || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.FirstName &&
                            validation.touched.FirstName
                              ? true
                              : false
                          }
                        />
                        {validation.errors.FirstName &&
                        validation.touched.FirstName ? (
                          <FormFeedback type="invalid">
                            {validation.errors.FirstName}
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
                          Last Name
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter Last Name"
                          name="LastName"
                          value={validation.values.LastName || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.LastName &&
                            validation.touched.LastName
                              ? true
                              : false
                          }
                        />
                        {validation.errors.LastName &&
                        validation.touched.LastName ? (
                          <FormFeedback type="invalid">
                            {validation.errors.LastName}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          Email
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter Email"
                          name="Email"
                          value={validation.values.Email || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.Email && validation.touched.Email
                              ? true
                              : false
                          }
                        />
                        {validation.errors.Email && validation.touched.Email ? (
                          <FormFeedback type="invalid">
                            {validation.errors.Email}
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
                          Address
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter Address"
                          name="Address"
                          value={validation.values.Address || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.Address &&
                            validation.touched.Address
                              ? true
                              : false
                          }
                        />
                        {validation.errors.Address &&
                        validation.touched.Address ? (
                          <FormFeedback type="invalid">
                            {validation.errors.Address}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          Gender
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter Gender"
                          name="Gender"
                          value={validation.values.Gender || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.Gender &&
                            validation.touched.Gender
                              ? true
                              : false
                          }
                        />
                        {validation.errors.Gender &&
                        validation.touched.Gender ? (
                          <FormFeedback type="invalid">
                            {validation.errors.Gender}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          Phone
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter Phone"
                          name="Phone"
                          value={validation.values.Phone || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.Phone && validation.touched.Phone
                              ? true
                              : false
                          }
                        />
                        {validation.errors.Phone && validation.touched.Phone ? (
                          <FormFeedback type="invalid">
                            {validation.errors.Phone}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          Password
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter Password"
                          name="Password"
                          value={validation.values.Password || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.Password &&
                            validation.touched.Password
                              ? true
                              : false
                          }
                        />
                        {validation.errors.Password &&
                        validation.touched.Password ? (
                          <FormFeedback type="invalid">
                            {validation.errors.Password}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          Qualification
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter Qualification"
                          name="Qualification"
                          value={validation.values.Qualification || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.Qualification &&
                            validation.touched.Qualification
                              ? true
                              : false
                          }
                        />
                        {validation.errors.Qualification &&
                        validation.touched.Qualification ? (
                          <FormFeedback type="invalid">
                            {validation.errors.Qualification}
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
                          Experience
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter Experience"
                          name="Experience"
                          value={validation.values.Experience || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.Experience &&
                            validation.touched.Experience
                              ? true
                              : false
                          }
                        />
                        {validation.errors.Experience &&
                        validation.touched.Experience ? (
                          <FormFeedback type="invalid">
                            {validation.errors.Experience}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                  </Row>
                  <Col md="12">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom02">avatar</Label>
                      <Dropzone
                        onDrop={(acceptedFiles) => {
                          handleAcceptedFiles(acceptedFiles);
                          validation.setFieldValue("files", acceptedFiles);
                        }}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div className="dropzone dz-clickable">
                            <div
                              className="dz-message needsclick"
                              {...getRootProps()}
                            >
                              <div className="mb-3">
                                <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                              </div>
                              <h4>upload avatar</h4>
                            </div>
                          </div>
                        )}
                      </Dropzone>
                      {validation.touched.files && validation.errors.files ? (
                        <div className="invalid-feedback d-block">
                          {validation.errors.files}
                        </div>
                      ) : null}
                      <div className="list-unstyled mb-0" id="file-previews">
                        {selectedFiles.map((f, i) => {
                          return (
                            <Card
                              className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                              key={i + "-file"}
                            >
                              <div className="p-2">
                                <Row className="align-items-center">
                                  <Col className="col-auto">
                                    <img
                                      data-dz-thumbnail=""
                                      height="80"
                                      className="avatar-sm rounded bg-light"
                                      alt={f.name}
                                      src={f.preview}
                                    />
                                  </Col>
                                  <Col>
                                    <Link
                                      to="#"
                                      className="text-muted font-weight-bold"
                                    >
                                      {f.name}
                                    </Link>
                                    <p className="mb-0">
                                      <strong>{f.formattedSize}</strong>
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            </Card>
                          );
                        })}
                      </div>
                      {validation.touched.Category &&
                      validation.errors.Category ? (
                        <FormFeedback type="invalid">
                          {validation.errors.Category}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
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

export default withRouter(StaffCreate);
