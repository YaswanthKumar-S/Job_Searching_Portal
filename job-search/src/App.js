import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assests/css/App.css";
import AboutMerge from "./components/AboutMerge/AboutMerge";
import ApplicationForm from "./components/ApplicationForm/ApplicationForm";
import CandidatePage from "./components/Candidate/CandidatePage";
import CandidateLoginForm from "./components/CandidateLoginForm/CandidateLoginForm";
import ContactUs from "./components/Contact/ContactForm";
import EmployerLoginForm from "./components/EmployerLoginForm/EmployerLoginForm";
import MergePages from "./components/Merge/MergePages";
import Navigation from "./components/Navbar/Navigation";
import CompanyHome from "./components/Company/CompanyHome";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<MergePages />} />
        <Route path="/candidate-login" element={<CandidateLoginForm />} />
        <Route path="/employee-login" element={<EmployerLoginForm />} />
        <Route path="/apply/:jobId" element={<ApplicationForm />} />
        <Route path="/about" element={<AboutMerge />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/application" element={<ApplicationForm />} />
        <Route path="/candidate-home" element={<CandidatePage />} />
        <Route path="/company-home" element={<CompanyHome />} />
        
      </Routes>
    </div>
  );
}

export default App;
