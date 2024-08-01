import React, { useState } from 'react';
import './JobList.css';

const JobList = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Company',
      location: 'San Francisco, CA',
      description: 'Develop and maintain web applications using React.js.',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Finance Corp',
      location: 'New York, NY',
      description: 'Work on server-side logic and database integration.',
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'Startup Inc.',
      location: 'Remote',
      description: 'Build and manage both frontend and backend of applications.',
    },
  ]);

  return (
    <div className="job-list">
      <h2>Available Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="job-item">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
