import React from "react";
import "./SleepPage.css";
import { useState } from "react";
import axios from "axios";
import SleepData from "./SleepData";


export default function SleepPage({userInfo, setUserInfo, navbar, setNavbar}) {
    const [ sleepUser, setSleepUser ] = useState({starttime: "", endtime: ""});
   
    const userId = localStorage.getItem('userId');
    const [ sleepState, setSleepState ] = useState();
  

    

    function handleSubmit(event) {
        event.preventDefault();
        
    
        axios.post('http://localhost:3001/auth/sleep', {
            userId: userId,
            sleepdata: sleepUser
        })
          .then(response => {
            console.log('Sleep data added successfully:', response.data);
            setSleepUser(response.data);
            setSleepState(true);
            // Handle successful login
          })
          .catch(error => {
            console.error('Error logging in user:', error);
            // Handle error during login
          });
    }

    function handleChange(event) {
        setSleepUser({
          ...sleepUser,
          [event.target.name]: event.target.value
        });
      }

      console.log("this is the navbar", navbar);
  return (

      <>
        {navbar ? (
          <div className="sleepForm-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="starttime">
                <p>Start Time</p>
                <input
                  type="datetime-local"
                  name="starttime"
                  value={sleepUser.starttime}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="endtime">
                <p>End Time</p>
                <input
                  type="datetime-local"
                  name="endtime"
                  value={sleepUser.endtime}
                  onChange={handleChange}
                  required
                />
              </label>
              <button className="sleep-submit" type="submit">Add Sleep</button>
            </form>
            <SleepData sleepState={sleepState} setSleepState={setSleepState} />
          </div>
        ) : (
          <h1>Sign in to view Sleep data</h1>
        )}
       
      </>
    );
    

    
}
