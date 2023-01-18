import React from 'react';
import Project from './Project';


const projects = [
    {
        id: 1,
        title: "Note-Tracker",
        description:"This application allows you to save notes",
        image: "https://github.com/kristyvanatta/Note-Tracker/blob/main/Assets/11-express-homework-demo-01.png",
        repo: "https://github.com/kristyvanatta/Note-Tracker",
        live: "https://rocky-temple-57637.herokuapp.com/",
    },
    {
        id: 2,
        title: "E-Commerce",
        description: "This app is the back-end of an e-commerce database",
        image: "src\assets\e-commerce.gif",
        repo: "https://github.com/kristyvanatta/e-commerce",
        live: "https://drive.google.com/file/d/1cslbSqJPHM_OmDDYVGtGok5hC-xzcAOa/view",
    },
    {
        id: 3,
        title: "Text-Editor",
        description: "This app is a text-editor that meets PWA criteria",
        image: "src\assets\text-editor.gif",
        repo: "https://github.com/kristyvanatta/Progressive-Web-App",
        live: "https://afternoon-chamber-54020.herokuapp.com/",
    },
    {
        id: 4,
        title: "Password-Generator",
        description: "This app will help you generate a random password that meets the given criteria",
        image: "src\assets\password-generator.png",
        repo: "https://github.com/kristyvanatta/password-generator",
        live: "https://kristyvanatta.github.io/password-generator/",
    },
    {
        id: 5,
        title: "Weather-Dashboard",
        description: "This app shows you the current and forcasted weather for the city the user inputs",
        image: "src\assets\weather-dashboard.png",
        repo: "https://github.com/kristyvanatta/Weather-Dashboard",
        live: "https://kristyvanatta.github.io/Weather-Dashboard/",
    },
    {
        id: 6,
        title: "READme Generator",
        description: "Create a professional README quickly",
        image: "src\assets\readme-generator.png",
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