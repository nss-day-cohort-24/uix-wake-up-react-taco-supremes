import React from 'react';
import ReactDOM from 'react-dom';

class EditItem extends React.Component{
  handleSubmit(e){
    if(e.keyCode === 13){
      console.log("EditItem handleSubmit() --> ", ReactDOM.findDOMNode(this.refs.editItem).value);
      
      this.props.edit(ReactDOM.findDOMNode(this.refs.editItem).value);
      ReactDOM.findDOMNode(this.refs.editItem).value = '';
    }
  }
  render(){
    return (
      <div className="col-sm-12 text-center">
        <input
          type="text"
          ref="editItem"
          className="form-control"
          placeholder="EditItem"
          onKeyDown={this.handleSubmit.bind(this)} />
      </div>

    )
  }
}

export default EditItem;