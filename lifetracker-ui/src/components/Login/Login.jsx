import axios from "axios";
import React, { useState } from "react";
import "./login.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Login({ loginUser, setLoginUser }) {
  const [userInfo, setUserInfo] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    axios.post('http://localhost:3001/auth/login', loginUser)
      .then(response => {
        console.log('User logged in successfully:', response.data);
        setUserInfo(response.data);
        localStorage.setItem('token', response.data.token);
        window.location = "/secret"; // Redirect to the secret page upon successful login
        // Handle successful login
      })
      .catch(error => {
        console.error('Error logging in user:', error);
        // Handle error during login
      });
      
  }

  function handleChange(event) {
    setLoginUser({
      ...loginUser,
      [event.target.name]: event.target.value
    });
  }

  return (
    <>
    

      <div className="login-container">
       
        <div className="form-container">
          <div className="form-title">
            <h3>login image here</h3>
            <h1>Welcome</h1>
          </div>
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
      {userInfo.user && 
          <h3>{userInfo.user.username} Login successful!!</h3>
          
          }

      </div>
     
    </>
  );
}
