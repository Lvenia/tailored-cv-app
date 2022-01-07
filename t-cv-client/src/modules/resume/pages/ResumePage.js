import React from 'react';
import { Link, Outlet } from "react-router-dom";

const ResumePage = () => {
  return (
    <main className="resume-main">
      <nav className="resume-nav">
        <Link to="header-settings">Header</Link>
        <Link to="contact-settings">Contact Information</Link>
        <Link to="summary-settings">Resume Summary</Link>
        <Link to="experience-settings">Experience</Link>
        <Link to="work-experience-settings">Work Experience</Link>
        <Link to="education-settings">Education</Link>
        <Link to="skills-settings">Skills</Link>
      </nav>
      <section>
        <Outlet/>
      </section>
    </main>
  )
};

export default ResumePage;
