import React, { useState, useEffect } from 'react';
import './JobPostingForm.css';

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: { id: '' },
    location: '',
    description: '',
    requirements: '',
    salary: '',
    jobType: '',        // Add jobType
    jobCategory: '',    // Add jobCategory
  });
  

  const [errors, setErrors] = useState({});
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await fetch('http://localhost:8080/api/companies', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        // Ensure the response is valid
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Extract only id and name from the fetched data
        const companyOptions = data.map(company => ({
          id: company.id,
          name: company.companyName,
        }));

        setCompanies(companyOptions);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCompanyChange = (e) => {
    const selectedCompanyId = e.target.value;
    setFormData({
      ...formData,
      company: { id: selectedCompanyId },
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.jobTitle) formErrors.jobTitle = 'Job title is required';
    if (!formData.company || !formData.company.id) formErrors.company = 'Company is required';
    if (!formData.location) formErrors.location = 'Location is required';
    if (!formData.description) formErrors.description = 'Description is required';
    if (!formData.requirements) formErrors.requirements = 'Requirements are required';
    if (!formData.salary) formErrors.salary = 'Salary is required';
    if (!formData.jobType) formErrors.jobType = 'Job type is required';  // Add validation for jobType
    if (!formData.jobCategory) formErrors.jobCategory = 'Job category is required';  // Add validation for jobCategory
  
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await fetch('http://localhost:8080/api/jobs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            jobTitle: formData.jobTitle,
            jobDescription: formData.description,
            jobType: formData.jobType,         // Include jobType
            jobCategory: formData.jobCategory, // Include jobCategory
            location: formData.location,
            company: formData.company,
            requirements: formData.requirements,
            salary: formData.salary,
          }),
        });
  
        if (response.ok) {
          alert('Job posted successfully');
        } else {
          const errorData = await response.json();
          console.error('Failed to post job:', errorData);
          alert(`Failed to post job: ${errorData.message || 'Unknown error'}`);
        }
      } catch (error) {
        console.error('Error posting job:', error);
        alert('Error posting job');
      }
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
          <select name="company" value={formData.company.id} onChange={handleCompanyChange}>
            <option value="">Select a company</option>
            {companies.map(company => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </select>
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
        <div className="form-group">
          <label>Job Type:</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
          >
            <option value="">Select Job Type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
          {errors.jobType && <span className="error">{errors.jobType}</span>}
        </div>
        <div className="form-group">
          <label>Job Category:</label>
          <select
            name="jobCategory"
            value={formData.jobCategory}
            onChange={handleChange}
          >
            <option value="">Select Job Category</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Engineering">Engineering</option>
          </select>
          {errors.jobCategory && <span className="error">{errors.jobCategory}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  
};

export default JobPostingForm;
