import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-info">
            <h6>contact us</h6>
            <h4>Always connect with us</h4>
            <div className="contact-form">
                <form action="">
                    <input type="email" name="" id="" placeholder="Email address*" /><br />
                    <input type="text" name="" id="" placeholder="Subject*"/><br />
                    <textarea name="" id=""  placeholder="Your message*"></textarea><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            </div>
        </section>
    );
};

export default Contact;