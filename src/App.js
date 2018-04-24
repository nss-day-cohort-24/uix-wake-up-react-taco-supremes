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
      <div  id="header" className="container">
        <div className = "row">
          <div className = "col-lg mt-4">
            <h2 id="goodMorning" className ="goodMorning pl-5 pt-2">Good Morning! </h2>
          </div>
          <div className = 'col-lg mb-5'>
            <Weather/> 
          </div>
         </div>
      </div>

          

        <div id="newsAndToDo"  className = "container">
          <div className = "row">

            <div className = "col toDo">
                <ToDoList />
            </div>
            <div id="newsDiv"  className = " pl-5 pr-0 col">
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
