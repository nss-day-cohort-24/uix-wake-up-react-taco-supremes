import React from 'react';
import ReactDOM from 'react-dom';

class AddItem extends React.Component{
  handleSubmit(e){
    if(e.keyCode === 13){

      this.props.add(ReactDOM.findDOMNode(this.refs.newItem).value);
      ReactDOM.findDOMNode(this.refs.newItem).value = '';
    }
  }
  render(){
    return (
      <div className="col-sm-12">
        <input
          type="text"
          ref="newItem"
          className="form-control mb-3"
          placeholder="New Task"
          onKeyDown={this.handleSubmit.bind(this)} />
      </div>

    )
  }
}

export default AddItem;