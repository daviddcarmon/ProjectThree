
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import moment from "moment"
 

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

  const handleDelete = (x) => {
    API.deleteBooking(id)
      .then(() => window.location.replace("/"))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container" id="confirmContainer">
      <div id="confirmForm">
        <Row>
          <Col md="12">
            <h1 id="confirmHead">PARTY BOOKED!</h1>
          </Col>
        </Row>
        <div id="confirmContent">
          <Row>
            <Col md="5">
              <h1 id="bookDate">{moment(booking.date,"YYYY-MM-DD").format("ll")}</h1>
              <div class="vl"></div>
            </Col>
            <Col md="7">
              <h1 id="bookMenu">{booking.menu}</h1>
              <h1 id="bookChar">{booking.characters}</h1>
              <hr></hr>
              <h1 id="bookNote">{booking.note}</h1>
            </Col>
            <Row>
              <Col id="confirmRow">
              <p id="bookText">Confirmation Number: {id}</p>
              </Col>
              <Col id="deleteRow">
              <Button onClick={()=> handleDelete(id)} id="deleteBtn">Delete Booking</Button>
              </Col>
            </Row>
          </Row>
          <Row>
            <Button href="/" id="confirmBtn">
              Back to home screen
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
