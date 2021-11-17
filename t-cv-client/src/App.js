import React, { useReducer } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
// MODULES
import ResumePage from "./modules/resume/ResumePage";
import HeaderPage from "./modules/resume/HeaderPage";
import CertificatesPage from "./modules/resume/CertificatesPage";
import ContactPage from "./modules/resume/ContactPage";
import EducationPage from "./modules/resume/EducationPage";
import SummaryPage from "./modules/resume/SummaryPage";
import ExperiencePage from "./modules/resume/ExperiencePage";
import SkillsPage from "./modules/resume/SkillsPage";
import PreviewPage from "./modules/preview/PreviewPage.js";
//COMPONENTS
import MainNavBar from "./components/MainNavBar";
import NotFound from "./components/NotFound";
//STYLES
import "./App.css";

export const AppContext = React.createContext({});

const reducer = (state, action) => {
    switch (action.type) {
        case 'TAILOR':
            return {...state, tailor: "HI"};
        case 'RESUME':
            return {...state, resume:"Hi"};
        case 'HEADER':
            return {...state, header:"Hi"};
        case 'CHILD':
            return {...state, child:"Hi"};
        default:
            throw new Error("========Error from reducer=====")
    }
}

const initialState = {};

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <React.StrictMode>
            <BrowserRouter>
                <MainNavBar/>
                <AppContext.Provider value={{state, dispatch}}>
                    <Routes>
                        <Route path="/" element={<main><h1>Go through settings, then print preview</h1></main>}/>
                        <Route path="resume-settings" element={<ResumePage/>}>
                            <Route path="header-settings" element={<HeaderPage/>}/>
                            <Route path="summary-settings" element={<SummaryPage/>}/>
                            <Route path="experience-settings" element={<ExperiencePage/>}/>
                            <Route path="education-settings" element={<EducationPage/>}/>
                            <Route path="certificates-settings" element={<CertificatesPage/>}/>
                            <Route path="contact-settings" element={<ContactPage/>}/>
                            <Route path="skills-settings" element={<SkillsPage/>}/>
                        </Route>
                        <Route path="preview" element={<PreviewPage/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </AppContext.Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default App;
