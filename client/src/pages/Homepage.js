import React from "react";
import "../App.css";
import MenuTeaser from "../components/MenuTeaser/MenuTeaser";
import { Row, Col, Container } from "reactstrap";
import CharTeaser from "../components/CharTeaser/CharTeaser";
import AboutInfo from "../components/About/About";
import ImageOverlay from "../components/ImageOverlay/ImageOverlay";
import Calendar from "../components/Calendar/Calendar";


function Homepage() {
  return (
    <div className="container" id="teasers">
      <Row>
        <ImageOverlay />
      </Row>

      <Row>
        <Col md="8">
          <AboutInfo />
        </Col>
        <Col md="4" id="imageAbout">
          
        </Col>
      </Row>
      <Row>
        <Col md="4" id="imageMenu">
          
        </Col>
        <Col md="8">
          <MenuTeaser />
        </Col>
      </Row>
      <Row>
        <Col md="8">
          <CharTeaser />
        </Col>
        <Col md="4" id="imageChar">
        </Col>
      </Row>
      <Row>
        <Calendar events={[]} />
      </Row>
    </div>
  );
}

export default Homepage;
