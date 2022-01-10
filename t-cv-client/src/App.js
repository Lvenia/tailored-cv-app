import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import MainNavBar from './components/MainNavBar';
import {initialState, reducer } from './reducer';
import './App.css';

export const AppContext = React.createContext(initialState);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <React.StrictMode>
      <BrowserRouter>
        <MainNavBar/>
        <AppContext.Provider value={{ state, dispatch }}>
          <Routes/>
        </AppContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
