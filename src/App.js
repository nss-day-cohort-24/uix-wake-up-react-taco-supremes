import React, { Component } from 'react';
import News from './components/news';
import './App.css';
import Weather from './components/Weather';
// import DateTimeDisplay from './components/Date';
import List from './components/List';
import base from './config/constants';
import AddItem from './components/AddItem';
import WeatherHourly from './components/WeatherHourly';
import Quote from './components/Quote';
import ToDoList from "./components/ToDoList"
// import base from './config/constants';
// import {Button} from 'reactstrap';

class App extends Component {
  render() {
    return (
    <div id="masterContainer">
      <div className="container">
        <div className = "row" id="header">
          <div className = "col mt-4">
            <h2 className ="goodMorning pl-5">Good Morning! </h2>
          </div>
          <div className = 'col mb-5'>
            <Weather/> 
          </div>
         </div>
      </div>

          

        <div  id="newsDiv" className = "container">
          <div className = "row">

            <div className = "col-5 toDo">
                <ToDoList />
            </div>
            <div id="news" className = " pl-5 pr-0 col-6">
            <h3 className="text-center bodyHeader">NEWS</h3>
              <News />
            </div>

          </div>
        </div>
        <footer>
          <div className="row">
            <Quote />
          </div>
        </footer>
      </div>
    );
  }
}


export default App;
