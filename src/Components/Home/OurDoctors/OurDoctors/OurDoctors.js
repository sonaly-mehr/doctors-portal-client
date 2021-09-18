import React from 'react';
import './OurDoctors.css';
import doctor1 from '../../../../images/5790-removebg - Copy.png';
import DoctorInfo from '../DoctorInfo/DoctorInfo';


const OurDoctors = () => {
    const doctorData =[
        {
            img:doctor1,
            name: 'Dr. Caudi',
            number: '+619237132'
        },
        {
            img:doctor1,
            name: 'Dr. John Mitchel',
            number: '+619237132'
        },
        {
            img:doctor1,
            name: 'Dr. Abraham',
            number: '+619237132'
        }
    ]
    return (
        <section className="doctor-section">
            <div className="container">
                <h6>Our Doctors</h6>
                <div className="row">
                    {
                        doctorData.map(doctor=> <DoctorInfo doctor={doctor}></DoctorInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OurDoctors;