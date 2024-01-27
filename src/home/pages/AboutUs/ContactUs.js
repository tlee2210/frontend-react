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
      {/* Header */}
      <div style={{ paddingTop: 120, paddingBottom: 100 }}>
        {/* //Header */}
        <div style={{ backgroundColor: '#242426', paddingBottom: 20, height: 381 }}>
          <Container style={{ marginLeft: 278, maxWidth: 850 }}>
            <div className="pb-5 pt-5">
              <h3 className="pb-1 text-white fw-bold" style={{ fontSize: 50 }}>CONTACT US</h3>
            </div>
            <iframe className="ratio ratio-16x9" style={{
              paddingTop: 15,
              maxWidth: 800,
              height: 400
            }} src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
          </Container>
        </div>

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
                    <h3 className="fw-bold"><i className='mdi mdi-email fs-1 ' style={{paddingRight:20}}></i>  Email Us:</h3>
                    <p className="fs-5" style={{paddingLeft:56}}>quangdaivi23030@gmail.com</p>
                  </div>
                  <div className='text-edit-contact-us'>
                    <h3 className="fw-bold"><i className='mdi mdi-map-marker fw-bold fs-1' style={{paddingRight:20}}></i>Address:</h3>
                    <p className="fs-5" style={{paddingLeft:56}}>191 Tay Hoa</p>
                  </div>
                  <div className='text-edit-contact-us'>
                    <h3 className="fw-bold"><i className='mdi mdi-phone-classic fw-bold fs-1' style={{paddingRight:20}}></i>  Phone Number:</h3>
                    <p className="fs-5" style={{paddingLeft:56}}>10123456789</p>
                  </div>
                  
                </div>
              </div>
              <div className="col-md-9">
                <Container fluid>
                  <Row>
                    <Card style={{marginTop:-16,paddingBottom:100}}>
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
                  </Row>
                </Container>
              </div>
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