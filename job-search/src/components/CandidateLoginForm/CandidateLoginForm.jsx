import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CandidateLoginForm.css";

const CandidateLoginForm = () => {
    const [isLoggedIn, setLogIn] = useState(true);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (
            (token && window.location.pathname === "/login") ||
            window.location.pathname === "/register"
        ) {
            navigate("/candidate-home");
        }
    }, [navigate]);

    const handleToggle = () => {
        setLogIn(!isLoggedIn);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = {};

        // Validation logic (same as before)

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                let response;
                if (isLoggedIn) {
                    // Login API call
                    response = await axios.post("http://localhost:8080/api/v1/auth/authenticate", { email, password });
                } else {
                    // Signup API call
                    let role="USER";
                    let name=userName;
                    response = await axios.post("http://localhost:8080/api/v1/auth/register", { name, email, password ,role});
                }

                // Store token in localStorage
                localStorage.setItem("token", response.data.token);
                toast.success("Success!", {
                    position: "top-right",
                    autoClose: 5000,
                });

                setTimeout(() => {
                    navigate("/candidate-home");
                    navigate(0);
                }, 2000);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    toast.error("Invalid credentials. Please try again.", {
                        position: "top-right",
                        autoClose: 5000,
                    });
                } else {
                    toast.error("Invalid credentials. Please try again.", {
                        position: "top-right",
                        autoClose: 5000,
                    });
                }
                console.error("API error:", error);
            }
        }
    };

    const handleClick = () => {
        setOpen(true);
    };

    return (
        <div className="login-signup-form">
            <h2 style={{ color: "black" }}>
                {isLoggedIn ? "Candidate Login" : "Candidate Signup"}
            </h2>
            <form onSubmit={handleSubmit}>
                {isLoggedIn ? (
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your candidate email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
                        <br />
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        {errors.password && (
                            <div style={{ color: "red" }}>{errors.password}</div>
                        )}
                    </div>
                ) : (
                    <div>
                        <label>Full Name</label>
                        <input
                            type="text"
                            value={userName}
                            placeholder="Enter your fullname"
                            onChange={(event) => setUserName(event.target.value)}
                        />
                        {errors.userName && (
                            <div style={{ color: "red" }}>{errors.userName}</div>
                        )}
                        <br />
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
                        <br />
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        {errors.password && (
                            <div style={{ color: "red" }}>{errors.password}</div>
                        )}
                        <br />
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            placeholder="Confirm your password"
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                        {errors.confirmPassword && (
                            <div style={{ color: "red" }}>{errors.confirmPassword}</div>
                        )}
                        <br />
                    </div>
                )}
                <button onClick={handleClick} type="submit">
                    {isLoggedIn ? "Login" : "SignUp"}
                </button>
                <p style={{ color: "black" }}>
                    {isLoggedIn ? "Don't have an account? " : "Already have an account? "}
                    <span onClick={handleToggle}>{isLoggedIn ? "SignUp" : "Login"}</span>
                </p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default CandidateLoginForm;
