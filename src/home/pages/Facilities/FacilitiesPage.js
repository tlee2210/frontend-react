import React, { useEffect, useState } from "react";
import ParticlesAuth from "../../layouts/ParticlesAuth";
import "./Facilities.css";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import { Pagination } from "swiper";
import img8 from "../../../assets/images/small/2.jpg";
import img9 from "../../../assets/images/small/3.png";
import { Gethomefacilities } from "../../../slices/home/facilities/thunk";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

function FacilitiesPage() {
  document.title = "Facilities";

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const dispatch = useDispatch();
  const selecthomeState = (state) => state;
  const homepageData = createSelector(selecthomeState, (state) => ({
    facilitiesData: state.Facilities.facilitiesData,
    isNotificationVisible: state.Message.isNotificationVisible,
    notificationMessage: state.Message.notificationMessage,
    isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
    errorMessage: state.Message.errorMessage,
  }));
  const {
    facilitiesData,
    isNotificationVisible,
    notificationMessage,
    isErrorNotificationVisible,
    errorMessage,
  } = useSelector(homepageData);
  const getColumnClass = (index) => {
    return index % 3 === 2 ? "col-sm-12" : "col-sm-6";
  };
  const getColumnImageClass = (index) => {
    return index % 3 === 2
      ? "g-0 bg-light position-relative"
      : "g-0 bg-light position-relative flex-column align-items-center";
  };
  useEffect(() => {
    dispatch(Gethomefacilities());
  }, []);
  return (
    <ParticlesAuth>
      <div style={{ paddingTop: 150, paddingBottom: 100 }}>
        {/* Banner */}
        <header className="header-container-news-Header-facilities">
          <div className="header-content-news-Header">
            <h1 className="header-title-news-Header mb-5">Facilities</h1>
            <div className="mt-1">
              <p className="text-news-css">
                At University of Technology, we have invested more
                than A$250m in state-of-the-art research equipment and
                facilities in order to support innovative, world-first,
                leading-edge research. Use our leading facilities to advance
                your work.
              </p>
            </div>
          </div>
        </header>
        {/* Text */}
        <div className="pt-5 pb-5">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <p className="fs-5">
                We have invested more than A$250m in
                state-of-the-art research equipment and facilities in order to
                support innovative, world-first, leading-edge research. By
                collaborating with us, you can access these resources to benefit
                your community, organisation or business.{" "}
              </p>
              <p className="fs-5">
                Explore our flagship research buildings: the Advanced
                Manufacturing and Design Centre and the Advanced Technologies
                Centre.
              </p>
            </div>
          </div>
        </div>
        <Container>
          {/* Card  */}
          <div>
            <div className="row">
              {facilitiesData.map((facility, index) => (
                <div className={getColumnClass(index)} key={index}>
                  <Card
                    style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)" }}
                  >
                    <CardBody>
                      {/* getColumnImageClass */}
                      <Row className={getColumnImageClass(index)}>
                        <Col className="mb-3">
                          <img
                            src={facility.image}
                            className="rounded-start img-fluid"
                            alt={facility.title}
                            style={{
                              width: "100%",
                            //   height: "200px",
                              objectFit: "cover",
                            }}
                          />
                        </Col>
                        <Col className="p-4">
                          <h5 className="mt-0 fs-2 text-dark">
                            {facility.title}
                          </h5>
                          {/* <p className="card-text">{facility.description}</p> */}
                          <p
                            className="card-text"
                            dangerouslySetInnerHTML={{
                              __html: facility.description,
                            }}
                          ></p>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Top stories */}
         
        </Container>
      </div>
    </ParticlesAuth>
  );
}

export default FacilitiesPage;
