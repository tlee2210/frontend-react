import React, { useEffect, useState } from "react";
import ParticlesAuth from "../../layouts/ParticlesAuth";
import "./UnitPage.css";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import withRouter from "../../../Components/Common/withRouter";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { GetDepartmentDetails } from "../../../slices/home/courses/thunk";

function UnitPage(props) {
  //   console.log(props);
  const id = props.router.params.id;

  const dispatch = useDispatch();
  const selecthomeState = (state) => state;
  const homepageData = createSelector(selecthomeState, (state) => ({
    item: state.Courses.item,
    SemesterGrouped: state.Courses.SemesterGrouped,
    isNotificationVisible: state.Message.isNotificationVisible,
    notificationMessage: state.Message.notificationMessage,
    isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
    errorMessage: state.Message.errorMessage,
  }));

  const {
    item,
    SemesterGrouped,
    isNotificationVisible,
    notificationMessage,
    isErrorNotificationVisible,
    errorMessage,
  } = useSelector(homepageData);
  document.title = item.subject;

  useEffect(() => {
    dispatch(GetDepartmentDetails(id));
    // console.log(id);
  }, [id]);

  return (
    <ParticlesAuth>
      {/* Header */}
      <header
        className="header-container-unit-page-Header"
        style={{ paddingTop: 210, paddingBottom: 100 }}
      >
        <div className="header-content-unit-page-Header">
          <span className="header-code-unit-page-Header">{item.code}</span>
          <h1 className="header-title-unit-page-Header">{item.subject}</h1>
        </div>
      </header>

      <Container fluid>
        {/* Overview */}
        <div className="row" style={{ paddingTop: 50, paddingBottom: 70 }}>
          <div className="col-sm-4">
            <h2 className="overview-title-overview-Graduated">Overview</h2>
          </div>
          <div className="col-sm-8">
            <p
              className="fs-5"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        </div>
      </Container>
    </ParticlesAuth>
  );
}

export default withRouter(UnitPage);
