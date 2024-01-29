import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { createSelector } from "reselect";
import withRouter from "../Common/withRouter";

import { useSelector } from "react-redux";
import { logoutUser } from "../../slices/auth/login/thunk";
const ProfileDropdown = (props) => {
  const profiledropdownData = createSelector(
    (state) => state.Profile.user,
    (user) => user
  );
  // Inside your component
  const user = useSelector(profiledropdownData);

  const [userName, setUserName] = useState(null);
  const [avatar, setavatar] = useState(null);
  const [role, setrole] = useState(null);

  useEffect(() => {
    const authUserString = sessionStorage.getItem("authUser");
    if (authUserString) {
      const userObj = JSON.parse(authUserString);
      setavatar(userObj.user.avatar);
      setUserName(userObj.user.name);
      setrole(userObj.user.role);
      // console.log(userObj.user);
    }
  }, []);

  //Dropdown Toggle
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };
  return (
    <React.Fragment>
      <Dropdown
        isOpen={isProfileDropdown}
        toggle={toggleProfileDropdown}
        className="ms-sm-3 header-item topbar-user"
      >
        <DropdownToggle tag="button" type="button" className="btn">
          <span className="d-flex align-items-center">
            <img
              className="rounded-circle header-profile-user"
              src={avatar}
              alt="Header Avatar"
            />
            <span className="text-start ms-xl-2">
              <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                {userName}
              </span>
              {role !== "Student" ? (
                <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">
                  {role}
                </span>
              ) : (
                <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">
                  Student
                </span>
              )}
            </span>
          </span>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <h6 className="dropdown-header">Welcome {userName} !</h6>
          <DropdownItem className="p-0">
            {role !== "Admin" ? (
              <a href="/profile" className="dropdown-item">
                <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
                <span className="align-middle">Profile</span>
              </a>
            ) : (
              <a href="/dashboard/Courses" className="dropdown-item">
                <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
                <span className="align-middle">Dashboard</span>
              </a>
            )}
          </DropdownItem>
          <div className="dropdown-divider"></div>
          <DropdownItem className="p-0">
            <a className="dropdown-item" onClick={() => logoutUser()}>
              <i className=" ri-logout-box-r-fill text-muted fs-16 align-middle me-1"></i>{" "}
              {/* <span className="align-middle">
                Balance : <b>$5971.67</b>
              </span> */}
              log Out
            </a>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default withRouter(ProfileDropdown);
