import React from 'react';
import '../App.css';
import List from './List';
import {rebase} from '../config/constants';
import AddItem from './AddItem';

class ToDoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list: [],
        loading: true,
        printedList: true,
        editingList: false,
        uid: this.props.uid
      };
    }
  
    componentDidMount() {
       rebase.syncState('items', {
        context: this,
        state: 'list',
        asArray: true,
        then() {
          this.setState({ loading: false, uid: this.props.uid });
        }
      });
    }
  
    componentWillUpdate(nextProps, nextState){
      console.log ("ToDoList.js - Updated. This, in ToDoList.js", this.props.uid);
      
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
    handleSubmitItem(index){


      console.log("Whatever");
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
  
    render() {
  
      const{printedList, editingList} = this.state;
  
      if(printedList){ // Printed list
        return (
            <div className="container">
            <div className="row">
                  <h3 className="text-center"> My Todo List </h3>
                  <AddItem add={this.handleAddItem.bind(this)} />
                  {this.state.loading === true
                    ? <h3> LOADING... </h3>
                    : <List
                        items={this.state.list}
                        remove={this.handleRemoveItem.bind(this)}
                        edit={this.handleEditItem.bind(this)}
                        itemToIndex={this.state.itemToEdit}
                        submit ={this.handleSubmitItem.bind(this)}
                        uid = {this.state.uid}
                      />}
            </div>
          </div>
          );
        }
  
        else if (editingList){
          return (
            <div className="container">
            <div className="row">
                  <h3 className="text-center"> My Todo List </h3>
                  <AddItem add={this.handleAddItem.bind(this)} />
                  {this.state.loading === true
                    ? <p> LOADING... </p>
                    : <List
                        items={this.state.list}
                        remove={this.handleRemoveItem.bind(this)}
                        edit={this.handleEditItem.bind(this)}
                        listType={this.state.editingList}
                        itemToIndex={this.state.itemToEdit}
                        submit ={this.handleSubmitItem.bind(this)}
                        uid = {this.state.uid}
                      />}
            </div>
          </div>
          );
        }
      }
  }
  
  
  export default ToDoList; 