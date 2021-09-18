import React from 'react';
import './BlogData.css';


const BlogData = (props) => {
    const {img, name, date, headeline, description}= props.blog
    return (
        <div className="col-md-4">
            <div className="single-blog">
                <div className="user-info">
                    <div className="user-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="user-detail">
                        <h6>{name}</h6>
                        <span>{date}</span>
                    </div>
                </div>
                <div className="blog-content">
                    <h4>{headeline}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogData;