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
import Flatpickr from "react-flatpickr";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

import withRouter from "../../../Components/Common/withRouter";

const GroupOptions2 = [
  { value: "Zero", label: "Zero" },
  { value: "Two", label: "Two" },
  { value: "Four", label: "Four" },
];

const JoinUs = ({ data }) => {
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      FirstName: "",
      LastName: "",
      email: "",
      dateOfBirth: "",
      Phone: "",
      Address: "",
      Gender: "",
      FacultyId: "",
      FatherName: "",
      MotherName: "",
      HighSchool: "",
      GPA: "",
    },
    validationSchema: Yup.object({
      FirstName: Yup.string().required("Please Enter Your First Name"),
      LastName: Yup.string().required("Please Enter Your Last Name"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Please Enter a Email"),
      dateOfBirth: Yup.date()
        .min(new Date().fp_incr(-30 * 365), "Minimum age is 30 years")
        .max(new Date().fp_incr(-18 * 365), "Maximum age is 18 years")
        .required("Please select a date of birth"),
      Phone: Yup.string()
        .required("Please Enter a Phone")
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
      Address: Yup.string().required("Please Enter a Address"),
      Gender: Yup.string()
        .oneOf(
          ["Male", "Female"],
          "Invalid gender. Please choose either Male or Female."
        )
        .required("Please Enter a Gender"),
      MotherName: Yup.string().required("Please Enter a Mother Name"),
      FatherName: Yup.string().required("Please Enter Father Name"),
      HighSchool: Yup.string().required("Please Enter High School"),
      GPA: Yup.string().required("Please Enter GPA"),
      FacultyId: Yup.string().required("Please Enter a Faculty"),
    }),

    onSubmit: (values) => {
      console.log(values);
      // dispatch(loginUser(values, props.router.navigate));
    },
  });
  return (
    <Row className="bg-danger-subtle">
      <Col lg={7}>
        <div>
          <h5 className="fs-3 mb-2 mt-5">
            Welcome to a world of endless possibilities and unparalleled
            education at College Sydney
          </h5>
          <p className="text-muted">
            where the keys to excellence and a promising future are at your
            fingertips. This is the place where education transcends the
            confines of textbooks, offering a holistic experience that nurtures
            growth and maturity in one of the most diverse and vibrant cities in
            the world.
          </p>
          <p className="text-muted">
            With a proud history of cultivating future leaders, College Sydney
            offers a spectrum of academic programs designed to challenge and
            inspire students. Whether your passion lies in liberal arts, natural
            sciences, business, or information technology, our wide range of
            subjects is tailored to discover your passions and pursue your
            dreams.
          </p>
          <p className="text-muted">
            We take pride in our dynamic and diverse academic community, where
            students from every cultural background learn, innovate, and thrive
            together. Supported by a team of renowned faculty members and
            industry experts, you are fully equipped to succeed in today's
            globalized environment.
          </p>
          <p className="text-muted">
            Beyond classroom education, College Sydney opens doors to
            internships, research opportunities, and professional networking –
            all meticulously designed to give you a competitive edge in the job
            market. With a prime location, state-of-the-art facilities, and an
            array of student clubs and organizations, you will live every moment
            of your university life to the fullest.
          </p>
          <p className="text-muted">
            We invite you to embark on this academic adventure, where you will
            author your own story, master knowledge, and make a difference.
            Register today and let College Sydney be the solid launchpad for
            your brilliant career. Contact us or visit online to learn more
            about how we can support you on this journey – a journey full of
            promise and success.
          </p>
        </div>
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
            <Col xxl={12} md={12}>
              <div className="mb-3">
                <Label htmlFor="currernt" className="form-label">
                  Faculty
                </Label>
                <Select
                  name="FacultyId"
                  options={data}
                  classNamePrefix="select"
                  onChange={(option) => {
                    validation.setFieldValue("FacultyId", option.value);
                    validation.setFieldTouched("FacultyId", true);
                  }}
                  onBlur={() => validation.setFieldTouched("FacultyId", true)}
                  value={data.find(
                    (opt) => opt.value === validation.values.FacultyId
                  )}
                  className={
                    validation.errors.FacultyId && validation.touched.FacultyId
                      ? "is-invalid"
                      : ""
                  }
                />
                {validation.errors.FacultyId &&
                  validation.touched.FacultyId && (
                    <div className="invalid-feedback">
                      {validation.errors.FacultyId}
                    </div>
                  )}
              </div>
            </Col>
            <Col xxl={6} md={6}>
              <div className="mb-3">
                <Label htmlFor="email" className="form-label">
                  dateOfBirth
                </Label>
                <Flatpickr
                  className="form-control"
                  value={validation.values.dateOfBirth}
                  onChange={([selectedDate]) => {
                    validation.setFieldValue("dateOfBirth", selectedDate);
                  }}
                  options={{
                    minDate: new Date().fp_incr(-30 * 365),
                    maxDate: new Date().fp_incr(-18 * 365),
                  }}
                />
                {validation.errors.dateOfBirth &&
                validation.touched.dateOfBirth ? (
                  <div className="text-danger">
                    {validation.errors.dateOfBirth}
                  </div>
                ) : null}
              </div>
            </Col>
            <Col xxl={6} md={6}>
              <div className="mb-3">
                <Label htmlFor="email" className="form-label">
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
                {validation.touched.Phone && validation.errors.Phone ? (
                  <FormFeedback type="invalid">
                    {validation.errors.Phone}
                  </FormFeedback>
                ) : null}
              </div>
            </Col>
            <Col xxl={6} md={6}>
              <div className="mb-3">
                <Label className="form-label" htmlFor="product-title-input">
                  Father Name
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id="product-title-input"
                  placeholder="Enter Father Name"
                  name="FatherName"
                  value={validation.values.FatherName || ""}
                  onBlur={validation.handleBlur}
                  onChange={validation.handleChange}
                  invalid={
                    validation.errors.FatherName &&
                    validation.touched.FatherName
                      ? true
                      : false
                  }
                />
                {validation.errors.FatherName &&
                validation.touched.FatherName ? (
                  <FormFeedback type="invalid">
                    {validation.errors.FatherName}
                  </FormFeedback>
                ) : null}
              </div>
            </Col>
            <Col xxl={6} md={6}>
              <div className="mb-3">
                <Label className="form-label" htmlFor="product-title-input">
                  Mother Name
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id="product-title-input"
                  placeholder="Enter Mother Name"
                  name="MotherName"
                  value={validation.values.MotherName || ""}
                  onBlur={validation.handleBlur}
                  onChange={validation.handleChange}
                  invalid={
                    validation.errors.MotherName &&
                    validation.touched.MotherName
                      ? true
                      : false
                  }
                />
                {validation.errors.MotherName &&
                validation.touched.MotherName ? (
                  <FormFeedback type="invalid">
                    {validation.errors.MotherName}
                  </FormFeedback>
                ) : null}
              </div>
            </Col>
            <Col xxl={6} md={6}>
              <div className="mb-3">
                <Label htmlFor="Nationality" className="form-label">
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
                    validation.errors.Address && validation.touched.Address
                      ? true
                      : false
                  }
                />
                {validation.errors.Address && validation.touched.Address ? (
                  <FormFeedback type="invalid">
                    {validation.errors.Address}
                  </FormFeedback>
                ) : null}
              </div>
            </Col>
            <Col xxl={6} md={6}>
              <div className="mb-3">
                <Label htmlFor="Nationality" className="form-label">
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
                    validation.errors.Gender && validation.touched.Gender
                      ? true
                      : false
                  }
                />
                {validation.errors.Gender && validation.touched.Gender ? (
                  <FormFeedback type="invalid">
                    {validation.errors.Gender}
                  </FormFeedback>
                ) : null}
              </div>
            </Col>
            <Col xxl={6} md={6}>
              <div className="mb-3">
                <Label htmlFor="Nationality" className="form-label">
                  High School
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id="product-title-input"
                  placeholder="Enter Gender"
                  name="HighSchool"
                  value={validation.values.HighSchool || ""}
                  onBlur={validation.handleBlur}
                  onChange={validation.handleChange}
                  invalid={
                    validation.errors.HighSchool &&
                    validation.touched.HighSchool
                      ? true
                      : false
                  }
                />
                {validation.errors.HighSchool &&
                validation.touched.HighSchool ? (
                  <FormFeedback type="invalid">
                    {validation.errors.HighSchool}
                  </FormFeedback>
                ) : null}
              </div>
            </Col>
            <Col xxl={6} md={6}>
              <div className="mb-3">
                <Label htmlFor="Nationality" className="form-label">
                  GPA
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id="product-title-input"
                  placeholder="Enter GPA"
                  name="GPA"
                  value={validation.values.GPA || ""}
                  onBlur={validation.handleBlur}
                  onChange={validation.handleChange}
                  invalid={
                    validation.errors.GPA && validation.touched.GPA
                      ? true
                      : false
                  }
                />
                {validation.errors.GPA && validation.touched.GPA ? (
                  <FormFeedback type="invalid">
                    {validation.errors.GPA}
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
