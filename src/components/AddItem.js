import React from 'react';
import ReactDOM from 'react-dom';

class AddItem extends React.Component{
  handleSubmit(e){
    if(e.keyCode === 13){
      console.log("What is this: ", ReactDOM.findDOMNode(this.refs.newItem).value);
      this.props.add(ReactDOM.findDOMNode(this.refs.newItem).value);
      ReactDOM.findDOMNode(this.refs.newItem).value = '';
    }
  }
  render(){
    return (
      <div className="col-sm-12 text-center">
        <input
          type="text"
          ref="newItem"
          className="form-control"
          placeholder="New Item"
          onKeyDown={this.handleSubmit.bind(this)} />
      </div>

    )
  }
}

export default AddItem;