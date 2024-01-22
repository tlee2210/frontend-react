import React from "react";
import ParticlesAuth from '../../layouts/ParticlesAuth';
import { Container, Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Mousewheel } from "swiper";

import img3 from "../../../assets/images/logo-dark.png"
import img4 from "../../../assets/images/logo-dark.png"
import img5 from "../../../assets/images/logo-dark.png"
import img6 from "../../../assets/images/logo-dark.png"
import img7 from "../../../assets/images/logo-dark.png"
import img8 from "../../../assets/images/logo-dark.png"
import img9 from "../../../assets/images/logo-dark.png"
function NewDetailsPage() {
    return (
        <ParticlesAuth>
            {/* Header */}
            <div style={{ paddingTop: 120, paddingBottom: 100 }}>
                {/* //Header */}
                <div style={{ backgroundColor: '#242426', paddingBottom: 20, height: 381 }}>
                    <Container style={{ marginLeft: 278, maxWidth: 850 }}>
                        <div className="pb-5 pt-5">
                            <span style={{ color: 'white' }}>Thursday 11 January 2024   |</span>  <span style={{ color: 'white' }}>#Astronomy, #Science</span>
                        </div>
                        <div className="">
                            <h3 className="pb-1 text-white">Dark energy discovery a decade in the making: new supernova insights offer clues to the expansion of the universe</h3>
                        </div>
                        <img style={{
                            paddingTop: 15,
                            maxWidth: 800
                        }} src="https://www.swinburne.edu.au/content/dam/media/engagement/supernova.jpg/jcr:content/renditions/cq5dam.web.1280.720.jpeg"></img>
                        <p>An example of a supernova discovered by the Dark Energy Survey within the field covered by one of the individual detectors in the Dark Energy Camera. The supernova exploded in a spiral galaxy with redshift = 0.04528, about 0.6 billion years light years away. This is one of the nearest supernovae in the sample. In the inset, the supernova is a small dot at the upper-right of the bright galaxy center. Image: DES collaboration</p>
                        <div className="mt-5">
                            <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-secondary rounded mb-0">
                                <p className="text-body mb-2 fw-bold fs-3">In summary</p>
                                {/* <!-- Unstyle List --> */}
                                <ul className="list-unstyled">
                                    <ul>
                                        <li>Researchers at Swinburne have contributed to a landmark study that complicates our understanding of the universe.</li>
                                        <li>The Dark Energy Survey (DES) represents the work of over 400 astrophysicists, astronomers and cosmologists from over 25 institutions. </li>
                                        <li>They found that the density of dark energy in the universe could have varied over time, according to a new complex theory.</li>
                                    </ul>
                                </ul>
                            </blockquote>
                        </div>
                    </Container>
                </div>
                <Container style={{ marginLeft: 278, maxWidth: 850, marginTop: 650 }}>
                    <div className="contain-News-Details-Page mt-5">
                        <div className="text-News-Details-Page fs-6">
                            <p>Researchers at Swinburne University of Technology have contributed to a landmark study that complicates our understanding of the universe.</p>
                            <p>The Dark Energy Survey (DES) represents the work of over 400 astrophysicists, astronomers and cosmologists from over 25 institutions. </p>
                            <p>DES scientists took data for 758 nights across six years to understand the nature of dark energy and measure the expansion rate of the universe. They found that the density of dark energy in the universe could have varied over time, according to a new complex theory. </p>
                            <p>Dr Anais Möller from Swinburne University of Technology’s Centre for Astrophysics and Supercomputing was part of the team working on this revolutionary analysis, alongside Swinburne’s Mitchell Dixon, Professor Karl Glazebrook and Emeritus Professor Jeremy Mould.</p>
                            <p>"These results, a collaboration between hundreds of scientists around the world, are a testament to power of cooperation and hard work to make major scientific progress,” says Dr Möller.   </p>
                            <p>“I am very proud of the work we have achieved as a team; it is an incredibly thorough analysis which reduces our uncertainties to new levels and shows the power of the Dark Energy Survey.”   </p>
                            <p>“We not only used state-of-the-art data, but also developed pioneering methods to extract the maximum information from the Supernova Survey. I am particularly proud of this, as I developed the method to select the supernovae used for the survey with machine learning.”   </p>
                            <p>In 1998, astrophysicists discovered that the universe is expanding at an accelerating rate, attributed to a mysterious entity called dark energy that makes up about 70 per cent of our universe. At the time, astrophysicists agreed that the universe’s expansion should be slowing down because of gravity.    </p>
                            <p>This revolutionary discovery, which astrophysicists achieved with observations of specific kinds of exploding stars, called type Ia (read “type one-A”) supernovae, was recognized with the Nobel Prize in Physics in 2011.   </p>
                            <p>Now, 25 years after the initial discovery, the Dark Energy Survey is a culmination of a decade’s worth of research from scientists worldwide who analysed more than 1,500 supernovas using the strongest constraints on the expansion of the universe ever obtained. This is largest number of type Ia supernovae ever used for constraining dark energy from a single survey probing large cosmic times.   </p>
                            <p>The outcome results are consistent with the now-standard cosmological model of a universe with an accelerated expansion. Yet, the findings are not definitive enough to rule out a possibly more complex model.   </p>
                            <p>“There is still so much to discover about dark energy, but this analysis can be considered as the gold standard in supernova cosmology for quite some time,” says Dr Moller.   </p>
                            <p>“This analysis also brings innovative methods that will be used in the next generation of surveys, so we are taking a leap in the way we do science. I’m excited to uncover more about the mystery that is dark energy in the upcoming decade.”   </p>
                        </div>
                    </div>
                    <div className="contain-News-Details-Page mt-4">
                        <h1 className="pb-2">Pioneering a new approach</h1>
                        <div className="text-News-Details-Page fs-6">
                            <p>The new study pioneered a new approach to use photometry — with an unprecedented four filters — to find the supernovae, classify them and measure their light curves. Dr. Möller created the method to select these type Ia supernovae using modern machine learning. </p>
                            <p>“It is very exciting times to see this innovative technology to harness the power of large astronomical surveys”, she says. “Not only we are able to obtain more type Ia supernovae than before, but we tested these methods thoroughly as we want to do more precision measurements on the fundamental physics of our universe.” </p>
                            <p>This technique requires data from type Ia supernovae, which occur when an extremely dense dead star, known as a white dwarf, reaches a critical mass and explodes. Since the critical mass is nearly the same for all white dwarfs, all type Ia supernovae have approximately the same actual brightness and any remaining variations can be calibrated out. So, when astrophysicists compare the apparent brightnesses of two type Ia supernovae as seen from Earth, they can determine their relative distances from us.</p>
                            <p>Astrophysicists trace out the history of cosmic expansion with large samples of supernovae spanning a wide range of distances. For each supernova, they combine its distance with a measurement of its redshift — how quickly it is moving away from Earth due to the expansion of the universe. They can use that history to determine whether the dark energy density has remained constant or changed over time.</p>
                            <p>The results found w = –0.80 +/- 0.18 using supernovae alone. Combined with complementary data from the European Space Agency’s Planck telescope, w reaches –1 within the error bars. To come to a definitive conclusion, scientists will need more data using a new survey.</p>
                            <p>DES researchers used advanced machine-learning techniques to aid in supernova classification. Among the data from about two million distant observed galaxies, DES found several thousand supernovae. Scientists ultimately used 1,499 type Ia supernovae with high-quality data, making it the largest, deepest supernova sample from a single telescope ever compiled. In 1998, the Nobel-winning astronomers used just 52 supernovae to determine that the universe is expanding at an accelerating rate. </p>
                        </div>
                    </div>
                    <div className="pt-4 pb-5" style={{ width: 400 }}>
                        <Card className="border card-border-danger ">
                            <CardHeader>
                                <h6 className="card-title fs-3 mb-0">Media Enquiries</h6>
                            </CardHeader>
                            <CardBody>
                                <p className="card-text  mt-3" style={{ paddingLeft: 30 }}><a href="#"><i className="las la-phone-volume fs-4 text-danger" style={{ paddingRight: 25 }} ></i><ins className="fs-5">0123456789</ins></a></p>
                                <p className="card-text  mt-3" style={{ paddingLeft: 30 }}><a href="#"><i className="mdi mdi-email-outline fs-4 text-danger" style={{ paddingRight: 25 }} ></i><ins className="fs-5">tlee@gmail.com</ins></a></p>
                                <div className="text-end">
                                    <Link to="#" className="link-danger fw-medium">Contact Us Now <i className="ri-arrow-right-line align-middle"></i></Link>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </Container>


                {/* Related articles */}
                <div>
                    <Card className="card-height-100">
                        <div className="card-header align-items-center d-flex">
                            <h1 className="card-title mb-0 flex-grow-1 fs-1">Related articles</h1>
                            <div className="flex-shrink-0">
                                <Link className="text-muted" to="#">
                                    View All
                                </Link>
                            </div>
                        </div>
                        <CardBody>
                            <Swiper
                                direction={"horizontal"}
                                slidesPerView={1.5}
                                spaceBetween={250}
                                mousewheel={true}
                                loop={false}
                                modules={[ Mousewheel]}
                                className="mySwiper vertical-swiper"
                            >
                                <SwiperSlide style={{ maxWidth: "200px" }}>
                                    <div>
                                        <div className="bg-info-subtle rounded">
                                            <img src="https://themes.themesbrand.com/velzon/react/default/static/media/img-3.50996c6b5349bce6789b.png" alt="" style={{ maxHeight: "210px", maxWidth: "auto" }} />
                                        </div>
                                        <div className="pt-3">
                                            <h5 className="text-secondary">$99.94</h5>
                                            <Link to="#">
                                                <h6 className="fs-15 lh-base text-truncate mb-0">350 ml Glass Grocery Container</h6>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ maxWidth: "200px" }}>
                                    <div>
                                        <div className="bg-success-subtle rounded">
                                            <img src="https://themes.themesbrand.com/velzon/react/default/static/media/img-3.50996c6b5349bce6789b.png" alt="" style={{ maxHeight: "210px", maxWidth: "auto" }} />
                                        </div>
                                        <div className="pt-3">
                                            <h5 className="text-secondary">$99.94</h5>
                                            <Link to="#">
                                                <h6 className="fs-15 lh-base text-truncate mb-0">Fabric Dual Tone Living Room Chair</h6>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ maxWidth: "200px" }}>
                                    <div>
                                        <div className="bg-warning-subtle rounded">
                                            <img src="https://themes.themesbrand.com/velzon/react/default/static/media/img-3.50996c6b5349bce6789b.png" alt="" style={{ maxHeight: "210px", maxWidth: "auto" }} />
                                        </div>
                                        <div className="pt-3">
                                            <h5 className="text-secondary">$99.94</h5>
                                            <Link to="#">
                                                <h6 className="fs-15 lh-base text-truncate mb-0">Crux Motorsports Helmet</h6>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ maxWidth: "200px" }}>
                                    <div>
                                        <div className="bg-secondary-subtle rounded">
                                            <img src="https://themes.themesbrand.com/velzon/react/default/static/media/img-3.50996c6b5349bce6789b.png" alt="" style={{ maxHeight: "210px", maxWidth: "auto" }} />
                                        </div>
                                        <div className="pt-3">
                                            <h5 className="text-secondary">$99.94</h5>
                                            <Link to="#">
                                                <h6 className="fs-15 lh-base text-truncate mb-0">Half Sleeve T-Shirts (Blue)</h6>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </CardBody>
                    </Card>
                </div>

            </div>
        </ParticlesAuth>

    );

}
export default NewDetailsPage;