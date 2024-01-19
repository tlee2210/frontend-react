import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import React from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';

const mapStyles = {
    width: '100%',
    height: '400px',  // Set a fixed height for better appearance
};

const LoadingContainer = () => <div>Loading...</div>;

const GoogleMaps = (props) => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
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
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default (
    GoogleApiWrapper({
        apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
        LoadingContainer: LoadingContainer,
        v: "3",
    })(GoogleMaps)
);