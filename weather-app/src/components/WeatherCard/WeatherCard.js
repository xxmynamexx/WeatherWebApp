import React, { Component } from 'react'
import './style.css'
import '../../common/css/weather-icons.css'

class WeatherCard extends Component {
    render(){
        return(
        <div className='weatherCard'>
            <i className="wi wi-day-sunny"></i>
        </div>
        )
    }
}

export default WeatherCard