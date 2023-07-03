import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import "./App.css";
import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Secret from "../Secret/Secret";


import axios from "axios";
import {
  BrowserRouter as Router,
  Routes, Route,
  BrowserRouter,
} from "react-router-dom";
import Register from "../Register/Register";

import { useState } from "react";
import Login from "../Login/login";



function App() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    emailaddress: "",
    username: "",
    password: "",
  });

  const [loginUser, setLoginUser] = useState({emailaddress: "", password: ""});
  console.log(user); // handling the api request to register the user

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} 
      
          />
          <Route path="auth/register" element={<Register user={user} setUser={setUser} />} />
          <Route path="auth/login" element={<Login loginUser={loginUser} setLoginUser={setLoginUser} />} />
          <Route path="/secret" element={<Secret />} />
          

        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
