import React from 'react';
import { jumbotron, Row, Col } from 'reactstrap';
import './style.css';
import Resume from './Resume';

class About extends React.Component {

    state = {
        Resume
    };

    render() {
        <Jumbotron className="m-3 text-center">
            <h1 className="display-4">Hello Everyone!</h1>
            <p className="lead">I am Kristy Vanatta, a junior software developer embarking on a new and exciting career!</p>
            <hr className="my-4" />
            <Row className="justify-content-center">
                <Col>
                <p className=""> Enter some cover letter bs here</p>
                </Col>
            </Row>
            <hr className="my-4" />
            <Row className="justify-content-center">
                <Col xs="8">
                    <p className="font-weight-bold">Technical Skills</p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                
            </Row>
        </Jumbotron>
    }
}