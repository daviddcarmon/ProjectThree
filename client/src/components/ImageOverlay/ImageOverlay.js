import React from "react";
import "./ImageOverlay.css";

import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Button,
  Col
} from "reactstrap";

const ImageOverlay = () => {
  return (
    <Col md="12">
      <div className="imgOverlayClearTop">

      </div>
      {/* <Card inverse>
        <CardImg
          
          width="100%"
          src="https://www.abc.net.au/cm/rimage/11897182-16x9-large.jpg?v=5"
          alt="Card image cap"
        />
        <CardImgOverlay>
          <CardTitle>Lord of the Rings App</CardTitle>
          <CardText id="change">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
          <Button href="/booking">Book Now!</Button>
        </CardImgOverlay>
      </Card> */}
      <div>
      <CardTitle className="text-center">Lord of the Rings App</CardTitle>
          <CardText className="text-center" id="change">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
      <small className="text-muted text-center">Last updated 3 mins ago</small>

      <Button className="text-center" href="/booking">Book Now!</Button>
      </div>
      <div className="imgOverlayClearBottom">

      </div>
      
    </Col>
  );
};

export default ImageOverlay;
