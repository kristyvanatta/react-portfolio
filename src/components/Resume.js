import Ract from 'react';

function Resume() {
    return (
        <div className="columns">
            <div classNme="columns">
                <p className="content is-medium">Résumé</p>
                <hr />
                <a className="button is-primary" href={} target="_blank" rel="noreferrer">
                    <span slcassName="icon">
                        <i className="fas fa-download"></i>
                    </span>
                    <span>Download my Résumé</span>
                </a>
            </div>
            <div className="column">
                <p className="content is-medium">Skills</p>
                <hr />
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>React.js</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;