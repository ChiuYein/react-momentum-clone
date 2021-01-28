import React from "react";
import './Weather.css';
import Axios from 'axios';

class Weather extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            lat: null,
            lon: null,
            city: null,
            tempC: null,
            // icon: null
        };
    }

    componentDidMount = () => {
        this.getLocation();
    };

    getLocation = () => {
        const locationApi = "http://ip-api.com/json"
        Axios
         .get(locationApi)
         .then(res => {
             console.log("IP success: ", res);
             this.setState(
                 {
                    lat: res.data.lat,
                    lon: res.data.lon,
                    city: res.data.city
                },
                () => this.getWeather()   
             );
         })
         .catch(err => console.log(err));
    };

    getWeather = () => {
        const api_key = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    
        Axios.get(api_key)
          .then(res => {
              console.log("Weather: ", res.data);
              const tempC = Math.floor(res.data.main.temp);
            //   const icon = res.data.weather[0].icon
              this.setState({
                  tempC,
                //   icon
              });
          })
          .catch(err => console.log(err));
    }

    render() {
        return(
            <div className="weather-container">
                <div className="weather-temp">
                    {this.state.tempC}°C
                </div>
                <div>
                    {/* <img className="weather-icon" src="{`http://openweathermap.org/img/w/${icon}.png`}" alt="weather icon"/> */}
                </div>
                <p className="weather-city">{this.state.city}</p>
            </div>
        )
    }
}

export default Weather