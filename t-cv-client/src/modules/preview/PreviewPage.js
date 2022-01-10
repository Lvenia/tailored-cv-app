import React from 'react';

import Header from './Header';
import Summary from './Summary';
import WorkExperience from './WorkExperience';
import Education from './Education';
import ContactInformation from './ContactInformation';
import Skills from './Skills';
import Experience from './Experiece';

const PreviewPage = () => {
  return (
    <div className="wrapper">
      <main className="preview-container">
        <div id="header">
          <Header/>
          <ContactInformation/>
        </div>
        <div id="about-me">
          {/*add image*/}
          <Summary/>
        </div>
        <div id="preview-body">
          <div className="row">
            <div className="left">
              <Skills/>
            </div>
            <div className="right">
              <Experience/>
            </div>
          </div>
          <div className="row">
            <div className="left">
            </div>
            <div className="right">
              <WorkExperience/>
              <Education/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PreviewPage;
