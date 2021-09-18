import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <section className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="single-footer">
                            <div className="footer-content footer-margin">
                                <p>Emergency Dental care</p>
                                <p>Check up</p>
                                <p>Treatment of personal diseases</p>
                                <p>Tooth extraction</p>
                                <p>check up</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="single-footer">
                            <h6>Services</h6>
                            <div className="footer-content"></div>
                            <p>Emergency Dental care</p>
                            <p>Check up</p>
                            <p>Treatment of personal diseases</p>
                            <p>Tooth extraction</p>
                            <p>check up</p>
                            <p>check up</p>
                            <p>check up</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="single-footer">
                            <h6>Oral Heath</h6>
                            <div className="footer-content">
                                <p>Emergency Dental care</p>
                                <p>Check up</p>
                                <p>Treatment of personal diseases</p>
                                <p>Tooth extraction</p>
                                <p>check up</p>
                                <p>check up</p>
                                <p>check up</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="single-footer">
                            <h6>Our address</h6>
                            <div className="footer-content">
                                <p>new york-101010 hudson <br /> yard</p>
                                <ul>
                                    <li><a href="#" className="facebook"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faGooglePlusG}></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
                                </ul>

                                <div className="call-now">
                                    <span>Call now</span><br />
                                    <button className="button footer-btn">+2834723</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-p">
                    <p>Copyright 2021 all right reserved</p>
                </div>
            </div>

        </section>
    );
};

export default Footer;