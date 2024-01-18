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
import img9 from "../../../assets/images/small/3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import { Pagination } from "swiper";

const EducationProgram = (props) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span className="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Col lg={12}>
      <h5 className="fs-3 mb-2 mt-5">Education program</h5>
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
            <SwiperSlide>
              <Card>
                <img src={img9} className="card-img-top" alt="..." />
                <CardBody>
                  <h5 className="card-title">
                    Massachusetts Institute of Technology (MIT)
                  </h5>
                  <p className="card-text">
                    e Computer Science and Artificial Intelligence Lab (CSAIL)
                  </p>
                  <Link to="#" className="btn btn-primary stretched-link">
                    Go somewhere
                  </Link>
                </CardBody>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <img src={img8} className="card-img-top" alt="..." />
                <CardBody>
                  <h5 className="card-title">
                    Massachusetts Institute of Technology (MIT)
                  </h5>
                  <p className="card-text">
                    e Computer Science and Artificial Intelligence Lab (CSAIL)
                  </p>
                  <Link to="#" className="btn btn-primary stretched-link">
                    Go somewhere
                  </Link>
                </CardBody>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <img src={img9} className="card-img-top" alt="..." />
                <CardBody>
                  <h5 className="card-title">
                    Massachusetts Institute of Technology (MIT)
                  </h5>
                  <p className="card-text">
                    e Computer Science and Artificial Intelligence Lab (CSAIL)
                  </p>
                  <Link to="#" className="btn btn-primary stretched-link">
                    Go somewhere
                  </Link>
                </CardBody>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <img src={img8} className="card-img-top" alt="..." />
                <CardBody>
                  <h5 className="card-title">
                    Massachusetts Institute of Technology (MIT)
                  </h5>
                  <p className="card-text">
                    e Computer Science and Artificial Intelligence Lab (CSAIL)
                  </p>
                  <Link to="#" className="btn btn-primary stretched-link">
                    Go somewhere
                  </Link>
                </CardBody>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <img src={img9} className="card-img-top" alt="..." />
                <CardBody>
                  <h5 className="card-title">
                    Massachusetts Institute of Technology (MIT)
                  </h5>
                  <p className="card-text">
                    e Computer Science and Artificial Intelligence Lab (CSAIL)
                  </p>
                  <Link to="#" className="btn btn-primary stretched-link">
                    Go somewhere
                  </Link>
                </CardBody>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <img src={img8} className="card-img-top" alt="..." />
                <CardBody>
                  <h5 className="card-title">
                    Massachusetts Institute of Technology (MIT)
                  </h5>
                  <p className="card-text">
                    e Computer Science and Artificial Intelligence Lab (CSAIL)
                  </p>
                  <Link to="#" className="btn btn-primary stretched-link">
                    Go somewhere
                  </Link>
                </CardBody>
              </Card>
            </SwiperSlide>
          </div>
          <div className="swiper-pagination swiper-pagination-dark"></div>
        </Row>
      </Swiper>
    </Col>
  );
};
export default withRouter(EducationProgram);
