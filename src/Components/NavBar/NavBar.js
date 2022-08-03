import React from "react";
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
                  <MdOutlineAirplanemodeActive/>
                  <a id="flight" class="nav-link active" aria-current="page" href="#">
                    Flight
                  </a>
                </li>
              </div>

              <div id="hotel-stay">
                <li class="nav-item">
                <MdHotel/>
                  <a id="hotel" class="nav-link active" href="#">
                    Hotels                  </a>
                </li>
              </div>

              <div id="bus-icon">
                <li class="nav-item">
                <FaBusAlt/>
                  <a id="bus"  class="nav-link active" href="#">
                    Bus
                  </a>
                </li>
              </div>

              <div id="train-icon">
                <li class="nav-item">
                <FaTrain/>
                  <a id="train" class="nav-link active" href="#">
                    Train
                  </a>
                </li>
              </div>

              <div id="cab-icon">
                <li class="nav-item">
                <FaTaxi/>
                  <a id="cab"  class="nav-link active" href="#">
                    cab
                  </a>
                </li>
              </div>

              <div id="login-div">
                     {/* <BsPersonCircle id="login-icon"/> */}
                <li class="nav-item">
                  <a id="login"  class="nav-link active" href="#">
                    Login
                  </a>
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
    </div>
  );
}

export default NavBar;
