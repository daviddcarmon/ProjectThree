 
// ACTION
const newBooking = () => {
  return {
    type: "NEW_BOOKING",
    day: ``,
    guest: ``,
    menu: ``,
    bookingDate: Date.now(),
  };
};


const deleteBooking = () => {
  return {
    type: "DELETE_BOOKING",
    day: ``,
    guest: ``,
    menu: ``,
    deleteDate: Date.now(),
  };
};