import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Seattle</h1>
      <ul>
        <li className="dayTime">Friday 12:00</li>
        <li className="skyStatus">Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">69</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li className="precipitation">Precipitation: 69%</li>
            <li className="humidity"> Humidity: 100%</li>
            <li className="windSpeed">Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
