import React, { Component } from "react";
import "./App.css";
import search from "./search";

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      desc: "",
      icon: "",
      loading: true,
      country: "",
      city: ""
    };
  }
  componentDidMount() {
    var target = { API: "weatherapp", keyword: "Taipei" };

    search(target).then(responseData => {
      if (responseData.cod === 200) {
        this.setState({
          temp: responseData.main.temp,
          desc: responseData.weather[0].description,
          icon: responseData.weather[0].icon,
          loading: false,
          country: responseData.sys.country,
          city: responseData.name
        });
      } else {
        console.log(responseData);
      }
    });
  }

  render() {
    var imgSrc;
    if (this.state.icon !== "") {
      imgSrc = "http://openweathermap.org/img/w/" + this.state.icon + ".png";
    }

    return (
      <div className="App">
        <div>
          <p>Country:{this.state.country}</p>
          <p>Temperature: {this.state.temp}</p>
          <p>Description: {this.state.desc}</p>
          <img src={imgSrc} alt="Weather icon" />
        </div>
      </div>
    );
  }
}

export default WeatherApp;
