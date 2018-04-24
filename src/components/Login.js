import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { loginWithGoogle, logout  } from '../config/auth';
import {rebase} from '../config/constants';
 

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authed: false,
            loading: true,
            uid: null,
            zip: '',
            displayNone: null,
            display: "none"
          }

          this.authenticate = this.authenticate.bind(this);
          this.logoutApp = this.logoutApp.bind(this);

    }

    componentDidMount () {
        console.log("login mounted");
        this.authListener = rebase.initializedApp.auth().onAuthStateChanged((user) =>{
      
          if (user) {
            this.setState({
              authed: true,
              loading: false,
              uid: user.uid,
              displayNone: "none",
              display: null
            });
            
            console.log("Props updated?", this.props.uid);
            //get DB stuff for user here
          } else {
            this.setState({
              authed: false,
              loading: false,
              uid: null,
            })
          }
        })
      }

      componentWillUnmount () {
        console.log("login will unmount");
        this.authListener();
      }

      authenticate(){
        loginWithGoogle()
        .then(() => {
            this.setState({
                authed: true
            });
            
            console.log("Authenticated: ", this);
        });
      }

      logoutApp(){
        logout()
        .then(()=>{
          this.setState({
            authed: false,
            loading: false,
            uid: null,
            displayNone: null,
            display: "none"
        });
        console.log('logged out state: ', this);
      });
    }

    render() {
      const{displayNone}= this.state;
        return(
            <div className="logIn">
                <button style={{display: this.state.displayNone}} type="button" onClick={() => this.authenticate('google')} className="btn btn-outline-light btn-lg">G Login</button>
                {/* <p style={{display: this.state.display}}>Hello, {this.props.uid.name}! </p> */}
                <button style={{display: this.state.display}} type="button" onClick={() => this.logoutApp()} className="btn btn-outline-light btn-lg">G Logout</button>
            </div>
        )
    }
} 

export default Login;