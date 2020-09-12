import React, { useState, useEffect } from "react";
import "../components/Form/Form.css";
import Calendar from "../components/Calendar/Calendar";
import { Button, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
// import {bookingReducer} from "../reducers/Bookings"
import API from "../utils/API";


function Booking() {
  const [form, setForm] = useState({});
  const [booking, setBooking] = useState({});

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

   

    if (!form.date || !form.menu || !form.characters) {
      alert(`All fields are required.`);
      return;
    }
    API.saveBooking({
      date: form.date,
      guest: form.guest,
      characters: form.characters,
      menu: form.menu,
      note: form.note,
    })
      .then((res) => {
        console.log(res.data._id);
        loadBookings(res.data._id);
        window.location.replace(`/bookings/${ res.data._id }`);

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function loadBookings() {
    API.getBookings()
      .then((res) => {
        setBooking(res.data);
        // console.log({ booking });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [state, setState] = useState({
    menuArray: [],
  });

  const { menuArray } = state;

  const [charstate, charsetState] = useState({
    charArray: [],
  });

  const { charArray } = charstate;

  useEffect(() => {
    API.getMenus().then(function (data) {
      console.log(data);
      setState({ ...state, menuArray: data.data });
    });
    API.getCharacters().then(function (data) {
      console.log(data.data);
      charsetState({ ...charstate, charArray: data.data });
    });
  }, []);

  return (
    <div class="container box" id="bookingForm">
      <Row>
        <Col>
          <Form>
            <h1 id="formHead">Book With Us</h1>
            <p class="text-center w-responsive mx-auto mb-5">
              Please answer the questions below to book!
            </p>
            <FormGroup>
              <Label for="Date">Date</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="MM/DD/YYYY"
                onChange={handleForm}
                valid={form.date}
              />
              <Label for="menuSelect">Menu Style</Label>
              <Input
                type="select"
                name="menu"
                id="menuSelect"
                onChange={handleForm}
              >
                {menuArray.map((data) => (
                  <option>{data.partyPackageName}</option>
                ))}
              </Input>
              <Label for="characterSelect">Character Option</Label>
              <Input
                type="select"
                name="characters"
                id="characterSelect"
                onChange={handleForm}
              >
                {charArray.map((data) => (
                  <option>{data.name}</option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="guestSelect">Number of Guests</Label>
              <Input
                type="select"
                name="guest"
                id="guestSelect"
                onChange={handleForm}
              >
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
              <Input
                type="textarea"
                name="note"
                id="notes"
                onChange={handleForm}
              />
            </FormGroup>
            <Button onClick={handleSubmit}id="bookListBtn">Book Party!</Button>
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
