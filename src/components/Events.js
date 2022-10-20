import React from "react";
import coffee from "../images/coffee.png";
import nov22events from "../images/nov22events.jpg";
import dec22events from "../images/dec22events.jpg";
import "../resources/events.css";

function Events() {
  return (
    <>
      <div className="background background-events d-flex align-items-center justify-content-center flex-column">
        <img src={coffee} alt="" />
        <h1 className="mb-3">Events</h1>
        <button>Book Event</button>
      </div>
      <div className="event-container">
        <div className="flex-item">
          <img src={nov22events} alt="" />
        </div>
        <div className="flex-item">
          <img src={dec22events} alt="" />
        </div>
      </div>
    </>
  );
}

export default Events;
