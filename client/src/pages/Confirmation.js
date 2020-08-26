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

const Confirmation = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
