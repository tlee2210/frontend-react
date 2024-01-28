import React from 'react';
import ParticlesAuth from '../../layouts/ParticlesAuth';
import './Facilities.css';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
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
function FacilitiesPage() {
    return (
        <ParticlesAuth >
            <div style={{ paddingTop: 150, paddingBottom: 100,}}>
                {/* Banner */}
                <header className="header-container-news-Header-facilities">
                    <div className="header-content-news-Header">
                        <h1 className="header-title-news-Header mb-5">
                            Facilities
                        </h1>
                        <div className="mt-1">
                            <p className="text-news-css">At Swinburne University of Technology, we have invested more than A$250m in state-of-the-art research equipment and facilities in order to support innovative, world-first, leading-edge research. Use our leading facilities to advance your work.</p>
                        </div>
                    </div>
                </header>


                {/* Text */}
                <div className="pt-5 pb-5">
                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-8">
                            <p className="fs-5">At Swinburne, we have invested more than A$250m in state-of-the-art research equipment and facilities in order to support innovative, world-first, leading-edge research. By collaborating with us, you can access these resources to benefit your community, organisation or business. </p>
                            <p className="fs-5">Explore our flagship research buildings: the Advanced Manufacturing and Design Centre and the Advanced Technologies Centre.</p>
                        </div>
                    </div>
                </div>



                {/* Card  */}

                <div>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <Card style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)" }}>
                                <CardBody>
                                    <Row className="g-0 bg-light position-relative flex-column align-items-center">
                                        <Col className="mb-3">
                                            <img src="https://sceptrecollege.edu.pk/wp-content/uploads/2021/03/E22-scaled.jpg" className="rounded-start img-fluid" alt="..." style={{ width: "3000px", height: "200px", objectFit: "cover" }} />
                                        </Col>
                                        <Col className="p-4">
                                            <h5 className="mt-0 fs-2 text-dark">Advanced Technologies Centre</h5>
                                            <p>The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.</p>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                        <div className='col-sm-6'>
                            <Card style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)" }}>
                                <CardBody>
                                    <Row className="g-0 bg-light position-relative flex-column align-items-center">
                                        <Col className="mb-3">
                                            <img src="https://sceptrecollege.edu.pk/wp-content/uploads/2021/03/E22-scaled.jpg" className="rounded-start img-fluid" alt="..." style={{ width: "3000px", height: "200px", objectFit: "cover" }} />
                                        </Col>
                                        <Col className="p-4">
                                            <h5 className="mt-0 fs-2 text-dark">Advanced Technologies Centre</h5>
                                            <p>The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.</p>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <Card style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)" }}>
                                <CardBody>
                                    <Row className="g-0 bg-light position-relative ">
                                        <Col xs={12} md={6}> {/* 6 là 50% width cho hình ảnh */}
                                            <img src="https://sceptrecollege.edu.pk/wp-content/uploads/2021/03/E22-scaled.jpg" className="rounded-start img-fluid" alt="..." />
                                        </Col>
                                        <Col xs={12} md={6}> {/* 6 là 50% width cho nội dung văn bản */}
                                            <div className="p-4">
                                                <h5 className="mt-0 fs-2 text-dark">Advanced Technologies Centre</h5>
                                                <p>The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <Card style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)" }}>
                                <CardBody>
                                    <Row className="g-0 bg-light position-relative flex-column align-items-center">
                                        <Col className="mb-3">
                                            <img src="https://sceptrecollege.edu.pk/wp-content/uploads/2021/03/E22-scaled.jpg" className="rounded-start img-fluid" alt="..." style={{ width: "3000px", height: "200px", objectFit: "cover" }} />
                                        </Col>
                                        <Col className="p-4">
                                            <h5 className="mt-0 fs-2 text-dark">Advanced Technologies Centre</h5>
                                            <p>The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.</p>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                        <div className='col-sm-6'>
                            <Card style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)" }}>
                                <CardBody>
                                    <Row className="g-0 bg-light position-relative flex-column align-items-center">
                                        <Col className="mb-3">
                                            <img src="https://sceptrecollege.edu.pk/wp-content/uploads/2021/03/E22-scaled.jpg" className="rounded-start img-fluid" alt="..." style={{ width: "3000px", height: "200px", objectFit: "cover" }} />
                                        </Col>
                                        <Col className="p-4">
                                            <h5 className="mt-0 fs-2 text-dark">Advanced Technologies Centre</h5>
                                            <p>The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.The Advanced Technology Centre (ATC) is our front door, showcasing leading-edge research facilities and teaching spaces, as well as architectural design and sustainability.</p>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Top stories */}
                <div>
                    <Col lg={12}>
                        <Container>
                            <h5 className="fs-1 mb-2 mt-5 pb-2">Latest news</h5>
                        </Container>
                        <Swiper
                            slidesPerView={3}
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
                </div>

            </div>
        </ParticlesAuth>
    );
}

export default FacilitiesPage;