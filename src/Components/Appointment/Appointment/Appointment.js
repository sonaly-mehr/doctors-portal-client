import React, { useState } from 'react';
import './Appointment.css'
import Footer from '../../Home/Footer/Footer';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import TakeAppointment from '../TakeAppointment/TakeAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <section className="appointment-section">
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <TakeAppointment date={selectedDate}></TakeAppointment>
            <Footer></Footer>
        </section>
    );
};

export default Appointment;