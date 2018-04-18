import React, { Component } from 'react';
import logo from './logo.svg';
import News from './components/news';
import './App.css';
import Weather from './components/Weather';
import DateTimeDisplay from './components/Date';
// import base from './config/constants';
// import {Button} from 'reactstrap';

<<<<<<< HEAD
=======

>>>>>>> 004c320df15298428742d85ce8ab126e64810f02
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Taco Supremes</h1>
        </header>
<<<<<<< HEAD
        <div className="container">
          <div className="row">
            <Weather/> 
            <DateTimeDisplay/>
          </div>
          <div className="row">
            <News />
          </div>
=======
       <Weather/> 
       <DateTimeDisplay/>
        <div className="row">
          <News />
>>>>>>> 004c320df15298428742d85ce8ab126e64810f02
        </div>
      </div>
    );
  }
}

export default App;
