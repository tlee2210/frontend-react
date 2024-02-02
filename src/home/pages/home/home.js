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
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import { Pagination, Autoplay } from "swiper";

import EducationProgram from "./EducationProgram";
import News from "./News";
import JoinUs from "./JoinUs";
import ParticlesHome from "../../layouts/ParticlesAuth";
import img3 from "../../../assets/images/small/2.jpg";
import img2 from "../../../assets/images/small/3.png";
import img1 from "../../../assets/images/small/1.jpg";
import img4 from "../../../assets/images/small/4.png";
import { createSelector } from "reselect";
import { clearNotificationMessage } from "../../../slices/message/reducer";
import { message } from "antd";

import { Gethome } from "../../../slices/home/home/thunk";

//redux
import { useSelector, useDispatch } from "react-redux";

import withRouter from "../../../Components/Common/withRouter";

const home = (props) => {
  const dispatch = useDispatch();
  const selecthomeState = (state) => state;
  const homepageData = createSelector(selecthomeState, (state) => ({
    SelectOption: state.Home.SelectOption,
    facultyData: state.Home.facultyData,
    articleData: state.Home.articleData,
    isNotificationVisible: state.Message.isNotificationVisible,
    notificationMessage: state.Message.notificationMessage,
    isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
    errorMessage: state.Message.errorMessage,
  }));
  const {
    SelectOption,
    facultyData,
    articleData,
    isNotificationVisible,
    notificationMessage,
    isErrorNotificationVisible,
    errorMessage,
  } = useSelector(homepageData);

  useEffect(() => {
    dispatch(Gethome());
  }, []);

  const imageStyle = {
    height: "500px",
    width: "100%",
    objectFit: "cover",
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span className="' + className + '">' + (index + 1) + "</span>";
    },
  };
  useEffect(() => {
    if (isNotificationVisible && notificationMessage) {
      message.success(notificationMessage);
      dispatch(clearNotificationMessage());
    }
  }, [isNotificationVisible, notificationMessage, dispatch]);

  useEffect(() => {
    if (isErrorNotificationVisible && errorMessage) {
      message.error(errorMessage);
      dispatch(clearNotificationMessage());
    }
  }, [isErrorNotificationVisible, errorMessage]);

  document.title = "home";
  return (
    <React.Fragment>
      <ParticlesHome>
        <div className="page-content">
          <Container fluid>
            <Col xl={12} sm={12}>
              <Swiper
                pagination={{ clickable: true, dynamicBullets: true }}
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="mySwiper swiper pagination-dynamic-swiper rounded"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <img src={img3} alt="" className="img-fluid h-100 w-100" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={img2} alt="" className="img-fluid h-100 w-100" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={img1} alt="" className="img-fluid h-100 w-100" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={img4} alt="" className="img-fluid h-100 w-100" />
                  </SwiperSlide>
                </div>
              </Swiper>

              <Card>
                <CardBody>
                  {/* Education Program */}
                  <EducationProgram data={facultyData} />
                  {/* JoinUs */}
                  <JoinUs data={SelectOption} />
                  {/* News */}
                  <News data={articleData} />
                </CardBody>
              </Card>
            </Col>
          </Container>
        </div>
      </ParticlesHome>
    </React.Fragment>
  );
};

export default withRouter(home);
