import React from 'react';
import {Link, Outlet} from "react-router-dom";

const FeatureTailor = () => {
    return (
        <main className="feature-container">
            <nav className="nav-bar tailor-nav-bar">
                <Link to="header">Header</Link>
                <Link to="objective">Objective</Link>
                <Link to="experience">Experience</Link>
                <Link to="education">Education</Link>
                <Link to="certificates">Certificates</Link>
                <Link to="personal-info">Personal Info</Link>
                <Link to="skills">Skills</Link>
                <Link to="interests">Interests</Link>
            </nav>
            <Outlet/>
        </main>
    )
};

export default FeatureTailor;