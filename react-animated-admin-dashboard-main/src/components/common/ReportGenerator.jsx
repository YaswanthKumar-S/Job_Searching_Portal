import React from 'react';
import jsPDF from 'jspdf';
import './ReportGenerator.css';

const ReportGenerator = () => {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.text("User Report", 20, 20);
    doc.text("Name: Surya", 20, 30);
    doc.text("Email: Surya@gmail.com", 20, 40);

    doc.save('report.pdf');
  };

  return (
    <div className="report-generator">
      <h2>Generate Report</h2>
      <button onClick={generatePDF}>Download Report</button>
    </div>
  );
};

export default ReportGenerator;
