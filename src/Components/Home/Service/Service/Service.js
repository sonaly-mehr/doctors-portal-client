import React from 'react';
import './Service.css';
import service1 from '../../../../images/001-dental.png';
import service2 from '../../../../images/tooth (1).png';
import service3 from '../../../../images/tooth.png';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const Service = () => {
    const serviceInfo= [
        {
            img: service1,
            header: 'Fluride Treatment',
            descp: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsa ipsum sequi deserunt cum reprehenderit'
        },
        {
            img: service2,
            header: 'Cavity Filling',
            descp: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsa ipsum sequi deserunt cum reprehenderit'
        },
        {
            img: service3,
            header: 'Teath Whitening',
            descp: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsa ipsum sequi deserunt cum reprehenderit'
        }
    ]
    return (
        <section className="service-section">
            <div className="container">
            <div className="service-header">
                <h6>Our services</h6>
                <h4>services we provide</h4>
            </div>
            <div className="row">
            {
                serviceInfo.map(service => <ServiceInfo service={service}></ServiceInfo>)
            }
            </div>
            </div>
        </section>
    );
};

export default Service;