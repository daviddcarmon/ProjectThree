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
      <div className="mainLogo">

      </div>
      <div>
      <CardTitle className="text-center">Lord of the Rings App</CardTitle>
          <CardText className="text-center">
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
