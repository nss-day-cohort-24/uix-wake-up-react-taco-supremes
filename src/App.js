import React, { Component } from 'react';
import logo from './logo.svg';
import News from './components/news';
import './App.css';
import Weather from './components/Weather';
import DateTimeDisplay from './components/Date';
import List from './components/List';
import base from './config/constants';
import AddItem from './components/AddItem';
// import base from './config/constants';
// import {Button} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Taco Supremes</h1>
        </header>
        <div className="container">
          <div className="row">
            <Weather/> 
            <DateTimeDisplay/>
          </div>
          <div className="row">
            <News />
          </div>
        </div>
      </div>
    );
  }
}



export default App;
