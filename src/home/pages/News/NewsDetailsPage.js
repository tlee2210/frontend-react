import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ParticlesAuth from "../../layouts/ParticlesAuth";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Col,
  CardText,
  Badge,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import withRouter from "../../../Components/Common/withRouter";
import { createSelector } from "reselect";
import moment from "moment";

import "swiper/css/effect-flip";

import img8 from "../../../assets/images/small/2.jpg";
import img9 from "../../../assets/images/small/3.png";

import { GetDetailArtical } from "../../../slices/home/news/thunk";

const EducationProgram = (props) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span className="' + className + '">' + (index + 1) + "</span>";
    },
  };
};
function NewDetailsPage(props) {
  const dispatch = useDispatch();
  const selecthomeState = (state) => state;

  const homepageData = createSelector(selecthomeState, (state) => ({
    articalData: state.New.articalData,
    item: state.New.item,
    isNotificationVisible: state.Message.isNotificationVisible,
    notificationMessage: state.Message.notificationMessage,
    isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
    errorMessage: state.Message.errorMessage,
  }));

  const {
    articalData,
    item,
    isNotificationVisible,
    notificationMessage,
    isErrorNotificationVisible,
    errorMessage,
  } = useSelector(homepageData);

  const id = props.router.params.id;
  document.title = item.title;

  useEffect(() => {
    dispatch(GetDetailArtical(id));
    // console.log(id);
  }, [id]);
  return (
    <ParticlesAuth>
      {/* Header */}
      <div style={{ paddingTop: 120, paddingBottom: 100 }}>
        {/* //Header */}
        <div style={{ backgroundColor: "#242426", height: 381 }}>
          <Container style={{ marginLeft: 278, maxWidth: 850 }}>
            <div className="pb-5 pt-5">
              <span style={{ color: "white" }}>
                {moment(item.publishDate).format("MM/DD/YYYY HH:mm")} |
              </span>{" "}
              {item?.categories?.map((Category, index) => (
                <span style={{ color: "white" }} key={index}>
                  #{Category.name}{" "}
                </span>
              ))}
            </div>
            <div className="">
              <h3 className="pb-1 text-white">{item.title}</h3>
            </div>
            <img
              style={{
                paddingTop: 15,
                maxWidth: 800,
              }}
              src={item.image}
            ></img>
          </Container>
        </div>
        <Container style={{ marginLeft: 278, maxWidth: 850, marginTop: 370 }}>
          <div className="contain-News-Details-Page mt-5">
            <div className="text-News-Details-Page fs-6">
              <p
                className="card-text"
                dangerouslySetInnerHTML={{
                  __html: item.content,
                }}
              ></p>
            </div>
          </div>
        </Container>

        {/* Related articles */}
        <Container>
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
                  {/* {articalData.map((new, index) => ({)} */}
                  {articalData.map((News, index) => (
                    <SwiperSlide key={index}>
                      <Card>
                        <img
                          src={News.image}
                          className="card-img-top"
                          alt={News.title}
                        />
                        <CardBody>
                          <h5 className="card-title">{News.title}</h5>
                          <CardText className="mb-4">
                            {Array.isArray(News.categories) ? (
                              News.categories.map((category, categoryIndex) => (
                                <Badge
                                  key={categoryIndex}
                                  color="primary"
                                  className="me-1"
                                >
                                  {category.name}
                                </Badge>
                              ))
                            ) : (
                              <Badge color="primary">{News.categories}</Badge>
                            )}
                          </CardText>
                          <p
                            className="card-text"
                            dangerouslySetInnerHTML={{
                              __html: News.content,
                            }}
                          ></p>
                          <Link
                            to={`/news/${News.id}/details`}
                            className="btn btn-primary stretched-link"
                          >
                            Go somewhere
                          </Link>
                        </CardBody>
                      </Card>
                    </SwiperSlide>
                  ))}
                </div>
                <div className="swiper-pagination swiper-pagination-dark"></div>
              </Row>
            </Swiper>
          </Col>
        </Container>
      </div>
    </ParticlesAuth>
  );
}
export default withRouter(NewDetailsPage);
