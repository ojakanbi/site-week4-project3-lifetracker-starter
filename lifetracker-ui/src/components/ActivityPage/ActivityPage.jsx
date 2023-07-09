import React from "react";
import "./ActivityPage.css";

export default function ActivityPage({ navbar }) {
  return (
    <>
      {navbar ? (
        <div className="activityPage-container">
          <div className="activityContent-container">
            <div className="activityHeader">
              <h1>Activity</h1>
              <div className="activityHeader-right">
                <button className="activityButton-e" onClick={() => window.location="/exercise"}>Add Exercise</button>
                <button className="activityButton-n" onClick={() => window.location="/sleep"}>Log Sleep</button>
                <button className="activityButton-s" onClick={() => window.location="/nutrition"}>Record Nutrition</button>
              </div>
            </div>
            <div className="activityFeed-container">
              <div className="activityFeed-item">
                <div className="activityFeed-item-left">
                  <h2 className="cardHeader">Total Exercise Minutes</h2>
                </div>
                <div className="mainStat">
                  <h2>0</h2>
                  <p>-2.2</p>
                  
                </div>
              </div>
              <div className="activityFeed-item">
                <div className="activityFeed-item-left">
                  <h2 className="cardHeader">Average Hours of Sleep</h2>
                </div>
                <div className="mainStat">
                  <h2>0</h2>
                  <p>+2.1</p>

                </div>
              </div>
              <div className="activityFeed-item">
                <div className="activityFeed-item-left">
                  <h2 className="cardHeader">Average Daily Calories</h2>
                </div>
                <div className="mainStat">
                  <h2>0</h2>
                  <p>-2.5</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Sign in to view Activity data</h1>
        </div>
      )}
    </>
  );
}
