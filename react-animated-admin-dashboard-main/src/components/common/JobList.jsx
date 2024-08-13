import React, { useState, useEffect } from 'react';
import './JobList.css';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem('jwtToken'); // If authentication is needed
        const response = await fetch('http://localhost:8080/api/jobs', {
          headers: {
            'Authorization': `Bearer ${token}`, // If authentication is needed
          },
        });

        // Check if the response is ok
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
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
    <div className="job-list">
      <h2>Available Jobs</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <li key={job.id} className="job-item">
              <h3>{job.jobTitle}</h3>
              <p><strong>Job Type:</strong> {job.jobType}</p>
              <p><strong>Job Category:</strong> {job.jobCategory}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Description:</strong> {job.jobDescription}</p>
            </li>
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </ul>
    </div>
  );
};

export default JobList;
