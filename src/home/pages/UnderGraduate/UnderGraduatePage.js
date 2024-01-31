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
    isNotificationVisible: state.Message.isNotificationVisible,
    notificationMessage: state.Message.notificationMessage,
    isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
    errorMessage: state.Message.errorMessage,
  }));
  
  const {
    item,
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
    <div style={{ paddingTop: 150 }}>
      <ParticlesAuth>
        <HeaderGraduate data={item} />
        <NavBarGraduate data={item} />
      </ParticlesAuth>
    </div>
  );
}

export default withRouter(UnderGraduatePage);
