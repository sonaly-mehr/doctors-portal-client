import React from 'react';
import './AppointmentBanner.css'
import doctor from '../../../images/5790-removebg.png';
const AppointmentBanner = () => {
    return (
        <section className="apointmentbanner-section">
            <div className="container">
                <div className="apointmentbanner-container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="doctor-img">
                        <img src={doctor} alt="" />
                    </div>
                    </div>
                    <div className="col-md-8">
                        <div className="apointmentbanner-content">
                            <h6>Appointment</h6>
                            <h2>Make an appointment <br /> Today</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nulla, qui laboriosam dolor cumque dignissimos!</p>
                            <button className="button">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default AppointmentBanner;