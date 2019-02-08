import React, { Component } from 'react'
import Proptypes from 'prop-types'
import './style.css'
import '../../common/css/weather-icons.css'

class WeatherCard extends Component {
    render(){
        const { dayName, highTemp, lowTemp } = this.props
        return(
        <div className='weatherCard'>
            <div className="dayName">{dayName}</div>
            <div className="iconContainer">
                <i className="wi wi-day-sunny"></i>
            </div>
            <div className="temperature">
                <div>{highTemp}&#176;</div>
                <div>{lowTemp}&#176;</div>
            </div>
        </div>
        )
    }
}

WeatherCard.Proptypes = {
    dayName: Proptypes.string,
    highTemp: Proptypes.number,
    lowTemp: Proptypes.number
}

export default WeatherCard