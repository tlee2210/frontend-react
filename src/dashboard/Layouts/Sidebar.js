import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
//import logo
import logoSm from "../../assets/images/logo-sm.png";
import logoLight from "../../assets/images/logo-light.png";
import { Col, Container, Row } from "reactstrap";

//Import Components
import VerticalLayout from "./VerticalLayouts";

const Sidebar = ({ layoutType }) => {
  useEffect(() => {
    var verticalOverlay = document.getElementsByClassName("vertical-overlay");
    if (verticalOverlay) {
      verticalOverlay[0].addEventListener("click", function () {
        document.body.classList.remove("vertical-sidebar-enable");
      });
    }
  });
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

  const addEventListenerOnSmHoverMenu = () => {
    // add listener Sidebar Hover icon on change layout from setting
    if (
      document.documentElement.getAttribute("data-sidebar-size") === "sm-hover"
    ) {
      document.documentElement.setAttribute(
        "data-sidebar-size",
        "sm-hover-active"
      );
    } else if (
      document.documentElement.getAttribute("data-sidebar-size") ===
      "sm-hover-active"
    ) {
      document.documentElement.setAttribute("data-sidebar-size", "sm-hover");
    } else {
      document.documentElement.setAttribute("data-sidebar-size", "sm-hover");
    }
  };

  return (
    <React.Fragment>
      <div className="app-menu navbar-menu">
        <div className="navbar-brand-box">
          <Link to="/" className="logo">
            <span className="logo-sm">
              <img
                src={avatar}
                alt="avatar"
                className="rounded-circle avatar-xxs"
                height={22}
              />
            </span>
            <span className="logo-lg">
              <Row className="align-items-center">
                <Col xs={3} md={3} xxl={3}>
                  <img
                    src={avatar}
                    alt="user-profile"
                    className="rounded-circle avatar-md"
                  />
                </Col>
                <Col xs={9} md={9} xxl={9}>
                  <span className="d-none d-xl-block ms-1 fs-18 text-muted user-name-sub-text">
                    {userName} - {role}
                  </span>
                </Col>
              </Row>
            </span>
          </Link>
          <button
            onClick={addEventListenerOnSmHoverMenu}
            type="button"
            className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i className="ri-record-circle-line"></i>
          </button>
        </div>

        <React.Fragment>
          <SimpleBar id="scrollbar" className="h-100">
            <Container fluid>
              <div id="two-column-menu"></div>
              <ul className="navbar-nav" id="navbar-nav">
                <VerticalLayout layoutType={layoutType} />
              </ul>
            </Container>
          </SimpleBar>
          <div className="sidebar-background"></div>
        </React.Fragment>
      </div>
      <div className="vertical-overlay"></div>
    </React.Fragment>
  );
};

export default Sidebar;
