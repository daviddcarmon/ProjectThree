import React from "react";
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
    <div id="aboutDest">
      <Card>
        <CardBody>
          <CardTitle>About Info</CardTitle>
          <CardText>*** about content here ***</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
          <Button>See more</Button>
        </CardBody>
        <CardImg
          bottom
          width="100%"
          src="https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="About image"
        />
      </Card>
    </div>
  );
};

export default AboutInfo;
