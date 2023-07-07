import axios from "axios";
import { useEffect, useState } from "react";

import "./SleepPage.css";

export default function SleepData({ sleepState, setSleepState, sleepData, setSleepData }) {
  

  
  function formatDate(dateTime) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDateTime = new Date(dateTime).toLocaleDateString(undefined, options);
    return formattedDateTime;
  }
  
  function calculateHoursSlept(startDateTime, endDateTime) {
    const start = new Date(startDateTime);
    const end = new Date(endDateTime);
    const diffInMilliseconds = end - start;
    const diffInHours = diffInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours
    return diffInHours;
  }
  
  return (
    <div className="sleep-wrapper">
      <h1>Sleep Log</h1>
      <div className="sleepData-container">
        {sleepData.sort((a, b) => b.id - a.id).map((sleep, index) => (
          <div className="sleepData-item" key={index}>
            <div className="sleep-hours">
            <p>{calculateHoursSlept(sleep.start_time, sleep.end_time)}</p>
            </div>
  
            <h2>Start Time</h2>
            <p>{formatDate(sleep.start_time)}</p>
            <h2>End Time</h2>
            <p>{formatDate(sleep.end_time)}</p>
          </div>
        ))}
      </div>
    </div>
  );
  

}
