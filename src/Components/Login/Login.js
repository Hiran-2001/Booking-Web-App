import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
// import TravelBackGround from '../../Images/banner.PNG'
function Login() {
  return (
    <div className="login-div">
      <div className="login-container">
        <div className="login-header"></div>
        <br />
        <form className="form">
          <div class="mb-3">
            <h3>Login/Signup</h3>
            <br />
            <h6>Please enter your email and password to continue </h6> <br />
            <label for="exampleInputPassword1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="password" />
          </div>

          <h6>
            don't have an account <Link to='/'> Create Account </Link>
          </h6>
          <br />
          <button type="submit" id="submit-btn" class="btn btn-primary">
            <h5>Submit</h5>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
