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
          <CardTitle>Add to the party!</CardTitle>
          <CardText>*** character content here ***</CardText>

          <Button href="/charList">See full list of characters</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CharTeaser;
