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
    <div>
      <Card>
        <CardBody>
          <CardTitle>About Info</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
          <Button>See more</Button>
        </CardBody>
        <CardImg
          bottom
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
      </Card>
    </div>
  );
};

export default AboutInfo;
