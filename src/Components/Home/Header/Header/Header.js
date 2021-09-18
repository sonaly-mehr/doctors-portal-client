import React from 'react';
import './Header.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import HeaderNav from '../HeaderNav/HeaderNav';

const Header = () => {
    return (
        <div className="header-section">
            <HeaderNav></HeaderNav>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;