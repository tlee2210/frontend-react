import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";  
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
const mapStyles = {
    width: '100%',
    height: '400px',  // Set a fixed height for better appearance
};  

const ContactPage = ( props) => {
    return (
        <div className="contact-page-contact-us">
            <div className="contact-header-contact-us">
                <h1>Welcome To University</h1>
                <p>Description</p>
            </div>
            <div className="contact-content--contact-us ">
                <div className="row">
                    <div className="col-md-4">
                        <div className="contact-methods">
                            <div className='text-edit--contact-us'>
                                <h5><i className='mdi mdi-email'></i>  Email Us:</h5>
                                <p>quangdaivi23030@gmail.com</p>
                            </div>
                            <div className='text-edit--contact-us'>
                                <h5><i className='mdi mdi-map-marker'></i>Address:</h5>
                                <p>191 Tay Hoa</p>
                            </div>
                            <div className='text-edit--contact-us'>
                                <h5><i className='mdi mdi-phone-classic'></i>  Phone Number:</h5>
                                <p>10123456789</p>
                            </div>
                            <Link to="/about-us/details" className="button-showinformation">
                                <i className='mdi mdi-information-outline'></i>
                                Show more informations
                                <i className='mdi mdi-arrow-right'></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="youtube-video">
                            <iframe width="600" height="315" src="https://www.youtube.com/embed/LlCwHnp3kL4">
                            </iframe>
                        </div>
                    </div>
                    <Card>
                        <CardHeader>
                            <h4 className="card-title mb-0">Google Maps with Markers</h4>
                        </CardHeader>
                        <CardBody>
                            <div id="gmaps-markers" className="gmaps" style={{ position: "relative", marginBottom: '20px' }}>
                                <Map
                                    google={props.google}
                                    zoom={8}
                                    style={mapStyles}
                                    initialCenter={{ lat: 34.134117, lng: -118.321495 }}
                                >
                                    {/* Add Markers for Different Locations */}
                                    <Marker position={{ lat: 48.00, lng: -122.00 }} />
                                    <Marker position={{ lat: 34.134117, lng: -118.321495 }} />
                                    <Marker position={{ lat: 32.995049, lng: -111.536324 }} />
                                    <Marker position={{ lat: 37.383064, lng: -109.071236 }} />
                                    <Marker position={{ lat: 39.877586, lng: -79.640617 }} />
                                </Map>
                            </div>
                            <p>
                                This is a beautiful map showcasing different locations with markers. You can customize the content and appearance further based on your application's requirements.
                            </p>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ContactPage