import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./CandidatePage.css";

function CandidatePage() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem('token'); // If authentication is needed
        const response = await fetch('http://localhost:8080/api/jobs', {
          headers: {
            'Authorization': `Bearer ${token}`, // If authentication is needed
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Failed to fetch jobs');
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="container">
      <section id="jobs">
        <div className="job-list-header">
          <h5>AVAILABLE JOBS</h5>
        </div>
        <h2>Recent Job Updates</h2>
        {error && <p className="error">{error}</p>}
        <ul>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <li key={job.id} className="company-details">
                <div className="job-update">
                  <h4>
                    <strong>{job.jobTitle}</strong>
                    <i className="fa fa-heart-o bookmark"></i>
                  </h4>
                  <h6>{job.jobType}</h6>
                  <i className="fa fa-briefcase"></i>
                  <span>{job.jobCategory}</span>
                  <br />
                  <i className="fa fa-inr"></i>
                  <span className="price">{job.salary}</span>
                  <br />
                  <i className="fa fa-map-marker"></i>
                  <span className="location">{job.location}</span>
                  <p>
                    <strong>Description</strong>{" "}
                    <i className="fa fa-angle-double-right"></i>
                    {job.jobDescription} <a href="#">Read More</a>
                  </p>
                </div>
                <div className="apply-btn">
                  <Link to={`/apply/${job.id}`}>
                    <button type="button" className="btn btn-primary">
                      Apply
                    </button>
                  </Link>
                </div>
              </li>
            ))
          ) : (
            <p>No jobs available</p>
          )}
        </ul>
      </section>
    </div>
  );
}

export default CandidatePage;