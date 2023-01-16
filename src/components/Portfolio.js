import React from 'react';
import Project from './Project';

const projects = [
    {
        id: 0,
        title: "Note-Tracker",
        image: "",
        description: "",
        repo: "",
        live: "",
    },
    {
        id: 1,
        title: "E-Commerce",
        image: "",
        description: "",
        repo: "",
        live: "",
    },
    {
        id: 2,
        title: "Text-Editor",
        image: "",
        description: "",
        repo: "",
        live: "",
    },
    {
        id: 3,
        title: "Password-Generator",
        image: "",
        description: "",
        repo: "",
        live: "",
    },
    {
        id: 4,
        title: "Weather-Dashboard",
        image: "",
        description: "",
        repo: "",
        live: "",
    },
    {
        id: 5,
        title: "READme Generator",
        image: "",
        description: "",
        repo: "",
        live: "",
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