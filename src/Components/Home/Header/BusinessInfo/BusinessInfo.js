import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import './BusinessInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const BusinessCard = [
        {
            header: 'Opening Hour',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            background: 'primary',
            icon: faClock

        },
        {
            header: 'Visit Our Location',
            description: 'Brookelyn, NY 10036, United States',
            background: 'dark',
            icon: faMapMarkerAlt

        },
        {
            header: 'Contact Us Now',
            description: '+0000382913743',
            background: 'primary',
            icon: faPhoneVolume

        }
    ]
    return (
        <div className="business-info">
            <div className="container">
                <div className="row">
                    {
                        BusinessCard.map(card => <CardInfo card={card}></CardInfo>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BusinessInfo;