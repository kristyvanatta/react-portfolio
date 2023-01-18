import React from 'react';
import Project from './Project';
import note from '../../src/assets/note-tracker.png';
import commerce from '../../src/assets/e-commerce.gif';
import text from '../../src/assets/text-editor.gif';
import password from '../../src/assets/password-generator.png';
import weather from '../../src/assets/weather-dashboard.png';
import read from '../../src/assets/readme-generator.png';



const projects = [
    {
        id: 1,
        title: "Note-Tracker",
        description:"This application allows you to save notes",
        image: note,
        repo: "https://github.com/kristyvanatta/Note-Tracker",
        live: "https://rocky-temple-57637.herokuapp.com/",
    },
    {
        id: 2,
        title: "E-Commerce",
        description: "This app is the back-end of an e-commerce database",
        image: commerce,
        repo: "https://github.com/kristyvanatta/e-commerce",
        live: "https://drive.google.com/file/d/1cslbSqJPHM_OmDDYVGtGok5hC-xzcAOa/view",
    },
    {
        id: 3,
        title: "Text-Editor",
        description: "This app is a text-editor that meets PWA criteria",
        image: text,
        repo: "https://github.com/kristyvanatta/Progressive-Web-App",
        live: "https://afternoon-chamber-54020.herokuapp.com/",
    },
    {
        id: 4,
        title: "Password-Generator",
        description: "This app will help you generate a random password that meets the given criteria",
        image: password,
        repo: "https://github.com/kristyvanatta/password-generator",
        live: "https://kristyvanatta.github.io/password-generator/",
    },
    {
        id: 5,
        title: "Weather-Dashboard",
        description: "This app shows you the current and forcasted weather for the city the user inputs",
        image: weather,
        repo: "https://github.com/kristyvanatta/Weather-Dashboard",
        live: "https://kristyvanatta.github.io/Weather-Dashboard/",
    },
    {
        id: 6,
        title: "READme Generator",
        description: "Create a professional README quickly",
        image: read,
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