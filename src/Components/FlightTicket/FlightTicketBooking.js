import React from "react";
import "./FlightTicket-Booking.css";
import { BsArrowLeftRight } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
function FlightTicketBooking() {
  return (
    <div className="flight-ticket-div">
      <div className="flight-ticket-container">
        {/* title */}

        <h5 className="flight-container-title">Book Flight ticket</h5>

        {/* trip selection area */}

        <div className="flight-trip-selection">
          <button className="one-way">
            <h6>One way</h6>
          </button>
        
            <button className="round-way">
              <h6>Round Trip</h6>
            </button>
        
        </div>

        {/* place selection area */}

        <div className="flight-place-selection">
          <div className="depart-from-div">
            <h6 className="depart from">depart From</h6>
            <h5 className="depart-from-place">Ernakulam Jn</h5>
          </div>
          <div className="place-shift-area">
            <div className="shift-arrow">
              <BsArrowLeftRight />
            </div>
          </div>
          <div className="going-to-div">
            <h6 className="going-top">Going To</h6>
            <h5 className="going-to-place">Chengannur</h5>
          </div>
        </div>

        {/* date selection area */}

        <div className="flight-date-selection">
          <div className="depature-div">
            <h6 className="depature-date-div">depature date</h6>
            <h5 className="depature-date">5 Aug' 22</h5>
            <h6 className="depature-day">Friday</h6>
          </div>

          <div className="return-div">
            <h6 className="return-date-div">depature date</h6>
            <h5 className="return-date">5 Aug' 22</h5>
            <h6 className="return-day">Friday</h6>
          </div>
        </div>

        {/* economy selection area */}

        <div className="flight-travellers-economy">
          <h6>traveller-economy</h6>
        </div>

        <div className="search-flight-div">
          <button id="search-btn" type="button" class="btn btn-danger">
            Search Flights <FiArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlightTicketBooking;
