import React from "react";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";

const CharTeaser = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Character Teaser</CardTitle>
          <CardText>*** character content here ***</CardText>

          <Button>See more</Button>
        </CardBody>
        <CardImg
          bottom
          width="100%"
          src="https://images.unsplash.com/photo-1532117892888-38948e152b3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="About image"
        />
      </Card>
    </div>
  );
};

export default CharTeaser;
