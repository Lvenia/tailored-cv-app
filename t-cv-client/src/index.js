import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route, Link
} from "react-router-dom";

import App from './App';
import MainNavBar from "./MainNavBar";
import FeatureTailor from "./FeatureTailor";
import Resume from "./Resume";

import './index.css';
import Header from "./tailor-components/Header";
import Objective from "./tailor-components/Objective";
import Experience from "./tailor-components/Experience";
import Education from "./tailor-components/Education";
import Certificates from "./tailor-components/Certificates";
import PersonalInfo from "./tailor-components/PerosnalInfo";
import Skills from "./tailor-components/Skills";
import Interests from "./tailor-components/Interests";
import NotFound from "./NotFound";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <MainNavBar/>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="feature-tailor" element={<FeatureTailor/>}>
                <Route path="header" element={<Header/>}/>
                <Route path="objective" element={<Objective/>}/>
                <Route path="experience" element={<Experience/>}/>
                <Route path="education" element={<Education/>}/>
                <Route path="certificates" element={<Certificates/>}/>
                <Route path="personal-info" element={<PersonalInfo/>}/>
                <Route path="skills" element={<Skills/>}/>
                <Route path="interests" element={<Interests/>}/>
            </Route>
            <Route path="resume" element={<Resume/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
