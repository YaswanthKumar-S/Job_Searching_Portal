import React, { useState } from 'react';

function PostJobPage() {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobCategory, setJobCategory] = useState('');
  const [location, setLocation] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to post job
    console.log('Job posted successfully!');
  };

  return (
    <div className="post-job-page">
      <h1>Post a Job</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Job Title:
          <input type="text" value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} />
        </label>
        <label>
          Job Description:
          <textarea value={jobDescription} onChange={(event) => setJobDescription(event.target.value)} />
        </label>
        <label>
          Job Type:
          <select value={jobType} onChange={(event) => setJobType(event.target.value)}>
            <option value="">Select a job type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </label>
        <label>
          Job Category:
          <select value={jobCategory} onChange={(event) => setJobCategory(event.target.value)}>
            <option value="">Select a job category</option>
            <option value="Software Development">Software Development</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Human Resources">Human Resources</option>
          </select>
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
        </label>
        <label>
          Company:
          <select value={company} onChange={(event) => setCompany(event.target.value)}>
            <option value="">Select a company</option>
            {/* Populate this dropdown with a list of companies from your database */}
            <option value="1">Company A</option>
            <option value="2">Company B</option>
            <option value="3">Company C</option>
          </select>
        </label>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default PostJobPage;