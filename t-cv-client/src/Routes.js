import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import HomePage from './modules/HomePage';
import ResumePage from './modules/resume/pages/ResumePage';
import HeaderPage from './modules/resume/pages/HeaderPage';
import SummaryPage from './modules/resume/pages/SummaryPage';
import WorkExperiencePage from './modules/resume/pages/WorkExperiencePage';
import EducationPage from './modules/resume/pages/EducationPage';
import ExperiencePage from './modules/resume/pages/ExperiencePage';
import ContactPage from './modules/resume/pages/ContactPage';
import SkillsPage from './modules/resume/pages/SkillsPage';
import PreviewPage from './modules/preview/PreviewPage';
import NotFoundPage from './modules/NotFoundPage';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="resume-settings" element={<ResumePage/>}>
        <Route path="header-settings" element={<HeaderPage/>}/>
        <Route path="summary-settings" element={<SummaryPage/>}/>
        <Route path="work-experience-settings" element={<WorkExperiencePage/>}/>
        <Route path="education-settings" element={<EducationPage/>}/>
        <Route path="experience-settings" element={<ExperiencePage/>}/>
        <Route path="contact-settings" element={<ContactPage/>}/>
        <Route path="skills-settings" element={<SkillsPage/>}/>
      </Route>
      <Route path="preview" element={<PreviewPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </ReactRoutes>
  );
};

export default Routes;
