import React, { useEffect, useMemo, useState } from "react";
import { createSelector } from "reselect";
import Dropzone from "react-dropzone";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import Select from "react-select";
import { clearNotificationMessage } from "../../../../slices/message/reducer";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { message } from "antd";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

import { GetCreate, ArticleStore } from "../../../../slices/Article/thunk";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Row,
  Form,
  FormFeedback,
  FormGroup,
  Label,
} from "reactstrap";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import withRouter from "../../../../Components/Common/withRouter";

const ArticleCreate = (props) => {
  const dispatch = useDispatch();
  const selectArticleCreateState = (state) => state;
  const ArticleCreatepageData = createSelector(
    selectArticleCreateState,
    (state) => ({
      SelectOption: state.Articledashboard.SelectOption,
      isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
      errorMessage: state.Message.errorMessage,
    })
  );

  const { SelectOption, isErrorNotificationVisible, errorMessage } =
    useSelector(ArticleCreatepageData);

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

  useEffect(() => {
    if (isErrorNotificationVisible && errorMessage) {
      message.error(errorMessage);
      dispatch(clearNotificationMessage());
    }
  }, [isErrorNotificationVisible, errorMessage]);


  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      name: "",
      Category: [],
      Content: "",
      files: [],
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Please Enter Your name")
        .min(3, "Please Enter Your Name"),
      Category: Yup.array()
        .of(Yup.string())
        .required("Please Enter Your Category"),
      // .min(1, "Please Enter Your Category"),
      Content: Yup.string().required("Content is required"),
      files: Yup.array()
        .of(
          Yup.mixed().test(
            "fileType",
            "Unsupported File Format",
            (value) => value && value.type.startsWith("image/")
          )
        )
        .required("Please upload at least one image"),
    }),

    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("Title", values.name);
      formData.append("Category", values.Category.join(","));
      formData.append("Content", values.Content);
      formData.append("image", values.files[0]); 
      dispatch(ArticleStore(formData, props.router.navigate));
    },
  });

  // useEffect(() => {
  //   console.log("Current validation errors:", validation.errors);
  // }, [validation.errors]);

  useEffect(() => {
    dispatch(GetCreate());
  }, []);

  document.title = "Article Create";

  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <div className="page-content">
            <Container fluid>
              <BreadCrumb title="Article Create" pageTitle="Article" />
              <Row>
                <Col lg={12}>
                  <Card>
                    <CardBody>
                      <div className="listjs-table" id="customerList">
                        <Row className="g-4 mb-3">
                          <Form
                            className="needs-validation"
                            onSubmit={(e) => {
                              e.preventDefault();
                              validation.handleSubmit();
                              return false;
                            }}
                          >
                            <Row>
                              <Col md="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom01">
                                    name
                                  </Label>
                                  <Input
                                    name="name"
                                    placeholder="name"
                                    type="text"
                                    className="form-control"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.name || ""}
                                    invalid={
                                      validation.touched.name &&
                                      validation.errors.name
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.name &&
                                  validation.errors.name ? (
                                    <FormFeedback type="invalid">
                                      {validation.errors.name}
                                    </FormFeedback>
                                  ) : null}
                                </FormGroup>
                              </Col>
                              <Col md="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom02">
                                    Category
                                  </Label>
                                  <Select
                                    name="Category"
                                    isMulti={true}
                                    options={SelectOption}
                                    classNamePrefix="select"
                                    styles={customStyles}
                                    onChange={(option) => {
                                      validation.setFieldValue(
                                        "Category",
                                        option.map((item) => item.value)
                                      );
                                      validation.setFieldTouched(
                                        "Category",
                                        true
                                      );
                                    }}
                                    onBlur={() =>
                                      validation.setFieldTouched(
                                        "Category",
                                        true
                                      )
                                    }
                                    invalid={
                                      validation.touched.Category &&
                                      validation.errors.Category
                                        ? true
                                        : false
                                    }
                                    value={SelectOption.filter((option) =>
                                      validation.values.Category.includes(
                                        option.value
                                      )
                                    )}
                                  />

                                  {validation.touched.Category &&
                                    validation.errors.Category && (
                                      <div
                                        className="invalid-feedback"
                                        style={{ display: "block" }}
                                      >
                                        {validation.errors.Category}
                                      </div>
                                    )}
                                </FormGroup>
                              </Col>
                              <Col md="12">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom02">
                                    image
                                  </Label>
                                  <Dropzone
                                    onDrop={(acceptedFiles) => {
                                      handleAcceptedFiles(acceptedFiles);
                                      validation.setFieldValue(
                                        "files",
                                        acceptedFiles
                                      );
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
                                          <h4>
                                            Drop files here or click to upload.
                                          </h4>
                                        </div>
                                      </div>
                                    )}
                                  </Dropzone>
                                  {validation.touched.files &&
                                  validation.errors.files ? (
                                    <div className="invalid-feedback d-block">
                                      {validation.errors.files}
                                    </div>
                                  ) : null}
                                  <div
                                    className="list-unstyled mb-0"
                                    id="file-previews"
                                  >
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
                                                  <strong>
                                                    {f.formattedSize}
                                                  </strong>
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
                              <Col md="12" className="mb-3">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom02"></Label>
                                </FormGroup>
                                {/* <Form method="post"> */}
                                <CKEditor
                                  editor={ClassicEditor}
                                  data={validation.values.Content}
                                  onChange={(event, editor) => {
                                    const data = editor.getData();
                                    validation.setFieldValue("Content", data);
                                  }}
                                  onBlur={() =>
                                    validation.setFieldTouched("Content", true)
                                  }
                                />
                                {validation.touched.Content &&
                                validation.errors.Content ? (
                                  <div className="invalid-feedback d-block">
                                    {validation.errors.Content}
                                  </div>
                                ) : null}
                                {/* <CKEditor
                                  editor={ClassicEditor}
                                  data="<p>Hello from CKEditor 5!</p>"
                                  onReady={(editor) => {
                                    // You can store the "editor" and use when it is needed.
                                  }}
                                  // onChange={(editor) => {
                                  //    editor.getData();
                                  // }}
                                /> */}
                                {/* </Form> */}
                              </Col>
                            </Row>
                            <Button color="primary" type="submit">
                              Create Category
                            </Button>
                          </Form>
                        </Row>
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

export default withRouter(ArticleCreate);
