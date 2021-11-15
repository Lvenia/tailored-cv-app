import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import App from './App';
import MainNavBar from "./MainNavBar";
import FeatureTailor from "./FeatureTailor";
import Resume from "./Resume";
import NotFound from "./NotFound";
import SetHeader from "./tailor-resume-sections/SetHeader";
import SetResumeSummary from "./tailor-resume-sections/SetResumeSummary";
import SetWorkExperience from "./tailor-resume-sections/SetWorkExperience";
import SetEducation from "./tailor-resume-sections/SetEducation";
import SetCertificates from "./tailor-resume-sections/SetCertificates";
import SetContactInformation from "./tailor-resume-sections/SetContactInformation";
import SetSkills from "./tailor-resume-sections/SetSkills";

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <MainNavBar/>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="feature-tailor" element={<FeatureTailor/>}>
                <Route path="set-header" element={<SetHeader/>}/>
                <Route path="set-resume-summary" element={<SetResumeSummary/>}/>
                <Route path="set-work-experience" element={<SetWorkExperience/>}/>
                <Route path="set-education" element={<SetEducation/>}/>
                <Route path="set-certificates" element={<SetCertificates/>}/>
                <Route path="set-contact-info" element={<SetContactInformation/>}/>
                <Route path="set-skills" element={<SetSkills/>}/>
            </Route>
            <Route path="resume" element={<Resume/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
