import React from 'react';
import './DoctorInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const DoctorInfo = (props) => {
    const {img, name, number} = props.doctor
    return (
        <div className="col-md-4">
            <div className="single-doctor">
                <div className="our-doctor">
                    <img src={img} alt="" />
                </div>
                <div className="doctor-info">
                    <h6>{name}</h6>
                    <span><FontAwesomeIcon icon={faPhoneAlt} className="phone-icon"></FontAwesomeIcon>{number}</span>
                </div>
            </div>
        </div>
    );
};

export default DoctorInfo;