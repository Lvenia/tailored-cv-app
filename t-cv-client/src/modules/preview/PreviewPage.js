import React from 'react';
import Header from "./Header";
import Summary from "./Summary";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import ContactInformation from "./ContactInformation";
import Skills from "./Skills";
import Experience from './Experiece';

const PreviewPage = () => {
    return (
        <main className="preview-container">
            <div id="header">
                {<Header/>}
                {<ContactInformation/>}
            </div>
            <div id="about-me">
                {/*add image*/}
                {<Summary/>}
            </div>
            <div id="preview-body">
              <div  className="row">
                <div className="left">
                  {<Skills/>}
                </div>
                <div className="right">
                  {/*{<Experience/>}*/}
                </div>
              </div>
              <div  className="row">
                {/*lang + work and education*/}
              </div>
                {/*<section className="left">*/}
                {/*    {<Experience/>}*/}
                {/*    {<WorkExperience/>}*/}
                {/*    {<Education/>}*/}
                {/*</section>*/}
                {/*<section className="right">*/}
                {/*    {<Skills/>}*/}
                {/*</section>*/}
            </div>
        </main>
    )
};

export default PreviewPage;
