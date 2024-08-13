import React, { useState } from "react";
import axios from "axios";
import './ContactForm.css';
import { ToastContainer, toast } from "react-toastify";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
        try {
            const token = localStorage.getItem('token'); // Get JWT token from local storage
            const response = await axios.post("http://localhost:8080/api/contact", formData, {
                headers: {
                    'Authorization': `Bearer ${token}` // Include JWT token in request headers
                }
            });

            if (response.status === 200) {
                toast.success("Message Sent.");
                setFormData({
                    name: "",
                    email: "",
                    phoneNumber: "",
                    message: "",
                });
            }
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error("Message failed to send.");
        }
    }
};


    return (
        <div className="contact-container">
            <div className="contact-image" />
            <form className="contact-form" onSubmit={handleSubmit}>
                <center><h2 style={{ color: "black" }}>Contact Form</h2></center>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <div className="error-message">{errors.name}</div>
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <div className="error-message">{errors.email}</div>
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    <div className="error-message">{errors.phoneNumber}</div>
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <div className="error-message">{errors.message}</div>
                </div>
                <button type="submit">Send</button>
                <ToastContainer />
            </form>
        </div>
    );
}

export default ContactUs;
