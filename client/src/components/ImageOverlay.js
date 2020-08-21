import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Button,
} from "reactstrap";

const ImageOverlay = () => {
  return (
    <div>
      <Card inverse>
        <CardImg
          width="100%"
          src="https://www.abc.net.au/cm/rimage/11897182-16x9-large.jpg?v=5"
          alt="Card image cap"
        />
        <CardImgOverlay>
          <CardTitle>Lord of the Rings App</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
          <Button>Book Now!</Button>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default ImageOverlay;
