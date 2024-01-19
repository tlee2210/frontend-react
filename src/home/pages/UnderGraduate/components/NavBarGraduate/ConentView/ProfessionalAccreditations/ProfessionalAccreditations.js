import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,

} from "reactstrap";

import withRouter from "../../../../../../../Components/Common/withRouter";
import { Link } from "react-router-dom";

import img8 from '../../../../../../../assets/images/small/2.jpg';
import img9 from "../../../../../../../assets/images/small/4.png"


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import { Pagination } from "swiper";
import { NonceProvider } from "react-select";

const ProfessionalAccreditations = (props) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span className="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div style={{
      backgroundColor:'#afafaf',
      padding: 43,
      marginTop: -49
    
    }}>
      <h5 className="fs-3 mb-2 mt-5" style={{
        paddingBottom:40,
        paddingTop:1,
      }}>Professional accreditations</h5>
      <Container>
      <Col lg={12}>
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

                <a className="Card-rounded-edit" style={{
                  paddingTop: 35,
                  background: 'none'
                }}>
                  <img className="rounded-circle avatar-xl" alt="200x200" src={img8}  />
                  <CardBody>
                    <h5 className="card-title">
                      1
                    </h5>
                  </CardBody>
                </a>

              </SwiperSlide>
              <SwiperSlide>

                <a className="Card-rounded-edit" style={{
                  paddingTop: 35,
                  background: 'none'
                }}>
                  <img className="rounded-circle avatar-xl" alt="200x200" src={img8}  />
                  <CardBody>
                    <h5 className="card-title">
                     2
                    </h5>
                  </CardBody>
                </a>

              </SwiperSlide>
              <SwiperSlide>

                <a className="Card-rounded-edit" style={{
                  paddingTop: 35,
                  background: 'none'
                }}>
                  <img className="rounded-circle avatar-xl" alt="200x200" src={img8}  />
                  <CardBody>
                    <h5 className="card-title">
                      3
                    </h5>
                  </CardBody>
                </a>

              </SwiperSlide>
            </div>
            <div className="swiper-pagination swiper-pagination-dark"></div>
          </Row>
        </Swiper>
      </Col>

      </Container>
    </div>
  );
};
export default withRouter(ProfessionalAccreditations);