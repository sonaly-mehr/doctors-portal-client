import React from 'react';
import './TestimonialData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const TestimonialData = (props) => {
    const { review, img, name, location } = props.testimonial;
    return (
        <div className="col-md-4">
            <div className="single-testimonial">
             <span> <FontAwesomeIcon icon={faQuoteLeft} className="review-icon"></FontAwesomeIcon> {review}</span>
                <div className="user-info">
                    <div className="user-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="user-detail">
                        <h6>{name}</h6>
                        <span>{location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialData;