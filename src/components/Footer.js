import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>Kristy Vanatta Portfolio</strong>
                    <hr />
                    <a 
                    href="https://github.com/kristyvanatta" target="_blank" rel="noreferrer">
                    GitHub
                    </a>
                    <br></br>
                    <a
                    href="www.linkedin.com/in/kristyvanatta" target="_blank" rel="noreferrer">
                    Linkedin
                    </a>
                    <br></br>
                    <a
                    href="https://stackoverflow.com/users/19544744/kristy-vanatta" target="_blank" rel="noreferrer">
                    stackoverflow
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;