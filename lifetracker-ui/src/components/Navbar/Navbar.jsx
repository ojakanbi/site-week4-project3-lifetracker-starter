import React from "react";
import "./Navbar.css";
import logobanner from "../../images/lifeTracker-banner.png";
import logo from "../../images/lifeTracker-logo.png";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav-container">
      <nav className="Navbar">
        <div>
          <img src={logo} className="logo"></img>
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
            <Link to="/auth/register"> <button>Register</button></Link>
            
           
        </div>
      </nav>
    </div>
  );
}
