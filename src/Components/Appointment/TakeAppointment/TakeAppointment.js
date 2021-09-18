import React from 'react';
import AppointmentDetails from '../AppointmentDetails/AppointmentDetails';
import './TakeAppointment.css'

const TakeAppointment = ({date}) => {
    const AppointMentData = [
        {
            header: 'Teeth Orthodontics',
            time: '8:00 AM-9:00 AM',
            space: '10 spaces available',
        },
        {
            header: 'Cosmetic Dentistry',
            time: '10:05 AM-11:30 AM',
            space: '10 spaces available',
        },
        {
            header: 'Teeth cleaning',
            time: '5:00 PM-6:30 PM',
            space: '10 spaces available',
        },{
            header: 'Cavity protection',
            time: '7:00 AM-8:30 AM',
            space: '10 spaces available',
        },{
            header: 'Teeth Orthodontics',
            time: '8:00 AM-9:00 AM',
            space: '10 spaces available',
        },
        {
            header: 'Teeth Orthodontics',
            time: '8:00 AM-9:00 AM',
            space: '10 spaces available',
        }
    ]
    return (
        <section className="take-appointment">
            <div className="container">
            <h2>Available appointments on {date.toDateString()}</h2>
            <div className="row">
                {
                    AppointMentData.map(appointment=> <AppointmentDetails appointment={appointment} date={date}></AppointmentDetails>)
                }
            </div>
            </div>
        </section>
    );
};

export default TakeAppointment;