import React from "react";
import "./CharTeaser.css"
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
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
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

export default CharTeaser;
