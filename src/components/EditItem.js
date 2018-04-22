import React from 'react';
import ReactDOM from 'react-dom';

class EditItem extends React.Component{
  handleSubmit(e){
    if(e.keyCode === 13){
      //console.log("EditItem handleSubmit() --> ", ReactDOM.findDOMNode(this.refs.items).value);
      console.log("Props: ", this.props);
      console.log("handleSubmit edit, what's this:", this.refs.editItem);
      console.log("So this is that ReactDOM thing", ReactDOM.findDOMNode(this.refs.editItem).value);
      let data =  {
        index: this.props.itemToIndex,
        collection: this.props.item,
        item: ReactDOM.findDOMNode(this.refs.editItem).value

      };
      
      this.props.edit(data);
      ReactDOM.findDOMNode(this.refs.editItem).value = '';
    }
  }
  render(){
    return (
      <div>
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