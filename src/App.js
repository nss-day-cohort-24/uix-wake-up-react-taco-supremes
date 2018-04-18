import React, { Component } from 'react';
import logo from './logo.svg';
import News from './components/news.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Taco Supremes</h1>
        </header>
        <div class="row">
          <News />
        </div>
      </div>
    );
  }
}

export default App;
