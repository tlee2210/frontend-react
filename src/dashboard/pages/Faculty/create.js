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
  FormGroup,
  Form,
  Button,
} from "reactstrap";
import { message } from "antd";
import Dropzone from "react-dropzone";

import { clearNotificationMessage } from "../../../slices/message/reducer";
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
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
      name: "",
      Code: "",
      Description: "",
      Skill: [],
      Opportunities: [],
      EntryScore: "",
      Course_id: "",
      files: [],
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter a faculty Title"),
      Code: Yup.string()
        .required("Please Enter a Code")
        .matches(/^\d{10}$/, "Code must be exactly 10 digits"),
      Description: Yup.string().required("Please Enter a Description"),
      Skill: Yup.array()
        .of(Yup.string().trim().required("Please Enter a Skill"))
        .required("Please Enter at least one Skill")
        .min(1, "At least one Skill is required")
        .test("is-not-empty", "Please Enter a Skill", (array) => {
          if (!array) return false;
          const isValid = array.every(
            (s) => typeof s === "string" && s.trim().length > 0
          );
          return isValid;
        })
        .test("is-unique", "Skills must be unique", (array) => {
          if (!array) return true;
          const uniqueValues = new Set(array);
          return uniqueValues.size === array.length;
        }),
      Opportunities: Yup.array()
        .of(Yup.string().trim().required("Please Enter a Opportunities"))
        .required("Please Enter at least one Opportunities")
        .min(1, "At least one Opportunities is required")
        .test("is-not-empty", "Please Enter a Opportunities", (array) => {
          if (!array) return false;
          const isValid = array.every(
            (s) => typeof s === "string" && s.trim().length > 0
          );
          return isValid;
        })
        .test("is-unique", "Opportunities must be unique", (array) => {
          if (!array) return true;
          const uniqueValues = new Set(array);
          return uniqueValues.size === array.length;
        }),
      // Opportunities: Yup.string().required("Please Enter a Opportunities"),
      EntryScore: Yup.number()
        .typeError("EntryScore must be a number")
        .required("Please Enter an EntryScore")
        .min(0, "EntryScore must be greater than or equal to 0")
        .max(100, "EntryScore must be less than or equal to 100"),
      Course_id: Yup.string().required("Please Enter an Course"),
      files: Yup.array()
        .of(
          Yup.mixed().test(
            "fileType",
            "Unsupported File Format",
            (value) => value && value.type.startsWith("image/")
          )
        )
        .min(1, "Please upload at least one Image"),
    }),
    onSubmit: (values) => {
      // console.log(values);
      const formData = new FormData();
      formData.append("title", values.name);
      formData.append("Code", values.Code);
      formData.append("Description", values.Description);
      formData.append("Skill_learn", values.Skill.join(","));
      formData.append("Opportunities", values.Opportunities.join(","));
      formData.append("EntryScore", values.EntryScore);
      formData.append("Course_id", values.Course_id);
      formData.append("Image", values.files[0]);
      dispatch(FacultyStore(formData, props.router.navigate));
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
          <Col md={8}>
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
                          faculty Title
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter faculty title"
                          name="name"
                          value={validation.values.name || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.name && validation.touched.name
                              ? true
                              : false
                          }
                        />
                        {validation.errors.name && validation.touched.name ? (
                          <FormFeedback type="invalid">
                            {validation.errors.name}
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
                    <Col md={6}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          GPA
                        </Label>
                        <Input
                          type="number"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter GPA"
                          name="EntryScore"
                          value={validation.values.EntryScore || ""}
                          onBlur={validation.handleBlur}
                          onChange={validation.handleChange}
                          invalid={
                            validation.errors.EntryScore &&
                            validation.touched.EntryScore
                              ? true
                              : false
                          }
                        />
                        {validation.errors.EntryScore &&
                        validation.touched.EntryScore ? (
                          <FormFeedback type="invalid">
                            {validation.errors.EntryScore}
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
                          Courses
                        </Label>
                        <Select
                          name="Course_id"
                          options={SelectOption}
                          classNamePrefix="select"
                          onChange={(option) => {
                            validation.setFieldValue("Course_id", option.value);
                            validation.setFieldTouched("Course_id", true);
                          }}
                          onBlur={() =>
                            validation.setFieldTouched("Course_id", true)
                          }
                          value={SelectOption.find(
                            (opt) => opt.value === validation.values.Course_id
                          )}
                          className={
                            validation.errors.Course_id &&
                            validation.touched.Course_id
                              ? "is-invalid"
                              : ""
                          }
                        />
                        {validation.errors.Course_id &&
                          validation.touched.Course_id && (
                            <div className="invalid-feedback">
                              {validation.errors.Course_id}
                            </div>
                          )}
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
                  <Col md="12">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom02">
                        BackGround Image
                      </Label>
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
                              <h4>upload BackGround Image</h4>
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

          <Col md={4}>
            <Card>
              <CardHeader>
                <h5 className="card-title mb-0">Skill learn</h5>
              </CardHeader>
              <CardBody>
                {validation.values.Skill &&
                  validation.values.Skill.map((skill, index) => (
                    <div key={index} className="mb-2">
                      <Row>
                        <Col md={9}>
                          <Input
                            className="form-control"
                            id="skill-input"
                            placeholder="Enter Skill"
                            type="text"
                            value={skill}
                            onChange={(event) => {
                              const newSkills = [...validation.values.Skill];
                              newSkills[index] = event.target.value;
                              validation.setFieldValue("Skill", newSkills);
                            }}
                          />
                        </Col>
                        <Col md={3}>
                          <Button
                            color="danger"
                            outline
                            className="ms-2"
                            onClick={() => {
                              const newSkills = [...validation.values.Skill];
                              newSkills.splice(index, 1);
                              validation.setFieldValue("Skill", newSkills);
                            }}
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ))}
                {validation.touched.Skill && validation.errors.Skill ? (
                  <div className="invalid-feedback d-block">
                    {validation.errors.Skill}
                  </div>
                ) : null}
                <Button
                  color="secondary"
                  outline
                  onClick={() => {
                    const newSkills = [...(validation.values.Skill || []), ""];
                    validation.setFieldValue("Skill", newSkills);
                  }}
                >
                  Add Skill
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="card-title mb-0">Opportunities</h5>
              </CardHeader>
              <CardBody>
                {validation.values.Opportunities &&
                  validation.values.Opportunities.map((Opportunitie, index) => (
                    <div key={index} className="mb-2">
                      <Row>
                        <Col md={9}>
                          <Input
                            className="form-control"
                            id="skill-input"
                            placeholder="Enter Skill"
                            type="text"
                            value={Opportunitie}
                            onChange={(event) => {
                              const newOpportunities = [
                                ...validation.values.Opportunities,
                              ];
                              newOpportunities[index] = event.target.value;
                              validation.setFieldValue(
                                "Opportunities",
                                newOpportunities
                              );
                            }}
                          />
                        </Col>
                        <Col md={3}>
                          <Button
                            color="danger"
                            outline
                            className="ms-2"
                            onClick={() => {
                              const newOpportunities = [
                                ...validation.values.Opportunities,
                              ];
                              newOpportunities.splice(index, 1);
                              validation.setFieldValue(
                                "Opportunities",
                                newOpportunities
                              );
                            }}
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ))}
                {validation.touched.Opportunities &&
                validation.errors.Opportunities ? (
                  <div className="invalid-feedback d-block">
                    {validation.errors.Opportunities}
                  </div>
                ) : null}
                <Button
                  color="secondary"
                  outline
                  onClick={() => {
                    const newOpportunities = [
                      ...(validation.values.Opportunities || []),
                      "",
                    ];
                    validation.setFieldValue("Opportunities", newOpportunities);
                  }}
                >
                  Add Opportunities
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(FacultyCreate);
