import React, { useEffect, useState } from "react";
import ParticlesAuth from "../../layouts/ParticlesAuth";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

import { Pagination } from "swiper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./NewsCss/NewsPage.css";
import {
  FaGlobe,
  FaIndustry,
  FaBookOpen,
  FaLaptop,
  FaUserGraduate,
} from "react-icons/fa";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Badge,
} from "reactstrap";
import {
  Gethomeartical,
  Gethomearticalsearch,
  SearchByCategory,
} from "../../../slices/home/news/thunk";

function NewsPage() {
  const dispatch = useDispatch();
  const selecthomeState = (state) => state;
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(Gethomeartical());
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(Gethomearticalsearch(search));
    // console.log(search);
  };
  const handleSearchByCategory = (Id) => {
    dispatch(SearchByCategory(Id));
  };
  document.title = "News";

  const homepageData = createSelector(selecthomeState, (state) => ({
    articalData: state.New.articalData,
    CategoryData: state.New.CategoryData,
    isNotificationVisible: state.Message.isNotificationVisible,
    notificationMessage: state.Message.notificationMessage,
    isErrorNotificationVisible: state.Message.isErrorNotificationVisible,
    errorMessage: state.Message.errorMessage,
  }));
  const {
    articalData,
    CategoryData,
    isNotificationVisible,
    notificationMessage,
    isErrorNotificationVisible,
    errorMessage,
  } = useSelector(homepageData);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return "";
    },
  };

  return (
    <ParticlesAuth>
      <div style={{ paddingTop: 110, paddingBottom: 50 }}>
        {/* Banner */}
        <header className="header-container-news-Header">
          <div className="header-content-news-Header">
            <h1 className="header-title-news-Header mb-5">News</h1>
            <div className="header-actions-news-Header">
              <div className="student-status-news-Header">
                <p className="text-news-css fw-bold">
<<<<<<< Updated upstream
                  2nd annual Children’s University graduation
=======
                  It's 2nd annual Children’s University graduation
>>>>>>> Stashed changes
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-news-css">
                The only university in Victoria that encourages children to
                engage in learning outside the classroom.The only university in
                Victoria that offers Children's University, which encourages
                children to engage in learning outside the classroom.
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
                Discover news from  University of Technology including
                research innovations, stories about our people and reports from
                the latest events.
              </p>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#b4b4b4", paddingBottom: 20 }}>
          <Container>
            <div className="p-5">
              <h1 className="pb-1">Find an expert for comment</h1>
              <p className="pb-5">
                Search for a  researcher or academic expert who is
                available for media comment about their field of expertise.
              </p>
              <form onSubmit={handleSearchSubmit}>
                <div className="input-group mb-4">
                  <input
                    type="search"
                    placeholder="Search here..."
                    aria-describedby="button-addon5"
                    className="form-control"
                    value={search}
                    onChange={handleSearchChange}
                  />
                  <div className="input-group-append">
                    <button
                      id="button-addon5"
                      type="submit"
                      className="btn btn-primary"
                    >
                      <i className="las la-search"> </i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Container>
        </div>
        <Container className="pb-5">
          {/* Find an expert for comment*/}

          <div className="mb-3">
            {/* News categories */}
            <div className="pt-5" style={{ paddingBottom: 60, marginLeft: 70 }}>
              <h2 className="fs-1 mb-4">News categories</h2>
              <Row md="4" className="mb-3">
                {CategoryData.map((item, index) => (
                  <Col key={index} className="mb-2">
                    <Button
                      color="dark"
                      outline
                      block
                      onClick={() => handleSearchByCategory(item.id)}
                    >
                      {item.name}
                    </Button>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
          <div className="row">
            <div>
              <Row className="flex-wrap mt-3">
                {articalData.map((news, index) => (
                  <Col sm="12" md="6" lg="4" key={index}>
                    <Link to={`/news/${news.id}/details`}>
                      <Card className="mb-4">
                        <CardImg top src={news.image} alt="News Image" />
                        <CardBody>
                          <CardTitle className="fw-bold fs-5 mb-3">
                            {news.title}
                          </CardTitle>
                          {/* Display categories as badges */}
                          <CardText className="mb-4">
                            {Array.isArray(news.categories) ? (
                              news.categories.map((category, categoryIndex) => (
                                <Badge
                                  key={categoryIndex}
                                  color="primary"
                                  className="me-1"
                                >
                                  {category.name}
                                </Badge>
                              ))
                            ) : (
                              <Badge color="primary">{news.categories}</Badge>
                            )}
                          </CardText>
                          <p
                            className="card-text"
                            dangerouslySetInnerHTML={{
                              __html: news.content,
                            }}
                          ></p>
                          <Button className="mb-3" color="info" outline>
                            Read more
                            <i
                              className="las la-long-arrow-alt-right"
                              style={{ paddingLeft: 15 }}
                            ></i>
                          </Button>
                          {/* Format the date to a readable format */}
                          <CardText className="">
                            Date:{" "}
                            {new Date(news.publishDate).toLocaleDateString()}
                          </CardText>
                        </CardBody>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Container>
      </div>

      {/* Want to be kept informed about all things ? */}
      <div className="Socials-news-page" style={{ paddingBottom: 0 }}>
        <h4 className="fs-2">
          Want to be kept informed about all things ?
        </h4>
        <div className="features-news-page row">
          <div className="col-md-2 feature-news-page">
            <FaGlobe className="icon-news-page " />
            <p className="feature-text-news-page">
              We are an internationally recognised university
            </p>
            <a href="#" style={{ color: "red" }}>
              Meet our media team
            </a>
          </div>
          <div className="col-md-2 feature-news-page">
            <FaIndustry className="icon-news-page" />
            <p className="feature-text-news-page">
              Guaranteed real industry experience in all bachelor degrees
            </p>
            <a href="#" style={{ color: "red" }}>
              Meet our media team
            </a>
          </div>
          <div className="col-md-2 feature-news-page">
            <FaBookOpen className="icon-news-page" />
            <p className="feature-text-news-page">
              High-quality research and teaching
            </p>
            <a href="#" style={{ color: "red" }}>
              Meet our media team
            </a>
          </div>
          <div className="col-md-2 feature-news-page">
            <FaLaptop className="icon-news-page" />
            <p className="feature-text-news-page">
              Cutting-edge facilities that enhance learning
            </p>
            <a href="#" style={{ color: "red" }}>
              Meet our media team
            </a>
          </div>
          <div className="col-md-2 feature-news-page">
            <FaUserGraduate className="icon-news-page" />
            <p className="feature-text-news-page">
              Flexible study options available
            </p>
            <a href="#" style={{ color: "red" }}>
              Meet our media team
            </a>
          </div>
        </div>
      </div>
    </ParticlesAuth>
  );
}

export default NewsPage;
