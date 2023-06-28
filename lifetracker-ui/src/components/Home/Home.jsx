import React from "react";
import "./Home.css"; 
import logobanner from "../../../public/images/lifetracker-banner.png";
import runner from "../../../public/images/runner.jpg"

export default function Home() {
    return (
        <div className="home-container">
            <div className="banner-container">
                <section>
                        <img src= {logobanner}></img>
                </section>

                <section>
                    <img className= "runner-img" src={runner}></img>

                </section>
                
            </div>
            <div className="categories-container">
                <section>
                    <h3>Activity 1</h3>
                </section>
                <section>
                    <h3>Activity 1</h3>
                </section>
                <section>
                    <h3>Activity 1</h3>
                </section>

            </div>

        </div>
    )
}