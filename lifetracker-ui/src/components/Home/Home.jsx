import React from "react";
import "./Home.css"; 

import logo from "../../images/logo.png"
import runner from "../../images/runner.jpg"
import fitness from "../../images/fitness.jpg"
import food from "../../images/food.jpg"
import rest from "../../images/rest.jpg"
import calendar from "../../images/calendar.jpeg"


export default function Home() {
    return (
        <div className="home-container">
            <div className="banner-container">
                <section>
                        <img className = "logo-image"src= {logo}></img>
                </section>

                <section>
                    <img className= "runner-img" src={runner}></img>

                </section>
                
            </div>
            <div className="categories-container">
                <section className="category-container">
                    <h3 className="activities-header">Fitness</h3>
                    <img className="activities-img" src= {fitness}></img>
                </section>
                <section className="category-container">
                    <h3 className="activities-header" >Food</h3>
                    <img className="activities-img" src= {food}></img>
                </section>
                <section className="category-container">
                    <h3 className="activities-header" >Rest</h3>
                    <img className="activities-img" src= {rest}></img>
                </section>
                <section className="category-container">
                    <h3 className="activities-header">Planner</h3>
                    <img  className="activities-img" src= {calendar}></img>
                </section>

            </div>

        </div>
    )
}