import React, { useState, useEffect } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { createSelector } from "reselect";
import withRouter from "../../../Components/Common/withRouter";
import Flatpickr from "react-flatpickr";

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
} from "reactstrap";
import { message } from "antd";
import { clearNotificationMessage } from "../../../slices/message/reducer";

// Redux
import { useDispatch, useSelector } from "react-redux";
// import { addNewProduct as onAddNewProduct } from "../../../slices/thunks";

import { Link, useNavigate } from "react-router-dom";
import { DepartmentStore } from "../../../slices/Department/thunk";
//formik
import { useFormik } from "formik";
import * as Yup from "yup";

const SessionCreate = (props) => {
  document.title = "Create Session";
  const history = useNavigate();
  const dispatch = useDispatch();
  const selectSessionCreateState = (state) => state;
  const SessionCreatepageData = createSelector(
    selectSessionCreateState,
    (state) => ({
      isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
      errorMessage: state.Message.errorMessage,
    })
  );
  const { isErrorNotificationVisible, errorMessage } = useSelector(
    SessionCreatepageData
  );
  const getNextYearCode = () => {
    const nextYear = new Date().getFullYear() + 1;
    return nextYear.toString().slice(-2) + "UniStu";
  };

  const [code, setCode] = useState(getNextYearCode());

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      Subject: "",
      Code: code,
    },
    validationSchema: Yup.object({
      Subject: Yup.string().required("Please Enter a Subject Title"),
    }),
    onSubmit: (values) => {
      console.log(values);
      const formData = new FormData();
      formData.append("Subject", values.Subject);
      formData.append("Code", values.Code);
      dispatch(DepartmentStore(formData, props.router.navigate));
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
        <BreadCrumb title="Create Session" pageTitle="Session" />

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
                    <Col md={12}>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          code
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter Subject title"
                          name="code"
                          disabled
                          value={validation.values.Code || code}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mt-3">
                        <Label className="form-label mb-0">
                          MinDate and MaxDate
                        </Label>
                        <Flatpickr
                          className="form-control"
                          options={{
                            minDate: new Date(
                              new Date().getFullYear() + 1,
                              0,
                              1
                            ), // Ngày đầu tiên của năm tiếp theo
                            // maxDate: new Date(
                            //   new Date().getFullYear() + 1,
                            //   0,
                            //   1
                            // ).fp_incr(14), // 14 ngày sau ngày minDate
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mt-3">
                        <Label className="form-label mb-0">
                          MinDate and MaxDate
                        </Label>
                        <Flatpickr
                          className="form-control"
                          options={{
                            minDate: "today",
                            maxDate: new Date().fp_incr(14),
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
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

export default withRouter(SessionCreate);
