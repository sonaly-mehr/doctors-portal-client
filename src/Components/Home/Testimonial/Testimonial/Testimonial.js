import React from 'react';
import './Testimonial.css';
import user1 from '../../../../images/Ellipse 1.png';
import user2 from '../../../../images/Ellipse 2.png'
import user3 from '../../../../images/Ellipse 3.png'
import TestimonialData from '../TestimonialData/TestimonialData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'


const Testimonial = () => {
    const TestimonialInfo = [
        {
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem, est non quis provident quidem ullam! Dicta quis blanditiis et',
            img: user1,
            name: 'Winson Herry',
            location: 'California'
        },
        {
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem, est non quis provident quidem ullam! Dicta quis blanditiis et',
            img: user2,
            name: 'Kate Watson',
            location: 'Miami'
        },
        {
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem, est non quis provident quidem ullam! Dicta quis blanditiis et',
            img: user3,
            name: 'Kelly Kelly',
            location: 'Ohio'
        }
    ]
    return (
        <section className="testimonial-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="testimonial-header">
                            <h6>testimonial</h6>
                            <h2>What's Our Patients <br /> Says</h2>
                        </div>
                    </div>
                    <div className="col-md-2 offset-md-6">
                        <FontAwesomeIcon icon={faQuoteLeft} className="quote"></FontAwesomeIcon>
                    </div>
                </div>
                <div className="row">
                    {
                        TestimonialInfo.map(testimonial => <TestimonialData testimonial={testimonial}></TestimonialData>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;