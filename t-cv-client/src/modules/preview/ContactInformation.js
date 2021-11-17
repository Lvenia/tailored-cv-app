import React from 'react';

const ContactInformation = () => {
    const email = "xxxxxxxxxxxxxxxxxxxx@gmail.com";
    const phone = "+xxxxxxxxxxxx"
    return (
        <article className="contact-information">
            {/*<h2>Contact Information</h2>*/}
            <span>
                <h6>E-mail:</h6>
                <a href={`mailto:${email}`}>{email}</a>
            </span>
            <span>
                <h6>Phone:</h6>
                <a href={`tel:${phone}`}>{phone}</a>
            </span>
            <span>
                <h6>LinkedIn</h6>
                <a href="https://linkedin.com">LinkedIn</a>
            </span>
            <span>
                <h6>github</h6>
                <a href="https://github.com">github</a>
            </span>
        </article>
    )
};

export default ContactInformation;
