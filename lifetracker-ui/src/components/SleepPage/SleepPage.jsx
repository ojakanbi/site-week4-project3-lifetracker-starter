import React from "react";
import "./SleepPage.css";
import { useState } from "react";
import axios from "axios";
import SleepData from "./SleepData";
import { useEffect } from "react";


export default function SleepPage({userInfo, setUserInfo, navbar, setNavbar}) {
    const [ sleepUser, setSleepUser ] = useState({starttime: "", endtime: ""});
   
    const userId = localStorage.getItem('userId');
    const [ sleepState, setSleepState ] = useState();
    const id = localStorage.getItem('userId');
  const [sleepData, setSleepData] = useState([]);
  

    

    function handleSubmit(event) {
        event.preventDefault();
        
    
        axios.post('https://lifetracker-backend-oj.onrender.com/auth/sleep', {
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

    useEffect(() => {
       {
        axios.post('https://lifetracker-backend-oj.onrender.com/auth/sleepdata', { id: id })
          .then(response => {
            console.log('Sleep data retrieved successfully:', response.data);
            setSleepData(response.data.sleepdata);
          })
          .catch(error => {
            console.error('Error retrieving sleep data:', error);
          });
  
        setSleepState(false);
      }
    }, [sleepState, setSleepState, id]);
  

    function handleChange(event) {
        setSleepUser({
          ...sleepUser,
          [event.target.name]: event.target.value
        });
      }

      console.log("this is the navbar", navbar);
      const firstname = localStorage.getItem("firstname");
  return (

      <>
       <h1>{firstname} Sleep Page!</h1>
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
            <SleepData sleepState={sleepState} setSleepState={setSleepState} setSleepData={setSleepData} sleepData={sleepData} />
          </div>
        ) : (
          <h1>Sign in to view Sleep data</h1>
        )}
       
      </>
    );
    

    
}
