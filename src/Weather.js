import React, {Component} from 'react';
import './Weather.css';

class Weather extends Component {
    constructor() {
        super();

        this.state = {
            weatherLoaded: false,
            showResult: false,
            error: null
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.getWeather();
        // } componentDidMount() {this.getWeather()
    }

    getWeather() {
        console.log('getWeather');
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.value},us&appid=7c6212572dc00aca5008de2575471183&units=metric`)
            .then(res => res.json())
            .then((result) => {
                this.setState({weatherLoaded: true, temperature: result.main.temp, city: result.name, image: result.weather.description, value: ''});

            }, (error) => {
                console.log('get weather error: ', error);
            });
        (error) => {
            console.log('get weather error: ', error);
        }
    }

    render() {
        return (

            <div className="weather">

                <h4>Current Weather</h4>

                <form className="form" onSubmit={this.handleSubmit}>
                    <input
                        className="weather-input"
                        value={this.state.value}
                        type="text"
                        placeholder="  Zip-Code"onChange={this.handleChange} ></input>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
                <div className="temp">
                    <h5>{this.state.city}</h5>
                    <h5>{this.state.temperature}</h5>
                    <h3>{this.state.image}</h3>
                    <img src=""/>
                </div>
            </div>

        )
    }
}
export default Weather;