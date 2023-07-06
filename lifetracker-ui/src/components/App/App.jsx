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

import Login from "../Login/Login";
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
  

   const [decodedToken, setDecodedToken] = useState();

   useEffect(() => {
     const token = localStorage.getItem('token');
     console.log("token: ", token);
   
     if (!decodedToken) {
       axios.post('http://localhost:3001/auth/decodedtoken', {
         token: token
       })
       .then(response => {
         console.log('Decoded token retrieved successfully:', response.data);
         console.log('Decoded token value:', response.data.decodedToken);
         setDecodedToken(response.data.decodedToken.exp);
       })
       .catch(error => {
         console.error('Error retrieving decoded token:', error);
       });
     }
   
   }, [decodedToken]);
   
   useEffect(() => {
     console.log("decodedToken:", decodedToken);
     if (decodedToken) {
       setNavbar(true); // Setting navbar to true (sign out)
       const currentTime = Math.floor(Date.now() / 1000); // Getting the current time in seconds
       if (decodedToken < currentTime) {
         localStorage.removeItem('token'); // Removing the token from local storage
         // Redirecting to the homepage
       }
     }
   }, [decodedToken, setNavbar]);
   
    
   

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
          <Route path= "/sleep" element={<SleepPage userInfo={userInfo} setUserInfo={setUserInfo} setNavbar={setNavbar} navbar={navbar} />} />
          <Route path= "/nutrition" element={<NutritionPage/>}/>
          <Route />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
