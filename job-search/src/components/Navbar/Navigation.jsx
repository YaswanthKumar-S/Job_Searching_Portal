import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import "./Navigation.css";

const Navigation = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a token in localStorage when the component mounts
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleCandidateLogin = () => {
    if (!isLoggedIn) {
      navigate("/candidate-login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/"); // Redirect to home or login page after logout
  };

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen((prevState) => !prevState);
  };

  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <a href="/">
            <img className="navbar-logo" src={logo} alt="GetMeHired" />
          </a>
        </div>
        <nav>
          <div className="nav-mobile">
            <a
              id="nav-toggle"
              href="#!"
              onClick={handleMobileNavToggle}
              className={isMobileNavOpen ? "active" : ""}
            >
              <span></span>
            </a>
          </div>
          <ul className={`nav-list ${isMobileNavOpen ? "open" : ""}`}>
            <li>
              <a href="/candidate-home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            {isLoggedIn ? (
              <li>
                <a href="#!" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            ) : (
              <li>
                <a href="#!" onClick={handleCandidateLogin}>
                  Candidate Login
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
