import React from 'react';
import './Home.css';
import Header from '../Header/Header/Header';
import BusinessInfo from '../Header/BusinessInfo/BusinessInfo';
import Service from '../Service/Service/Service';
import DentalCare from '../DentalCare/DentalCare';
import Testimonial from '../Testimonial/Testimonial/Testimonial';
import Blog from '../Blog/Blog/Blog';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import OurDoctors from '../OurDoctors/OurDoctors/OurDoctors';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ProcessDetails from '../ProcessDetails/ProcessDetails';
import AboutUs from '../AboutUs/AboutUs';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <BusinessInfo></BusinessInfo>
            <Service></Service>
            <AboutUs></AboutUs>
            <ProcessDetails></ProcessDetails>
            <DentalCare></DentalCare>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <OurDoctors></OurDoctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;