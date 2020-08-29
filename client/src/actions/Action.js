// ACTION
const newBooking = {
  type: "NEW_BOOKING",
  day: ``,
  guest: ``,
  menu: ``,
  bookingDate: Date.now(),
  deleteDate: null,
};

const deleteBooking = {
  type: "DELETE_BOOKING",
  day: ``,
  guest: ``,
  menu: ``,
  bookingDate: ``,
  deleteDate: Date.now(),
};
