import React from 'react';
import './ServiceInfo.css';
const ServiceInfo = (props) => {
    const {img, header, descp} = props.service
    return (
        <div className="col-md-4">
            <div className="single-service">
                <div className="service-img">
                    <img src={img} alt="" />
                </div>
                <div className="serivice-info">
                    <h6>{header}</h6>
                    <p>{descp}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;