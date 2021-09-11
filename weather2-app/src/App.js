import React from 'react';

import './App.css';

import 'weather-icons/css/weather-icons.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './app_component/weather.component';



const API_key = 'dce4d18158cab8afa16188e197c42ecf';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: '',
      error: false
    };
    this.getWeather();
  }

  calCelsius(temp){
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  //**use api data asyncronisly, also use api key to access secure resources, concatinate string */}
  getWeather = async () =>{
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`
    );

    //*convert api data to JSOn format
    const response = await api_call.json();

    console.log(response);

    this.setState({
      city:response.name,
      country:response.sys.country,
      celsius:this.calCelsius(response.main.temp)
    });
  };


  render(){
    return (
      <div className="App">
      <Weather
      city={this.state.city}
      country={this.state.country}
      temp_celsius={this.state.celsius}
      temp_max={this.state.temp_max}
      temp_min={this.state.temp_min}
      description={this.state.description}
      />
      </div>
    );
  }
}


export default App;
