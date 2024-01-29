import React, { useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useProfile } from "../Components/Hooks/UserHooks";
import { setAuthorization } from "../helpers/api_helper";

import { logoutUser } from "../slices/auth/login/thunk";

//Auth
const AuthProtected = (props) => {
  const dispatch = useDispatch();
  const { userProfile, loading, token } = useProfile();

  if (!userProfile) {
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }
  useEffect(() => {
    if (userProfile && !loading && token) {
      setAuthorization(token);
    } else if (!userProfile && loading && !token) {
      dispatch(logoutUser());
    }
  }, [token, userProfile, loading, dispatch]);

  return <>{props.children}</>;
};

//admin
const AdminProtected = (props) => {
  const dispatch = useDispatch();
  const { userProfile, loading, token } = useProfile();
  // console.log(userProfile);
  if (!userProfile) {
    return (
      <Navigate to={{ pathname: "/home", state: { from: props.location } }} />
    );
  } else {
    const user = userProfile.user;
    if (user && user.role !== "Admin" && user.role !== "Teach") {
      return (
        <Navigate to={{ pathname: "/home", state: { from: props.location } }} />
      );
    }
  }

  useEffect(() => {
    if (userProfile && !loading && token) {
      setAuthorization(token);
    } else if (!userProfile && loading && !token) {
      dispatch(logoutUser());
    }
  }, [token, userProfile, loading, dispatch]);

  return <>{props.children}</>;
};

//login
const AccessRoute = (props) => {
  const dispatch = useDispatch();
  const { userProfile, loading, token } = useProfile();

  if (userProfile) {
    return (
      <Navigate to={{ pathname: "/home", state: { from: props.location } }} />
    );
  }

  return <>{props.children}</>;
};

export { AdminProtected, AuthProtected, AccessRoute };
