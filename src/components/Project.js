import React from 'react';

function Project(props) {
    return (
        <div>
            <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
                {props.projects.map((project) => (
                    <div className="column is-half">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <a href={project.live} target="_blank" rel="noreferrer">
                                        <img />
                                    </a>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left"></div>
                                    <div className="media-content">
                                        <p className="title is-4" key={project.id}>
                                            {project.title}
                                        </p>
                                    </div>
                                </div>

                                <div className="card">
                                        <footer className="card-footer">
                                            <a href={project.repo} className="card-footer-item" target="_blank" rel="noreferrer">Check out the repo</a>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                ))}
            </div>
        </div>

    );

}


export default Project;