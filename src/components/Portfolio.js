import React from 'react';
import Project from './Project';

const projects = [
    {
        id: 1,
        title: "Note-Tracker",
        image: "src\assets\note-tracker.png",
        repo: "https://github.com/kristyvanatta/Note-Tracker",
        live: "https://rocky-temple-57637.herokuapp.com/",
    },
    {
        id: 2,
        title: "E-Commerce",
        image: "",
        repo: "https://github.com/kristyvanatta/e-commerce",
        live: "https://drive.google.com/file/d/1cslbSqJPHM_OmDDYVGtGok5hC-xzcAOa/view",
    },
    {
        id: 3,
        title: "Text-Editor",
        image: "",
        repo: "https://github.com/kristyvanatta/Progressive-Web-App",
        live: "https://afternoon-chamber-54020.herokuapp.com/",
    },
    {
        id: 4,
        title: "Password-Generator",
        image: "",
        repo: "https://github.com/kristyvanatta/password-generator",
        live: "https://kristyvanatta.github.io/password-generator/",
    },
    {
        id: 5,
        title: "Weather-Dashboard",
        image: "",
        repo: "https://github.com/kristyvanatta/Weather-Dashboard",
        live: "https://kristyvanatta.github.io/Weather-Dashboard/",
    },
    {
        id: 6,
        title: "READme Generator",
        image: "",
        repo: "https://github.com/kristyvanatta/README_Generator",
        live: "https://drive.google.com/file/d/1LFPwUc3_FjHPuSNyoNU4tj2Gknow9FWH/view",
    },
];

function Portofolio() {
    return (
        <div>
            <p className="content is-medium">Portfolio</p>
            <hr />

            <Project projects={projects} />
        </div>
    );
}

export default Portofolio;