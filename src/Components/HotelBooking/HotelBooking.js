import React from "react";
import './HotelBooking.css'
function HotelBooking() {
  return (
    <div className="hotel-booking-div">
      <div className="hotel-booking-container">
        <h5 className="hotel-container-title">book hotel ticket</h5>
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

export default HotelBooking;
