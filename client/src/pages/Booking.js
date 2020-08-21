import React from "react";

function Booking() {
  return (
    <section className="bookingForm">
      <div className="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <label for="exampleFormControlSelect1">Number of guests</label>
        <select className="form-control" id="exampleFormControlSelect1">
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
        </select>
      </div>
      <div className="form-group">
        <label for="exampleFormControlSelect2">Party Package</label>
        <select
          multiple
          className="form-control"
          id="exampleFormControlSelect2"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="form-group">
        <label for="exampleFormControlTextarea1">
          Please let us know of any allergies, food sensitivity, or more then 10
          guests.
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </section>
  );
}

export default Booking;
