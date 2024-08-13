import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import './UserManagement.css';

// Function to fetch user profiles based on type
const fetchUserProfiles = async (token, type = null) => {
  try {
    let url = "http://localhost:8080/api/user-profiles";
    if (type) {
      url += `/filter?type=${type}`;
    }

    const response = await fetch(url, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch user profiles:", error);
    throw error;
  }
};

// Function to post a new user profile
const postUserProfile = async (token, userProfile) => {
  try {
    const response = await fetch("http://localhost:8080/api/user-profiles", {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userProfile),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to post user profile:", error);
    throw error;
  }
};

// Function to delete a user profile
const deleteUserProfile = async (token, userId) => {
  try {
    const response = await fetch(`http://localhost:8080/api/user-profiles/${userId}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to delete user profile:", error);
    throw error;
  }
};

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', type: 'JOB_SEEKER' });
  const [errors, setErrors] = useState({});
  const [authToken, setAuthToken] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
          throw new Error('No authentication token found.');
        }
        setAuthToken(token);
        const users = await fetchUserProfiles(token);
        setUsers(users);
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchData();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const newUser = await postUserProfile(authToken, formData);
        setUsers([...users, newUser]);
        setFormData({ name: '', email: '', type: 'JOB_SEEKER' }); // Reset form
        alert('User added');
      } catch (error) {
        console.error("Failed to add user:", error);
      }
    }
  };

  const handleDelete = async (userId) => {
    try {
      await deleteUserProfile(authToken, userId);
      setUsers(users.filter(user => user.id !== userId));
      alert('User deleted');
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  const generatePDF = (userType) => {
    const doc = new jsPDF();
    doc.text(`${userType === 'COMPANY' ? 'Company' : 'Job Seeker'} Report`, 20, 20);

    users.filter(user => user.type === userType).forEach((user, index) => {
      doc.text(`Name: ${user.name}`, 20, 30 + (index * 20));
      doc.text(`Email: ${user.email}`, 20, 40 + (index * 20));
    });

    doc.save(`${userType.toLowerCase()}_report.pdf`);
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
        <div className="form-group">
          <label>Type:</label>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="JOB_SEEKER">Job Seeker</option>
            <option value="COMPANY">Company</option>
          </select>
        </div>
        <button type="submit">Add User</button>
      </form>

      <h3>Current Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email}) - {user.type}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <button onClick={() => generatePDF('COMPANY')}>Download Company Report</button>
      <button onClick={() => generatePDF('JOB_SEEKER')}>Download Job Seeker Report</button>
    </div>
  );
};

export default UserManagement;
