import React from 'react';
import './DashBoard.css';
import AppointmentDates from '../AppointmentDates/AppointmentDates';
import SideBar from '../SideBar/SideBar';
import Calendar from 'react-calendar';
import { useState } from 'react/cjs/react.development';

const DashBoard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] =useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);

        fetch('https://still-bastion-33207.herokuapp.com/appointmentByDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({date})
        })
        .then(res=> res.json())
        .then(data => setAppointments(data))
    }

return (
    <div className="dashboard-section">
        <div className="row">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-4">
                <div className="borad-calender">
                    <h4>Appointments</h4>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
            </div>
            <div className="col-md-4">
                <AppointmentDates appointments={appointments} appointmentDate={selectedDate}></AppointmentDates>
            </div>
        </div>
    </div>
);
};

export default DashBoard;