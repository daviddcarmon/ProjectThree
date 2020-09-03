import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import "../components/Confirmation/Confirmation.css"

const Confirmation = (props) => {
  return (
    <div id="confirmForm">
      <Card>
        <CardImg
          top
          width="100%"
          src="https://i.pinimg.com/originals/5c/40/0e/5c400e29ad897b33206825688a63f0cf.jpg"
          alt="Confirm party image"
        />
        <CardBody>
          <CardTitle>Confirmation Page</CardTitle>
          <CardSubtitle>Thanks for booking your party!</CardSubtitle>
          <CardText>Party confirmation information.</CardText>
          <Button href="/">Back to home screen</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Confirmation;
