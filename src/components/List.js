import React from 'react';
import ReactDOM from 'react-dom';
import AddItem from './AddItem';
import base from '../config/constants';


class List extends React.Component{

  handleSubmit(e){
    if(e.keyCode === 13){
      console.log("What's this event:", e.target.value);
      let testArr = this.items;
      let num = this.itemToIndex;
      testArr[num] = e.target.value;
      console.log("This is now appended: ", testArr[num]);
  
    }
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
        return(
          // CONTENT GOES HERE.
          <li key={index} className="list-group-item" style={styles.listGroup}>
          <button
            className="glyphicon glyphicon-remove"
            style={styles.removeItems}
            onClick={this.props.remove.bind(null, index)}
          />
          
          <button
            className="glyphicon glyphicon-edit"
            style={styles.removeItems}
            onClick={this.props.edit.bind(item, index)}
            id= " "
            />
          <input style={styles.todoItem} placeholder={item} onKeyDown= {this.handleSubmit.bind(this.props)} refs="newItem" />
            
          <button
            className="glyphicon glypicon-submit"
            style={styles.removeItems}
            onClick = {this.props.submit.bind(item, index)}
            />
        </li>

        );
      }

      return (
        <li key={index} className="list-group-item" style={styles.listGroup}>
          <button
            className="glyphicon glyphicon-remove"
            style={styles.removeItems}
            onClick={this.props.remove.bind(null, index)}
          />
          
          <button
            className="glyphicon glyphicon-edit"
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

      <div className="col-sm-12">
        <ul className="list-group">
          {listItems}
        </ul>
      </div>
    )
  }
};

export default List;