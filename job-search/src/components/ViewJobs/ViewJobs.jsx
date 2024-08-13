import React, { useState, useEffect } from 'react';

function ViewJobsPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Call API to fetch jobs
    fetch('/api/jobs')
      .then(response => response.json())
      .then(data => setJobs(data));
  }, []);

  return (
    <div className="view-jobs-page">
      <h1>View Jobs</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <h2>{job.jobTitle}</h2>
            <p>{job.jobDescription}</p>
            <p>Job Type: {job.jobType}</p>
            <p>Job Category: {job.jobCategory}</p>
            <p>Location: {job.location}</p>
            <p>Company: {job.company.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewJobsPage;