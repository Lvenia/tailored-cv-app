import React, { useReducer } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import {
  ADD_ENTRY,
  TOGGLE_SELECT,
  DELETE_ENTRY,
  EDIT_ENTRY,
  SAVE_CHANGES,
  DROP_CHANGES,
  TOGGLE_BULLET_SELECT
} from './modules/resume/consts';
// MODULES
import ResumePage from './modules/resume/pages/ResumePage';
import HeaderPage from './modules/resume/pages/HeaderPage';
import ExperiencePage from './modules/resume/pages/ExperiencePage';
import ContactPage from './modules/resume/pages/ContactPage';
import EducationPage from './modules/resume/pages/EducationPage'
import SummaryPage from './modules/resume/pages/SummaryPage';
import WorkExperiencePage from './modules/resume/pages/WorkExperiencePage';
import SkillsPage from './modules/resume/pages/SkillsPage';
import PreviewPage from './modules/preview/PreviewPage.js';
import HomePage from './modules/HomePage';
//COMPONENTS
import MainNavBar from './components/MainNavBar';
import NotFound from './components/NotFound';
//STYLES
import './App.css';
import { mockData } from './modules/resume/mockData';

const initialState = mockData;

export const AppContext = React.createContext(initialState);
//TODO: move reducer and initial state to separate file
const reducer = (state, action) => {

  const { item, isSelected, sectionName, id, entry, value, bulletId } = action.payload;

  switch (action.type) {
    case ADD_ENTRY:
      const entryToAdd = {
        item,
        isSelected
      };
      const afterAdd = state[sectionName].concat(entryToAdd);
      return {
        ...state,
        [sectionName]: afterAdd
      };
    case TOGGLE_SELECT:
      const afterToggle = state[sectionName].map(entry => {
        if (entry.item.id === id) {
          entry.isSelected = !entry.isSelected;
        }
        return entry;
      });
      return {
        ...state,
        [sectionName]: afterToggle
      };
    case TOGGLE_BULLET_SELECT:
      //replace entries bulletPoints with new value after toggle
      let targetToggleEntry = state[sectionName]?.find(entry => entry.item.id === id);
      targetToggleEntry.item.value.bulletPoints.forEach(bullet => {
        if (bullet.item.id === bulletId) {
          bullet.isSelected = !bullet.isSelected;
        }
      });
      //replace entry with new value (bullets toggled)
      const afterBulletToggle = state[sectionName].map(entry => {
        if (entry.item.id === id) {
          entry = targetToggleEntry;
        }
        return entry;
      });

      return {
        ...state,
        [sectionName]: afterBulletToggle
      };
    case EDIT_ENTRY:
      const editedEntry = {
        sectionName,
        entry
      };
      return {
        ...state,
        edited: editedEntry,
      };
    case SAVE_CHANGES:
      const editedEntryId = state.edited.entry.item.id;
      const afterSave = state[sectionName].map(entry => {
        const { id } = entry.item;
        if (id === editedEntryId) {
          entry.item.value = value;
        }
        return entry;
      });
      return {
        ...state,
        [sectionName]: afterSave,
        edited: {
          sectionName: null,
          entry: null,
        }
      };
    case DROP_CHANGES:
      return {
        ...state,
        edited: {
          sectionName: null,
          entry: null,
        }
      };
    case DELETE_ENTRY:
      const afterDelete = state[sectionName].filter(entry => entry.item.id !== id);
      return {
        ...state,
        [sectionName]: afterDelete
      };
    default:
      throw new Error('========Error from reducer=====');
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <React.StrictMode>
      <BrowserRouter>
        <MainNavBar/>
        <AppContext.Provider value={{ state, dispatch }}>
          <Routes>
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
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
