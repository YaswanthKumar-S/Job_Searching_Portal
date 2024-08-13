import React from 'react';
import './Faq.css';

const FAQ = () => {
  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>How can I create a profile?</h3>
        <p>To create a profile, click on the "Sign Up" button on the home page and fill in the required details.</p>
      </div>
      <div className="faq-item">
        <h3>How do I apply for a job?</h3>
        <p>Once you've found a job you're interested in, click on the "Apply Now" button and follow the instructions.</p>
      </div>
      <div className="faq-item">
        <h3>Can employers contact me directly?</h3>
        <p>Yes, employers can contact you directly through our messaging system if they are interested in your profile.</p>
      </div>
      <div className="faq-item">
        <h3>Is there a fee to use the platform?</h3>
        <p>No, creating a profile and applying for jobs is completely free for job seekers.</p>
      </div>
    </div>
  );
};

export default FAQ;
