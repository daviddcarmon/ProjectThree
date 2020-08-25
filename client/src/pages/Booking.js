import React from "react";
// will need to import confirmation page component for submit button
// import Confirmation from "./Confirmation";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function Booking() {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input
          type="name"
          name="name"
          id="exampleName"
          placeholder="First & Last name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Number of guests:</Label>
        <Input type="select" name="select" id="numberOfGuests">
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
        <Label for="exampleSelect">Party Food Package:</Label>
        <Input type="select" name="select" id="partyPackage">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="extraInfo">
          {" "}
          Please let us know of any allergies, food sensitivity, or if your
          party will be more than 10 guests.
        </Label>
        <Input type="textarea" name="text" id="extraInfo" />
      </FormGroup>

      <FormGroup>
        <Label for="exampleSelect">
          If you would like to have a character come to your party, please
          select which character:
        </Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      {/* will have to have button connect to confirmation page */}
      <Button>Book Party!</Button>
    </Form>
  );
}

export default Booking;
