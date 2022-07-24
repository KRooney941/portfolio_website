import React from "react";
import "./portfolio.css"
import weather from '../../images/resize.png'
import vet from '../../images/vet_app.png'

const Portfolio = () => (
  <div className="portfolio">
    <h4 >Portfolio</h4>
    <div className="weather-app">
            <h2>Weather Forcast App | Solo project</h2>
            <p>A Weather application built to help me better undertand React and APIs. Built in React with the OpenWeatherMap API and GeoDB API.</p>
            <p><a className="link" href="https://github.com/KRooney941/weather_app">Github link to the project!</a> </p>
     
    <img className="weather-app-image"
              src={weather}
              alt="weather-app"
            />
      </div>
        <div className="vet-app">
            <h2>Vet Management App | Solo project</h2>
              <p>A web application for a vet to manage both animals and vets in their practice. Built using Python, Flask, and a SQL database.</p>
              <p> <a className="link" href="https://github.com/KRooney941/Vet_management_app">Github link to the project!</a> </p>
            <img className="vet-app-image"
              src={vet}
              alt="vet-app"
            />
          </div>
        </div>
)
export default Portfolio;