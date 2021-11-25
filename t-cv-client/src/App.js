import React, { useReducer } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import {
    ADD_ENTRY,
    DELETE_ENTRY,
    EDIT_ENTRY,
    SELECT_ENTRY,
    UNSELECT_ENTRY,
} from './modules/resume/consts'
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
import { mockData } from "./modules/resume/mockData";

// const initialState = {
// name: {
//     history: [{}{} ],
//     selected: [id]
// },
// role: {
//     history: [ ],
//     selected: [id]
// },
// }
// }

const initialState = mockData;

export const AppContext = React.createContext({});
//TODO: move reducer and initial state to separate file
const reducer = (state, action) => {
    const {id, name, value} = action.payload;

    switch (action.type) {
        case ADD_ENTRY:
            const newValues = state[name].history.concat({ id, value });
            return {
                ...state,
                [name]: {
                    ...state[name],
                    history: newValues
                }
            };
        case SELECT_ENTRY:
            console.log(`access entry with ${id} to be selected`);
            const idsAfterSelect = state[name].selected.concat(id);
            return {
                ...state,
                [name]: {
                    ...state[name],
                    selected: idsAfterSelect
                }
            }
        case UNSELECT_ENTRY:
            console.log(`access entry with ${id} to be unselected`);
            const idsAfterUnselect = state[name].selected.filter(el => el !== id);
            return {
                ...state,
                [name]: {
                    ...state[name],
                    selected: idsAfterUnselect
                }
            }
        case EDIT_ENTRY:
            console.log(`access entry with ${id} to be edited`);
            return state;
        case DELETE_ENTRY:
            console.log(`access entry with ${id} to be deleted`);
            return state;
        default:
            throw new Error("========Error from reducer=====")
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <React.StrictMode>
            <BrowserRouter>
                <MainNavBar/>
                <AppContext.Provider value={{state, dispatch}}>
                    <Routes>
                        <Route path="/" element={<main><section>Go through settings, then print preview</section></main>}/>
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
