import React, { Component } from 'react'
import Proptypes from 'prop-types'
import './style.css'
import '../../common/css/weather-icons.css'
import '../../common/css/weather-icons.min.css'
import '../../common/css/weather-icons-wind.css'
import '../../common/css/weather-icons-wind.min.css'

class WeatherCard extends Component {

    kelvinToCelsius = (kelvins) => {
        return (kelvins - 273.15).toFixed(1)
    }

    getIconName = (weatherCode) => {
        switch(weatherCode){
            case 201:
                return 'wi-storm-showers'
            case 202:
                return 'wi-storm-showers'
            case 210:
                return 'wi-storm-showers'
            case 211:
                return 'wi-thunderstorm'
            case 212:
                return 'wi-thunderstorm'
            case 221:
                return 'wi-thunderstorm'
            case 230:
                return 'wi-thunderstorm'
            case 231:
                return 'wi-thunderstorm'
            case 232:
                return 'wi-thunderstorm'
            case 300:
                return 'wi-sprinkle'
            case 301:
                return 'wi-sprinkle'
            case 302:
                return 'wi-sprinkle'
            case 310:
                return 'wi-sprinkle'
            case 311:
                return 'wi-sprinkle'
            case 312:
                return 'wi-sprinkle'
            case 313:
                return 'wi-sprinkle'
            case 314:
                return 'wi-sprinkle'
            case 321:
                return 'wi-sprinkle'
            case 500:
                return 'wi-rain'
            case 501:
                return 'wi-rain'
            case 502:
                return 'wi-rain'
            case 503:
                return 'wi-rain'
            case 504:
                return 'wi-rain'
            case 511:
                return 'wi-rain'
            case 520:
                return 'wi-rain'
            case 521:
                return 'wi-rain'
            case 522:
                return 'wi-rain'
            case 531:
                return 'wi-rain'
            case 600:
                return 'wi-snow'
            case 601:
                return 'wi-snow'
            case 602:
                return 'wi-snow'
            case 611:
                return 'wi-snow'
            case 612:
                return 'wi-snow'
            case 615:
                return 'wi-snow'
            case 616:
                return 'wi-snow'
            case 620:
                return 'wi-snow'
            case 621:
                return 'wi-snow'
            case 622:
                return 'wi-snow'
            case 701:
                return 'wi-fog'
            case 711:
                return 'wi-smoke'
            case 721:
                return 'wi-day-haze'
            case 731:
                return 'wi-dust'
            case 741:
                return 'wi-fog'
            case 751:
                return 'wi-sandstorm'
            case 761:
                return 'wi-dust'
            case 762:
                return 'wi-dust' 
            case 771:
                return 'wi-windy'
            case 781:
                return 'wi-tornado' 
            case 800:
                return 'wi-day-sunny'
            case 801:
                return 'wi-cloud'
            case 802:
                return 'wi-cloudy' 
            case 803:
                return 'wi-cloudy'
            case 804:
                return 'wi-cloudy'    
            default:
                return ''
        }
    }

    render(){
        const { label, highTemp, lowTemp, weatherCode, description } = this.props
        return(
        <div className='weatherCard'>
            <div className="dayName">{label}</div>
            <div className="iconContainer">
                <i className={`wi ${this.getIconName(weatherCode)}`}></i>
            </div>
            <div className="description">
                {description}
            </div>
            <div className="temperature">
                <div>{this.kelvinToCelsius(highTemp)}&#176;C</div>
                <div>{this.kelvinToCelsius(lowTemp)}&#176;C</div>
            </div>
        </div>
        )
    }
}

WeatherCard.Proptypes = {
    weatherCode: Proptypes.number,
    label: Proptypes.string,
    description: Proptypes.string,
    highTemp: Proptypes.number,
    lowTemp: Proptypes.number
}

export default WeatherCard