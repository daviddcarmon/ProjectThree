import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API"

import {
  Row,
  Col,
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import "../components/Confirmation/Confirmation.css";

const Confirmation = (props) => {
  const [booking, setBooking] = useState({});

  const { id } = useParams();
  useEffect(() => {
    API.getBooking(id)
      .then((res) => {
        setBooking(res.data);
        console.log(booking);
        console.log(res);
      })
      .catch((err) => {
        window.location.replace("/");
        console.log(err);
      });
  }, []);

  // const handleDelete = () => {
  //   API.delete(id)
  //     .then(() => window.location.replace("/"))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
  <div className="container" id="confirmContainer">
  <div id="confirmForm">
    <Row>
      <Col md="12">
        <h1>PARTY BOOKED!</h1>
      </Col>
    </Row>
    <div id="confirmContent">
    <Row>
    <Col md="5">
      <h1>CALENDER SHOWING YOUR DATE BOOKED</h1>
      <div class="vl"></div>
    </Col>
    <Col md="7">
      <h1>USER CONTENT</h1>
    </Col>
    </Row>
    <Row>
    <Button href="/" id="confirmBtn">Back to home screen</Button>

    </Row>
    </div>
  </div>
  </div>
  );
};

export default Confirmation;
