import React from 'react';
import './ProcessDetails.css';
import online from '../../../images/online.png';
import feedback from '../../../images/feedback.png'
import calender from '../../../images/calendar.png'
import WorkProcess from '../WorkProcess/WorkProcess';
import { Link } from 'react-router-dom';

const ProcessDetails = () => {
    const processData = [
        {
            icon: online,
            heading: 'Search Best Online Professional',
            content: 'It is a long established fact that a reader will be distracted by the readable',
            step: 'Step 1'
        },
        {
            icon: calender,
            heading: 'Get Instant Appointment',
            content: 'It is a long established fact that a reader will be distracted by the readable',
            step: 'Step 2'
        },
        {
            icon: feedback,
            heading: 'Leave Your Feedback',
            content: 'It is a long established fact that a reader will be distracted by the readable',
            step: 'Step 3'
        }
    ]
    return (
        <div className="process-details">
            <div className="container">
                <div className="process-wrap">
                    <div className="process-heading">
                        <div className="row">
                            <div className="col-md-4">
                                <h6>Work Process</h6>
                                <h1>How it Works?</h1>
                            </div>
                            <div className="col-md-4">
                                <p>Donec rutrum congue leo eget malesuada. <br /> Nulla porttitor accumsan tincidunt. Vestibulum <br /> ante ipsum primis.</p>
                            </div>
                            <div className="col-md-4">
                                <button className="appointment-button"><Link to="/appointment">Make Appointment</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            processData.map(process => <WorkProcess process={process}></WorkProcess>)
                        }
                    </div>
                    <div className="dot1"></div>
                    <div className="dot2"></div>
                    <div className="dot3"></div>
                </div>
            </div>
        </div>
    );
};

export default ProcessDetails;