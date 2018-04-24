import React from 'react';
import ReactDOM from 'react-dom';
import {rebase} from '../config/constants';

class EditItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      list: [],
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

 }

 componentWillUpdate(nextProps, nextState){
  console.log ("EditItem.js - Updated. UID shows this:", this.props.uid);
}

  handleSubmit(e){
    if(e.keyCode === 13){
      //console.log("EditItem handleSubmit() --> ", ReactDOM.findDOMNode(this.refs.items).value);
      
      console.log("UID in EditItem", this.props.uid);
      console.log("handleSubmit edit, what's this:", this.refs.editItem);
      console.log("So this is that ReactDOM thing", ReactDOM.findDOMNode(this.refs.editItem).value);
      let data =  {
        index: this.props.itemToIndex,
        collection: this.props.item,
        item: ReactDOM.findDOMNode(this.refs.editItem).value,
        uid: this.props.uid

      };
      
      console.log("Data, does it hold uid?", data);
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