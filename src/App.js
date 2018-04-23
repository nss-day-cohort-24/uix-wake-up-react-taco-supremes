import React, { Component } from 'react';
import News from './components/news';
import './App.css';
import Weather from './components/Weather';
import Quote from './components/Quote';
import ToDoList from './components/ToDoList';
import Login from './components/Login';


class App extends Component {
  render() {
    return (


    <div id="masterContainer">
      <div className="container">
        <div className = "row" id="header">
          <div className = "col-lg mt-4">
            <h2 className ="goodMorning pl-5">Good Morning! </h2>
            <Login />
          </div>
          <div className = 'col-lg mb-5'>
            <Weather/> 
          </div>
         </div>
      </div>

          

        <div   className = "container">
          <div className = "row">

            <div className = "col-5 toDo">
                <ToDoList />
            </div>
            <div id="newsDiv"  className = " pl-5 pr-0 col-6">
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
