import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faCalendarWeek, faUserFriends, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar-section">
            <div className="sidebar-list">
                <h6><FontAwesomeIcon icon={faTh} className="sideicon"></FontAwesomeIcon><Link to="/dashboard">Dashboard</Link></h6>
                <h6><FontAwesomeIcon icon={faCalendarWeek} className="sideicon"></FontAwesomeIcon><Link to="/dashboard">Appointment</Link></h6>
                <h6><FontAwesomeIcon icon={faUserFriends} className="sideicon"></FontAwesomeIcon><Link to="/patients">Patients</Link></h6>
                <h6><FontAwesomeIcon icon={faFileAlt} className="sideicon"></FontAwesomeIcon><Link to="/dashboard">Prescription</Link></h6>
            </div>
        </div>
    );
};

export default SideBar;