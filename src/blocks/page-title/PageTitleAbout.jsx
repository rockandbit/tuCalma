import React from 'react';
import content from "../../data/content/about.json";

const PageTitleAbout = () => {
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

export default PageTitleAbout;
