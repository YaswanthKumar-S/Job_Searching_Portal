import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the JWT token from local storage
    const token = localStorage.getItem('jwtToken');
    
    // Send logout request
    axios.delete('http://localhost:8080/api/v1/auth/logout', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(() => {
      // Clear the JWT token from local storage
      localStorage.removeItem('jwtToken');
      // Redirect to login page
      navigate('/');
    }).catch(error => {
      console.error('Logout failed:', error);
    });
  }, [navigate]);

  return (
    <div className="logout">
      <h2>Logging out...</h2>
      <p>You will be redirected to the login page shortly.</p>
    </div>
  );
};

export default Logout;
