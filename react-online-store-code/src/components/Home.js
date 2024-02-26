import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <div className="home mt-3 ms-3">
      {/* Page Heading */}
      <h1 className="heading" style={{ color: "white" }}>
        Home
      </h1>
      <div className="text-center mt-5">
        {/* Login Link */}
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div>
            <label>
              {/* Prompt to navigate to the login page if the user has a registered account */}
              Click here to login if you have a registered account already
            </label>
          </div>

          <Button variant="primary">Login</Button>
        </Link>
        <div>
          {/* Registration Link */}
          <Link to="/registration" style={{ textDecoration: "none" }}>
            <div>
              <label style={{ color: "green" }}>
                {/* Prompt to navigate to the registration page to create a new account */}
                Click here to register an account
              </label>
            </div>
            <Button variant="success">Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
