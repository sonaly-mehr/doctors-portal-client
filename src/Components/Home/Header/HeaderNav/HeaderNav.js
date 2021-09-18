import React, { useContext } from 'react';
import './HeaderNav.css';
import { UserContext } from '../../../../App';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header-navbar">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-4">
                        <nav className="menu">
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/appointment">Appointment</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li className="text-color"><Link to="/contact">Contact</Link></li>
                                <li className="text-color"><Link to="/dashboard">Dashboard</Link></li>
                                {!loggedInUser ?
                                        <li className="text-color">
                                            <Link className="login" to="/login">Login</Link>
                                        </li>
                                        :
                                        <li><Link to="/login" style={{ color: '#1CC7C1', fontWeight: '700' }}>{loggedInUser.name}</Link></li>
                                    }
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderNav;