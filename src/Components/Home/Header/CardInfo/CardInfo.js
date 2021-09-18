import React from 'react';
import './CardInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

const CardInfo = (props) => {
    const { header, description, background, icon } = props.card
    return (
        <div className="col-md-4">
            <div className={`info-${background} single-card`}>
                <div className="card-logo">
                    <FontAwesomeIcon icon={icon} className="card-icon"></FontAwesomeIcon>
                </div>
                <div className="card-info">
                    <h6>{header}</h6>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;