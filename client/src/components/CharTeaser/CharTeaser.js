import React from "react";
import "./CharTeaser.css";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
import ControlledCarousel from "../CharCarousel/CharCarousel";

const CharTeaser = () => {
  return (
    <div id="charInfo">
      <Card id="charDest">
        <CardBody>
          <CardTitle>Character Teaser</CardTitle>
          <CardText>*** character content here ***</CardText>

          <Button href="/charList">See full list of characters</Button>
        </CardBody>
        <ControlledCarousel />
      </Card>
    </div>
  );
};

export default CharTeaser;
