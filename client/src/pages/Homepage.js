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
    <div className="containerHomepage" >
      <Row>
        <ImageOverlay />
      </Row>

      <Row>
        <Col md="8" id="imageAboutHomepage">
          <AboutInfo />
        </Col>
        <Col md="4" id="imageAbout">
          
        </Col>
      </Row>
      <Row>
        <Col md="4" id="imageMenuHomepage">
        </Col>
        <Col md="8" id="menuTeaserCol">
          <MenuTeaser />
        </Col>
      </Row>
      <Row>
        <Col md="8" id="charTeaserHomepage">
          <CharTeaser />
        </Col>
        <Col md="4" id="imageChar">
        </Col>
      </Row>
      <Row>

        <Col md="4" id="calendarHomepage">
        <Calendar events={[]} />
        </Col>
        <Col md="8" id="calendarTeaserCol">
        </Col>
      </Row>
    </div>
  );
}

export default Homepage;
