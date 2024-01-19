import React from 'react';
import UiContent from '../../../../Components/Common/UiContent';
import { Card, CardBody, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

const mapStyles = {
    width: '100%',
    height: '400px',
};

const LoadingContainer = () => <div>Loading...</div>;

const ContactPage = (props) => {
    return (
        <React.Fragment>
            <UiContent />
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <Row>
                                        {/* First Row: Contact Form */}
                                        <Col md={6} className="mb-3">
                                            <h2 className="text-center mb-4">Contact Us</h2>
                                            <Form>
                                                <FormGroup className="mb-3">
                                                    <Label for="nameInput">Name</Label>
                                                    <Input type="text" id="nameInput" placeholder="Enter your name" />
                                                </FormGroup>
                                                <FormGroup className="mb-3">
                                                    <Label for="emailInput">Email Id</Label>
                                                    <Input type="email" id="emailInput" placeholder="Enter your email" />
                                                </FormGroup>
                                                <FormGroup className="mb-3">
                                                    <Label for="contactNumber">Contact Number</Label>
                                                    <Input type="number" id="contactNumber" placeholder="+91 9876543210" />
                                                </FormGroup>
                                                <FormGroup className="mb-3">
                                                    <Label for="messageInput">Message</Label>
                                                    <textarea className="form-control" id="messageInput" rows="3" placeholder="Enter your message"></textarea>
                                                </FormGroup>
                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </Form>
                                        </Col>

                                        {/* Second Row: Google Maps */}
                                        <Col md={6}>
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
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    LoadingContainer: LoadingContainer,
    v: "3",
})(ContactPage);