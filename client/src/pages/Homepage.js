import React from "react";
import "../App.css";
import MenuTeaser from "../components/MenuTeaser";
import { Row, Col, Container } from "reactstrap";
import CharTeaser from "../components/CharTeaser";
import AboutInfo from "../components/About";
import ImageOverlay from "../components/ImageOverlay";
// import Calendar from "./components/Calendar";

function Homepage() {
  return (
    <div className="App">
      <Container>
        <Col>
          <Row>
            <ImageOverlay />
          </Row>
          <Row>
            <AboutInfo />
          </Row>
          <Row>
            <MenuTeaser />
          </Row>
          <Row>
            <CharTeaser />
          </Row>
          {/* <Row>
          <Calendar />
        </Row> */}
        </Col>
      </Container>
    </div>
  );
}

export default Homepage;
