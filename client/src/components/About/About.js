import React from "react";
import "./About.css"
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";

const AboutInfo = () => {
  return (
    <div id="about">
      <Card id="aboutDest">
        <CardBody>
          <CardTitle>Our Story</CardTitle>
          <CardText>This is going to be a paragraph about the app</CardText>
        </CardBody>
        
      </Card>
    </div>
  );
};

export default AboutInfo;
