import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./NavBar.css";
import {BsPersonCircle,BsFillBookmarkFill} from 'react-icons/bs'
import Logo from "../../Images/Capture.PNG";
import {MdHotel ,MdOutlineAirplanemodeActive} from "react-icons/md"
import {FaBusAlt,FaTrain,FaTaxi} from "react-icons/fa"
function NavBar() {
  return (
    <div id="navbar" className="nav-bar">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img id="logo" src={Logo} alt="" />
          </a>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

              <div id="flight-icon">
                <li class="nav-item">
                  <MdOutlineAirplanemodeActive className="flightIcon" />
                  <Link id="flight" class="nav-link active" to="/flight">Flight</Link>
                </li>
              </div>

              <div id="hotel-stay">
                <li class="nav-item">
                <MdHotel className="hotelIcon"/>
                <Link id="hotel" class="nav-link active" to="/hotel">Hotel</Link>

                  
                </li>
              </div>

              <div id="bus-icon">
                <li class="nav-item">
                <FaBusAlt className="busIcon"/>
                <Link id="bus" class="nav-link active" to="/bus">Bus</Link>

                  
                </li>
              </div>

              <div id="train-icon">
                <li class="nav-item">
                <FaTrain className="trainIcon"/>
                <Link id="train" class="nav-link active" to="/train">Train</Link>

                  
                </li>
              </div>

              <div id="cab-icon">
                <li class="nav-item">
                <FaTaxi className="cabIcon"/>
                <Link id="cab" class="nav-link active" to="/cab">Cab</Link>

                  
                </li>
              </div>

              <div id="login-div">
                     {/* <BsPersonCircle id="login-icon"/> */}
                <li class="nav-item">
                <Link id="login" class="nav-link active" to="/login">Login</Link>
                  
                </li>
              </div>

              <div id="my-booking">
                <li class="nav-item">
                {/* <BsFillBookmarkFill id="booking-icon"/> */}
                  <a id="booking"  class="nav-link active" href="#">
                    My Bookings
                  </a>
                </li>
              </div>
             
            </ul>
          </div>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}

export default NavBar;
