import React from 'react';
// import Certificates from "./resume-sections/Certificates";
import Header from "./resume-sections/Header";
import ResumeSummary from "./resume-sections/ResumeSummary";
import WorkExperience from "./resume-sections/WorkExperience";
import Education from "./resume-sections/Education";
import ContactInformation from "./resume-sections/ContactInformation";
import Skills from "./resume-sections/Skills";

const Resume = () => {
    return (
        <main className="cv-container">
            {<Header/>}
            {<ResumeSummary/>}
            <div className="cv-content">
                <section className="left">
                    {<WorkExperience/>}
                    {<Education/>}
                    {/*{<Certificates/>}*/}
                </section>
                <section className="right">
                    {<ContactInformation/>}
                    {<Skills/>}
                </section>
            </div>
        </main>
    )
};

export default Resume;