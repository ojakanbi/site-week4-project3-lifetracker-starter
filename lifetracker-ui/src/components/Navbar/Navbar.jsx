import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.gif"
import logobanner from "../../images/lifeTracker-banner.png";

import { Link, Outlet } from "react-router-dom";

export default function Navbar({navbar, setNavbar }) {
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

        {!navbar?
        <div className="signIn-container">

          <Link to="/auth/login"> <button>Sign In</button></Link>
            <Link to="/auth/register"> <button>Register</button></Link>
        </div>
        :
        <div className="signIn-container">
<Link to="/auth/login" onClick={() => { setNavbar(false); localStorage.removeItem('token'); }}>
  <button>Sign Out</button></Link>
        </div>

        }


      </nav>
    </div>
  );
}
