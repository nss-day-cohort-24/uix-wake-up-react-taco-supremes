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
      <div id="header"  className="container">
        <div  className = "row">
          <div id="goodMorning" className = "col-5 text-center">
            <h2 >Good<br /> Morning! </h2>
          </div>
          <div id="weather" className=" col-5">
          <Weather/> 
          </div>
          <div id="login" className=" col-2">
              <Login />
          </div>
         </div>
      </div>

          

        <div id="newsAndToDo"  className = "container">
          <div className = "row">

            <div className = "col-5 toDo">
                <ToDoList uid={this.state.uid} />
            </div>
            <div id="newsDiv"  className = " pl-5 pr-0 col">
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
