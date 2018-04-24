import React from 'react';
import {rebase} from '../config/constants';
import EditItem from './EditItem';
class List extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: true,
      printedList: true,
      uid: this.props.uid,
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

    this.handleEditItem = this.handleEditItem.bind(this);
  }

  componentWillUpdate(nextProps, nextState){
    console.log ("List.js - Updated. UID shows this:", this.props.uid);
  }



  handleEditItem(item){
    console.log("item contains:", item);
    item.newList = item.collection;
    let index = item.index;
    item.newList[index] = item.item; 
    this.setState({
      list: item.newList,
      uid: this.props.uid 
    });
    console.log("Collection in handleEditItem:", item.newList, "UID", this.state.uid);
    
  }

  renderInputBox(){

    
  }
  render(){
    var styles = {
      listGroup: {
        margin: '5px 0'
      },
      removeItem: {
        fontSize: 20,
        position: "absolute",
        top: 12,
        left: 6,
        cursor: "pointer",
        color: "rgb(222, 79, 79)",
        border: "none",
        background: "none",
        padding: 0
      },
      todoItem: {
        paddingLeft: 20,
        fontSize: 17
      }
    };
    
    var listItems = this.props.items.map((item, index) => {

      if((this.props.listType === true) && (index === this.props.itemToIndex)){
        console.log("UID:", this.state.uid);
        return(
          // CONTENT GOES HERE.
          <li key={index} className="list-group-item" style={styles.listGroup}>
          <button
            className="far fa-trash-alt"
            style={styles.removeItems}
            onClick={this.props.remove.bind(null, index)}
          />
          
          <button
            className="far fa-edit"
            style={styles.removeItems}
            onClick={this.props.edit.bind(item, index)}
            id= " "
            />

          <EditItem 
            edit ={this.handleEditItem.bind(this)} 
            item={this.props.items} 
            itemToIndex ={this.props.itemToIndex} 
            onKeyDown={this.props.items}
            uid= {this.state.uid}/>
            
           
          

          <button
            className="btn btn-primary my-1"
            style={styles.removeItems}
            onClick = {this.props.submit.bind(item, index)}
            >Submit</button>
        </li>

        );
      }

      return (
        <li key={index} className="list-group-item" style={styles.listGroup}>
          <button
            className="far fa-trash-alt"
            style={styles.removeItems}
            onClick={this.props.remove.bind(null, index)}
          />
          
          <button
            className="far fa-edit"
            style={styles.removeItems}
            onClick={this.props.edit.bind(item, index)}
            id= " "
            />
          <span style={styles.todoItem}>
            {item}
          </span>
        </li>
      )
    });



    return (

      <div>
        <ul className="list-group">
          {listItems}
        </ul>
      </div>
    )
  }
};

export default List;