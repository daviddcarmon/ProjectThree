import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import MenuTeaser from "./components/MenuTeaser";
import { Row, Col, Container } from "reactstrap";
import CharTeaser from "./components/CharTeaser";
import AboutInfo from "./components/About";
import ImageOverlay from "./components/ImageOverlay";

function App() {
  return (
    <div className="App">
      <Container>
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
      </Container>
    </div>
  );
}

export default App;
