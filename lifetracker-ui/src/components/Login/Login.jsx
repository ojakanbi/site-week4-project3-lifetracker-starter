import axios from "axios";
import React, { useState } from "react";
import "./login.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import login from "../../images/login.png";

export default function Login({
  loginUser,
  setLoginUser,
  navbar,
  setNavbar,
  userInfo,
  setUserInfo,
}) {
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:3001/auth/login", loginUser)
      .then((response) => {
        console.log("User logged in successfully:", response.data);
        setUserInfo(response.data.user);
        localStorage.setItem("userId", response.data.user.id);
        console.log("user info: ", userInfo);
        localStorage.setItem("token", response.data.token);
        
        setNavbar(true);
        window.location = "/"; // Redirect to the secret page upon successful login
        // Handle successful login
      })
      .catch((error) => {
        console.error("Error logging in user:", error.response.data);
        console.error("Error adding sleep data:", error);
        const errorResponse = error.response.data;
        const errorMessage = errorResponse.match(/Error: (.*?)<br>/)[1];
        setError(errorMessage);
        // Handle error during login
      });
  }

  function handleChange(event) {
    setLoginUser({
      ...loginUser,
      [event.target.name]: event.target.value,
    });
  }

  function capitalizeFirstLetter(string) {
    if (typeof string !== 'string' || string.length === 0) {
      return '';
    }  // what we get here is a string and we want to return a string
  
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
const firstname = capitalizeFirstLetter(userInfo.firstName);

  localStorage.setItem("firstname", firstname);

  console.log(error);
  return (
    <>
      <div className="login-container">
        <div className="form-title">
          <img className="login-img" src={login}></img>
          <h1>Welcome, {firstname}</h1>
        </div>

        {error && (
          <div className="error-container">
            <h3>{error}</h3>
          </div>
        )}

        <div className="form-container">
          <div>
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="emailaddress">
                <p>Email Address</p>
                <TextField
                  type="email"
                  name="emailaddress"
                  value={loginUser.emailaddress}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="password">
                <p>Password</p>
                <TextField
                  type="password"
                  name="password"
                  value={loginUser.password}
                  onChange={handleChange}
                  required
                />
              </label>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
      <div className="user-login">
        {userInfo.user && <h3>{userInfo.user.username} Login successful!!</h3>}
      </div>
    </>
  );
}
