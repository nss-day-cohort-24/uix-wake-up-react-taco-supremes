import React, { Component } from 'react';
import logo from './logo.svg';
import News from './components/news';
import './App.css';
import Weather from './components/Weather';
import DateTimeDisplay from './components/Date';
import List from './components/List';
import base from './config/constants';
import AddItem from './components/AddItem';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list: [],
        loading: true,
        printedList: true
      };
    }
  
    componentDidMount() {
       base.syncState('items', {
        context: this,
        state: 'list',
        asArray: true,
        then() {
          this.setState({ loading: false });
        }
      });
    }
  
    componentWillUpdate(nextProps, nextState){
      //automatically passes in nextprops and nextState
      console.log("something changed");
      console.log("nextProps:", nextProps, "nextState", nextState);
      //example use: set props in local storage
    }
  
    handleAddItem(newItem) {
      this.setState({
        list: this.state.list.concat([newItem])
      });
    }
    handleRemoveItem(index) {
      //the react way: Make a copy of state, modify, and then set new state
      var newList = this.state.list;
      newList.splice(index, 1);
      this.setState({
        list: newList
      });
      //Using firebase, must update via setState for the sync to work
      //if deleting from array (not attached to FB, can use delete)
    }
  
    handleEditItem(index){
      // edit the list item
      var newList = this.state.list;
      
      this.setState({
        list: newList,
        editingList: true,
        printedList: false,
        itemToEdit: index
      });
      
  
    }
  
    handleSubmitItem(index){
  
      console.log("Submitted for button ", index);
    }
    render() {
  
      const{printedList, editingList} = this.state;
  
      if(printedList){ // Printed list
        return (
            <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-offset-3">
                <div className="col-sm-12">
                  <h3 className="text-center"> My Todo List </h3>
                  <AddItem add={this.handleAddItem.bind(this)} />
                  {this.state.loading === true
                    ? <h3> LOADING... </h3>
                    : <List
                        items={this.state.list}
                        remove={this.handleRemoveItem.bind(this)}
                        edit={this.handleEditItem.bind(this)}
                        submit={this.handleSubmitItem}
                        itemToIndex={this.state.itemToEdit}
                      />}
                </div>
              </div>
            </div>
          </div>
          );
        }
  
        else if (editingList){
          console.log("EDITING LIST IS ON.");
          return (
            <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-offset-3">
                <div className="col-sm-12">
                  <h3 className="text-center"> My Todo List </h3>
                  <AddItem add={this.handleAddItem.bind(this)} />
                  {this.state.loading === true
                    ? <h3> LOADING... </h3>
                    : <List
                        items={this.state.list}
                        remove={this.handleRemoveItem.bind(this)}
                        edit={this.handleEditItem.bind(this)}
                        listType={this.state.editingList}
                        itemToIndex={this.state.itemToEdit}
                        submit={this.handleSubmitItem.bind(this)}
                      />}
                </div>
              </div>
            </div>
          </div>
          );
        }
      }
  }
  
  
  export default App;