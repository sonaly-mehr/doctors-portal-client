import React from 'react';
import './HeaderMain.css'
import chair from '../../../../images/Mask Group 1.png'

const HeaderMain = () => {
    return (
        <div className="header-main">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="header-desc">
                            <h2>Your new smile <br /> start here</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab natus consequatur facere nihil, laboriosam consequuntur!</p>
                            <button className="button">Get appointment</button>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="headermain-img">
                            <img src={chair} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;