import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import MenuTeaser from "./components/MenuTeaser/MenuTeaser";
import { Row, Col, Container } from "reactstrap";
import CharTeaser from "./components/CharTeaser/CharTeaser";
import AboutInfo from "./components/About/About";
import ImageOverlay from "./components/ImageOverlay/ImageOverlay";

function App() {
  return (
    <div className="App">
      <Container className="totalPage">
        <Row>
          <Navigation />
        </Row>
        <Row>
          <Col><ImageOverlay /></Col>
        </Row>
        <Row>
          <Col md="8">
          https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80
          </Col>
          <Col md="4">
          <AboutInfo />
          </Col>
        </Row>

        <Row>
          <Col md="4">
                <MenuTeaser />
          
          </Col>
          <Col md="8">
               https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Fshots%2F5795476-Creative-Black-Food-Menu-Flyer&psig=AOvVaw1furNOm8oALE6lzCGWvnOg&ust=1598118022362000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIj-ltrrrOsCFQAAAAAdAAAAABAJ
          </Col>
        </Row>
        <Row>
          <Col md="8">
            lorefamsodsamoasd
          </Col>
          <Col md="4">
          <CharTeaser />
        </Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default App;
