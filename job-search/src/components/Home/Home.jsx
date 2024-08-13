import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Bookmark from "../Bookmark/Bookmark";
import "./Home.css";

import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faSlideshare,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
    faBuilding,
    faHandPeace,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";


export const Banner = () => (
    <div className="banner text-center">
        <h1>
            <span style={{ color: "aqua", fontSize: "1.7em" }}>1000+</span> Jobs on
            GetMeHired Site
        </h1>
        <p>
            With verified, up-to-date job listings directly from employer websites,
            <br />
            we create a premium experience for job seekers and employers,
            <br />
            Quickly find and apply for the jobs you want
        </p>
    </div>
);

export const SearchBox = () => (
    <div className="search-job text-center">
        <input
            type="text"
            className="form-control"
            placeholder="Skills, Job Title, Designation"
        />
        <input type="text" className="form-control" placeholder="Location" />
        <input type="text" className="form-control" placeholder="Experience" />
        <input type="button" className="btn btn-primary" value="Search" />
    </div>
);

export const TopRecruiters = () => (
    <section id="recruiters">
        <div className="container text-center">
            <h3>TOP RECRUITERS</h3>
            <div>
                <img
                    src="https://i.gadgets360cdn.com/large/oracle_reuters_full_1570520864400.JPG?output-quality=80&output-format=webp"
                    alt="Oracle"
                />
                <img
                    src="https://img.etimg.com/thumb/msid-65905312,width-300,imgsize-269627,,resizemode-4,quality-100/zomato.jpg"
                    alt="Zomato"
                />
                <img
                    src="https://www.oneindia.com/img/2017/07/swiggy-19-1500443913.jpg"
                    alt="Swiggy"
                />
                <img
                    src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_rkna5p3b/def_height/67/def_width/200/version/100031/type/1"
                    alt="TCS"
                />
                <img
                    src="data:image/png;base64,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"
                    alt="Wipro"
                />
                <img
                    src="data:image/png;base64,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"
                    alt="Amazon"
                />
            </div>
        </div>
    </section>
);

export const JobCategory = ({ title, items }) => (
    <div className="jobcategory category">
        <h5 className="side-title">{title}</h5>
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <a href="" title="">
                        {item} <span className="pull-right">13</span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export const Categories = () => (
    <section className="category">
        <div className="container text-left">
            <h3 className="text-center">Jobs by Category</h3>
            <div className="row">
                <div className="col-md-12 categories">
                    <JobCategory
                        title="Jobs by Skills"
                        items={[
                            "Business",
                            "Technology",
                            "Web",
                            "Ecommerce",
                            "Wordpress",
                            "Android",
                            "iOS",
                            "Windows",
                        ]}
                    />
                    <JobCategory
                        title="Jobs by Location"
                        items={[
                            "Delhi",
                            "Chennai",
                            "Mumbai",
                            "Bangalore",
                            "Kolkata",
                            "Pune",
                            "Punjab",
                            "Hyderabad",
                        ]}
                    />
                    <JobCategory
                        title="Job Types"
                        items={[
                            "Freshers Job",
                            "Freelancing",
                            "Unpaid Internships",
                            "Paid Internships",
                            "Work From Home",
                            "Remote Work",
                            "Walk-in",
                            "Contract",
                        ]}
                    />
                    <JobCategory
                        title="Jobs by Role"
                        items={[
                            "Team Leader",
                            "Manager",
                            "Vice President",
                            "Software Developer",
                            "Graphic Designer",
                            "Accountant",
                            "Front End Developer",
                            "Back End Developer",
                        ]}
                    />
                </div>
            </div>
        </div>
    </section>
);

export const RecentJobUpdate = ({ title, company, description }) => (
    <div className="recent-job-update text-left">
        <h4>{title}</h4>
        <h5>{company}</h5>
        <p>{description}</p>
        <Bookmark />
        <input type="button" className="btn btn-primary" value="Apply"  />
    </div>
);


const jobData = [
    {
        title: "Junior Python Developer",
        company: "Google",
        experience: "0-1 years",
        salary: "4.00 - 5.00 L.P.A",
        location: "Delhi",
        skills: ["Python", "Web Scraping", "Django", "Flask"],
        description:
            "Works independently under limited supervision and applies knowledge of subject matter in Applications Development. Possess sufficient knowledge and skills to effectively deal with issues, challenges within field of specialization to develop simple applications solutions. Second level professional with direct impact on results and outcome.",
    },
    {
        title: "Machine Learning Engineer",
        company: "ABC Tech Solutions",
        experience: "2-4 years",
        salary: "8.00 - 12.00 L.P.A",
        location: "Bangalore",
        skills: ["Python", "TensorFlow", "Keras", "PyTorch", "Machine Learning"],
        description:
            "As a Machine Learning Engineer, you will be responsible for designing, developing, and implementing machine learning models to solve complex business problems. You will work closely with data scientists and software engineers to integrate models into production systems. Key responsibilities include data preprocessing, feature engineering, model selection and tuning, and deploying machine learning solutions at scale. This role requires a deep understanding of machine learning algorithms, strong programming skills, and the ability to work in a collaborative environment.",
    },
    {
        title: "Senior Data Engineer",
        company: "Nvidia",
        experience: "5-6 years",
        salary: "14.00 - 20.00 L.P.A",
        location: "California",
        skills: ["Linux", "SQL/NoSQL", "Docker", "Kubernotes", "Machine Learning"],
        description:
            "As a  Senior Data Engineer designs, builds, and maintains the infrastructure and tools needed to handle large datasets. They develop ETL processes, ensure data quality, and deploy machine learning models to production, supporting data-driven decision-making..",
    },
];
export const RecentUpdates = () => {
    const navigate = useNavigate();
    return (
        <section id="jobs">
            <div className="container">
                <h5>RECENT JOB UPDATES</h5>
                {jobData.map((job, index) => (
                    <div className="company-details" key={index}>
                        <div className="job-update">
                            <h4>
                                <strong>{job.title}</strong>
                                <i className="fa fa-heart-o bookmark"></i>
                            </h4>
                            <h6>{job.company}</h6>
                            <i className="fa fa-briefcase"></i>
                            <span>{job.experience}</span>
                            <br />
                            <i className="fa fa-inr"></i>
                            <span className="price">{job.salary}</span>
                            <br />
                            <i className="fa fa-map-marker"></i>
                            <span className="location">{job.location}</span>
                            <p>
                                <strong>Skills</strong>{" "}
                                <i className="fa fa-angle-double-right"></i>
                                {job.skills.map((skill, i) => (
                                    <small key={i}>{skill}</small>
                                ))}
                            </p>
                            <p className="description">
                                <strong>Description</strong>{" "}
                                <i className="fa fa-angle-double-right"></i>
                                {job.description} <a href="#">Read More</a>
                            </p>
                        </div>
                        <div className="apply-btn">
                            <button type="button" className="btn btn-primary" target="_blank" onClick={() => navigate('/application')}>
                                Apply
                            </button>
                        </div>
                    </div>
                ))}
                <ul className="pagelink text-center">
                    <li className="right-arrow">&#8592;</li>
                    <li className="active">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li className="right-arrow">&#8594;</li>
                </ul>
            </div>
        </section>
    );
}

export const SiteStats = () => (
    <section id="site-stats">
        <div className="container text-center">
            <h3>JOBSITE STATS</h3>
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="stats-box">
                                <FontAwesomeIcon icon={faUser} className="fa" />
                                <span>
                                    <small>100k+</small>
                                </span>
                                <p>Job Seekers</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="stats-box">
                                <FontAwesomeIcon icon={faSlideshare} className="fa" />
                                <span>
                                    <small>500k+</small>
                                </span>
                                <p>Recruiters</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="stats-box">
                                <FontAwesomeIcon icon={faHandPeace} className="fa" />
                                <span>
                                    <small>100k+</small>
                                </span>
                                <p>Active Jobs</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="stats-box">
                                <FontAwesomeIcon icon={faBuilding} className="fa" />
                                <span>
                                    <small>20k+</small>
                                </span>
                                <p>Companies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export const Footer = () => {
    return (
        <footer className="page-footer font-small blue-grey lighten-5">
            {/* Footer Links */}
            <div className="container text-center text-md-left mt-3 pt-5">
                {/* Grid row */}
                <div className="row mt-3 dark-grey-text">
                    {/* Grid column */}
                    <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                        {/* Links */}
                        <h6 className="text-uppercase font-weight-bold text-light">
                            Information
                        </h6>
                        <hr
                            className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                            style={{ width: "60px" }}
                        />
                        <p>
                            <a className="dark-grey-text" href="#!">
                                About Us
                            </a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">
                                Contact Us
                            </a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">
                                Terms Of Use
                            </a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">
                                FAQs
                            </a>
                        </p>
                    </div>
                    {/* Grid column */}

                    {/* Grid column */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        {/* Links */}
                        <h6 className="text-uppercase font-weight-bold text-light">
                            Job Seekers
                        </h6>
                        <hr
                            className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                            style={{ width: "60px" }}
                        />
                        <p>
                            <a className="dark-grey-text" href="#!">
                                Job Search
                            </a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">
                                Career Advice
                            </a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">
                                Resume Builder
                            </a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">
                                Report a Problem
                            </a>
                        </p>
                    </div>
                    {/* Grid column */}

                    {/* Grid column */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        {/* Links */}
                        <h6 className="text-uppercase font-weight-bold text-light">
                            Employers
                        </h6>
                        <hr
                            className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                            style={{ width: "60px" }}
                        />
                        <p>
                            <a className="dark-grey-text" href="#!">
                                Job Posting
                            </a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">
                                Advertise With Us
                            </a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">
                                Access Resumes
                            </a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">
                                FAQs
                            </a>
                        </p>
                    </div>
                    {/* Grid column */}

                    {/* Grid column */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        {/* Links */}
                        <h6 className="text-uppercase font-weight-bold text-light">
                            Stay Connected
                        </h6>
                        <hr
                            className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                            style={{ width: "60px" }}
                        />
                        {/* Social Media Icons */}
                        <p>
                            <a className="fb-ic no-decor" href="#!">
                                <FontAwesomeIcon
                                    icon={faFacebookF}
                                    className="white-text mr-4 text-light"
                                />
                                <span className="icon_name">Facebook</span>
                            </a>
                        </p>
                        <p>
                            <a className="tw-ic no-decor" href="#!">
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    className="white-text mr-4 text-light"
                                />
                                <span className="icon_name">Twitter</span>
                            </a>
                        </p>
                        <p>
                            <a className="li-ic no-decor" href="#!">
                                <FontAwesomeIcon
                                    icon={faLinkedinIn}
                                    className="white-text mr-4 text-light"
                                />
                                <span className="icon_name">LinkedIn</span>
                            </a>
                        </p>
                        <p>
                            <a className="ins-ic no-decor" href="#!">
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className="white-text text-light"
                                />
                                <span className="icon_name">Instagram</span>
                            </a>
                        </p>
                    </div>
                    {/* Grid column */}
                </div>
                {/* Grid row */}
            </div>
            {/* Footer Links */}

            {/* Copyright */}
            <div className="footer-copyright text-center text-black-50 py-3 text-light">
                
                <a className="dark-grey-text" href="#">
                    {" "}
                    Job Searching Portal
                </a>
            </div>
            {/* Copyright */}
        </footer>
    );
};

