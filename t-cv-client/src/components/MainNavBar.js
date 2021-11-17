import React from 'react';
import { Link } from 'react-router-dom';

const MainNavBar = () => {
    return (
        <nav className="nav-bar main-nav-bar">
            <Link to="/">Home</Link>
            <Link to="/resume-settings">Resume Settings</Link>
            <Link to="/preview">Resume Preview</Link>
        </nav>
    )
};

export default MainNavBar;