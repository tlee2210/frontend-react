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
  Row,
  Button,
  Table,
  FormGroup,
  Label,
  Form,
} from "reactstrap";
import { message } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { clearNotificationMessage } from "../../../slices/message/reducer";

// Redux
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
//edit import
import {
  GetdetailFeedback,
  SeenFeedback,
} from "../../../slices/feedback/thunk";
//formik
import { useFormik } from "formik";
import * as Yup from "yup";

const FeedbackDetail = (props) => {
  // console.log(props.router.params.id);
  const id = props.router.params.id;

  document.title = "Feedback Detail";
  const history = useNavigate();
  const dispatch = useDispatch();
  const selectFacultyCreateState = (state) => state;
  const FacultyCreatepageData = createSelector(
    selectFacultyCreateState,
    (state) => ({
      item: state.Feedbackdashboard.item,
      isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
      errorMessage: state.Message.errorMessage,
    })
  );
  const { isErrorNotificationVisible, errorMessage, item } = useSelector(
    FacultyCreatepageData
  );
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      responses: item.responses || "",
    },
    validationSchema: Yup.object({
      responses: Yup.string().required("responses is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      const formData = new FormData();
      formData.append("Id", item.id);
      formData.append("responses", values.responses);
      dispatch(SeenFeedback(formData, props.router.navigate));
    },
  });

  useEffect(() => {
    if (errorMessage && isErrorNotificationVisible) {
      message.error(errorMessage);
      dispatch(clearNotificationMessage());
    }
  }, [errorMessage, isErrorNotificationVisible]);

  useEffect(() => {
    dispatch(GetdetailFeedback(id));
  }, []);

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Feedback detail" pageTitle="Feedback" />

        <Row>
          <Col md={12}>
            <Card>
              <CardBody>
                <Row>
                  {/* here */}
                  <Table className="table-borderless mb-0">
                    <tbody>
                      <tr>
                        <th className="ps-0" scope="row">
                          name :
                        </th>
                        <td className="text-muted">{item.name}</td>
                        <th className="ps-0" scope="row">
                          email :
                        </th>
                        <td className="text-muted">{item.email}</td>
                        <th className="ps-0" scope="row">
                          create At :
                        </th>
                        <td className="text-muted">{item.createAt}</td>
                      </tr>
                    </tbody>
                  </Table>
                  <textarea
                    disabled
                    className="form-control"
                    id="exampleFormControlTextarea5"
                    rows="14"
                    value={item.description}
                  />
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={12}>
            <Card>
              <CardBody>
                <Form
                  className="needs-validation"
                  onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
                    return false;
                  }}
                >
                  <Col md="12" className="mb-3">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom02"></Label>
                    </FormGroup>
                    {/* <Form method="post"> */}
                    <CKEditor
                      disabled={item.status === "Processed"}
                      editor={ClassicEditor}
                      data={validation.values.responses}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        validation.setFieldValue("responses", data);
                      }}
                      onBlur={() =>
                        validation.setFieldTouched("responses", true)
                      }
                    />
                    {validation.touched.responses &&
                    validation.errors.responses ? (
                      <div className="invalid-feedback d-block">
                        {validation.errors.responses}
                      </div>
                    ) : null}
                  </Col>
                  {item.status !== "Processed" && (
                    <Row>
                      <Col md={12}>
                        <div className="text-end">
                          <Button
                            color="success"
                            className="btn-label text-end me-2"
                            type="submit"
                          >
                            <i className="ri-check-double-line label-icon align-middle fs-16 me-2"></i>
                            Seend Feedback
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  )}
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(FeedbackDetail);
