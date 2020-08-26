import React from "react";
import { connect } from "react-redux";
import daysInCurrentMonth from "./DateHelper";
import uuid from "uuid";

function Calendar(props) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const numberOfWeeks = [0, 1, 2, 3, 4];

  return (
    <table>
      <section className="dayOfWeek">
        <div>
          {daysOfWeek.map((day) => (
            <div key={uuid()}>{day}</div>
          ))}
        </div>
      </section>
      <section className="weeks">
        {numberOfWeeks.map((week, weekIdx) => (
          <div key={uuid()}>
            {daysOfWeek.map((day, dayIdx) => {
              let dayOfMonth = dayIdx + 1 + weekIdx * 7;
              let eventsToday = props.events.filter((event) => {
                return Number(event.date.slice(-2)) === dayOfMonth;
              });
              return (
                <div key={uuid()}>
                  {dayOfMonth > daysInCurrentMonth ? null : dayOfMonth}
                  {!eventsToday[0] ? null : (
                    <ul>
                      {eventsToday.map((event) => (
                        <EventItem key={uuid()}>{event.name}</EventItem>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </section>
    </table>
  );
}

function mapStateToProps(state) {
  return {
    events: state.events,
  };
}

export default connect(mapStateToProps)(Calendar);
