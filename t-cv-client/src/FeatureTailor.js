import React from 'react';
import {Link, Outlet} from "react-router-dom";

const FeatureTailor = () => {
    return (
        <main className="feature-container">
            <nav className="nav-bar tailor-nav-bar">
                <Link to="set-header">Header</Link>
                <Link to="set-resume-summary">Resume Summary</Link>
                <Link to="set-work-experience">Experience</Link>
                <Link to="set-education">Education</Link>
                <Link to="set-certificates">Certificates</Link>
                <Link to="set-contact-info">Contact Information</Link>
                <Link to="set-skills">Skills</Link>
            </nav>
            <Outlet/>
        </main>
    )
};

export default FeatureTailor;