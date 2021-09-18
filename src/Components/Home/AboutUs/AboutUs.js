import React from 'react';
import './AboutUs.css';
import aboutimg from '../../../images/about-us-image.jpg';
import director from '../../../images/about-director.jpg';

const AboutUs = () => {
    return (
        <div className="about-section">
            <div className="container">
                <div className="about-header">
                    <h6>About Us</h6>
                </div>
                <div className="about-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-img">
                                <img src={aboutimg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-right">
                                <h2>About our clinic</h2>
                                <div className="clinic-quote">
                                    <p>“A smile is the main component of human charm. Charming people find it easier to communicate with others and achieve their goals.” </p>
                                </div>
                                <p className="clinic-desc">Our clinic was created to make your smile beautiful, healthy and snow-white. We offer a wide range of dental treatment and dental restoration services. We have gathered only qualified specialists with extensive experience in the dental field. We will help you with any problem! </p>

                                <div className="director">
                                    <div className="director-img">
                                        <img src={director} alt="" />
                                    </div>
                                    <div className="director-info">
                                        <h4>Michael Jonathan</h4>
                                        <span>Director of the clinic</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;