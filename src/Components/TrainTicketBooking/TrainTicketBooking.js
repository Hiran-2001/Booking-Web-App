import React from "react";
import "./TrainTicketBooking.css";

function TrainTicketBooking() {
  return (
    <div className="train-ticket-div">
      <div className="train-ticket-container">
        <h5 className="train-container-title">book train ticket</h5>
        <div className="trip-selection">
          <h6>trip</h6>
        </div>
        <div className="place-selection">
          <h6>place</h6>
        </div>
        <div className="date-selection">
          
          <h6>date</h6>
        </div>
       
      </div>
    </div>
  );
}

export default TrainTicketBooking;
