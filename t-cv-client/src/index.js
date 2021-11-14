import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import App from './App';
import MainNavBar from "./MainNavBar";
import FeatureTailor from "./FeatureTailor";
import Resume from "./Resume";

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <MainNavBar/>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/feature-tailor" element={<FeatureTailor/>}/>
            <Route path="/resume" element={<Resume/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
