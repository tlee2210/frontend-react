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

//redux
import { useSelector, useDispatch } from "react-redux";

import withRouter from "../../../Components/Common/withRouter";

const home = (props) => {
  const imageStyle = {
    height: "500px", // 100% of the viewport height
    width: "100%", // 100% of the parent container width
    objectFit: "cover", // Make the image cover the entire container
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span className="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const dispatch = useDispatch();
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
                  <EducationProgram />
                  {/* JoinUs */}
                  <JoinUs />
                  {/* News */}
                  <News />
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
