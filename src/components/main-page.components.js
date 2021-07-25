import React, {Component} from "react";
import Carousel from 'react-bootstrap/Carousel'
//import Accordion from 'react-bootstrap/Accordion'
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/main-page.css'

export default class MainPage extends Component{

    render(){
        return(
            <>
                <div className="Header">
                    Dealer Track
                </div>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://i.pinimg.com/originals/88/bc/81/88bc8159694e8a531c7039b3b6d850d4.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://static.turbosquid.com/Preview/2018/12/29__13_02_17/7.jpg5C184EDC-9C92-4B1B-ACAB-51DE02F2133DDefault.jpg"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.renderhub.com/squir/generic-supercar-2020/generic-supercar-2020-03.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <div className="main-page-container">
                        <div className="left-content">

                        </div>
                        <div className="middle-content">
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        What is dealer track?
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Dealer track is a dealer inventory system design
                                            to track local dealer inventory
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        TAB 2
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>This is second tab body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                        <div className="right-content">

                        </div>
                    </div>
                   {/*  <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                What is dealer track?
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Dealer track is a dealer inventory system design
                                    to track local dealer inventory
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                TAB 2
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>This is second tab body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion> */}
            </>
        )
    }

}