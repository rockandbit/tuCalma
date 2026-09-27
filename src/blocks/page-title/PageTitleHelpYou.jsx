import React from 'react';
import content from "../../data/content/help-you.json";

const PageTitleHelpYou = () => {
    return (
        <section id="page-title">
            <div className="wrapper">
                <div className="title position-relative">
                    <h1>{content.pageTitle}<span className="dot">.</span></h1>

                    <div className="title-clone">{content.titleClone}</div>
                </div>
            </div>
        </section>
    );
};

export default PageTitleHelpYou;
