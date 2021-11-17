import React from 'react';
import { Link, Outlet } from "react-router-dom";


const ResumePage = () => {
    return (
        <main className="feature-container">
            <nav className="nav-bar tailor-nav-bar">
                <Link to="header-settings">Header</Link>
                <Link to="summary-settings">Resume Summary</Link>
                <Link to="experience-settings">Experience</Link>
                <Link to="education-settings">Education</Link>
                <Link to="certificates-settings">Certificates</Link>
                <Link to="contact-settings">Contact Information</Link>
                <Link to="skills-settings">Skills</Link>
            </nav>
            <Outlet/>
        </main>
    )
};

export default ResumePage;
