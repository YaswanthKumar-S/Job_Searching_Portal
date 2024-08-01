// src/UserManagement.js

import React, { useState } from 'react';
import jsPDF from 'jspdf';
import './UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Surya', email: 'Surya@gmail.com' },
    { id: 2, name: 'Rochit', email: 'Rochit@gmail.com' },
  ]);

  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newUser = {
        id: users.length + 1,
        name: formData.name,
        email: formData.email,
      };
      setUsers([...users, newUser]);
      setFormData({ name: '', email: '' }); // Reset form
      alert('User added');
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("User Report", 20, 20);

    users.forEach((user, index) => {
      doc.text(`Name: ${user.name}`, 20, 30 + (index * 10));
      doc.text(`Email: ${user.email}`, 20, 35 + (index * 10));
    });

    doc.save('user_report.pdf');
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <button type="submit">Add User</button>
      </form>

      <h3>Current Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
      <button onClick={generatePDF}>Download User Report</button>
    </div>
  );
};

export default UserManagement;
