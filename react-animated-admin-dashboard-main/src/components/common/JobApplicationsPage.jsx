import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './JobApplicationsPage.css'; // Optional: Add your styles

const JobApplicationsPage = () => {
    const [applications, setApplications] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const token = localStorage.getItem('jwtToken'); // Get JWT token from local storage
                const response = await fetch('http://localhost:8080/api/job-applications', {
                    headers: {
                        'Authorization': `Bearer ${token}`, // Include JWT token in request headers
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setApplications(data);
            } catch (error) {
                console.error('Error fetching applications:', error);
                setError('Failed to fetch applications');
            }
        };

        fetchApplications();
    }, []);

    // Function to download applications data as CSV
    const downloadCSV = () => {
        if (applications.length === 0) {
            toast.error('No applications to download');
            return;
        }

        const header = 'Serial No.,Name,Email,Phone Number,Resume URL\n';
        const rows = applications.map((app, index) => 
            `${index + 1},"${app.name}","${app.email}","${app.phoneNumber}","http://localhost:8080/api/job-applications/resume/${app.id}"`
        ).join('\n');

        const csvContent = `data:text/csv;charset=utf-8,${header}${rows}`;
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'job_applications.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="applications-page">
            <h1>Job Applications</h1>
            {error && <p className="error">{error}</p>}
            {applications.length > 0 ? (
                <>
                    <button onClick={downloadCSV} className="download-button">Download Applications</button>
                    <table>
                        <thead>
                            <tr>
                                <th>Serial No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Resume</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((app, index) => (
                                <tr key={app.id}>
                                    <td>{index + 1}</td>
                                    <td>{app.name}</td>
                                    <td>{app.email}</td>
                                    <td>{app.phoneNumber}</td>
                                    <td>
                                        <a href={`http://localhost:8080/api/job-applications/resume/${app.id}`} target="_blank" rel="noopener noreferrer">
                                            View Resume
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : (
                <p>No applications available</p>
            )}
            <ToastContainer closeButton={false} />
        </div>
    );
};

export default JobApplicationsPage;
