import React from 'react';
import './ContactPage.css'; // Ensure the CSS reflects the new styling
import { Link } from 'react-router-dom';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Welcome To University</h1>
                <p>Description</p>
            </div>
            <div className="contact-content ">
                <div className="row">
                    <div className="col-md-4">
                        <div className="contact-methods">
                            <div className='text-edit'>
                                <h5><i className='mdi mdi-email'></i>  Email Us:</h5>
                                <p>quangdaivi23030@gmail.com</p>
                            </div>
                            <div className='text-edit'>
                                <h5><i className='mdi mdi-map-marker'></i>Address:</h5>
                                <p>191 Tay Hoa</p>
                            </div>
                            <div className='text-edit'>
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
                </div>
            </div>
        </div>
    );
};

export default ContactPage;