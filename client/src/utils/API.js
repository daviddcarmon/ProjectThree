import axios from "axios";

export default {
  // Gets all books
  getBookings: function () {
    return axios.get("/api/bookings");
  },
};
