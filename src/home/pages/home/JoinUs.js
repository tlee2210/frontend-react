import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Label,
  Row,
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Alert,
  Spinner,
} from "reactstrap";
import Select from "react-select";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

import withRouter from "../../../Components/Common/withRouter";

const GroupOptions2 = [
  { value: "Zero", label: "Zero" },
  { value: "Two", label: "Two" },
  { value: "Four", label: "Four" },
];

const JoinUs = (props) => {
  const [form, setform] = useState([]);
  const [selectedGroup2, setSelectedGroup2] = useState(null);

  function handleSelectGroups2(selectedGroup2, action) {
    if (action.action === "clear") {
      setSelectedGroup2(null);
      validation.setFieldValue("currernt", "");
    } else {
      setSelectedGroup2(selectedGroup2);
      validation.setFieldValue(
        "currernt",
        selectedGroup2 ? selectedGroup2.value : ""
      );
    }
  }

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      FirstName: setform.FirstName || "aaa",
      LastName: setform.LastName || "",
      email: setform.email || "",
      Country: setform.Country || "",
      Mobile: setform.Mobile || "",
      Nationality: setform.Nationality || "",
      currernt: setform.currernt || "",
    },
    validationSchema: Yup.object({
      FirstName: Yup.string().required("Please Enter Your First Name"),
      LastName: Yup.string().required("Please Enter Your Last Name"),
      email: Yup.string().required("Please Enter Your Email"),
      Country: Yup.string().required("Please Enter Your Country"),
      Mobile: Yup.string().required("Please Enter Your Country"),
      Nationality: Yup.string().required("Please Enter Your Nationality"),
      currernt: Yup.string().required("Please Enter Your currernt"),
    }),

    onSubmit: (values) => {
      console.log(values);
      // dispatch(loginUser(values, props.router.navigate));
    },
  });
  return (
    <Row className="bg-danger-subtle">
      <Col lg={7}>
        <h5 className="fs-3 mb-2 mt-5">Join us at Taylors College Sydney</h5>
        <h5>
          At Taylor's College Sydney, your gateway to the globally renowned
          University of Sydney—ranked 19th worldwide—begins. Unleash your
          potential and gain excellent career opportunities with a globally
          recognised degree. Your Pathway to the University of Sydney Taylor's
          College Sydney serves as your direct path to the University of Sydney.
          Experience comprehensive academic support and English language
          proficiency programs. Join a vibrant community of students while being
          conveniently close to the city and all its adventurous offerings.
          Apply Now Begin your academic journey towards the University of
          Sydney. Don't miss the chance for a world-class education and an
          exciting future. Contact us today by completing the form and kickstart
          your pathway to success Taylor's College Sydney
        </h5>
      </Col>
      <Col lg={5}>
        <h5 className="fs-3 mb-2 mt-5">All fields are required.</h5>

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit();
            return false;
          }}
          action="#"
        >
          <Row>
            <Col xxl={6} md={6}>
              <div className="mb-3">
                <Label htmlFor="FirstName" className="form-label">
                  First Name
                </Label>
                <Input
                  name="FirstName"
                  className="form-control"
                  placeholder="Enter First Name"
                  type="text"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.FirstName || ""}
                  invalid={
                    validation.touched.FirstName && validation.errors.FirstName
                      ? true
                      : false
                  }
                />
                {validation.touched.FirstName && validation.errors.FirstName ? (
                  <FormFeedback type="invalid">
                    {validation.errors.FirstName}
                  </FormFeedback>
                ) : null}
              </div>
            </Col>
            <Col xxl={6} md={6}>
              <div className="mb-3">
                <Label htmlFor="LastName" className="form-label">
                  Last Name
                </Label>
                <Input
                  name="LastName"
                  className="form-control"
                  placeholder="Enter Last Name"
                  type="text"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.LastName || ""}
                  invalid={
                    validation.touched.LastName && validation.errors.LastName
                      ? true
                      : false
                  }
                />
                {validation.touched.LastName && validation.errors.LastName ? (
                  <FormFeedback type="invalid">
                    {validation.errors.LastName}
                  </FormFeedback>
                ) : null}
              </div>
            </Col>
            <Col xxl={12} md={12}>
              <div className="mb-3">
                <Label htmlFor="email" className="form-label">
                  Email Address
                </Label>
                <Input
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  type="email"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.email || ""}
                  invalid={
                    validation.touched.email && validation.errors.email
                      ? true
                      : false
                  }
                />
                {validation.touched.email && validation.errors.email ? (
                  <FormFeedback type="invalid">
                    {validation.errors.email}
                  </FormFeedback>
                ) : null}
              </div>
            </Col>
            <Col xxl={6} md={6}>
              <div className="mb-3">
                <Label htmlFor="email" className="form-label">
                  Country
                </Label>
                <Input
                  name="Country"
                  className="form-control"
                  placeholder="Enter Country"
                  type="text"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.Country || ""}
                  invalid={
                    validation.touched.Country && validation.errors.Country
                      ? true
                      : false
                  }
                />
                {validation.touched.Country && validation.errors.Country ? (
                  <FormFeedback type="invalid">
                    {validation.errors.Country}
                  </FormFeedback>
                ) : null}
              </div>
            </Col>
            <Col xxl={6} md={6}>
              <div className="mb-3">
                <Label htmlFor="email" className="form-label">
                  Mobile
                </Label>
                <Input
                  name="Mobile"
                  className="form-control"
                  placeholder="Enter Mobile"
                  type="text"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.Mobile || ""}
                  invalid={
                    validation.touched.Mobile && validation.errors.Mobile
                      ? true
                      : false
                  }
                />
                {validation.touched.Mobile && validation.errors.Mobile ? (
                  <FormFeedback type="invalid">
                    {validation.errors.Mobile}
                  </FormFeedback>
                ) : null}
              </div>
            </Col>
            <Col xxl={12} md={12}>
              <div className="mb-3">
                <Label htmlFor="Nationality" className="form-label">
                  Nationality
                </Label>
                <Input
                  name="Nationality"
                  className="form-control"
                  placeholder="Enter Nationality"
                  type="text"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.Nationality || ""}
                  invalid={
                    validation.touched.Nationality &&
                    validation.errors.Nationality
                      ? true
                      : false
                  }
                />
                {validation.touched.Nationality &&
                validation.errors.Nationality ? (
                  <FormFeedback type="invalid">
                    {validation.errors.Nationality}
                  </FormFeedback>
                ) : null}
              </div>
            </Col>
            <Col xxl={12} md={12}>
              <div className="mb-3">
                <Label htmlFor="currernt" className="form-label">
                  currernt
                </Label>
                <Input
                  hidden
                  name="currernt"
                  className="form-control"
                  placeholder="Enter currernt level"
                  type="text"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.currernt || ""}
                  invalid={
                    validation.touched.currernt && validation.errors.currernt
                      ? true
                      : false
                  }
                />
                <Select
                  name="currernt"
                  isClearable={true}
                  value={selectedGroup2}
                  onChange={handleSelectGroups2}
                  onBlur={validation.handleBlur}
                  options={GroupOptions2}
                  invalid={
                    validation.touched.currernt && validation.errors.currernt
                      ? true
                      : false
                  }
                />
                {validation.touched.currernt && validation.errors.currernt ? (
                  <FormFeedback type="invalid">
                    {validation.errors.currernt}
                  </FormFeedback>
                ) : null}
              </div>
            </Col>
          </Row>

          {/* currernt level of schooling being undertaken */}
          <div className="mt-4">
            <Button
              color="success"
              className="btn btn-success w-25 mb-2"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};
export default withRouter(JoinUs);
