import axios from "axios";
import { useEffect, useState } from "react";

import "./SleepPage.css";

export default function SleepData({ sleepState, setSleepState }) {
  const id = localStorage.getItem('userId');
  const [sleepData, setSleepData] = useState([]);

  useEffect(() => {
    if (sleepState) {
      axios.post('http://localhost:3001/auth/sleepdata', { id: id })
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

  function formatDate(dateTime) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDateTime = new Date(dateTime).toLocaleDateString(undefined, options);
    return formattedDateTime;
  }
  

  return (
    <div className="sleep-wrapper">
      <h1>Sleep Log</h1>
      <div className="sleepData-container">
        
        {sleepData.sort((a,b) => b.id - a.id).map((sleep, index) => (
          <div className="sleepData-item" key={index}>
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
