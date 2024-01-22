import React, { useEffect, useState } from "react";
import ParticlesAuth from '../../layouts/ParticlesAuth';
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";

import img8 from "../../../assets/images/small/2.jpg";
import img9 from "../../../assets/images/small/3.png";

import { Pagination } from "swiper";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './NewsCss/NewsPage.css'
import { FaGlobe, FaIndustry, FaBookOpen, FaLaptop, FaUserGraduate } from 'react-icons/fa';
import { Button, Container, Dropdown, DropdownToggle, Row, DropdownMenu, DropdownItem, ButtonDropdown, Col, Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";
const mockNewsData = [
    { id: 1, title: 'News Item 1', imgage: 'https://vcdn-vnexpress.vnecdn.net/2018/04/05/Ngan-ha-7187-1522903770.jpg', category: 'Sports', date: '2024-01-20', relevance: 5 },
    { id: 2, title: 'News Item 2', imgage: 'https://vcdn-vnexpress.vnecdn.net/2018/04/05/Ngan-ha-7187-1522903770.jpg', category: 'Technology', date: '2024-01-19', relevance: 3 },
    { id: 3, title: 'News Item 3', imgage: 'https://vcdn-vnexpress.vnecdn.net/2018/04/05/Ngan-ha-7187-1522903770.jpg', category: 'Entertainment', date: '2024-01-18', relevance: 4 },
    { id: 4, title: 'News Item 4', imgage: 'https://vcdn-vnexpress.vnecdn.net/2018/04/05/Ngan-ha-7187-1522903770.jpg', category: 'Politics', date: '2024-01-22', relevance: 2 },
    { id: 5, title: 'News Item 5', imgage: 'https://vcdn-vnexpress.vnecdn.net/2018/04/05/Ngan-ha-7187-1522903770.jpg', category: 'Health', date: '2024-01-21', relevance: 5 },
    { id: 6, title: 'News Item 6', imgage: 'https://vcdn-vnexpress.vnecdn.net/2018/04/05/Ngan-ha-7187-1522903770.jpg', category: 'Economy', date: '2024-01-18', relevance: 3 },
    { id: 7, title: 'News Item 7', imgage: 'https://vcdn-vnexpress.vnecdn.net/2018/04/05/Ngan-ha-7187-1522903770.jpg', category: 'Science', date: '2024-01-17', relevance: 4 },
    { id: 8, title: 'News Item 8', imgage: 'https://vcdn-vnexpress.vnecdn.net/2018/04/05/Ngan-ha-7187-1522903770.jpg', category: 'Technology', date: '2024-01-16', relevance: 1 },
    { id: 9, title: 'News Item 9', imgage: 'https://vcdn-vnexpress.vnecdn.net/2018/04/05/Ngan-ha-7187-1522903770.jpg', category: 'Sports', date: '2024-01-15', relevance: 2 },
    { id: 10, title: 'News Item 10', imgage: 'https://vcdn-vnexpress.vnecdn.net/2018/04/05/Ngan-ha-7187-1522903770.jpg', category: 'Entertainment', date: '2024-01 - 14', relevance: 5 }
];
const imageUrl = 'https://vcdn-vnexpress.vnecdn.net/2018/04/05/Ngan-ha-7187-1522903770.jpg';
const mockCategories = ['Sports', 'Technology', 'Entertainment', 'Politics'];
const NewsCard = ({ news }) => (
    <Col sm="12" md="6" lg="4">
        <Card className="mb-4">
            <CardImg top src={news.imgage} alt="News Image" />
            <CardBody>
                <CardTitle className="fw-bold fs-2 mb-3">{news.title}</CardTitle>
                <CardText className="mb-4">Category: {news.category}</CardText>
                <Button className="mb-3" color="info" outline>Read more<i className="las la-long-arrow-alt-right" style={{ paddingLeft: 15 }}></i></Button>
                <CardText className="">Date: {news.date}</CardText>
            </CardBody>
        </Card>
    </Col>
);

function NewsPage() {


    const [searchTerm, setSearchTerm] = useState('');
    const [isCategoryTableVisible, setIsCategoryTableVisible] = useState(false);
    const [tempCategories, setTempCategories] = useState(new Set());
    const [selectedCategories, setSelectedCategories] = useState(new Set());
    const [filteredNews, setFilteredNews] = useState(mockNewsData);
    const [selectedSort, setSelectedSort] = useState('date'); // Default sort by date
    const [sortOrder, setSortOrder] = useState('asc'); // Default ascending order
    const [dropdownOpenSort, setDropdownOpenSort] = useState(false);
    //News

    // Function to show/hide the category table
    const toggleCategoryTable = () => {
        setIsCategoryTableVisible(!isCategoryTableVisible);
    };

    // Function to handle applying the selected categories for filtering
    const applyCategoryFilter = () => {
        setSelectedCategories(tempCategories);
        setIsCategoryTableVisible(false); // Close the category table
    };
    const handleCategoryChange = (category) => {
        const newCategories = new Set(tempCategories); // Make a copy of the current set
        if (newCategories.has(category)) {
            newCategories.delete(category); // Remove the category if it exists
        } else {
            newCategories.add(category); // Add the category if it doesn't exist
        }
        setTempCategories(newCategories); // Update the state with the new set
    };
    useEffect(() => {
        if (tempCategories.size === 0) {
            // If no categories are selected, show all news
            setFilteredNews(mockNewsData);
        } else {
            // Use tempCategories to filter news data
            const filteredNewsData = mockNewsData.filter((news) =>
                tempCategories.has(news.category)
            );
            // Set the filtered news data to the state
            setFilteredNews(filteredNewsData);
        }
    }, [tempCategories]);

    const handleSortChange = (sortBy) => {
        setSelectedSort(sortBy);
        const sortedNews = [...filteredNews]; // Create a copy of filteredNews
        if (sortBy === 'date') {
            sortedNews.sort((a, b) => {
                if (sortOrder === 'asc') {
                    return new Date(a.date) - new Date(b.date);
                } else {
                    return new Date(b.date) - new Date(a.date);
                }
            });
        } else if (sortBy === 'relevance') {
            sortedNews.sort((a, b) => {
                if (sortOrder === 'asc') {
                    return a.relevance - b.relevance;
                } else {
                    return b.relevance - a.relevance;
                }
            });
        }
        setFilteredNews(sortedNews);
    };
    const toggleDropdownSort = () => {
        setDropdownOpenSort(!dropdownOpenSort);
    };

    // Searrch
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        // You can implement your search logic here using the searchTerm state
        alert(`Searching for: ${searchTerm}`);
    };
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
                        <h1 className="header-title-news-Header mb-5">
                            News
                        </h1>
                        <div className="header-actions-news-Header">
                            <div className="student-status-news-Header">
                                <p className="text-news-css fw-bold">Swinburne's 2nd annual Children’s University graduation</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-news-css">The only university in Victoria that encourages children to engage in learning outside the classroom.The only university in Victoria that offers Children's University, which encourages children to engage in learning outside the classroom.</p>
                        </div>
                        <Button className="mt-3" size="lg" color="light">Watch the Video</Button>
                    </div>
                </header>


                {/* Text */}
                <div className="pt-5 pb-5">
                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-8">
                            <p className="fs-5">Discover news from Swinburne University of Technology including research innovations, stories about our people and reports from the latest events.</p>
                        </div>
                    </div>
                </div>


                {/* News Card and Filter */}
                <Container className="pb-5">
                    <div className="mb-5">
                        <h1>Just in</h1>
                    </div>
                    {/* Dropdown for category selection */}
                    <div className="row">
                        <div className="col-sm-10">
                            {/* Category */}
                            <Dropdown isOpen={isCategoryTableVisible} toggle={toggleCategoryTable}>
                                <DropdownToggle caret>
                                    Categories
                                </DropdownToggle>
                                <DropdownMenu>
                                    {isCategoryTableVisible && (
                                        <div className="category-list">
                                            {mockCategories.map((category) => (
                                                <DropdownItem key={category} toggle={false}>
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            checked={tempCategories.has(category)}
                                                            onChange={() => handleCategoryChange(category)}
                                                        />{' '}
                                                        {category}
                                                    </label>
                                                </DropdownItem>
                                            ))}
                                            <DropdownItem divider />
                                            <DropdownItem onClick={applyCategoryFilter}>
                                                SAVE
                                            </DropdownItem>
                                        </div>
                                    )}
                                </DropdownMenu>
                            </Dropdown>
                            <span className="selected-categories mt-5 fw-bold" style={{ color: 'blue' }}>
                                {selectedCategories.size > 0
                                    ? `Filter Categories:    #${[...selectedCategories].join(', ')}`
                                    : ''}
                            </span>
                        </div>

                        {/* Sort */}
                        <div className="col-sm-2">
                            <ButtonDropdown isOpen={dropdownOpenSort} toggle={toggleDropdownSort}>
                                <DropdownToggle caret color="secondary" id="sortButton">
                                    Sort
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => handleSortChange('relevance')}>
                                        Sort by Relevance
                                    </DropdownItem>
                                    <DropdownItem onClick={() => handleSortChange('date')}>
                                        Sort by Date
                                    </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </div>
                        {/* Card */}
                        <div>
                            <Row className="flex-wrap mt-3">
                                {filteredNews.map((news) => (
                                    <NewsCard key={news.id} news={news} />
                                ))}
                            </Row>
                        </div>
                    </div>
                </Container>




                {/* Top stories */}
                <Col lg={12}>
                   <Container>
                   <h5 className="fs-1 mb-2 mt-5 pb-2">Featured news</h5>
                   </Container>
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
                




                {/* Achievements and awards*/}
                <div className="row">
                    <div className="image-News-container-text border-shadow-news-page">
                        <div className="image-News-container">
                            <img className="img-container" src={imageUrl} alt="Image" />
                        </div>
                        <div className="text-News-container">
                            <h1>Achievements and awards</h1>
                            <p>Celebrating our award-winning community. </p>
                            <p style={{ paddingBottom: 70 }}>Swinburne University of Technology community members are recognised for excellence in their fields, reflecting the depth and breadth of knowledge, experience and service. </p>
                            <Button color="danger" outline>Red More</Button>
                        </div>
                    </div>
                </div>
            </div>



            {/* Find an expert for comment*/}
            <div style={{ backgroundColor: '#b4b4b4', paddingBottom: 20 }}>
                <Container>
                    <div className="p-5">
                        <h1 className="pb-1">Find an expert for comment</h1>
                        <p className="pb-5">Search for a Swinburne researcher or academic expert who is available for media comment about their field of expertise.</p>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSearchClick}>Search</button>
                    </div>
                </Container>
            </div>





            {/* News categories */}
            <div className="pt-5" style={{ paddingBottom: 60, marginLeft: 70 }}>
                <h2 className='fs-1 mb-4' >News categories</h2>
                <Row className="mb-3">
                    <Col><Button color='dark' outline block>Applied Innovation</Button></Col>
                    <Col><Button color='dark' outline block>Arts, Humanities and Social Sciences</Button></Col>
                    <Col><Button color='dark' outline block>Aviation</Button></Col>
                </Row>
                <Row className="mb-3">
                    <Col><Button color='dark' outline block>Built Environment and Architecture</Button></Col>
                    <Col><Button color='dark' outline block>Business</Button></Col>
                    <Col><Button color='dark' outline block>Design</Button></Col>
                </Row>
            </div>


            {/* Want to be kept informed about all things Swinburne? */}
            <div className="Socials-news-page" style={{ paddingBottom: 0 }}>
                <h4 className='fs-2'>Want to be kept informed about all things Swinburne?</h4>
                <div className="features-news-page row">
                    <div className="col-md-2 feature-news-page">
                        <FaGlobe className="icon-news-page " />
                        <p className='feature-text-news-page'>We are an internationally recognised university</p>
                        <a href="#" style={{ color: 'red' }}>Meet our media team</a>
                    </div>
                    <div className="col-md-2 feature-news-page">
                        <FaIndustry className="icon-news-page" />
                        <p className='feature-text-news-page'>Guaranteed real industry experience in all bachelor degrees</p>
                        <a href="#" style={{ color: 'red' }}>Meet our media team</a>
                    </div>
                    <div className="col-md-2 feature-news-page">
                        <FaBookOpen className="icon-news-page" />
                        <p className='feature-text-news-page'>High-quality research and teaching</p>
                        <a href="#" style={{ color: 'red' }}>Meet our media team</a>
                    </div>
                    <div className="col-md-2 feature-news-page">
                        <FaLaptop className="icon-news-page" />
                        <p className='feature-text-news-page'>Cutting-edge facilities that enhance learning</p>
                        <a href="#" style={{ color: 'red' }}>Meet our media team</a>
                    </div>
                    <div className="col-md-2 feature-news-page">
                        <FaUserGraduate className="icon-news-page" />
                        <p className='feature-text-news-page'>Flexible study options available</p>
                        <a href="#" style={{ color: 'red' }}>Meet our media team</a>
                    </div>
                </div>
            </div>
        </ParticlesAuth>
    );
}

export default NewsPage;