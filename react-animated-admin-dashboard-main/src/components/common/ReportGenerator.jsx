import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import './ReportGenerator.css';

const ReportGenerator = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await fetch('http://localhost:8080/api/jobs', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Job Report", 20, 20);
    doc.setFontSize(12);
  
    jobs.forEach((job, index) => {
      const yPosition = 30 + (index * 70);  // Adjust spacing between jobs
      doc.text(`Job Title: ${job.jobTitle}`, 20, yPosition);
      doc.text(`Job Type: ${job.jobType}`, 20, yPosition + 10);
      doc.text(`Job Category: ${job.jobCategory}`, 20, yPosition + 20);
      doc.text(`Salary: ${job.salary}`, 20, yPosition + 30);
      doc.text(`Location: ${job.location}`, 20, yPosition + 40);
      doc.text(`Description: ${job.jobDescription}`, 20, yPosition + 50);
      doc.text('---', 20, yPosition + 60);  // Separator
    });
  
    doc.save('jobs_report.pdf');
  };
  

  return (
    <div className="report-generator">
      <h2>Generate Job Report</h2>
      <button className="download-button" onClick={generatePDF}>Download Report</button>
    </div>
  );
};

export default ReportGenerator;
