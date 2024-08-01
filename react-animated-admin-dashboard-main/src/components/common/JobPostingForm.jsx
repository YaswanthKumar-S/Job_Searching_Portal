// src/JobPostingForm.js

import React, { useState } from 'react';
import './JobPostingForm.css';

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    location: '',
    description: '',
    requirements: '',
    salary: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.jobTitle) formErrors.jobTitle = 'Job title is required';
    if (!formData.company) formErrors.company = 'Company is required';
    if (!formData.location) formErrors.location = 'Location is required';
    if (!formData.description) formErrors.description = 'Description is required';
    if (!formData.requirements) formErrors.requirements = 'Requirements are required';
    if (!formData.salary) formErrors.salary = 'Salary is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted', formData);
      alert('Form submitted'); // Display alert
      // Handle form submission (e.g., send data to server)
    }
  };

  return (
    <div className="job-posting-form">
      <h2>Job Posting Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
          />
          {errors.jobTitle && <span className="error">{errors.jobTitle}</span>}
        </div>
        <div className="form-group">
          <label>Company:</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          {errors.company && <span className="error">{errors.company}</span>}
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          {errors.location && <span className="error">{errors.location}</span>}
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && <span className="error">{errors.description}</span>}
        </div>
        <div className="form-group">
          <label>Requirements:</label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
          />
          {errors.requirements && <span className="error">{errors.requirements}</span>}
        </div>
        <div className="form-group">
          <label>Salary:</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
          {errors.salary && <span className="error">{errors.salary}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JobPostingForm;
