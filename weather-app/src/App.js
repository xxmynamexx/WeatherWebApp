import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import WeatherCard  from './components/WeatherCard/WeatherCard.js';

class App extends Component {
  // componentDidMount(){
  //   fetch('http://api.openweathermap.org/data/2.5/forecast?q=vancouver&APPID=01cfc6c2e6ed975cd2864678e71e55e2').then((res)=>{
  //     console.log('res:', res.json())
  //   })
  // }
  render() {
    return (
      <div className="App">
      <header className="header">Weather App</header>
        <div style={{marginTop: '0px', marginBottom: '10px'}}>Application that gives the current weather forecast of a city</div>
        <Button variant="outline-primary">Primary</Button>
        <div className="weatherCardContainer">
          <WeatherCard dayName={'Mon'} highTemp={99} lowTemp={10}/>
        </div>
      </div>
    );
  }
}

export default App;
