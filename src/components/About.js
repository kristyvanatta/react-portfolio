import React from 'react';
import profile from '../../src/assets/profile-pic.jpg';

function About() {
    return(
        <div>
            <p className="content is medium"></p>
            <hr />
            <img className="profile" src={profile} alt="Kristy Vanatta profile picture"/>
            <p className="content is-italic mt-4">
            I am an aspiring Junior Software Developer currently enrolled in Case Western Reserve's Full-Stack Web Development bootcamp. I look forward to my new career!
            </p>
        </div>
    );
}

export default About;