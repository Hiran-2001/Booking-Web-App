import React from "react";
import "./FlightTicket-Booking.css";
function FlightTicketBooking() {
  return (
    <div className="flight-ticket-div">
      <div className="flight-ticket-container">
        <h5 className="flight-container-title">book Flight ticket</h5>
        <div className="trip-selection">
          <h6>trip</h6>
        </div>
        <div className="place-selection">
          <h6>place</h6>
        </div>
        <div className="date-selection">
          <h6>date</h6>
        </div>
        <div className="travellers-economy">
          <h6>traveller-economy</h6>
        </div>
      </div>
    </div>
  );
}

export default FlightTicketBooking;
