import axios from "axios";

export default {
  // Gets all bookings
  getBookings: function () {
    return axios.get("/api/bookings");
  },
  // Gets the booking with the given id
  getBooking: function(id) {
    return axios.get("/api/bookings/" + id);
  },
  // Deletes the booking with the given id
  deleteBooking: function(id) {
    return axios.delete("/api/bookings/" + id);
  },
  // Saves a booking to the database
  saveBooking: function(bookingData) {
    return axios.post("/api/bookings", bookingData);
  }
};
