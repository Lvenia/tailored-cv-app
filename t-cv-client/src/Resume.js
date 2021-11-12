import React from 'react';

const Resume = () => {
    return (
        <main className="cv-container">
            <header className="cv-header">
                Header
            </header>
            <div className="cv-content">
                <section className="left">
                    <article>
                        <h2>Resume objective/ resume summary</h2>
                    </article>
                    <article>
                        <h2>Experience</h2>
                    </article>
                    <article>
                        <h2>Education</h2>
                    </article>
                    <article>
                        <h2>Certificates</h2>
                    </article>
                </section>
                <section className="right">
                    <article>
                        <h2>Personal Info</h2>
                    </article>
                    <article>
                        <h2>Skills</h2>
                    </article>
                    <article>
                        <h2>Interests</h2>
                    </article>
                </section>
            </div>
        </main>
    )
};

export default Resume;