import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./ApplicationForm.css";

const ApplicationForm = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [resume, setResume] = useState(null);

    const handleResumeChange = (event) => {
        setResume(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!resume) {
            toast.error("Please upload your resume.", {
                position: "top-right",
                autoClose: 5000,
            });
            return;
        }

        const token = localStorage.getItem('token'); // Get JWT token from local storage

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phoneNumber", phoneNumber);
        formData.append("resume", resume);
        formData.append("jobId", jobId);

        try {
            const response = await fetch('http://localhost:8080/api/job-applications', {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${token}`, // Include JWT token in request headers
                },
            });

            if (response.ok) {
                toast.success("Application submitted successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                });
                setTimeout(() => {
                    navigate("/");
                }, 4000);
            } else {
                toast.error("Failed to submit application.", {
                    position: "top-right",
                    autoClose: 5000,
                });
            }
        } catch (error) {
            console.error("Error submitting application:", error);
            toast.error("An error occurred. Please try again.", {
                position: "top-right",
                autoClose: 5000,
            });
        }
    };

    return (
        <div className="application-form">
            <h1 style={{ color: "black" }}>Application Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter your phone number"
                        required
                    />
                </div>
                <div>
                    <label>Resume (PDF)</label>
                    <input
                        type="file"
                        accept=".pdf"
                        onChange={handleResumeChange}
                        required
                    />
                </div>
                <button type="submit">Apply</button>
                <ToastContainer closeButton={false} />
            </form>
        </div>
    );
};

export default ApplicationForm;
