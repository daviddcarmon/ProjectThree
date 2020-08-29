// REDUCER
const bookingReducer = (state, action) => {
  switch (action.type) {
    case `NEW_BOOKING`:
      return { ...state, booking: [...state.booking, action.payload] };
    // case `DELETE_BOOKING`:
    //   return { ...state, booking: [...state.booking, action.payload] };
    default:
      return state;
  }
};

export default bookingReducer

import Booking from "../pages/Booking";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [formObject, setFormObject] = useState({
    date: "",
    guest: "",
    menu: "",
  });

  useEffect(() => {
    loadBookings();
  }, []);

  function loadBookings() {
    API.getBookings()
      .then((res) => setBookings(res.data))
      .catch((err) => console.log(err));
  }

  function deleteBooking(id) {
    API.deleteBooking(id)
      .then((res) => loadBookings())
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.guest && formObject.menu) {
      API.saveBook({
        date: formObject.date,
        guest: formObject.guest,
        menu: formObject.menu,
      })
        .then(() =>
          setFormObject({
            date: "",
            guest: "",
            menu: "",
          })
        )
        .then(() => loadBookings())
        .catch((err) => console.log(err));
    }
  }
}

// export default Bookings;
