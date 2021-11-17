import React from 'react';

const Header = () => {


    const firstName = "firstName";
    const lastName = "lastName";
    const jobTitle = "Web Developer";

    return (
        <article className="cv-header">
            <h1>{firstName} {lastName}</h1>
            <h2>{jobTitle}</h2>
        </article>
    )
}

export default Header;
