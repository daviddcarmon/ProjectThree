import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import MenuTeaser from "./components/MenuTeaser";
import { Row, Col, Container } from "reactstrap";
import CharTeaser from "./components/CharTeaser";
import AboutInfo from "./components/About";
import ImageOverlay from "./components/ImageOverlay";
// import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="App">
      <Container>
        <Col>
          <Row>
            <Navigation />
          </Row>
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

export default App;
