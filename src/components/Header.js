import React, { useState } from 'react';
import About from './About';
import Contact from './contact';
import Navigation from './Navigation';
import Portfolio from './Portfolio';
import Resume from './Resume';

function Header() {
    const [currentPage, handlePageChange] = useState("About");

    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />
            case "Portfolio":
                return <Portfolio />
            case "Contact":
                return <Contact />
            case "Resume":
                return <Resume />

            default:
                return <About />;
    }
};

return (
    <div>
        <nav className="navbar">
            <div className="navbar-brand">
                <a
                className="navbar-item"
                rel="noreferrer"
                href="https://github.com/kristyvanatta">
                    <span className="content is-large">Kristy Vanatta</span>
                </a>
            </div>
        </nav>
        <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        />
        <main>
            <div>{renderPage(currentPage)}</div>
        </main>
    </div>
);
}

export default Header;