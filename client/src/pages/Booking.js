import React from "react";
// will need to import confirmation page component for submit button
import "../components/Form/Form.css";
// import Confirmation from "./Confirmation";
import Calendar from "../components/Calendar/Calendar";
import { Button, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
// import {bookingReducer} from "../reducers/Bookings"

// DISPATCH
// export const handleSubmit = (e) => {
//   e.preventDefault();
//   const action = {
//     type: "NEW_BOOKING",
//     payload: {
//       day: this.day.current.value,
//       guest: this.guest.current.value,
//       menu: this.menu.current.value,
//       bookingDate: Date.now(),
//     },
//   };
//   const newState = bookingReducer(this.state, action);
//   this.setState(newState);
// };

function Booking() {
  return (
    <div class="container box" id="bookingForm">
      <Row>
        <Col>
      <Form>
        {/*<FormGroup onClick={handleSubmit} >*/}
        <h1>Book With Us</h1>
        <p class="text-center w-responsive mx-auto mb-5">Please answer the questions below to book!</p>
        <FormGroup>
          <Label for="menuSelect">Menu Style</Label>
          <Input type="select" name="select" id="menuSelect">
            <option>Menu 1</option>
            <option>Menu 2</option>
            <option>Menu 3</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="guestSelect">Number of Guest</Label>
          <Input type="select" name="selectMulti" id="guestSelect" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="notes">Notes and food restrictions</Label>
          <Input type="textarea" name="text" id="notes" />
        </FormGroup>
        <Button href="/confirm">Book Party!</Button>
      </Form>
      </Col>
      <Col>
      <Calendar events={[]} />
      </Col>
      </Row>
    </div>
  );
}

export default Booking;
