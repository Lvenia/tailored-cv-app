import React from 'react';
import { Link } from 'react-router-dom';

const MainNavBar = () => {
    return (
        <nav>
            <Link to="/feature-tailor">Feature Tailor</Link>
            <Link to="/resume">Resume</Link>
        </nav>
    )
};

export default MainNavBar;