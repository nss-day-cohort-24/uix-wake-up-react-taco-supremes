import React from 'react';
import ReactDOM from 'react-dom';
import AddItem from './AddItem';
import base from '../config/constants';
import EditItem from './EditItem';


class List extends React.Component{

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



  handleEditItem(item, index){
   
    console.log("handleEditItem item:", item, "index: ", index, "this:", this);
    
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
  
           
           <input
          type="text"
          ref="editItem"
          className="form-control"
          placeholder="EditItem"
          onKeyDown={this.props.edit.bind(item, index)}
              />

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