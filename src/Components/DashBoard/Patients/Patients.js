import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import SideBar from '../SideBar/SideBar';
import './Patients.css';

const Patients = () => {
    const [appointment, setAppointment] = useState([]);

    useEffect(() => {
        fetch('https://still-bastion-33207.herokuapp.com/allAppointments')
            .then(res => res.json())
            .then(data => setAppointment(data))
        // console.log(appointment);
    })
    return (
        <div className="patients-section">
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>

                <div className="col-md-9">
                    <div className="dashborad-header">
                        <h6>Dashboard</h6>
                        <div className="appointment-card">
                            <div className="single-appnt-card card-blue">
                                <h4>3</h4> <span>Today's <br /> Appointments</span>
                            </div>
                            <div className="single-appnt-card card-green">
                                <h4>{appointment.length}</h4> <span>Total <br /> Appointments</span>
                            </div>
                            <div className="single-appnt-card card-orange">
                                <h4>{appointment.length}</h4> <span>Total <br /> Patients</span>
                            </div>
                        </div>
                    </div>

                    <div className="recent-appointments">
                        <h4>Recent Appointments</h4>
                        <div className="recent-appoint-padding">
                            <div className="recent-appointment-header">
                                <h6>Sr. No</h6>
                                <h6>Date</h6>
                                <h6>Name</h6>
                                <h6>Contact</h6>
                                <h6>Service</h6>
                            </div>
                            {
                                appointment.map((list, num) => <div className="recent-appointment-details">
                                    <h6 className="count">{num + 1}</h6>
                                    <h6 className="date">{list.date}</h6>
                                    <h6 className="name">{list.name}</h6>
                                    <h6 className="number">{list.number}</h6>
                                    <h6 className="service">{list.service}</h6>
                                </div>)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Patients;