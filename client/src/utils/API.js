import axios from "axios";
// const APIKey = process.env.REACT_APP_WEATHER_KEY;

export default {
  // getWeather: function (location) {
  //   return axios.get(
  //     `https://api.weatherbit.io/v2.0/current?city=${location}&key=${APIKey}`
  //   );
  // },
  // Gets all bookings
  getBookings: function () {
    return axios.get("/api/bookings");
  },
  // Gets the booking with the given id
  getBooking: function (id) {
    return axios.get("/api/bookings/" + id);
  },
  // Deletes the booking with the given id
  deleteBooking: function (id) {
    return axios.delete("/api/bookings/" + id);
  },
  // Saves a booking to the database
  saveBooking: function (bookingData) {
    return axios.post("/api/bookings", bookingData);
  },

  getCharacters: function () {
    return axios.get("/api/characters");
  },

  getMenus: function () {
    return axios.get("/api/menu");
  },
};
