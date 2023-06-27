import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <nav className="Navbar">
        <div>
          <image>image</image>
        </div>
        <ul>
            
          <li>
            <a href="/">Activity</a>
          </li>
          <li>
            <a href="/">Exercise</a>
          </li>
          <li>
            <a href="/">Nutrition</a>
          </li>
          <li>
            <a href="/">Sleep</a>
          </li>
        </ul>

        <div className="signIn-container">
            <button>Sign In</button>
            <button>Register</button>
           
        </div>
      </nav>
    </div>
  );
}
