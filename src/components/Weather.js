import React, {Component} from 'react';
import './Weather.css';
import base from '../config/constants';
import Login from './Login';


class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weatherLoaded: true,
            showResult: false,
            error: null,
            temperature : 69,
            city: 'Nashville',
            zip: 37204,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getWeather = this.getWeather.bind(this);
    }

    componentDidMount(){
        this.getWeather();
    }

    handleChange(event) {
        this.setState({
            zip: event.target.value,
            value: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.zip.length === 5){
        this.getWeather();
        }else{
            alert('area code must be a 5 digit number');
        }
        // } componentDidMount() {this.getWeather()
    }

    getWeather() {
        console.log('getWeather');
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip},us&appid=7c6212572dc00aca5008de2575471183&units=imperial`)
            .then(res => res.json())
            .then((result) => {
                console.log('result from json parse: ', result);
                this.setState({
                    weatherLoaded: true,
                    value: '',
                     temperature: result.main.temp, 
                     city: result.name, 
                     image: result.weather.icon,
                     picture:`http://openweathermap.org/img/w/${result.weather[0].icon}.png`
                    });
            }, (error) => {
                console.log('get weather error: ', error);
                this.setState({
                    weatherLoaded: false
                })
            });
        (error) => {
            console.log('get weather error: ', error);
        }
    }

    render() {
        const{value,weatherLoaded} = this.state;

        if(weatherLoaded){
        return (

            <div className="weather container">
                <div className=" row temp">
                    <div className='col-lg'>
                        <h5 className = 'temp mt-2 mb-0'>{this.state.temperature.toFixed('0') + '' + '\xB0'}</h5>
                        <img width={100} height={100} src= {this.state.picture}/>
                        <h5 className='city mb-2'>{ "in" + ' ' + this.state.city}</h5>
                    </div>
                    <div className='col-lg'>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <input
                            className="weather-input"
                            value={value}
                            type="text"
                            placeholder="  Zip-Code" onChange={this.handleChange} >
                            </input>
                        </form>
                     </div>
                </div>
            </div>

        )
    }

}
}
export default Weather;