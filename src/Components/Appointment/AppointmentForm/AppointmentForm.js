import React from 'react';
import './AppointmentForm.css';
import { useForm } from "react-hook-form";

import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {

    const { register, handleSubmit, formState: { errors }  } = useForm();
    const onSubmit = data =>{
        data.service= appointmentOn;
        data.date= date;
        data.createdOn= new Date();
        console.log(data);
        closeModal();
        alert('Appointment Created Sucessfully!')
        fetch('http://localhost:4000/addAppointment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
    })
         .then(res=> res.json())
         .then(success => {
             if(success){
             }

         })
    }
    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="appointment-from">
                <h2>{appointmentOn}</h2>
                <p className="date-style">ON {date.toDateString()}</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                {/* <input defaultValue="name" {...register("name")} /> */}

                    <input type="text" placeholder="Your Name" {...register("name")} /> <br />
                    <input type="number" placeholder="Phone Number" {...register("number")} /> <br />
                    <input type="email" placeholder="Email" {...register("email")} /> <br />
                    <select {...register("gender")}>
                        <option value="gender">Gender</option>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select> <br /> 
                    <input type="date" placeholder="Email" {...register("date")} /> <br />
                    <input type="submit" value="Send"/>
                </form>
                </div>
            </Modal>
        </div>
    );
};

export default AppointmentForm;