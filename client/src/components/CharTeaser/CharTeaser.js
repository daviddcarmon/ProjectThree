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

import "./CharTeaser.css"



const CharTeaser = () => {
  return (
    <div id="charInfo">
      <Card id="charDest">
        <CardBody>

          <Button href="/charList" id="charBtn">See full list of characters</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CharTeaser;
