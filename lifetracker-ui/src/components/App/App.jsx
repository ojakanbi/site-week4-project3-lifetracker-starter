import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import "./App.css";
import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes, Route,
  BrowserRouter,
} from "react-router-dom";
import Register from "../Register/Register";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    emailaddress: "",
    username: "",
    password: "",
  });
  console.log(user); // handling the api request to register the user

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} 
      
          />
          <Route path="auth/register" element={<Register user={user} setUser={setUser} />} />

        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
