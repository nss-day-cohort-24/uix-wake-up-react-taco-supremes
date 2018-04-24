import React, { Component } from 'react';
import News from './components/news';
import './App.css';
import Weather from './components/Weather';
import Quote from './components/Quote';
import ToDoList from './components/ToDoList';
import Login from './components/Login';
import { loginWithGoogle, logout  } from './config/auth';
import {rebase, googleProvider} from './config/constants';
import {saveUser} from './helpers/auth';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        authed: false,
        loading: true,
        uid: null,
        zip: '',
      }

}

componentDidMount() {
  rebase.initializedApp.auth().onAuthStateChanged((user) => {
    console.log("componentDidMount() fired");
      if (user) {
       this.setState({
          authed: true, 
          loading: false, 
          uid: user.uid,
          photo: user.photoURL,
          name: user.displayName,
          user: user
        });              
      } else {
          this.setState({authed: false, loading: false, uid: null})
      }
  })
}

loginWithGoogle = () => {
return rebase.initializedApp.auth().signInWithPopup(googleProvider)
.then((data) => {
  // Check FB for the authenticated user
  rebase.fetch(`wakeupappusers/${data.user.uid}/deets`, {
    context: this,
    then(userData){
      // if the user does not exist add them to FB
      if(Object.keys(userData).length === 0){
        saveUser(data.user);
      // otherwise, set state with the stuff from FB
      }else{
        this.setState({
          zip: userData.zip,
        })
      }
    }
  });
});
}

  render() {
    return (


    <div id="masterContainer">
      <div className="container">
        <div className = "row" id="header">
          <div className = "col-lg mt-4">
            <h2 className ="goodMorning pl-5">Good Morning! </h2>
            <Login uid ={this.state}/>
          </div>
          <div className = 'col-lg mb-5'>
            <Weather/> 
          </div>
         </div>
      </div>

          

        <div  id="newsDiv" className = "container">
          <div className = "row">

            <div className = "col-5 toDo">
                <ToDoList uid={this.state.uid} />
            </div>
            <div id="news" className = " pl-5 pr-0 col-6">
            <h3 className="text-center bodyHeader">NEWS</h3>
              <News />
            </div>

          </div>
        </div>
        <footer>
          <div className="row">
            <Quote />
          </div>
        </footer>
      </div>


    );
  }
}


export default App;
