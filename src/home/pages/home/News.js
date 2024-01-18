import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  CardHeader,
  Label,
  Row,
  Button,
  Form,
  FormFeedback,
  Alert,
  Spinner,
} from "reactstrap";

import withRouter from "../../../Components/Common/withRouter";
import { Link } from "react-router-dom";

import img8 from "../../../assets/images/small/2.jpg";
import img9 from "../../../assets/images/small/3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import { Pagination } from "swiper";

const News = (props) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span className="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Col lg={12}>
      <h5 className="fs-3 mb-2 mt-5">featured news</h5>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper swiper responsive-swiper rounded gallery-light pb-4"
      >
        <Row>
          <div className="swiper-wrapper">
            <SwiperSlide >
              <Card className="mb-4">
                <img
                  className="card-img-top img-fluid"
                  src={img9}
                  alt="Card cap"
                />
                <CardBody>
                  <h4 className="card-title">
                    Massachusetts Institute of Technology (MIT)
                  </h4>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </CardBody>
                <div className="card-footer">
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide >
              <Card className="mb-4">
                <img
                  className="card-img-top img-fluid"
                  src={img8}
                  alt="Card cap"
                />
                <CardBody>
                  <h4 className="card-title">
                    Massachusetts Institute of Technology (MIT)
                  </h4>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </CardBody>
                <div className="card-footer">
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide >
              <Card className="mb-4">
                <img
                  className="card-img-top img-fluid"
                  src={img9}
                  alt="Card cap"
                />
                <CardBody>
                  <h4 className="card-title">
                    Massachusetts Institute of Technology (MIT)
                  </h4>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </CardBody>
                <div className="card-footer">
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide >
              <Card className="mb-4">
                <img
                  className="card-img-top img-fluid"
                  src={img8}
                  alt="Card cap"
                />
                <CardBody>
                  <h4 className="card-title">
                    Massachusetts Institute of Technology (MIT)
                  </h4>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </CardBody>
                <div className="card-footer">
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide >
              <Card className="mb-4">
                <img
                  className="card-img-top img-fluid"
                  src={img9}
                  alt="Card cap"
                />
                <CardBody>
                  <h4 className="card-title">
                    Massachusetts Institute of Technology (MIT)
                  </h4>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </CardBody>
                <div className="card-footer">
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide >
              <Card className="mb-4">
                <img
                  className="card-img-top img-fluid"
                  src={img8}
                  alt="Card cap"
                />
                <CardBody>
                  <h4 className="card-title">
                    Massachusetts Institute of Technology (MIT)
                  </h4>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </CardBody>
                <div className="card-footer">
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </Card>
            </SwiperSlide>
          </div>
          <div className="swiper-pagination swiper-pagination-dark"></div>
        </Row>
      </Swiper>
    </Col>
  );
};
export default withRouter(News);
