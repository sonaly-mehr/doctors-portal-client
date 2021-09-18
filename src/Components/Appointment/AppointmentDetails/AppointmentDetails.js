import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './AppointmentDetails.css';

const AppointmentDetails = ({appointment, date}) => {
    // const {header, time, space} = props.appointment;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4">
            <div className="single-appointment">
                <h4>{appointment.header}</h4>
                <h6>{appointment.time}</h6>
                <span>{appointment.space}</span><br />
                <button onClick={openModal} className="button">book appointment</button>
                <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={appointment.header} date={date}></AppointmentForm>
            </div>
        </div>
    );
};

export default AppointmentDetails;