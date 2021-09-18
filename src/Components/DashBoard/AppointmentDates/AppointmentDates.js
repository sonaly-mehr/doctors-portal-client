import React from 'react';
import './AppointmentDates.css';

const AppointmentDates = ({ appointments, appointmentDate }) => {
    return (
        <div className="appointment-dates">
            <div className="appmnt-header-date">
                <h6>Appointments: {appointments.length}</h6>
                <p>{appointmentDate.toDateString()}</p>
            </div>
            {
                appointments.length ?
                <div>
                <div className="users-header">
                            <h6>Name</h6>
                            <h6>Email</h6>
                            <h6>Phone</h6>
                        </div>
                  
                { appointments.map(appointment =>
                    <div className="user-appointments">
                        <div className="users-info">
                            <h6>{appointment.name}</h6>
                            <h6>{appointment.email}</h6>
                            <h6>{appointment.number}</h6>
                        </div>
                        </div>
                        )
                } 
                </div>
                    :
                    <h4 className="no-appontment">No Appointments for Today!</h4>
            }
            {/* <div className="user-appointments">
                
                <div className="users-info">
                    <h6>Sonaly Akther</h6>
                    <h6>Female</h6>
                    <h6>0878424891</h6>
                </div>
                <div className="users-info">
                    <h6>Kolmilota Hiron</h6>
                    <h6>Female</h6>
                    <h6>0878424891</h6>
                </div>
                <div className="users-info">
                    <h6>Sonaly Akther</h6>
                    <h6>Female</h6>
                    <h6>0878424891</h6>
                </div>
                <div className="users-info">
                    <h6>Sonaly Akther</h6>
                    <h6>Female</h6>
                    <h6>0878424891</h6>
                </div>
                <div className="users-info">
                    <h6>Sonaly Akther</h6>
                    <h6>Female</h6>
                    <h6>0878424891</h6>
                </div>
            </div> */}
        </div>
    );
};

export default AppointmentDates;