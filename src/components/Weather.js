import React, {Component} from 'react';
import './Weather.css';
import base from '../config/constants';

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weatherLoaded: false,
            showResult: false,
            error: null,
            temperature: 69,
            city: "Nashville"
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

            <div className="weather container">
                    <div className=" row temp">
                        <h5 className = 'temp mt-2 mb-0'>{this.state.temperature}</h5>
                        {/* <h3>{this.state.image}</h3>
                        <img src=""/> */}
                    </div>
                    <div>
                        <h5 className='city mb-2'>{ "in" + ' ' + this.state.city}</h5>
                    </div>
                    <form className="form" onSubmit={this.handleSubmit}>
                    <input
                        className=" row mt-3 weather-input"
                        value={this.state.value}
                        type="text"
                        placeholder="  Zip-Code" onChange={this.handleChange} >
                    </input>
                    {/* <button className=" row btn btn-primary" type="submit">Submit</button> */}
                </form>
            </div>

        )
    }
}
export default Weather;