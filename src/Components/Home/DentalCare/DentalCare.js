import React from 'react';
import './DentalCare.css'
import dental from '../../../images/Mask Group 3.png'
const DentalCare = () => {
    return (
        <section className="dental-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="dental-img">
                            <img src={dental} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="dental-content">
                            <h2>Exceptional dental <br /> Care, on your terms</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, harum facere excepturi quaerat cupiditate cumque at sit libero officia molestias culpa natus, beatae iusto blanditiis repudiandae. Enim minima labore molestias, magni aspernatur ducimus maiores reiciendis voluptas fugit minus in nisi. Laudantium nam sapiente quo rerum est, accusantium fuga recusandae alias obcaecati unde debitis voluptatibus sit saepe veniam. Ipsum, id qui at officiis exercitationem laborum optio nisi enim maiores quisquam deserunt? Rem, molestias? Quas eum sit consectetur accusamus ipsam consequuntur. Totam aliquid ut suscipit deserunt tenetur impedit praesentium architecto cupiditate quod esse temporibus rem saepe nisi, amet quidem repellendus culpa hic!</p>
                            <button className="button">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DentalCare;