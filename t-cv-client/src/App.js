import React, { useReducer } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import {
    ADD_ENTRY,
    DELETE_ENTRY,
    EDIT_ENTRY, generateId,
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
    //payload must be item {id, value} and sectionName
    const {item, selected, sectionName} = action.payload;
    // payload: {
    //     item: {
    //         id: generateId(),
    //           value,
    //           selected: false
    //     },
    //     sectionName
    // }

    switch (action.type) {
        case ADD_ENTRY:
            const entry = {
                item,
                selected
            };
            const newValues = state[sectionName].concat(entry);
            return {
                ...state,
                [sectionName]: newValues
            };
        // case SELECT_ENTRY:
        //     console.log(`access entry with ${id} to be selected`);
        //     const idsAfterSelect = state[name].selected.concat(id);
        //     return {
        //         ...state,
        //         [name]: {
        //             ...state[name],
        //             selected: idsAfterSelect
        //         }
        //     }
        // case UNSELECT_ENTRY:
        //     console.log(`access entry with ${id} to be unselected`);
        //     const idsAfterUnselect = state[name].selected.filter(el => el !== id);
        //     return {
        //         ...state,
        //         [name]: {
        //             ...state[name],
        //             selected: idsAfterUnselect
        //         }
        //     }
        // case EDIT_ENTRY:
        //     console.log(`access entry with ${id} ${value} ${name} to be edited`);
        //     //i have id="23", name="role" and value "Emperor"
        //   const updatedHistory = state[name].history.map(el => {
        //       if (el.id === id) {
        //           el.value = 'new value';
        //       }
        //       return el;
        //   })
        //   return {
        //       ...state,
        //      [name]: {
        //           ...state[name],
        //          history: updatedHistory
        //      }
        //   }
        //   //[x] find that entry in history and set its value to ""
        //   //send value to form, make it available to edit
        //   //change button from add to save
        //   //onsave rewrite history with that id
        //
        //
        //
        // case DELETE_ENTRY:
        //     console.log(`access entry with ${id} to be deleted`);
        //     return state;
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
