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

import moment from "moment";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import { Pagination } from "swiper";

const News = ({ data }) => {
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
            {data.map((News, index) => (
              <SwiperSlide key={index}>
                <Link to={`/news/${News.id}/details`}>
                  <Card
                    className="mb-4"
                    style={{ minHeight: "500px", maxHeight: "500px" }}
                  >
                    <img
                      className="card-img-top img-fluid"
                      src={News.image}
                      alt={News.title}
                      style={{ minHeight: "300px", maxHeight: "300px" }}
                    />
                    <CardBody>
                      <h4 className="card-title">{News.title}</h4>
                      <p
                        className="card-text"
                        dangerouslySetInnerHTML={{
                          __html: News.content,
                        }}
                      ></p>
                    </CardBody>
                    <div className="card-footer">
                      <p className="card-text">
                        <small className="text-muted">
                          {moment(News.publishDate).format("MM/DD/YYYY HH:mm")}
                        </small>
                      </p>
                    </div>
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-pagination swiper-pagination-dark"></div>
        </Row>
      </Swiper>
    </Col>
  );
};
export default withRouter(News);
