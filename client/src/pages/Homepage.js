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
    <div className="App">
      <Container>

          <Row>
              <ImageOverlay />
           </Row>

           <Row>
              <Col md="8">
                <AboutInfo />
              </Col>
              <Col md="4" id="image-block">
                IMAGE
              </Col>
            </Row>
            <Row>
              <Col md="4" id="image-block">
                IMAGE
              </Col>
              <Col md="8">
                <MenuTeaser />
              </Col>
            </Row>
          <Row>
            <Col md="8">
            <CharTeaser />
            </Col>
            <Col md="4" id="image-block">
                IMAGE
            </Col>
          </Row>
          <Row>
            <Calendar events={[]} />
          </Row>

      </Container>
    </div>
  );
}

export default Homepage;
