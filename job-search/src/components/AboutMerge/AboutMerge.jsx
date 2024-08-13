import React from "react";
import AboutPage from "../About/AboutPage";
import FAQ from "../Faqs/Faq";
import "./AboutMerge.css";

const AboutMerge = () => {
    return (
        <div>
            <header className="App-header">
                <AboutPage />
            </header>
            <footer className="App-footer">
                <FAQ />
            </footer>
        </div>
    );
};

export default AboutMerge;
