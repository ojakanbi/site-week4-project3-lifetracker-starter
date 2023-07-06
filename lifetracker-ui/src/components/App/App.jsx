import Navbar from "../Navbar/Navbar"; // Importing the Navbar component
import Home from "../Home/Home"; // Importing the Home component
import "./App.css"; // Importing the CSS file for App
import React from "react"; // Importing React
import '@fontsource/roboto/300.css'; 
import '@fontsource/roboto/400.css'; 
import '@fontsource/roboto/500.css'; 
import '@fontsource/roboto/700.css'; 
import Secret from "../Secret/Secret"; // Importing the Secret component

import axios from "axios"; // Importing axios library for making HTTP requests
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"; // Importing components and utilities from react-router-dom
import Register from "../Register/Register"; // Importing the Register component

import { useState } from "react"; // Importing the useState hook from React
import Login from "../Login/Login"; // Importing the Login component
import { useEffect } from "react"; // Importing the useEffect hook from React
import ActivityPage from "../ActivityPage/ActivityPage";
import ExercisePage from "../ExercisePage/ExercisePage";
import NutritionPage from "../NutritionPage/NutritionPage";
import SleepPage from "../SleepPage/SleepPage";

function App() {
  const [navbar, setNavbar] = useState(); // State hook to manage navbar state (whether to show sign out or not)
  const [user, setUser] = useState({ // State hook to manage user data
    firstname: "",
    lastname: "",
    emailaddress: "",
    username: "",
    password: "",
  });
  const [userInfo, setUserInfo] = useState({
    id: "",
    email: "",
    username: "",
  }); // State hook to manage user info (for login)
   // Logging the user info (for debugging purposes
  
  

  // algorithm to decode the token payload 
  function decodeJWT(token) {
    const base64Url = token.split('.')[1]; // Extracting the payload part from the token
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Replacing URL-safe characters in the base64 payload
    const payload = JSON.parse(atob(base64)); // Decoding base64 and parsing the JSON payload
  
    return payload; // Returning the decoded payload
  }

  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieving the token from local storage
    
    if (token) {
      setNavbar(true); // Setting navbar to true (sign out)
      const {exp} = decodeJWT(token); // Decoding the token and extracting the expiration time
      const currentTime = Math.floor(Date.now() / 1000); // Getting the current time in seconds
      if (exp < currentTime) {
        localStorage.removeItem('token'); // Removing the token from local storage
        ; // Redirecting to the homepage
      }
    }
  }), [];

  const [loginUser, setLoginUser] = useState({emailaddress: "", password: ""}); // State hook for managing login user data
  console.log(user); // Logging the user data (for debugging purposes)

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar navbar={navbar} setNavbar={setNavbar} /> {/* Rendering the Navbar component */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Rendering the Home component */}
          <Route path="auth/register" element={<Register user={user} setUser={setUser} />} /> {/* Rendering the Register component */}
          <Route path="auth/login" element={<Login loginUser={loginUser} setLoginUser={setLoginUser} navbar={navbar} setNavbar={setNavbar} userInfo={userInfo} setUserInfo={setUserInfo} />} /> {/* Rendering the Login component */}
          <Route path="/secret" element={<Secret />} /> {/* Rendering the Secret component */}
          <Route path="/activity" element={<ActivityPage />}/>
          <Route path = "/exercise" element={<ExercisePage/>} />
          <Route path= "/sleep" element={<SleepPage userInfo={userInfo} setUserInfo={setUserInfo} />} />
          <Route path= "/nutrition" element={<NutritionPage/>}/>
          <Route />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
