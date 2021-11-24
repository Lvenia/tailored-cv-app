import React, { useContext } from 'react';
import {AppContext} from '../../App';
import Certificates from "./Certificates";
import Header from "./Header";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import ContactInformation from "./ContactInformation";
import Skills from "./Skills";

const PreviewPage = () => {
    const { state } = useContext(AppContext);
    console.log(state)
    console.log("global app state is accessible from PreviewPage");

    return (
        <main className="preview-container">
            {<Header/>}
            {<ContactInformation/>}
            {<Summary/>}
            <div className="cv-content">
                <section className="left">
                    {<Experience/>}
                    {<Education/>}
                    {<Certificates/>}
                </section>
                <section className="right">
                    {<Skills/>}
                </section>
            </div>
        </main>
    )
};

export default PreviewPage;
