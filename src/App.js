import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import WeatherCard  from './components/WeatherCard/WeatherCard.js';
import InputGroup from 'react-bootstrap/InputGroup'

const FormControl = Form.Control
//
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cityInput: null,
      weatherData: null,
    }
  }
  generateMessage = () => {
    if (this.state.weatherData !== null) {
      return this.state.weatherData.message
    } else {
      return ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityInput}&APPID=01cfc6c2e6ed975cd2864678e71e55e2`).then((res)=>{
       return res.json()
    }).then((res) => {
      this.setState({weatherData: res})
    })
  }
  render() {
    return (
      <div className="App">
      <header className="header">Weather App</header>
        <div style={{marginTop: '0px', marginBottom: '10px'}}>Application that gives the current weather forecast of a city</div>
        <Form style={{marginBottom: '40px'}} onSubmit={(e) => this.handleSubmit(e)}>
          <InputGroup className="mb-3">
            <FormControl
              id='cityName'
              placeholder="City name (ex. Vancouver,CA)"
              aria-label="city name"
              onChange={(e) => this.setState({cityInput: e.target.value})}
            />
            <InputGroup.Append>
              <Button type='submit'>Submit</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        <div className="weatherCardContainer">
        {this.state.weatherData !== null && this.state.weatherData.cod === 200 ? (
          <WeatherCard 
            label={`${this.state.weatherData.name}, ${this.state.weatherData.sys.country}`} 
            highTemp={this.state.weatherData.main.temp_max} 
            description={this.state.weatherData.weather[0].description}
            lowTemp={this.state.weatherData.main.temp_min} 
            weatherCode={this.state.weatherData.weather[0].id}
          />
        ) : this.generateMessage()}
        </div>
      </div>
    );
  }
}

export default App;
