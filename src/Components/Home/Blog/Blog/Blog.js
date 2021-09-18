import React from 'react';
import './Blog.css'
import news1 from '../../../../images/news.jpg';
import news2 from '../../../../images/news2.png'
import news3 from '../../../../images/news3.jpg'
import BlogData from '../BlogData/BlogData';

const Blog = () => {
    const blogData =[
        {
            img: news1,
            name: 'Dr. Caudi',
            date: '23 April 2020',
            headeline: '2 times of brush in a day can keep you healthy',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, odit molestias velit itaque quo architecto earum incidunt corporis saepe tenetur nostrum blanditiis. '
        },
        {
            img: news2,
            name: 'Dr. John Mitchel',
            date: '23 April 2020',
            headeline: 'The tooth cancer is taking a challange',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, odit molestias velit itaque quo architecto earum incidunt corporis saepe tenetur nostrum blanditiis.'
        },
        {
            img: news3,
            name: 'Dr. Abraham',
            date: '23 April 2020',
            headeline: 'Check at least a doctor in a year for your teeth',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, odit molestias velit itaque quo architecto earum incidunt corporis saepe tenetur nostrum blanditiis.'
        }
    ]
    return (
        <section className="blog-section">
            <div className="container">
            <div className="blog-header">
                <h6>our blog</h6>
                <h4>From our blog news</h4>
            </div>
            <div className="row">
                {
                    blogData.map(blog => <BlogData blog={blog}></BlogData>)
                }
            </div>
            </div>
        </section>
    );
};

export default Blog;