import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API"

import {
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
    <div id="confirmForm">
      <Card>
        <CardImg
          top
          width="100%"
          src="https://i.pinimg.com/originals/5c/40/0e/5c400e29ad897b33206825688a63f0cf.jpg"
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
