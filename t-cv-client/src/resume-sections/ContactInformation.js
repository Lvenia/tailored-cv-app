import React from 'react';

const ContactInformation = () => {
    const email = "kresi.ira@gmail.com";
    const phone = "+4792228602"
    return (
        <article>
            <h2>Contact Information</h2>
            <h6>Email</h6>
            <a href={`mailto:${email}`}>
                <p>{email}</p>
            </a>
            <h6>Phone number</h6>
            <a href={`tel:${phone}`}>
                <p>{phone}</p>
            </a>
            <h6>LinkedIn</h6>
            <a href="https://linkedin.com">
                <p>LinkedIn</p>
            </a>
            <h6>github</h6>
            <a href="https://github.com">
                <p>github</p>
            </a>
        </article>
    )
};

export default ContactInformation;