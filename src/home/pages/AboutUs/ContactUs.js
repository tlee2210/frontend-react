import React from "react";
import ParticlesAuth from '../../layouts/ParticlesAuth';
import { Link } from "react-router-dom";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';

const mapStyles = {
  width: '100%',
  height: '400px',  // Set a fixed height for better appearance
};

import './ContactUs.css';

function NewDetailsPage(props) {
  return (
    <ParticlesAuth>
      <div style={{ paddingTop: 120, paddingBottom: 100 }}>
        {/* //Header */}
        <header className="header-container-news-Header-facilities">
          <div className="header-content-news-Header">
            <h1 className="header-title-news-Header mb-5">
              Contact Us
            </h1>
            <div className="mt-1">
              <p className="text-news-css">A university is a distinguished institution of higher education that plays a pivotal role in the academic and intellectual development of individuals while contributing significantly to the advancement of knowledge and society as a whole. These multifaceted institutions offer an extensive array of academic programs, making them the epicenter of higher learning.</p>
            </div>
          </div>
        </header>

        {/* Contact Us Content */}
        <div className="contact-page-contact-us">
          <div className="contact-header-contact-us">
            <h1>Welcome To University</h1>
            <p>Description</p>
          </div>
          <div className="contact-content-contact-us">
            <div className="row">
              <div className="col-md-3">
                <div className="contact-methods-contact-us">
                  <div className='text-edit-contact-us'>
                    <h3 className="fw-bold"><i className='mdi mdi-email fs-1 ' style={{ paddingRight: 20 }}></i>  Email Us:</h3>
                    <p className="fs-5" style={{ paddingLeft: 56 }}>quangdaivi23030@gmail.com</p>
                  </div>
                  <div className='text-edit-contact-us'>
                    <h3 className="fw-bold"><i className='mdi mdi-map-marker fw-bold fs-1' style={{ paddingRight: 20 }}></i>Address:</h3>
                    <p className="fs-5" style={{ paddingLeft: 56 }}>191 Tay Hoa</p>
                  </div>
                  <div className='text-edit-contact-us'>
                    <h3 className="fw-bold"><i className='mdi mdi-phone-classic fw-bold fs-1' style={{ paddingRight: 20 }}></i>  Phone Number:</h3>
                    <p className="fs-5" style={{ paddingLeft: 56 }}>10123456789</p>
                  </div>

                </div>
              </div>
              <div className="col-md-9">
                <div className="youtube-video" style={{ paddingLeft: 140, paddingTop: 20 }}>
                  <iframe width="600" height="315" src="https://www.youtube.com/embed/LlCwHnp3kL4">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div>
          <div style={{paddingTop:40}}>
            <div >
              <Row>
                <Col lg={12}>
                  <Card>
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
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </ParticlesAuth>

  );

}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE"
})(NewDetailsPage);