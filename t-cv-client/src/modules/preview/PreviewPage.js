import React, { useContext } from 'react';
import {AppContext} from '../../App';
import Header from "./Header";
import Summary from "./Summary";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import ContactInformation from "./ContactInformation";
import Skills from "./Skills";
import Experience from './Experiece';

const PreviewPage = () => {
    const { state } = useContext(AppContext);
    console.log(state)
    console.log("global app state is accessible from PreviewPage");

    return (
        <main className="preview-container">
            {<Header/>}
            {<ContactInformation/>}
            {<Summary/>}
            <div className="cv-content">
                <section className="left">
                    {<Experience/>}
                    {<WorkExperience/>}
                    {<Education/>}
                </section>
                <section className="right">
                    {<Skills/>}
                </section>
            </div>
        </main>
    )
};

export default PreviewPage;
