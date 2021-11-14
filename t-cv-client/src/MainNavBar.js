import React from 'react';
import { Link } from 'react-router-dom';

const MainNavBar = () => {
    return (
        <nav class="nav-bar main-nav-bar">
            <Link to="/">Home</Link>
            <Link to="/feature-tailor">Feature Tailor</Link>
            <Link to="/resume">Resume</Link>
        </nav>
    )
};

export default MainNavBar;