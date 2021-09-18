import React, { useContext } from 'react';
import './AppointmentHeader.css';
import chair from '../../../images/Mask Group 1.png';
import Calendar from 'react-calendar';
import '../Calendar.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const AppointmentHeader = ({ handleDateChange }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="appnmt-header-sec">
            <div className="header-main">
                <div className="container">
                    <div className="row">
                        <div className="appointment-menu">
                            <div className="col-md-7 offset-md-5">
                                <nav className="menu">
                                    <ul>
                                        <li><Link to="/home">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/appointment">Appointment</Link></li>
                                        <li><Link to="/blog">Blog</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        {!loggedInUser ?
                                        <li className="text-color">
                                            <Link className="login" to="/login">Login</Link>
                                        </li>
                                        :
                                        <li ><Link to="/login" style={{ color: '#1CC7C1', fontWeight: '700' }}>{loggedInUser.name}</Link></li>
                                    }
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="header-desc">
                                <h2>Appointment</h2>
                                <div className="calender-style">
                                    <Calendar
                                        onChange={handleDateChange}
                                        value={new Date()}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="headermain-img appnmt-header-img">
                                <img src={chair} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentHeader;