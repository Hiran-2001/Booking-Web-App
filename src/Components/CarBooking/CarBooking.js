import React from "react";
import './CarBooking.css'
function CarBooking() {
  return (
    <div className="car-booking-div">
      <div className="car-booking-container">
        <h5 className="car-container-title">Book Outstation, Local Cabs</h5>
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

export default CarBooking;
