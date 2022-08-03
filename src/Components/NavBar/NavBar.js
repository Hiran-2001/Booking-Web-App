import React from "react";
import "./NavBar.css";
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
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </div>

              <div id="hotel-stay">
                <li class="nav-item">
                <MdHotel/>
                  <a class="nav-link active" href="#">
                    Features
                  </a>
                </li>
              </div>

              <div id="bus-icon">
                <li class="nav-item">
                <FaBusAlt/>
                  <a class="nav-link active" href="#">
                    Pricing
                  </a>
                </li>
              </div>

              <div id="train-icon">
                <li class="nav-item">
                <FaTrain/>
                  <a class="nav-link active" href="#">
                    Pricing
                  </a>
                </li>
              </div>

              <div id="cab-icon">
                <li class="nav-item">
                <FaTaxi/>
                  <a class="nav-link active" href="#">
                    Pricing
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
