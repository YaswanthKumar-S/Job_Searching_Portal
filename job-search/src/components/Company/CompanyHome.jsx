import React from 'react';
import { Link } from 'react-router-dom';
import background from "./company-background.jpg"
import './CompanyHome.css'
function CompanyHome() {
    return (
      <div className="home-page">
        <img src={background} alt="Background Image" className="background-image" />
        <div className="overlay">
          <div className="buttons-container">
            <Link to="/post-job">
              <button className="button">Post a Job</button>
            </Link>
            <Link to="/view-jobs">
              <button className="button">View Jobs</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
export default CompanyHome;