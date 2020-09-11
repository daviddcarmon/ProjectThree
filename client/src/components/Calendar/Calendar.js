import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import { daysInCurrentMonth, firstDayOfMonth } from "../DateHelper/DateHelper";
import { v4 as uuidv4 } from "uuid";
import "./Calendar.css";
import API from "../../utils/API";

// const css = {
//   border: "",
// };

function Calendar(props) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const numberOfWeeks = [0, 1, 2, 3, 4, 5];
  const [booking, setBooking] = useState({});

  useEffect(() => {
    API.getBookings()
    .then((res) => {
      setBooking(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
},[])

  return (
    <div id="availability">
      <table>
        <thead className="dayOfWeek">
          <tr>
            {daysOfWeek.map((day) => (
              <th key={uuidv4()}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody className="weeks">
          {numberOfWeeks.map((week, weekIdx) => (
            <tr key={uuidv4()}>
              {daysOfWeek.map((day, dayIdx) => {
                let dayOfMonth = dayIdx + 1 + weekIdx * 7 - firstDayOfMonth;
                let eventsToday = props.events.filter((event) => {
                  return Number(event.date.slice(-2)) === dayOfMonth;
                });
                return (
                  <td key={uuidv4()}>
                    {dayOfMonth > daysInCurrentMonth || dayOfMonth < 1
                      ? null
                      : dayOfMonth}
                    {!eventsToday[0] ? null : (
                      <ul>
                        {eventsToday.map((event) => (
                          <li id="calendarColor" key={uuidv4()}></li>
                        ))}
                      </ul>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    events: state.events,
  };
}

//export default connect(mapStateToProps)(Calendar);
export default Calendar;
