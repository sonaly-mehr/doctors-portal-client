import React from 'react';
import './WorkProcess.css';

const WorkProcess = (props) => {
    const { icon, heading, content, step } = props.process
    return (
        <div className="col-md-4">
            <div className="single-process">
                <div className="process-img">
                    <img src={icon} alt="" />
                </div>
                <div className="process-content">
                    <h4>{heading}</h4>
                    <p>{content}</p>
                    <h5>{step}</h5>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;