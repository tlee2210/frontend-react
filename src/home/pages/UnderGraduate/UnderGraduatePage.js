import React, { useEffect, useState } from "react";
import ParticlesAuth from "../../layouts/ParticlesAuth";
import HeaderGraduate from "./components/Header/HeaderGraduate";
import NavBarGraduate from "./components/NavBarGraduate/NavBarGraduate";
import { GetFacultyDetails } from "../../../slices/home/courses/thunk";
import withRouter from "../../../Components/Common/withRouter";
import { createSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";

function UnderGraduatePage(props) {
  // console.log(props);
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

  const slug = props.router.params.slug;
  useEffect(() => {
    dispatch(GetFacultyDetails(slug));
    // console.log(id);
  }, [slug]);
  document.title = item.title;

  return (
    <div style={{ paddingTop: 115 }}>
      <ParticlesAuth>
        <HeaderGraduate data={item} />
        <NavBarGraduate data={item} data2={SemesterGrouped} />
      </ParticlesAuth>
    </div>
  );
}

export default withRouter(UnderGraduatePage);
